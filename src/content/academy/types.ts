import type { Lesson } from "@/content/growth-system/types";

/**
 * Academy content schema.
 *
 * A course is data: modules, each holding lessons built from typed blocks
 * (text, lists, frameworks, examples, callouts), plus an exercise, a
 * template, a checklist and an implementation assignment. Lessons reuse the
 * same `Lesson` type and renderer as the Growth Operator System.
 *
 * TO ADD A COURSE: create a folder beside zero-to-saas/, export a `Course`,
 * and add it to the `courses` array in ./index.ts. No page or component
 * changes are needed — the catalogue, course page and lesson pages are all
 * generated from the registry.
 */

export type { Lesson, LessonBlock, Exercise } from "@/content/growth-system/types";

export type CourseModule = {
  /** URL segment, e.g. "module-3". */
  slug: string;
  number: number;
  title: string;
  /** Which stage of the journey this module belongs to. */
  stage: string;
  summary: string;
  /** The concrete thing the student has at the end. */
  outcome: string;
  /**
   * "open"   — readable by anyone (and indexed by search engines).
   * "member" — requires the free Academy sign-in (name + email).
   */
  access: "open" | "member";
  /**
   * False while the module is a working draft awaiting Andrew's review and
   * first-hand examples. Draft modules carry a visible "working draft" note.
   */
  reviewed: boolean;
  lessons: Lesson[];
  /**
   * Gaps for Andrew to fill — real examples, numbers or decisions only he
   * has. Never rendered on the site. Listed in docs/ACADEMY.md.
   */
  reviewNotes: string[];
};

export type Course = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  /** "live" courses are readable. "planned" courses show in the catalogue only. */
  status: "live" | "planned";
  format: string;
  audience: string[];
  outcomes: string[];
  modules: CourseModule[];
  /** Configurable price label. Empty means "free while in draft". */
  price: string;
  /**
   * For a course that lives at its own route (the Growth Operator System),
   * the catalogue links here instead of /academy/[slug].
   */
  externalHref?: string;
};
