"use client";

import { usePathname } from "next/navigation";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

/**
 * Conditional marketing chrome.
 *
 * The Growth Operator System's member app (dashboard + lessons) uses its own
 * application shell, so the marketing header/footer are hidden there. Every
 * other route — including the public course sales page and login — keeps the
 * normal YardScale chrome, so the course still feels native to the site.
 */

const APP_PREFIXES = ["/growth-system/dashboard", "/growth-system/phase-"];

function isAppRoute(pathname: string): boolean {
  return APP_PREFIXES.some((prefix) => pathname.startsWith(prefix));
}

export function SiteChromeHeader() {
  const pathname = usePathname();
  if (isAppRoute(pathname)) return null;
  return <SiteHeader />;
}

export function SiteChromeFooter() {
  const pathname = usePathname();
  if (isAppRoute(pathname)) return null;
  return <SiteFooter />;
}
