"use client";

import { readAttribution } from "./attribution";

/** Client-side helper that attaches attribution and page context to every submission. */
export async function submitToApi(
  endpoint: string,
  data: Record<string, unknown>,
): Promise<{ ok: boolean; message?: string }> {
  const attribution = readAttribution();

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...data,
        context: {
          attribution,
          path: typeof window !== "undefined" ? window.location.pathname : "",
          submittedAt: new Date().toISOString(),
        },
      }),
    });

    const body = (await response.json().catch(() => ({}))) as { message?: string };

    if (!response.ok) {
      return { ok: false, message: body.message ?? "Something went wrong. Please try again." };
    }
    return { ok: true, message: body.message };
  } catch {
    return { ok: false, message: "Network error. Please check your connection and try again." };
  }
}
