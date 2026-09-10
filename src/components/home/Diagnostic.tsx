"use client";

import { useState } from "react";
import { bottlenecks } from "@/content/bottlenecks";
import { growthPaths } from "@/content/growth-paths";
import { Section, SectionHeader } from "@/components/ui/Section";
import { CtaButton, CtaLink, ArrowGlyph } from "@/components/ui/Cta";
import { FlowDiagram } from "@/components/visuals/FlowDiagram";
import { useFunnel } from "@/components/funnel/FunnelProvider";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/cn";

/**
 * BOTTLENECK IDENTIFICATION.
 *
 * The centrepiece of the homepage funnel. The visitor selects the symptom they
 * recognise; the page responds with a likely bottleneck, a growth path, and a
 * single next step. Language stays hypothetical throughout — this is a
 * starting point, never a professional diagnosis.
 */
export function Diagnostic() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const { openQualification } = useFunnel();

  const selected = bottlenecks.find((b) => b.id === selectedId) ?? null;
  const path = selected ? growthPaths[selected.path] : null;

  return (
    <Section id="bottleneck" divider size="loose">
      <SectionHeader
        eyebrow="The diagnostic"
        title="What's actually holding your growth back?"
        lede="Start with the bottleneck, not the deliverable."
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-10">
        <div>
          <h3 className="label-mono">Where are you stuck?</h3>
          <ul className="mt-5 space-y-2">
            {bottlenecks.map((bottleneck) => {
              const active = bottleneck.id === selectedId;
              return (
                <li key={bottleneck.id}>
                  <button
                    type="button"
                    aria-pressed={active}
                    aria-controls="bottleneck-reading"
                    onClick={() => {
                      setSelectedId(bottleneck.id);
                      track("diagnostic_option_selected", {
                        option: bottleneck.id,
                        path: bottleneck.path,
                      });
                    }}
                    className={cn(
                      "group flex w-full items-center gap-3 rounded-lg border px-4 py-3.5 text-left text-[0.9375rem] leading-snug transition-all duration-150",
                      active
                        ? "border-signal/60 bg-signal/10 text-ink"
                        : "border-line bg-panel/60 text-ink-soft hover:border-line-strong hover:bg-raised/60 hover:text-ink",
                    )}
                  >
                    <span
                      aria-hidden
                      className={cn(
                        "h-1.5 w-1.5 shrink-0 rounded-full transition-colors",
                        active ? "bg-signal" : "bg-line-strong group-hover:bg-muted",
                      )}
                    />
                    <span className="flex-1">{bottleneck.option}</span>
                    <ArrowGlyph
                      className={cn(
                        "shrink-0 transition-all",
                        active ? "text-signal" : "text-faint group-hover:translate-x-0.5",
                      )}
                    />
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <div id="bottleneck-reading" aria-live="polite" className="lg:sticky lg:top-24 lg:self-start">
          {selected && path ? (
            <article
              key={selected.id}
              className="animate-fade-up card p-6 sm:p-8"
            >
              <p className="label-mono">Your likely bottleneck</p>
              <h3 className="mt-3 text-2xl font-semibold leading-tight tracking-[-0.02em] sm:text-[1.75rem]">
                {selected.likelyBottleneck}
              </h3>
              <p className="mt-4 text-pretty text-[0.9375rem] leading-relaxed text-ink-soft">
                {selected.reading}
              </p>

              <div className="mt-7">
                <p className="label-mono mb-3">What that usually looks like</p>
                <ul className="space-y-2.5">
                  {selected.signs.map((sign) => (
                    <li key={sign} className="flex gap-3 text-sm leading-relaxed text-muted">
                      <span aria-hidden className="mt-2 h-px w-3 shrink-0 bg-line-strong" />
                      {sign}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-7 border-t border-line pt-7">
                <p className="label-mono mb-4">
                  Possible growth path — {path.name}
                </p>
                <FlowDiagram stages={path.flow} compact />

                <p className="label-mono mb-3 mt-7">YardScale may build</p>
                <ul className="flex flex-wrap gap-2">
                  {path.builds.map((build) => (
                    <li
                      key={build}
                      className="rounded-full border border-line bg-raised/60 px-3 py-1.5 text-xs text-ink-soft"
                    >
                      {build}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <CtaButton
                  size="lg"
                  className="group"
                  onClick={() => openQualification("diagnostic", { bottleneck: selected.path })}
                >
                  Explore this growth path
                  <ArrowGlyph className="group-hover:translate-x-0.5" />
                </CtaButton>
                <CtaLink href={`/what-we-build#${path.id}`} variant="secondary" size="lg">
                  What that involves
                </CtaLink>
              </div>

              <p className="mt-5 text-xs leading-relaxed text-faint">
                This is a likely starting point based on one answer — not a professional
                diagnosis. The real read comes from looking at your actual business.
              </p>
            </article>
          ) : (
            <EmptyState />
          )}
        </div>
      </div>
    </Section>
  );
}

function EmptyState() {
  return (
    <div className="flex h-full min-h-[22rem] flex-col justify-center rounded-card border border-dashed border-line bg-panel/30 p-8 text-center">
      <p className="label-mono">Awaiting input</p>
      <p className="mx-auto mt-4 max-w-sm text-pretty text-[0.9375rem] leading-relaxed text-muted">
        Pick the statement closest to your situation. We&apos;ll show the bottleneck it
        usually points to, and the system that tends to solve it.
      </p>
      <div aria-hidden className="mx-auto mt-8 flex items-center gap-2 opacity-40">
        {[0, 1, 2, 3].map((i) => (
          <span
            key={i}
            className="h-1.5 w-1.5 rounded-full bg-signal"
            style={{ animation: "pulse-node 2.4s ease-in-out infinite", animationDelay: `${i * 0.2}s` }}
          />
        ))}
      </div>
    </div>
  );
}
