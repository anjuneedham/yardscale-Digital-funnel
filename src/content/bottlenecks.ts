import type { GrowthPathId } from "./growth-paths";

/**
 * The homepage diagnostic.
 *
 * Written for solopreneurs with knowledge to sell. Each option maps a symptom
 * the visitor recognises to a likely bottleneck and a possible growth path.
 * Language is deliberately non-absolute — this is a starting hypothesis, not a
 * professional diagnosis.
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
    id: "no-offer",
    option: "I have expertise, but nothing packaged that people can buy.",
    short: "No packaged offer",
    likelyBottleneck: "Offer architecture and positioning",
    reading:
      "The expertise is real. What is missing is the shape around it — a specific outcome, for a specific person, at a price you can say out loud without flinching. Until that exists, every sale is improvised from scratch.",
    signs: [
      "You explain what you do differently every time you are asked.",
      "Pricing changes depending on who is asking.",
      "Prospects want to work with you but cannot tell what they would be buying.",
    ],
    path: "high-ticket",
  },
  {
    id: "knowledge-to-course",
    option: "I want to turn what I know into a course or product.",
    short: "Course or product",
    likelyBottleneck: "Education infrastructure",
    reading:
      "Knowledge does not become a product by being recorded. It needs a structure people can progress through, a way to buy it, and a path that leads them there from the content you already publish.",
    signs: [
      "You teach the same thing repeatedly, one person at a time.",
      "The material exists in pieces, but nothing hosts, sequences or sells it.",
      "Your income stops the moment you stop delivering.",
    ],
    path: "course",
  },
  {
    id: "no-action",
    option: "People land on my site, but they don't book or buy.",
    short: "Nobody acts",
    likelyBottleneck: "Conversion path design",
    reading:
      "Attention is arriving and leaking out. Usually the page describes the business rather than carrying someone to one specific decision — or the decision is there, but competing with three other things to click.",
    signs: [
      "The page explains what you do, not what someone should do next.",
      "Several calls to action compete, so none of them lands.",
      "Nothing happens automatically after someone shows interest.",
    ],
    path: "funnel",
  },
  {
    id: "content-not-converting",
    option: "I'm posting content, but it doesn't turn into clients.",
    short: "Content, no clients",
    likelyBottleneck: "Missing path between content and offer",
    reading:
      "The content is doing its job — it is producing attention. What is missing is the destination underneath it: somewhere for that attention to go, a reason to leave an email address, and an offer at the end of it.",
    signs: [
      "The link in bio points at a platform, not a system.",
      "Audience growth is not tracked by anything you own.",
      "There is nothing to buy, or something to buy with no path to it.",
    ],
    path: "funnel",
  },
  {
    id: "not-enough-visibility",
    option: "I have an offer, but not enough people see it.",
    short: "Not enough reach",
    likelyBottleneck: "Distribution",
    reading:
      "When an offer converts for the people who find it, the constraint has moved to reach. That is a distribution problem — a channel run properly, pointed at a destination built for it, rather than more tactics tried briefly.",
    signs: [
      "The people who do find you convert reasonably well.",
      "You have tried several channels for a few weeks each.",
      "There is no repeatable way you can point at that brings new people in.",
    ],
    path: "distribution",
  },
  {
    id: "ads-not-paying-back",
    option: "I'm running ads or promotion, and it isn't paying back.",
    short: "Ads not paying back",
    likelyBottleneck: "Traffic and destination mismatch",
    reading:
      "Paid traffic amplifies whatever the destination already does. When spend does not return, the cause is usually the join between the two — the ad promises one thing, the page continues another, and the click is paid for twice.",
    signs: [
      "Ads send traffic to a general page rather than a purpose-built one.",
      "You cannot say what a customer currently costs to acquire.",
      "Results are judged within days, before delivery has settled.",
    ],
    path: "distribution",
  },
  {
    id: "unknown",
    option: "I don't know what's wrong yet.",
    short: "Not sure yet",
    likelyBottleneck: "Diagnosis",
    reading:
      "This is a legitimate answer and a common one. Something is not working, and the symptom is rarely the cause. The next step is mapping what exists today — audience, offer, funnel, distribution — and finding the point where the chain breaks.",
    signs: [
      "Effort is going in and results are not coming out.",
      "You have tried individual fixes without a model of the whole system.",
      "You are not sure which part is underperforming.",
    ],
    path: "funnel",
  },
];

export const bottleneckById = (id: string) => bottlenecks.find((b) => b.id === id);
