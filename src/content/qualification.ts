import { growthPaths, type GrowthPathId } from "./growth-paths";

/**
 * The qualification experience.
 *
 * Ten questions, asked in the order a growth operator would ask them.
 * Answers are collected client-side and submitted to /api/qualification,
 * which forwards them to whatever CRM or form platform is configured.
 */

export type QuestionType = "single" | "multi" | "text" | "email";

export type QualificationQuestion = {
  id: string;
  /** Short label used in the progress rail and in the submitted payload. */
  label: string;
  prompt: string;
  help?: string;
  type: QuestionType;
  required: boolean;
  options?: { value: string; label: string; hint?: string }[];
  placeholder?: string;
  maxLength?: number;
};

export const qualificationQuestions: QualificationQuestion[] = [
  {
    id: "businessType",
    label: "Business type",
    prompt: "What type of business are you?",
    type: "single",
    required: true,
    options: [
      { value: "coach-consultant", label: "Coach or consultant" },
      { value: "educator", label: "Educator or course creator" },
      { value: "creator", label: "Creator or personal brand" },
      { value: "freelancer", label: "Freelancer or independent specialist" },
      { value: "service", label: "Service business with a small team" },
      { value: "pre-launch", label: "Pre-launch — not trading yet" },
    ],
  },
  {
    id: "whatYouSell",
    label: "What you sell",
    prompt: "What do you sell?",
    help: "Describe the offer the way you would say it out loud.",
    type: "text",
    required: true,
    placeholder: "e.g. A twelve-week operations consulting engagement for logistics firms.",
    maxLength: 400,
  },
  {
    id: "whoYouServe",
    label: "Who you serve",
    prompt: "Who do you serve?",
    help: "The more specific the buyer, the more specific the system can be.",
    type: "text",
    required: true,
    placeholder: "e.g. Founders of 10–50 person logistics companies in the UK.",
    maxLength: 400,
  },
  {
    id: "bottleneck",
    label: "Where you're stuck",
    prompt: "Where are you currently stuck?",
    type: "single",
    required: true,
    options: [
      { value: "high-ticket", label: "The offer isn't packaged or positioned" },
      { value: "course", label: "Expertise that needs to become a product" },
      { value: "funnel", label: "Attention arrives, but nobody books or buys" },
      { value: "distribution", label: "The offer works, but not enough people see it" },
      { value: "unknown", label: "Not sure yet — something isn't working" },
    ],
  },
  {
    id: "tryingToBuild",
    label: "What you're building",
    prompt: "What are you trying to build?",
    help: "Select anything that seems relevant. It's fine to be unsure — that's part of the work.",
    type: "multi",
    required: false,
    options: [
      { value: "high-ticket-offer", label: "High-ticket offer system" },
      { value: "course", label: "Course or knowledge product" },
      { value: "funnel", label: "Funnel" },
      { value: "landing-page", label: "Landing page" },
      { value: "website", label: "Website" },
      { value: "paid-traffic", label: "Paid traffic and distribution" },
      { value: "not-sure", label: "I don't know yet" },
    ],
  },
  {
    id: "hasWebsite",
    label: "Website",
    prompt: "Do you already have a website?",
    type: "single",
    required: true,
    options: [
      { value: "yes-converting", label: "Yes, and it converts reasonably well" },
      { value: "yes-not-converting", label: "Yes, but it isn't converting" },
      { value: "yes-outdated", label: "Yes, but it's outdated" },
      { value: "no", label: "No" },
    ],
  },
  {
    id: "hasAudience",
    label: "Audience",
    prompt: "Do you already have an audience?",
    type: "single",
    required: true,
    options: [
      { value: "established", label: "Yes — an established audience or list" },
      { value: "growing", label: "Growing, early stages" },
      { value: "traffic-no-list", label: "Traffic, but no owned list" },
      { value: "none", label: "No audience yet" },
    ],
  },
  {
    id: "triedAlready",
    label: "What you've tried",
    prompt: "What have you tried so far?",
    help: "Knowing what has already failed is often more useful than knowing what you want.",
    type: "text",
    required: false,
    placeholder: "e.g. Two website rebuilds, paid ads for three months, a freelancer-built funnel.",
    maxLength: 600,
  },
  {
    id: "budget",
    label: "Budget",
    prompt: "What is your approximate budget?",
    help: "A range is fine. This determines what can realistically be built first.",
    type: "single",
    required: true,
    options: [
      { value: "under-5k", label: "Under $5,000" },
      { value: "5-15k", label: "$5,000 – $15,000" },
      { value: "15-40k", label: "$15,000 – $40,000" },
      { value: "40k-plus", label: "$40,000+" },
      { value: "unsure", label: "Not sure yet" },
    ],
  },
  {
    id: "success",
    label: "Success",
    prompt: "What would success look like?",
    help: "Twelve months from now, what has to be true?",
    type: "text",
    required: true,
    placeholder: "e.g. Twenty qualified applications a month without me posting daily.",
    maxLength: 600,
  },
];

