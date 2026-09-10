"use client";

import { Section } from "@/components/ui/Section";
import { CtaButton, ArrowGlyph } from "@/components/ui/Cta";
import { useFunnel } from "@/components/funnel/FunnelProvider";

/**
 * QUALIFICATION ENTRY.
 * Removes the biggest objection — "I don't know what to ask for" — and opens
 * the qualification flow.
 */
export function NotSure() {
  const { openQualification } = useFunnel();

  return (
    <Section divider size="compact">
      <div className="relative overflow-hidden rounded-card border border-line bg-panel/70 p-8 sm:p-12 lg:p-16">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-50 blur-[100px]"
          style={{
            background: "radial-gradient(closest-side, rgba(163,230,53,0.18), transparent)",
          }}
        />
        <div className="relative max-w-2xl">
          <p className="label-mono">Not sure what you need?</p>
          <h2 className="mt-5 text-balance text-3xl font-semibold leading-[1.08] tracking-[-0.025em] sm:text-4xl lg:text-5xl">
            You don&apos;t need to know what to build.
          </h2>
          <p className="mt-4 text-lg text-ink-soft sm:text-xl">
            That&apos;s our job to help figure out.
          </p>
          <p className="mt-6 text-pretty text-base leading-relaxed text-muted">
            Tell us what you&apos;re building, where you&apos;re stuck, and what you&apos;re
            trying to achieve. We&apos;ll help identify the infrastructure that makes the
            most sense.
          </p>

          <CtaButton
            size="lg"
            className="group mt-9 w-full sm:w-auto"
            onClick={() => openQualification("not_sure_section")}
          >
            Find my growth path
            <ArrowGlyph className="group-hover:translate-x-0.5" />
          </CtaButton>

          <p className="mt-4 text-xs text-faint">
            Ten questions. About three minutes. No obligation at the end of it.
          </p>
        </div>
      </div>
    </Section>
  );
}
