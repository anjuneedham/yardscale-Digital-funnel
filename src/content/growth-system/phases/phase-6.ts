import type { Phase } from "../types";

/**
 * PHASE 6 — PROVE
 * Prove It Works.
 *
 * Phase 5 kept running into motivation problems that page changes cannot fix.
 * Those are proof problems. Phase 6 builds proof deliberately — and only the
 * kind you can substantiate, because invented proof is a liability, not an asset.
 */

export const phase6: Phase = {
  slug: "phase-6",
  number: 6,
  code: "PROVE",
  title: "Prove It Works",
  tagline: "Build the proof and trust that make buying the safe choice.",
  status: "available",
  objective:
    "Assemble proof assets that de-risk the buying decision, using only evidence you can substantiate.",
  overview:
    "A buyer's real question is not whether the outcome is good — it is whether it will happen for them. Proof answers that. Phase 6 builds it systematically: deciding what actually counts as proof, collecting evidence while the work happens rather than reconstructing it later, writing case studies that show the mechanism, and placing each piece where the doubt occurs. Every technique here depends on being true, because proof that does not survive scrutiny costs more than having none.",
  outcome: "A proof system: substantiated evidence, cases and trust markers, placed where doubt happens.",
  finalAsset: {
    id: "proof-system",
    title: "Proof System",
    kind: "worksheet",
    description:
      "Your inventory of substantiable proof, mapped to the specific doubts it answers and the points in the path where each piece is placed.",
  },
  lessons: [
    {
      slug: "why-proof-is-a-conversion-asset",
      number: 1,
      title: "Why Proof Is a Conversion Asset",
      summary:
        "Why the real buying question is 'will this work for me', and why proof is the only thing that answers it.",
      objective: "Understand proof as the resolution to risk, not as decoration.",
      durationMinutes: 8,
      blocks: [
        {
          type: "text",
          body: "By the time someone is considering your offer, they usually accept that the outcome would be valuable. What they do not accept is that it will happen for them, with you, at this price. That gap is risk, and no amount of describing the outcome closes it. Only evidence does.",
        },
        {
          type: "heading",
          text: "What the buyer is actually weighing",
        },
        {
          type: "framework",
          title: "Three risks in every decision",
          steps: [
            { label: "Outcome risk", detail: "Will this work at all? Answered by evidence that the mechanism produces the result." },
            { label: "Fit risk", detail: "Will it work for my situation specifically? Answered by evidence from situations that resemble theirs." },
            { label: "Counterparty risk", detail: "Will you actually deliver? Answered by how you conduct yourself before any money changes hands." },
          ],
        },
        {
          type: "callout",
          tone: "signal",
          title: "The reframe",
          body: "You are not persuading someone that the outcome is desirable. You are reducing the risk of finding out. Proof is risk reduction made visible.",
        },
        {
          type: "callout",
          tone: "warn",
          title: "Fabricated proof is a liability",
          body: "Invented testimonials, borrowed results, and numbers you cannot defend are not shortcuts. They fail under the first question, they are increasingly easy to check, and the reputational cost is permanent. Everything in this phase depends on the evidence being real.",
        },
        {
          type: "text",
          body: "If you have no proof yet, that is a starting position, not a disqualification. The rest of this phase covers what counts as proof when you have no case studies — and how to begin collecting evidence from the work you are doing right now.",
        },
      ],
      presenterScript:
        "Open on the real question: not 'is this good' but 'will it work for me'. Introduce the three risks and show that each needs a different kind of evidence. Be unambiguous about fabricated proof — it is a liability, it fails under scrutiny, and the cost is permanent. Then relieve the pressure for people with nothing yet: having no proof is a starting position and the phase covers it.",
      visualSuggestions: [
        "Three risk bars — outcome, fit, counterparty — reducing as evidence is added.",
        "A buyer weighing desirability against risk, with risk as the heavier side.",
      ],
      exercise: {
        title: "Name the risk",
        prompt: "For your primary offer, write what each of the three risks looks like in your buyer's mind.",
        steps: [
          "Write the outcome risk as your buyer would phrase it.",
          "Write the fit risk — why they think their situation might be different.",
          "Write the counterparty risk — what they fear about working with you specifically.",
          "Mark which of the three you currently have the least evidence for.",
        ],
      },
      implementationTask:
        "Audit your current proof for anything you could not substantiate if challenged. Remove it today, regardless of how well it appears to perform.",
      recap: [
        "Buyers accept the outcome is valuable; they doubt it will happen for them.",
        "Three risks — outcome, fit, counterparty — each need different evidence.",
        "Fabricated proof fails under scrutiny and costs more than having none.",
      ],
    },
    {
      slug: "proof-you-can-substantiate",
      number: 2,
      title: "Proof You Can Substantiate",
      summary:
        "The full range of evidence available to you, including what counts when you have no results to point at yet.",
      objective: "Inventory every form of substantiable proof available to your business today.",
      durationMinutes: 10,
      blocks: [
        {
          type: "text",
          body: "Most people believe proof means client results, conclude they do not have enough, and publish nothing. But results are one form of evidence among several, and some of the most persuasive forms are available before you have a single case study.",
        },
        {
          type: "heading",
          text: "Forms of evidence, strongest first",
        },
        {
          type: "framework",
          title: "What actually counts",
          steps: [
            { label: "Measured client outcomes", detail: "A specific, verifiable change in a client's situation. The strongest, and the hardest to have early." },
            { label: "Demonstrated mechanism", detail: "Showing the method working, step by step. Persuasive precisely because it can be inspected." },
            { label: "Work product", detail: "The actual artifacts you produce — a real audit, a real build. Nothing claims more credibly than the thing itself." },
            { label: "Specificity of understanding", detail: "Describing the buyer's problem more precisely than they can. This reads as evidence of experience and needs no client to permit it." },
            { label: "Conduct before purchase", detail: "Responsiveness, clarity, a diagnostic that is genuinely useful. Every pre-sale interaction is evidence about delivery." },
          ],
        },
        {
          type: "callout",
          tone: "signal",
          title: "Proof when you have no clients",
          body: "The last three require no client permission and no track record. Demonstrating the mechanism on your own business, publishing real work product, and describing the problem with unusual precision are all available from day one.",
        },
        {
          type: "callout",
          tone: "warn",
          title: "Rules that keep proof honest",
          body: "State only outcomes you measured or the client confirmed. Do not imply a result was caused by you when other factors contributed. Do not present a hypothetical as a case. If a number needs context to be honest, include the context.",
        },
        {
          type: "text",
          body: "Where an outcome is real but you cannot publish it — a client declines, or a figure is confidential — say what you can and leave the rest out. A reserved slot with no claim is better than a vague claim engineered to sound like more than it is.",
        },
      ],
      presenterScript:
        "Break the assumption that proof means client results — that belief is why most businesses publish nothing. Walk the five forms, then make the key point: the bottom three need no clients at all and are available immediately. Give the honesty rules plainly. End on what to do when a real result cannot be published, which is common and where people are tempted to fudge.",
      visualSuggestions: [
        "Five evidence types stacked by strength, with the bottom three marked 'available now'.",
        "A reserved, empty case study slot shown as more credible than a vague claim.",
      ],
      exercise: {
        title: "Proof inventory",
        prompt: "List everything you could substantiate today across all five forms.",
        steps: [
          "For each of the five forms, list what you currently have.",
          "Mark each item as publishable, needs permission, or not substantiable.",
          "Delete everything in the third category.",
          "Identify the one gap that would most reduce your buyer's biggest risk.",
        ],
      },
      implementationTask:
        "Publish one piece of proof from the bottom three forms this week — a demonstrated mechanism, a real work product, or a precise description of the problem.",
      recap: [
        "Proof is broader than client results; five forms are available.",
        "Mechanism, work product and specificity need no clients or permission.",
        "State only what you measured or the client confirmed, with context included.",
      ],
    },
    {
      slug: "building-the-case-study",
      number: 3,
      title: "Building the Case Study",
      summary:
        "Writing a case that shows the mechanism working, rather than asserting a result the reader has to take on faith.",
      objective: "Write a case study that resolves fit risk for a similar buyer.",
      durationMinutes: 11,
      blocks: [
        {
          type: "text",
          body: "A weak case study announces a number. A strong one lets the reader follow the reasoning: this was the situation, this was the constraint, this is what we did and why, this is what happened. The reader's real question is whether their situation resembles the starting point — so the starting point deserves as much space as the result.",
        },
        {
          type: "heading",
          text: "The structure",
        },
        {
          type: "framework",
          title: "Five parts in order",
          steps: [
            { label: "The situation", detail: "Enough detail that a similar buyer recognises themselves. This is the part that resolves fit risk." },
            { label: "The constraint", detail: "What was actually limiting growth, and how it was identified. Shows diagnosis, not guesswork." },
            { label: "The decision", detail: "What was built and why that rather than the obvious alternative. This is where the mechanism becomes visible." },
            { label: "The outcome", detail: "What changed, stated precisely and only as far as you can substantiate it." },
            { label: "The honest caveat", detail: "What else contributed, what is not yet resolved. This raises credibility rather than lowering it." },
          ],
        },
        {
          type: "callout",
          tone: "signal",
          title: "The caveat is the credibility",
          body: "A case with no complications reads as marketing. A case that names what was hard, what took longer than expected, or what remains unresolved reads as a real account — and readers trust the result more because of it.",
        },
        {
          type: "callout",
          tone: "warn",
          title: "Attribution honesty",
          body: "If revenue rose while you rebuilt the funnel and the client also hired a salesperson, say so. Claiming sole credit for a result with multiple causes is the most common way case studies become indefensible.",
        },
        {
          type: "text",
          body: "When there is no measurable outcome yet, publish the case without one. The situation, constraint and decision are still evidence of how you think — and that is most of what a reader is assessing anyway.",
        },
      ],
      presenterScript:
        "Contrast a number-announcement case with a reasoning case and show why the second converts better. Walk the five parts, giving the situation section the weight it deserves — that is what resolves fit risk. Make the caveat point counter-intuitively: naming complications raises credibility. Be firm on attribution honesty. Close by permitting cases with no outcome section.",
      visualSuggestions: [
        "Two case studies side by side: one a bare statistic, one following the five-part reasoning.",
        "The five parts with 'situation' and 'caveat' visually emphasised as the trust-builders.",
      ],
      exercise: {
        title: "Draft one case",
        prompt: "Write one case study using the five-part structure, on real work only.",
        steps: [
          "Describe the starting situation in enough detail for a similar buyer to recognise it.",
          "State the constraint and how it was identified.",
          "Explain what was built and why, not just what was delivered.",
          "State the outcome only as far as you can substantiate it, or omit the section.",
          "Add the honest caveat: other contributing factors, or what is still unresolved.",
        ],
      },
      implementationTask:
        "Get written permission from the client before publishing anything identifiable, including the outcome figure and how they are named.",
      recap: [
        "Show the reasoning, not just the result — the situation resolves fit risk.",
        "The honest caveat raises credibility rather than lowering it.",
        "Never claim sole credit for an outcome with multiple causes.",
      ],
    },
    {
      slug: "collecting-evidence-as-you-work",
      number: 4,
      title: "Collecting Evidence as You Work",
      summary:
        "Capturing proof while the work is happening, instead of trying to reconstruct it months later.",
      objective: "Install a routine that captures evidence at the moments it exists.",
      durationMinutes: 9,
      blocks: [
        {
          type: "text",
          body: "The reason most businesses have no proof is not that nothing worked. It is that nobody recorded the starting point, nobody asked at the moment the client was pleased, and by the time anyone wanted a case study the numbers were gone and the client had moved on.",
        },
        {
          type: "callout",
          tone: "warn",
          title: "The baseline problem",
          body: "Without a recorded starting number, an improvement cannot be substantiated later. The single highest-return habit in this phase is recording the baseline before work begins.",
        },
        {
          type: "heading",
          text: "The collection routine",
        },
        {
          type: "framework",
          title: "Four moments to capture",
          steps: [
            { label: "At the start — the baseline", detail: "Record the relevant numbers and the client's own description of the problem, in their words." },
            { label: "During — the decisions", detail: "Note what you chose and why. This becomes the mechanism section later and is impossible to reconstruct." },
            { label: "At the moment of satisfaction", detail: "When a client expresses that something worked, that is when to ask — not at the end of the engagement, months later." },
            { label: "After — the durable result", detail: "Follow up later to see whether it held. A result that persisted is far stronger evidence than a launch-week spike." },
          ],
        },
        {
          type: "callout",
          tone: "signal",
          title: "Asking well",
          body: "\"Would you write a testimonial\" creates work and produces generic praise. \"What was the situation before, and what changed?\" produces specifics — and specifics are the part that persuades.",
        },
        {
          type: "text",
          body: "Build permission into the working agreement from the start. Asking whether you may write about the work at kickoff, when nobody has anything at stake, is far easier than asking after a result exists.",
        },
      ],
      presenterScript:
        "Diagnose why people have no proof: not failure, just no capture. Make the baseline point the headline habit — without it nothing can be substantiated later. Walk the four capture moments, especially asking at the moment of satisfaction rather than at the end. Give the better question to ask. Close on getting permission at kickoff, which removes the awkwardness entirely.",
      visualSuggestions: [
        "A timeline with four capture points marked across an engagement.",
        "Two testimonial requests side by side, one generic and one producing specifics.",
      ],
      exercise: {
        title: "Install the routine",
        prompt: "Define what you will capture at each of the four moments, and where it will be stored.",
        steps: [
          "List the baseline numbers you will record at the start of every engagement.",
          "Decide where decisions-and-why will be noted during the work.",
          "Write the two questions you will ask at the moment of satisfaction.",
          "Set the interval at which you will follow up on durability.",
        ],
      },
      implementationTask:
        "Add a permission clause to your standard agreement and record the baseline for every engagement currently in progress, before any more time passes.",
      recap: [
        "Missing proof is a capture failure, not a results failure.",
        "Record the baseline before work starts or nothing can be substantiated later.",
        "Ask at the moment of satisfaction, and get permission at kickoff.",
      ],
    },
    {
      slug: "placing-proof-where-doubt-happens",
      number: 5,
      title: "Placing Proof Where Doubt Happens",
      summary:
        "Positioning each piece of evidence at the exact point in the path where the corresponding doubt arises.",
      objective: "Map each proof asset to the specific doubt and location it addresses.",
      durationMinutes: 9,
      blocks: [
        {
          type: "text",
          body: "Proof collected into a testimonials page does very little, because doubt does not occur on the testimonials page. It occurs at specific moments: when the mechanism is claimed, when the price appears, when commitment is requested. Evidence works when it is adjacent to the doubt it resolves.",
        },
        {
          type: "heading",
          text: "Matching evidence to doubt",
        },
        {
          type: "framework",
          title: "Where each doubt occurs",
          steps: [
            { label: "At the mechanism claim", detail: "Doubt: does this actually work? Place demonstrated mechanism or work product here." },
            { label: "At the situation description", detail: "Doubt: is my case different? Place a case study from a similar starting situation." },
            { label: "At the price", detail: "Doubt: is this worth it? Place evidence of the outcome's value, stated honestly." },
            { label: "At the commitment", detail: "Doubt: what if it goes wrong? Place your risk position and evidence of how you conduct engagements." },
          ],
        },
        {
          type: "callout",
          tone: "warn",
          title: "Volume is not the lever",
          body: "Twenty generic testimonials resolve less doubt than one specific case placed where the question arises. Adding more weak proof does not substitute for placing strong proof correctly.",
        },
        {
          type: "callout",
          tone: "muted",
          title: "Keep placeholders honest",
          body: "Where proof does not exist yet, leave the slot reserved and empty rather than filling it with something vague. An obviously reserved space reads as integrity; a hollow claim reads as everything else on the page being hollow too.",
        },
      ],
      presenterScript:
        "Explain why the testimonials page underperforms — doubt does not happen there. Walk the four doubt locations and the evidence each needs. Be clear that volume is not the lever; placement is. Close on the honest-placeholder principle, which matters most for businesses early enough to have gaps.",
      visualSuggestions: [
        "A page with four doubt moments marked and the matching evidence placed adjacent to each.",
        "A testimonials page in isolation versus the same testimonials distributed to their doubt points.",
      ],
      exercise: {
        title: "Map proof to doubt",
        prompt: "For each of the four doubt moments in your path, name the evidence that belongs there.",
        steps: [
          "Locate the four doubt moments in your actual path.",
          "For each, name the strongest substantiable evidence you have.",
          "Move that evidence to sit adjacent to the doubt.",
          "Mark any moment where you have no evidence, and leave it reserved rather than filled.",
        ],
      },
      implementationTask:
        "Move your strongest piece of proof from wherever it currently sits to the point in the path where its corresponding doubt actually occurs.",
      recap: [
        "Doubt occurs at specific moments, not on a testimonials page.",
        "Match evidence type to the doubt at that location.",
        "One well-placed specific case beats twenty generic testimonials.",
      ],
    },
    {
      slug: "your-proof-system",
      number: 6,
      title: "Your Proof System",
      summary:
        "Assembling the inventory, the collection routine and the placement map into one system that keeps growing.",
      objective: "Complete your Proof System and set the routine that keeps it current.",
      durationMinutes: 12,
      blocks: [
        {
          type: "text",
          body: "The Proof System is one page: what evidence you hold, which doubt each piece answers, where it is placed, and what is being collected next. It is a live document, because every engagement you run should add to it if the collection routine is working.",
        },
        {
          type: "heading",
          text: "What the system records",
        },
        {
          type: "framework",
          title: "Four columns",
          steps: [
            { label: "The evidence", detail: "What it is, and the specific form it takes." },
            { label: "Substantiation", detail: "How you could defend it if challenged — what you measured, who confirmed it, what permission exists." },
            { label: "The doubt it answers", detail: "Which of the four doubt moments this piece resolves." },
            { label: "Where it is placed", detail: "The exact location in the path. Evidence not placed anywhere is not doing work." },
          ],
        },
        {
          type: "callout",
          tone: "signal",
          title: "The substantiation column is the discipline",
          body: "Any row you cannot fill in that column comes off the site. This single rule prevents almost every proof problem a business can create for itself.",
        },
        {
          type: "text",
          body: "Review the system quarterly. Add what the collection routine produced, remove anything that has become stale or unverifiable, and check the gaps — the doubt moments with no evidence are your proof roadmap.",
        },
        {
          type: "callout",
          tone: "muted",
          title: "Building from zero",
          body: "If most rows are empty, the system is still useful: it tells you exactly which evidence to collect first, and it keeps the empty slots honest while you do.",
        },
        {
          type: "text",
          body: "Phase 7 turns to the economics. With a system that converts and proof that reduces risk, the question becomes what a customer costs to acquire and whether that number supports scaling the traffic you built in Phase 4.",
        },
      ],
      presenterScript:
        "Assemble the phase into one page and keep it simple — four columns. Make the substantiation column the centrepiece: any row that cannot be defended comes off the site, and that one rule prevents most proof problems. Give the quarterly review rhythm. Reassure anyone building from zero that an empty system is still a roadmap. Point forward to acquisition economics in Phase 7.",
      visualSuggestions: [
        "The four-column Proof System as a clean filled table, with one row failing the substantiation test and being struck out.",
        "Gaps in the table shown as a proof roadmap rather than as failures.",
      ],
      exercise: {
        title: "Complete the Proof System",
        prompt: "Build the four-column table for every piece of evidence you hold.",
        steps: [
          "List every piece of proof across the five forms from lesson 2.",
          "Fill the substantiation column for each; remove any row you cannot complete.",
          "Assign each remaining row to the doubt it answers.",
          "Record where each piece is placed in the path.",
          "Mark the doubt moments with no evidence — that is your collection priority.",
        ],
      },
      implementationTask:
        "Complete the Proof System, remove anything from your site that failed the substantiation test, and schedule the first quarterly review.",
      recap: [
        "The system records evidence, substantiation, the doubt it answers and its placement.",
        "Any row you cannot substantiate comes off the site.",
        "Gaps are a collection roadmap, and empty slots stay honest.",
      ],
      assets: [
        {
          id: "proof-system",
          title: "Proof System",
          kind: "worksheet",
          description: "Your substantiated evidence mapped to doubts and placements — your Phase 6 deliverable.",
        },
      ],
    },
  ],
};
