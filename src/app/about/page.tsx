import type { Metadata } from "next";

import { site } from "@/content/site";
import { journey } from "@/content/home";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/layout/JsonLd";
import { PageHero } from "@/components/layout/PageHero";
import { BottomCta } from "@/components/layout/BottomCta";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Founder } from "@/components/home/Founder";
import { Proof } from "@/components/home/Proof";

export const metadata: Metadata = pageMetadata({
  title: "About YardScale Digital and Andrew Needham",
  description:
    "YardScale Digital is an app studio and SaaS founder education business founded by Andrew Needham. What it is, what it is not, and how it works.",
  path: "/about",
});

const PRINCIPLES = [
  {
    title: "Teach what is being done.",
    copy: "The methodology comes from products being built in the studio right now. Where something is still being figured out, the material says so.",
  },
  {
    title: "The whole process, in order.",
    copy: "Disconnected tactics are the problem. Everything here is organised around one journey, so you always know what stage you are at.",
  },
  {
    title: "No invented proof.",
    copy: "No fake testimonials, user counts or revenue claims. Proof is added when it exists.",
  },
  {
    title: "No guaranteed outcomes.",
    copy: "A sound process improves your odds. It does not promise customers or revenue, and nothing on this site says it does.",
  },
];

const NOT_THIS = [
  "Not a marketing agency. YardScale does not sell retainers or run campaigns for hire.",
  "Not a course factory. One flagship course, written from real work, improved over time.",
  "Not a development shop. Partnerships are selective and built on shared commitment, not hourly billing.",
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />

      <PageHero
        eyebrow="About"
        title="An app studio that teaches what it is learning."
        lede={
          <>
            <p>
              {site.name} builds software products and helps aspiring SaaS founders build
              theirs. It was founded by {site.founder}.
            </p>
            <p className="mt-4">
              The studio and the education feed each other: the products are where the
              methodology is tested, and the courses, coaching and community are where it
              is shared.
            </p>
          </>
        }
      />

      <Founder showLink={false} />

      <Section divider tone="raised">
        <SectionHeader eyebrow="How YardScale works" title="Four things you can hold us to." />
        <ul className="mt-10 grid gap-x-12 border-t border-line sm:grid-cols-2">
          {PRINCIPLES.map((principle) => (
            <li key={principle.title} className="border-b border-line py-6">
              <h3 className="text-lg font-semibold tracking-[-0.015em]">{principle.title}</h3>
              <p className="mt-2 text-pretty text-[0.9375rem] leading-relaxed text-muted">{principle.copy}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section divider>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeader eyebrow="The method" title="Seven stages, taught in order." />
            <ol className="mt-8 flex flex-wrap gap-x-3 gap-y-2 text-lg font-semibold uppercase tracking-[0.01em]">
              {journey.map((step, i) => (
                <li key={step.stage} className="flex items-center gap-3">
                  {i > 0 ? <span aria-hidden className="text-signal">→</span> : null}
                  {step.stage}
                </li>
              ))}
            </ol>
          </div>
          <div>
            <h2 className="label-mono">What YardScale is not</h2>
            <ul className="mt-4 border-t border-line">
              {NOT_THIS.map((item) => (
                <li key={item} className="flex gap-4 border-b border-line py-4 text-[0.9375rem] leading-relaxed text-ink-soft">
                  <span aria-hidden className="mt-2.5 h-px w-3 shrink-0 bg-warn" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Proof />

      <BottomCta origin="about" />
    </>
  );
}
