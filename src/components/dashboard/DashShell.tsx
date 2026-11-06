"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

const links = [
  { href: "/dashboard", label: "Overview", exact: true },
  { href: "/dashboard/calendar", label: "Calendar" },
  { href: "/dashboard/performance", label: "Performance" },
  { href: "/dashboard/leads", label: "Leads" },
  { href: "/dashboard/notes", label: "Notes" },
  { href: "/dashboard/guide", label: "Guide" },
];

export function DashShell({ todayHref, children }: { todayHref: string | null; children: ReactNode }) {
  const pathname = usePathname();
  return (
    <div className="min-h-screen bg-void">
      <header className="sticky top-0 z-50 border-b border-line bg-void/90 backdrop-blur-xl">
        <div className="container-x flex h-14 items-center justify-between gap-3">
          <Link href="/dashboard" className="flex items-center gap-2 text-sm font-semibold tracking-[-0.01em]">
            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-signal font-mono text-[0.7rem] font-bold text-[color:var(--color-on-signal)]">
              Z2H
            </span>
            <span className="hidden sm:inline">Zero to Hero</span>
          </Link>
          <div className="flex items-center gap-2">
            {todayHref ? (
              <Link
                href={todayHref}
                className="inline-flex min-h-10 items-center rounded-full bg-signal px-4 text-sm font-medium text-[color:var(--color-on-signal)]"
              >
                Today
              </Link>
            ) : null}
            <form action="/dashboard/api/session" method="post">
              <input type="hidden" name="intent" value="logout" />
              <button
                type="submit"
                className="min-h-10 rounded-full border border-line px-3.5 text-sm text-ink-soft hover:border-line-strong hover:text-ink"
              >
                Sign out
              </button>
            </form>
          </div>
        </div>
        <nav aria-label="Dashboard" className="container-x flex gap-1 overflow-x-auto pb-2">
          {links.map((l) => {
            const active = l.exact ? pathname === l.href : pathname.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "inline-flex min-h-10 shrink-0 items-center rounded-full px-4 text-sm transition-colors",
                  active ? "bg-raised text-ink" : "text-muted hover:text-ink",
                )}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>
      </header>
      <main className="container-x py-6 sm:py-10">{children}</main>
    </div>
  );
}
