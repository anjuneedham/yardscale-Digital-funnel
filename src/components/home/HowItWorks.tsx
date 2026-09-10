import { processSteps } from "@/content/process";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { CtaLink, ArrowGlyph } from "@/components/ui/Cta";

/** PROCESS. Establishes that there is a method, not an improvisation. */
export function HowItWorks() {
  return (
    <Section id="how-it-works" divider>
      <SectionHeader
        eyebrow="How YardScale works"
        title="From bottleneck to build."
      />

      <ol className="mt-12 grid gap-px overflow-hidden rounded-card border border-line bg-line md:grid-cols-2 lg:grid-cols-4">
        {processSteps.map((step, i) => (
          <li key={step.number} className="bg-surface">
            <Reveal delay={i * 70} className="flex h-full flex-col p-6 sm:p-7">
              <span className="font-mono text-[0.6875rem] tracking-[0.16em] text-signal">
                {step.number}
              </span>
              <h3 className="mt-4 text-lg font-semibold tracking-[-0.01em]">{step.name}</h3>
              <p className="mt-3 flex-1 text-pretty text-sm leading-relaxed text-muted">
                {step.summary}
              </p>
              <p className="mt-6 border-t border-line pt-4 text-xs leading-relaxed text-faint">
                <span className="text-muted">Output:</span> {step.output}
              </p>
            </Reveal>
          </li>
        ))}
      </ol>

      <div className="mt-8">
        <CtaLink href="/how-it-works" variant="ghost">
          Read how each stage works <ArrowGlyph />
        </CtaLink>
      </div>
    </Section>
  );
}
