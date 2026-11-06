import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import type { SaveState } from "@/lib/campaign/client";

/** Small presentational primitives for the dashboard. Reuse the site's tokens. */

export const inputCls =
  "w-full min-h-11 rounded-lg border border-line bg-void px-3.5 py-2.5 text-[0.9375rem] text-ink placeholder:text-faint focus:border-signal/50 focus:outline-none";

export const btnCls =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-line px-4 text-sm text-ink-soft transition-colors hover:border-line-strong hover:text-ink disabled:opacity-50";

export const btnPrimaryCls =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-signal px-5 text-sm font-medium text-[color:var(--color-on-signal)] transition-colors hover:bg-[#cdff2e] disabled:opacity-50";

export function Card({ className, children }: { className?: string; children: ReactNode }) {
  return <section className={cn("card min-w-0 p-4 sm:p-6", className)}>{children}</section>;
}

export function PageTitle({ eyebrow, title, children }: { eyebrow?: string; title: string; children?: ReactNode }) {
  return (
    <header className="mb-6 flex flex-wrap items-end justify-between gap-3">
      <div>
        {eyebrow ? <p className="label-mono text-signal">{eyebrow}</p> : null}
        <h1 className="mt-1.5 text-2xl font-semibold tracking-[-0.02em] sm:text-3xl">{title}</h1>
      </div>
      {children}
    </header>
  );
}

export function H2({ children }: { children: ReactNode }) {
  return <h2 className="text-lg font-semibold tracking-[-0.01em]">{children}</h2>;
}

export function Label({ children }: { children: ReactNode }) {
  return <span className="label-mono block">{children}</span>;
}

export function ProgressBar({ value, label }: { value: number; label: string }) {
  return (
    <div
      role="progressbar"
      aria-label={label}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(value)}
      className="h-2 w-full overflow-hidden rounded-full bg-raised"
    >
      <div className="h-full rounded-full bg-signal" style={{ width: `${Math.max(value, value > 0 ? 1.5 : 0)}%` }} />
    </div>
  );
}

export function SaveBadge({ state, error }: { state: SaveState; error?: string }) {
  if (state === "idle") return null;
  const text = state === "saving" ? "Saving…" : state === "saved" ? "Saved" : error || "Not saved";
  return (
    <span
      role={state === "error" ? "alert" : "status"}
      className={cn(
        "text-xs",
        state === "saved" && "text-signal",
        state === "saving" && "text-muted",
        state === "error" && "text-warn",
      )}
    >
      {text}
    </span>
  );
}

export function Chip({ children, tone = "default" }: { children: ReactNode; tone?: "default" | "signal" | "warn" }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs",
        tone === "default" && "border-line text-muted",
        tone === "signal" && "border-signal/40 text-signal",
        tone === "warn" && "border-warn/40 text-warn",
      )}
    >
      {children}
    </span>
  );
}
