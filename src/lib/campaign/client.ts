"use client";

import { useCallback, useRef, useState } from "react";

import type { Collection } from "@/lib/campaign/store-types";

export type SaveState = "idle" | "saving" | "saved" | "error";

type Doc = Record<string, unknown>;

/** PATCH a record. Throws Error(message) on failure so callers can show it. */
export async function patchRecord(collection: Collection, id: string, patch: Doc): Promise<Doc> {
  const res = await fetch("/dashboard/api/records", {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ collection, id, patch }),
  });
  const json = (await res.json().catch(() => ({}))) as { doc?: Doc; error?: string };
  if (res.status === 401) {
    // Hard navigation on purpose: a full reload drops any stale client state.
    // eslint-disable-next-line @next/next/no-location-assign-relative-destination
    window.location.href = "/dashboard/login";
    throw new Error("Signed out. Redirecting to sign in…");
  }
  if (!res.ok) throw new Error(json.error ?? `Save failed (${res.status}).`);
  return json.doc ?? {};
}

export async function deleteRecord(collection: Collection, id: string): Promise<void> {
  const res = await fetch(
    `/dashboard/api/records?collection=${encodeURIComponent(collection)}&id=${encodeURIComponent(id)}`,
    { method: "DELETE" },
  );
  const json = (await res.json().catch(() => ({}))) as { error?: string };
  if (!res.ok) throw new Error(json.error ?? `Delete failed (${res.status}).`);
}

/** Tracks save state + last error for a form or field. */
export function useSaver() {
  const [state, setState] = useState<SaveState>("idle");
  const [error, setError] = useState<string>("");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const run = useCallback(async <T,>(fn: () => Promise<T>): Promise<T | undefined> => {
    setState("saving");
    setError("");
    try {
      const out = await fn();
      setState("saved");
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => setState("idle"), 2500);
      return out;
    } catch (e) {
      setState("error");
      setError(e instanceof Error ? e.message : "Save failed.");
      return undefined;
    }
  }, []);

  return { state, error, run };
}

export function newId(): string {
  return crypto.randomUUID().replace(/-/g, "").slice(0, 20);
}
