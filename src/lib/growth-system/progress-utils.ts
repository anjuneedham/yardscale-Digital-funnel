import type { Phase } from "@/content/growth-system/types";

/**
 * Pure progress helpers — safe to import on client or server.
 *
 * Progress is a simple map of phase slug → lesson slug → completed. All derived
 * views (percent complete, current phase, next action) are computed from that
 * map plus the phase registry, so the storage backend can change without
 * touching this logic.
 */

export type ProgressMap = Record<string, Record<string, boolean>>;

export function isLessonComplete(map: ProgressMap, phaseSlug: string, lessonSlug: string): boolean {
  return Boolean(map[phaseSlug]?.[lessonSlug]);
}

export function completedInPhase(map: ProgressMap, phase: Phase): number {
  const phaseMap = map[phase.slug] ?? {};
  return phase.lessons.filter((l) => phaseMap[l.slug]).length;
}

export type PhaseProgress = {
  completed: number;
  total: number;
  percent: number;
  isComplete: boolean;
  isStarted: boolean;
};

export function phaseProgress(map: ProgressMap, phase: Phase): PhaseProgress {
  const total = phase.lessons.length;
  const completed = completedInPhase(map, phase);
  const percent = total === 0 ? 0 : Math.round((completed / total) * 100);
  return {
    completed,
    total,
    percent,
    isComplete: total > 0 && completed === total,
    isStarted: completed > 0,
  };
}

export type OverallProgress = {
  completedLessons: number;
  totalLessons: number;
  percent: number;
  completedPhases: number;
  availablePhases: number;
};

export function overallProgress(map: ProgressMap, phases: Phase[]): OverallProgress {
  const available = phases.filter((p) => p.status === "available");
  let completedLessons = 0;
  let totalLessons = 0;
  let completedPhases = 0;
  for (const phase of available) {
    const pp = phaseProgress(map, phase);
    completedLessons += pp.completed;
    totalLessons += pp.total;
    if (pp.isComplete) completedPhases += 1;
  }
  return {
    completedLessons,
    totalLessons,
    percent: totalLessons === 0 ? 0 : Math.round((completedLessons / totalLessons) * 100),
    completedPhases,
    availablePhases: available.length,
  };
}

/** The first lesson in a phase the student has not yet completed. */
export function firstIncompleteLesson(map: ProgressMap, phase: Phase) {
  const phaseMap = map[phase.slug] ?? {};
  return phase.lessons.find((l) => !phaseMap[l.slug]) ?? null;
}

/**
 * The phase the student should be working in now: the first available phase
 * that isn't fully complete, falling back to the last available phase.
 */
export function currentPhase(map: ProgressMap, phases: Phase[]): Phase | null {
  const available = phases.filter((p) => p.status === "available");
  if (available.length === 0) return null;
  return available.find((p) => !phaseProgress(map, p).isComplete) ?? available[available.length - 1];
}

export type NextAction = {
  phaseSlug: string;
  lessonSlug: string | null;
  label: string;
  href: string;
};

/** The single next recommended action for the dashboard. */
export function nextAction(map: ProgressMap, phases: Phase[]): NextAction | null {
  const phase = currentPhase(map, phases);
  if (!phase) return null;
  const lesson = firstIncompleteLesson(map, phase);
  if (!lesson) {
    return {
      phaseSlug: phase.slug,
      lessonSlug: null,
      label: `Review ${phase.code}`,
      href: `/growth-system/${phase.slug}`,
    };
  }
  const started = phaseProgress(map, phase).isStarted;
  return {
    phaseSlug: phase.slug,
    lessonSlug: lesson.slug,
    label: `${started ? "Continue" : "Start"}: ${lesson.title}`,
    href: `/growth-system/${phase.slug}/${lesson.slug}`,
  };
}
