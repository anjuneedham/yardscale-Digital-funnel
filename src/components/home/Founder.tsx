import { founder } from "@/content/home";
import { Section } from "@/components/ui/Section";
import { CtaLink, ArrowGlyph } from "@/components/ui/Cta";

/** FOUNDER STORY. Real background only — see src/content/home.ts. */
export function Founder({ showLink = true }: { showLink?: boolean }) {
  return (
    <Section id="founder" divider>
      <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-20">
        <div>
          <p className="label-mono mb-4 flex items-center gap-3">
            <span aria-hidden className="signal-rule" />
            {founder.eyebrow}
          </p>
          <h2 className="text-balance text-3xl font-semibold leading-[1.08] tracking-[-0.02em] sm:text-4xl lg:text-5xl">
            {founder.title}
          </h2>
          <div className="mt-8 max-w-2xl space-y-5 text-pretty text-base leading-relaxed text-ink-soft sm:text-lg sm:leading-relaxed">
            {founder.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
          {showLink ? (
            <div className="mt-9">
              <CtaLink href="/about" variant="secondary" className="group">
                More about Andrew and YardScale
                <ArrowGlyph className="group-hover:translate-x-0.5" />
              </CtaLink>
            </div>
          ) : null}
        </div>

        <aside className="lg:pt-16">
          <h3 className="label-mono">Background</h3>
          <ul className="mt-4 border-t border-line">
            {founder.background.map((item) => (
              <li key={item} className="border-b border-line py-3.5 text-[0.9375rem] text-ink">
                {item}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </Section>
  );
}
