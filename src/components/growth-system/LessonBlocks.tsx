import { cn } from "@/lib/cn";
import type { LessonBlock } from "@/content/growth-system/types";

/** Renders a lesson body from typed content blocks. Pure presentation. */
export function LessonBlocks({ blocks }: { blocks: LessonBlock[] }) {
  return (
    <div className="space-y-6">
      {blocks.map((block, i) => (
        <Block key={i} block={block} />
      ))}
    </div>
  );
}

function Block({ block }: { block: LessonBlock }) {
  switch (block.type) {
    case "heading":
      // h2 because lesson bodies sit directly under the page h1. Styling is
      // unchanged; this only keeps the heading order from skipping a level.
      return (
        <h2 className="pt-2 text-lg font-semibold tracking-[-0.01em] text-ink sm:text-xl">
          {block.text}
        </h2>
      );
    case "text":
      return (
        <p className="text-pretty text-[0.9375rem] leading-relaxed text-ink-soft sm:text-base sm:leading-relaxed">
          {block.body}
        </p>
      );
    case "list":
      return block.ordered ? (
        <ol className="space-y-2.5">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-3.5 text-[0.9375rem] leading-relaxed text-ink-soft">
              <span className="font-mono text-xs text-signal">{String(i + 1).padStart(2, "0")}</span>
              <span>{item}</span>
            </li>
          ))}
        </ol>
      ) : (
        <ul className="space-y-2.5">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-3.5 text-[0.9375rem] leading-relaxed text-ink-soft">
              <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case "framework":
      return (
        <div className="rounded-card border border-line bg-panel/60 p-5 sm:p-6">
          <p className="label-mono mb-4">{block.title}</p>
          <ol className="space-y-4">
            {block.steps.map((step, i) => (
              <li key={i} className="flex gap-4">
                <span className="font-mono text-xs text-signal">{String(i + 1).padStart(2, "0")}</span>
                <div className="min-w-0">
                  <p className="text-[0.9375rem] font-medium text-ink">{step.label}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{step.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      );
    case "example":
      return (
        <div className="rounded-card border border-line bg-raised/40 p-5 sm:p-6">
          {block.title ? <p className="label-mono mb-2 text-ink-soft">{block.title}</p> : null}
          <p className="text-[0.9375rem] leading-relaxed text-ink-soft">{block.body}</p>
        </div>
      );
    case "callout": {
      const tone = {
        signal: "border-signal/30 bg-signal/[0.06]",
        warn: "border-warn/30 bg-warn/[0.06]",
        muted: "border-line bg-panel/60",
      }[block.tone];
      const accent = {
        signal: "text-signal",
        warn: "text-warn",
        muted: "text-muted",
      }[block.tone];
      return (
        <div className={cn("rounded-card border p-5 sm:p-6", tone)}>
          {block.title ? <p className={cn("label-mono mb-2", accent)}>{block.title}</p> : null}
          <p className="text-[0.9375rem] leading-relaxed text-ink-soft">{block.body}</p>
        </div>
      );
    }
    case "quote":
      return (
        <blockquote className="border-l-2 border-signal pl-5">
          <p className="text-pretty text-lg font-medium leading-relaxed text-ink">{block.body}</p>
          {block.attribution ? (
            <cite className="mt-2 block text-sm not-italic text-muted">— {block.attribution}</cite>
          ) : null}
        </blockquote>
      );
    default:
      return null;
  }
}
