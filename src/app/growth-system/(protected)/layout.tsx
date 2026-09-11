import type { Metadata } from "next";
import type { ReactNode } from "react";

import { requireCourseAccess } from "@/lib/growth-system/access";
import { AppShell } from "@/components/growth-system/AppShell";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

/**
 * Server-side gate for the entire member area.
 *
 * This is the authoritative access check — every route inside this group is
 * protected here, in a Server Component, not by client-side hiding. An
 * unauthenticated or unentitled visitor is redirected to login before any
 * protected content is rendered or sent to the browser.
 */
export default async function ProtectedGrowthSystemLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await requireCourseAccess();
  return <AppShell memberName={session.name}>{children}</AppShell>;
}
