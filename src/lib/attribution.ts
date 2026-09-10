"use client";

/**
 * UTM + referrer attribution.
 *
 * Captures first-touch and last-touch attribution in localStorage so that any
 * lead, qualification submission or growth request can be traced back to the
 * platform that produced it. Tracking parameters are never rendered into the UI
 * and are stripped from the visible URL after capture.
 *
 * Supported platforms: youtube, x, linkedin, facebook, tiktok, instagram.
 */

export type Attribution = {
  source: string;
  medium: string;
  campaign: string;
  content: string;
  term: string;
  referrer: string;
  landingPath: string;
  timestamp: string;
};

export type AttributionPayload = {
  first: Attribution | null;
  last: Attribution | null;
  /** Best-guess platform, derived from utm_source or the referring domain. */
  platform: string;
  sessionId: string;
};

const FIRST_KEY = "ys.attribution.first";
const LAST_KEY = "ys.attribution.last";
const SESSION_KEY = "ys.session.id";

const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"] as const;

/** Referrer hostname fragments mapped to the platform names we report on. */
const REFERRER_MAP: [RegExp, string][] = [
  [/youtube\.com|youtu\.be/i, "youtube"],
  [/(^|\.)x\.com|twitter\.com|t\.co/i, "x"],
  [/linkedin\.com|lnkd\.in/i, "linkedin"],
  [/facebook\.com|fb\.me|fb\.watch/i, "facebook"],
  [/tiktok\.com/i, "tiktok"],
  [/instagram\.com/i, "instagram"],
  [/google\./i, "google"],
  [/bing\.com|duckduckgo\.com/i, "search"],
];

function safeGet(key: string): Attribution | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as Attribution) : null;
  } catch {
    return null;
  }
}

function safeSet(key: string, value: unknown) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* storage unavailable (private mode, blocked cookies) — attribution is best-effort */
  }
}

function derivePlatform(source: string, referrer: string): string {
  const normalised = source.trim().toLowerCase();
  if (normalised) {
    const known = ["youtube", "x", "twitter", "linkedin", "facebook", "tiktok", "instagram"];
    const hit = known.find((k) => normalised.includes(k));
    if (hit) return hit === "twitter" ? "x" : hit;
    return normalised;
  }
  if (!referrer) return "direct";
  const match = REFERRER_MAP.find(([re]) => re.test(referrer));
  return match ? match[1] : "referral";
}

function readSessionId(): string {
  if (typeof window === "undefined") return "";
  try {
    const existing = window.sessionStorage.getItem(SESSION_KEY);
    if (existing) return existing;
    const id =
      typeof crypto !== "undefined" && "randomUUID" in crypto
        ? crypto.randomUUID()
        : `s_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 10)}`;
    window.sessionStorage.setItem(SESSION_KEY, id);
    return id;
  } catch {
    return "";
  }
}

/**
 * Reads UTM parameters from the current URL, stores first/last touch, and
 * removes the parameters from the address bar without a navigation.
 */
export function captureAttribution(): AttributionPayload {
  if (typeof window === "undefined") {
    return { first: null, last: null, platform: "unknown", sessionId: "" };
  }

  const url = new URL(window.location.href);
  const params = url.searchParams;
  const hasUtm = UTM_KEYS.some((k) => params.has(k));
  const referrer = document.referrer && !document.referrer.includes(window.location.host)
    ? document.referrer
    : "";

  const sessionId = readSessionId();
  const existingFirst = safeGet(FIRST_KEY);
  const existingLast = safeGet(LAST_KEY);

  // Nothing new to record: keep whatever we already had.
  if (!hasUtm && !referrer && existingFirst) {
    return {
      first: existingFirst,
      last: existingLast ?? existingFirst,
      platform: derivePlatform(existingLast?.source ?? existingFirst.source, existingLast?.referrer ?? ""),
      sessionId,
    };
  }

  const touch: Attribution = {
    source: params.get("utm_source") ?? "",
    medium: params.get("utm_medium") ?? "",
    campaign: params.get("utm_campaign") ?? "",
    content: params.get("utm_content") ?? "",
    term: params.get("utm_term") ?? "",
    referrer,
    landingPath: url.pathname,
    timestamp: new Date().toISOString(),
  };

  if (!existingFirst) safeSet(FIRST_KEY, touch);
  safeSet(LAST_KEY, touch);

  if (hasUtm) {
    // Keep tracking parameters out of the visible URL and out of shared links.
    UTM_KEYS.forEach((k) => params.delete(k));
    const cleaned = `${url.pathname}${params.toString() ? `?${params}` : ""}${url.hash}`;
    window.history.replaceState(window.history.state, "", cleaned);
  }

  return {
    first: existingFirst ?? touch,
    last: touch,
    platform: derivePlatform(touch.source, touch.referrer),
    sessionId,
  };
}

/** Reads stored attribution without mutating it. Use when building a form payload. */
export function readAttribution(): AttributionPayload {
  const first = safeGet(FIRST_KEY);
  const last = safeGet(LAST_KEY) ?? first;
  return {
    first,
    last,
    platform: derivePlatform(last?.source ?? "", last?.referrer ?? ""),
    sessionId: readSessionId(),
  };
}
