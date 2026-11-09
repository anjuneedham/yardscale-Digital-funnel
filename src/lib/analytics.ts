"use client";

import { readAttribution } from "./attribution";

/**
 * Analytics dispatch layer.
 *
 * Vendor-agnostic on purpose. Events are pushed to `window.dataLayer` (works
 * with GTM, GA4 and most tag managers), sent to Vercel Analytics as custom
 * events when it is present, and passed to any handler registered via
 * `registerAnalyticsSink`.
 */

export type FunnelEvent =
  | "cta_click"
  | "video_play"
  | "subscribe_submitted"
  | "application_submitted"
  | "content_click"
  | "community_click";

type EventProps = Record<string, string | number | boolean | null | undefined>;

type Sink = (event: FunnelEvent, props: EventProps) => void;

const sinks: Sink[] = [];

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    va?: (event: "event", payload: { name: string; data?: Record<string, unknown> }) => void;
  }
}

export function registerAnalyticsSink(sink: Sink) {
  sinks.push(sink);
}

export function track(event: FunnelEvent, props: EventProps = {}) {
  if (typeof window === "undefined") return;

  const attribution = readAttribution();
  const enriched: EventProps = {
    ...props,
    ys_platform: attribution.platform,
    ys_campaign: attribution.last?.campaign || undefined,
    ys_landing: attribution.first?.landingPath || undefined,
  };

  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({ event, ...enriched });

  // Vercel Analytics custom event (no-op until the script has loaded).
  try {
    const data = Object.fromEntries(Object.entries(enriched).filter(([, v]) => v != null));
    window.va?.("event", { name: event, data });
  } catch {
    // Analytics must never break the page.
  }

  sinks.forEach((sink) => sink(event, enriched));
}