export type QualificationAnswers = Record<string, string | string[]>;

export type Recommendation = {
  headline: string;
  pathId: GrowthPathId;
  pathName: string;
  /** Why this is the read, in plain language. */
  rationale: string;
  /** The sequence that has to work. */
  flow: string[];
  /** Suggested build order, most important first. */
  firstBuilds: string[];
  /** Honest note about scope given the stated budget. */
  scopeNote: string;
};

const asString = (value: string | string[] | undefined): string =>
  Array.isArray(value) ? (value[0] ?? "") : (value ?? "");

const asArray = (value: string | string[] | undefined): string[] =>
  Array.isArray(value) ? value : value ? [value] : [];

/**
 * Derives a high-level recommendation from the answers.
 * Deliberately conservative: it names a likely starting point, not a diagnosis.
 */
export function buildRecommendation(answers: QualificationAnswers): Recommendation {
  const stuck = asString(answers.bottleneck);
  const businessType = asString(answers.businessType);
  const audience = asString(answers.hasAudience);
  const website = asString(answers.hasWebsite);
  const budget = asString(answers.budget);
  const building = asArray(answers.tryingToBuild);

  let pathId: GrowthPathId;

  if (stuck !== "unknown" && stuck in growthPaths) {
    pathId = stuck as GrowthPathId;
  } else if (businessType === "educator" || building.includes("course")) {
    pathId = "course";
  } else if (businessType === "coach-consultant" || building.includes("high-ticket-offer")) {
    pathId = "high-ticket";
  } else if (website === "yes-not-converting") {
    pathId = "funnel";
  } else if (audience !== "none" && website === "yes-converting") {
    pathId = "distribution";
  } else {
    pathId = "funnel";
  }

  const path = growthPaths[pathId];

  const rationaleParts: string[] = [];

  if (stuck === "unknown") {
    rationaleParts.push(
      "You told us the problem isn't obvious yet, so this is a starting hypothesis based on your business type and what you already have in place — not a conclusion.",
    );
  } else {
    rationaleParts.push(
      `You described the constraint as ${path.name.toLowerCase()}, and what you have in place points the same way.`,
    );
  }

  if (audience === "traffic-no-list") {
    rationaleParts.push(
      "You have traffic but no owned list, which means attention is arriving and leaving without being captured.",
    );
  } else if (audience === "none") {
    rationaleParts.push(
      "With no audience yet, the system has to be built alongside distribution rather than after it.",
    );
  } else if (audience === "established") {
    rationaleParts.push(
      "An established audience is the strongest asset here — it usually shortens the path to first revenue considerably.",
    );
  }

  if (website === "no") {
    rationaleParts.push("With no website in place, the owned destination is likely the first build.");
  } else if (website === "yes-not-converting") {
    rationaleParts.push(
      "An existing site that isn't converting is usually a structure and offer problem before it is a design problem.",
    );
  }

  const firstBuilds = path.builds.slice(0, 3);

  const scopeNotes: Record<string, string> = {
    "under-5k":
      "At this level we'd scope a single, focused build — the one component most likely to change your numbers — rather than a full system.",
    "5-15k":
      "This range typically covers a focused system: a core destination plus the capture and conversion path around it.",
    "15-40k":
      "This range typically covers a connected system across multiple components, delivered in a defined order.",
    "40k-plus":
      "This range supports a full growth system, including product or application work where it's justified.",
    unsure:
      "Budget being undecided is normal at this stage. We'd scope against the outcome you described and give you a build order you can start anywhere in.",
  };

  return {
    headline: `Your likely starting point: ${path.name}`,
    pathId,
    pathName: path.name,
    rationale: rationaleParts.join(" "),
    flow: path.flow,
    firstBuilds,
    scopeNote: scopeNotes[budget] ?? scopeNotes.unsure,
  };
}
