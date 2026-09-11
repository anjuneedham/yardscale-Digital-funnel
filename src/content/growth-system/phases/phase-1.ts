import type { Phase } from "../types";

/**
 * PHASE 1 — DIAGNOSE
 * Think Like a Growth Operator.
 *
 * The first and fully-authored phase. Its job is to install the operator's way
 * of thinking before any building happens, and to produce the student's own
 * Business Growth Diagnostic — the artifact every later phase builds on.
 */

export const phase1: Phase = {
  slug: "phase-1",
  number: 1,
  code: "DIAGNOSE",
  title: "Think Like a Growth Operator",
  tagline: "Before you build anything, learn to see the whole system — and find the one place it breaks.",
  status: "available",
  objective:
    "Shift from doing marketing tasks to operating a growth system, and produce a clear, evidence-based diagnosis of where your own business is actually losing growth.",
  overview:
    "Most businesses try to grow by adding more — more content, more ads, more tactics — on top of a system that is already leaking. Phase 1 rewires that instinct. You will learn to see your business as a connected system with six stages, understand why growth is almost always constrained at one specific stage, and run a structured diagnostic that tells you where to focus before you spend another dollar or hour building.",
  outcome: "Your completed Business Growth Diagnostic — a one-page read on your single biggest growth constraint.",
  finalAsset: {
    id: "business-growth-diagnostic",
    title: "Business Growth Diagnostic",
    kind: "diagnostic",
    description:
      "A structured worksheet that walks you stage-by-stage through your growth system, scores each stage, and surfaces the one bottleneck to fix first.",
  },
  lessons: [
    {
      slug: "what-is-a-growth-operator",
      number: 1,
      title: "What Is a Growth Operator?",
      summary:
        "The difference between a marketer who runs tactics and an operator who is accountable for whether the whole system produces growth.",
      objective: "Define the growth operator mindset and locate yourself against it.",
      durationMinutes: 9,
      blocks: [
        {
          type: "text",
          body: "A marketer is hired to run a channel. A growth operator is accountable for an outcome: does attention turn into revenue, reliably and repeatably? That single shift — from owning a task to owning a system — changes every decision you make.",
        },
        {
          type: "heading",
          text: "The operator's three commitments",
        },
        {
          type: "framework",
          title: "What an operator holds",
          steps: [
            { label: "The whole system", detail: "Not the ad, the funnel, or the post — the entire path from a stranger's attention to a paying, returning customer." },
            { label: "The constraint", detail: "The one stage currently limiting growth. An operator fixes that before optimising anything else." },
            { label: "The evidence", detail: "Decisions follow from what the numbers and the customer journey actually show, not from what feels productive." },
          ],
        },
        {
          type: "callout",
          tone: "signal",
          title: "The core reframe",
          body: "You do not have a marketing problem. You have a system with one weak joint. Your job is to find it and reinforce it — then find the next one.",
        },
        {
          type: "example",
          title: "Two responses to the same problem",
          body: "Leads are down. The marketer books more ad spend and writes more posts. The operator asks: at which stage are we losing people, and is more attention even the constraint? Often it is not — the attention is arriving and leaking out of a broken offer or a missing follow-up.",
        },
      ],
      presenterScript:
        "Open by naming the trap directly: most business owners are stuck being the marketer for their own company, running from tactic to tactic, and it never compounds. Then draw the line: an operator is accountable for the outcome, not the activity. Land the reframe — you don't have a marketing problem, you have a system with one weak joint — and promise that by the end of this phase they'll know exactly where theirs is.",
      visualSuggestions: [
        "Split screen: 'Marketer = owns a task' vs 'Operator = owns the system'.",
        "A simple pipe with one visibly leaking joint, everything else intact.",
      ],
      exercise: {
        title: "Operator vs marketer audit",
        prompt: "List the last five growth actions you took. For each, mark whether you were operating (working on the system) or just doing marketing (running a task).",
        steps: [
          "Write the five most recent things you did to grow the business.",
          "Label each O (operator) or M (marketer).",
          "Notice the ratio — most people find it's 4:1 toward marketing.",
        ],
      },
      implementationTask:
        "Write one sentence: 'The outcome I am actually accountable for is ______.' Keep it revenue-shaped, not activity-shaped.",
      recap: [
        "A marketer owns a task; an operator owns the whole system and its outcome.",
        "Growth is almost always limited by one constraint, not by a lack of effort.",
        "Operators decide from evidence — the numbers and the journey — not from busywork.",
      ],
    },
    {
      slug: "stop-marketing-start-operating",
      number: 2,
      title: "Stop Marketing. Start Operating.",
      summary:
        "Why adding more tactics on top of a broken system makes things worse, and what to do instead.",
      objective: "Recognise the 'more' trap and adopt the operator's sequence: diagnose, then build.",
      durationMinutes: 8,
      blocks: [
        {
          type: "text",
          body: "The instinct when growth stalls is to add: another channel, another campaign, another tool. But adding traffic to a system that cannot convert simply increases the volume of people you lose. You pay more to leak faster.",
        },
        {
          type: "callout",
          tone: "warn",
          title: "The more trap",
          body: "More attention on a broken system is not growth. It's a bigger bill for the same result.",
        },
        {
          type: "heading",
          text: "The operator's sequence",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Diagnose the system and find the constraint.",
            "Fix the constraint — the highest-leverage change available.",
            "Only then add volume, because now volume compounds instead of leaking.",
          ],
        },
        {
          type: "text",
          body: "This is why we spend the entire first phase diagnosing. It feels slower. It is dramatically faster, because every hour and dollar after it lands on the stage that actually moves the number.",
        },
      ],
      presenterScript:
        "Make the 'more' trap visceral: describe pouring more water into a bucket with a hole. Then give them permission to stop — stop launching, stop adding — and to spend a short, focused period diagnosing instead. Frame diagnosis as the fastest path, not a delay.",
      visualSuggestions: [
        "A bucket with a hole; a hand pouring more water in while it drains out the side.",
        "Three-step sequence: Diagnose → Fix constraint → Add volume.",
      ],
      exercise: {
        title: "The stop list",
        prompt: "Name the growth activities you will pause for the duration of this diagnosis so you can think clearly.",
        steps: [
          "List every active growth activity right now.",
          "Circle the ones you're doing out of habit or anxiety rather than evidence.",
          "Commit to pausing those until Phase 1 is complete.",
        ],
      },
      implementationTask:
        "Pick one 'more' activity you were about to start this week and consciously postpone it until you've finished your diagnostic.",
      recap: [
        "Adding volume to a broken system multiplies the loss, not the growth.",
        "The operator sequence is diagnose → fix the constraint → add volume.",
        "Diagnosis feels slower but is the fastest route to real growth.",
      ],
    },
    {
      slug: "diagnose-before-you-build",
      number: 3,
      title: "Diagnose Before You Build",
      summary:
        "The discipline of refusing to build until you can name the problem the build is meant to solve.",
      objective: "Adopt a diagnosis-first standard and learn the questions that expose the real problem.",
      durationMinutes: 10,
      blocks: [
        {
          type: "text",
          body: "What someone asks to build is evidence about their problem — not a description of it. 'I need a new website' usually means 'people arrive and don't act.' 'I need a funnel' usually means 'I have no repeatable path from interest to sale.' The build is downstream of the diagnosis.",
        },
        {
          type: "framework",
          title: "The four diagnostic questions",
          steps: [
            { label: "Where does attention come from?", detail: "And how much of it do you actually own versus rent from a platform?" },
            { label: "What is the offer?", detail: "Can a stranger evaluate it in one read and know if it's for them?" },
            { label: "What sits between attention and a paying customer?", detail: "List every step. Most businesses have gaps they've never named." },
            { label: "Which step loses the most people?", detail: "This is your constraint — the thing to fix first." },
          ],
        },
        {
          type: "callout",
          tone: "signal",
          body: "If you cannot answer these four questions, you are not ready to build. That is not a failure — it's the whole reason this phase exists.",
        },
      ],
      presenterScript:
        "Teach them to treat every 'I need X' as a symptom, not a diagnosis. Walk through the four questions slowly and have them answer out loud for their own business. The goal is discomfort — most people realise they can't cleanly answer question three, and that gap is the point.",
      visualSuggestions: [
        "A doctor's chart metaphor: symptom → diagnosis → treatment, with 'build' living only at the treatment stage.",
        "The four questions as a vertical checklist that gates a locked 'Build' button.",
      ],
      exercise: {
        title: "Answer the four questions",
        prompt: "Write honest answers to the four diagnostic questions for your business. Short is fine; vague is not.",
        steps: [
          "Where does your attention come from, and how much is owned?",
          "State your offer in one sentence a stranger could evaluate.",
          "List every step between a stranger and a paying customer.",
          "Guess which step loses the most people — you'll test it next.",
        ],
      },
      implementationTask:
        "Keep your four answers somewhere you can revisit — you'll refine them into your diagnostic in Lesson 8.",
      recap: [
        "Requests to build are symptoms; the real problem must be diagnosed.",
        "Four questions expose the real problem: attention, offer, the path between, and the biggest leak.",
        "If you can't answer them, you're not ready to build — yet.",
      ],
    },
    {
      slug: "understanding-the-growth-bottleneck",
      number: 4,
      title: "Understanding the Growth Bottleneck",
      summary:
        "Why every system has exactly one constraint at a time, and why fixing anything else is wasted effort.",
      objective: "Internalise the theory of constraints as it applies to business growth.",
      durationMinutes: 9,
      blocks: [
        {
          type: "text",
          body: "A chain breaks at its weakest link. A system grows only as fast as its tightest constraint allows. At any moment your business has one bottleneck — one stage where growth is actually being lost — and improving any other stage produces little or no change in the outcome.",
        },
        {
          type: "example",
          title: "Why 'improve everything' fails",
          body: "If your conversion path is the constraint, doubling your traffic changes nothing — you just lose twice as many people at the same broken step. But fix that one step, and the traffic you already have starts converting. Same inputs, completely different output.",
        },
        {
          type: "callout",
          tone: "warn",
          body: "Effort spent on a non-constraint stage feels productive and produces almost nothing. This is the most common way growth budgets are wasted.",
        },
        {
          type: "heading",
          text: "Bottlenecks move",
        },
        {
          type: "text",
          body: "When you fix the current constraint, a new one appears somewhere else — that's success, not failure. Growth operating is the ongoing practice of finding the current constraint, relieving it, and repeating. You never 'finish'; you get better at seeing.",
        },
      ],
      presenterScript:
        "Use the chain-and-weakest-link image, then make it concrete with the traffic example — doubling traffic on a broken conversion step just doubles the loss. Emphasise the emotional payoff: this means they can stop trying to fix everything at once and feel relief, not guilt, about focusing on one thing.",
      visualSuggestions: [
        "A chain where one link is visibly thinner; a load applied snaps only that link.",
        "Before/after: same funnel width at top, one narrowed stage widened, dramatically more output at the bottom.",
      ],
      exercise: {
        title: "Constraint hypothesis",
        prompt: "Based on everything so far, write your best guess at your current single constraint and why.",
        steps: [
          "Name the one stage you suspect is losing the most growth.",
          "Write the evidence that points to it.",
          "Write what you'd expect to change if it were fixed.",
        ],
      },
      implementationTask:
        "Resist the urge to list five things to fix. Force yourself to name exactly one.",
      recap: [
        "A system grows only as fast as its single tightest constraint allows.",
        "Improving non-constraint stages feels productive but barely moves the outcome.",
        "Fixing a constraint reveals the next one — that's the operating loop, not failure.",
      ],
    },
    {
      slug: "the-growth-system",
      number: 5,
      title: "The Growth System",
      summary:
        "The six-stage model that every business runs on, whether or not it was designed on purpose.",
      objective: "Learn the six stages and be able to map your own business onto them.",
      durationMinutes: 12,
      blocks: [
        {
          type: "text",
          body: "Every business converts strangers into customers through the same six stages. Naming them turns a vague sense of 'growth' into a system you can inspect, measure and fix one joint at a time.",
        },
        {
          type: "framework",
          title: "The six-stage growth system",
          steps: [
            { label: "01 · Attention", detail: "Strangers become aware of you. Traffic arrives — paid, organic, referral, or content." },
            { label: "02 · Offer", detail: "There is something specific to want, stated clearly enough to evaluate." },
            { label: "03 · System", detail: "The path between attention and a decision — the pages, steps and follow-up that carry someone forward." },
            { label: "04 · Conversion", detail: "A decision is made. Interest becomes commitment." },
            { label: "05 · Customer", detail: "Revenue exists. The relationship and the delivery begin." },
            { label: "06 · Growth", detail: "It repeats and compounds — retention, referral, and expansion." },
          ],
        },
        {
          type: "callout",
          tone: "signal",
          body: "You already have all six stages. The only question is whether each one was designed — or just happened. Undesigned stages are where the leaks hide.",
        },
        {
          type: "text",
          body: "This model is the backbone of everything ahead. Each later phase of the Growth Operator System strengthens a specific stage — but you cannot know which to strengthen first until you've mapped and scored your own six stages.",
        },
      ],
      presenterScript:
        "Walk the six stages as a single continuous flow, not six separate boxes — the point is the connections between them. For each stage, give a one-line 'what good looks like'. Close by telling them every business already runs this system; theirs is just partly undesigned, and undesigned equals leaking.",
      visualSuggestions: [
        "The six stages as connected nodes with a signal travelling left to right, looping from Growth back to Attention.",
        "Reuse the site's growth-system visual language so the course feels native to YardScale.",
      ],
      exercise: {
        title: "Map your six stages",
        prompt: "For each of the six stages, write one line describing how it currently works in your business.",
        steps: [
          "Attention — where does it come from today?",
          "Offer — what is it, in one sentence?",
          "System — what carries someone from interest toward a decision?",
          "Conversion — how does someone actually commit?",
          "Customer — what happens the moment they buy?",
          "Growth — what makes it repeat?",
        ],
      },
      implementationTask:
        "Flag any stage where your answer was 'nothing' or 'not sure'. Those are candidate bottlenecks.",
      recap: [
        "Every business runs on six stages: Attention, Offer, System, Conversion, Customer, Growth.",
        "The value is in the connections between stages, not the stages alone.",
        "Undesigned stages are where growth leaks — and where the diagnostic looks first.",
      ],
      assets: [
        {
          id: "six-stage-map",
          title: "Six-Stage System Map",
          kind: "worksheet",
          description: "A one-page canvas to map how each of your six stages works today.",
        },
      ],
    },
    {
      slug: "mapping-the-customer-journey",
      number: 6,
      title: "Mapping the Customer Journey",
      summary:
        "Turning the six-stage model into the actual, specific steps a real person takes with your business.",
      objective: "Produce a concrete step-by-step map of your customer's real journey and spot the gaps.",
      durationMinutes: 11,
      blocks: [
        {
          type: "text",
          body: "The six stages are the skeleton. The customer journey is the living detail: the exact sequence of things a real person sees, clicks, reads and decides between first hearing of you and becoming a customer. Mapping it exposes gaps you've never noticed because you've never walked it as an outsider.",
        },
        {
          type: "heading",
          text: "Walk it as a stranger",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Start where a stranger first encounters you — the ad, the post, the referral.",
            "Follow every click and step exactly as they would, with no insider knowledge.",
            "Write down each step and, crucially, each moment where you'd have a question, a doubt, or nowhere obvious to go next.",
            "Mark every dead end and every missing follow-up.",
          ],
        },
        {
          type: "callout",
          tone: "warn",
          title: "The most common gap",
          body: "Someone shows interest — and then nothing happens. No capture, no follow-up, no next step. Interest without a path is the leak hiding in plain sight.",
        },
        {
          type: "example",
          title: "Gaps are usually joins, not pieces",
          body: "A business can have a good ad and a good offer and still lose almost everyone — because there's nothing connecting the click to the offer to the follow-up. The pieces are fine; the joins are missing.",
        },
      ],
      presenterScript:
        "Have them literally open their own funnel in a private browser window and walk it as a stranger while you narrate what to look for. The 'aha' is almost always a join, not a piece — the click that lands nowhere, the interest with no follow-up. Coach them to write down the feeling at each step, not just the step.",
      visualSuggestions: [
        "A journey line with green solid segments (working) and red dashed gaps (missing joins).",
        "A phone screen recording walking a real funnel, pausing on each friction point.",
      ],
      exercise: {
        title: "Journey walk-through",
        prompt: "Walk your own customer journey as a stranger and document every step and every gap.",
        steps: [
          "Open your funnel in a private/incognito window.",
          "Move through it as a first-time visitor, writing each step down.",
          "Mark every point of confusion, doubt, dead end, or missing follow-up.",
        ],
      },
      implementationTask:
        "Circle the single biggest gap on your journey map. Hold it next to your constraint hypothesis from Lesson 4 — do they agree?",
      recap: [
        "The customer journey is the concrete, step-by-step version of the six-stage model.",
        "Walking it as an outsider exposes gaps insiders can't see.",
        "Most leaks are missing joins between stages, not weak stages themselves.",
      ],
    },
    {
      slug: "channels-vs-systems",
      number: 7,
      title: "Channels vs Systems",
      summary:
        "Why a channel is only as valuable as the system it feeds, and how operators think about both.",
      objective: "Separate channel questions from system questions and stop misattributing failures.",
      durationMinutes: 8,
      blocks: [
        {
          type: "text",
          body: "A channel brings attention: a platform, an ad account, a referral source. A system converts that attention into customers. Owners routinely blame the channel ('the ads don't work') when the system behind it is the actual failure — the attention arrived and had nowhere to go.",
        },
        {
          type: "framework",
          title: "Two different questions",
          steps: [
            { label: "Channel question", detail: "Are the right strangers arriving, at a sane cost? This is about targeting and volume." },
            { label: "System question", detail: "Of the people who arrive, how many move forward — and where do the rest fall off? This is about conversion and joins." },
          ],
        },
        {
          type: "callout",
          tone: "signal",
          body: "Never judge a channel until the system behind it can convert. Otherwise you'll kill channels that were fine and pour money into a leak.",
        },
        {
          type: "text",
          body: "The operator's order of operations: make the system convert the attention you already have, then scale the channels that feed it. A working system makes an average channel profitable; a broken system makes even a great channel look like a failure.",
        },
      ],
      presenterScript:
        "Draw the clean line: channel = attention in, system = conversion of that attention. Then hit the misattribution problem hard, because it's expensive — people kill working channels and scale broken systems. Give the order of operations as the takeaway they can act on today.",
      visualSuggestions: [
        "Multiple channel arrows all feeding into one system box; if the box leaks, every arrow is wasted.",
        "A/B: 'Blame the channel' vs 'Fix the system, then scale the channel'.",
      ],
      exercise: {
        title: "Channel vs system attribution",
        prompt: "For your weakest-performing channel, decide whether the real problem is the channel or the system behind it.",
        steps: [
          "Are the right people arriving at a reasonable cost? (channel)",
          "Of those who arrive, how many move forward? (system)",
          "Decide honestly which one is actually failing.",
        ],
      },
      implementationTask:
        "Write one sentence: 'Before I touch my channels, the system change I need is ______.'",
      recap: [
        "A channel brings attention; a system converts it — they're different questions.",
        "Owners often blame channels for system failures and waste money as a result.",
        "Make the system convert first, then scale the channels that feed it.",
      ],
    },
    {
      slug: "your-business-growth-diagnostic",
      number: 8,
      title: "Your Business Growth Diagnostic",
      summary:
        "Bring everything together into a scored, one-page diagnosis that names your single biggest constraint.",
      objective: "Complete your Business Growth Diagnostic and commit to the one bottleneck you'll address next.",
      durationMinutes: 15,
      blocks: [
        {
          type: "text",
          body: "This is where the phase pays off. You'll take your six-stage map, your journey walk-through, and your constraint hypothesis, and turn them into a single scored diagnostic — the artifact every later phase of the Growth Operator System builds on.",
        },
        {
          type: "heading",
          text: "How the diagnostic works",
        },
        {
          type: "framework",
          title: "Score each stage",
          steps: [
            { label: "Rate each of the six stages 1–5", detail: "1 = undesigned or clearly broken, 5 = designed, measured, and working." },
            { label: "Note the evidence for each score", detail: "A score without evidence is a guess. Tie each to something you observed in your journey walk-through." },
            { label: "Find the lowest score", detail: "Your lowest-scoring stage — weighted toward the earliest one — is your current constraint." },
            { label: "Name the one fix", detail: "Write the single highest-leverage change available at that stage. That's where Phase 2 onward goes to work." },
          ],
        },
        {
          type: "callout",
          tone: "signal",
          title: "The output",
          body: "One page. Six scores. One named constraint. One next move. That clarity is worth more than most businesses get from a quarter of scattered effort.",
        },
        {
          type: "text",
          body: "Keep this diagnostic. As you work through later phases and relieve your first constraint, you'll return here, re-score, and find your next one. The diagnostic is a living instrument, not a one-time exercise.",
        },
      ],
      presenterScript:
        "This is the capstone — slow down and make it feel like a real assessment, not a worksheet. Walk them through scoring one stage live, insisting on evidence for the score. Then have them find the lowest score and sit with the discomfort of committing to just one fix. End by telling them they now have something most business owners never have: a precise, evidence-based read on their single biggest growth constraint.",
      visualSuggestions: [
        "A radar/bar chart of the six stage scores, lowest stage highlighted in the signal colour.",
        "The finished one-page diagnostic as a clean, premium document.",
      ],
      exercise: {
        title: "Complete your diagnostic",
        prompt: "Fill in the Business Growth Diagnostic completely — six scores with evidence, one named constraint, one next move.",
        steps: [
          "Score each of the six stages 1–5 with a line of evidence.",
          "Identify your lowest-scoring (earliest, if tied) stage.",
          "Name the single highest-leverage fix at that stage.",
          "Write the one sentence: 'My constraint is ______ and my next move is ______.'",
        ],
      },
      implementationTask:
        "Complete the Business Growth Diagnostic and save it. This is your Phase 1 asset and the input to every phase that follows.",
      recap: [
        "The diagnostic combines your map, journey and hypothesis into one scored page.",
        "Score each stage 1–5 with evidence; the lowest, earliest stage is your constraint.",
        "Commit to one fix — and re-run the diagnostic as you relieve each constraint.",
      ],
      assets: [
        {
          id: "business-growth-diagnostic",
          title: "Business Growth Diagnostic",
          kind: "diagnostic",
          description: "The scored, one-page diagnostic you complete in this lesson — your Phase 1 deliverable.",
        },
      ],
    },
  ],
};
