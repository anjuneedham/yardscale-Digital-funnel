"use client";

import { readAttribution } from "./attribution";

/**
 * Analytics dispatch layer.
 *
 * Vendor-agnostic on purpose. Events are pushed to `window.dataLayer` (works
 * with GTM, GA4 and most tag managers) and to any handler registered via
 * `registerAnalyticsSink`. If nothing is configured, events are simply queued
 * in memory — nothing breaks, and no vendor is hard-coded.
 *
 * To wire a provider later, call `registerAnalyticsSink` once on app start.
 */

export type FunnelEvent =
  | "page_view"
  | "hero_cta_click"
  | "diagnostic_opened"
  | "diagnostic_option_selected"
  | "growth_path_viewed"
  | "qualification_started"
  | "qualification_step_completed"
  | "qualification_completed"
  | "qualification_submitted"
  | "lead_magnet_submitted"
  | "growth_request_submitted"
  | "booking_cta_click"
  | "content_channel_click";

type EventProps = Record<string, string | number | boolean | null | undefined>;

type Sink = (event: FunnelEvent, props: EventProps) => void;

const sinks: Sink[] = [];
const queue: { event: FunnelEvent; props: EventProps }[] = [];

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function registerAnalyticsSink(sink: Sink) {
  sinks.push(sink);
  // Flush anything captured before the sink existed.
  queue.splice(0).forEach(({ event, props }) => sink(event, props));
}

export function track(event: FunnelEvent, props: EventProps = {}) {
  if (typeof window === "undefined") return;

  const attribution = readAttribution();
  const enriched: EventProps = {
    ...props,
    ys_platform: attribution.platform,
    ys_session: attribution.sessionId,
    ys_campaign: attribution.last?.campaign || undefined,
    ys_content: attribution.last?.content || undefined,
    ys_medium: attribution.last?.medium || undefined,
    ys_landing: attribution.first?.landingPath || undefined,
  };

  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({ event, ...enriched });

  if (sinks.length === 0) {
    if (queue.length < 100) queue.push({ event, props: enriched });
    return;
  }
  sinks.forEach((sink) => sink(event, enriched));
}
