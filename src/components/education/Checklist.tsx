"use client";

import { useCallback, useMemo, useSyncExternalStore } from "react";
import { cn } from "@/lib/cn";
import type { Checklist as ChecklistType } from "@/content/education/types";

/**
 * Interactive, printable checklist.
 *
 * Progress is per-visitor and kept in localStorage so a reader can work through
 * a long checklist across sessions. It is read through `useSyncExternalStore`
 * so the server and first client render agree, then the stored state is applied
 * without a cascading effect.
 *
 * Storage is best-effort: private windows and blocked site data throw, and the
 * component renders and works correctly without it.
 */

const UPDATE_EVENT = "ys-edu-checklist-change";
const EMPTY = "{}";

function storageKey(scope: string, title: string) {
  return `ys-edu-checklist:${scope}:${title}`;
}

function subscribe(onChange: () => void) {
  window.addEventListener("storage", onChange);
  window.addEventListener(UPDATE_EVENT, onChange);
  return () => {
    window.removeEventListener("storage", onChange);
    window.removeEventListener(UPDATE_EVENT, onChange);
  };
}

function readRaw(key: string): string {
  try {
    return window.localStorage.getItem(key) ?? EMPTY;
  } catch {
    return EMPTY;
  }
}

function writeRaw(key: string, value: string) {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    // Persistence is a convenience, not a requirement.
  }
  window.dispatchEvent(new Event(UPDATE_EVENT));
}

export function Checklist({ checklist, scope }: { checklist: ChecklistType; scope: string }) {
  const key = storageKey(scope, checklist.title);

  const raw = useSyncExternalStore(
    subscribe,
    useCallback(() => readRaw(key), [key]),
    () => EMPTY,
  );

  const checked = useMemo<Record<string, boolean>>(() => {
    try {
      const parsed: unknown = JSON.parse(raw);
      return parsed && typeof parsed === "object" ? (parsed as Record<string, boolean>) : {};
    } catch {
      return {};
    }
  }, [raw]);

  const toggle = (id: string, value: boolean) => {
    writeRaw(key, JSON.stringify({ ...checked, [id]: value }));
  };

  const total = checklist.groups.reduce((sum, group) => sum + group.items.length, 0);
  const done = Object.values(checked).filter(Boolean).length;

  return (
    <section className="rounded-card border border-line bg-panel/60 p-5 sm:p-6 print:border-black print:bg-white">
      <header className="flex flex-wrap items-baseline justify-between gap-3">
        <h2 className="text-base font-semibold tracking-[-0.01em] text-ink print:text-black">
          {checklist.title}
        </h2>
        <p className="font-mono text-xs text-muted print:text-black" aria-live="polite">
          {done} / {total} complete
        </p>
      </header>

      <div
        aria-hidden
        className="mt-3 h-1 w-full overflow-hidden rounded-full bg-raised print:hidden"
      >
        <div
          className="h-full rounded-full bg-signal transition-[width] duration-300"
          style={{ width: total > 0 ? `${(done / total) * 100}%` : "0%" }}
        />
      </div>

      <div className="mt-5 space-y-6">
        {checklist.groups.map((group, gi) => (
          <div key={gi}>
            {group.label ? (
              <p className="label-mono mb-3 text-faint print:text-black">{group.label}</p>
            ) : null}
            <ul className="space-y-1">
              {group.items.map((item, ii) => {
                const id = `${gi}-${ii}`;
                const isChecked = Boolean(checked[id]);
                return (
                  <li key={id}>
                    <label
                      className={cn(
                        "flex cursor-pointer items-start gap-3 rounded-lg px-2 py-2 transition-colors hover:bg-raised/60 print:hover:bg-transparent",
                      )}
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={(e) => toggle(id, e.target.checked)}
                        className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer appearance-none rounded border border-line-strong bg-transparent transition-colors checked:border-signal checked:bg-signal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal print:border-black"
                      />
                      <span
                        className={cn(
                          "text-[0.9375rem] leading-relaxed text-ink-soft print:text-black",
                          isChecked && "text-faint line-through decoration-line-strong",
                        )}
                      >
                        {item}
                      </span>
                    </label>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={() => window.print()}
        className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-full border border-line-strong bg-raised/60 px-4 text-sm text-ink-soft transition-colors hover:border-signal/60 hover:text-ink print:hidden"
      >
        <svg
          aria-hidden
          viewBox="0 0 16 16"
          className="h-3.5 w-3.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 6V2.5h8V6M4 12H2.5V6h11v6H12M4 9.5h8V14H4z" />
        </svg>
        Print this checklist
      </button>
    </section>
  );
}
