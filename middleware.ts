import { NextResponse, type NextRequest } from "next/server";

import {
  SESSION_COOKIE,
  PUBLIC_GROWTH_PATHS,
  sessionSecret,
} from "@/lib/growth-system/config";
import { readSessionToken } from "@/lib/growth-system/session";

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

export const config = {
  matcher: ["/growth-system/:path*"],
};
