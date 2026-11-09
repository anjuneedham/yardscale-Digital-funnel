import { badRequest, isBot, json, rateLimited, readBody } from "@/lib/api";
import { clamp, isEmail, isFilled } from "@/lib/validation";
import { readContext, recordApplication } from "@/lib/leads";
import { FORM_FIELDS, type FormKind } from "@/lib/forms";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const isKind = (value: unknown): value is FormKind =>
  value === "coaching" || value === "partnership" || value === "contact";

/**
 * Coaching applications, partnership applications and contact messages.
 * The field list for each kind is shared with the client form (lib/forms.ts),
 * so the two can never disagree about what is required.
 */
export async function POST(request: Request) {
  if (rateLimited(request)) {
    return json({ ok: false, message: "Too many requests. Please try again shortly." }, 429);
  }

  const body = await readBody(request);
  if (!body) return badRequest("Invalid request.");
  if (isBot(body)) return json({ ok: true });

  if (!isKind(body.kind)) return badRequest("Invalid request.");
  const kind = body.kind;

  const name = clamp(body.name, 120);
  const email = clamp(body.email, 254);
  if (!isFilled(name, 120)) return badRequest("Please add your name.");
  if (!isEmail(email)) return badRequest("Please enter a valid email address.");

  const answers: { key: string; label: string; value: string }[] = [];
  for (const field of FORM_FIELDS[kind]) {
    if (field.key === "name" || field.key === "email") continue;
    const value = clamp(body[field.key], field.max);
    if (field.required && !value) return badRequest(`Please complete: ${field.label}.`);
    if (field.options && value && !field.options.some((o) => o.value === value)) {
      return badRequest(`Please choose an option for: ${field.label}.`);
    }
    const display = field.options?.find((o) => o.value === value)?.label ?? value;
    answers.push({ key: field.key, label: field.label, value: display });
  }

  const result = await recordApplication({
    kind,
    name,
    email,
    stage: clamp(body.stage, 40),
    answers,
    context: readContext(body),
  });

  if (!result.ok) {
    return json(
      {
        ok: false,
        message: "That did not go through. Please try again, or email us directly.",
      },
      502,
    );
  }
  return json({ ok: true });
}
