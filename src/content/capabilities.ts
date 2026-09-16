/**
 * What YardScale builds. Four capabilities, matching what a solopreneur with
 * knowledge to sell actually needs: an offer people can buy, a product that
 * scales it, a funnel that converts, and the distribution that fills it.
 *
 * The homepage grid and /what-we-build page both read this file.
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
    id: "high-ticket-offers",
    name: "High-Ticket Offer Systems",
    summary: "Turning expertise into an offer a stranger can evaluate and buy.",
    whatItIs:
      "The positioning, pricing, and application flow that make a high-value offer buyable — a specific outcome, for a specific person, with the scope and risk stated clearly enough to decide without a call.",
    whoNeedsIt:
      "Solopreneurs, coaches and consultants whose expertise is real but unpackaged, priced inconsistently, and sold one improvised conversation at a time.",
    problemItSolves:
      "When an offer is hard to sell, it is usually because it has not been shaped into something a buyer can assess. Every sale gets rebuilt from scratch, and the price moves depending on who is asking.",
    couldInclude: [
      "Offer architecture and positioning",
      "Pricing and scope structure",
      "Application and qualification funnel",
      "Sales page and pre-call framing",
      "Booking and follow-up infrastructure",
    ],
  },
  {
    id: "courses-education",
    name: "Courses & Knowledge Products",
    summary: "Structuring what you know into something that sells without your time.",
    whatItIs:
      "A structured learning product plus everything around it — the platform that hosts it, the page that sells it, and the path that leads people to it. We run our own course on the same infrastructure.",
    whoNeedsIt:
      "Educators, operators and creators whose knowledge is repeatable and currently delivered live, one person at a time.",
    problemItSolves:
      "Teaching does not scale until it is structured, hosted, and sold through a repeatable path. Until then, income stops the moment delivery stops.",
    couldInclude: [
      "Course platform and member area",
      "Curriculum and progression structure",
      "Sales page and checkout",
      "Free-value to paid-product path",
      "Access and delivery infrastructure",
    ],
  },
  {
    id: "funnels",
    name: "Funnels & Landing Pages",
    summary: "The path that carries attention to a booked call or a purchase.",
    whatItIs:
      "A defined sequence from first contact to a decision, with a specific job at every step — built as a conversion path rather than a set of pages that describe the business.",
    whoNeedsIt:
      "Anyone sending traffic — paid, organic, or content — into a destination that was not built to convert it.",
    problemItSolves:
      "Attention arrives at a general-purpose page, gets no specific next step, and leaves. A funnel replaces that with a sequence you can measure and improve.",
    couldInclude: [
      "Landing pages built per traffic source",
      "Lead capture and qualification",
      "Automated follow-up sequence",
      "Booking or checkout flow",
      "Tracking and attribution wiring",
    ],
  },
  {
    id: "distribution",
    name: "Distribution & Paid Traffic",
    summary: "Getting the offer in front of the people it was built for.",
    whatItIs:
      "Channel strategy and paid campaign management, pointed at a funnel designed for that specific traffic — built and run as one system rather than handed off in isolation.",
    whoNeedsIt:
      "Solopreneurs whose offer converts for the people who find it, but who have no repeatable way to bring new people in.",
    problemItSolves:
      "Paid traffic sent to a generic page burns spend without producing a signal you can act on. Running the promotion and the destination together is what makes the spend measurable.",
    couldInclude: [
      "Channel strategy and audience targeting",
      "Campaign setup and ongoing management",
      "Creative and angle testing",
      "Owned capture so reach accumulates",
      "Cost per acquisition and attribution tracking",
    ],
  },
];

export const capabilityById = (id: string) => capabilities.find((c) => c.id === id);
