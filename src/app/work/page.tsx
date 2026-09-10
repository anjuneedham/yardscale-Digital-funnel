import type { Metadata } from "next";

import { publishedCaseStudies, placeholderCaseStudies } from "@/content/work";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/layout/JsonLd";
import { PageHero } from "@/components/layout/PageHero";
import { BottomCta } from "@/components/layout/BottomCta";
import { Section, SectionHeader } from "@/components/ui/Section";
import { CaseStudyCard, ReservedSlot } from "@/components/work/CaseStudyCard";
import { FlowDiagram } from "@/components/visuals/FlowDiagram";

export const metadata: Metadata = pageMetadata({
  title: "Work",
  description:
    "Selected YardScale Digital builds. Every case study follows the same structure: the growth problem, the approach, what we built, and what happened next.",
  path: "/work",
});

const CASE_STUDY_STRUCTURE = ["Problem", "Approach", "What we built", "Outcome"];

export default function WorkPage() {
  const hasWork = publishedCaseStudies.length > 0;

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Work", path: "/work" },
        ])}
      />

      <PageHero
        eyebrow="Selected builds"
        title="Built for real business problems."
        lede={
          <p>
            Work gets published here when the build is live and the client has approved
            it. We don&apos;t show mockups, borrowed work, or results we can&apos;t
            substantiate — the same standard we&apos;d want applied to us.
          </p>
        }
      />

      <Section divider>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {hasWork
            ? publishedCaseStudies.map((study) => (
                <CaseStudyCard key={study.slug} study={study} />
              ))
            : placeholderCaseStudies.map((study, i) => (
                <ReservedSlot key={study.slug} discipline={study.discipline} index={i} />
              ))}
        </div>
      </Section>

      <Section divider grid>
        <SectionHeader
          eyebrow="How we write them"
          title="Every case study answers the same four questions."
          lede="Presented in the order that actually matters: what was broken, how we thought about it, what got built, and what changed."
        />
        <div className="mt-10 max-w-3xl">
          <FlowDiagram stages={CASE_STUDY_STRUCTURE} />
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              term: "Problem",
              copy: "The growth bottleneck as it existed, in the client's terms — not a restatement of the brief.",
            },
            {
              term: "Approach",
              copy: "The read we took, what we decided to build first, and what we deliberately left alone.",
            },
            {
              term: "What we built",
              copy: "The actual infrastructure delivered, component by component.",
            },
            {
              term: "Outcome",
              copy: "What measurably changed. If a number can't be substantiated, it doesn't appear.",
            },
          ].map((item) => (
            <div key={item.term} className="rounded-card border border-line bg-panel/50 p-5">
              <h3 className="label-mono">{item.term}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.copy}</p>
            </div>
          ))}
        </div>
      </Section>

      <BottomCta
        title="Your build could be the next one here."
        copy="Start with a read on what's constraining growth. The build follows from that."
        origin="work"
      />
    </>
  );
}
