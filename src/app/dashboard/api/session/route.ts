import { NextResponse } from "next/server";

import { checkPasscode, createSessionToken, DASH_COOKIE, DASH_SESSION_SECONDS } from "@/lib/campaign/auth";
import { clamp } from "@/lib/validation";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function redirectTo(request: Request, path: string) {
  return NextResponse.redirect(new URL(path, request.url), { status: 303 });
}

/** POST intent=login (passcode) or intent=logout. Form-encoded, redirects. */
export async function POST(request: Request) {
  const form = await request.formData().catch(() => null);
  const intent = form?.get("intent");

  if (intent === "logout") {
    const res = redirectTo(request, "/dashboard/login");
    res.cookies.set(DASH_COOKIE, "", { path: "/dashboard", maxAge: 0 });
    return res;
  }

  const passcode = clamp(form?.get("passcode"), 200);
  const next = clamp(form?.get("next"), 200);
  const safeNext = next.startsWith("/dashboard") && !next.startsWith("//") ? next : "/dashboard";

  if (!checkPasscode(passcode)) {
    // Slow wrong guesses down. Serverless instances do not share memory, so this
    // is a speed bump, not a lockout: use a long passcode.
    await new Promise((r) => setTimeout(r, 600));
    return redirectTo(request, `/dashboard/login?error=1&next=${encodeURIComponent(safeNext)}`);
  }

  const res = redirectTo(request, safeNext);
  res.cookies.set(DASH_COOKIE, await createSessionToken(), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/dashboard",
    maxAge: DASH_SESSION_SECONDS,
  });
  return res;
}
