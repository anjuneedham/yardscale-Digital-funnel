import "server-only";
import { NextResponse } from "next/server";

/** Shared helpers for the submission endpoints. */

export const json = (body: Record<string, unknown>, status = 200) =>
  NextResponse.json(body, { status });

export const badRequest = (message: string) => json({ ok: false, message }, 400);

/**
 * Very small in-memory rate limiter.
 *
 * Enough to stop casual abuse of the public form endpoints. It is per-instance
 * by design — put a real limiter at the edge (WAF, Vercel firewall, Cloudflare)
 * when traffic justifies it.
 */
const HITS = new Map<string, { count: number; resetAt: number }>();
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 8;

export function rateLimited(request: Request): boolean {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  const now = Date.now();
  const entry = HITS.get(ip);

  if (!entry || now > entry.resetAt) {
    HITS.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    // Opportunistic cleanup so the map cannot grow without bound.
    if (HITS.size > 5000) {
      for (const [key, value] of HITS) if (now > value.resetAt) HITS.delete(key);
    }
    return false;
  }

  entry.count += 1;
  return entry.count > MAX_PER_WINDOW;
}

/** Reads and shape-checks the JSON body. */
export async function readBody(request: Request): Promise<Record<string, unknown> | null> {
  try {
    const body = await request.json();
    return body && typeof body === "object" && !Array.isArray(body)
      ? (body as Record<string, unknown>)
      : null;
  } catch {
    return null;
  }
}

/** Honeypot check — a filled decoy field means a bot. */
export const isBot = (body: Record<string, unknown>): boolean =>
  typeof body.company === "string" && body.company.trim().length > 0;
