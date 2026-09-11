/**
 * Growth Operator System — access configuration.
 *
 * Central, provider-agnostic configuration for the course's authentication and
 * entitlement layer. No payment or auth vendor is hard-coded here: this file
 * defines the seams a real provider (Stripe checkout, Supabase auth, a custom
 * CRM) plugs into later without the rest of the application changing.
 */

/** The single course this section ships today. A registry can replace this later. */
export const COURSE_ID = "growth-operator-system";

/** Cookie names for the dev/preview access layer. */
export const SESSION_COOKIE = "gos_session";
export const PROGRESS_COOKIE = "gos_progress";

/** Session lifetime — 30 days. */
export const SESSION_MAX_AGE_SECONDS = 60 * 60 * 24 * 30;

/**
 * Secret used to sign the session and progress cookies.
 *
 * Set GROWTH_SYSTEM_SESSION_SECRET in the environment for production. The
 * development fallback keeps preview deployments functional but must never be
 * relied on for real access control — swap in a real auth provider before
 * charging for the course.
 */
export function sessionSecret(): string {
  return process.env.GROWTH_SYSTEM_SESSION_SECRET || "gos-dev-secret-change-me";
}

/**
 * The access code that grants enrollment in the dev/preview access layer.
 *
 * This is a placeholder for a real entitlement source. In production, replace
 * the access-code check in the session route with a lookup against paid
 * enrollments (e.g. a Stripe customer with an active purchase/subscription).
 */
export function devAccessCode(): string {
  return process.env.GROWTH_SYSTEM_ACCESS_CODE || "GROWTH-OPERATOR";
}

/** Access tiers the entitlement model is designed to support. */
export type AccessTier = "one-time" | "subscription" | "lifetime";

/** Public routes inside /growth-system that never require a session. */
export const PUBLIC_GROWTH_PATHS = new Set<string>([
  "/growth-system",
  "/growth-system/login",
]);
