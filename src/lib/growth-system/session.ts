/**
 * Signed-token primitives for the Growth Operator System access layer.
 *
 * Uses the Web Crypto API (HMAC-SHA256) so the exact same module runs in the
 * Edge middleware, Node route handlers and Server Components. No secrets are
 * baked in — the signing secret is read at call time from config.
 *
 * This is deliberately small and provider-agnostic: it proves a cookie was
 * issued by this server and has not been tampered with. Whether the person
 * behind it is *entitled* to the course is a separate question answered by
 * `access.ts`, which is where a real auth/payment provider is wired in.
 */

import type { AccessTier } from "./config";

export type GrowthSystemSession = {
  /** Stable identifier for the member. Email today; a user id once a DB exists. */
  email: string;
  name: string;
  /** Which course this session is entitled to. */
  courseId: string;
  /** How access was granted — shapes future billing logic, not access today. */
  tier: AccessTier;
  /** Issued-at and expiry, seconds since epoch. */
  iat: number;
  exp: number;
};

const encoder = new TextEncoder();
const decoder = new TextDecoder();

function bytesToB64url(bytes: Uint8Array): string {
  let bin = "";
  for (const b of bytes) bin += String.fromCharCode(b);
  return btoa(bin).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function b64urlToBytes(value: string): Uint8Array {
  const b64 = value.replace(/-/g, "+").replace(/_/g, "/");
  const padded = b64.padEnd(Math.ceil(b64.length / 4) * 4, "=");
  const bin = atob(padded);
  const out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i += 1) out[i] = bin.charCodeAt(i);
  return out;
}

/** Coerces a byte array to the BufferSource shape the Web Crypto lib types expect. */
function buf(bytes: Uint8Array): BufferSource {
  return bytes as unknown as BufferSource;
}

async function hmacKey(secret: string): Promise<CryptoKey> {
  return crypto.subtle.importKey(
    "raw",
    buf(encoder.encode(secret)),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign", "verify"],
  );
}

/** Serialises and signs an arbitrary JSON payload into a `data.signature` token. */
export async function signToken(payload: unknown, secret: string): Promise<string> {
  const data = bytesToB64url(encoder.encode(JSON.stringify(payload)));
  const key = await hmacKey(secret);
  const sig = await crypto.subtle.sign("HMAC", key, buf(encoder.encode(data)));
  return `${data}.${bytesToB64url(new Uint8Array(sig))}`;
}

/** Verifies a token's signature and returns its payload, or null if invalid. */
export async function verifyToken<T>(token: string | undefined, secret: string): Promise<T | null> {
  if (!token) return null;
  const [data, sig] = token.split(".");
  if (!data || !sig) return null;
  try {
    const key = await hmacKey(secret);
    const valid = await crypto.subtle.verify(
      "HMAC",
      key,
      buf(b64urlToBytes(sig)),
      buf(encoder.encode(data)),
    );
    if (!valid) return null;
    return JSON.parse(decoder.decode(b64urlToBytes(data))) as T;
  } catch {
    return null;
  }
}

/** Verifies a session token and enforces expiry. */
export async function readSessionToken(
  token: string | undefined,
  secret: string,
): Promise<GrowthSystemSession | null> {
  const session = await verifyToken<GrowthSystemSession>(token, secret);
  if (!session) return null;
  if (typeof session.exp !== "number" || session.exp * 1000 < Date.now()) return null;
  return session;
}
