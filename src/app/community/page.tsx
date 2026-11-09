import type { Metadata } from "next";

import { communityPage, discordStructure, skoolStructure, spaces } from "@/content/community";
import { community, cta } from "@/content/site";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/layout/JsonLd";
import { PageHero } from "@/components/layout/PageHero";
import { BottomCta } from "@/components/layout/BottomCta";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Subscribe } from "@/components/home/Subscribe";
import { JoinLink } from "@/components/community/JoinLink";

export const metadata: Metadata = pageMetadata({
  title: "Community — build alongside other SaaS founders",
  description:
    "Two spaces for SaaS founders: a Discord for open discussion and networking, and a Skool classroom for structured, paid learning. See what each is for and how they differ.",
  path: "/community",
});

export default function CommunityPage() {
  const anyOpen = Boolean(community.discord.href || community.skool.href);

  const columns = [
    { key: "discord", config: community.discord, space: spaces.discord, price: "" },
    { key: "skool", config: community.skool, space: spaces.skool, price: community.skool.price },
  ] as const;

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Community", path: "/community" },
        ])}
      />

      <PageHero eyebrow={communityPage.eyebrow} title={communityPage.title} lede={<p>{communityPage.lede}</p>}>
        {anyOpen ? null : (
          <p className="max-w-2xl rounded-lg border border-warn/40 bg-warn/[0.06] px-4 py-3 text-sm leading-relaxed text-ink-soft">
            Both spaces are being set up and are not open yet. This page explains what each
            will be. Leave your email below and you will be told the day they open.
          </p>
        )}
      </PageHero>

      <Section divider tone="raised">
        <SectionHeader eyebrow="Why a community" title="Building alone is the slow way." />
        <ul className="mt-10 grid gap-x-12 border-t border-line sm:grid-cols-2">
          {communityPage.benefits.map((benefit) => (
            <li key={benefit.title} className="border-b border-line py-6">
              <h3 className="text-lg font-semibold tracking-[-0.015em]">{benefit.title}</h3>
              <p className="mt-2 text-pretty text-[0.9375rem] leading-relaxed text-muted">{benefit.detail}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section divider id="spaces">
        <SectionHeader
          eyebrow="Two spaces, two jobs"
          title="Discord is the open room. Skool is the classroom."
          lede="They are deliberately different. Start in Discord to meet people and talk. Join Skool when you want to work through the courses in a structured group."
        />

        <div className="mt-12 grid gap-px overflow-hidden rounded-card border border-line bg-line lg:grid-cols-2">
          {columns.map(({ key, config, space, price }) => (
            <div key={key} id={key} className="flex flex-col bg-void p-6 sm:p-9" style={{ scrollMarginTop: "5.5rem" }}>
              <p className="label-mono text-signal">{space.role}</p>
              <h3 className="mt-3 text-4xl font-semibold tracking-[-0.03em]">{config.name}</h3>
              <p className="mt-2 font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-muted">
                {space.cost}
                {price ? ` · ${price}` : ""}
              </p>
              <p className="mt-5 text-pretty text-[0.9375rem] leading-relaxed text-ink-soft">{space.summary}</p>
              <p className="label-mono mt-7">Best for</p>
              <ul className="mt-3 flex-1 border-t border-line">
                {space.bestFor.map((item) => (
                  <li key={item} className="border-b border-line py-3 text-[0.9375rem] text-ink-soft">
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <JoinLink name={config.name} href={config.href} variant={key === "discord" ? "primary" : "secondary"} />
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section divider tone="raised">
        <SectionHeader
          eyebrow="What is inside"
          title="How each space is organised."
          lede="The planned layout, so you know what you are joining."
        />
        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h3 className="text-xl font-semibold tracking-[-0.02em]">Discord channels</h3>
            <div className="mt-5 space-y-7">
              {discordStructure.map((group) => (
                <div key={group.category}>
                  <p className="label-mono">{group.category}</p>
                  <ul className="mt-2 border-t border-line">
                    {group.channels.map((channel) => (
                      <li key={channel.name} className="grid gap-1 border-b border-line py-3 sm:grid-cols-[12rem_1fr] sm:gap-4">
                        <span className="font-mono text-sm text-ink"># {channel.name}</span>
                        <span className="text-sm leading-relaxed text-muted">{channel.purpose}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold tracking-[-0.02em]">Skool classroom</h3>
            <ol className="mt-5 border-t border-line">
              {skoolStructure.classroom.map((entry, i) => (
                <li key={entry.title} className="grid gap-1 border-b border-line py-4 sm:grid-cols-[2rem_1fr] sm:gap-3">
                  <span className="font-mono text-xs text-signal sm:pt-1">{String(i + 1).padStart(2, "0")}</span>
                  <span>
                    <span className="block text-[0.9375rem] font-medium text-ink">{entry.title}</span>
                    <span className="mt-1 block text-sm leading-relaxed text-muted">{entry.detail}</span>
                  </span>
                </li>
              ))}
            </ol>
            <p className="label-mono mt-7">Discussion categories</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">{skoolStructure.categories.join(" · ")}</p>
          </div>
        </div>
      </Section>

      <div id="notify" style={{ scrollMarginTop: "5.5rem" }}>
        <Subscribe
          origin="community_notify"
          title={anyOpen ? "Stay in the loop." : "Be told the day it opens."}
          copy={
            anyOpen
              ? "Join the build notes for new lessons, videos and community announcements."
              : "Leave your email and you will get one message when the Discord opens and one when the Skool classroom opens, along with the build notes."
          }
        />
      </div>

      <BottomCta
        origin="community"
        title="Do not want to wait for the community?"
        copy="The course is readable now, and coaching is open for applications."
        primary={cta.academy}
        secondary={cta.coaching}
      />
    </>
  );
}
