import Link from "next/link";
import { community, offers } from "@/content/site";
import { Section, SectionHeader } from "@/components/ui/Section";
import { ArrowGlyph } from "@/components/ui/Cta";

type Row = {
  name: string;
  href: string;
  status: string;
  live: boolean;
  summary: string;
  action: string;
};

/**
 * WHAT IS AVAILABLE. Four ways in, with an honest status on each. Statuses are
 * derived from src/content/site.ts, so they change when the config changes.
 */
export function Offers() {
  const communityLive = Boolean(community.discord.href || community.skool.href);

  const rows: Row[] = [
    {
      name: "Coaching",
      href: "/coaching",
      status: offers.coaching.status === "open" ? "Open for applications" : "Not taking applications",
      live: offers.coaching.status === "open",
      summary: "One-on-one guidance from Andrew while you build. For founders who want direct, practical help on their own product.",
      action: "How coaching works",
    },
    {
      name: "Partnerships",
      href: "/partnerships",
      status: offers.partnerships.status === "open" ? "Selective — applications open" : "Closed",
      live: offers.partnerships.status === "open",
      summary: "YardScale as a hands-on building partner on your SaaS: strategy, build, launch and growth. A small number of projects.",
      action: "How partnerships work",
    },
    {
      name: "Academy",
      href: "/academy",
      status: "First module open — more in progress",
      live: true,
      summary: "Text-based courses, starting with Zero to SaaS: The Founder Operating System. Read the opening module now; the rest is being written.",
      action: "Open the Academy",
    },
    {
      name: "Community",
      href: "/community",
      status: communityLive ? "Open" : "Opening soon",
      live: communityLive,
      summary: "A Discord for founder discussion and a Skool classroom for structured learning. Both are being set up.",
      action: communityLive ? "Join the community" : "See what is planned",
    },
  ];

  return (
    <Section id="offers" divider tone="raised">
      <SectionHeader
        eyebrow="How we help"
        title="Four ways to work with YardScale."
        lede="Two are open today. Two are being built in public. Each one is labelled so you know exactly what exists right now."
      />

      <ul className="mt-12 border-t border-line">
        {rows.map((row) => (
          <li key={row.name} className="border-b border-line">
            <Link
              href={row.href}
              className="group grid gap-3 py-7 transition-colors hover:bg-panel/60 sm:px-4 lg:grid-cols-[14rem_1fr_auto] lg:items-center lg:gap-10 lg:py-9"
            >
              <div>
                <h3 className="text-2xl font-semibold tracking-[-0.025em] sm:text-3xl">{row.name}</h3>
                <p className="mt-2 flex items-center gap-2 font-mono text-[0.6875rem] uppercase tracking-[0.12em]">
                  <span
                    aria-hidden
                    className={`h-1.5 w-1.5 rounded-full ${row.live ? "bg-signal" : "bg-warn"}`}
                  />
                  <span className={row.live ? "text-signal" : "text-warn"}>{row.status}</span>
                </p>
              </div>
              <p className="max-w-2xl text-pretty text-[0.9375rem] leading-relaxed text-ink-soft sm:text-base">
                {row.summary}
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-ink group-hover:text-signal">
                {row.action}
                <ArrowGlyph className="group-hover:translate-x-0.5" />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}
