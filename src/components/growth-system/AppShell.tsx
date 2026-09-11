"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * Application shell for the Growth Operator System member area.
 *
 * Deliberately distinct from the marketing header — this reads as an operating
 * console, not a website nav. Mobile-first: the top bar collapses to the
 * essentials and the dashboard itself is the primary navigation surface.
 */
export function AppShell({
  memberName,
  children,
}: {
  memberName: string;
  children: ReactNode;
}) {
  const pathname = usePathname();
  const onDashboard = pathname === "/growth-system/dashboard";

  return (
    <div className="min-h-screen bg-void">
      <header className="sticky top-0 z-50 border-b border-line bg-void/85 backdrop-blur-xl">
        <div className="container-x flex h-14 items-center justify-between gap-3 sm:h-16">
          <div className="flex items-center gap-3 sm:gap-5">
            <Link
              href="/growth-system/dashboard"
              className="flex items-center gap-2 text-sm font-semibold tracking-[-0.01em] text-ink"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-md bg-signal font-mono text-[0.7rem] font-bold text-[color:var(--color-on-signal)]">
                GO
              </span>
              <span className="hidden sm:inline">Growth Operator System</span>
              <span className="sm:hidden">Dashboard</span>
            </Link>
            {!onDashboard ? (
              <Link
                href="/growth-system/dashboard"
                className={cn(
                  "hidden rounded-full px-3 py-1.5 text-sm transition-colors sm:inline-block",
                  "text-muted hover:text-ink",
                )}
              >
                ← Dashboard
              </Link>
            ) : null}
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden text-sm text-muted sm:inline">{memberName}</span>
            <form action="/growth-system/api/session" method="post">
              <input type="hidden" name="intent" value="logout" />
              <button
                type="submit"
                className="rounded-full border border-line px-3.5 py-1.5 text-sm text-ink-soft transition-colors hover:border-line-strong hover:text-ink"
              >
                Sign out
              </button>
            </form>
          </div>
        </div>
      </header>

      <main className="container-x py-8 sm:py-12">{children}</main>

      <footer className="border-t border-line">
        <div className="container-x flex flex-col gap-2 py-6 text-xs text-faint sm:flex-row sm:items-center sm:justify-between">
          <span>The Growth Operator System — a YardScale Digital course.</span>
          <Link href="/" className="transition-colors hover:text-ink">
            Back to yardscaledigital.com
          </Link>
        </div>
      </footer>
    </div>
  );
}
