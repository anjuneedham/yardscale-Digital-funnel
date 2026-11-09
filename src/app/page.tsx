import type { Metadata } from "next";

import { Hero } from "@/components/home/Hero";
import { Problem } from "@/components/home/Problem";
import { Approach } from "@/components/home/Approach";
import { Offers } from "@/components/home/Offers";
import { Founder } from "@/components/home/Founder";
import { Proof } from "@/components/home/Proof";
import { ContentFeed } from "@/components/home/ContentFeed";
import { Subscribe } from "@/components/home/Subscribe";
import { BottomCta } from "@/components/layout/BottomCta";

import { pageMetadata } from "@/lib/seo";
import { site } from "@/content/site";

export const metadata: Metadata = pageMetadata({
  title: `${site.name} — Build your SaaS. Learn the entire process.`,
  description:
    "Practical systems, real-world lessons and direct guidance for turning software ideas into businesses. Courses, community, one-on-one coaching and selective SaaS build partnerships from Andrew Needham.",
  path: "/",
  keywords: [
    "how to build a SaaS",
    "SaaS founder coaching",
    "SaaS course",
    "validate a SaaS idea",
    "AI-assisted development",
    "MVP launch",
    "app studio",
  ],
});

/**
 * The homepage is the funnel. Section order is the conversion sequence:
 *
 *   VIDEO HERO → PROBLEM → APPROACH → WHAT IS AVAILABLE → FOUNDER →
 *   PROOF → CONTENT → EMAIL CAPTURE → FINAL CTA
 *
 * Do not reorder without a conversion reason. Copy lives in src/content/.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <Problem />
      <Approach />
      <Offers />
      <Founder />
      <Proof />
      <ContentFeed />
      <Subscribe origin="home_subscribe" />
      <BottomCta origin="home_final" />
    </>
  );
}
