import type { Metadata } from "next";

import { partnerships } from "@/content/partnerships";
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
  title: "SaaS partnerships — build your product with YardScale",
  description:
    "YardScale Digital selectively partners with founders to develop and grow software products: product strategy, validation, MVP, AI-assisted development, launch and distribution.",
  path: "/partnerships",
});

export default function PartnershipsPage() {
  const open = offers.partnerships.status === "open";

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Partnerships", path: "/partnerships" },
        ])}
      />

      <PageHero eyebrow={partnerships.eyebrow} title={partnerships.title} lede={<p>{partnerships.lede}</p>}>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <CtaLink href="#apply" size="lg" className="group" event="cta_click" eventProps={{ origin: "partnerships_hero", cta: "partnership" }}>
            {cta.partnership.label} <ArrowGlyph className="group-hover:translate-x-0.5" />
          </CtaLink>
          <CtaLink href="#selective" variant="secondary" size="lg">
            How projects are chosen
          </CtaLink>
        </div>
      </PageHero>

      <Section divider tone="raised">
        <SectionHeader
          eyebrow="What a partnership covers"
          title="The whole product, not one piece of it."
          lede="What YardScale takes on depends on the project. These are the areas a partnership can include."
        />
        <ol className="mt-12 border-t border-line">
          {partnerships.covers.map((item, i) => (
            <li
              key={item.title}
              className="grid gap-2 border-b border-line py-6 sm:grid-cols-[3rem_1fr] sm:gap-6 lg:grid-cols-[3rem_1fr_1.4fr] lg:gap-10"
            >
              <span className="font-mono text-xs tracking-[0.12em] text-signal sm:pt-1.5">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-lg font-semibold tracking-[-0.015em] sm:text-xl">{item.title}</h3>
              <p className="text-pretty text-[0.9375rem] leading-relaxed text-muted sm:col-start-2 lg:col-start-3">
                {item.detail}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      <Section divider id="selective">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <div>
            <p className="label-mono mb-4 flex items-center gap-3">
              <span aria-hidden className="signal-rule" />
              Read this before applying
            </p>
            <h2 className="text-balance text-3xl font-semibold leading-[1.08] tracking-[-0.02em] sm:text-4xl lg:text-5xl">
              {partnerships.selective.title}
            </h2>
            <p className="mt-6 text-pretty text-base leading-relaxed text-ink-soft sm:text-lg">
              {partnerships.selective.copy}
            </p>
          </div>
          <ul className="border-t border-line">
            {partnerships.selective.criteria.map((criterion) => (
              <li key={criterion.title} className="border-b border-line py-6">
                <h3 className="text-xl font-semibold tracking-[-0.02em]">{criterion.title}</h3>
                <p className="mt-2 text-pretty text-[0.9375rem] leading-relaxed text-muted">{criterion.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section divider tone="raised">
        <SectionHeader eyebrow="How it works" title="From application to agreed terms." />
        <ol className="mt-10 grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {partnerships.process.map((step, i) => (
            <li key={step.title} className="bg-surface p-6">
              <span className="font-mono text-xs text-signal">Step {i + 1}</span>
              <h3 className="mt-3 text-lg font-semibold tracking-[-0.015em]">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.detail}</p>
            </li>
          ))}
        </ol>
        <div className="mt-10 max-w-2xl border-l-2 border-signal pl-5">
          <p className="label-mono">Terms</p>
          {offers.partnerships.price ? (
            <p className="mt-2 text-xl font-semibold tracking-[-0.015em]">{offers.partnerships.price}</p>
          ) : null}
          <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-soft">{offers.partnerships.priceNote}</p>
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
              {open ? "Apply for a partnership." : "Partnership applications are closed."}
            </h2>
            <p className="mt-5 text-pretty text-[0.9375rem] leading-relaxed text-ink-soft">
              {open
                ? `The more specific you are, the easier it is to say yes. ${site.founder} reviews every application personally. An application is not an offer of partnership.`
                : "Leave your email and you will be told when applications reopen."}
            </p>
          </div>
          {open ? <ApplicationForm kind="partnership" /> : <SubscribeForm origin="partnership_waitlist" buttonLabel="Tell me when it opens" />}
        </div>
      </Section>

      <BottomCta
        origin="partnerships"
        title="Building it yourself?"
        copy="Coaching gives you direct guidance while you build. The course gives you the whole process to work through on your own."
        primary={cta.coaching}
        secondary={cta.academy}
      />
    </>
  );
}
