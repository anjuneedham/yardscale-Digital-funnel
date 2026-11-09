"use client";

import { useEffect } from "react";
import { captureAttribution } from "@/lib/attribution";

/** Captures UTM / referrer attribution once on first paint, then cleans the URL. */
export function AttributionCapture() {
  useEffect(() => {
    captureAttribution();
  }, []);
  return null;
}
