/**
 * Growth paths: the systems YardScale builds for solopreneurs once a
 * bottleneck is identified. Each path is a flow (what has to happen) plus the
 * infrastructure that supports it.
 *
 * Four paths, matching the four things a solopreneur with knowledge needs:
 * an offer people can buy, a product that scales it, a funnel that converts,
 * and distribution that fills it.
 */

export type GrowthPathId = "high-ticket" | "course" | "funnel" | "distribution";

export type GrowthPath = {
  id: GrowthPathId;
  name: string;
  /** One line describing the growth problem this path addresses. */
  premise: string;
  /** The sequence the business needs to work end to end. */
  flow: string[];
  /** What YardScale may build to make that sequence function. */
  builds: string[];
  ctaLabel: string;
};

export const growthPaths: Record<GrowthPathId, GrowthPath> = {
  "high-ticket": {
    id: "high-ticket",
    name: "High-Ticket Offer",
    premise:
      "You can deliver a valuable outcome, but it is not packaged, priced, or positioned as something a stranger can evaluate and buy.",
    flow: ["Expertise", "Positioning", "Offer", "Application", "Sales Conversation", "Client"],
    builds: [
      "Offer architecture and positioning",
      "Pricing and scope structure",
      "Application and qualification funnel",
      "Sales page",
      "Booking and follow-up infrastructure",
    ],
    ctaLabel: "Build this system",
  },
  course: {
    id: "course",
    name: "Course / Knowledge Product",
    premise:
      "Your knowledge is repeatable and currently delivered live, one person at a time. It needs a structure people can buy, complete, and get a result from.",
    flow: ["Knowledge", "Curriculum", "Platform", "Sales Page", "Customer"],
    builds: [
      "Course platform and member area",
      "Curriculum and progression structure",
      "Sales page and checkout",
      "Free-value to paid-product path",
      "Delivery and access infrastructure",
    ],
    ctaLabel: "Build this system",
  },
  funnel: {
    id: "funnel",
    name: "Conversion Funnel",
    premise:
      "People find you and roughly understand what you do, but the path from interest to a booked call or a purchase is unclear, slow, or missing entirely.",
    flow: ["Attention", "Landing Page", "Capture", "Qualification", "Booked Call or Purchase"],
    builds: [
      "Landing pages built per traffic source",
      "Lead capture and qualification",
      "Automated follow-up sequence",
      "Booking or checkout flow",
      "Tracking and attribution",
    ],
    ctaLabel: "Build this system",
  },
  distribution: {
    id: "distribution",
    name: "Distribution & Paid Traffic",
    premise:
      "The offer converts when people see it. The problem is that not enough of the right people do, and there is no reliable way to change that.",
    flow: ["Offer", "Channel", "Creative", "Traffic", "Funnel", "Customer"],
    builds: [
      "Channel strategy and audience targeting",
      "Paid campaign setup and management",
      "Creative and angle testing",
      "Owned capture so reach accumulates",
      "Cost and attribution tracking",
    ],
    ctaLabel: "Build this system",
  },
};

export const growthPathList = Object.values(growthPaths);
