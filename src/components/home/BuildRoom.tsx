"use client";

import { socials } from "@/content/site";
import { contentItems, contentFormats } from "@/content/build-room";
import { Section, SectionHeader } from "@/components/ui/Section";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/cn";

/**
 * CONTENT AS TRUST.
 *
 * Traffic arrives from social, so the channels are part of the funnel. Real
 * posts render as cards once added to content/build-room.ts. Until then the
 * section sets expectations honestly — no fabricated posts, no invented
 * follower or view counts.
 */
export function BuildRoom() {
  const hasContent = contentItems.length > 0;

  return (
    <Section id="build-room" divider tone="raised">
      <SectionHeader
        eyebrow="Content"
        title="From the YardScale Build Room."
        lede="Growth breakdowns, funnel teardowns, offer strategy and build-in-public — published on the platforms you probably arrived from."
      />

      <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {socials.map((channel) => {
          const live = Boolean(channel.href);
          const className = cn(
            "flex items-center justify-between gap-4 rounded-lg border p-4 transition-colors",
            live
              ? "border-line bg-panel/60 hover:border-signal/40 hover:bg-raised/70"
              : "border-dashed border-line bg-panel/25",
          );

          const inner = (
            <>
              <span className="min-w-0">
                <span className="block text-[0.9375rem] font-medium text-ink">
                  {channel.label}
                </span>
                <span className="mt-0.5 block truncate font-mono text-xs text-faint">
                  {channel.handle}
                </span>
              </span>
              <span
                className={cn(
                  "shrink-0 rounded-full px-2.5 py-1 font-mono text-[0.625rem] uppercase tracking-[0.12em]",
                  live ? "bg-signal/15 text-signal" : "bg-raised text-faint",
                )}
              >
                {live ? "Live" : "Soon"}
              </span>
            </>
          );

          return (
            <li key={channel.id}>
              {live ? (
                <a
                  href={channel.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={className}
                  onClick={() => track("content_channel_click", { channel: channel.id })}
                >
                  {inner}
                </a>
              ) : (
                <div className={className} aria-disabled>
                  {inner}
                </div>
              )}
            </li>
          );
        })}
      </ul>

      {hasContent ? (
        <ul className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {contentItems.slice(0, 6).map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-full flex-col card card-interactive p-6"
                onClick={() => track("content_channel_click", { channel: item.channel, id: item.id })}
              >
                <p className="label-mono">{item.format}</p>
                <h3 className="mt-3 text-base font-semibold leading-snug text-ink">
                  {item.title}
                </h3>
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
    </Section>
  );
}
