/** The YardScale operating process. Used on the homepage and /how-it-works. */

export type ProcessStep = {
  number: string;
  name: string;
  summary: string;
  /** Expanded explanation for /how-it-works. */
  detail: string;
  questions: string[];
  output: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    name: "Diagnose",
    summary:
      "Understand your business, audience, offer, and current growth system.",
    detail:
      "Before anything is designed, we map what exists: where attention comes from, what you sell, who buys it, what happens between those two points, and where the chain breaks. Most engagements change shape at this stage, because the requested deliverable is rarely the actual constraint.",
    questions: [
      "Where does attention currently come from, and how much of it is owned?",
      "What is the offer, and can a stranger evaluate it in one read?",
      "What exists today between attention and a paying customer?",
      "Which step loses the most people, and why?",
    ],
    output: "A written read on the bottleneck and what it is costing.",
  },
  {
    number: "02",
    name: "Architect",
    summary: "Determine what needs to exist and how the pieces should connect.",
    detail:
      "We design the system on paper first — the sequence a customer moves through, what each step has to accomplish, and which infrastructure supports it. Connections matter more than components: a good landing page attached to nothing is still a dead end.",
    questions: [
      "What sequence has to work end to end?",
      "What is the minimum infrastructure that makes it function?",
      "What gets built first, and what can wait?",
      "How will we know whether it works?",
    ],
    output: "A system map, a build scope, and a delivery order.",
  },
  {
    number: "03",
    name: "Build",
    summary:
      "Implement the required website, funnel, offer infrastructure, digital product, or application.",
    detail:
      "Implementation happens against the architecture, not against a template. Copy, structure, and technology decisions all follow from the job each piece has to do. Everything is built to be measured and changed after launch.",
    questions: [
      "Does each piece do the job the architecture assigned it?",
      "Is the path from entry to conversion unbroken?",
      "Is it fast, accessible, and usable on a phone?",
      "Is it instrumented well enough to learn from?",
    ],
    output: "A working system, live, with tracking in place.",
  },
  {
    number: "04",
    name: "Launch & Improve",
    summary:
      "Put the system in front of the right audience and improve based on what happens.",
    detail:
      "Launch is where assumptions meet reality. We watch how real traffic moves through the system, find the step that leaks, and fix that step — rather than rebuilding things that already work.",
    questions: [
      "Where do people actually drop out?",
      "Which traffic source produces qualified demand, not just visits?",
      "What is the single highest-leverage change available now?",
      "What did we learn that changes the architecture?",
    ],
    output: "Measured performance and a prioritised improvement list.",
  },
];
