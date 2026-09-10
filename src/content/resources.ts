/**
 * Resources and lead magnets.
 * The starter guide is the primary lead magnet on the homepage.
 */

export type Resource = {
  id: string;
  title: string;
  kind: "Guide" | "Framework" | "Checklist" | "Template";
  summary: string;
  /** What a reader gets, concretely. */
  contents: string[];
  /** "available" resources are delivered via the lead form; "planned" render as upcoming. */
  status: "available" | "planned";
};

export const resources: Resource[] = [
  {
    id: "starter-guide",
    title: "YardScale Growth System Starter Guide",
    kind: "Guide",
    summary:
      "How to map the system between attention and revenue in your own business, and find the step that is costing you the most.",
    contents: [
      "The six-stage growth system model, explained",
      "How to locate your bottleneck without guessing",
      "What to build first when several things are broken",
      "The questions to answer before commissioning any build",
    ],
    status: "available",
  },
  {
    id: "bottleneck-audit",
    title: "Bottleneck Audit Worksheet",
    kind: "Checklist",
    summary:
      "A structured pass over attention, offer, infrastructure and conversion, so you can see which stage is actually underperforming.",
    contents: [
      "Stage-by-stage audit prompts",
      "Signals that a stage is the constraint",
      "A prioritisation rule for what to fix first",
    ],
    status: "planned",
  },
  {
    id: "offer-architecture",
    title: "Offer Architecture Framework",
    kind: "Framework",
    summary:
      "How to shape expertise into an offer a buyer can evaluate — outcome, audience, mechanism, and reason to act.",
    contents: [
      "The four components of a buyable offer",
      "How to test offer clarity with strangers",
      "Common packaging failures and their fixes",
    ],
    status: "planned",
  },
];

export const availableResources = resources.filter((r) => r.status === "available");
export const plannedResources = resources.filter((r) => r.status === "planned");
