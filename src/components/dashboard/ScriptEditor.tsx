"use client";

import { useEffect, useRef, useState } from "react";

import { wordCount } from "@/lib/campaign/shared";
import { patchRecord, useSaver } from "@/lib/campaign/client";
import type { PieceKey } from "@/content/campaign/types";
import { SaveBadge, inputCls } from "./ui";

/**
 * The owner's real script. Autosaves a moment after typing stops, and on blur.
 * If a save fails the text stays in the box and the error is shown, so nothing
 * is silently lost.
 */
export function ScriptEditor({
  episode,
  piece,
  initial,
  initialUrl,
  onStatusHint,
  target,
}: {
  episode: number;
  piece: PieceKey;
  initial: string;
  initialUrl: string;
  onStatusHint?: (hasText: boolean) => void;
  target: string;
}) {
  const [text, setText] = useState(initial);
  const [url, setUrl] = useState(initialUrl);
  const saved = useRef(initial);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const script = useSaver();
  const link = useSaver();

  async function flush(value: string) {
    if (value === saved.current) return;
    const ok = await script.run(() => patchRecord("episode", String(episode), { scripts: { [piece]: value } }));
    if (ok) {
      saved.current = value;
      onStatusHint?.(value.trim().length > 0);
    }
  }

  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );

  const words = wordCount(text);
  const seconds = Math.round((words / 150) * 60);

  return (
    <div className="rounded-lg border border-line p-4">
      <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
        <span className="label-mono">Your script</span>
        <span className="text-xs text-muted">
          {words} words · about {Math.floor(seconds / 60)}:{String(seconds % 60).padStart(2, "0")} spoken · aim for {target}        </span>
      </div>
      <textarea
        aria-label="Your script"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          if (timer.current) clearTimeout(timer.current);
          const v = e.target.value;
          timer.current = setTimeout(() => flush(v), 900);
        }}
        onBlur={() => {
          if (timer.current) clearTimeout(timer.current);
          flush(text);
        }}
        rows={12}
        placeholder="Write it in your own words. Bullets are fine. This is yours; nothing here is pre-written for you."
        className={inputCls + " leading-relaxed"}
      />
      <div className="mt-2 flex h-5 items-center">
        <SaveBadge state={script.state} error={script.error} />
      </div>

      <label className="mt-3 block">
        <span className="label-mono mb-1 block">Published URL (once live)</span>
        <input
          type="url"
          inputMode="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          onBlur={() => {
            if (url !== initialUrl) link.run(() => patchRecord("episode", String(episode), { urls: { [piece]: url } }));
          }}
          placeholder="https://"
          className={inputCls}
        />
      </label>
      <SaveBadge state={link.state} error={link.error} />
    </div>
  );
}
