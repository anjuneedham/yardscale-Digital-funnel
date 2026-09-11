import Link from "next/link";
import { cn } from "@/lib/cn";
import type { FrameworkStage } from "@/content/growth-system/types";

/**
 * The Growth Operator System map — a vertical spine of the nine stages.
 *
 * Shared by the public sales page (neutral, non-interactive) and the member
 * dashboard (state-coloured, linked). It reads as one connected operating
 * system rather than a set of course cards.
 */

export type StageState = "complete" | "current" | "available" | "locked";

export function SystemMap({
  stages,
  states,
  linkBase,
  className,
}: {
  stages: FrameworkStage[];
  /** Optional per-phase state; omit for the neutral marketing view. */
  states?: Record<string, StageState>;
  /** When set, available/complete/current stages link to `${linkBase}/${slug}`. */
  linkBase?: string;
  className?: string;
}) {
  return (
    <ol className={cn("relative", className)}>
      <span
        aria-hidden
        className="absolute bottom-4 left-[15px] top-4 w-px bg-[linear-gradient(to_bottom,var(--color-line-strong),var(--color-line))] sm:left-[19px]"
      />
      {stages.map((stage) => {
        const state: StageState = states?.[stage.phaseSlug] ?? "available";
        const linked = Boolean(linkBase) && state !== "locked";
        const href = `${linkBase}/${stage.phaseSlug}`;

        const inner = (
          <div
            className={cn(
              "relative flex gap-4 rounded-[14px] border p-4 transition-colors sm:gap-5 sm:p-5",
              state === "locked"
                ? "border-line bg-panel/40"
                : "border-line bg-panel/70",
              linked && "card-interactive hover:border-signal/40",
            )}
          >
            <StageNode number={stage.number} state={state} />
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <span className="label-mono text-signal">{stage.code}</span>
                <StatePill state={state} />
              </div>
              <h3
                className={cn(
                  "mt-1.5 text-base font-semibold tracking-[-0.01em] sm:text-lg",
                  state === "locked" ? "text-muted" : "text-ink",
                )}
              >
                {stage.title}
              </h3>
              <p className="mt-1 text-pretty text-sm leading-relaxed text-muted">
                {stage.summary}
              </p>
            </div>
          </div>
        );

        return (
          <li key={stage.phaseSlug} className="relative pb-3 last:pb-0">
            {linked ? (
              <Link href={href} className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-signal/60 rounded-[14px]">
                {inner}
              </Link>
            ) : (
              inner
            )}
          </li>
        );
      })}
    </ol>
  );
}

function StageNode({ number, state }: { number: number; state: StageState }) {
  const label = String(number).padStart(2, "0");
  return (
    <div
      aria-hidden
      className={cn(
        "relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border font-mono text-xs font-semibold sm:h-10 sm:w-10 sm:text-sm",
        state === "complete" && "border-signal bg-signal text-[color:var(--color-on-signal)]",
        state === "current" && "border-signal bg-void text-signal shadow-[0_0_0_3px_var(--color-signal-glow)]",
        state === "available" && "border-line-strong bg-void text-ink-soft",
        state === "locked" && "border-line bg-void text-faint",
      )}
    >
      {state === "complete" ? (
        <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3.5 8.5l3 3 6-6.5" />
        </svg>
      ) : state === "locked" ? (
        <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.6">
          <rect x="3.5" y="7" width="9" height="6.5" rx="1.5" />
          <path d="M5.5 7V5a2.5 2.5 0 0 1 5 0v2" />
        </svg>
      ) : (
        label
      )}
    </div>
  );
}

function StatePill({ state }: { state: StageState }) {
  if (state === "available") return null;
  const config: Record<Exclude<StageState, "available">, { label: string; className: string }> = {
    complete: { label: "Complete", className: "bg-signal/15 text-signal" },
    current: { label: "In progress", className: "bg-signal/15 text-signal" },
    locked: { label: "Upcoming", className: "bg-raised text-faint" },
  };
  const { label, className } = config[state];
  return (
    <span className={cn("rounded-full px-2 py-0.5 font-mono text-[0.625rem] uppercase tracking-[0.12em]", className)}>
      {label}
    </span>
  );
}
