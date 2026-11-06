"use client";

import { createContext, useContext, useState } from "react";

import { Chip, SaveBadge, btnCls, btnPrimaryCls, inputCls } from "./ui";
import { useSaver } from "@/lib/campaign/client";

/**
 * A brief field that shows the planned text and lets the owner override it.
 * Overrides live in the episode record; "Reset" removes the override and the
 * planned text returns.
 */
export function Editable({
  label,
  path,
  seed,
  edits,
  onSave,
  kind = "text",
  hint,
}: {
  label: string;
  path: string;
  seed: string | string[];
  edits: Record<string, string> | undefined;
  onSave: (path: string, value: string | null) => Promise<boolean>;
  kind?: "text" | "lines";
  hint?: string;
}) {
  const seedText = Array.isArray(seed) ? seed.join("\n") : seed;
  const override = edits?.[path];
  const value = override ?? seedText;
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(value);
  const { state, error, run } = useSaver();

  async function save() {
    const next = draft.trim();
    const ok = await run(async () => {
      if (!(await onSave(path, next === seedText ? null : next))) throw new Error("Not saved");
      return true;
    });
    if (ok) setEditing(false);
  }

  const lines = value.split("\n").filter((l) => l.trim());

  return (
    <div className="border-t border-line py-4 first:border-t-0 first:pt-0">
      <div className="mb-1.5 flex flex-wrap items-center justify-between gap-2">
        <span className="label-mono">
          {label} {override !== undefined ? <Chip tone="signal">Edited</Chip> : null}
        </span>
        {!editing ? (
          <button
            type="button"
            onClick={() => {
              setDraft(value);
              setEditing(true);
            }}
            className="min-h-9 rounded-full px-3 text-xs text-muted hover:text-ink"
          >
            Edit
          </button>
        ) : null}
      </div>
      {hint ? <p className="mb-1.5 text-xs text-faint">{hint}</p> : null}

      {editing ? (
        <div>
          <textarea
            aria-label={label}
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            rows={Math.min(14, Math.max(3, draft.split("\n").length + 1))}
            className={inputCls + " leading-relaxed"}
          />
          {kind === "lines" ? <p className="mt-1 text-xs text-faint">One item per line.</p> : null}
          <div className="mt-2 flex flex-wrap items-center gap-2">
            <button type="button" onClick={save} className={btnPrimaryCls}>
              Save
            </button>
            <button type="button" onClick={() => setEditing(false)} className={btnCls}>
              Cancel
            </button>
            {override !== undefined ? (
              <button
                type="button"
                onClick={async () => {
                  const ok = await run(async () => {
                    if (!(await onSave(path, null))) throw new Error("Not saved");
                    return true;
                  });
                  if (ok) setEditing(false);
                }}
                className={btnCls}
              >
                Reset to plan
              </button>
            ) : null}
            <SaveBadge state={state} error={error} />
          </div>
        </div>
      ) : kind === "lines" ? (
        <ul className="list-disc space-y-1.5 pl-5 text-[0.9375rem] leading-relaxed text-ink-soft marker:text-signal">
          {lines.map((l, i) => (
            <li key={i}>{l}</li>
          ))}
        </ul>
      ) : (
        <p className="whitespace-pre-line text-[0.9375rem] leading-relaxed text-ink-soft">{value}</p>
      )}
    </div>
  );
}

/** Supplies the current overrides and the save function to every <Ed /> beneath it. */
type EditCtxValue = {
  edits: Record<string, string> | undefined;
  onSave: (path: string, value: string | null) => Promise<boolean>;
};
export const EditCtx = createContext<EditCtxValue | null>(null);

export function Ed(props: { label: string; path: string; seed: string | string[]; kind?: "text" | "lines"; hint?: string }) {
  const ctx = useContext(EditCtx);
  if (!ctx) throw new Error("<Ed> must be rendered inside <EditCtx.Provider>.");
  return <Editable {...props} edits={ctx.edits} onSave={ctx.onSave} />;
}
