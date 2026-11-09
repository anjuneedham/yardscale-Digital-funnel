/**
 * Global site configuration — the control panel.
 *
 * Everything Andrew is likely to change without a redesign lives in this file:
 * the hero video, CTA labels and destinations, community links, coaching and
 * partnership pricing, social channels and contact details.
 *
 * Rule: an empty string means "does not exist yet". The site renders an honest
 * "not open yet" state for anything left empty — nothing is faked.
 */

export const site = {
  name: "YardScale Digital",
  shortName: "YardScale",
  founder: "Andrew Needham",
  /** Used for canonical URLs, sitemap and Open Graph. Override with NEXT_PUBLIC_SITE_URL. */
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://yardscaledigital.com").replace(/\/$/, ""),
  tagline: "Build your SaaS. Learn the entire process.",
  description:
    "YardScale Digital is an app studio and SaaS founder education business. Practical systems, real-world lessons and direct guidance for turning software ideas into businesses — through courses, community, coaching and selective build partnerships.",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@yardscaledigital.com",
  locale: "en_US",
} as const;

/* ------------------------------------------------------------------ */
/* Hero video                                                          */
/* ------------------------------------------------------------------ */

/**
 * The founder video at the top of the homepage — the primary sales asset.
 *
 * TO REPLACE IT: paste a YouTube, Vimeo or direct .mp4 URL into `url` (or set
 * NEXT_PUBLIC_HERO_VIDEO_URL in Vercel and redeploy). Any normal share link
 * works: youtube.com/watch?v=…, youtu.be/…, youtube.com/shorts/…, vimeo.com/….
 *
 * While `url` is empty the hero shows a clearly-labelled placeholder frame.
 * The video never autoplays; it loads only when the visitor presses play.
 */
export const heroVideo = {
  url: process.env.NEXT_PUBLIC_HERO_VIDEO_URL ?? "",
  title: "Andrew Needham on how YardScale helps founders build SaaS",
  /** Optional custom poster image (path in /public or full URL). YouTube posters are automatic. */
  poster: "",
  /** Shown on the placeholder frame until a real video is set. */
  placeholderNote: "Founder video — publishing soon",
} as const;

/* ------------------------------------------------------------------ */
/* Calls to action                                                     */
/* ------------------------------------------------------------------ */

/** One CTA vocabulary used on every page. Change a label or destination here once. */
export const cta = {
  explore: { label: "Explore How We Help", href: "/#offers" },
  coaching: { label: "Apply for Coaching", href: "/coaching#apply" },
  partnership: { label: "Apply for a Partnership", href: "/partnerships#apply" },
  academy: { label: "Start Learning", href: "/academy" },
  community: { label: "Join the Community", href: "/community" },
  subscribe: { label: "Get the Build Notes", href: "/#subscribe" },
} as const;

/* ------------------------------------------------------------------ */
/* Offers — availability and pricing                                   */
/* ------------------------------------------------------------------ */

export type OfferStatus = "open" | "building" | "planned";

/**
 * Pricing is configurable and deliberately empty. Leave `price` as "" and the
 * page says pricing is agreed after the application. Fill it in (for example
 * "From $X per month") and it appears on the page — no other change needed.
 */
export const offers = {
  coaching: {
    status: "open" as OfferStatus,
    price: "",
    priceNote: "Scope and pricing are agreed after your application, based on what you actually need.",
    /** Optional scheduler link sent to suitable applicants. Not shown publicly. */
    bookingUrl: process.env.NEXT_PUBLIC_BOOKING_URL ?? "",
  },
  partnerships: {
    status: "open" as OfferStatus,
    price: "",
    priceNote: "Partnership terms depend on the project, the stage and what each side brings. They are agreed case by case.",
  },
  academy: {
    status: "building" as OfferStatus,
  },
  community: {
    status: "building" as OfferStatus,
  },
} as const;

/* ------------------------------------------------------------------ */
/* Community destinations                                              */
/* ------------------------------------------------------------------ */

/**
 * External community links. Paste the invite URL when each space is live.
 * Empty `href` renders a "not open yet — get notified" state instead of a
 * dead link. Recommended structures for both are in docs/COMMUNITY_SETUP.md.
 */
export const community = {
  skool: {
    name: "Skool",
    href: process.env.NEXT_PUBLIC_SKOOL_URL ?? "",
    /** e.g. "$X per month". Empty hides the price line. */
    price: "",
  },
  discord: {
    name: "Discord",
    href: process.env.NEXT_PUBLIC_DISCORD_URL ?? "",
  },
} as const;

/* ------------------------------------------------------------------ */
/* Navigation                                                          */
/* ------------------------------------------------------------------ */

export const nav: { label: string; href: string }[] = [
  { label: "Academy", href: "/academy" },
  { label: "Community", href: "/community" },
  { label: "Coaching", href: "/coaching" },
  { label: "Partnerships", href: "/partnerships" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const footerNav: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Learn",
    links: [
      { label: "Academy", href: "/academy" },
      { label: "Zero to SaaS", href: "/academy/zero-to-saas" },
      { label: "Community", href: "/community" },
      { label: "Build notes", href: "/#subscribe" },
    ],
  },
  {
    title: "Work with Andrew",
    links: [
      { label: "Coaching", href: "/coaching" },
      { label: "Partnerships", href: "/partnerships" },
      { label: "Apply for coaching", href: "/coaching#apply" },
      { label: "Apply for a partnership", href: "/partnerships#apply" },
    ],
  },
  {
    title: "YardScale",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Guides library", href: "/education" },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Social channels                                                     */
/* ------------------------------------------------------------------ */

/**
 * Set `href` when a channel is live. Channels without an href are hidden from
 * the footer and excluded from structured data.
 */
export type SocialChannel = {
  id: string;
  label: string;
  href: string;
};

export const socials: SocialChannel[] = [
  { id: "youtube", label: "YouTube", href: "" },
  { id: "tiktok", label: "TikTok", href: "" },
  { id: "x", label: "X", href: "" },
  { id: "instagram", label: "Instagram", href: "" },
  { id: "linkedin", label: "LinkedIn", href: "" },
];
