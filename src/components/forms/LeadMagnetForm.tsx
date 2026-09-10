"use client";

import { useState } from "react";
import { CtaButton, ArrowGlyph } from "@/components/ui/Cta";
import { submitToApi } from "@/lib/submit";
import { isEmail, isFilled } from "@/lib/validation";
import { track } from "@/lib/analytics";

/**
 * Lead magnet capture.
 *
 * Posts to /api/lead, which forwards to whichever email platform is configured
 * server-side. No provider is hard-coded here, so the form keeps working when
 * the stack changes.
 */
export function LeadMagnetForm({
  resourceId,
  resourceTitle,
  origin,
}: {
  resourceId: string;
  resourceTitle: string;
  origin: string;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  /** Honeypot — bots fill it, humans never see it. */
  const [company, setCompany] = useState("");
  const [state, setState] = useState<"idle" | "sending" | "done">("idle");
  const [error, setError] = useState("");

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!isFilled(name, 120)) return setError("Please add your first name.");
    if (!isEmail(email)) return setError("Please enter a valid email address.");

    setError("");
    setState("sending");

    const result = await submitToApi("/api/lead", {
      name,
      email,
      resourceId,
      resourceTitle,
      origin,
      company, // honeypot, validated server-side
    });

    if (result.ok) {
      setState("done");
      track("lead_magnet_submitted", { resource: resourceId, origin });
    } else {
      setState("idle");
      setError(result.message ?? "Something went wrong. Please try again.");
    }
  };

  if (state === "done") {
    return (
      <div className="rounded-card border border-signal/40 bg-signal/5 p-6">
        <p className="label-mono text-signal">Confirmed</p>
        <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-soft">
          Check your inbox — the guide is on its way. If it hasn&apos;t arrived in a few
          minutes, look in your promotions or spam folder.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-3">
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="block">
          <span className="sr-only">First name</span>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="First name"
            autoComplete="given-name"
            maxLength={120}
            required
            className="w-full rounded-lg border border-line bg-panel/80 px-4 py-3.5 text-[0.9375rem] text-ink placeholder:text-faint focus:border-signal/50 focus:outline-none"
          />
        </label>
        <label className="block">
          <span className="sr-only">Email address</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            autoComplete="email"
            maxLength={254}
            required
            className="w-full rounded-lg border border-line bg-panel/80 px-4 py-3.5 text-[0.9375rem] text-ink placeholder:text-faint focus:border-signal/50 focus:outline-none"
          />
        </label>
      </div>

      {/* Honeypot: visually and semantically hidden from real users. */}
      <div aria-hidden className="absolute h-0 w-0 overflow-hidden opacity-0">
        <label>
          Company
          <input
            tabIndex={-1}
            autoComplete="off"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </label>
      </div>

      <CtaButton type="submit" size="lg" className="group w-full" disabled={state === "sending"}>
        {state === "sending" ? "Sending…" : "Get the free guide"}
        <ArrowGlyph className="group-hover:translate-x-0.5" />
      </CtaButton>

      {error ? (
        <p role="alert" className="text-sm text-warn">
          {error}
        </p>
      ) : null}

      <p className="text-xs leading-relaxed text-faint">
        One guide, then occasional breakdowns of real growth systems. Unsubscribe any time.
      </p>
    </form>
  );
}
