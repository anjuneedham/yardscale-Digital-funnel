"use client";

import { useState } from "react";
import { growthPathList } from "@/content/growth-paths";
import { Section, SectionHeader } from "@/components/ui/Section";
import { CtaButton, ArrowGlyph } from "@/components/ui/Cta";
import { FlowDiagram } from "@/components/visuals/FlowDiagram";
import { useFunnel } from "@/components/funnel/FunnelProvider";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/cn";

/**
 * SOLUTION PATH.
 * The six systems a bottleneck typically resolves into. Tabbed rather than
 * stacked, so the section stays short and the visitor stays in the funnel.
 */
export function GrowthPathsSection() {
  const [activeId, setActiveId] = useState(growthPathList[0].id);
  const { openQualification } = useFunnel();
  const active = growthPathList.find((p) => p.id === activeId) ?? growthPathList[0];

  return (
    <Section id="growth-paths" divider tone="raised">
      <SectionHeader
        eyebrow="Growth paths"
        title="The systems a bottleneck usually resolves into."
        lede="Different businesses break at different points. These are the paths we build most often — and the infrastructure each one needs to function."
      />

      <div
        role="tablist"
        aria-label="Growth paths"
        className="mt-10 flex snap-x snap-mandatory gap-2 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {growthPathList.map((path) => {
          const isActive = path.id === activeId;
          return (
            <button
              key={path.id}
              role="tab"
              id={`tab-${path.id}`}
              aria-selected={isActive}
              aria-controls={`panel-${path.id}`}
              onClick={() => {
                setActiveId(path.id);
                track("growth_path_viewed", { path: path.id });
              }}
              className={cn(
                "shrink-0 snap-start whitespace-nowrap rounded-full border px-4 py-2.5 text-sm transition-colors",
                isActive
                  ? "border-signal/50 bg-signal/10 text-ink"
                  : "border-line bg-panel/60 text-muted hover:border-line-strong hover:text-ink",
              )}
            >
              {path.name}
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id={`panel-${active.id}`}
        aria-labelledby={`tab-${active.id}`}
        key={active.id}
        className="mt-6 animate-fade-up card p-6 sm:p-8 lg:p-10"
      >
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
          <div>
            <h3 className="text-2xl font-semibold leading-tight tracking-[-0.02em] sm:text-3xl">
              {active.name}
            </h3>
            <p className="mt-4 text-pretty text-[0.9375rem] leading-relaxed text-ink-soft sm:text-base">
              {active.premise}
            </p>

            <div className="mt-8">
              <p className="label-mono mb-4">The sequence that has to work</p>
              <FlowDiagram stages={active.flow} />
            </div>
          </div>

          <div className="lg:border-l lg:border-line lg:pl-10">
            <p className="label-mono mb-4">YardScale may build</p>
            <ul className="space-y-3">
              {active.builds.map((build, i) => (
                <li key={build} className="flex items-baseline gap-4">
                  <span className="font-mono text-[0.6875rem] text-signal">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[0.9375rem] text-ink-soft">{build}</span>
                </li>
              ))}
            </ul>

            <CtaButton
              className="group mt-8 w-full sm:w-auto"
              size="lg"
              onClick={() => openQualification("growth_paths", { bottleneck: active.id })}
            >
              {active.ctaLabel}
              <ArrowGlyph className="group-hover:translate-x-0.5" />
            </CtaButton>

            <p className="mt-4 text-xs leading-relaxed text-faint">
              Scope is decided after we look at your business, not before.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
