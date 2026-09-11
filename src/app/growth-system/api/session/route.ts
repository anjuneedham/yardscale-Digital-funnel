import { NextResponse } from "next/server";

import { isEmail, isFilled, clamp } from "@/lib/validation";
import {
  COURSE_ID,
  SESSION_COOKIE,
  SESSION_MAX_AGE_SECONDS,
  devAccessCode,
  sessionSecret,
} from "@/lib/growth-system/config";
import { signToken, type GrowthSystemSession } from "@/lib/growth-system/session";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Session route for the Growth Operator System.
 *
 * POST with intent=login validates an access code and issues a signed session
 * cookie. POST with intent=logout clears it. The access-code check is the
 * placeholder entitlement gate — replace it with a real paid-enrollment lookup
 * (e.g. verify the email against a Stripe customer with an active purchase) to
 * put the course behind real payment. The cookie/session shape stays the same.
 */

function redirectTo(request: Request, path: string) {
  return NextResponse.redirect(new URL(path, request.url), { status: 303 });
}

export async function POST(request: Request) {
  const form = await request.formData().catch(() => null);
  const intent = form?.get("intent");

  if (intent === "logout") {
    const res = redirectTo(request, "/growth-system");
    res.cookies.set(SESSION_COOKIE, "", { path: "/growth-system", maxAge: 0 });
    return res;
  }

  const email = clamp(form?.get("email"), 254);
  const name = clamp(form?.get("name"), 120) || email.split("@")[0] || "Member";
  const accessCode = clamp(form?.get("accessCode"), 80);
  const next = clamp(form?.get("next"), 200);

  const safeNext = next.startsWith("/growth-system") ? next : "/growth-system/dashboard";

  if (!isEmail(email)) {
    return redirectTo(request, `/growth-system/login?error=email&next=${encodeURIComponent(safeNext)}`);
  }
  if (!isFilled(accessCode, 80) || accessCode !== devAccessCode()) {
    return redirectTo(request, `/growth-system/login?error=code&next=${encodeURIComponent(safeNext)}`);
  }

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

  const res = redirectTo(request, safeNext);
  res.cookies.set(SESSION_COOKIE, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/growth-system",
    maxAge: SESSION_MAX_AGE_SECONDS,
  });
  return res;
}
