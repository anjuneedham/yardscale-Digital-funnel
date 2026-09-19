import type { LessonBlock } from "../growth-system/types";

/**
 * Education Library — content schema.
 *
 * Deliberately reuses `LessonBlock` from the Growth Operator System so the
 * whole site has one block vocabulary and one renderer (`LessonBlocks`). A new
 * product is a new typed module in ./products — no component or route changes.
 */

export type { LessonBlock };

/** Free products are readable by anyone; paid products run through the entitlement seam. */
export type Tier = "free" | "paid";

export type Difficulty = "beginner" | "intermediate" | "advanced";

/** Shown on the card so a buyer knows the shape of what they are getting. */
export type ProductFormat =
  | "mini-course"
  | "guide"
  | "tutorial"
  | "playbook"
  | "blueprint"
  | "checklist";

export type Category = "websites" | "funnels" | "apps" | "acquisition" | "growth";

export const categoryLabels: Record<Category, string> = {
  websites: "Websites",
  funnels: "Funnels",
  apps: "Apps",
  acquisition: "Customer Acquisition",
  growth: "Growth",
};

export const formatLabels: Record<ProductFormat, string> = {
  "mini-course": "Mini-course",
  guide: "Guide",
  tutorial: "Tutorial",
  playbook: "Playbook",
  blueprint: "Blueprint",
  checklist: "Checklist",
};

export const difficultyLabels: Record<Difficulty, string> = {
  beginner: "Beginner",
  intermediate: "Intermediate",
  advanced: "Advanced",
};

/** A checklist a reader works through. Rendered interactive and printable. */
export type Checklist = {
  title: string;
  /** Optional grouping. Flat lists pass a single group. */
  groups: { label?: string; items: string[] }[];
};

export type Exercise = {
  title: string;
  prompt: string;
  steps?: string[];
};

/** A copy-and-adapt template — outreach message, page structure, email. */
export type Template = {
  title: string;
  /** Plain text, rendered in a monospace block the reader can copy. */
  body: string;
  /** What to change before using it. */
  adapt?: string[];
};

/** A scored self-assessment (e.g. the 10-Minute Funnel Audit). */
export type Scorecard = {
  title: string;
  instructions: string;
  rows: { label: string; detail: string }[];
  scale: string;
  interpretation: { range: string; meaning: string }[];
};

export type Chapter = {
  slug: string;
  number: number;
  title: string;
  summary: string;
  durationMinutes: number;
  blocks: LessonBlock[];
  exercise?: Exercise;
  checklist?: Checklist;
  template?: Template;
  scorecard?: Scorecard;
  /** The one thing to do before moving on. */
  actionStep?: string;
  recap?: string[];
};

export type EducationProduct = {
  slug: string;
  title: string;
  /** Short title for cards and breadcrumbs where the full one is too long. */
  shortTitle?: string;
  tier: Tier;
  /** USD. Null for free products. */
  price: number | null;
  format: ProductFormat;
  category: Category;
  difficulty: Difficulty;
  estimatedMinutes: number;
  /** One line for the product card. */
  summary: string;
  /** Two or three sentences for the detail page hero. */
  description: string;
  whatYouWillLearn: string[];
  whoItIsFor: string[];
  whatYouWillBuild: string[];
  includedResources: { title: string; detail: string }[];
  chapters: Chapter[];
  faqs: { question: string; answer: string }[];
  /**
   * The natural next product. Powers the free-to-paid path without
   * aggressive upselling — one recommendation, stated as a question.
   */
  nextStep?: { slug: string; pitch: string };
};

/** Formats an estimated duration for display. */
export function formatDuration(minutes: number): string {
  if (minutes < 60) return `${minutes} min`;
  const hours = minutes / 60;
  const rounded = Math.round(hours * 2) / 2;
  return rounded === 1 ? "1 hour" : `${rounded} hours`;
}

/** Formats a price for display. Free products read as "Free". */
export function formatPrice(price: number | null): string {
  return price === null ? "Free" : `$${price}`;
}
