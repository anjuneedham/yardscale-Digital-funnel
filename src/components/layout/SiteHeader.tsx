"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, cta, bookingUrl } from "@/content/site";
import { cn } from "@/lib/cn";
import { CtaLink, ArrowGlyph } from "@/components/ui/Cta";
import { Logo } from "./Logo";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const close = () => setOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-colors duration-300",
        scrolled || open
          ? "border-b border-line bg-void/85 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <div className="container-x flex h-16 items-center justify-between gap-4 sm:h-18">
        <Logo />

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => {
              const active =
                item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "rounded-full px-3.5 py-2 text-sm transition-colors",
                      active ? "text-ink" : "text-muted hover:text-ink",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <CtaLink
              href={bookingUrl || cta.secondary.href}
              className="whitespace-nowrap"
              event="booking_cta_click"
              eventProps={{ origin: "header" }}
              {...(bookingUrl ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              {cta.secondary.label}
            </CtaLink>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink-soft transition-colors hover:border-line-strong lg:hidden"
          >
            <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
              {open ? <path d="M5 5l10 10M15 5L5 15" /> : <path d="M3 6h14M3 12h14" />}
            </svg>
          </button>
        </div>
      </div>

      {open ? (
        <div id="mobile-nav" className="border-t border-line bg-void lg:hidden">
          <nav aria-label="Mobile" className="container-x py-6">
            <ul className="space-y-1">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={close}
                    className="flex items-center justify-between rounded-lg px-3 py-3.5 text-lg text-ink-soft transition-colors hover:bg-panel hover:text-ink"
                  >
                    {item.label}
                    <ArrowGlyph className="text-faint" />
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 grid gap-3">
              <CtaLink href={cta.primary.href} size="lg" onClick={close} event="hero_cta_click" eventProps={{ origin: "mobile_nav" }}>
                {cta.primary.label}
              </CtaLink>
              <CtaLink
                href={bookingUrl || cta.secondary.href}
                variant="secondary"
                size="lg"
                onClick={close}
                event="booking_cta_click"
                eventProps={{ origin: "mobile_nav" }}
                {...(bookingUrl ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {cta.secondary.label}
              </CtaLink>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
