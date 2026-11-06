"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import { chapters } from "@/content/campaign/meta";
import type { Episode } from "@/content/campaign/types";
import { PIECES, PIECE_LABEL, formatDate, overallStatus, pieceStatus, publishedCount, statusLabel, type EpisodeState } from "@/lib/campaign/shared";
import { cn } from "@/lib/cn";
import { StatusSelect } from "./StatusSelect";
import { Chip } from "./ui";

/** All 56 episodes, grouped by chapter, with inline status control for every piece. */
export function CalendarList({
  episodes,
  initial,
  today,
}: {
  episodes: Pick<Episode, "n" | "date" | "chapter" | "title">[];
  initial: Record<number, EpisodeState>;
  today: number;
}) {
  const [states, setStates] = useState(initial);
  const [filter, setFilter] = useState<number | "all">("all");

  const grouped = useMemo(
    () => chapters.filter((c) => filter === "all" || c.n === filter).map((c) => ({ c, eps: episodes.filter((e) => e.chapter === c.n) })),
    [episodes, filter],
  );

  function setStatus(n: number, key: (typeof PIECES)[number], value: string) {
    setStates((s) => ({ ...s, [n]: { ...s[n], status: { ...s[n]?.status, [key]: value as never } } }));
  }

  return (
    <div>
      <div role="group" aria-label="Filter by chapter" className="mb-5 flex gap-2 overflow-x-auto pb-1">
        {(["all", ...chapters.map((c) => c.n)] as const).map((f) => (
          <button
            key={f}
            type="button"
            aria-pressed={filter === f}
            onClick={() => setFilter(f)}
            className={cn(
              "min-h-10 shrink-0 rounded-full border px-4 text-sm",
              filter === f ? "border-signal/60 bg-signal/10 text-signal" : "border-line text-muted hover:text-ink",
            )}
          >
            {f === "all" ? "All 56 days" : `Ch ${f}`}
          </button>
        ))}
      </div>

      {grouped.map(({ c, eps }) => (
        <section key={c.n} className="mb-8" aria-labelledby={`ch-${c.n}`}>
          <h2 id={`ch-${c.n}`} className="text-lg font-semibold">
            Chapter {c.n}: {c.name}
          </h2>
          <p className="mb-3 mt-1 max-w-3xl text-sm text-muted">{c.goal}</p>
          <ul className="space-y-3">
            {eps.map((e) => {
              const st = states[e.n];
              const done = publishedCount(st);
              return (
                <li key={e.n} className={cn("card p-4", e.n === today && "border-signal/60")}>
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <Link href={`/dashboard/episode/${e.n}`} className="min-w-0 flex-1 hover:text-signal">
                      <span className="label-mono block">
                        Ep {e.n} · {formatDate(e.date)}
                        {e.n === today ? " · TODAY" : ""}
                      </span>
                      <span className="mt-1 block font-medium leading-snug">{e.title}</span>
                    </Link>
                    <Chip tone={done === 4 ? "signal" : "default"}>
                      {statusLabel(overallStatus(st))} · {done}/4 live
                    </Chip>
                  </div>
                  <div className="mt-3 grid grid-cols-2 gap-2 lg:grid-cols-4">
                    {PIECES.map((k) => (
                      <StatusSelect
                        key={k}
                        episode={e.n}
                        piece={k}
                        value={pieceStatus(st, k)}
                        label={PIECE_LABEL[k]}
                        onChange={(v) => setStatus(e.n, k, v)}
                      />
                    ))}
                  </div>
                </li>
              );
            })}
          </ul>
        </section>
      ))}
    </div>
  );
}
