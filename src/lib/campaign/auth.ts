import "server-only";

import { createHash, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { signToken, verifyToken } from "@/lib/growth-system/session";
import {
  DASH_COOKIE,
  DASH_SESSION_SECONDS,
  dashboardPasscode,
  dashboardSecret,
  passcodeConfigured,
  type DashSession,
} from "./config";

export { DASH_COOKIE, DASH_SESSION_SECONDS, passcodeConfigured };

/** Constant-time passcode comparison. Always false when no passcode is configured. */
export function checkPasscode(input: string): boolean {
  if (!passcodeConfigured()) return false;
  const a = createHash("sha256").update(input).digest();
  const b = createHash("sha256").update(dashboardPasscode()).digest();
  return timingSafeEqual(a, b);
}

export async function createSessionToken(): Promise<string> {
  const now = Math.floor(Date.now() / 1000);
  const session: DashSession = { sub: "owner", iat: now, exp: now + DASH_SESSION_SECONDS };
  return signToken(session, dashboardSecret());
}

export async function isOwner(): Promise<boolean> {
  if (!passcodeConfigured()) return false;
  const store = await cookies();
  const session = await verifyToken<DashSession>(store.get(DASH_COOKIE)?.value, dashboardSecret());
  return !!session && session.sub === "owner" && session.exp * 1000 > Date.now();
}

/** Authoritative server-side gate for dashboard pages. */
export async function requireOwner(): Promise<void> {
  if (!(await isOwner())) redirect("/dashboard/login");
}
