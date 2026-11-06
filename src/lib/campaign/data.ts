import "server-only";

import { listDocs } from "./store";
import type { EpisodeState, Lead, MetricsDoc, Note, SettingsDoc } from "./shared";

/** Server-side loaders. A failing store must not take the whole dashboard down. */
async function safe<T>(fn: () => Promise<T>, fallback: T): Promise<{ value: T; error?: string }> {
  try {
    return { value: await fn() };
  } catch (e) {
    return { value: fallback, error: e instanceof Error ? e.message : "Could not load saved data." };
  }
}


export async function loadEpisodeStates() {
  const r = await safe(() => listDocs("episode"), {});
  const out: Record<number, EpisodeState> = {};
  for (const [id, doc] of Object.entries(r.value)) out[Number(id)] = doc as EpisodeState;
  return { states: out, error: r.error };
}

export async function loadMetrics() {
  const r = await safe(() => listDocs("metrics"), {});
  const out: Record<number, MetricsDoc> = {};
  for (const [id, doc] of Object.entries(r.value)) out[Number(id)] = doc as MetricsDoc;
  return { metrics: out, error: r.error };
}

export async function loadSettings(): Promise<SettingsDoc & { error?: string }> {
  const r = await safe(() => listDocs("settings"), {});
  return { ...((r.value["campaign"] as SettingsDoc) ?? {}), error: r.error };
}

export async function loadLeads() {
  const r = await safe(() => listDocs("lead"), {});
  const leads = Object.entries(r.value).map(([id, d]) => ({ id, ...(d as Lead) }));
  leads.sort((a, b) => (b.createdAt ?? "").localeCompare(a.createdAt ?? ""));
  return { leads, error: r.error };
}

export async function loadNotes() {
  const r = await safe(() => listDocs("note"), {});
  const notes = Object.entries(r.value).map(([id, d]) => ({ id, ...(d as Note) }));
  notes.sort((a, b) => (b.createdAt ?? "").localeCompare(a.createdAt ?? ""));
  return { notes, error: r.error };
}
