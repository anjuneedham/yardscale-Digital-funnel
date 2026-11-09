import "server-only";

import { getSession } from "@/lib/growth-system/access";

/**
 * Academy access. Reuses the signed member session from the Growth Operator
 * System: any valid session is an Academy member. Membership is free today
 * (name + email). To put a course behind payment later, this is the one
 * function to change — check the member's email against paid enrolments.
 */
export async function getAcademyMember(): Promise<{ name: string; email: string } | null> {
  const session = await getSession();
  return session ? { name: session.name, email: session.email } : null;
}

export const signInHref = (next: string) => `/academy/sign-in?next=${encodeURIComponent(next)}`;
