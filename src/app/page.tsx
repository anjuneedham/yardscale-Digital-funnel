import type { Metadata } from "next";

import { Hero } from "@/components/home/Hero";
import { AttentionGap } from "@/components/home/AttentionGap";
import { Diagnostic } from "@/components/home/Diagnostic";
import { GrowthPathsSection } from "@/components/home/GrowthPathsSection";
import { Difference } from "@/components/home/Difference";
import { WhatWeBuild } from "@/components/home/WhatWeBuild";
import { NotSure } from "@/components/home/NotSure";
import { HowItWorks } from "@/components/home/HowItWorks";
import { Proof } from "@/components/home/Proof";
import { BuildRoom } from "@/components/home/BuildRoom";
import { LeadMagnet } from "@/components/home/LeadMagnet";
import { FinalCta } from "@/components/home/FinalCta";

import { JsonLd } from "@/components/layout/JsonLd";
import { faqJsonLd, pageMetadata, serviceJsonLd } from "@/lib/seo";
import { capabilities } from "@/content/capabilities";
import { site } from "@/content/site";

export const metadata: Metadata = pageMetadata({
  title: `${site.name} — Build the growth system behind your business`,
  description:
    "A growth operator agency for creators and businesses. We identify the bottleneck between attention and revenue, then build the system that solves it — websites, funnels, lead generation, high-ticket offers, courses, digital products and apps.",
  path: "/",
  keywords: [
    "growth operator agency",
    "growth systems",
    "conversion infrastructure",
    "sales funnels",
    "lead generation systems",
    "high-ticket offer systems",
    "creator monetization",
    "digital products",
  ],
});

const HOMEPAGE_FAQS = [
  {
    question: "What is a growth operator agency?",
    answer:
      "A growth operator agency identifies what is preventing a business from turning attention into customers, then builds the infrastructure required to fix it. Rather than selling a fixed deliverable, it starts with the growth bottleneck and works backward to the system — which may be a website, a funnel, an offer structure, an education platform, a digital product, or a combination.",
  },
  {
    question: "How do I know what my growth bottleneck is?",
    answer:
      "Start with the symptom you recognise: expertise with nothing packaged to buy, knowledge that should be a product, attention that never converts, or an offer too few people see. Each symptom usually points to a specific stage — offer, product, funnel, or distribution. The diagnostic on the YardScale homepage maps common symptoms to their likely bottleneck.",
  },
  {
    question: "Does YardScale Digital only build websites?",
    answer:
      "No. A website is one component. Depending on the bottleneck, a build may include a high-ticket offer system, a course or knowledge product, landing pages and conversion funnels, application and qualification flows, or the paid distribution that fills them.",
  },
  {
    question: "What happens on a growth call?",
    answer:
      "We look at where attention comes from, what you sell, and what exists between those two points, then give a read on which stage is constraining growth and what would need to be built to change it — including whether YardScale is the right fit for that work.",
  },
];

/**
 * The homepage is the funnel.
 *
 * HOOK → PROBLEM → NEW WAY OF THINKING → BOTTLENECK IDENTIFICATION →
 * SOLUTION PATH → TRUST → CAPABILITY → QUALIFICATION → PROCESS → PROOF →
 * CONTENT → RESOURCE → FINAL CALL TO ACTION.
 *
 * Every section moves the visitor forward. Supporting pages exist to deepen
 * trust, not to compete with this sequence.
 */
export default function HomePage() {
  return (
    <>
      <JsonLd
        data={[
          faqJsonLd(HOMEPAGE_FAQS),
          serviceJsonLd(
            capabilities.map((c) => ({ id: c.id, name: c.name, description: c.summary })),
          ),
        ]}
      />

      <Hero />
      <AttentionGap />
      <Diagnostic />
      <GrowthPathsSection />
      <Difference />
      <WhatWeBuild />
      <NotSure />
      <HowItWorks />
      <Proof />
      <BuildRoom />
      <LeadMagnet />
      <FinalCta />
    </>
  );
}
