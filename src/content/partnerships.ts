/** Partnerships page copy. Terms and pricing notes live in site.ts. */

export const partnerships = {
  eyebrow: "SaaS partnerships",
  title: "A hands-on partner for building and growing a software product.",
  lede: "YardScale is an app studio. Alongside its own products, Andrew selectively works with founders to develop and grow theirs — taking on the strategy, the build and the route to market together, as a partner rather than a supplier.",

  selective: {
    title: "Partnerships are selective.",
    copy: "A partnership takes real time from both sides, so Andrew takes on very few. Whether one goes ahead depends on three things. Applying does not guarantee a partnership, and most applications will not become one.",
    criteria: [
      { title: "Project fit", detail: "A real problem, a reachable customer, and a product that YardScale's skills genuinely improve." },
      { title: "Founder commitment", detail: "You are in this for the long run and bring something essential: domain knowledge, access to customers, time, or capital." },
      { title: "The opportunity", detail: "There is a plausible path from a first version to a business. Not a certainty — nobody has one — but a path." },
    ],
  },

  covers: [
    { title: "Product strategy", detail: "What the product is, who it is for, and what it deliberately does not do." },
    { title: "Market validation", detail: "Testing demand with real prospective customers before committing to the build." },
    { title: "MVP planning", detail: "Scoping a first version small enough to ship and useful enough to learn from." },
    { title: "AI-assisted development", detail: "Building the product with modern AI-assisted workflows, tested as it goes." },
    { title: "Launch strategy", detail: "Beta, feedback, pricing and the first public release." },
    { title: "Marketing and distribution", detail: "Positioning, content and the channels that reach the first customers." },
    { title: "Business systems", detail: "Onboarding, support, payments and the operations that keep it running." },
  ],

  process: [
    { title: "Apply", detail: "Tell us about you, the product, the audience and what you are looking for in a partner." },
    { title: "Review", detail: "Andrew reads every application. If it is not a fit you will be told, usually with a pointer to something more useful." },
    { title: "Conversation", detail: "For promising applications: a working call on the product, the market and how a partnership could be structured." },
    { title: "Terms", detail: "If both sides want to proceed, scope, responsibilities and commercial terms are agreed in writing before any work starts." },
  ],
};

export const partnershipStageOptions = [
  { value: "idea", label: "Idea only" },
  { value: "validated", label: "Validated with prospective customers" },
  { value: "designs", label: "Designs or a prototype" },
  { value: "mvp", label: "MVP built" },
  { value: "users", label: "Live with users" },
  { value: "revenue", label: "Live with revenue" },
];
