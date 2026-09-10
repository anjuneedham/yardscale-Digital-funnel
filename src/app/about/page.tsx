import type { Metadata } from "next";

import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/layout/JsonLd";
import { PageHero } from "@/components/layout/PageHero";
import { BottomCta } from "@/components/layout/BottomCta";
import { Section, SectionHeader } from "@/components/ui/Section";
import { GrowthSystemVisual } from "@/components/visuals/GrowthSystemVisual";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description:
    "YardScale Digital is a growth operator agency. We build the infrastructure between attention and revenue — combining strategy, systems thinking and technical execution.",
  path: "/about",
  keywords: ["growth operator agency", "growth infrastructure", "digital growth systems"],
});

const POSITIONS = [
  {
    title: "Growth infrastructure",
    copy: "We build the machinery that turns attention into customers: the destination, the offer, the capture, the qualification, the conversion path, and the product at the end of it. Infrastructure is the word we use deliberately — these are load-bearing systems, not campaigns.",
  },
  {
    title: "Strategic thinking",
    copy: "Every build starts with a question about the business, not about the technology. Which stage is constraining growth? What would have to be true for that to change? What is the smallest thing we can build to find out? Strategy here means deciding what not to build.",
  },
  {
    title: "Practical execution",
    copy: "We implement. A recommendation that ends in a deck is a recommendation nobody acts on. YardScale finishes the work — designed, built, launched, instrumented, and improved against what real traffic does.",
  },
  {
    title: "Technology",
    copy: "Websites, funnels, platforms, applications. The right technical decision follows from the job the system has to do, and we're capable of building the harder end of that range when the problem genuinely requires it.",
  },
  {
    title: "Systems",
    copy: "The value is in the connections. Most businesses have decent components and broken joins — traffic that lands nowhere, leads nothing follows up, offers nobody can evaluate. We work on the whole chain, because that's where growth is actually lost.",
  },
];

const NOT_THIS = [
  "We don't sell retainers for activity that isn't tied to a bottleneck.",
  "We don't run a service menu where every client gets the same package.",
  "We don't promise numbers before we've seen the business.",
  "We don't hand over a strategy document and call it delivery.",
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
        title="A growth operator agency."
        lede={
          <>
            <p>
              YardScale Digital exists for a specific problem: businesses and creators
              who have real value to offer and no working system between that value and
              the people who would pay for it.
            </p>
            <p className="mt-4">
              We identify what is preventing growth and build the infrastructure required
              to move the business forward. Not a deliverable. The system behind it.
            </p>
          </>
        }
      />

      <Section divider>
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <h2 className="text-balance text-2xl font-semibold leading-tight tracking-[-0.025em] sm:text-3xl">
              Attention has never been cheaper to reach or harder to convert.
            </h2>
            <div className="mt-6 space-y-5 text-pretty text-[0.9375rem] leading-relaxed text-ink-soft sm:text-base">
              <p>
                Anyone can now build an audience. Far fewer can turn one into a business.
                The gap between those two things is not talent, effort, or content
                volume — it is infrastructure.
              </p>
              <p>
                Most businesses buy that infrastructure one disconnected piece at a time:
                a site from one supplier, a funnel from another, an offer improvised
                somewhere in between. Each piece is defensible on its own. The system
                they form is not.
              </p>
              <p className="text-ink">
                YardScale works on the system. That is the entire premise of the company.
              </p>
            </div>
          </div>
          <GrowthSystemVisual className="lg:pt-2" />
        </div>
      </Section>

      <Section divider grid>
        <SectionHeader
          eyebrow="What we're built around"
          title="Five things this company is organised to do."
        />
        <ul className="mt-10 grid gap-px overflow-hidden rounded-card border border-line bg-line lg:grid-cols-2">
          {POSITIONS.map((position, i) => (
            <li
              key={position.title}
              className={`bg-surface p-6 sm:p-8 ${
                i === POSITIONS.length - 1 && POSITIONS.length % 2 === 1 ? "lg:col-span-2" : ""
              }`}
            >
              <span className="font-mono text-[0.6875rem] tracking-[0.16em] text-signal">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-lg font-semibold tracking-[-0.01em]">{position.title}</h3>
              <p className="mt-3 text-pretty text-sm leading-relaxed text-muted">
                {position.copy}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <Section divider>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <h2 className="text-balance text-2xl font-semibold leading-tight tracking-[-0.025em] sm:text-3xl">
            And a few things we&apos;re deliberately not.
          </h2>
          <ul className="space-y-4">
            {NOT_THIS.map((item) => (
              <li
                key={item}
                className="flex gap-4 rounded-lg border border-line bg-panel/50 px-5 py-4 text-[0.9375rem] leading-relaxed text-ink-soft"
              >
                <span aria-hidden className="mt-2.5 h-px w-4 shrink-0 bg-warn/60" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <BottomCta
        title="The best way to understand how we work is to use it."
        copy="The diagnostic on this site is a small version of what we do on a call. Start there."
        origin="about"
      />
    </>
  );
}
