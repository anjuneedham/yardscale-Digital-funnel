import type { Metadata } from "next";
import Link from "next/link";

import { Section, SectionHeader } from "@/components/ui/Section";
import { CtaLink, ArrowGlyph } from "@/components/ui/Cta";
import { JsonLd } from "@/components/layout/JsonLd";
import { SystemMap } from "@/components/growth-system/SystemMap";
import { pageMetadata, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";
import { site } from "@/content/site";
import {
  course,
  frameworkStages,
  whoItIsFor,
  problemsItSolves,
  outcomes,
  whatYouBuild,
  faqs,
} from "@/content/growth-system/course";

export const metadata: Metadata = pageMetadata({
  title: "The Growth Operator System",
  description:
    "An implementation-focused operating system for business owners: diagnose your growth constraint, then build, distribute, convert, prove, acquire, operate and scale the system that relieves it. From YardScale Digital.",
  path: "/growth-system",
  keywords: [
    "growth operator system",
    "business growth course",
    "growth operating system",
    "growth bottleneck",
    "conversion system course",
    "business growth diagnostic",
  ],
});

export default function GrowthSystemSalesPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "The Growth Operator System", path: "/growth-system" },
          ]),
          faqJsonLd(faqs),
          {
            "@context": "https://schema.org",
            "@type": "Course",
            name: course.name,
            description: course.description,
            provider: { "@type": "Organization", name: site.name, url: site.url },
          },
        ]}
      />

      {/* Hero */}
      <section className="relative isolate overflow-hidden pb-16 pt-14 sm:pb-24 sm:pt-20">
        <div aria-hidden className="grid-field pointer-events-none absolute inset-0 -z-10" />
        <div aria-hidden className="signal-bloom pointer-events-none absolute left-1/2 top-[-12rem] -z-10 h-[34rem] w-[48rem] -translate-x-1/2" />
        <div className="container-x">
          <div className="mx-auto max-w-3xl text-center">
            <p className="label-mono inline-flex items-center gap-2.5 rounded-full border border-line bg-panel/70 px-3.5 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-signal" />
              A YardScale Digital course
            </p>
            <h1 className="mt-6 text-balance text-[2.5rem] font-semibold leading-[1.02] tracking-[-0.035em] sm:text-6xl lg:text-[4rem]">
              The Growth Operator System
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-ink-soft sm:text-xl">
              {course.promise}
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <CtaLink href="/growth-system/login?next=%2Fgrowth-system%2Fdashboard" size="lg" className="group w-full sm:w-auto">
                Enroll &amp; start Phase 1
                <ArrowGlyph className="group-hover:translate-x-0.5" />
              </CtaLink>
              <CtaLink href="#framework" variant="secondary" size="lg" className="w-full sm:w-auto">
                See the framework
              </CtaLink>
            </div>
            <p className="mt-5 text-sm text-muted">
              Already enrolled?{" "}
              <Link href="/growth-system/login" className="text-ink underline underline-offset-4 hover:text-signal">
                Member login
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Positioning */}
      <Section divider grid>
        <div className="mx-auto max-w-3xl text-center">
          <p className="label-mono mb-4">Positioning</p>
          <p className="text-balance text-2xl font-semibold leading-tight tracking-[-0.02em] sm:text-3xl">
            This is not a marketing course. It is an{" "}
            <span className="text-signal">operating system for growing a real business.</span>
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-ink-soft sm:text-lg">
            {course.description} You will learn to think, diagnose, build, distribute, convert,
            prove, measure, improve and scale — the way a growth operator does.
          </p>
        </div>
      </Section>

      {/* Who it's for + problems */}
      <Section divider>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeader eyebrow="Who this is for" title="Built for owners accountable for growth." />
            <ul className="mt-8 space-y-3">
              {whoItIsFor.map((item) => (
                <li key={item} className="flex gap-3.5 rounded-lg border border-line bg-panel/50 px-4 py-3.5 text-[0.9375rem] leading-relaxed text-ink-soft">
                  <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeader eyebrow="The problems it solves" title="If growth has stopped compounding." />
            <ul className="mt-8 space-y-3">
              {problemsItSolves.map((item) => (
                <li key={item} className="flex gap-3.5 rounded-lg border border-line bg-panel/50 px-4 py-3.5 text-[0.9375rem] leading-relaxed text-ink-soft">
                  <span aria-hidden className="mt-2.5 h-px w-4 shrink-0 bg-warn/60" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Framework / 9 phases */}
      <Section id="framework" divider grid size="loose">
        <SectionHeader
          eyebrow="The Growth Operator framework"
          title="Nine phases. One connected system."
          lede="Each phase strengthens one stage of your growth system — in the order that compounds. You always know which phase you are in and why."
        />
        <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <p className="text-pretty text-base leading-relaxed text-ink-soft">
              The framework runs in sequence because the stages depend on each other. You cannot
              convert attention you have not earned, or scale a system you have not proven. Phase 1
              is available now; the rest unlock inside your member dashboard as you progress.
            </p>
            <div className="mt-8">
              <CtaLink href="/growth-system/login?next=%2Fgrowth-system%2Fdashboard" size="lg" className="group">
                Enroll &amp; start Phase 1
                <ArrowGlyph className="group-hover:translate-x-0.5" />
              </CtaLink>
            </div>
          </div>
          <SystemMap stages={frameworkStages} />
        </div>
      </Section>

      {/* What you build */}
      <Section divider>
        <SectionHeader
          eyebrow="What you build"
          title="You leave each phase with an asset, not just notes."
          lede="The Growth Operator System is implementation-focused. Every phase produces something real you can use in the business immediately."
        />
        <ul className="mt-10 grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {whatYouBuild.map((item) => (
            <li key={item.phase} className="bg-surface p-6 sm:p-7">
              <span className="label-mono text-signal">{item.phase}</span>
              <h3 className="mt-3 text-lg font-semibold tracking-[-0.01em]">{item.asset}</h3>
              <p className="mt-2 text-pretty text-sm leading-relaxed text-muted">{item.detail}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* How it works */}
      <Section divider grid>
        <SectionHeader
          eyebrow="How the system works"
          title="Diagnose first. Then build what actually moves the number."
        />
        <ol className="mt-10 grid gap-px overflow-hidden rounded-card border border-line bg-line md:grid-cols-3">
          {[
            { n: "01", t: "Diagnose", d: "Map your six-stage growth system and find the single constraint holding growth back — with evidence, not guesswork." },
            { n: "02", t: "Build the fix", d: "Work the phase that relieves your constraint: position, build, distribute, convert or prove — whatever the diagnosis points to." },
            { n: "03", t: "Operate & scale", d: "Install the operating cadence, then scale the proven system without it breaking. Re-diagnose and repeat." },
          ].map((step) => (
            <li key={step.n} className="bg-surface p-6 sm:p-8">
              <span className="font-mono text-3xl font-semibold tracking-[-0.03em] text-signal">{step.n}</span>
              <h3 className="mt-4 text-lg font-semibold tracking-[-0.01em]">{step.t}</h3>
              <p className="mt-3 text-pretty text-sm leading-relaxed text-muted">{step.d}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Outcomes */}
      <Section divider>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <SectionHeader eyebrow="Course outcomes" title="What you can do by the end." className="lg:sticky lg:top-24 lg:self-start" />
          <ul className="space-y-4">
            {outcomes.map((item) => (
              <li key={item} className="flex gap-4 rounded-lg border border-line bg-panel/50 px-5 py-4 text-[0.9375rem] leading-relaxed text-ink-soft">
                <span aria-hidden className="mt-1 font-mono text-xs text-signal">→</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Instructor / YardScale connection */}
      <Section divider grid>
        <div className="mx-auto max-w-3xl rounded-card border border-line bg-panel/60 p-8 text-center sm:p-12">
          <p className="label-mono">From the operators at {site.name}</p>
          <h2 className="mt-5 text-balance text-2xl font-semibold leading-tight tracking-[-0.02em] sm:text-3xl">
            Taught by a growth operator agency, not a course factory.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-ink-soft">
            {site.name} diagnoses the bottleneck between attention and revenue and builds the
            infrastructure that solves it. The Growth Operator System teaches that same operating
            discipline so you can run it inside your own business — the exact framework we use on
            client work, turned into a system you operate yourself.
          </p>
          <div className="mt-8">
            <CtaLink href="/about" variant="secondary">
              About YardScale Digital <ArrowGlyph />
            </CtaLink>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section divider>
        <SectionHeader eyebrow="Common questions" title="Before you enroll." />
        <dl className="mt-10 divide-y divide-line border-y border-line">
          {faqs.map((faq) => (
            <div key={faq.question} className="grid gap-3 py-7 md:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] md:gap-10">
              <dt className="text-[0.9375rem] font-medium text-ink">{faq.question}</dt>
              <dd className="text-pretty text-[0.9375rem] leading-relaxed text-muted">{faq.answer}</dd>
            </div>
          ))}
        </dl>
      </Section>

      {/* Enrollment CTA */}
      <section className="relative isolate overflow-hidden border-t border-line py-24 sm:py-32">
        <div aria-hidden className="signal-bloom pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[28rem] w-[42rem] -translate-x-1/2 -translate-y-1/2" />
        <div className="container-x max-w-3xl text-center">
          <p className="label-mono">{course.price.label}</p>
          <h2 className="mt-5 text-balance text-4xl font-semibold leading-[1.04] tracking-[-0.035em] sm:text-5xl">
            Start operating your growth system.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted sm:text-lg">
            Enroll to unlock the member dashboard and begin Phase 1 — your Business Growth
            Diagnostic. New phases are released into the same dashboard as they launch.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <CtaLink href="/growth-system/login?next=%2Fgrowth-system%2Fdashboard" size="lg" className="group w-full sm:w-auto">
              Enroll now
              <ArrowGlyph className="group-hover:translate-x-0.5" />
            </CtaLink>
            <CtaLink href="/growth-system/login" variant="secondary" size="lg" className="w-full sm:w-auto">
              Member login
            </CtaLink>
          </div>
        </div>
      </section>
    </>
  );
}
