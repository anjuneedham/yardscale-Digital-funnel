import { NextResponse } from "next/server";

import { isEmail, clamp } from "@/lib/validation";
import {
  COURSE_ID,
  SESSION_COOKIE,
  SESSION_MAX_AGE_SECONDS,
  sessionSecret,
} from "@/lib/growth-system/config";
import { signToken, type GrowthSystemSession } from "@/lib/growth-system/session";
import { recordSubscriber } from "@/lib/leads";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Member session route, shared by the Academy and the Growth Operator System.
 *
 * POST with intent=login takes a name + email and issues a signed session
 * cookie — free access in exchange for an email address. Each sign-in is also
 * recorded as a subscriber, so course readers join the owned email audience.
 * POST with intent=logout clears the cookie.
 */

const AREAS = {
  academy: { prefix: "/academy", login: "/academy/sign-in", home: "/academy" },
  growth: { prefix: "/growth-system", login: "/growth-system/login", home: "/growth-system/dashboard" },
} as const;

/** Only ever redirect to an on-site member path — never to a caller-supplied URL. */
function resolveNext(next: string) {
  const isLocal = next.startsWith("/") && !next.startsWith("//") && !next.includes("\\");
  if (isLocal && next.startsWith(AREAS.academy.prefix)) return { area: AREAS.academy, path: next };
  if (isLocal && next.startsWith(AREAS.growth.prefix)) return { area: AREAS.growth, path: next };
  return { area: AREAS.growth, path: AREAS.growth.home };
}

function redirectTo(request: Request, path: string) {
  return NextResponse.redirect(new URL(path, request.url), { status: 303 });
}

export async function POST(request: Request) {
  const form = await request.formData().catch(() => null);
  const intent = form?.get("intent");
  const { area, path } = resolveNext(clamp(form?.get("next"), 200));

  if (intent === "logout") {
    const res = redirectTo(request, area === AREAS.academy ? "/academy" : "/growth-system");
    res.cookies.set(SESSION_COOKIE, "", { path: "/", maxAge: 0 });
    // Clear cookies issued before the session was widened to the whole site.
    res.cookies.set(SESSION_COOKIE, "", { path: "/growth-system", maxAge: 0 });
    return res;
  }

  const name = clamp(form?.get("name"), 120);
  const email = clamp(form?.get("email"), 254);
  // Honeypot: bots fill it. Send them on without a session.
  if (clamp(form?.get("company"), 200)) return redirectTo(request, area.login);

  if (!isEmail(email)) {
    return redirectTo(request, `${area.login}?error=email&next=${encodeURIComponent(path)}`);
  }
  if (!name) {
    return redirectTo(request, `${area.login}?error=name&next=${encodeURIComponent(path)}`);
  }

  // Record the sign-in as a subscriber. A storage failure never blocks access.
  await recordSubscriber({
    email,
    name,
    origin: area === AREAS.academy ? "academy_signin" : "growth_system_signin",
    context: { platform: clamp(form?.get("platform"), 60), attribution: null, path },
  }).catch(() => undefined);

  const now = Math.floor(Date.now() / 1000);
  const session: GrowthSystemSession = {
    email,
    name,
    courseId: COURSE_ID,
    tier: "one-time",
    iat: now,
    exp: now + SESSION_MAX_AGE_SECONDS,
  };
  const token = await signToken(session, sessionSecret());

  const res = redirectTo(request, path);
  res.cookies.set(SESSION_COOKIE, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: SESSION_MAX_AGE_SECONDS,
  });
  return res;
}
