import type { Phase } from "../types";
import { phase1 } from "./phase-1";

/**
 * Phase registry.
 *
 * Phase 1 is fully authored. Phases 2–9 are declared as "upcoming" stubs so the
 * framework map, sales page and dashboard can present the complete nine-phase
 * arc while only shipping finished content. To author a later phase: create
 * `phase-N.ts` exporting a full `Phase` (mirror phase-1.ts), import it here, and
 * replace the stub. No component or route changes are required.
 */

const upcoming = (
  slug: string,
  number: number,
  code: string,
  title: string,
  tagline: string,
  objective: string,
  outcome: string,
): Phase => ({
  slug,
  number,
  code,
  title,
  tagline,
  status: "upcoming",
  objective,
  overview: "",
  outcome,
  lessons: [],
});

export const phases: Phase[] = [
  phase1,
  upcoming(
    "phase-2",
    2,
    "POSITION",
    "Own a Category of One",
    "Make your offer the obvious choice by sharpening who it's for and why it wins.",
    "Sharpen positioning and offer so a stranger can evaluate it in one read.",
    "A positioning statement and offer that sells itself.",
  ),
  upcoming(
    "phase-3",
    3,
    "BUILD",
    "Build the Conversion System",
    "Construct the pages, path and follow-up that carry attention to a decision.",
    "Build the core conversion infrastructure the diagnostic identified.",
    "A working conversion system for your primary offer.",
  ),
  upcoming(
    "phase-4",
    4,
    "DISTRIBUTE",
    "Engineer Distribution",
    "Get the right attention to the system, reliably and affordably.",
    "Design a distribution engine matched to your offer and audience.",
    "A repeatable distribution plan feeding your system.",
  ),
  upcoming(
    "phase-5",
    5,
    "CONVERT",
    "Maximise Conversion",
    "Turn more of the attention you already have into committed customers.",
    "Systematically raise conversion at the constraint stage.",
    "A measurably higher-converting path.",
  ),
  upcoming(
    "phase-6",
    6,
    "PROVE",
    "Prove It Works",
    "Build the proof and trust that make buying the safe choice.",
    "Assemble proof assets that de-risk the decision.",
    "A proof system: evidence, cases and trust markers.",
  ),
  upcoming(
    "phase-7",
    7,
    "ACQUIRE",
    "Acquire Predictably",
    "Turn the working system into a predictable customer-acquisition machine.",
    "Stand up predictable, measured customer acquisition.",
    "A predictable acquisition model with known numbers.",
  ),
  upcoming(
    "phase-8",
    8,
    "OPERATE",
    "Operate the Machine",
    "Run the growth system with dashboards, rhythms and accountability.",
    "Install the operating cadence that keeps the system healthy.",
    "An operating dashboard and weekly growth rhythm.",
  ),
  upcoming(
    "phase-9",
    9,
    "SCALE",
    "Scale Without Breaking",
    "Increase volume and complexity without the system falling apart.",
    "Scale the proven system while protecting what makes it work.",
    "A scaling plan that compounds instead of cracking.",
  ),
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
