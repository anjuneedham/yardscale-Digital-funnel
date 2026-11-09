import type { Metadata } from "next";

import { coaching } from "@/content/coaching";
import { cta, offers, site } from "@/content/site";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/layout/JsonLd";
import { PageHero } from "@/components/layout/PageHero";
import { BottomCta } from "@/components/layout/BottomCta";
import { Section, SectionHeader } from "@/components/ui/Section";
import { CtaLink, ArrowGlyph } from "@/components/ui/Cta";
import { ApplicationForm } from "@/components/forms/ApplicationForm";
import { SubscribeForm } from "@/components/forms/SubscribeForm";

export const metadata: Metadata = pageMetadata({
  title: "SaaS founder coaching with Andrew Needham",
  description:
    "One-on-one coaching for founders building a SaaS: validation, MVP scope, AI-assisted development, launch, pricing and first customers. Apply in five minutes.",
  path: "/coaching",
});

export default function CoachingPage() {
  const open = offers.coaching.status === "open";

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Coaching", path: "/coaching" },
        ])}
      />

      <PageHero eyebrow={coaching.eyebrow} title={coaching.title} lede={<p>{coaching.lede}</p>}>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <CtaLink href="#apply" size="lg" className="group" event="cta_click" eventProps={{ origin: "coaching_hero", cta: "coaching" }}>
            {cta.coaching.label} <ArrowGlyph className="group-hover:translate-x-0.5" />
          </CtaLink>
          <CtaLink href="#process" variant="secondary" size="lg">
            How it works
          </CtaLink>
        </div>
      </PageHero>

      <Section divider tone="raised">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-2xl font-semibold tracking-[-0.025em] sm:text-3xl">Who coaching is for</h2>
            <ul className="mt-6 border-t border-line">
              {coaching.whoFor.map((item) => (
                <li key={item} className="flex gap-4 border-b border-line py-4 text-[0.9375rem] leading-relaxed text-ink-soft">
                  <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold tracking-[-0.025em] sm:text-3xl">Who it is not for</h2>
            <ul className="mt-6 border-t border-line">
              {coaching.notFor.map((item) => (
                <li key={item} className="flex gap-4 border-b border-line py-4 text-[0.9375rem] leading-relaxed text-muted">
                  <span aria-hidden className="mt-2.5 h-px w-3 shrink-0 bg-warn" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section divider>
        <SectionHeader
          eyebrow="Problems coaching addresses"
          title="The places founders get stuck."
        />
        <ul className="mt-10 grid gap-x-12 border-t border-line sm:grid-cols-2">
          {coaching.problems.map((problem) => (
            <li key={problem.title} className="border-b border-line py-6">
              <h3 className="text-lg font-semibold tracking-[-0.015em]">{problem.title}</h3>
              <p className="mt-2 text-pretty text-[0.9375rem] leading-relaxed text-muted">{problem.detail}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section divider tone="raised">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <SectionHeader
            eyebrow="What the sessions cover"
            title="Whatever stage you are at, start there."
            lede="Sessions follow your product, not a fixed syllabus. These are the areas they draw on."
          />
          <ol className="border-t border-line">
            {coaching.sessions.map((item, i) => (
              <li key={item} className="flex gap-5 border-b border-line py-4 text-[0.9375rem] leading-relaxed text-ink-soft">
                <span className="pt-0.5 font-mono text-xs text-signal">{String(i + 1).padStart(2, "0")}</span>
                {item}
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section divider id="process">
        <SectionHeader eyebrow="How the process works" title="Five steps, no surprises." />
        <ol className="mt-10 grid gap-px overflow-hidden rounded-card border border-line bg-line lg:grid-cols-5">
          {coaching.process.map((step, i) => (
            <li key={step.title} className="bg-void p-6">
              <span className="font-mono text-xs text-signal">Step {i + 1}</span>
              <h3 className="mt-3 text-lg font-semibold leading-snug tracking-[-0.015em]">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.detail}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section divider tone="raised">
        <SectionHeader eyebrow="What you can expect" title="Honest about what coaching is." />
        <ul className="mt-10 grid gap-x-12 border-t border-line sm:grid-cols-2">
          {coaching.expect.map((item) => (
            <li key={item.title} className="border-b border-line py-6">
              <h3 className="text-lg font-semibold tracking-[-0.015em]">{item.title}</h3>
              <p className="mt-2 text-pretty text-[0.9375rem] leading-relaxed text-muted">{item.detail}</p>
            </li>
          ))}
        </ul>
        <div className="mt-10 max-w-2xl border-l-2 border-signal pl-5">
          <p className="label-mono">Pricing</p>
          {offers.coaching.price ? (
            <p className="mt-2 text-xl font-semibold tracking-[-0.015em]">{offers.coaching.price}</p>
          ) : null}
          <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-soft">{offers.coaching.priceNote}</p>
        </div>
      </Section>

      <Section divider id="apply">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="label-mono mb-4 flex items-center gap-3">
              <span aria-hidden className="signal-rule" />
              Application
            </p>
            <h2 className="text-balance text-3xl font-semibold leading-[1.08] tracking-[-0.02em] sm:text-4xl">
              {open ? "Apply for coaching." : "Coaching is full right now."}
            </h2>
            <p className="mt-5 text-pretty text-[0.9375rem] leading-relaxed text-ink-soft">
              {open
                ? `About five minutes. ${site.founder} reads every application and replies by email. Applying is free and does not commit you to anything.`
                : "Leave your email and you will be told when places open again."}
            </p>
          </div>
          {open ? <ApplicationForm kind="coaching" /> : <SubscribeForm origin="coaching_waitlist" buttonLabel="Tell me when it opens" />}
        </div>
      </Section>

      <BottomCta
        origin="coaching"
        title="Not ready for coaching yet?"
        copy="Read the course first. If you want someone to build the product with you rather than coach you through it, look at partnerships."
        primary={cta.academy}
        secondary={{ label: "See partnerships", href: "/partnerships" }}
      />
    </>
  );
}
