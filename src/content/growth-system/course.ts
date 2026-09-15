import type { FrameworkStage } from "./types";
import { phases } from "./phases";

/**
 * Growth Operator System — course-level content.
 *
 * Marketing/positioning copy for the public sales page and shared metadata for
 * the whole section. Curriculum lives in ./phases; this file is the "front of
 * house" copy plus the framework map derived from the phases.
 */

export const course = {
  id: "growth-operator-system",
  name: "The Growth Operator System",
  shortName: "Growth Operator System",
  tagline: "An operating system for growing a real business.",
  promise:
    "Stop running marketing tasks. Learn to diagnose, build, distribute, convert, prove, acquire, operate and scale a growth system that compounds.",
  description:
    "The Growth Operator System is an implementation-focused course that teaches business owners to think and operate like a growth operator — diagnosing the one constraint holding growth back, then building the system that relieves it, phase by phase.",
  /** Placeholder pricing — no payment provider is wired up yet. */
  price: {
    amount: 0,
    currency: "USD",
    label: "Enrollment opening soon",
    note: "Pricing and checkout are configured when the payment provider is connected.",
  },
  routes: {
    public: "/growth-system",
    login: "/growth-system/login",
    dashboard: "/growth-system/dashboard",
  },
} as const;

/** The nine-stage framework, derived from the phase registry so it never drifts. */
export const frameworkStages: FrameworkStage[] = phases.map((p) => ({
  number: p.number,
  code: p.code,
  title: p.title,
  summary: p.tagline,
  phaseSlug: p.slug,
}));

export const whoItIsFor = [
  "Founders and owners who are doing the marketing themselves and want a system instead of a scramble.",
  "Operators and in-house marketers accountable for growth, not just activity.",
  "Service businesses, agencies, coaches and creators with a real offer and an inconsistent path to customers.",
  "Anyone who has tried more tactics and found that 'more' stopped working.",
];

export const problemsItSolves = [
  "Growth that stalls no matter how much content or ad spend you add.",
  "Attention that arrives and leaks out of a broken offer or missing follow-up.",
  "A dozen half-built tactics and no system connecting them.",
  "No clear read on where growth is actually being lost.",
  "Decisions made from anxiety and habit instead of evidence.",
];

export const outcomes = [
  "A precise, evidence-based diagnosis of your single biggest growth constraint.",
  "A designed six-stage growth system instead of an accidental one.",
  "The ability to think and decide like a growth operator, not a tactician.",
  "A repeatable loop: find the constraint, relieve it, find the next one.",
  "Assets you actually build — diagnostics, maps, and systems — not just notes.",
];

export const whatYouBuild = [
  { phase: "Phase 1", asset: "Business Growth Diagnostic", detail: "A scored, one-page read on your biggest constraint." },
  { phase: "Phase 2", asset: "Positioning & Offer Statement", detail: "An offer a stranger can evaluate in one read." },
  { phase: "Phase 3", asset: "Conversion System Build Plan", detail: "The pages, path and follow-up that carry attention to a decision." },
  { phase: "Phase 4", asset: "Distribution Plan", detail: "A primary channel, a matched entry point and a budget ceiling." },
  { phase: "Phase 5", asset: "Conversion Improvement Log", detail: "A repeatable loop for finding and fixing what leaks." },
  { phase: "Phase 6", asset: "Proof System", detail: "Substantiated evidence, placed where the doubt actually happens." },
  { phase: "Phase 7", asset: "Acquisition Model", detail: "What a customer costs, what one is worth, and what you can afford." },
  { phase: "Phase 8", asset: "Growth Operating Dashboard", detail: "The numbers you review weekly and the rhythm that runs them." },
  { phase: "Phase 9", asset: "Scaling Plan", detail: "What breaks first at the next volume, and the capacity to hold it." },
];

export const faqs = [
  {
    question: "Is this a marketing course?",
    answer:
      "No. It's an operating system for growth. Marketing courses teach tactics for a channel; the Growth Operator System teaches you to diagnose your whole business, find the one constraint holding growth back, and build the system that relieves it. Tactics without a system is exactly the trap this course gets you out of.",
  },
  {
    question: "Who is it for?",
    answer:
      "Business owners, founders and operators who are accountable for growth and tired of adding more tactics that don't compound. It works best if you already have a real offer and some attention — the course helps you convert it into a system.",
  },
  {
    question: "How is it structured?",
    answer:
      "Nine phases, following the operator framework: Diagnose, Position, Build, Distribute, Convert, Prove, Acquire, Operate, Scale. Each phase has lessons, a framework, exercises, an implementation task and a concrete asset you build. All nine phases are available in the member dashboard, and the ninth sends you back to the first — the constraint moves as the business grows.",
  },
  {
    question: "Do I need to be technical?",
    answer:
      "No. The system is about thinking and operating clearly. Where building is involved, it's explained in plain, implementation-focused steps — and you can apply it with the tools you already use.",
  },
  {
    question: "What do I actually get?",
    answer:
      "Access to the member dashboard and every released phase, the lessons and frameworks, the exercises and implementation tasks, and the downloadable assets — starting with the Business Growth Diagnostic in Phase 1.",
  },
  {
    question: "How does this connect to YardScale Digital?",
    answer:
      "YardScale Digital is a growth operator agency — we diagnose the bottleneck between attention and revenue and build the system that solves it. The Growth Operator System teaches that same operating discipline so you can run it yourself.",
  },
];
