import type { Metadata } from "next";

import { processSteps } from "@/content/process";
import { pageMetadata, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/layout/JsonLd";
import { PageHero } from "@/components/layout/PageHero";
import { BottomCta } from "@/components/layout/BottomCta";
import { Section, SectionHeader } from "@/components/ui/Section";
import { FlowDiagram } from "@/components/visuals/FlowDiagram";

export const metadata: Metadata = pageMetadata({
  title: "How It Works",
  description:
    "The YardScale process: diagnose the growth bottleneck, architect the system, build the infrastructure, then launch and improve against real behaviour. How a growth operator works, stage by stage.",
  path: "/how-it-works",
  keywords: ["growth operator", "growth system process", "conversion infrastructure build process"],
});

const OPERATOR_PRINCIPLES = [
  {
    title: "The deliverable is downstream of the diagnosis",
    copy: "We do not take a build brief at face value. What someone asks for is evidence about their problem, not a description of it. The scope is set after the diagnosis, which sometimes means the project we take on is not the one that was requested.",
  },
  {
    title: "Connections over components",
    copy: "Businesses rarely fail because a single asset is bad. They fail at the joins — traffic that lands nowhere specific, a lead that nothing follows up, an offer nobody can evaluate. The connective work is the work.",
  },
  {
    title: "Build what changes the number",
    copy: "Every stage has a highest-leverage change available at any time. We build that, launch it, and look at what happened — rather than delivering a large system whose weak points only become visible a year later.",
  },
  {
    title: "Instrument everything",
    copy: "A system you cannot measure is a system you cannot improve. Attribution, conversion tracking and event instrumentation are part of the build, not an afterthought sold separately.",
  },
];

const FAQS = [
  {
    question: "How long does a build take?",
    answer:
      "It depends entirely on scope, which is set after the diagnosis. A focused landing page and capture flow is a matter of weeks; a connected system across a website, offer infrastructure and a product is longer. We give a timeline with the architecture, not before it.",
  },
  {
    question: "What if I already know what I want built?",
    answer:
      "That is useful information and we take it seriously. We still run the diagnosis, because the fastest way to waste a budget is to build the right thing for the wrong problem. If the diagnosis agrees with your brief, we build your brief.",
  },
  {
    question: "Do you work with businesses that have no audience yet?",
    answer:
      "Yes, but the work is different. Without existing distribution, the system has to be built alongside audience rather than after it, and the first build is usually smaller and aimed at proving demand.",
  },
  {
    question: "What happens after launch?",
    answer:
      "We look at how real traffic moves through the system, identify the step that leaks most, and fix that step. Improvement is prioritised by what is measurably costing the most, not by what is easiest to change.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "How It Works", path: "/how-it-works" },
          ]),
          faqJsonLd(FAQS),
        ]}
      />

      <PageHero
        eyebrow="The process"
        title="From bottleneck to build."
        lede={
          <p>
            YardScale operates rather than advises. The process below is how a growth
            problem becomes a working system — and how we decide what not to build.
          </p>
        }
      >
        <FlowDiagram
          stages={processSteps.map((s) => s.name)}
          className="max-w-2xl"
        />
      </PageHero>

      <div className="border-t border-line">
        {processSteps.map((step, index) => (
          <Section key={step.number} id={step.name.toLowerCase()} divider={index > 0} size="compact">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)] lg:gap-16">
              <div className="lg:sticky lg:top-24 lg:self-start">
                <span className="font-mono text-4xl font-semibold tracking-[-0.03em] text-signal sm:text-5xl">
                  {step.number}
                </span>
                <h2 className="mt-4 text-2xl font-semibold leading-tight tracking-[-0.025em] sm:text-3xl">
                  {step.name}
                </h2>
                <p className="mt-4 text-pretty text-[0.9375rem] leading-relaxed text-muted">
                  {step.summary}
                </p>
              </div>

              <div>
                <p className="text-pretty text-base leading-relaxed text-ink-soft sm:text-lg">
                  {step.detail}
                </p>

                <div className="mt-8">
                  <h3 className="label-mono">Questions this stage answers</h3>
                  <ul className="mt-4 space-y-3">
                    {step.questions.map((question) => (
                      <li key={question} className="flex gap-4 text-[0.9375rem] leading-relaxed text-ink-soft">
                        <span aria-hidden className="mt-2.5 h-px w-4 shrink-0 bg-signal/60" />
                        {question}
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="mt-8 rounded-lg border border-line bg-panel/60 px-5 py-4 text-sm leading-relaxed">
                  <span className="label-mono">Output</span>
                  <span className="mt-1.5 block text-ink-soft">{step.output}</span>
                </p>
              </div>
            </div>
          </Section>
        ))}
      </div>

      <Section divider grid>
        <SectionHeader
          eyebrow="The growth operator approach"
          title="Why we work this way."
          lede="An agency sells deliverables. An operator is accountable for whether the system works. That difference shows up in how decisions get made."
        />
        <ul className="mt-10 grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2">
          {OPERATOR_PRINCIPLES.map((principle) => (
            <li key={principle.title} className="bg-surface p-6 sm:p-8">
              <h3 className="text-lg font-semibold leading-snug tracking-[-0.01em]">
                {principle.title}
              </h3>
              <p className="mt-3 text-pretty text-sm leading-relaxed text-muted">
                {principle.copy}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <Section divider>
        <SectionHeader eyebrow="Common questions" title="Before you get in touch." />
        <dl className="mt-10 divide-y divide-line border-y border-line">
          {FAQS.map((faq) => (
            <div key={faq.question} className="grid gap-3 py-7 md:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] md:gap-10">
              <dt className="text-[0.9375rem] font-medium text-ink">{faq.question}</dt>
              <dd className="text-pretty text-[0.9375rem] leading-relaxed text-muted">
                {faq.answer}
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      <BottomCta origin="how_it_works" />
    </>
  );
}
