"use client";

import { useId, useState } from "react";
import { CtaButton, ArrowGlyph } from "@/components/ui/Cta";
import { submitToApi } from "@/lib/submit";
import { isEmail } from "@/lib/validation";
import { track } from "@/lib/analytics";
import { cta } from "@/content/site";
import { FIELD_CLASS, Honeypot } from "./fields";

/**
 * Email capture for the build notes. Used on the homepage, in the footer of
 * supporting pages and anywhere an offer is "not open yet".
 */
export function SubscribeForm({
  origin,
  buttonLabel = cta.subscribe.label,
  note = "Occasional emails when there is something worth reading. Unsubscribe any time.",
}: {
  origin: string;
  buttonLabel?: string;
  note?: string;
}) {
  const id = useId();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [state, setState] = useState<"idle" | "sending" | "done">("idle");
  const [error, setError] = useState("");

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!isEmail(email)) return setError("Please enter a valid email address.");

    setError("");
    setState("sending");

    const result = await submitToApi("/api/subscribe", { name, email, origin, company });

    if (result.ok) {
      setState("done");
      track("subscribe_submitted", { origin });
    } else {
      setState("idle");
      setError(result.message ?? "Something went wrong. Please try again.");
    }
  };

  if (state === "done") {
    return (
      <div role="status" className="rounded-card border border-signal/50 bg-signal/[0.06] p-6">
        <p className="label-mono text-signal">You&apos;re on the list</p>
        <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-soft">
          Thanks. You will hear from us when there is something worth sending. If a welcome
          email does not arrive, check your spam or promotions folder.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="relative">
      <div className="grid gap-3 sm:grid-cols-[1fr_1.3fr]">
        <label htmlFor={`${id}-name`} className="block">
          <span className="sr-only">First name (optional)</span>
          <input
            id={`${id}-name`}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="First name"
            autoComplete="given-name"
            maxLength={120}
            className={`${FIELD_CLASS} mt-0`}
          />
        </label>
        <label htmlFor={`${id}-email`} className="block">
          <span className="sr-only">Email address</span>
          <input
            id={`${id}-email`}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            autoComplete="email"
            maxLength={254}
            required
            className={`${FIELD_CLASS} mt-0`}
          />
        </label>
      </div>

      <Honeypot value={company} onChange={setCompany} />

      <CtaButton type="submit" size="lg" className="group mt-3 w-full sm:w-auto" disabled={state === "sending"}>
        {state === "sending" ? "Sending…" : buttonLabel}
        <ArrowGlyph className="group-hover:translate-x-0.5" />
      </CtaButton>

      {error ? (
        <p role="alert" className="mt-3 text-sm text-warn">
          {error}
        </p>
      ) : null}
      <p className="mt-3 text-xs leading-relaxed text-muted">{note}</p>
    </form>
  );
}
