/** Coaching sales page copy and the application form's options. Pricing lives in site.ts. */

export const coaching = {
  eyebrow: "One-on-one coaching",
  title: "Direct access to Andrew while you build your SaaS.",
  lede: "Coaching is for founders who are doing the work and want someone practical in their corner: a second pair of eyes on the decisions, the plan and the product, from someone building software products himself.",

  whoFor: [
    "You have a SaaS idea and want to test it properly before you spend months building.",
    "You are part-way through an MVP and it keeps growing instead of shipping.",
    "You have launched, and customers are not arriving the way you expected.",
    "You are building with AI tools and want a workflow that produces something you can maintain.",
    "You would rather be told the uncomfortable thing now than discover it after launch.",
  ],

  notFor: [
    "You want someone to build the product for you. That is a partnership conversation, not coaching.",
    "You are looking for a guaranteed outcome. Nobody honest can sell you one.",
    "You do not have time to act between sessions. Coaching only works if the work happens.",
  ],

  problems: [
    { title: "No clear next step", detail: "Too many options, no way to rank them. We pick the one thing that matters this week." },
    { title: "An unvalidated idea", detail: "We design the cheapest test that would tell you whether anyone wants it." },
    { title: "An MVP that will not finish", detail: "We cut scope to the one job the product must do, and set a date." },
    { title: "AI builds that fall apart", detail: "We set up a build process: small steps, written specs, things tested before the next thing starts." },
    { title: "A launch with no customers", detail: "We work out who the first ten customers are and how to reach them by hand." },
    { title: "Pricing guesswork", detail: "We set a first price you can defend, and a way to learn whether it is wrong." },
  ],

  sessions: [
    "Your idea, market and customer — who has the problem and what they do about it today.",
    "Validation — what evidence you have, and what evidence you still need.",
    "MVP scope and product decisions — what goes in version one and what waits.",
    "Planning and AI-assisted development — how to brief, build and test in small steps.",
    "Beta launch, testing and feedback — getting real usage and deciding what to fix.",
    "Pricing, positioning and messaging — what you charge and how you describe it.",
    "Customer acquisition — the first customers, then the first repeatable channel.",
    "Operations — the simple systems that stop the business depending on your memory.",
  ],

  process: [
    { title: "Submit your application", detail: "A short form. It takes about five minutes and tells Andrew where you are." },
    { title: "Andrew reviews it", detail: "Every application is read by Andrew personally. Not every application is a fit." },
    { title: "A conversation, if it is a fit", detail: "Suitable applicants are invited to a call to talk through the product and what help would be useful." },
    { title: "Scope and pricing are agreed", detail: "You get a clear proposal: what coaching covers, how often, and what it costs. No obligation." },
    { title: "Coaching begins", detail: "Sessions start, with specific work agreed between each one." },
  ],

  expect: [
    { title: "Straight answers", detail: "If the idea has a hole in it, you hear that first, with the reasoning." },
    { title: "Work between sessions", detail: "Each session ends with something specific to do. Progress is measured by what shipped." },
    { title: "Real examples", detail: "Advice comes from products Andrew is building, including the mistakes." },
    { title: "No guarantees", detail: "Coaching improves your decisions and your pace. It cannot promise customers, revenue or a successful product." },
  ],
};

/** Options for the application form. `value` is what is stored. */
export const stageOptions = [
  { value: "idea", label: "I have an idea, nothing built" },
  { value: "validating", label: "I am validating the idea" },
  { value: "building", label: "I am building the first version" },
  { value: "beta", label: "I have a beta or early users" },
  { value: "launched", label: "I have launched and want customers" },
  { value: "revenue", label: "I have paying customers and want to grow" },
];

export const budgetOptions = [
  { value: "exploring", label: "Still exploring what this costs" },
  { value: "ready", label: "Ready to invest if it is the right fit" },
  { value: "limited", label: "Limited budget, but committed" },
  { value: "prefer-not", label: "Prefer not to say yet" },
];
