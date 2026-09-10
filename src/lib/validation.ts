/** Shared, dependency-free validation used on both the client and the server. */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export const isEmail = (value: unknown): value is string =>
  typeof value === "string" && value.length <= 254 && EMAIL_RE.test(value.trim());

export const isFilled = (value: unknown, max = 2000): value is string =>
  typeof value === "string" && value.trim().length > 0 && value.length <= max;

/** Trims and hard-caps a string so oversized payloads never reach downstream systems. */
export const clamp = (value: unknown, max: number): string =>
  typeof value === "string" ? value.trim().slice(0, max) : "";

export type FieldErrors = Record<string, string>;
