import { NextResponse } from "next/server";

import { isEmail, clamp } from "@/lib/validation";
import {
  COURSE_ID,
  SESSION_COOKIE,
  SESSION_MAX_AGE_SECONDS,
  sessionSecret,
} from "@/lib/growth-system/config";
import { signToken, type GrowthSystemSession } from "@/lib/growth-system/session";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Session route for the Growth Operator System.
 *
 * POST with intent=login captures name + email (no access gate) and issues a
 * signed session cookie. POST with intent=logout clears it. Contact info is
 * optionally posted to LEAD_WEBHOOK_URL or the fallback FORM_WEBHOOK_URL for
 * lead capture / CRM sync.
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

  const name = clamp(form?.get("name"), 120);
  const email = clamp(form?.get("email"), 254);
  const next = clamp(form?.get("next"), 200);

  const safeNext = next.startsWith("/growth-system") ? next : "/growth-system/dashboard";

  if (!isEmail(email)) {
    return redirectTo(request, `/growth-system/login?error=email&next=${encodeURIComponent(safeNext)}`);
  }
  if (!name) {
    return redirectTo(request, `/growth-system/login?error=name&next=${encodeURIComponent(safeNext)}`);
  }

  // Capture contact as a lead (optional webhook).
  const leadUrl = process.env.LEAD_WEBHOOK_URL || process.env.FORM_WEBHOOK_URL;
  if (leadUrl) {
    fetch(leadUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        type: "growth_system_enrollment",
        email,
        name,
        timestamp: new Date().toISOString(),
      }),
    }).catch(() => {
      // Fail silently; webhook failure does not block enrollment.
    });
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
