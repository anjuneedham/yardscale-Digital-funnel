import { NextResponse } from "next/server";

import { getSession } from "@/lib/growth-system/access";
import { setLessonComplete } from "@/lib/growth-system/progress";
import { getLesson } from "@/content/growth-system/phases";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Progress route. Only an entitled member may record progress, and only
 * against lessons that actually exist. Progress is never exposed publicly.
 */
export async function POST(request: Request) {
  const session = await getSession();
  if (!session) {
    return NextResponse.json({ ok: false, error: "unauthenticated" }, { status: 401 });
  }

  const body = await request.json().catch(() => null);
  const phaseSlug = typeof body?.phaseSlug === "string" ? body.phaseSlug : "";
  const lessonSlug = typeof body?.lessonSlug === "string" ? body.lessonSlug : "";
  const complete = Boolean(body?.complete);

  if (!getLesson(phaseSlug, lessonSlug)) {
    return NextResponse.json({ ok: false, error: "unknown-lesson" }, { status: 400 });
  }

  const progress = await setLessonComplete(phaseSlug, lessonSlug, complete);
  return NextResponse.json({ ok: true, progress });
}
