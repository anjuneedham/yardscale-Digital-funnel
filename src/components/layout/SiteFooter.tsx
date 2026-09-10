import Link from "next/link";
import { site, footerNav, socials, cta, bookingUrl } from "@/content/site";
import { CtaLink, ArrowGlyph } from "@/components/ui/Cta";
import { Logo } from "./Logo";

export function SiteFooter() {
  const liveSocials = socials.filter((s) => s.href);
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-surface">
      <div className="container-x py-14 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-sm text-pretty text-sm leading-relaxed text-muted">
              A growth operator agency. We find the bottleneck between attention and
              revenue, then build the infrastructure that solves it.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <CtaLink href={cta.primary.href} event="hero_cta_click" eventProps={{ origin: "footer" }}>
                {cta.primary.label} <ArrowGlyph />
              </CtaLink>
              <CtaLink
                href={bookingUrl || cta.secondary.href}
                variant="secondary"
                event="booking_cta_click"
                eventProps={{ origin: "footer" }}
                {...(bookingUrl ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {cta.secondary.label}
              </CtaLink>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            {footerNav.map((group) => (
              <nav key={group.title} aria-label={group.title}>
                <h2 className="label-mono">{group.title}</h2>
                <ul className="mt-4 space-y-2.5">
                  {group.links.map((link) => (
                    <li key={link.href + link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-ink-soft transition-colors hover:text-ink"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-6 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <p className="text-xs text-faint">
              © {year} {site.name}. All rights reserved.
            </p>
            <a
              href={`mailto:${site.email}`}
              className="text-xs text-muted transition-colors hover:text-ink"
            >
              {site.email}
            </a>
          </div>

          {liveSocials.length > 0 ? (
            <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
              {liveSocials.map((channel) => (
                <li key={channel.id}>
                  <a
                    href={channel.href}
                    target="_blank"
                    rel="noopener noreferrer me"
                    className="text-xs text-muted transition-colors hover:text-ink"
                  >
                    {channel.label}
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-xs text-faint">Channels launching soon.</p>
          )}
        </div>
      </div>
    </footer>
  );
}
