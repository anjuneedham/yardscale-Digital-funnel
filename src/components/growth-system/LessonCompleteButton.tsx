"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/cn";

/**
 * Toggles lesson completion. Writes through the server progress API (the source
 * of truth) then refreshes server components so the dashboard, phase list and
 * map reflect the change. Never the sole record of completion — the server is.
 */
export function LessonCompleteButton({
  phaseSlug,
  lessonSlug,
  initialComplete,
  nextHref,
}: {
  phaseSlug: string;
  lessonSlug: string;
  initialComplete: boolean;
  nextHref?: string;
}) {
  const [complete, setComplete] = useState(initialComplete);
  const [error, setError] = useState(false);
  const [pending, startTransition] = useTransition();
  const router = useRouter();

  async function toggle() {
    const nextValue = !complete;
    setError(false);
    setComplete(nextValue); // optimistic
    try {
      const res = await fetch("/growth-system/api/progress", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phaseSlug, lessonSlug, complete: nextValue }),
      });
      if (!res.ok) throw new Error("failed");
      startTransition(() => router.refresh());
    } catch {
      setComplete(!nextValue); // revert
      setError(true);
    }
  }

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
      <button
        type="button"
        onClick={toggle}
        disabled={pending}
        aria-pressed={complete}
        className={cn(
          "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-[0.9375rem] font-medium transition-colors disabled:opacity-60",
          complete
            ? "border border-signal/50 bg-signal/10 text-signal"
            : "bg-signal text-[color:var(--color-on-signal)] hover:bg-[#cdff2e]",
        )}
      >
        {complete ? (
          <>
            <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3.5 8.5l3 3 6-6.5" />
            </svg>
            Completed
          </>
        ) : (
          "Mark lesson complete"
        )}
      </button>

      {complete && nextHref ? (
        <a
          href={nextHref}
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-line-strong px-6 text-[0.9375rem] text-ink transition-colors hover:border-signal/50"
        >
          Next lesson
          <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 8h9.5M8.5 4l4 4-4 4" />
          </svg>
        </a>
      ) : null}

      {error ? <span className="text-sm text-warn">Couldn&apos;t save — try again.</span> : null}
    </div>
  );
}
