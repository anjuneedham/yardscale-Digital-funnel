import type { Phase } from "../types";

/**
 * PHASE 4 — DISTRIBUTE
 * Engineer Distribution.
 *
 * Phase 3 built a system that converts. Phase 4 feeds it deliberately —
 * choosing one primary channel, running paid traffic against a destination
 * built for it, and building owned distribution so reach is not rented.
 */

export const phase4: Phase = {
  slug: "phase-4",
  number: 4,
  code: "DISTRIBUTE",
  title: "Engineer Distribution",
  tagline: "Get the right attention to the system, reliably and affordably.",
  status: "available",
  objective:
    "Design a distribution engine matched to your offer and audience, with one primary channel run properly rather than five run badly.",
  overview:
    "Distribution is the stage most businesses treat as a series of experiments and never as a system. Phase 4 changes that. You will choose one primary channel on evidence rather than preference, learn how paid traffic actually behaves when it hits the system you built in Phase 3, build creative that continues rather than restarts the conversation, and establish owned distribution so your reach does not disappear when a platform changes its mind.",
  outcome: "A repeatable distribution plan feeding your conversion system, with one channel run properly.",
  finalAsset: {
    id: "distribution-plan",
    title: "Distribution Plan",
    kind: "template",
    description:
      "Your primary channel, the entry point it feeds, the creative angles being tested, the budget and its ceiling, and the owned assets being built underneath.",
  },
  lessons: [
    {
      slug: "distribution-is-a-system",
      number: 1,
      title: "Distribution Is a System, Not a Channel",
      summary:
        "Why channel-hopping produces no compounding, and what treating distribution as infrastructure looks like instead.",
      objective: "Adopt a systemic view of distribution rather than a channel-by-channel one.",
      durationMinutes: 9,
      blocks: [
        {
          type: "text",
          body: "The usual pattern is serial experimentation: try a channel for a few weeks, conclude it does not work, move to the next. Nothing compounds, because every channel is abandoned before it produces enough data to be judged — and because the destination they all pointed at was never the same twice.",
        },
        {
          type: "callout",
          tone: "warn",
          title: "The hopping trap",
          body: "Four channels run for three weeks each teaches you nothing. One channel run for three months teaches you what it actually costs to acquire a customer.",
        },
        {
          type: "heading",
          text: "What a distribution system holds",
        },
        {
          type: "framework",
          title: "Three layers, built in order",
          steps: [
            { label: "One primary channel", detail: "The channel you will learn properly, run consistently, and judge on real data rather than a first impression." },
            { label: "A destination built for it", detail: "The entry point from Phase 3, with message match to this specific channel's promise." },
            { label: "Owned capture underneath", detail: "Email or another asset you control, so reach accumulates instead of resetting each time you stop paying." },
          ],
        },
        {
          type: "text",
          body: "The third layer is what turns distribution from an expense into an asset. Attention on a platform you do not own disappears the moment the algorithm changes or the budget stops. Attention you have captured stays.",
        },
        {
          type: "callout",
          tone: "signal",
          title: "The core reframe",
          body: "You are not looking for the channel that works. You are building a system where one channel, run properly, feeds a destination that converts and an asset you keep.",
        },
      ],
      presenterScript:
        "Name the channel-hopping pattern and let them recognise it — nearly everyone has done it. Explain why it teaches nothing: too short to judge, and the destination kept changing. Introduce the three layers and be clear they are built in order, not simultaneously. Spend real time on owned capture, because that is the difference between spending on distribution and building an asset.",
      visualSuggestions: [
        "Four short channel experiments producing no learning curve; one sustained channel producing a clear one.",
        "Three stacked layers: channel, destination, owned capture.",
      ],
      exercise: {
        title: "Distribution history audit",
        prompt: "List every channel you have tried, how long you ran it, and what you concluded.",
        steps: [
          "Write each channel and the number of weeks you ran it.",
          "Write the conclusion you drew from each.",
          "Mark any conclusion you drew from fewer than eight weeks of consistent effort.",
          "Note whether the destination was the same across all of them.",
        ],
      },
      implementationTask:
        "Write one sentence committing to a single primary channel for a defined period of at least eight weeks, and name the date you will judge it.",
      recap: [
        "Channel-hopping produces no compounding and no reliable data.",
        "The system is three layers: one channel, a matched destination, owned capture.",
        "Owned capture is what turns distribution spend into an asset.",
      ],
    },
    {
      slug: "choosing-your-primary-channel",
      number: 2,
      title: "Choosing Your Primary Channel",
      summary:
        "Selecting the one channel to run properly, based on where your buyer already is rather than which platform you enjoy.",
      objective: "Choose a primary channel on evidence and commit to it for a defined period.",
      durationMinutes: 10,
      blocks: [
        {
          type: "text",
          body: "Channel choice is usually made on familiarity or preference, which is why so many businesses end up posting into a platform their buyer does not use. The choice should follow from the buyer definition you wrote in Phase 2 — specifically, from the three places you said they already gather.",
        },
        {
          type: "heading",
          text: "The selection criteria",
        },
        {
          type: "framework",
          title: "Four questions that decide the channel",
          steps: [
            { label: "Is the buyer demonstrably there?", detail: "Not plausibly — demonstrably. You can point at where they gather, what they search, or who they follow." },
            { label: "Can you reach them with intent or with interruption?", detail: "Search captures existing intent; social interrupts. Both work, but they need different creative and different destinations." },
            { label: "Can you afford the learning period?", detail: "Every paid channel costs money before it produces reliable data. If the budget cannot survive the learning, choose a slower channel." },
            { label: "Can you sustain it?", detail: "A channel requiring daily output you will not maintain is worse than a slower one you will." },
          ],
        },
        {
          type: "callout",
          tone: "signal",
          title: "Intent versus interruption",
          body: "Search traffic arrives already looking, so the destination can be direct. Social traffic was interrupted mid-scroll, so the destination has to earn attention before it asks for anything. Using the same page for both is a common and expensive mistake.",
        },
        {
          type: "callout",
          tone: "muted",
          title: "On choosing the harder channel",
          body: "If the evidence points at a channel you find uncomfortable, the discomfort is not a reason to overrule it — but sustainability is. A channel you will genuinely maintain beats an optimal one you will abandon in month two.",
        },
      ],
      presenterScript:
        "Connect the choice back to the three gathering places they named in Phase 2 — this should feel like a consequence, not a new decision. Work the four criteria, spending most time on intent versus interruption because it determines the creative and the destination. Acknowledge the tension between evidence and sustainability honestly rather than pretending it does not exist.",
      visualSuggestions: [
        "Intent and interruption channels feeding two differently-shaped destinations.",
        "A decision path through the four criteria arriving at one committed channel.",
      ],
      exercise: {
        title: "Score your candidate channels",
        prompt: "Take the three gathering places from Phase 2 and score each against the four criteria.",
        steps: [
          "List your three candidate channels.",
          "Score each one to five on each of the four criteria.",
          "Note whether each is an intent or an interruption channel.",
          "Choose the highest total, unless sustainability scored below three.",
        ],
      },
      implementationTask:
        "Commit to one primary channel in writing, note whether it is intent or interruption, and confirm your Phase 3 entry point matches that traffic type.",
      recap: [
        "Channel choice follows from the buyer definition, not from preference.",
        "Intent and interruption traffic need different creative and different destinations.",
        "A sustainable channel beats an optimal one you will abandon.",
      ],
    },
    {
      slug: "paid-traffic-fundamentals",
      number: 3,
      title: "Paid Traffic Fundamentals",
      summary:
        "How paid traffic actually behaves, what the learning period costs, and why the destination determines whether the spend works.",
      objective: "Run paid traffic with a correct model of what it can and cannot do.",
      durationMinutes: 12,
      blocks: [
        {
          type: "text",
          body: "Paid traffic is the fastest way to find out whether your conversion system works, and the fastest way to discover it does not. It does not create demand — it buys attention from people who may already want the outcome. What happens after the click is entirely determined by the system you built in Phase 3.",
        },
        {
          type: "callout",
          tone: "warn",
          title: "Do not run paid traffic at a broken system",
          body: "Paid amplifies whatever the destination does. If the page converts poorly, paid spend produces the same poor conversion at a higher volume and a real cost per failure.",
        },
        {
          type: "heading",
          text: "What the money actually buys",
        },
        {
          type: "framework",
          title: "Four things to understand before spending",
          steps: [
            { label: "You buy attention, not intent", detail: "On interruption channels the person was not looking for you. The creative and the destination have to create the intent the click implies." },
            { label: "There is a learning period", detail: "Platforms need conversion data before delivery stabilises. Judging results in the first days measures the learning, not the offer." },
            { label: "Cost per result is an output, not a setting", detail: "It falls when the creative, the audience and the destination align. It cannot be negotiated down directly." },
            { label: "Tracking decides everything downstream", detail: "If conversions are not measured accurately, the platform optimises toward the wrong outcome and you scale the wrong thing." },
          ],
        },
        {
          type: "callout",
          tone: "signal",
          title: "Start with one thing to learn",
          body: "The first budget is not there to produce profit. It is there to answer one question — usually whether this audience responds to this offer at a viable cost. Decide the question before you spend.",
        },
        {
          type: "text",
          body: "Set a ceiling before you start: the total you are willing to spend to answer that question, and the point at which you will stop and change something rather than continue. Running without a stated ceiling is how a test becomes an ongoing cost with no decision attached to it.",
        },
        {
          type: "callout",
          tone: "muted",
          title: "On platform advice",
          body: "Platform recommendations optimise for spend on that platform, which is not always the same as your outcome. Treat them as input, not instruction — particularly any suggestion to broaden targeting or raise budget before your tracking is verified.",
        },
      ],
      presenterScript:
        "Be direct that paid is an amplifier, not a fix — and that pointing it at a broken system is how people lose money fast. Walk the four fundamentals, spending real time on the learning period because impatience there causes most early failures. Make the ceiling non-negotiable: a test without a stop point is just spending. Close with the honest note about platform advice.",
      visualSuggestions: [
        "Spend amplifying a converting system versus a leaking one, with the same budget producing very different outcomes.",
        "A learning period curve flattening into stable delivery, with 'do not judge here' marked early.",
      ],
      exercise: {
        title: "Define the test before spending",
        prompt: "Specify the one question your first paid budget will answer, and the ceiling attached to it.",
        steps: [
          "Write the single question the spend must answer.",
          "Write the total budget you will spend to answer it.",
          "Write the result that would count as a yes, and the result that would count as a no.",
          "Write the date or spend level at which you stop and decide.",
        ],
      },
      implementationTask:
        "Verify your conversion tracking end to end by running one real submission and confirming it registers correctly, before any budget goes live.",
      recap: [
        "Paid buys attention and amplifies whatever the destination already does.",
        "The learning period is real; early results measure it, not your offer.",
        "Set the question, the budget ceiling and the stop point before spending.",
      ],
    },
    {
      slug: "creative-that-matches-the-destination",
      number: 4,
      title: "Creative That Matches the Destination",
      summary:
        "Building ads and content that continue into the page rather than promising something it does not deliver.",
      objective: "Produce creative angles that align with the destination and can be tested against each other.",
      durationMinutes: 10,
      blocks: [
        {
          type: "text",
          body: "Creative is the first half of a two-part sequence. The ad and the destination are one message split across two surfaces, and the join between them is where most campaigns fail — a compelling ad that promises something the page does not continue produces clicks you pay for and nothing else.",
        },
        {
          type: "heading",
          text: "Testing angles, not adjectives",
        },
        {
          type: "framework",
          title: "What is actually worth testing",
          steps: [
            { label: "The angle", detail: "Which problem you lead with. This produces the largest differences and should be tested first." },
            { label: "The audience", detail: "Who sees it. A working angle shown to the wrong situation still fails." },
            { label: "The format", detail: "How it is delivered — static, video, text. Format changes attention, not the argument." },
            { label: "The wording", detail: "Test last. Headline variations produce small differences compared with the angle." },
          ],
        },
        {
          type: "callout",
          tone: "warn",
          title: "The common inversion",
          body: "Most people test wording first and angle last, then conclude the channel does not work. The angle is the variable that moves results; wording is refinement on top of a working angle.",
        },
        {
          type: "text",
          body: "Every angle you test needs a destination that continues it. If you are testing three angles against one generic page, you are not testing angles — you are testing which promise survives the biggest mismatch on arrival.",
        },
        {
          type: "callout",
          tone: "muted",
          title: "On claims in creative",
          body: "Only claim what you can substantiate. Platforms increasingly reject unsupportable claims, and a claim the destination cannot back up converts the click into a bounce and a wasted spend.",
        },
      ],
      presenterScript:
        "Frame ad and page as one message across two surfaces — the join is where campaigns break. Walk the testing hierarchy and call out the common inversion directly: everyone tests headlines first and angles last, which is backwards. Make the point that angles need matched destinations or the test is meaningless. Close on substantiable claims, tying back to the no-fabrication discipline.",
      visualSuggestions: [
        "An ad and page shown as one continuous message, then broken at the join.",
        "A testing hierarchy pyramid: angle at the base, wording at the tip.",
      ],
      exercise: {
        title: "Write three angles",
        prompt: "Produce three genuinely different angles on the same offer, each leading with a different problem.",
        steps: [
          "List the three problems your offer solves, in the buyer's words.",
          "Write one piece of creative leading with each problem.",
          "For each, write the destination headline that would continue it.",
          "Check that all three claims are substantiable.",
        ],
      },
      implementationTask:
        "Build the matched destination line for whichever angle you run first, so the ad and the page open with the same promise in the same language.",
      recap: [
        "The ad and the destination are one message split across two surfaces.",
        "Test angle first, audience second, format third, wording last.",
        "Three angles pointed at one generic page is not a valid test.",
      ],
    },
    {
      slug: "organic-and-owned-distribution",
      number: 5,
      title: "Organic and Owned Distribution",
      summary:
        "Building the distribution you keep, so reach accumulates instead of stopping when the budget does.",
      objective: "Establish owned capture and a sustainable organic rhythm underneath the paid channel.",
      durationMinutes: 10,
      blocks: [
        {
          type: "text",
          body: "Paid distribution produces results immediately and stops producing them the moment you stop paying. Owned distribution takes longer to build and keeps working. Running only one of the two is a choice most businesses make by accident — usually by never building the second.",
        },
        {
          type: "heading",
          text: "What counts as owned",
        },
        {
          type: "list",
          items: [
            "An email list you export and control, not a follower count on a platform.",
            "A destination people return to directly rather than through a feed.",
            "A body of content that continues to be found after it is published.",
            "A customer base you can contact without paying for the privilege.",
          ],
        },
        {
          type: "callout",
          tone: "warn",
          title: "Followers are not owned",
          body: "An audience on a platform is reach you rent. It can be reduced by an algorithm change you will not be consulted about. Treat platform reach as a way to build owned capture, not as the asset itself.",
        },
        {
          type: "framework",
          title: "Making organic sustainable",
          steps: [
            { label: "Pick a cadence you will hold", detail: "Consistent and modest beats ambitious and abandoned. The compounding comes from continuity." },
            { label: "Publish against the same positioning", detail: "Content that wanders away from your Phase 2 statement builds an audience for something you do not sell." },
            { label: "Route everything to capture", detail: "Every piece should have a path into owned capture, or the reach evaporates." },
            { label: "Reuse rather than reinvent", detail: "One idea can become several formats across surfaces. Production volume is rarely the constraint people assume." },
          ],
        },
        {
          type: "text",
          body: "The practical sequence for most businesses is paid first to learn what converts, then organic built around what paid proved. Testing messages with budget is faster than waiting for organic reach to tell you the same thing.",
        },
      ],
      presenterScript:
        "Draw the trade clearly: paid is immediate and rented, organic is slow and owned, and most businesses accidentally choose only the first. Be blunt that followers are rented reach, not an asset. Walk the sustainability framework — the cadence point matters most, because abandoned schedules are the norm. End on the sequencing insight: use paid to learn, then build organic around what worked.",
      visualSuggestions: [
        "Two curves: paid producing immediately and dropping to zero when stopped; organic slow then compounding.",
        "Platform reach funnelling into an owned capture asset underneath it.",
      ],
      exercise: {
        title: "Owned asset audit",
        prompt: "List what you actually own today versus what you rent.",
        steps: [
          "List every audience or reach asset you have.",
          "Mark each as owned or rented.",
          "Count how many of your rented assets route into an owned one.",
          "Name the single owned asset you will build first.",
        ],
      },
      implementationTask:
        "Add a capture path to your highest-traffic organic surface, so reach you already have starts converting into something you keep.",
      recap: [
        "Paid stops when the budget stops; owned distribution keeps working.",
        "Platform followers are rented reach, not an owned asset.",
        "Use paid to learn what converts, then build organic around what worked.",
      ],
    },
    {
      slug: "your-distribution-plan",
      number: 6,
      title: "Your Distribution Plan",
      summary:
        "Assembling the channel, destination, creative, budget and owned layer into one plan you can run and judge.",
      objective: "Complete your Distribution Plan and set the date you will judge it.",
      durationMinutes: 13,
      blocks: [
        {
          type: "text",
          body: "The plan is short by design. Its job is to make the commitments explicit — which channel, pointed where, with which angles, at what cost, judged when — so that in eight weeks you are reading evidence rather than reconstructing what you did.",
        },
        {
          type: "heading",
          text: "What the plan states",
        },
        {
          type: "framework",
          title: "Six commitments",
          steps: [
            { label: "The primary channel", detail: "One channel, and whether it is intent or interruption." },
            { label: "The entry point", detail: "The specific destination this traffic lands on, with message match confirmed." },
            { label: "The angles", detail: "The three angles being tested, each with its matched destination line." },
            { label: "The budget and ceiling", detail: "What you will spend, and the point at which you stop and decide rather than continue." },
            { label: "The owned layer", detail: "The capture asset being built underneath, and where traffic routes into it." },
            { label: "The judgement date", detail: "When you will assess, and what result counts as working." },
          ],
        },
        {
          type: "callout",
          tone: "signal",
          title: "Write the judgement criteria now",
          body: "Deciding what counts as success after you see the numbers is how businesses talk themselves into continuing something that is not working. Write the threshold before the data exists.",
        },
        {
          type: "callout",
          tone: "muted",
          title: "This plan is a hypothesis",
          body: "It states what you expect and how you will check. Expect the first version to be wrong in at least one place — that is what the judgement date is for.",
        },
        {
          type: "text",
          body: "Phase 5 works on what this plan reveals. When traffic is flowing and the counts from Phase 3 are filling in, you will know where the path leaks — and that is the input to raising conversion rather than raising spend.",
        },
      ],
      presenterScript:
        "This is an assembly capstone — no new material, just commitments made explicit. Walk the six rows and insist on the judgement criteria being written before data exists, because that is the discipline that prevents sunk-cost continuation. Frame the plan as a hypothesis so a wrong first version feels expected rather than like failure. Point forward to Phase 5 working on what this reveals.",
      visualSuggestions: [
        "The six commitments as a single-page plan card.",
        "A timeline from launch to judgement date with the learning period marked as 'do not judge yet'.",
      ],
      exercise: {
        title: "Complete the Distribution Plan",
        prompt: "Fill in all six commitments and set the judgement date.",
        steps: [
          "Name the primary channel and its traffic type.",
          "Name the entry point and confirm the first line matches the channel promise.",
          "List the three angles and their matched destination lines.",
          "State the budget, the ceiling and the stop point.",
          "Name the owned capture asset and where traffic routes into it.",
          "Write the judgement date and the threshold that counts as working.",
        ],
      },
      implementationTask:
        "Complete the Distribution Plan, launch the first angle, and put the judgement date in your calendar. Do not change the plan before that date unless tracking is broken.",
      recap: [
        "The plan makes six commitments explicit so you read evidence later, not memory.",
        "Write the success threshold before the data exists.",
        "Phase 5 works on the leaks this traffic reveals.",
      ],
      assets: [
        {
          id: "distribution-plan",
          title: "Distribution Plan",
          kind: "template",
          description: "Your channel, entry point, angles, budget, owned layer and judgement date — your Phase 4 deliverable.",
        },
      ],
    },
  ],
};
