import Link from "next/link";
import { publishedCaseStudies, placeholderCaseStudies } from "@/content/work";
import { Section, SectionHeader } from "@/components/ui/Section";
import { CaseStudyCard, ReservedSlot } from "@/components/work/CaseStudyCard";
import { CtaLink, ArrowGlyph } from "@/components/ui/Cta";

/**
 * PROOF.
 *
 * Shows real work when it exists. When it does not, the section is honest about
 * it rather than fabricating clients, logos or results — which is also the
 * position that survives contact with a prospect.
 */
export function Proof() {
  const hasWork = publishedCaseStudies.length > 0;

  return (
    <Section id="work" divider>
      <SectionHeader
        eyebrow="Selected builds"
        title="Built for real business problems."
        lede={
          hasWork
            ? "Each build starts with a bottleneck. Problem, approach, what we built, and what happened after."
            : "Case studies are published here as builds go live and clients approve them. Every one follows the same structure: problem, approach, what we built, outcome."
        }
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {hasWork
          ? publishedCaseStudies.slice(0, 3).map((study) => (
              <CaseStudyCard key={study.slug} study={study} />
            ))
          : placeholderCaseStudies.map((study, i) => (
              <ReservedSlot key={study.slug} discipline={study.discipline} index={i} />
            ))}
      </div>

      {!hasWork ? (
        <p className="mt-8 max-w-2xl text-sm leading-relaxed text-muted">
          We&apos;d rather show you nothing than show you someone else&apos;s work. If you
          want to see how we think in the meantime, the{" "}
          <Link href="/resources" className="text-ink underline underline-offset-4 hover:text-signal">
            Build Room
          </Link>{" "}
          is where the reasoning gets published in public.
        </p>
      ) : (
        <div className="mt-8">
          <CtaLink href="/work" variant="ghost">
            See all work <ArrowGlyph />
          </CtaLink>
        </div>
      )}
    </Section>
  );
}
