/**
 * The YardScale Build Room — content as part of the funnel.
 *
 * Add real posts, videos and threads here as they are published. Every entry
 * requires a working `href`. Do not add engagement numbers, view counts, or
 * performance claims — this file has no field for them by design.
 */

export type ContentFormat =
  | "Growth breakdown"
  | "Funnel breakdown"
  | "Website teardown"
  | "Offer strategy"
  | "Build in public"
  | "Business lesson"
  | "Digital product idea"
  | "Growth system";

export type ContentItem = {
  id: string;
  title: string;
  /** Which channel it lives on — must match a channel id in site.ts. */
  channel: string;
  format: ContentFormat;
  /** Short description of what the piece covers. */
  blurb: string;
  href: string;
  /** ISO date, e.g. "2026-02-14". Leave empty if not applicable. */
  date: string;
};

/** Populate as content goes live. An empty list renders the "publishing soon" state. */
export const contentItems: ContentItem[] = [];

/** The kinds of work published in the Build Room. Used to set expectations before content exists. */
export const contentFormats: { format: ContentFormat; description: string }[] = [
  {
    format: "Growth breakdown",
    description:
      "A business, its traffic, its offer, and the exact point where the system stops working.",
  },
  {
    format: "Funnel breakdown",
    description: "A funnel walked step by step — what each step is for and what it leaks.",
  },
  {
    format: "Website teardown",
    description: "A real site reviewed for function, not aesthetics.",
  },
  {
    format: "Offer strategy",
    description: "How offers get packaged, positioned, and priced so they can be sold.",
  },
  {
    format: "Build in public",
    description: "Systems we are building, while we build them, including what fails.",
  },
  {
    format: "Business lesson",
    description: "Operating lessons from building growth infrastructure.",
  },
  {
    format: "Digital product idea",
    description: "Product concepts, with the business logic that would make them work.",
  },
  {
    format: "Growth system",
    description: "End-to-end system maps for a specific type of business.",
  },
];
