import { cta } from "./site";

/**
 * The content feed — Andrew's ongoing video and build-in-public content.
 *
 * TO PUBLISH: add an entry to the top of `feed`. Each needs a real `url`
 * (YouTube, Shorts, TikTok, X or an on-site path). YouTube links get an
 * automatic thumbnail and play inline; other links open in a new tab.
 *
 * Every item carries a next action so no piece of content is a dead end. If
 * you leave `next` off, the default for its kind (below) is used. There is no
 * field for view counts or engagement numbers by design.
 */

export type FeedKind = "video" | "short" | "journey" | "breakdown" | "lesson" | "case-study";

export type FeedItem = {
  id: string;
  kind: FeedKind;
  title: string;
  /** One or two sentences on what it covers. */
  blurb: string;
  url: string;
  /** ISO date, e.g. "2026-11-20". */
  date: string;
  next?: { label: string; href: string };
};

export const KIND_LABEL: Record<FeedKind, string> = {
  video: "Video",
  short: "Short",
  journey: "Founder journey",
  breakdown: "Build breakdown",
  lesson: "Lesson",
  "case-study": "Case study",
};

/** The default next step for each kind of content. */
export const DEFAULT_NEXT: Record<FeedKind, { label: string; href: string }> = {
  video: { label: "Read the course", href: cta.academy.href },
  short: { label: "Get the build notes", href: cta.subscribe.href },
  journey: { label: "Get the build notes", href: cta.subscribe.href },
  breakdown: { label: "Read the course", href: cta.academy.href },
  lesson: { label: "Read the course", href: cta.academy.href },
  "case-study": { label: cta.coaching.label, href: cta.coaching.href },
};

/** Newest first. Empty renders the "publishing soon" state. */
export const feed: FeedItem[] = [];

/** What gets published here — shown before the first item exists. */
export const feedFormats: { kind: FeedKind; description: string }[] = [
  { kind: "video", description: "Long-form videos on building and selling software." },
  { kind: "journey", description: "Where the products are at, including what is not working." },
  { kind: "breakdown", description: "How a specific feature, launch or decision was actually made." },
  { kind: "lesson", description: "One idea from the course, explained with a real example." },
  { kind: "short", description: "Short clips for the points that only need a minute." },
];
