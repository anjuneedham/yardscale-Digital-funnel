import "server-only";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import {
  COURSE_ID,
  SESSION_COOKIE,
  sessionSecret,
  type AccessTier,
} from "./config";
import { readSessionToken, type GrowthSystemSession } from "./session";

/**
 * Server-side access + entitlement API for the Growth Operator System.
 *
 * Every protected surface calls into this module — never client-side checks
 * alone. It answers two questions:
 *   1. Who is this? (`getSession`)
 *   2. Are they entitled to the course? (`getEntitlement` / `hasCourseAccess`)
 *
 * The entitlement check is the single seam a real billing provider plugs into.
 * Today it trusts a signed session cookie that the login route only issues on a
 * valid access code. To connect Stripe (or any provider), replace the body of
 * `resolveEntitlement` with a lookup keyed on `session.email` (or a user id):
 * an active one-time purchase, subscription, or lifetime grant returns
 * `{ status: "active", tier }`; anything else returns `{ status: "none" }`.
 * No caller changes.
 */

export type EntitlementStatus = "active" | "none";

export type Entitlement = {
  status: EntitlementStatus;
  courseId: string;
  tier: AccessTier | null;
};

/** Reads and verifies the current member session, or null if signed out. */
export async function getSession(): Promise<GrowthSystemSession | null> {
  const store = await cookies();
  const token = store.get(SESSION_COOKIE)?.value;
  return readSessionToken(token, sessionSecret());
}

/**
 * Resolves whether a session is entitled to the course.
 *
 * SEAM: swap this for a real entitlement/payment lookup. The rest of the app
 * only depends on the returned shape, not on how it was determined.
 */
function resolveEntitlement(session: GrowthSystemSession | null): Entitlement {
  if (!session || session.courseId !== COURSE_ID) {
    return { status: "none", courseId: COURSE_ID, tier: null };
  }
  return { status: "active", courseId: COURSE_ID, tier: session.tier };
}

/** Current entitlement, derived from the current session. */
export async function getEntitlement(): Promise<Entitlement> {
  return resolveEntitlement(await getSession());
}

/** Convenience boolean for guards and conditional rendering. */
export async function hasCourseAccess(): Promise<boolean> {
  return (await getEntitlement()).status === "active";
}

/**
 * Gate a protected server component/layout. Redirects to login (preserving the
 * intended destination) when there is no valid, entitled session. Returns the
 * session so callers can render personalised content without re-reading it.
 */
export async function requireCourseAccess(nextPath?: string): Promise<GrowthSystemSession> {
  const session = await getSession();
  if (!session || resolveEntitlement(session).status !== "active") {
    const target = nextPath ? `?next=${encodeURIComponent(nextPath)}` : "";
    redirect(`/growth-system/login${target}`);
  }
  return session;
}
