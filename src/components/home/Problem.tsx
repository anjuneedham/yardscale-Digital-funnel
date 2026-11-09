import { problems } from "@/content/home";
import { Section, SectionHeader } from "@/components/ui/Section";

/** THE PROBLEM. Names what actually stops first-time SaaS founders. */
export function Problem() {
  return (
    <Section id="problem" divider tone="raised">
      <SectionHeader
        eyebrow="The problem"
        title="Most SaaS ideas do not fail at the code. They fail everywhere around it."
        lede="If you have been trying to start, some of these will be familiar."
      />
      <ol className="mt-12 border-t border-line">
        {problems.map((problem, i) => (
          <li
            key={problem.title}
            className="grid gap-2 border-b border-line py-6 sm:grid-cols-[3rem_1fr] sm:gap-6 lg:grid-cols-[3rem_1fr_1.2fr] lg:gap-10 lg:py-7"
          >
            <span className="font-mono text-xs tracking-[0.12em] text-signal sm:pt-1.5">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="text-lg font-semibold leading-snug tracking-[-0.015em] sm:text-xl">
              {problem.title}
            </h3>
            <p className="text-pretty text-[0.9375rem] leading-relaxed text-muted sm:col-start-2 lg:col-start-3">
              {problem.detail}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
