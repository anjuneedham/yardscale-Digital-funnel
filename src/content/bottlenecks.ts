import type { GrowthPathId } from "./growth-paths";

/**
 * The homepage diagnostic.
 * Each option maps a symptom the visitor recognises to a likely bottleneck
 * and a possible growth path. Language is deliberately non-absolute — this is
 * a starting hypothesis, not a professional diagnosis.
 */

export type Bottleneck = {
  id: string;
  /** The visitor-facing symptom, written the way people describe it themselves. */
  option: string;
  /** Short label for compact UI. */
  short: string;
  /** The named bottleneck. */
  likelyBottleneck: string;
  /** Plain explanation of what is probably happening. */
  reading: string;
  /** What that usually means in practice — three observable signs. */
  signs: string[];
  path: GrowthPathId;
};

export const bottlenecks: Bottleneck[] = [
  {
    id: "qualified-leads",
    option: "I need more qualified leads.",
    short: "Qualified leads",
    likelyBottleneck: "Lead capture and qualification",
    reading:
      "The problem is usually not volume. It is that interest arrives with nowhere to go and no way to sort serious buyers from browsers. Without capture and qualification, every good lead depends on someone happening to email you.",
    signs: [
      "Traffic exists, but you cannot name where a lead enters the business.",
      "Enquiries arrive unstructured, so you qualify manually on every call.",
      "Good-fit and bad-fit prospects get the same experience.",
    ],
    path: "lead-generation",
  },
  {
    id: "no-action",
    option: "People see my business, but they don't take action.",
    short: "No action taken",
    likelyBottleneck: "Offer clarity and next-step design",
    reading:
      "Visibility is doing its job. What is missing is a specific, obvious, low-friction next step — and an offer stated clearly enough that someone can decide it is for them.",
    signs: [
      "The page describes what you do, not what someone should do next.",
      "Several competing calls to action, so none of them lands.",
      "The offer is understandable to you and ambiguous to a stranger.",
    ],
    path: "conversion",
  },
  {
    id: "website-not-converting",
    option: "My website isn't converting.",
    short: "Website not converting",
    likelyBottleneck: "Conversion infrastructure",
    reading:
      "Your website may not need to look different. It may need to function differently. A site that presents information is a brochure; a site that moves someone from attention to action is a system.",
    signs: [
      "The site is attractive but has no defined conversion path.",
      "No lead capture beyond a contact form nobody fills in.",
      "Nothing happens after someone shows interest.",
    ],
    path: "conversion",
  },
  {
    id: "need-funnel",
    option: "I need a funnel.",
    short: "Need a funnel",
    likelyBottleneck: "Customer journey architecture",
    reading:
      "A funnel is not a page — it is a sequence. The work is deciding what has to happen at each step, what the visitor gets, and what qualifies them to move forward. The build follows that decision.",
    signs: [
      "You know you need a funnel but not which one, or for which offer.",
      "Traffic goes to a homepage rather than a purpose-built entry point.",
      "No structured follow-up after the first interaction.",
    ],
    path: "lead-generation",
  },
  {
    id: "offer-packaging",
    option: "I have an offer but don't know how to package or sell it.",
    short: "Offer packaging",
    likelyBottleneck: "Offer architecture and positioning",
    reading:
      "When an offer is hard to sell, it is often because it has not been shaped into something a buyer can evaluate — a specific outcome, for a specific person, with a clear reason to act now.",
    signs: [
      "Pricing changes depending on who is asking.",
      "You explain the offer differently every time.",
      "Prospects ask what they actually get.",
    ],
    path: "high-ticket",
  },
  {
    id: "course",
    option: "I want to turn my expertise into a course or education product.",
    short: "Course / education",
    likelyBottleneck: "Education infrastructure",
    reading:
      "Knowledge does not become a product by being recorded. It needs a structure people can progress through, a way to buy it, and a path that leads them there from the content you already publish.",
    signs: [
      "You teach the same thing repeatedly, one person at a time.",
      "The material exists, but nothing hosts, sells, or sequences it.",
      "No route from free content to a paid education product.",
    ],
    path: "education",
  },
  {
    id: "monetize-audience",
    option: "I want to monetize my audience.",
    short: "Monetize audience",
    likelyBottleneck: "Owned destination and offer",
    reading:
      "Audience attention on a platform you do not own converts only if it has somewhere to go. That usually means a destination you control, a reason to give you an email address, and something to buy at the end of it.",
    signs: [
      "Audience growth is not tracked by any owned asset — email, community, customers.",
      "The link in bio points at a platform, not a system.",
      "Nothing to buy, or something to buy with no path to it.",
    ],
    path: "creator-monetization",
  },
  {
    id: "product-or-app",
    option: "I need a digital product or mobile app.",
    short: "Product or app",
    likelyBottleneck: "Product definition before build",
    reading:
      "An app is an expensive answer, so the question has to be right. The first work is defining the specific problem it solves and the process it replaces — then building the smallest version that proves it.",
    signs: [
      "The idea is described in features rather than in the problem it removes.",
      "The underlying process has not been run manually yet.",
      "No defined first user, or no way to reach them.",
    ],
    path: "digital-product",
  },
  {
    id: "unknown",
    option: "I don't know what's wrong yet.",
    short: "Not sure yet",
    likelyBottleneck: "Diagnosis",
    reading:
      "This is a legitimate answer and a common one. Something is not working, and the symptom is not the cause. The next step is mapping what exists today — audience, offer, infrastructure, conversion — and finding the point where the chain breaks.",
    signs: [
      "Effort is going in and results are not coming out.",
      "You have tried individual fixes without a model of the whole system.",
      "You are not sure which part is underperforming.",
    ],
    path: "conversion",
  },
];

export const bottleneckById = (id: string) => bottlenecks.find((b) => b.id === id);
