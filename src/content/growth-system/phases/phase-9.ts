import type { Phase } from "../types";

/**
 * PHASE 9 — SCALE
 * Scale Without Breaking.
 *
 * The final phase. The system works, the economics are known, and the cadence
 * is running. Phase 9 covers what volume does to all of it — where the pressure
 * lands, what breaks first, and how to grow without losing what made it work.
 */

export const phase9: Phase = {
  slug: "phase-9",
  number: 9,
  code: "SCALE",
  title: "Scale Without Breaking",
  tagline: "Increase volume and complexity without the system falling apart.",
  status: "available",
  objective:
    "Scale the proven system while protecting the things that made it work in the first place.",
  overview:
    "Scaling exposes every weakness the system was small enough to hide. Delivery that worked at five clients fails at twenty. Quality that depended on the founder touching everything degrades the moment it cannot. Phase 9 is about scaling deliberately: identifying what actually breaks, choosing between more volume and a different model, and building the capacity — in delivery, in people, and in product — to hold the growth you have engineered.",
  outcome: "A scaling plan that compounds instead of cracking, with the constraint named and the capacity built.",
  finalAsset: {
    id: "scaling-plan",
    title: "Scaling Plan",
    kind: "worksheet",
    description:
      "Your next scale target, the constraint that will break first, the capacity being built to hold it, and the quality standard being protected.",
  },
  lessons: [
    {
      slug: "what-breaks-when-you-scale",
      number: 1,
      title: "What Actually Breaks When You Scale",
      summary:
        "The predictable failure points that appear as volume rises, and why growth so often feels worse than the plateau before it.",
      objective: "Anticipate the specific failure points scaling will produce in your business.",
      durationMinutes: 9,
      blocks: [
        {
          type: "text",
          body: "Scaling rarely fails at acquisition. By this point you can produce customers. It fails behind acquisition — in delivery, in quality, in the founder's remaining hours — and the symptoms arrive as exhaustion and churn rather than as a marketing problem.",
        },
        {
          type: "heading",
          text: "The four pressure points",
        },
        {
          type: "framework",
          title: "Where growth lands first",
          steps: [
            { label: "Delivery capacity", detail: "The work required to serve customers exceeds what the current people and processes can produce at the current standard." },
            { label: "Quality consistency", detail: "What was reliable when one person did everything becomes variable when several people do parts of it." },
            { label: "The founder bottleneck", detail: "Every decision, approval or final check routing through one person becomes the hard ceiling on volume." },
            { label: "Cash timing", detail: "Growth consumes cash before it returns it — acquisition is paid now and collected later. Profitable businesses fail here." },
          ],
        },
        {
          type: "callout",
          tone: "warn",
          title: "Growth can feel worse than the plateau",
          body: "More customers with unchanged capacity produces longer hours, slipping quality, and the sense that success has made everything harder. That feeling is a capacity signal, not a personal failing.",
        },
        {
          type: "callout",
          tone: "signal",
          title: "Scale the constraint, not the ambition",
          body: "The same principle from Phase 1 applies here. Something specific will break first. Find it, build capacity there, and only then add volume.",
        },
      ],
      presenterScript:
        "Establish that scaling fails behind acquisition, not at it — by now they can produce customers. Walk the four pressure points and name cash timing explicitly, because profitable businesses genuinely fail there. Normalise the feeling that growth is worse than the plateau — it is a capacity signal and most owners interpret it as personal inadequacy. Close by carrying the constraint principle forward.",
      visualSuggestions: [
        "Acquisition scaling smoothly while delivery, quality and founder hours buckle behind it.",
        "A cash curve dipping before it recovers, with the danger zone marked.",
      ],
      exercise: {
        title: "Predict your break point",
        prompt: "Work out what breaks first if your customer volume doubled next month.",
        steps: [
          "Write your current monthly customer volume and what doubling would mean.",
          "For each of the four pressure points, describe what would happen.",
          "Rank them by which fails first.",
          "Note what the early warning sign of that failure would be.",
        ],
      },
      implementationTask:
        "Name the single thing that breaks first at double your current volume, and write the warning sign you will watch for.",
      recap: [
        "Scaling fails behind acquisition — in delivery, quality, founder time and cash.",
        "Growth that feels worse than the plateau is a capacity signal.",
        "Find what breaks first and build capacity there before adding volume.",
      ],
    },
    {
      slug: "scale-the-constraint-not-everything",
      number: 2,
      title: "Scale the Constraint, Not Everything",
      summary:
        "Building capacity at the specific point that limits volume, rather than scaling every part of the business at once.",
      objective: "Identify the capacity constraint and build only there.",
      durationMinutes: 9,
      blocks: [
        {
          type: "text",
          body: "The instinct when growth strains a business is to strengthen everything — hire across the board, upgrade every system, professionalise all of it at once. This is expensive, slow, and mostly unnecessary. Volume is limited by one thing at a time.",
        },
        {
          type: "heading",
          text: "Finding the capacity constraint",
        },
        {
          type: "framework",
          title: "Three diagnostic questions",
          steps: [
            { label: "Where does work queue?", detail: "Whatever people or tasks wait on is the constraint. Queues are the clearest signal a business produces." },
            { label: "What would have to change to serve one more customer well?", detail: "The honest answer names the constraint directly." },
            { label: "What is the founder still required for?", detail: "Anything only one person can do is a hard ceiling, whatever the rest of the capacity looks like." },
          ],
        },
        {
          type: "callout",
          tone: "signal",
          title: "Relieve, then re-diagnose",
          body: "Adding capacity at the constraint moves the constraint somewhere else. That is the loop working. Re-diagnose after each relief rather than continuing to build where you built last time.",
        },
        {
          type: "callout",
          tone: "warn",
          title: "Premature scaling",
          body: "Building capacity for volume that has not arrived converts profit into overhead. Build slightly ahead of demand, not far ahead of it — and only where the queue actually forms.",
        },
      ],
      presenterScript:
        "Name the scale-everything instinct and price it — expensive, slow, mostly unnecessary. Give the three diagnostic questions, with queues as the primary signal since it is observable rather than theoretical. Make the moving-constraint point, consistent with Phase 5. Warn against premature scaling: overhead built ahead of demand is how growth destroys margin.",
      visualSuggestions: [
        "A pipeline with work queuing at one stage while others sit idle.",
        "Capacity built at the constraint, with the constraint then appearing at the next stage.",
      ],
      exercise: {
        title: "Find the queue",
        prompt: "Locate where work actually waits in your business.",
        steps: [
          "Track one customer's journey through delivery and note every wait.",
          "Identify the longest wait and what it is waiting on.",
          "Answer what would have to change to serve one more customer well.",
          "Name the constraint in one sentence.",
        ],
      },
      implementationTask:
        "Build capacity at the named constraint only. Write down what you are deliberately not scaling yet, so the restraint is a decision rather than an oversight.",
      recap: [
        "Volume is limited by one thing at a time, not by everything at once.",
        "Queues are the clearest constraint signal a business produces.",
        "Build slightly ahead of demand, and re-diagnose after each relief.",
      ],
    },
    {
      slug: "delivery-capacity-and-the-fulfilment-wall",
      number: 3,
      title: "Delivery Capacity and the Fulfilment Wall",
      summary:
        "Why delivery is the most common scaling wall, and the three routes through it.",
      objective: "Choose a route through the delivery constraint that protects quality.",
      durationMinutes: 10,
      blocks: [
        {
          type: "text",
          body: "For most service businesses, delivery is where scaling stops. Acquisition can be increased with budget; delivery cannot. When every additional customer requires a proportional amount of expert time, growth is capped by how much of that time exists.",
        },
        {
          type: "heading",
          text: "Three routes through",
        },
        {
          type: "framework",
          title: "Each with a real cost",
          steps: [
            { label: "Add people", detail: "Direct and fast, but it raises cost proportionally, introduces quality variance, and requires management capacity you may not have." },
            { label: "Systematise the work", detail: "Templates, checklists and documented process let the same people deliver more. Cheapest route, and usually the first one to exhaust." },
            { label: "Change what you sell", detail: "Productise part of the delivery — a course, a tool, a structured programme — so value is delivered without proportional time." },
          ],
        },
        {
          type: "callout",
          tone: "signal",
          title: "Systematise before hiring",
          body: "Hiring into an undocumented process multiplies inconsistency and adds a training burden nobody has time for. Document and systematise first, then add people into a defined process.",
        },
        {
          type: "callout",
          tone: "warn",
          title: "The quality risk",
          body: "Every route risks the thing that made you worth buying. Decide in advance which parts of delivery must not change, and hold that line as volume rises.",
        },
        {
          type: "text",
          body: "The third route deserves particular attention, because it does not just relieve the constraint — it changes the shape of the business. That is the next lesson.",
        },
      ],
      presenterScript:
        "Explain why delivery is the hard wall: acquisition scales with budget, expert time does not. Walk the three routes with honest costs attached to each — no route is free. Make the systematise-before-hiring rule emphatically, since hiring into chaos is the most common expensive mistake. Set up the productising lesson at the end.",
      visualSuggestions: [
        "Acquisition scaling linearly against delivery capacity flattening into a wall.",
        "Three routes through the wall, each labelled with its cost.",
      ],
      exercise: {
        title: "Decompose your delivery",
        prompt: "Break delivery into its parts and identify which require you specifically.",
        steps: [
          "List every task involved in delivering to one customer.",
          "Mark each as requiring you, requiring an expert, or requiring anyone trained.",
          "Estimate the hours in each category.",
          "Identify which category is the actual constraint.",
        ],
      },
      implementationTask:
        "Document and systematise the largest 'requires anyone trained' task this week. That is capacity available without hiring anyone.",
      recap: [
        "Delivery is where most service businesses stop scaling.",
        "Three routes: add people, systematise, or change what you sell.",
        "Systematise before hiring; define the quality line before volume tests it.",
      ],
    },
    {
      slug: "productising-to-escape-linear-growth",
      number: 4,
      title: "Productising to Escape Linear Growth",
      summary:
        "Turning expertise into something that delivers value without proportional time — and being honest about what that costs to build.",
      objective: "Assess whether a productised offer fits your business and what it would require.",
      durationMinutes: 11,
      blocks: [
        {
          type: "text",
          body: "Linear growth means every additional unit of revenue requires an additional unit of time. Productising breaks that link: a course, a tool, a template, a piece of software delivers value repeatedly after being built once. It is the only genuine escape from the delivery wall — and it is a real build, not a shortcut.",
        },
        {
          type: "heading",
          text: "What can be productised",
        },
        {
          type: "list",
          items: [
            "Knowledge you deliver repeatedly to different clients in roughly the same form.",
            "A process you run manually that is consistent enough to be encoded in software.",
            "Artifacts you rebuild per client that could ship as templates.",
            "A diagnostic or assessment you perform by hand that could be self-serve.",
          ],
        },
        {
          type: "framework",
          title: "Honest assessment before building",
          steps: [
            { label: "Has the manual version been run enough?", detail: "Productising something you have done twice encodes guesses. The manual version is the research." },
            { label: "Is the audience reachable?", detail: "A product needs distribution. If your funnel reaches a few high-value buyers, a low-priced product may have no viable path." },
            { label: "What does it cost to build and maintain?", detail: "Products are not finished when launched. Support, updates and hosting are ongoing." },
            { label: "Does it compete with the service?", detail: "A cheap product can absorb buyers who would otherwise have bought the expensive service. Sometimes that is the strategy; it should be a decision." },
          ],
        },
        {
          type: "callout",
          tone: "warn",
          title: "Productising is not passive",
          body: "The build is substantial, and the marketing is a separate job from the marketing of your service. Businesses that treat it as passive income build something real and then never sell it.",
        },
        {
          type: "callout",
          tone: "signal",
          title: "The strongest version",
          body: "The most reliable productised offer is the one your service clients already ask for repeatedly. Demand you have observed beats demand you have assumed.",
        },
      ],
      presenterScript:
        "Define the linear-growth problem and position productising as the genuine escape — while being firm that it is a real build. Walk what can be productised, then the four honest assessment questions. The manual-version question matters most: productising something run twice encodes guesses. Kill the passive-income framing directly. End on observed demand as the safest signal.",
      visualSuggestions: [
        "Linear revenue requiring linear time, beside a product where the two decouple after launch.",
        "Four assessment gates a product idea must pass before building.",
      ],
      exercise: {
        title: "Assess a product candidate",
        prompt: "Identify what your clients repeatedly ask for and test it against the four questions.",
        steps: [
          "List what clients ask for repeatedly, or what you rebuild each engagement.",
          "Pick the strongest candidate.",
          "Answer all four assessment questions honestly.",
          "Decide: build, test manually for longer, or set aside.",
        ],
      },
      implementationTask:
        "If a candidate passes, define the smallest version that delivers the outcome and would prove people will pay for it. Do not build the complete version first.",
      recap: [
        "Productising breaks the link between revenue and time.",
        "The manual version is the research; productising too early encodes guesses.",
        "Products are a build and a separate marketing job, not passive income.",
      ],
    },
    {
      slug: "building-the-team-and-the-handover",
      number: 5,
      title: "Building the Team and the Handover",
      summary:
        "Adding people in the right order and handing over work so quality survives the transfer.",
      objective: "Plan the first or next hire and the handover that makes it work.",
      durationMinutes: 10,
      blocks: [
        {
          type: "text",
          body: "Hiring is the obvious answer to capacity and the one most often done badly. The common failures are hiring too broadly, hiring before the work is documented, and hiring the wrong role first — usually someone senior when the constraint was routine work.",
        },
        {
          type: "heading",
          text: "The order that works",
        },
        {
          type: "framework",
          title: "Four steps before and during a hire",
          steps: [
            { label: "Document the work first", detail: "You cannot hand over what only exists in your head. The documentation from Phase 8 is the prerequisite, not an afterthought." },
            { label: "Hire for the constraint", detail: "If the bottleneck is routine delivery, a senior strategist does not relieve it. Match the role to the queue." },
            { label: "Hand over in stages", detail: "They do it with you, then they do it and you review, then they do it. Skipping stages is where quality is lost." },
            { label: "Define the quality standard explicitly", detail: "'Good' is not a specification. Write what correct looks like so it can be met and checked." },
          ],
        },
        {
          type: "callout",
          tone: "warn",
          title: "The first hire is a management job",
          body: "Hiring converts some of your delivery time into management time. If you plan for a full recovery of your hours, you will be disappointed and the new person will be under-supported.",
        },
        {
          type: "callout",
          tone: "signal",
          title: "Hand over what you do most, not what you like least",
          body: "The instinct is to offload the unpleasant work. The leverage is in handing over the frequent work — that is where the hours actually are.",
        },
      ],
      presenterScript:
        "Name the three common hiring failures up front. Walk the four steps, anchoring documentation as a prerequisite rather than a nice-to-have. Be honest that the first hire consumes management time — unrealistic expectations here damage both parties. Close on the counter-intuitive rule: hand over the frequent work, not the annoying work.",
      visualSuggestions: [
        "A three-stage handover: with you, reviewed by you, independent.",
        "Founder hours split between delivery and management after a first hire.",
      ],
      exercise: {
        title: "Define the role from the queue",
        prompt: "Design the next hire from where work actually waits.",
        steps: [
          "Name the constraint you identified in lesson 2.",
          "List the specific tasks that would move to a new person.",
          "Total the hours those tasks consume weekly.",
          "Write the quality standard for the two most important tasks.",
        ],
      },
      implementationTask:
        "Document the single task you would hand over first, in enough detail that someone competent could do it without asking you questions.",
      recap: [
        "Document before hiring; you cannot hand over what lives in your head.",
        "Match the role to the queue, not to seniority instincts.",
        "Hand over in stages, and hand over frequent work rather than disliked work.",
      ],
    },
    {
      slug: "your-scaling-plan",
      number: 6,
      title: "Your Scaling Plan",
      summary:
        "Assembling the target, the constraint, the capacity and the quality line — and closing the loop back to Phase 1.",
      objective: "Complete your Scaling Plan and restart the operator loop.",
      durationMinutes: 13,
      blocks: [
        {
          type: "text",
          body: "The plan states what you are scaling to, what will break on the way, what capacity is being built, and which parts of quality are not negotiable. It is deliberately short, because scaling plans that read like strategy documents do not survive contact with an actual busy quarter.",
        },
        {
          type: "heading",
          text: "What the plan states",
        },
        {
          type: "framework",
          title: "Five commitments",
          steps: [
            { label: "The target", detail: "The specific volume or revenue you are scaling toward, and by when." },
            { label: "The first constraint", detail: "What breaks first at that volume, with its early warning sign." },
            { label: "The capacity being built", detail: "What you are adding — systematisation, people, or product — and only at the constraint." },
            { label: "The quality line", detail: "The parts of delivery that must not degrade, written explicitly so they can be defended under pressure." },
            { label: "The cash check", detail: "Whether growth at this rate is fundable given the payback period from Phase 7." },
          ],
        },
        {
          type: "callout",
          tone: "signal",
          title: "Closing the loop",
          body: "Scale changes the system, which means the diagnostic from Phase 1 is now out of date. Re-run it. The constraint has moved, and the operator loop begins again from a larger business.",
        },
        {
          type: "callout",
          tone: "muted",
          title: "Choosing not to scale",
          body: "Deciding a business is the right size is a legitimate outcome of this phase. Scaling has real costs in complexity, management and risk. The operator's discipline is making that a decision rather than a default in either direction.",
        },
        {
          type: "text",
          body: "That completes the nine phases. You have a diagnosis, positioning, a conversion system, distribution, an improvement loop, proof, acquisition economics, an operating cadence, and a plan for scale. What makes it an operating system rather than a course is the loop: diagnose, relieve the constraint, re-diagnose — permanently.",
        },
      ],
      presenterScript:
        "This is the capstone for the whole course, not just the phase. Walk the five commitments, keeping it brief and practical. Make the loop-closing point the emotional centre: the diagnostic is now out of date, re-run it, and the operator loop continues from a bigger business. Give explicit permission not to scale — it is a legitimate decision and most courses never say so. Close by naming what they now hold across all nine phases.",
      visualSuggestions: [
        "The five-commitment plan as a single card.",
        "The nine phases drawn as a loop returning to Phase 1, with the business larger on the second pass.",
      ],
      exercise: {
        title: "Complete the Scaling Plan",
        prompt: "Fill in all five commitments and schedule the re-diagnosis.",
        steps: [
          "Write the target volume or revenue and the date.",
          "Name the first constraint and its early warning sign.",
          "State the capacity being built and confirm it is at the constraint.",
          "Write the quality line — what must not degrade.",
          "Check the cash position against your payback period.",
          "Schedule the Phase 1 re-diagnosis.",
        ],
      },
      implementationTask:
        "Complete the Scaling Plan, then re-run your Business Growth Diagnostic from Phase 1. Compare the two and note where the constraint has moved.",
      recap: [
        "The plan names the target, the first constraint, the capacity, the quality line and the cash check.",
        "Scale invalidates the old diagnostic — re-run it and start the loop again.",
        "Choosing not to scale is a legitimate decision, made deliberately.",
      ],
      assets: [
        {
          id: "scaling-plan",
          title: "Scaling Plan",
          kind: "worksheet",
          description: "Your target, constraint, capacity, quality line and cash check — your Phase 9 deliverable.",
        },
      ],
    },
  ],
};
