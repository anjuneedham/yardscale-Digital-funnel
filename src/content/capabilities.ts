/**
 * What YardScale builds and runs. Four practice areas, not a menu of nine
 * unrelated deliverables: funnels get built, paid traffic points at them,
 * and digital products / courses are shipped both for YardScale itself and
 * for clients. Add or edit entries here — the homepage grid and
 * /what-we-build page both read this file.
 */

export type Capability = {
  id: string;
  name: string;
  /** One-line summary used on the homepage grid. */
  summary: string;
  /** Longer answers used on /what-we-build. */
  whatItIs: string;
  whoNeedsIt: string;
  problemItSolves: string;
  couldInclude: string[];
};

export const capabilities: Capability[] = [
  {
    id: "funnels",
    name: "Funnels & Websites",
    summary: "Owned funnels and websites architected to convert, not just published.",
    whatItIs:
      "A website, funnel, or landing page built as a sequence toward one decision. Structure, copy hierarchy, and calls to action follow the decision a visitor has to make — not a template.",
    whoNeedsIt:
      "Businesses who need a destination that can actually carry traffic to a result, whether that traffic is paid, organic, or referral.",
    problemItSolves:
      "Most sites and funnels are unarchitected — a homepage, a contact form, and no defined path from attention to a decision. Paid traffic exposes that immediately: clicks cost money, and an unarchitected destination wastes them.",
    couldInclude: [
      "Conversion-led site or funnel architecture",
      "Landing pages built per traffic source",
      "Offer and messaging hierarchy",
      "Lead capture, qualification and follow-up",
      "Analytics and attribution wiring",
    ],
  },
  {
    id: "paid-advertising",
    name: "Paid Advertising & Promotion",
    summary: "Paid traffic and promotion run toward a funnel built to convert it.",
    whatItIs:
      "Campaign setup and ongoing management across paid channels, pointed at a funnel designed for that specific traffic — built and run as one system rather than handed off in isolation.",
    whoNeedsIt:
      "Businesses with a funnel that is ready for traffic, or that need the ad and the destination designed together from the start.",
    problemItSolves:
      "Paid traffic sent to a generic page burns spend without producing a signal you can act on. Running the promotion and the destination as one system is what makes the spend measurable and improvable.",
    couldInclude: [
      "Campaign structure and audience targeting",
      "Creative and offer alignment with the destination",
      "Budget pacing and channel selection",
      "Conversion tracking and attribution",
      "Ongoing optimization against results",
    ],
  },
  {
    id: "digital-products",
    name: "Digital Products & Apps",
    summary: "Software and apps built for our own products, and for clients' businesses.",
    whatItIs:
      "A web or mobile product that delivers the outcome directly, rather than describing it. We build these for our own products as well as for clients — the same practice, the same standard.",
    whoNeedsIt:
      "Businesses and creators whose value is in a tool, process, or experience — not a service delivered by hand.",
    problemItSolves:
      "A manual process that works but cannot scale, or an idea that only becomes real once someone can use it.",
    couldInclude: [
      "Product definition and scoping",
      "Web application or mobile app build",
      "Customer portal or dashboard",
      "Payment and access infrastructure",
      "Onboarding and retention flow",
    ],
  },
  {
    id: "courses-education",
    name: "Courses & Education",
    summary: "Course and education infrastructure, built for our own curriculum and for clients'.",
    whatItIs:
      "The platform, curriculum structure, sales path, and delivery for a course or education product — the same infrastructure we run our own course on.",
    whoNeedsIt:
      "Educators, operators, and creators whose knowledge is repeatable and currently delivered live, one person at a time — or businesses building education as a product line.",
    problemItSolves:
      "Teaching does not scale until it is structured, hosted, sold through a repeatable path, and connected to a funnel that brings people to it.",
    couldInclude: [
      "Education platform or course hosting",
      "Curriculum and progression structure",
      "Sales page, checkout and funnel",
      "Free-value to paid-product path",
      "Community or cohort infrastructure",
    ],
  },
];

export const capabilityById = (id: string) => capabilities.find((c) => c.id === id);
