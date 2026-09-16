import type { Metadata } from "next";
import Link from "next/link";

import { capabilities } from "@/content/capabilities";
import { growthPathList } from "@/content/growth-paths";
import { pageMetadata, breadcrumbJsonLd, serviceJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/layout/JsonLd";
import { PageHero } from "@/components/layout/PageHero";
import { BottomCta } from "@/components/layout/BottomCta";
import { Section, SectionHeader } from "@/components/ui/Section";
import { FlowDiagram } from "@/components/visuals/FlowDiagram";

export const metadata: Metadata = pageMetadata({
  title: "What We Build",
  description:
    "High-ticket offer systems, courses and knowledge products, funnels and landing pages, and the paid distribution that fills them — and how to tell which one your business actually needs.",
  path: "/what-we-build",
  keywords: [
    "high-ticket offer system",
    "course platform development",
    "sales funnel build",
    "landing page design",
    "paid traffic management",
    "solopreneur growth system",
  ],
});

export default function WhatWeBuildPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "What We Build", path: "/what-we-build" },
          ]),
          serviceJsonLd(
            capabilities.map((c) => ({ id: c.id, name: c.name, description: c.summary })),
          ),
        ]}
      />

      <PageHero
        eyebrow="Capabilities"
        title="What we build, and when each one is the right answer."
        lede={
          <>
            <p>
              These are components, not packages. The right combination depends on which
              stage of your growth system is failing — which is why the work starts with
              a diagnosis rather than a quote.
            </p>
          </>
        }
      >
        <nav aria-label="Capabilities" className="flex flex-wrap gap-2">
          {capabilities.map((capability) => (
            <a
              key={capability.id}
              href={`#${capability.id}`}
              className="rounded-full border border-line bg-panel/60 px-3.5 py-2 text-sm text-muted transition-colors hover:border-line-strong hover:text-ink"
            >
              {capability.name}
            </a>
          ))}
        </nav>
      </PageHero>

      <div className="border-t border-line">
        {capabilities.map((capability, index) => (
          <Section
            key={capability.id}
            id={capability.id}
            divider={index > 0}
            size="compact"
          >
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)] lg:gap-16">
              <div className="lg:sticky lg:top-24 lg:self-start">
                <span className="font-mono text-[0.6875rem] tracking-[0.16em] text-signal">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-4 text-2xl font-semibold leading-tight tracking-[-0.025em] sm:text-3xl">
                  {capability.name}
                </h2>
                <p className="mt-4 text-pretty text-[0.9375rem] leading-relaxed text-muted">
                  {capability.summary}
                </p>
              </div>

              <div className="space-y-7">
                <Answer term="What is it?" copy={capability.whatItIs} />
                <Answer term="Who needs it?" copy={capability.whoNeedsIt} />
                <Answer term="What problem does it solve?" copy={capability.problemItSolves} />

                <div>
                  <h3 className="label-mono">What YardScale could build</h3>
                  <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                    {capability.couldInclude.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 rounded-lg border border-line bg-panel/50 px-4 py-3 text-sm leading-relaxed text-ink-soft"
                      >
                        <span aria-hidden className="mt-2 h-px w-3 shrink-0 bg-signal/60" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Section>
        ))}
      </div>

      <Section divider grid>
        <SectionHeader
          eyebrow="How the pieces connect"
          title="Components only matter as part of a sequence."
          lede="A landing page attached to nothing is still a dead end. These are the sequences those components are usually assembled into."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {growthPathList.map((path) => (
            <div key={path.id} className="card p-6">
              <h3 className="text-lg font-semibold tracking-[-0.01em]">{path.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{path.premise}</p>
              <div className="mt-5">
                <FlowDiagram stages={path.flow} compact />
              </div>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-muted">
          Not sure which sequence describes your business?{" "}
          <Link href="/#bottleneck" className="text-ink underline underline-offset-4 hover:text-signal">
            Start with the diagnostic
          </Link>
          .
        </p>
      </Section>

      <BottomCta
        title="Which of these do you actually need?"
        copy="That depends on where your system breaks. Answer a few questions and we'll show you the likeliest starting point."
        origin="what_we_build"
      />
    </>
  );
}

function Answer({ term, copy }: { term: string; copy: string }) {
  return (
    <div>
      <h3 className="label-mono">{term}</h3>
      <p className="mt-2.5 text-pretty text-[0.9375rem] leading-relaxed text-ink-soft">{copy}</p>
    </div>
  );
}
