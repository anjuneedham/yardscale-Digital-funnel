/**
 * Zero to Hero dashboard — access configuration (edge-safe: no node-only imports).
 *
 * This is deliberately separate from the Growth Operator System's access layer.
 * That layer issues a session to anyone who submits a name and email (it is a
 * free course signup), so it must never protect private campaign data.
 *
 * The dashboard is single-owner and fails closed: with no DASHBOARD_PASSCODE
 * set, nobody can sign in.
 */

export const DASH_COOKIE = "ys_dash";
export const DASH_SESSION_SECONDS = 60 * 60 * 24 * 14; // 14 days

export function dashboardPasscode(): string {
  return process.env.DASHBOARD_PASSCODE ?? "";
}

export function passcodeConfigured(): boolean {
  return dashboardPasscode().length >= 8;
}

/**
 * Signing secret. Prefer an explicit DASHBOARD_SESSION_SECRET; otherwise derive
 * it from the passcode so there is never an insecure built-in default, and
 * changing the passcode signs everyone out.
 */
export function dashboardSecret(): string {
  return process.env.DASHBOARD_SESSION_SECRET || `ys-dash:${dashboardPasscode()}`;
}

export type DashSession = { sub: "owner"; iat: number; exp: number };

/** Timezone used to decide what "today" is. Override with DASHBOARD_TIMEZONE. */
export function dashboardTimezone(): string {
  return process.env.DASHBOARD_TIMEZONE || "America/Jamaica";
}
