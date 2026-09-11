import "server-only";

import { cookies } from "next/headers";

import { PROGRESS_COOKIE, SESSION_MAX_AGE_SECONDS, sessionSecret } from "./config";
import { signToken, verifyToken } from "./session";
import type { ProgressMap } from "./progress-utils";

/**
 * Server-side progress persistence.
 *
 * Today progress is stored in a signed, httpOnly cookie so preview deployments
 * are fully functional with no database. The storage is isolated behind these
 * three functions: to move progress into a database (recommended for
 * production), reimplement `getProgress` and `setLessonComplete` to read/write
 * the DB keyed on the member id. Nothing else in the app changes.
 */

export async function getProgress(): Promise<ProgressMap> {
  const store = await cookies();
  const token = store.get(PROGRESS_COOKIE)?.value;
  const map = await verifyToken<ProgressMap>(token, sessionSecret());
  return map ?? {};
}

async function writeProgress(map: ProgressMap): Promise<void> {
  const token = await signToken(map, sessionSecret());
  const store = await cookies();
  store.set(PROGRESS_COOKIE, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/growth-system",
    maxAge: SESSION_MAX_AGE_SECONDS,
  });
}

export async function setLessonComplete(
  phaseSlug: string,
  lessonSlug: string,
  complete: boolean,
): Promise<ProgressMap> {
  const map = await getProgress();
  const phaseMap = { ...(map[phaseSlug] ?? {}) };
  if (complete) {
    phaseMap[lessonSlug] = true;
  } else {
    delete phaseMap[lessonSlug];
  }
  const next: ProgressMap = { ...map, [phaseSlug]: phaseMap };
  await writeProgress(next);
  return next;
}
