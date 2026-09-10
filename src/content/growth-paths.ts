/**
 * Growth paths: the systems YardScale may build once a bottleneck is identified.
 * Each path is a flow (what has to happen) plus the infrastructure that supports it.
 */

export type GrowthPathId =
  | "lead-generation"
  | "conversion"
  | "high-ticket"
  | "creator-monetization"
  | "education"
  | "digital-product";

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
  "lead-generation": {
    id: "lead-generation",
    name: "Lead Generation",
    premise:
      "Attention arrives, but nothing captures it or sorts it. Interested people leave without becoming a conversation you can have.",
    flow: ["Traffic", "Landing Page", "Lead Capture", "Qualification", "Sales Conversation"],
    builds: ["Landing page", "Lead funnel", "Qualification flow", "Conversion infrastructure"],
    ctaLabel: "Build this system",
  },
  conversion: {
    id: "conversion",
    name: "Conversion",
    premise:
      "People find you and understand roughly what you do, but the path from interest to action is unclear, slow, or missing.",
    flow: ["Attention", "Offer", "Website", "CTA", "Lead", "Customer"],
    builds: ["Website", "Offer architecture", "Landing page", "Conversion system"],
    ctaLabel: "Build this system",
  },
  "high-ticket": {
    id: "high-ticket",
    name: "High-Ticket Offer",
    premise:
      "You have real expertise and can deliver a high-value outcome, but it is not packaged, positioned, or sold through a repeatable process.",
    flow: ["Expertise", "Positioning", "Offer", "Application", "Sales Call", "Customer"],
    builds: [
      "Offer infrastructure",
      "Application funnel",
      "Landing page",
      "High-ticket conversion system",
    ],
    ctaLabel: "Build this system",
  },
  "creator-monetization": {
    id: "creator-monetization",
    name: "Creator Monetization",
    premise:
      "Content is working. Audience is growing. But there is no owned destination and nothing for that attention to convert into.",
    flow: ["Content", "Audience", "Lead Magnet", "Offer", "Customer"],
    builds: [
      "Creator website",
      "Lead magnet funnel",
      "Email capture infrastructure",
      "High-ticket offer system",
      "Digital product infrastructure",
    ],
    ctaLabel: "Build this system",
  },
  education: {
    id: "education",
    name: "Education",
    premise:
      "Your knowledge is valuable and repeatable. It needs a structure people can buy, complete, and get results from.",
    flow: ["Audience", "Free Value", "Education", "Course / Program", "Customer"],
    builds: [
      "Education platform",
      "Course infrastructure",
      "Landing pages",
      "Funnel",
      "Customer journey",
    ],
    ctaLabel: "Build this system",
  },
  "digital-product": {
    id: "digital-product",
    name: "Digital Product / App",
    premise:
      "The solution is a product, not a page. Someone needs to use software to get the outcome you are selling.",
    flow: ["Problem", "Product", "Digital Experience", "User", "Retention"],
    builds: [
      "Web application",
      "Mobile application",
      "Customer portal",
      "Custom digital product",
    ],
    ctaLabel: "Build this system",
  },
};

export const growthPathList = Object.values(growthPaths);
