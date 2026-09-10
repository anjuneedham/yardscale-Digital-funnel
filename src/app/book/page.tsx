import type { Metadata } from "next";
import Link from "next/link";

import { bookingUrl, site } from "@/content/site";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/layout/JsonLd";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/ui/Section";
import { CtaLink, ArrowGlyph } from "@/components/ui/Cta";
import { GrowthRequestForm } from "@/components/forms/GrowthRequestForm";
import { FlowDiagram } from "@/components/visuals/FlowDiagram";

export const metadata: Metadata = pageMetadata({
  title: "Book a Growth Call",
  description:
    "Book a growth call with YardScale Digital. A working conversation about where your growth system breaks and what would need to be built to fix it.",
  path: "/book",
});

const AGENDA = [
  {
    title: "What exists today",
    copy: "Where attention comes from, what you sell, and what currently sits between those two things.",
  },
  {
    title: "Where it breaks",
    copy: "The stage most likely constraining growth, and what that's costing in practice.",
  },
  {
    title: "What would need to be built",
    copy: "The system that addresses it, in what order, and roughly what that involves.",
  },
  {
    title: "Whether we're the right fit",
    copy: "Including when the honest answer is that you don't need an agency for this yet.",
  },
];

export default function BookPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Book a Growth Call", path: "/book" },
        ])}
      />

      <PageHero
        eyebrow="Growth call"
        title="A working conversation, not a pitch."
        lede={
          <p>
            Bring what you have — traffic, an offer, a half-built funnel, or just the
            sense that something isn&apos;t connecting. We&apos;ll give you a read on the
            bottleneck whether or not you work with us afterwards.
          </p>
        }
      >
        {bookingUrl ? (
          <CtaLink
            href={bookingUrl}
            size="lg"
            target="_blank"
            rel="noopener noreferrer"
            event="booking_cta_click"
            eventProps={{ origin: "book_page_hero" }}
            className="group"
          >
            Choose a time <ArrowGlyph className="group-hover:translate-x-0.5" />
          </CtaLink>
        ) : null}
      </PageHero>

      <Section divider>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <h2 className="label-mono">What we cover</h2>
            <ol className="mt-6 space-y-6">
              {AGENDA.map((item, i) => (
                <li key={item.title} className="flex gap-5">
                  <span className="font-mono text-[0.6875rem] text-signal">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-[0.9375rem] font-medium text-ink">{item.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">{item.copy}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-10 card p-6">
              <p className="label-mono mb-4">Where a call sits in the process</p>
              <FlowDiagram
                stages={["Growth call", "Diagnosis", "Architecture", "Build"]}
                orientation="vertical"
                compact
              />
            </div>
          </div>

          <div>
            {bookingUrl ? (
              <>
                <div className="overflow-hidden card">
                  <iframe
                    src={bookingUrl}
                    title="Book a growth call"
                    loading="lazy"
                    className="h-[46rem] w-full border-0 bg-surface"
                  />
                </div>
                <p className="mt-4 text-sm text-muted">
                  Scheduler not loading?{" "}
                  <a
                    href={bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink underline underline-offset-4 hover:text-signal"
                  >
                    Open it in a new tab
                  </a>{" "}
                  or email{" "}
                  <a
                    href={`mailto:${site.email}`}
                    className="text-ink underline underline-offset-4 hover:text-signal"
                  >
                    {site.email}
                  </a>
                  .
                </p>
              </>
            ) : (
              <>
                <div className="card p-6 sm:p-8">
                  <h2 className="text-xl font-semibold tracking-[-0.02em]">
                    Request a call
                  </h2>
                  <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-soft">
                    Send the details below and we&apos;ll come back with times — and an
                    initial read on your bottleneck so the call starts further along.
                  </p>
                </div>
                <div className="mt-8">
                  <GrowthRequestForm />
                </div>
              </>
            )}

            <p className="mt-8 text-sm text-muted">
              Would rather diagnose it yourself first?{" "}
              <Link
                href="/#bottleneck"
                className="text-ink underline underline-offset-4 hover:text-signal"
              >
                Run the bottleneck diagnostic
              </Link>
              .
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
