"use client";

import { cta, bookingUrl } from "@/content/site";
import { CtaButton, CtaLink, ArrowGlyph } from "@/components/ui/Cta";
import { useFunnel } from "@/components/funnel/FunnelProvider";

/**
 * The single conversion band that closes every supporting page.
 * Supporting pages deepen trust; they always route back to the funnel.
 */
export function BottomCta({
  title = "Start with the bottleneck.",
  copy = "Tell us where you're stuck. We'll show you the system that usually solves it, and whether it's worth building.",
  origin,
}: {
  title?: string;
  copy?: string;
  origin: string;
}) {
  const { openQualification } = useFunnel();

  return (
    <section className="relative isolate overflow-hidden border-t border-line py-20 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[24rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-50 blur-[120px]"
        style={{ background: "radial-gradient(closest-side, rgba(79,227,176,0.13), transparent)" }}
      />
      <div className="container-x max-w-3xl text-center">
        <h2 className="text-balance text-3xl font-semibold leading-[1.06] tracking-[-0.03em] sm:text-4xl lg:text-5xl">
          {title}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted sm:text-lg">
          {copy}
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <CtaButton
            size="lg"
            className="group w-full sm:w-auto"
            onClick={() => openQualification(origin)}
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
            eventProps={{ origin }}
            {...(bookingUrl ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            {cta.secondary.label}
          </CtaLink>
        </div>
      </div>
    </section>
  );
}
