/**
 * Growth Operator System — content schema.
 *
 * All course content is data, not components. A future editor (or Claude
 * Sonnet) adds phases, lessons, exercises and assets by editing these typed
 * modules — never by touching the rendering components. The lesson body is a
 * list of typed blocks so new content shapes can be added without rewriting
 * every lesson.
 */

/** A single rendered unit inside a lesson body. */
export type LessonBlock =
  | { type: "text"; body: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[]; ordered?: boolean }
  | { type: "framework"; title: string; steps: { label: string; detail: string }[] }
  | { type: "example"; title?: string; body: string }
  | { type: "callout"; tone: "signal" | "warn" | "muted"; title?: string; body: string }
  | { type: "quote"; body: string; attribution?: string };

/** A hands-on exercise a student completes inside the lesson. */
export type Exercise = {
  title: string;
  prompt: string;
  /** Optional structured prompts the student works through. */
  steps?: string[];
};

/** A downloadable or student-created artifact. */
export type Asset = {
  id: string;
  title: string;
  kind: "worksheet" | "template" | "pdf" | "diagnostic" | "download";
  description: string;
  /** Set when the file exists; empty renders as "included / coming soon". */
  href?: string;
};

export type Lesson = {
  slug: string;
  number: number;
  title: string;
  summary: string;
  objective?: string;
  durationMinutes?: number;
  /** The teachable content. */
  blocks: LessonBlock[];
  /** Presenter script for video/voiceover production. Not shown as body copy. */
  presenterScript?: string;
  /** Visual direction for whoever produces the lesson media. */
  visualSuggestions?: string[];
  exercise?: Exercise;
  implementationTask?: string;
  recap?: string[];
  assets?: Asset[];
};

/** Publication state of a phase. Only "available" phases have full lessons. */
export type PhaseStatus = "available" | "upcoming";

export type Phase = {
  slug: string; // e.g. "phase-1"
  number: number; // 1-9
  code: string; // e.g. "DIAGNOSE"
  title: string; // e.g. "Think Like a Growth Operator"
  tagline: string;
  status: PhaseStatus;
  objective: string;
  overview: string;
  /** One-line description of the outcome/asset this phase produces. */
  outcome: string;
  lessons: Lesson[];
  finalAsset?: Asset;
};

/** A stage in the Growth Operator framework, shown on the map and dashboard. */
export type FrameworkStage = {
  number: number;
  code: string;
  title: string;
  summary: string;
  phaseSlug: string;
};
