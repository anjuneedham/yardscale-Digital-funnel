import { journey } from "@/content/home";
import { Section, SectionHeader } from "@/components/ui/Section";
import { CtaLink, ArrowGlyph } from "@/components/ui/Cta";

/** THE APPROACH. One connected journey instead of disconnected tactics. */
export function Approach() {
  return (
    <Section id="approach" divider>
      <SectionHeader
        eyebrow="The YardScale approach"
        title="One system, from the first idea to a growing business."
        lede="Seven stages, in order. Each one answers a question the next one depends on. You always know where you are and what comes next."
      />

      {/* A hand-built track: vertical on small screens, a single rail on large ones. */}
      <ol className="relative mt-14 grid gap-0 lg:grid-cols-7 lg:gap-0">
        <span
          aria-hidden
          className="absolute bottom-3 left-[0.6875rem] top-3 w-px bg-line-strong lg:bottom-auto lg:left-0 lg:right-0 lg:top-[0.6875rem] lg:h-px lg:w-auto"
        />
        {journey.map((step, i) => (
          <li key={step.stage} className="relative pb-9 pl-10 last:pb-0 lg:pb-0 lg:pl-0 lg:pr-5">
            <span
              aria-hidden
              className="absolute left-0 top-0 flex h-[1.4375rem] w-[1.4375rem] items-center justify-center rounded-full border border-signal bg-void font-mono text-[0.625rem] text-signal lg:static"
            >
              {i + 1}
            </span>
            <h3 className="text-xl font-semibold uppercase leading-none tracking-[0.01em] lg:mt-6 lg:text-lg">
              {step.stage}
            </h3>
            <p className="mt-3 text-pretty text-sm leading-relaxed text-muted">{step.summary}</p>
            <p className="mt-3 font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-faint">
              {step.modules}
            </p>
          </li>
        ))}
      </ol>

      <div className="mt-12 flex flex-col items-start gap-4 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-xl text-pretty text-[0.9375rem] leading-relaxed text-ink-soft">
          The whole journey is written down as a course: Zero to SaaS, The Founder Operating
          System. The methodology is practical and still evolving. It does not promise an outcome.
        </p>
        <CtaLink
          href="/academy/zero-to-saas"
          variant="secondary"
          className="group shrink-0"
          event="cta_click"
          eventProps={{ origin: "approach", cta: "course" }}
        >
          See the curriculum <ArrowGlyph className="group-hover:translate-x-0.5" />
        </CtaLink>
      </div>
    </Section>
  );
}
