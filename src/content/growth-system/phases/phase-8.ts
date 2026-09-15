import type { Phase } from "../types";

/**
 * PHASE 8 — OPERATE
 * Operate the Machine.
 *
 * The system works and the economics are known. Phase 8 installs the rhythm
 * that keeps it working — a dashboard nobody has to assemble, a weekly review
 * that produces decisions, and documentation that survives the founder.
 */

export const phase8: Phase = {
  slug: "phase-8",
  number: 8,
  code: "OPERATE",
  title: "Operate the Machine",
  tagline: "Run the growth system with dashboards, rhythms and accountability.",
  status: "available",
  objective:
    "Install the operating cadence that keeps the growth system healthy without requiring a crisis to get attention.",
  overview:
    "Systems degrade quietly. A tracking tag breaks, a sequence stops sending, a channel's cost creeps up — and none of it announces itself. Phase 8 installs the operating discipline that catches drift early: a small dashboard you actually read, a weekly review that ends in decisions rather than observations, and enough documentation that the system does not live only in your head.",
  outcome: "An operating dashboard and a weekly growth rhythm that produces decisions.",
  finalAsset: {
    id: "growth-operating-dashboard",
    title: "Growth Operating Dashboard",
    kind: "template",
    description:
      "The small set of numbers you review weekly, their expected ranges, and the review agenda that turns them into decisions.",
  },
  lessons: [
    {
      slug: "growth-is-an-operating-discipline",
      number: 1,
      title: "Growth Is an Operating Discipline",
      summary:
        "Why working systems decay without attention, and what operating one actually involves.",
      objective: "Adopt growth as an ongoing operating responsibility rather than a series of projects.",
      durationMinutes: 8,
      blocks: [
        {
          type: "text",
          body: "A growth system is not a thing you finish. It is a thing you run. The businesses that plateau after a good year usually did not do anything wrong — they simply stopped operating the system, and it degraded quietly until the numbers forced attention months later.",
        },
        {
          type: "heading",
          text: "How systems degrade without announcing it",
        },
        {
          type: "list",
          items: [
            "A tracking tag breaks in a site update and conversion data silently stops.",
            "An email sequence hits a limit or an integration expires and messages stop sending.",
            "Acquisition cost creeps up gradually, never enough in one week to be noticed.",
            "Creative fatigues and results decline slowly enough to be mistaken for seasonality.",
            "A page edit removes an objection answer nobody remembered was load-bearing.",
          ],
        },
        {
          type: "callout",
          tone: "signal",
          title: "The operating reframe",
          body: "Building the system was a project. Keeping it working is an operating discipline — a rhythm, not a push.",
        },
        {
          type: "callout",
          tone: "warn",
          title: "Crisis-driven attention is expensive",
          body: "If the system only gets attention when revenue drops, every problem is found at its most expensive point — after weeks of degraded performance nobody measured.",
        },
      ],
      presenterScript:
        "Open with the plateau pattern: a good year, then decline, with nothing obviously done wrong. Walk the silent degradation list and let people recognise ones they have experienced. Make the project-versus-discipline reframe explicit. End on the cost of crisis-driven attention — problems found late are found expensive.",
      visualSuggestions: [
        "A performance line drifting downward with small unnoticed breakages marked along it.",
        "Project push versus an operating rhythm, shown as a spike against a steady line.",
      ],
      exercise: {
        title: "Degradation audit",
        prompt: "Check whether anything in your system has silently stopped working.",
        steps: [
          "Submit your own form and confirm the full sequence arrives.",
          "Check that conversion tracking is still recording.",
          "Compare this month's acquisition cost against three months ago.",
          "Note anything that has quietly broken or drifted.",
        ],
      },
      implementationTask:
        "Fix anything the audit found, and write down how long it had been broken. That duration is the cost of not having an operating rhythm.",
      recap: [
        "Growth systems degrade quietly and do not announce their failures.",
        "Building is a project; keeping it working is an operating discipline.",
        "Crisis-driven attention finds every problem at its most expensive point.",
      ],
    },
    {
      slug: "the-metrics-that-belong-on-the-dashboard",
      number: 2,
      title: "The Metrics That Belong on the Dashboard",
      summary:
        "Choosing the small number of figures that drive decisions, and excluding everything that does not.",
      objective: "Select a minimal metric set where every number can change a decision.",
      durationMinutes: 10,
      blocks: [
        {
          type: "text",
          body: "The temptation is to display everything available. The result is a dashboard nobody reads, because finding signal in forty numbers is work and work gets deferred. A dashboard earns its place by being small enough to read in a few minutes.",
        },
        {
          type: "heading",
          text: "The inclusion test",
        },
        {
          type: "framework",
          title: "Three questions for every metric",
          steps: [
            { label: "Would a change here change what I do?", detail: "If a number can move significantly and your actions stay identical, it is information, not a metric." },
            { label: "Can I influence it?", detail: "Numbers you cannot affect belong in a report, not on an operating dashboard." },
            { label: "Is it early enough to act on?", detail: "Revenue tells you what already happened. Earlier-stage numbers tell you what is about to happen while you can still change it." },
          ],
        },
        {
          type: "callout",
          tone: "signal",
          title: "Leading and lagging together",
          body: "Revenue is lagging — by the time it moves, the cause is weeks old. Pair it with leading numbers from your Phase 3 counts so you see the change coming rather than reading about it afterwards.",
        },
        {
          type: "callout",
          tone: "warn",
          title: "Vanity metrics",
          body: "Followers, impressions and page views feel like progress and rarely change a decision. If one is genuinely predictive of revenue in your business, keep it. If it just feels good, it belongs elsewhere.",
        },
        {
          type: "text",
          body: "Most businesses need somewhere between five and eight numbers on an operating dashboard. If yours has twenty, half of them are being displayed rather than used.",
        },
      ],
      presenterScript:
        "Explain why big dashboards go unread — finding signal is work, and work gets deferred. Give the three-question inclusion test and apply it to a couple of common metrics live. Make the leading-versus-lagging pairing concrete using their Phase 3 counts. Be direct about vanity metrics without being dogmatic: if it predicts revenue, keep it.",
      visualSuggestions: [
        "A forty-metric dashboard beside a six-metric one, with reading time shown for each.",
        "Leading indicators moving first, revenue following weeks later.",
      ],
      exercise: {
        title: "Cut the dashboard",
        prompt: "Apply the three-question test to every number you currently track.",
        steps: [
          "List every metric you currently look at.",
          "For each, answer all three inclusion questions.",
          "Remove every metric that fails any one of them.",
          "Confirm what remains includes both leading and lagging numbers.",
        ],
      },
      implementationTask:
        "Build your dashboard with the surviving metrics only, and write the expected range beside each one so an out-of-range number is visible at a glance.",
      recap: [
        "A metric earns its place by changing a decision.",
        "Pair lagging revenue with leading indicators you can still act on.",
        "Five to eight numbers; twenty means half are decoration.",
      ],
    },
    {
      slug: "the-weekly-growth-review",
      number: 3,
      title: "The Weekly Growth Review",
      summary:
        "A short, repeatable meeting that converts numbers into decisions instead of observations.",
      objective: "Establish a weekly review with a fixed agenda that ends in committed actions.",
      durationMinutes: 10,
      blocks: [
        {
          type: "text",
          body: "Most reviews fail in the same way: everyone looks at the numbers, discusses them, agrees things are roughly fine or roughly concerning, and leaves without anyone committed to changing anything. A review is only working if it ends in decisions with owners.",
        },
        {
          type: "heading",
          text: "The agenda",
        },
        {
          type: "framework",
          title: "Four items, in order",
          steps: [
            { label: "Read the dashboard against expected ranges", detail: "Not a discussion of every number — only the ones outside their range. This takes minutes when ranges are written down." },
            { label: "Check the system is intact", detail: "Did tracking record, did sequences send, is anything broken. Catching this weekly is the entire degradation defence." },
            { label: "Review the open improvement cycle", detail: "What was changed last, what the prediction was, whether it has produced a readable result yet." },
            { label: "Decide the next action and its owner", detail: "One thing, with a name and a date attached. Ending without this makes the review a status update." },
          ],
        },
        {
          type: "callout",
          tone: "signal",
          title: "Thirty minutes, same time weekly",
          body: "Short and consistent beats long and occasional. The value is the frequency — weekly catches drift while it is still small and cheap to fix.",
        },
        {
          type: "callout",
          tone: "warn",
          title: "Do not react to single weeks",
          body: "Weekly numbers are noisy. Look at direction over several weeks before acting, or you will spend the year responding to variation and undoing your own changes.",
        },
        {
          type: "text",
          body: "If you are the only person in the business, this still applies. The review is a commitment to look at evidence on a schedule rather than when you happen to feel anxious about it — which is what most solo operators do instead.",
        },
      ],
      presenterScript:
        "Name the common failure — reviews that end in agreement rather than decisions. Walk the four agenda items and stress that reading against written ranges makes item one fast. Make the noise warning strongly: reacting to single weeks is how people undo their own work. Address solo operators explicitly, since most will assume this does not apply to them.",
      visualSuggestions: [
        "A thirty-minute agenda with four timed blocks, ending in a decision box with an owner.",
        "A noisy weekly line with a smoother multi-week trend drawn through it.",
      ],
      exercise: {
        title: "Run the first review",
        prompt: "Hold a thirty-minute review using the four-item agenda.",
        steps: [
          "Read the dashboard and note only the out-of-range numbers.",
          "Verify tracking and sequences are working.",
          "Review the open improvement cycle and its prediction.",
          "Decide one action, assign an owner and a date.",
        ],
      },
      implementationTask:
        "Put the weekly review in the calendar as a recurring commitment, same day and time, and hold the first one this week.",
      recap: [
        "A review that ends without decisions is a status update.",
        "Four items: ranges, system integrity, open cycle, next action with an owner.",
        "Weekly cadence catches drift early; do not react to single-week noise.",
      ],
    },
    {
      slug: "deciding-what-to-work-on-next",
      number: 4,
      title: "Deciding What to Work On Next",
      summary:
        "Choosing the next piece of work from evidence and leverage rather than from whatever feels most urgent.",
      objective: "Apply a consistent rule for prioritising growth work.",
      durationMinutes: 9,
      blocks: [
        {
          type: "text",
          body: "The default prioritisation method is whatever is most recent, most annoying, or most recently suggested by someone confident. The operator's method is the same one from Phase 1: find the current constraint and work there, even when something else is louder.",
        },
        {
          type: "heading",
          text: "The prioritisation rule",
        },
        {
          type: "framework",
          title: "Four tests, applied in order",
          steps: [
            { label: "Is it at the constraint?", detail: "Work anywhere else produces a smaller result by definition, however satisfying it is to do." },
            { label: "What is the expected size of the effect?", detail: "Estimate roughly. A small improvement to a major stage usually beats a large improvement to a minor one." },
            { label: "What does it cost to try?", detail: "Cheap and fast beats large and slow when neither is certain — you learn sooner and can be wrong more affordably." },
            { label: "Is it reversible?", detail: "Prefer reversible changes. Irreversible ones deserve more evidence before committing." },
          ],
        },
        {
          type: "callout",
          tone: "warn",
          title: "The loudest input is rarely the constraint",
          body: "A client complaint, a competitor's launch, or an article someone read all create pressure to act. None of them is evidence about where your system is losing people.",
        },
        {
          type: "callout",
          tone: "muted",
          title: "Maintenance is not optional",
          body: "Some work is not growth work but must happen anyway — a broken integration, a compliance requirement. Keep it in the schedule rather than pretending everything is prioritised by leverage.",
        },
        {
          type: "text",
          body: "One piece of growth work at a time is usually correct for a small business. Three simultaneous changes to the same system produce results nobody can attribute to anything.",
        },
      ],
      presenterScript:
        "Contrast default prioritisation — recency, irritation, confident suggestions — with the constraint rule from Phase 1. Walk the four tests in order and stress that constraint comes first regardless of appeal. Warn about loud inputs specifically, since they generate most off-plan work. Acknowledge maintenance honestly rather than pretending pure prioritisation exists.",
      visualSuggestions: [
        "Competing work items filtered through four tests, with one surviving.",
        "Three simultaneous changes producing an unattributable result.",
      ],
      exercise: {
        title: "Prioritise the backlog",
        prompt: "Take everything you are considering doing and run it through the four tests.",
        steps: [
          "List every growth task currently under consideration.",
          "Mark which ones sit at your current constraint.",
          "Estimate effect size and cost to try for those.",
          "Choose one, and note why the others were deferred.",
        ],
      },
      implementationTask:
        "Write your current constraint at the top of wherever you keep your task list, so every prioritisation decision is made in front of it.",
      recap: [
        "Work at the constraint; everything else produces a smaller result by definition.",
        "Prefer cheap, fast and reversible when outcomes are uncertain.",
        "The loudest input is rarely evidence about your system.",
      ],
    },
    {
      slug: "documenting-the-system",
      number: 5,
      title: "Documenting the System",
      summary:
        "Writing down how the system works so it does not depend on one person's memory.",
      objective: "Document the system to the level where someone else could operate it.",
      durationMinutes: 9,
      blocks: [
        {
          type: "text",
          body: "An undocumented growth system is a single point of failure wearing a business's clothing. It cannot be delegated, it cannot be audited, and when something breaks the only diagnostic method available is remembering what was set up and why.",
        },
        {
          type: "heading",
          text: "What to document",
        },
        {
          type: "framework",
          title: "Four documents, and no more",
          steps: [
            { label: "The system map", detail: "Every step from traffic to customer, what each does, and which tool it runs in. The single most useful document you will write." },
            { label: "The access list", detail: "Every platform, who has access, and where credentials live. The first thing you need in an emergency and the last thing anyone writes." },
            { label: "The decision log", detail: "Significant changes, dates and reasons. Prevents re-litigating settled questions and re-running failed experiments." },
            { label: "The recurring routines", detail: "What happens weekly, monthly and quarterly, in enough detail to be handed over." },
          ],
        },
        {
          type: "callout",
          tone: "signal",
          title: "The handover test",
          body: "Documentation is sufficient when someone competent could run the system for two weeks without you. Not perfectly — just without anything breaking and without needing to ask.",
        },
        {
          type: "callout",
          tone: "warn",
          title: "Keep it small or it will rot",
          body: "A forty-page manual is out of date within a month and nobody maintains it. Four short documents that stay current beat comprehensive documentation nobody trusts.",
        },
      ],
      presenterScript:
        "Frame undocumented systems as single points of failure. Walk the four documents, making the system map the priority and pointing out that the access list is always written last and needed first. Give the two-week handover test as the sufficiency standard. Close on brevity — comprehensive documentation rots, short documentation survives.",
      visualSuggestions: [
        "A system existing only in one person's head versus written into four short documents.",
        "The two-week handover test shown as a pass condition.",
      ],
      exercise: {
        title: "Write the system map",
        prompt: "Document every step from traffic arriving to a customer existing.",
        steps: [
          "List each step in order, from first touch to purchase.",
          "For each, write which tool or platform it runs in.",
          "Note what triggers it and what it hands off to.",
          "Mark any step only you know how to fix.",
        ],
      },
      implementationTask:
        "Write the system map and the access list this week. Those two cover most of what an emergency or a handover actually requires.",
      recap: [
        "An undocumented system cannot be delegated or audited.",
        "Four documents: system map, access list, decision log, routines.",
        "Sufficiency is the two-week handover test, not completeness.",
      ],
    },
    {
      slug: "your-operating-cadence",
      number: 6,
      title: "Your Operating Cadence",
      summary:
        "Assembling the dashboard, review and routines into a rhythm that runs without being remembered.",
      objective: "Complete your Growth Operating Dashboard and commit to the cadence.",
      durationMinutes: 12,
      blocks: [
        {
          type: "text",
          body: "The cadence is what separates a business that operates its growth system from one that periodically panics about it. It is deliberately modest: a short weekly review, a monthly look at the trend, a quarterly re-examination of the things that move slowly.",
        },
        {
          type: "heading",
          text: "The three rhythms",
        },
        {
          type: "framework",
          title: "What happens when",
          steps: [
            { label: "Weekly — operate", detail: "Read the dashboard against ranges, verify nothing is broken, review the open cycle, decide the next action." },
            { label: "Monthly — assess", detail: "Look at the trend rather than the week. Is the direction right, is the current constraint still the constraint?" },
            { label: "Quarterly — re-model", detail: "Re-run the acquisition model, re-score the growth diagnostic from Phase 1, review the proof system, check the assumptions." },
          ],
        },
        {
          type: "callout",
          tone: "signal",
          title: "The quarterly re-diagnosis",
          body: "Re-running the Phase 1 diagnostic each quarter is what makes the whole system a loop rather than a sequence. The constraint will have moved, and working on the old one produces steadily diminishing returns.",
        },
        {
          type: "callout",
          tone: "muted",
          title: "Protect the cadence when busy",
          body: "The weeks you are too busy to review are precisely the weeks things break unnoticed. Thirty minutes held consistently is worth more than a thorough review held when convenient.",
        },
        {
          type: "text",
          body: "Phase 9 addresses what happens when this operating system meets real growth in volume — where the pressure lands, what breaks first, and how to add scale without losing the thing that made it work.",
        },
      ],
      presenterScript:
        "Assemble the phase into three rhythms and keep the framing modest — this is not a heavy management system. Make the quarterly re-diagnosis the centrepiece: it is what closes the loop back to Phase 1. Warn about dropping the cadence when busy, since that is exactly when it matters. Hand off to Phase 9 on what breaks under volume.",
      visualSuggestions: [
        "Three concentric rhythms — weekly, monthly, quarterly — with their activities labelled.",
        "The quarterly re-diagnosis drawn as an arrow looping back to Phase 1.",
      ],
      exercise: {
        title: "Complete the operating dashboard",
        prompt: "Finalise the dashboard and schedule all three rhythms.",
        steps: [
          "Confirm your metric set and write the expected range beside each.",
          "Write the four-item weekly agenda where the review happens.",
          "Schedule the weekly review, monthly assessment and quarterly re-model as recurring commitments.",
          "Name who owns each rhythm, even if that is you for all three.",
        ],
      },
      implementationTask:
        "Complete the Growth Operating Dashboard, schedule all three rhythms in your calendar, and hold the first weekly review before the end of this week.",
      recap: [
        "Three rhythms: weekly operate, monthly assess, quarterly re-model.",
        "The quarterly re-diagnosis closes the loop back to Phase 1.",
        "Hold the cadence in busy weeks — that is when breakage goes unnoticed.",
      ],
      assets: [
        {
          id: "growth-operating-dashboard",
          title: "Growth Operating Dashboard",
          kind: "template",
          description: "Your metric set, expected ranges and review agenda — your Phase 8 deliverable.",
        },
      ],
    },
  ],
};
