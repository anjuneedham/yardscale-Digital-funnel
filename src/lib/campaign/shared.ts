import { campaign, statuses } from "@/content/campaign/meta";
import type { ContentStatus, PieceKey } from "@/content/campaign/types";

/** Types and pure helpers shared by server pages and client components. */

export const PIECES: PieceKey[] = ["yt", "c1", "c2", "c3"];
export const PIECE_LABEL: Record<PieceKey, string> = {
  yt: "YouTube",
  c1: "TikTok 1 · Attention",
  c2: "TikTok 2 · Value",
  c3: "TikTok 3 · Story",
};
export const PIECE_SHORT: Record<PieceKey, string> = { yt: "YT", c1: "T1", c2: "T2", c3: "T3" };

export type EpisodeState = {
  status?: Partial<Record<PieceKey, ContentStatus>>;
  scripts?: Partial<Record<PieceKey, string>>;
  urls?: Partial<Record<PieceKey, string>>;
  edits?: Record<string, string>;
  checklist?: Record<string, boolean>;
  lesson?: string;
};

export const METRIC_KEYS = [
  "ytViews",
  "subsGained",
  "ttViews",
  "followersGained",
  "engagement",
  "inquiries",
  "qualifiedLeads",
  "conversations",
  "projectsSecured",
] as const;
export type MetricKey = (typeof METRIC_KEYS)[number];
export type MetricsDoc = Partial<Record<MetricKey, number>> & { note?: string };

export type SettingsDoc = { ytSubs?: number; ttFollowers?: number };

export type Lead = {
  name?: string;
  contact?: string;
  idea?: string;
  source?: string;
  content?: string;
  status?: string;
  nextAction?: string;
  nextDate?: string;
  notes?: string;
  createdAt?: string;
};

export type Note = {
  type?: string;
  title?: string;
  body?: string;
  date?: string;
  createdAt?: string;
};

export const DEFAULT_STATUS: ContentStatus = "brief-ready";

export function pieceStatus(state: EpisodeState | undefined, key: PieceKey): ContentStatus {
  return state?.status?.[key] ?? DEFAULT_STATUS;
}

export function statusIndex(s: ContentStatus): number {
  return statuses.findIndex((x) => x.key === s);
}

export function statusLabel(s: ContentStatus): string {
  return statuses.find((x) => x.key === s)?.label ?? s;
}

/** Overall episode status: the least-advanced of its four pieces. */
export function overallStatus(state: EpisodeState | undefined): ContentStatus {
  let min = statuses.length - 1;
  for (const k of PIECES) min = Math.min(min, statusIndex(pieceStatus(state, k)));
  return statuses[min].key;
}

export function publishedCount(state: EpisodeState | undefined): number {
  return PIECES.filter((k) => pieceStatus(state, k) === "published").length;
}

export function wordCount(text: string | undefined): number {
  const t = (text ?? "").trim();
  return t ? t.split(/\s+/).length : 0;
}

/** Today's ISO date in the dashboard timezone. */
export function todayISO(tz: string, now = new Date()): string {
  return new Intl.DateTimeFormat("en-CA", { timeZone: tz, year: "numeric", month: "2-digit", day: "2-digit" }).format(now);
}

export function formatDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });
}

export function pct(value: number, target: number): number {
  return Math.max(0, Math.min(100, (value / target) * 100));
}

export const targets = campaign.targets;
