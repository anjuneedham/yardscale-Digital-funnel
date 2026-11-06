"use client";

import { useState } from "react";

import { statuses } from "@/content/campaign/meta";
import type { ContentStatus, PieceKey } from "@/content/campaign/types";
import { patchRecord, useSaver } from "@/lib/campaign/client";
import { cn } from "@/lib/cn";
import { SaveBadge } from "./ui";

export function StatusSelect({
  episode,
  piece,
  value,
  label,
  onChange,
  compact,
}: {
  episode: number;
  piece: PieceKey;
  value: ContentStatus;
  label: string;
  onChange?: (v: ContentStatus) => void;
  compact?: boolean;
}) {
  const [current, setCurrent] = useState<ContentStatus>(value);
  const { state, error, run } = useSaver();

  async function change(next: ContentStatus) {
    const prev = current;
    setCurrent(next);
    onChange?.(next);
    const ok = await run(() => patchRecord("episode", String(episode), { status: { [piece]: next } }));
    if (!ok) {
      setCurrent(prev);
      onChange?.(prev);
    }
  }

  return (
    <label className="block min-w-0">
      {compact ? <span className="sr-only">{label}</span> : <span className="label-mono mb-1 block">{label}</span>}
      <select
        value={current}
        onChange={(e) => change(e.target.value as ContentStatus)}
        className={cn(
          "w-full min-h-11 rounded-lg border bg-void px-2.5 text-sm focus:border-signal/50 focus:outline-none",
          current === "published" ? "border-signal/50 text-signal" : "border-line text-ink",
        )}
      >
        {statuses.map((s) => (
          <option key={s.key} value={s.key}>
            {s.label}
          </option>
        ))}
      </select>
      {state === "error" ? <SaveBadge state={state} error={error} /> : null}
    </label>
  );
}
