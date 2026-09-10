"use client";

import { cta } from "@/content/site";
import { CtaLink, ArrowGlyph } from "@/components/ui/Cta";
import { GrowthSystemVisual } from "@/components/visuals/GrowthSystemVisual";

/**
 * HOOK.
 * Answers "what is this?" and "is it for me?" inside the first screen —
 * critical for cold traffic arriving from a video or a post.
 */
export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pb-16 pt-12 sm:pb-24 sm:pt-16 lg:pb-28 lg:pt-20">
      <div aria-hidden className="grid-field pointer-events-none absolute inset-0 -z-10" />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[-14rem] -z-10 h-[36rem] w-[52rem] -translate-x-1/2 rounded-full opacity-40 blur-[120px]"
        style={{
          background:
            "radial-gradient(closest-side, rgba(163,230,53,0.16), rgba(163,230,53,0))",
        }}
      />

      <div className="container-x">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          <div>
            <p className="label-mono inline-flex items-center gap-2.5 rounded-full border border-line bg-panel/70 px-3.5 py-1.5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-signal" />
              </span>
              Growth Operator Agency
            </p>

            <h1 className="mt-6 text-balance text-[2.5rem] font-semibold leading-[1.02] tracking-[-0.035em] sm:text-6xl lg:text-[4.25rem]">
              Build the growth system behind your business.
            </h1>

            <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-ink-soft sm:text-lg">
              YardScale Digital helps creators and businesses turn attention, expertise,
              and offers into functioning growth systems — from websites and funnels to
              high-ticket offers, education platforms, and custom digital products.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <CtaLink
                href={cta.primary.href}
                size="lg"
                className="group"
                event="hero_cta_click"
                eventProps={{ origin: "hero_primary" }}
              >
                {cta.primary.label}
                <ArrowGlyph className="group-hover:translate-x-0.5" />
              </CtaLink>
              <CtaLink
                href={cta.tertiary.href}
                variant="secondary"
                size="lg"
                event="hero_cta_click"
                eventProps={{ origin: "hero_secondary" }}
              >
                {cta.tertiary.label}
              </CtaLink>
            </div>

            <p className="mt-6 text-sm text-muted">
              Start with the bottleneck. The build follows from it.
            </p>
          </div>

          <GrowthSystemVisual />
        </div>
      </div>
    </section>
  );
}
