import type { Metadata } from "next";

import { availableResources, plannedResources } from "@/content/resources";
import { contentFormats, contentItems } from "@/content/build-room";
import { socials } from "@/content/site";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/layout/JsonLd";
import { PageHero } from "@/components/layout/PageHero";
import { BottomCta } from "@/components/layout/BottomCta";
import { Section, SectionHeader } from "@/components/ui/Section";
import { LeadMagnetForm } from "@/components/forms/LeadMagnetForm";
import { FlowDiagram } from "@/components/visuals/FlowDiagram";

export const metadata: Metadata = pageMetadata({
  title: "Resources",
  description:
    "The YardScale Growth System Starter Guide, plus growth breakdowns, funnel teardowns and offer strategy published in the Build Room.",
  path: "/resources",
  keywords: ["growth system guide", "funnel breakdown", "website teardown", "offer strategy"],
});

export default function ResourcesPage() {
  const guide = availableResources[0];
  const liveChannels = socials.filter((c) => c.href);

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Resources", path: "/resources" },
        ])}
      />

      <PageHero
        eyebrow="Resources"
        title="Build your own growth system."
        lede={
          <p>
            Everything here is written to be usable without hiring anyone. If you get to
            the end and decide you&apos;d rather have it built, that&apos;s what the
            growth call is for.
          </p>
        }
      />

      {guide ? (
        <Section id="starter-guide" divider>
          <div className="grid gap-10 card p-6 sm:p-10 lg:grid-cols-[1.15fr_1fr] lg:gap-16 lg:p-14">
            <div>
              <p className="label-mono">{guide.kind} — free</p>
              <h2 className="mt-5 text-balance text-3xl font-semibold leading-[1.08] tracking-[-0.025em] sm:text-4xl">
                {guide.title}
              </h2>
              <p className="mt-5 text-pretty text-base leading-relaxed text-ink-soft">
                {guide.summary}
              </p>
              <ul className="mt-8 space-y-3">
                {guide.contents.map((item) => (
                  <li key={item} className="flex gap-3.5 text-sm leading-relaxed text-ink-soft">
                    <span aria-hidden className="mt-2 h-px w-3.5 shrink-0 bg-signal/60" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:pt-16">
              <LeadMagnetForm
                resourceId={guide.id}
                resourceTitle={guide.title}
                origin="resources_page"
              />
            </div>
          </div>
        </Section>
      ) : null}

      {plannedResources.length > 0 ? (
        <Section divider>
          <SectionHeader
            eyebrow="In progress"
            title="What's coming next."
            lede="Published as they're finished. Get the starter guide and you'll receive these as they land."
          />
          <ul className="mt-10 grid gap-4 md:grid-cols-3">
            {plannedResources.map((resource) => (
              <li
                key={resource.id}
                className="flex h-full flex-col rounded-card border border-dashed border-line bg-panel/25 p-6"
              >
                <p className="label-mono">{resource.kind}</p>
                <h3 className="mt-4 text-lg font-semibold leading-snug tracking-[-0.01em]">
                  {resource.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {resource.summary}
                </p>
                <ul className="mt-5 space-y-2 border-t border-line pt-4">
                  {resource.contents.map((item) => (
                    <li key={item} className="text-xs leading-relaxed text-faint">
                      {item}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </Section>
      ) : null}

      <Section id="build-room" divider grid>
        <SectionHeader
          eyebrow="The Build Room"
          title="Where the reasoning gets published."
          lede="Growth breakdowns, funnel teardowns, offer strategy and build-in-public — on the platforms you probably arrived from."
        />

        {contentItems.length > 0 ? (
          <ul className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {contentItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-full flex-col card p-6 transition-colors hover:border-line-strong hover:bg-raised/60"
                >
                  <p className="label-mono">{item.format}</p>
                  <h3 className="mt-3 text-base font-semibold leading-snug">{item.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{item.blurb}</p>
                  <p className="mt-5 font-mono text-xs text-faint">{item.channel}</p>
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <div className="mt-10 card p-6 sm:p-8">
            <p className="label-mono mb-6">What gets published here</p>
            <ul className="grid gap-x-10 gap-y-5 sm:grid-cols-2">
              {contentFormats.map((item) => (
                <li key={item.format} className="flex gap-4">
                  <span aria-hidden className="mt-2.5 h-px w-4 shrink-0 bg-signal/50" />
                  <div>
                    <p className="text-[0.9375rem] font-medium text-ink">{item.format}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        {liveChannels.length > 0 ? (
          <ul className="mt-8 flex flex-wrap gap-2">
            {liveChannels.map((channel) => (
              <li key={channel.id}>
                <a
                  href={channel.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-line bg-panel/60 px-4 py-2 text-sm text-ink-soft transition-colors hover:border-signal/40 hover:text-ink"
                >
                  {channel.label}
                  <span className="font-mono text-xs text-faint">{channel.handle}</span>
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-8 text-sm text-muted">
            Channels are launching shortly. The starter guide is the fastest way to get
            the breakdowns as they publish.
          </p>
        )}
      </Section>

      <Section divider size="compact">
        <SectionHeader
          eyebrow="Where this leads"
          title="The path from content to a working system."
          lede="No obligation at any step. The guide is genuinely useful on its own."
        />
        <div className="mt-8 max-w-3xl">
          <FlowDiagram
            stages={["Content", "YardScale", "Free resource", "Breakdowns", "Growth call"]}
          />
        </div>
      </Section>

      <BottomCta
        title="Or skip ahead."
        copy="If you already know something's broken and you'd rather have it looked at directly, start with the diagnostic."
        origin="resources"
      />
    </>
  );
}
