/**
 * Global site configuration.
 * Edit this file to change brand details, navigation, CTAs and contact info.
 */

export const site = {
  name: "YardScale Digital",
  shortName: "YardScale",
  /** Used for canonical URLs, sitemap and Open Graph. Override with NEXT_PUBLIC_SITE_URL. */
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://yardscaledigital.com").replace(/\/$/, ""),
  tagline: "Build the growth system behind your business.",
  /** The brand kit's own line, used where the lockup needs a voice. */
  promise: "We build. You grow.",
  /** The three disciplines named in the brand kit, in its order. */
  disciplines: ["Offers", "Funnels", "Distribution"],
  /** The three outcomes named in the brand kit, in its order. */
  outcomes: ["More customers", "More sales", "Real growth"],
  description:
    "YardScale Digital builds high-ticket offers, courses and funnels for solopreneurs — then runs the paid distribution that fills them. We identify the bottleneck between attention and revenue, and build the system that solves it.",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@yardscaledigital.com",
  locale: "en_US",
} as const;

export const cta = {
  primary: {
    label: "Find your growth bottleneck",
    /** Anchors to the on-page diagnostic. */
    href: "/#bottleneck",
  },
  secondary: {
    label: "Book a growth call",
    href: "/book",
  },
  tertiary: {
    label: "See what we build",
    href: "/what-we-build",
  },
} as const;

/**
 * External booking link (Calendly, Cal.com, SavvyCal, HubSpot…).
 * When NEXT_PUBLIC_BOOKING_URL is set, the /book page embeds and links to it.
 * When it is not set, /book falls back to the qualification form.
 */
export const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL ?? "";

export const nav: { label: string; href: string }[] = [
  { label: "Home", href: "/" },
  { label: "What We Build", href: "/what-we-build" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Work", href: "/work" },
  { label: "Growth System", href: "/growth-system" },
  { label: "Resources", href: "/resources" },
  { label: "About", href: "/about" },
];

export const footerNav: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "How It Works", href: "/how-it-works" },
      { label: "Work", href: "/work" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Capabilities",
    links: [
      { label: "High-Ticket Offers", href: "/what-we-build#high-ticket-offers" },
      { label: "Courses & Knowledge Products", href: "/what-we-build#courses-education" },
      { label: "Funnels & Landing Pages", href: "/what-we-build#funnels" },
      { label: "Distribution & Paid Traffic", href: "/what-we-build#distribution" },
    ],
  },
  {
    title: "Start here",
    links: [
      { label: "Find your bottleneck", href: "/#bottleneck" },
      { label: "The Growth Operator System", href: "/growth-system" },
      { label: "Free starter guide", href: "/resources#starter-guide" },
      { label: "Book a growth call", href: "/book" },
    ],
  },
];

/**
 * Social / content channels. Set `href` when the channel goes live.
 * Channels without an href render as "coming soon" and are excluded from
 * structured data — nothing is fabricated.
 */
export type SocialChannel = {
  id: string;
  label: string;
  handle: string;
  href: string;
};

export const socials: SocialChannel[] = [
  { id: "youtube", label: "YouTube", handle: "@yardscaledigital", href: "" },
  { id: "x", label: "X", handle: "@yardscaledigital", href: "" },
  { id: "linkedin", label: "LinkedIn", handle: "YardScale Digital", href: "" },
  { id: "instagram", label: "Instagram", handle: "@yardscaledigital", href: "" },
  { id: "tiktok", label: "TikTok", handle: "@yardscaledigital", href: "" },
  { id: "facebook", label: "Facebook", handle: "YardScale Digital", href: "" },
];
