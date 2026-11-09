"use client";

import Link from "next/link";
import { DEFAULT_NEXT, KIND_LABEL, feed, feedFormats, type FeedItem } from "@/content/feed";
import { socials } from "@/content/site";
import { parseVideo } from "@/lib/video";
import { track } from "@/lib/analytics";
import { VideoPlayer } from "@/components/media/VideoPlayer";
import { ArrowGlyph } from "@/components/ui/Cta";

/**
 * THE CONTENT SYSTEM. Latest videos, journey updates, build breakdowns and
 * clips from src/content/feed.ts. Every item ends in a next action.
 */
export function ContentFeed({ limit = 6 }: { limit?: number }) {
  const items = feed.slice(0, limit);
  const youtube = socials.find((s) => s.id === "youtube")?.href;

  return (
    <section id="content" className="border-t border-line py-20 sm:py-24 lg:py-28" style={{ scrollMarginTop: "5.5rem" }}>
      <div className="container-x">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <header className="max-w-3xl">
            <p className="label-mono mb-4 flex items-center gap-3">
              <span aria-hidden className="signal-rule" />
              Latest from the build
            </p>
            <h2 className="text-balance text-3xl font-semibold leading-[1.08] tracking-[-0.02em] sm:text-4xl lg:text-5xl">
              Watch it being built.
            </h2>
          </header>
          {youtube ? (
            <a
              href={youtube}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track("content_click", { origin: "feed_header", target: "youtube" })}
              className="inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-signal"
            >
              All videos on YouTube <ArrowGlyph />
            </a>
          ) : null}
        </div>

        {items.length > 0 ? (
          <ul className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <FeedCard key={item.id} item={item} />
            ))}
          </ul>
        ) : (
          <div className="mt-12 grid gap-10 border-t border-line pt-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
            <p className="max-w-md text-pretty text-base leading-relaxed text-ink-soft">
              The first videos are in production. Nothing is published here yet, so there
              is nothing to show. This is what will be posted, as it is made:
            </p>
            <ul className="border-t border-line">
              {feedFormats.map((format) => (
                <li key={format.kind} className="grid gap-1 border-b border-line py-4 sm:grid-cols-[11rem_1fr] sm:gap-6">
                  <span className="font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-signal sm:pt-1">
                    {KIND_LABEL[format.kind]}
                  </span>
                  <span className="text-[0.9375rem] leading-relaxed text-ink-soft">{format.description}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}

function FeedCard({ item }: { item: FeedItem }) {
  const next = item.next ?? DEFAULT_NEXT[item.kind];
  const video = parseVideo(item.url);
  const embeddable = video && video.provider !== "link";
  const external = /^https?:\/\//.test(item.url);

  return (
    <li className="flex flex-col">
      {embeddable ? (
        <VideoPlayer url={item.url} title={item.title} origin={`feed_${item.id}`} />
      ) : null}
      <p className="mt-4 flex items-center gap-3 font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-muted">
        <span className="text-signal">{KIND_LABEL[item.kind]}</span>
        {item.date ? <time dateTime={item.date}>{formatDate(item.date)}</time> : null}
      </p>
      <h3 className="mt-2 text-lg font-semibold leading-snug tracking-[-0.015em]">
        {embeddable ? (
          item.title
        ) : (
          <a
            href={item.url}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            onClick={() => track("content_click", { origin: "feed", target: item.id })}
            className="hover:text-signal"
          >
            {item.title}
          </a>
        )}
      </h3>
      <p className="mt-2 text-pretty text-sm leading-relaxed text-muted">{item.blurb}</p>
      <Link
        href={next.href}
        onClick={() => track("cta_click", { origin: `feed_${item.id}`, cta: next.label })}
        className="group mt-4 inline-flex items-center gap-2 self-start py-1 text-sm font-medium text-ink hover:text-signal"
      >
        Next: {next.label} <ArrowGlyph className="group-hover:translate-x-0.5" />
      </Link>
    </li>
  );
}

function formatDate(iso: string): string {
  const date = new Date(`${iso}T00:00:00Z`);
  if (Number.isNaN(date.getTime())) return iso;
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" });
}
