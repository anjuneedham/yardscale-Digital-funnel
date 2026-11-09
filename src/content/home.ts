/**
 * Homepage copy. The section order in src/app/page.tsx is the funnel; the
 * words for each section live here so they can change without touching layout.
 */

export const hero = {
  eyebrow: "App studio & SaaS founder education",
  /** Rendered as three lines. */
  headline: ["Build your SaaS.", "Learn the entire process.", "Do it with people who are building too."],
  support:
    "Practical systems, real-world lessons and direct guidance for turning software ideas into businesses.",
};

export const problems: { title: string; detail: string }[] = [
  {
    title: "Too much conflicting information.",
    detail:
      "Every video says something different. Validate first. Just ship. Build an audience. Pick a niche. You end up with forty tabs open and no decision made.",
  },
  {
    title: "Not knowing what to build.",
    detail:
      "You have ideas, but no way of telling a real problem people pay to solve from something that only sounds good in your head.",
  },
  {
    title: "Stuck between planning and execution.",
    detail:
      "The plan keeps getting better and the product keeps not existing. Planning feels like progress. It isn't the same thing.",
  },
  {
    title: "Overcomplicated MVPs.",
    detail:
      "The first version grows accounts, dashboards, settings and integrations before a single person has used the one thing it is supposed to do.",
  },
  {
    title: "Building without validating demand.",
    detail:
      "Months go into a product nobody asked for, because asking felt slower than building. It is the most expensive way to find out.",
  },
  {
    title: "Not knowing how to get customers.",
    detail:
      "The product launches and nothing happens. Nobody taught the part that comes after the code works.",
  },
  {
    title: "Disconnected tactics instead of a system.",
    detail:
      "A validation trick here, a launch checklist there. Each one makes sense alone. None of them tell you what to do next.",
  },
];

/** The journey. `module` links each stage to where it is taught in Zero to SaaS. */
export const journey: { stage: string; summary: string; modules: string }[] = [
  {
    stage: "Idea",
    summary: "Find problems worth solving, and write the idea down in a form you can test.",
    modules: "Modules 0–1",
  },
  {
    stage: "Validation",
    summary: "Talk to the people who have the problem. Look for evidence they would pay, before you build.",
    modules: "Modules 1–2",
  },
  {
    stage: "Planning",
    summary: "Cut the product to the one job it must do. Decide what the first version leaves out.",
    modules: "Modules 3–4",
  },
  {
    stage: "Building",
    summary: "Build the first version with AI-assisted development, in small steps you can test.",
    modules: "Module 4",
  },
  {
    stage: "Launch",
    summary: "Put it in front of real users in a beta. Fix what breaks. Decide what to charge.",
    modules: "Modules 5–7",
  },
  {
    stage: "Customers",
    summary: "Get the first customers by hand. Learn which channel and which message actually work.",
    modules: "Modules 8–10",
  },
  {
    stage: "Growth",
    summary: "Turn what worked into systems, so the business keeps running when you step away from the keyboard.",
    modules: "Modules 11–12",
  },
];

export const founder = {
  eyebrow: "Who is behind this",
  title: "Andrew Needham. Sales first, then marketing, then software.",
  paragraphs: [
    "I did not start as a developer. I started in sales, where you learn quickly that nobody buys a product because it is clever. They buy because it fixes something that is costing them.",
    "From sales I moved into marketing and running my own businesses: positioning, customer acquisition, operations — the unglamorous parts that decide whether a business works.",
    "Then I started building software products myself, using AI-assisted development to get from idea to working MVP, then into testing and launch. YardScale Digital is the studio I build them in.",
    "The methodology I teach is the one I am using. It is practical, it is still evolving, and where I have not finished learning something, I say so.",
  ],
  /** Shown as a plain list beside the story. Keep these factual. */
  background: [
    "Sales",
    "Marketing and positioning",
    "Entrepreneurship and operations",
    "Product development",
    "AI-assisted software development",
    "MVP launches and testing",
    "Customer acquisition",
  ],
};

export const finalCta = {
  title: "Start learning, or get direct help.",
  copy: "Read the course and join the build notes if you want to work through it yourself. Apply if you want Andrew working on it with you.",
};
