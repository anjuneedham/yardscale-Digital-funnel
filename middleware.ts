import { NextResponse, type NextRequest } from "next/server";

import {
  SESSION_COOKIE,
  PUBLIC_GROWTH_PATHS,
  sessionSecret,
} from "@/lib/growth-system/config";
import { readSessionToken, verifyToken } from "@/lib/growth-system/session";
import { DASH_COOKIE, dashboardSecret, passcodeConfigured, type DashSession } from "@/lib/campaign/config";

/**
 * Edge gate for protected Growth Operator System routes.
 *
 * This is the first line of defence and a UX nicety — it redirects
 * unauthenticated visitors to the login page before a protected page renders.
 * It is NOT the only defence: the protected layout re-checks entitlement
 * server-side (see access.ts / requireCourseAccess), so a valid signature alone
 * is never enough to serve paid content.
 *
 * Runs only under /growth-system (see matcher), and lets public paths, the
 * login page and the session API through untouched.
 */
export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Zero to Hero dashboard: single owner, fails closed (see lib/campaign/config).
  if (pathname === "/dashboard" || pathname.startsWith("/dashboard/")) {
    return gateDashboard(request, pathname);
  }

  // Public paths and the auth/session API are always allowed.
  if (
    PUBLIC_GROWTH_PATHS.has(pathname) ||
    pathname.startsWith("/growth-system/api/session")
  ) {
    return NextResponse.next();
  }

  const token = request.cookies.get(SESSION_COOKIE)?.value;
  const session = await readSessionToken(token, sessionSecret());

  if (!session) {
    const loginUrl = new URL("/growth-system/login", request.url);
    loginUrl.searchParams.set("next", pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

/**
 * Edge gate for /dashboard. First line of defence only: pages re-check in the
 * (app) layout and every API handler re-checks itself.
 */
async function gateDashboard(request: NextRequest, pathname: string) {
  if (pathname === "/dashboard/login" || pathname === "/dashboard/api/session") {
    return NextResponse.next();
  }
  const token = request.cookies.get(DASH_COOKIE)?.value;
  const session = passcodeConfigured()
    ? await verifyToken<DashSession>(token, dashboardSecret())
    : null;
  const ok = !!session && session.sub === "owner" && session.exp * 1000 > Date.now();
  if (ok) return NextResponse.next();

  if (pathname.startsWith("/dashboard/api/")) {
    return NextResponse.json({ error: "Not signed in." }, { status: 401 });
  }
  return NextResponse.redirect(new URL("/dashboard/login", request.url));
}

export const config = {
  matcher: ["/growth-system/:path*", "/dashboard", "/dashboard/:path*"],
};
