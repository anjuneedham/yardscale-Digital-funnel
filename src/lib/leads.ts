import "server-only";

import { getSupabaseClient } from "./supabase";
import { forwardSubmission } from "./forwarder";
import {
  addToAudience,
  confirmApplication,
  notifyApplication,
  welcomeSubscriber,
} from "./email";

/**
 * The lead pipeline. Every form on the site ends here.
 *
 * Each submission is fanned out to whichever destinations are configured:
 *   1. Supabase      — the permanent record (subscribers / applications tables)
 *   2. Resend        — notification to Andrew, confirmation to the visitor
 *   3. Webhook       — optional CRM / Zapier / Slack forwarding
 *
 * A submission counts as received when at least one destination accepted it.
 * If none are configured (local development), it is accepted and logged. If
 * destinations are configured and every one fails, the visitor is told it
 * did not go through — a lead is never silently dropped.
 */

type Context = { platform: string; attribution: unknown; path: string };

/** Pulls the attribution block the client attaches to every submission. */
export function readContext(body: Record<string, unknown>): Context {
  const context = (body.context ?? {}) as Record<string, unknown>;
  const attribution = (context.attribution ?? null) as Record<string, unknown> | null;
  const platform = typeof attribution?.platform === "string" ? attribution.platform.slice(0, 60) : "";
  const path = typeof context.path === "string" ? context.path.slice(0, 200) : "";
  // Cap the stored blob so a hostile client cannot write megabytes of JSON.
  const safe = attribution && JSON.stringify(attribution).length <= 4000 ? attribution : null;
  return { platform, attribution: safe, path };
}

const configured = () => ({
  db: Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
      (process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY),
  ),
  email: Boolean(process.env.RESEND_API_KEY),
  webhook: (kind: "subscriber" | "application") =>
    Boolean(
      process.env[kind === "subscriber" ? "SUBSCRIBER_WEBHOOK_URL" : "APPLICATION_WEBHOOK_URL"] ||
        process.env.FORM_WEBHOOK_URL,
    ),
});

export type LeadResult = { ok: boolean };

export async function recordSubscriber(input: {
  email: string;
  name: string;
  origin: string;
  context: Context;
}): Promise<LeadResult> {
  const has = configured();
  const email = input.email.toLowerCase();

  const db = (async () => {
    const supabase = getSupabaseClient();
    if (!supabase) return false;
    const { error } = await supabase.from("subscribers").upsert(
      {
        email,
        name: input.name || null,
        origin: input.origin || null,
        platform: input.context.platform || null,
        attribution: input.context.attribution,
      },
      // A repeat signup keeps the original row and its first-touch attribution.
      { onConflict: "email", ignoreDuplicates: true },
    );
    if (error) console.error("[yardscale] subscriber insert failed", error);
    return !error;
  })();

  const [stored, inAudience, welcomed, forwarded] = await Promise.all([
    db,
    addToAudience({ name: input.name, email }),
    welcomeSubscriber({ name: input.name, email }),
    forwardSubmission("subscriber", {
      email,
      name: input.name,
      origin: input.origin,
      platform: input.context.platform,
      attribution: input.context.attribution,
    }),
  ]);

  const anyConfigured = has.db || has.email || has.webhook("subscriber");
  if (!anyConfigured) {
    console.info("[yardscale] subscriber received (no destination configured)", { origin: input.origin });
    return { ok: true };
  }
  return { ok: stored || inAudience || welcomed.delivered || forwarded.delivered };
}

export async function recordApplication(input: {
  kind: "coaching" | "partnership" | "contact";
  name: string;
  email: string;
  stage: string;
  /** Ordered, labelled answers — used for both storage and the notification email. */
  answers: { key: string; label: string; value: string }[];
  context: Context;
}): Promise<LeadResult> {
  const has = configured();
  const answersObject = Object.fromEntries(input.answers.map((a) => [a.key, a.value]));

  const db = (async () => {
    const supabase = getSupabaseClient();
    if (!supabase) return false;
    const { error } = await supabase.from("applications").insert({
      kind: input.kind,
      name: input.name,
      email: input.email.toLowerCase(),
      stage: input.stage || null,
      answers: answersObject,
      platform: input.context.platform || null,
      attribution: input.context.attribution,
    });
    if (error) console.error("[yardscale] application insert failed", error);
    return !error;
  })();

  const kindLabel =
    input.kind === "coaching"
      ? "coaching application"
      : input.kind === "partnership"
        ? "partnership application"
        : "contact message";

  const [stored, notified, forwarded] = await Promise.all([
    db,
    notifyApplication({
      kind: kindLabel,
      name: input.name,
      email: input.email,
      platform: input.context.platform,
      answers: input.answers,
    }),
    forwardSubmission("application", {
      applicationKind: input.kind,
      name: input.name,
      email: input.email,
      stage: input.stage,
      answers: answersObject,
      platform: input.context.platform,
      attribution: input.context.attribution,
    }),
  ]);

  const anyConfigured = has.db || has.email || has.webhook("application");
  if (!anyConfigured) {
    console.info("[yardscale] application received (no destination configured)", { kind: input.kind });
    return { ok: true };
  }

  const ok = stored || notified.delivered || forwarded.delivered;
  // Only confirm to the applicant once we know we actually hold the application.
  if (ok && input.kind !== "contact") {
    await confirmApplication({ kind: input.kind, name: input.name, email: input.email });
  }
  return { ok };
}
