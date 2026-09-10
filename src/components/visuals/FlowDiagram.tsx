import { cn } from "@/lib/cn";

const DASH_V =
  "bg-[repeating-linear-gradient(to_bottom,var(--color-line-strong)_0_3px,transparent_3px_7px)]";
const DASH_H =
  "bg-[repeating-linear-gradient(to_right,var(--color-line-strong)_0_3px,transparent_3px_7px)]";

/**
 * The site's core visual language: a sequence of stages with the signal
 * travelling between them. Used for every growth path, process flow and system
 * map on the site. Pure CSS — no imagery.
 *
 * "responsive" stacks vertically on phones and runs horizontally from `sm` up,
 * so connectors always point the way the eye is actually moving.
 */
export function FlowDiagram({
  stages,
  className,
  orientation = "responsive",
  highlightIndex,
  tone = "signal",
  compact = false,
}: {
  stages: string[];
  className?: string;
  orientation?: "responsive" | "horizontal" | "vertical";
  /** Index of the stage to mark as the constraint. */
  highlightIndex?: number;
  tone?: "signal" | "neutral";
  compact?: boolean;
}) {
  const vertical = orientation === "vertical";
  const responsive = orientation === "responsive";

  return (
    <ol
      className={cn(
        "flex",
        vertical && "flex-col gap-1.5",
        responsive && "flex-col gap-1.5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-2",
        orientation === "horizontal" && "flex-row flex-wrap items-center gap-2",
        className,
      )}
    >
      {stages.map((stage, index) => (
        <li
          key={`${stage}-${index}`}
          className={cn(
            "flex min-w-0",
            vertical && "flex-col items-stretch",
            responsive && "flex-col items-stretch sm:flex-row sm:items-center sm:gap-2",
            orientation === "horizontal" && "flex-row items-center gap-2",
          )}
        >
          <span
            className={cn(
              "flex items-center rounded-lg border px-3 py-2 font-mono text-[0.6875rem] uppercase tracking-[0.12em]",
              compact ? "sm:px-3 sm:py-2" : "sm:px-4 sm:py-2.5",
              highlightIndex === index
                ? "border-warn/50 bg-warn/10 text-warn"
                : tone === "signal"
                  ? "border-line-strong bg-raised/70 text-ink-soft"
                  : "border-line bg-panel text-muted",
            )}
          >
            <span className="truncate">{stage}</span>
          </span>

          {index < stages.length - 1 ? (
            <Connector vertical={vertical} responsive={responsive} />
          ) : null}
        </li>
      ))}
    </ol>
  );
}

function Connector({ vertical, responsive }: { vertical: boolean; responsive: boolean }) {
  return (
    <>
      {vertical || responsive ? (
        <span
          aria-hidden
          className={cn("mx-auto h-4 w-px shrink-0", DASH_V, responsive && "sm:hidden")}
        />
      ) : null}
      {!vertical ? (
        <span
          aria-hidden
          className={cn("h-px w-5 shrink-0", DASH_H, responsive && "hidden sm:block")}
        />
      ) : null}
    </>
  );
}
