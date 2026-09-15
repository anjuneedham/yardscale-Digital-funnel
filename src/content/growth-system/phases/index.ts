import type { Phase } from "../types";
import { phase1 } from "./phase-1";
import { phase2 } from "./phase-2";
import { phase3 } from "./phase-3";
import { phase4 } from "./phase-4";
import { phase5 } from "./phase-5";
import { phase6 } from "./phase-6";
import { phase7 } from "./phase-7";
import { phase8 } from "./phase-8";
import { phase9 } from "./phase-9";

/**
 * Phase registry.
 *
 * All nine phases are authored. To add another: create `phase-N.ts` exporting a
 * full `Phase` (mirror phase-1.ts), import it here, and add it to the array. No
 * component or route changes are required.
 */

export const phases: Phase[] = [
  phase1,
  phase2,
  phase3,
  phase4,
  phase5,
  phase6,
  phase7,
  phase8,
  phase9,
];

export function getPhase(slug: string): Phase | undefined {
  return phases.find((p) => p.slug === slug);
}

export function getLesson(phaseSlug: string, lessonSlug: string) {
  const phase = getPhase(phaseSlug);
  return phase?.lessons.find((l) => l.slug === lessonSlug);
}

export function availablePhases(): Phase[] {
  return phases.filter((p) => p.status === "available");
}
