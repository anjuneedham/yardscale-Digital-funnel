"use client";

import { cta, bookingUrl } from "@/content/site";
import { CtaButton, CtaLink, ArrowGlyph } from "@/components/ui/Cta";
import { useFunnel } from "@/components/funnel/FunnelProvider";

/** FINAL CTA. The last decision point on the page. */
export function FinalCta() {
  const { openQualification } = useFunnel();

  return (
    <section className="relative isolate overflow-hidden border-t border-line py-24 sm:py-32 lg:py-40">
      <div aria-hidden className="grid-field pointer-events-none absolute inset-0 -z-10 opacity-70" />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[30rem] w-[46rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60 blur-[130px]"
        style={{
          background: "radial-gradient(closest-side, rgba(79,227,176,0.14), transparent)",
        }}
      />

      <div className="container-x text-center">
        <h2 className="mx-auto max-w-4xl text-balance text-4xl font-semibold leading-[1.03] tracking-[-0.035em] sm:text-5xl lg:text-6xl">
          What&apos;s actually holding your growth back?
        </h2>

        <div className="mx-auto mt-8 max-w-md space-y-1.5 text-base text-muted sm:text-lg">
          <p>You may not need another tool.</p>
          <p>You may not need another website.</p>
          <p>You may not need more content.</p>
          <p className="pt-3 text-ink">You may need the right system.</p>
        </div>

        <div className="mt-11 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <CtaButton
            size="lg"
            className="group w-full sm:w-auto"
            onClick={() => openQualification("final_cta")}
          >
            {cta.primary.label}
            <ArrowGlyph className="group-hover:translate-x-0.5" />
          </CtaButton>
          <CtaLink
            href={bookingUrl || cta.secondary.href}
            variant="secondary"
            size="lg"
            className="w-full sm:w-auto"
            event="booking_cta_click"
            eventProps={{ origin: "final_cta" }}
            {...(bookingUrl ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            {cta.secondary.label}
          </CtaLink>
        </div>
      </div>
    </section>
  );
}
