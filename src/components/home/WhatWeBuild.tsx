import Link from "next/link";
import { capabilities } from "@/content/capabilities";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { CtaLink, ArrowGlyph } from "@/components/ui/Cta";

/**
 * CAN THEY SOLVE IT?
 * Capabilities, framed as parts of one system rather than a service menu.
 */
export function WhatWeBuild() {
  return (
    <Section id="what-we-build" divider tone="raised">
      <SectionHeader
        eyebrow="Capabilities, not packages"
        title="What can we build?"
        lede="These are the components a growth system is assembled from. Which ones you need depends entirely on where your system breaks."
      />

      <ul className="mt-12 grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {capabilities.map((capability, i) => (
          <li key={capability.id}>
            <Reveal delay={Math.min(i * 45, 270)} className="h-full">
              <Link
                href={`/what-we-build#${capability.id}`}
                className="group relative flex h-full flex-col bg-surface p-6 transition-colors duration-200 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-signal before:opacity-0 before:transition-opacity hover:bg-panel hover:before:opacity-100 sm:p-7"
              >
                <span className="font-mono text-[0.6875rem] tracking-[0.16em] text-faint">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-lg font-semibold tracking-[-0.01em] text-ink">
                  {capability.name}
                </h3>
                <p className="mt-2.5 flex-1 text-pretty text-sm leading-relaxed text-muted">
                  {capability.summary}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-xs text-faint transition-colors group-hover:text-signal">
                  How this works
                  <ArrowGlyph className="h-3 w-3 group-hover:translate-x-0.5" />
                </span>
              </Link>
            </Reveal>
          </li>
        ))}
      </ul>

      <div className="mt-10 flex flex-col items-start gap-6 card p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
        <p className="text-balance text-lg font-medium leading-snug sm:text-xl">
          None of this is sold as a package. It&apos;s assembled into{" "}
          <span className="text-signal">the system your business needs.</span>
        </p>
        <CtaLink href="/what-we-build" variant="secondary" className="shrink-0">
          See it in detail <ArrowGlyph />
        </CtaLink>
      </div>
    </Section>
  );
}
