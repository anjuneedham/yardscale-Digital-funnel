import type { EducationProduct } from "../types";

/**
 * PAID — Client Acquisition Playbook ($19).
 *
 * Positioning through to pipeline, with a 14-day challenge that turns the
 * theory into dated actions. Deliberately built around sustainable
 * acquisition rather than volume outreach.
 */

export const clientAcquisition: EducationProduct = {
  slug: "client-acquisition",
  title: "Client Acquisition Playbook",
  tier: "paid",
  price: 19,
  format: "playbook",
  category: "acquisition",
  difficulty: "intermediate",
  estimatedMinutes: 200,
  summary:
    "A repeatable system for finding clients — positioning, channels, outreach, referrals and a 14-day challenge to start it.",
  description:
    "Getting one client is a sales problem. Getting clients predictably is a systems problem. This playbook covers the channels that actually work for solo operators, how to run each one sustainably, and a fourteen-day challenge that turns it from reading into a pipeline.",
  whatYouWillLearn: [
    "How positioning and niche selection make every channel cheaper",
    "The six acquisition channels available to a solo operator, and which to run first",
    "How to research prospects properly so outreach is welcome rather than spam",
    "Organic content that produces enquiries rather than impressions",
    "How to build a referral and partnership engine deliberately",
    "Sales call structure, objection handling and pipeline management",
  ],
  whoItIsFor: [
    "Freelancers and consultants who get clients unpredictably",
    "Service providers who rely entirely on referrals and want a second source",
    "Anyone whose acquisition is currently 'post occasionally and hope'",
    "People who have tried outreach, disliked it, and want a sustainable version",
  ],
  whatYouWillBuild: [
    "A positioning statement and a defined niche",
    "A channel plan with one primary channel chosen on evidence",
    "A researched prospect list and a working outreach message",
    "A pipeline tracker with defined stages",
    "Fourteen days of dated actions, completed",
  ],
  includedResources: [
    { title: "Prospecting tracker", detail: "Stages, fields and the qualification bar for a real prospect." },
    { title: "Outreach templates", detail: "First contact, follow-up, referral request and partnership approach." },
    { title: "Follow-up templates", detail: "The three-contact sequence and how to close a loop honestly." },
    { title: "Discovery questions", detail: "The full question bank, ordered for a diagnostic call." },
    { title: "Sales call structure", detail: "Five phases with timings." },
    { title: "Objection-handling framework", detail: "The five objections and what each one actually means." },
    { title: "Pipeline tracker", detail: "Stage definitions and the weekly review that keeps it accurate." },
    { title: "14-day acquisition challenge", detail: "Dated actions from positioning to first conversations." },
  ],
  faqs: [
    {
      question: "Is this cold outreach?",
      answer:
        "Partly, and it is the researched, low-volume kind. The playbook covers six channels; direct outreach is one. If outreach is not for you, the referral, partnership and content channels are covered in the same depth and work well together.",
    },
    {
      question: "How much time does this take per week?",
      answer:
        "The system is designed around roughly five hours a week of acquisition work once running. The fourteen-day challenge is more intensive — about an hour a day — because starting costs more than maintaining.",
    },
    {
      question: "Do I need an audience already?",
      answer:
        "No. Two of the six channels — direct outreach and partnerships — work with no audience at all. Content and referral channels compound over time, so the playbook sequences them after you have clients to refer you.",
    },
    {
      question: "Will this work if I hate selling?",
      answer:
        "The approach here is diagnostic rather than persuasive — you ask questions, work out whether you can help, and say so honestly. Most people who dislike selling dislike pitching, which this deliberately avoids. It does still require talking to people.",
    },
  ],
  nextStep: {
    slug: "funnel-blueprint",
    pitch:
      "Outreach and referrals bring people to you. If the thing they arrive at is not converting them, the funnel is the next constraint.",
  },
  chapters: [
    {
      slug: "positioning-and-niche",
      number: 1,
      title: "Positioning and Niche Selection",
      summary:
        "Why narrowing makes every channel cheaper, and how to choose a niche you can actually reach.",
      durationMinutes: 28,
      blocks: [
        {
          type: "text",
          body: "Acquisition gets dramatically cheaper when you are specific. Not because specificity is a clever tactic, but because every channel works better: outreach becomes researchable, content becomes findable, and referrals become possible because people can remember what you do.",
        },
        {
          type: "heading",
          text: "What broad positioning costs you",
        },
        {
          type: "list",
          items: [
            "Outreach becomes generic, because you cannot research \"businesses\".",
            "Content has no specific reader, so it says nothing memorable.",
            "Referrals dry up, because nobody can recall who to send you.",
            "You compete with everyone, which means competing on price.",
            "Every proposal is written from scratch, because there is no repeatable engagement.",
          ],
        },
        {
          type: "callout",
          tone: "signal",
          title: "The referral test",
          body: "Ask someone who knows you well to describe what you do and who for. If they hesitate or get it wrong, your positioning is not costing you hypothetical clients — it is costing you the referrals you would otherwise already have.",
        },
        {
          type: "heading",
          text: "Choosing a niche you can reach",
        },
        {
          type: "framework",
          title: "Four criteria",
          steps: [
            { label: "Findable", detail: "You can identify individuals from outside — a directory, a platform, a community, a search. If you cannot find them, you cannot sell to them." },
            { label: "Has budget", detail: "They already pay for things like this. A market that has never bought your category is an education project, not a niche." },
            { label: "Has urgency", detail: "The problem costs them something now. Nice-to-have problems produce long sales cycles and high drop-off." },
            { label: "You have a connection", detail: "Prior industry experience, membership of the community, or having had the problem yourself. Connection shortens the trust gap more than any credential." },
          ],
        },
        {
          type: "example",
          title: "Narrowing without losing the market",
          body: "\"Web design for small businesses\" competes with everyone. \"Websites for independent veterinary practices\" sounds alarmingly narrow — until you count them and find several thousand, none of whom are being spoken to directly, all of whom talk to each other, and most of whom have the same three problems. The narrow version is the easier business.",
        },
        {
          type: "callout",
          tone: "muted",
          title: "Niching is reversible",
          body: "You are choosing who your marketing addresses, not refusing other work. If it turns out to be wrong, changing it costs a weekend of rewriting. Most people treat this decision as far more permanent than it is, and lose a year to the hesitation.",
        },
        {
          type: "heading",
          text: "Your positioning statement",
        },
        {
          type: "text",
          body: "Four lines, testable on strangers. Everything downstream — outreach, content, referral requests — inherits from it, so vagueness here multiplies everywhere.",
        },
      ],
      template: {
        title: "Positioning statement",
        body: `For [specific niche] who [specific situation]

I [specific outcome]

by [mechanism — what you actually do]

Unlike [the obvious alternative],
[the one way you differ].`,
        adapt: [
          "The niche must be findable from outside — if you cannot list twenty, it is too abstract.",
          "The outcome is their change, not your deliverable.",
          "Run the competitor test on the last line: if a competitor could write it truthfully, it is not a differentiator.",
          "Test on three strangers. Two clean reads without questions is a pass.",
        ],
      },
      exercise: {
        title: "Choose and test the niche",
        prompt: "Pick one, then check you can actually reach them before committing.",
        steps: [
          "List three candidate niches where you have some connection.",
          "Score each against findable, budget, urgency, connection.",
          "For the winner, find twenty real examples in thirty minutes. If you cannot, it fails the findable test.",
          "Write the positioning statement and test it on three people who do not know your work.",
        ],
      },
      actionStep:
        "Try to list twenty real businesses in your chosen niche within thirty minutes. Success means the niche is reachable; failure means it is an idea rather than a market.",
      recap: [
        "Specificity makes every acquisition channel cheaper.",
        "Four criteria: findable, has budget, has urgency, you have a connection.",
        "Niching is reversible — treat it as a decision, not a life sentence.",
        "If you cannot list twenty real examples, the niche is too abstract.",
      ],
    },
    {
      slug: "channels",
      number: 2,
      title: "The Six Acquisition Channels",
      summary:
        "What each channel costs, how long it takes to work, and which to run first.",
      durationMinutes: 32,
      blocks: [
        {
          type: "text",
          body: "Six channels are realistically available to a solo operator. Most people try four badly at once. Running one properly for two months teaches you more than running four for two weeks each.",
        },
        {
          type: "framework",
          title: "The six, honestly assessed",
          steps: [
            { label: "Direct outreach", detail: "Fastest to first client, requires no audience, and most people avoid it. Works immediately and does not compound — stop and it stops. Best first channel when you need revenue now." },
            { label: "Referrals", detail: "Highest conversion of any channel and essentially free, but requires existing clients and deliberate asking. Most people leave this entirely to chance." },
            { label: "Partnerships", detail: "Adjacent providers who serve your buyer but do not do what you do. Slow to build, excellent once running, and almost nobody does it systematically." },
            { label: "Communities", detail: "Being genuinely useful where your buyers gather. Slow, compounding, and requires real participation — showing up to pitch is transparent and counterproductive." },
            { label: "Organic content", detail: "Compounds strongly over a long horizon. Requires consistency for months before meaningful return. Best started early, relied on late." },
            { label: "Paid advertising", detail: "Fastest to test messaging, costs money before it produces data, and requires a funnel that already converts. Not a first channel for most solo operators." },
          ],
        },
        {
          type: "callout",
          tone: "signal",
          title: "The realistic sequence",
          body: "Outreach first, because it produces clients now. Referrals second, as soon as you have clients to ask. Partnerships third, because they compound. Content throughout, accepting it will not pay back for months. Paid last, once a funnel exists that converts.",
        },
        {
          type: "heading",
          text: "Running content sustainably",
        },
        {
          type: "text",
          body: "Content fails for solo operators mostly through inconsistency — an ambitious schedule abandoned in week three. Modest and maintained beats ambitious and abandoned, because the compounding comes from continuity.",
        },
        {
          type: "list",
          items: [
            "Pick a cadence you will hold on a bad week, not a good one. Once a week is plenty.",
            "Publish against your positioning. Content that wanders builds an audience for something you do not sell.",
            "Write about the problems you solve, in the words your buyers use to describe them.",
            "Every piece should have a path into something you own — a list, a page, a conversation.",
            "Reuse ruthlessly. One idea becomes a post, a thread, an email and a section of a page.",
          ],
        },
        {
          type: "heading",
          text: "Partnerships, done deliberately",
        },
        {
          type: "text",
          body: "A partnership is a provider serving the same buyer without competing. The designer who does not build, the accountant who does not advise on marketing, the developer who does not write copy. They have your buyers and get asked for your service regularly.",
        },
        {
          type: "framework",
          title: "How to build one",
          steps: [
            { label: "List adjacent providers", detail: "Who else works with your niche on something you do not do? Ten names is enough to start." },
            { label: "Approach with a referral, not a request", detail: "Send them something first if you can. A partnership that opens with an ask is a cold pitch." },
            { label: "Make it specific", detail: "\"If a client needs X, I do that\" is clearer and more memorable than \"we should work together\"." },
            { label: "Stay visible without nagging", detail: "An occasional genuinely useful message keeps you in mind. Quarterly is enough." },
          ],
        },
        {
          type: "callout",
          tone: "warn",
          title: "Communities are not a prospecting list",
          body: "Joining a community to pitch is obvious to everyone in it and gets you removed. The rule is simple: be useful there for weeks before mentioning what you do, and then only when someone's question genuinely calls for it.",
        },
      ],
      checklist: {
        title: "Channel selection checklist",
        groups: [
          {
            items: [
              "One primary channel chosen, not four",
              "Chosen on where your niche actually is, not on preference",
              "Committed to a defined period of at least eight weeks",
              "A content cadence chosen that survives a bad week",
              "Ten adjacent providers listed for partnerships",
              "Referral asking built into project completion, not left to chance",
              "Paid advertising deferred until the funnel converts",
            ],
          },
        ],
      },
      actionStep:
        "Choose one primary channel and write the date, eight weeks out, when you will judge it. Changing channels before that date is how people learn nothing from any of them.",
      recap: [
        "Six channels; run one properly rather than four badly.",
        "Outreach first for speed, referrals second, partnerships third, content throughout, paid last.",
        "Content fails through inconsistency — choose a cadence you hold on bad weeks.",
        "Partnerships open with a referral, not a request.",
      ],
    },
    {
      slug: "research-and-outreach",
      number: 3,
      title: "Prospect Research and Outreach",
      summary:
        "Researching properly so that outreach is welcome, and writing messages that are genuinely about one person.",
      durationMinutes: 32,
      blocks: [
        {
          type: "text",
          body: "Outreach has a bad reputation because most of it is bulk messaging with a name token swapped in. That version does not work and costs you your reputation. The version in this chapter is slower, smaller, and produces meetings.",
        },
        {
          type: "callout",
          tone: "warn",
          title: "The line, stated plainly",
          body: "Spam: high volume, no research, identical text, no reason to contact them. Outreach: low volume, researched, individually written, with a specific honest reason. Also: respect the rules that apply where you and they are — including consent requirements, unsubscribe obligations, and platform terms.",
        },
        {
          type: "heading",
          text: "Research that makes a message writeable",
        },
        {
          type: "framework",
          title: "Ten minutes per prospect",
          steps: [
            { label: "What they actually do", detail: "Read their site properly. You should be able to describe their business in a sentence." },
            { label: "Evidence of the problem", detail: "The specific thing you noticed that relates to what you do. This is the message's core." },
            { label: "Recent activity", detail: "Something they published, launched or said. Gives you an honest reason to make contact now." },
            { label: "The right person", detail: "A named individual, not a generic inbox. If you cannot find one, deprioritise them." },
            { label: "Disqualifiers", detail: "Already using a competitor, obviously no budget, wrong size. Disqualifying is as valuable as qualifying." },
          ],
        },
        {
          type: "callout",
          tone: "signal",
          title: "If you cannot find a genuine observation, skip them",
          body: "Inability to find something specific to say is a signal they are not a good fit — not a prompt to send something generic. Twenty researched prospects beat two hundred unresearched ones on every measure including your own morale.",
        },
        {
          type: "heading",
          text: "The message",
        },
        {
          type: "text",
          body: "Short, specific, and asking for a conversation rather than a commitment. Its only job is to start a dialogue — not to sell, not to book, and never to attach a proposal.",
        },
      ],
      template: {
        title: "Outreach templates",
        body: `FIRST CONTACT

Subject: [specific observation, not "quick question"]

Hi [name],

[Why them — the real reason you're writing.
"I came across [business] while [genuine context]."]

[The observation — specific and useful, not a
criticism. "I noticed your booking form asks for
seven fields — in my experience that's where most
enquiries drop."]

[One line on what you do.]

[Small ask: "Worth a quick conversation, or is
this already handled?"]

[Name]


FOLLOW-UP — one week later, once only

Hi [name],

[Something genuinely useful related to the
observation — an example, a short suggestion.]

Still happy to talk if useful. If not, no problem
at all — I'll leave it there.

[Name]


REFERRAL REQUEST — to an existing client

Hi [name],

[Specific reference to the result you produced.]

I'm looking to work with more [specific niche].
Do you know anyone at [specific type of business]
dealing with [specific problem]?

No pressure at all if nothing comes to mind.

[Name]


PARTNERSHIP APPROACH

Hi [name],

[Genuine compliment about specific work, or a
referral you're sending them.]

We serve the same clients without overlapping —
you do [their thing], I do [your thing]. If a
client ever needs [your thing], I'd be glad to
help, and I'll do the same in reverse.

Worth a short call to compare notes?

[Name]`,
        adapt: [
          "If a message could be sent unchanged to fifty businesses, start again.",
          "Never attach a proposal, price or calendar link to first contact.",
          "One follow-up, then stop. Persistence past that damages your name.",
          "Referral requests work best immediately after a visible win.",
          "Partnership approaches convert far better when you refer first.",
        ],
      },
      checklist: {
        title: "Prospecting tracker",
        groups: [
          {
            label: "Fields to record",
            items: [
              "Business name and named contact",
              "Source — how you found them",
              "The specific observation you will use",
              "Qualification: niche match, budget signal, urgency signal",
              "Date of first contact",
              "Date of follow-up (one week)",
              "Stage: researched / contacted / replied / call booked / proposed / closed / declined",
              "Outcome and, if declined, the reason",
            ],
          },
          {
            label: "Qualification bar",
            items: [
              "Matches the defined niche",
              "Visible evidence of the problem you solve",
              "Signs they spend money on comparable things",
              "A named person you can actually reach",
              "A genuine, specific observation exists",
            ],
          },
        ],
      },
      exercise: {
        title: "Research twenty, message five",
        prompt:
          "Research first, write second. Doing both at once is what produces generic messages.",
        steps: [
          "Research twenty prospects, ten minutes each, recording the tracker fields.",
          "Disqualify any where you cannot find a genuine observation.",
          "Write and send the first five messages individually.",
          "Wait for replies before writing the next five, so you can adjust.",
          "Log every send and schedule the single follow-up.",
        ],
      },
      actionStep:
        "Send five researched messages this week. Five real ones outperform fifty templated ones and leave your reputation intact.",
      recap: [
        "Ten minutes of research per prospect makes the message writeable.",
        "No genuine observation means skip them, not send something generic.",
        "Never attach a proposal, price or calendar link to a first message.",
        "One follow-up, then stop.",
      ],
    },
    {
      slug: "sales-conversations",
      number: 4,
      title: "Sales Conversations and Objections",
      summary:
        "Running a diagnostic call, handling the five real objections, and managing the pipeline.",
      durationMinutes: 35,
      blocks: [
        {
          type: "text",
          body: "The call converts when you diagnose rather than pitch. The person who asks good questions for fifteen minutes is perceived as more expert than the one who starts presenting at minute three — and ends up proposing something that actually fits.",
        },
        {
          type: "framework",
          title: "Five phases, with timings",
          steps: [
            { label: "Frame — 2 min", detail: "\"I want to understand what's happening. If I can help I'll tell you how; if I can't, I'll say so.\" Lowers their guard and licenses an honest ending." },
            { label: "Diagnose — 15 min", detail: "Questions only. Resist solving out loud. You are looking for the real constraint, not the stated one." },
            { label: "Play back — 3 min", detail: "Summarise their situation in your words. If you have understood, they visibly relax." },
            { label: "Present — 5 min", detail: "Only if you can help. Connect your specific approach to the specific problem you just diagnosed." },
            { label: "Agree next step — 5 min", detail: "Concrete and dated. A proposal by a named day, or a decision by one." },
          ],
        },
        {
          type: "heading",
          text: "The question bank",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "\"Tell me what's happening at the moment.\" — open, unframed.",
            "\"How long has that been the case?\" — duration reveals urgency.",
            "\"What have you already tried?\" — prevents proposing last year's failure.",
            "\"What does it cost you when it doesn't work?\" — they establish the value, not you.",
            "\"What happens if nothing changes?\" — tests real urgency.",
            "\"Who else is involved in deciding?\" — asked early, saves weeks.",
            "\"What would make this obviously worth it?\" — their success criteria, in their words.",
            "\"Why now?\" — if there is no answer, the deal will drift.",
          ],
        },
        {
          type: "heading",
          text: "The five objections",
        },
        {
          type: "framework",
          title: "What each actually means",
          steps: [
            { label: "\"Too expensive\"", detail: "Usually unclear value rather than a wrong number. Return to what they said the problem costs. Ask \"compared to what?\" — the answer separates budget from priority from unclear value." },
            { label: "\"Need to think about it\"", detail: "An unvoiced concern. \"Of course — what's the part you're least sure about?\" surfaces it more reliably than anything else." },
            { label: "\"How do I know it will work?\"", detail: "A proof request, and fair. Answer with mechanism, method and a reduced-risk first phase — not with confidence." },
            { label: "\"Not the right time\"", detail: "Sometimes true. Ask what would need to change and when, then actually follow up on that date." },
            { label: "\"We might do it internally\"", detail: "A capacity and cost comparison. Be honest about when internal is genuinely the right answer — saying so builds more credibility than arguing." },
          ],
        },
        {
          type: "callout",
          tone: "warn",
          title: "Never discount to close",
          body: "Dropping price on hesitation teaches them the number was arbitrary and invites another push. Reduce scope instead — a smaller first phase at a proportional rate keeps your pricing intact and lowers their risk.",
        },
        {
          type: "heading",
          text: "Pipeline management",
        },
        {
          type: "text",
          body: "A pipeline is not a CRM, it is a habit. Six stages, reviewed weekly, with a next action and a date against every live opportunity. Most deals are lost to drift rather than to competitors.",
        },
        {
          type: "framework",
          title: "Six stages",
          steps: [
            { label: "Researched", detail: "Qualified and in the tracker, not yet contacted." },
            { label: "Contacted", detail: "Message sent, follow-up scheduled." },
            { label: "In conversation", detail: "They replied. Working toward a call." },
            { label: "Call held", detail: "Diagnosed. Summary sent within 24 hours." },
            { label: "Proposed", detail: "Scope and price with them. Decision date agreed." },
            { label: "Closed or declined", detail: "Won, lost, or honestly closed. Record the reason for every loss." },
          ],
        },
        {
          type: "callout",
          tone: "signal",
          title: "Every live opportunity needs a next action and a date",
          body: "An opportunity with no scheduled next step is not in your pipeline — it is a memory. The weekly review exists to find those and either give them a date or close them honestly.",
        },
      ],
      checklist: {
        title: "Pipeline review — weekly, 30 minutes",
        groups: [
          {
            items: [
              "Every opportunity has a stage",
              "Every live opportunity has a next action and a date",
              "Anything with no movement in 21 days is closed honestly",
              "Loss reasons recorded for everything declined",
              "New prospects added to replace those that closed",
              "Follow-ups due this week actually scheduled",
              "Count of conversations held this week versus your target",
            ],
          },
        ],
      },
      exercise: {
        title: "Write your objection answers",
        prompt:
          "Improvising these is how good calls end badly. Write them once and they improve every conversation.",
        steps: [
          "Write your answer to each of the five objections.",
          "For \"how do I know it will work\", write a reduced-risk first phase you could genuinely offer.",
          "For \"too expensive\", write the question you will ask rather than the defence you will make.",
          "Keep the page visible during calls until they are automatic.",
        ],
      },
      actionStep:
        "Set a recurring 30-minute pipeline review in your calendar for the same time each week. Deals are lost to drift, and the review is the only thing that catches it.",
      recap: [
        "Diagnose for fifteen minutes before presenting anything.",
        "Let them state what the problem costs — it beats your assertion.",
        "Reduce scope, never price, when lowering risk.",
        "Every live opportunity needs a next action and a date, or it is a memory.",
      ],
    },
    {
      slug: "fourteen-day-challenge",
      number: 5,
      title: "The 14-Day Client Acquisition Challenge",
      summary:
        "Fourteen dated actions that turn the playbook into a working pipeline.",
      durationMinutes: 40,
      blocks: [
        {
          type: "text",
          body: "Reading this playbook changes nothing. This chapter turns it into fourteen dated actions, roughly an hour each. Do them in order — several depend on the ones before.",
        },
        {
          type: "callout",
          tone: "signal",
          title: "How to run it",
          body: "Put all fourteen days in your calendar now, before you start. An hour a day for two weeks. If you miss a day, do it the next day rather than doubling up — the sequence matters more than the pace.",
        },
        {
          type: "callout",
          tone: "warn",
          title: "What this will and will not do",
          body: "Fourteen days of this reliably produces conversations. Whether those become clients depends on your offer, your market and your price — none of which any guide can promise on your behalf. Measure the challenge by actions completed and conversations held, because those are what you control.",
        },
        {
          type: "framework",
          title: "Week one — foundation and research",
          steps: [
            { label: "Day 1 — Niche", detail: "Score three candidate niches against the four criteria. Choose one. Prove it by listing twenty real examples in thirty minutes." },
            { label: "Day 2 — Positioning", detail: "Write the four-line positioning statement. Run the competitor test on the last line." },
            { label: "Day 3 — Test it", detail: "Send the statement to three people outside your industry. Rewrite whichever line caused hedging." },
            { label: "Day 4 — Offer", detail: "Write the offer: outcome, mechanism, inclusions, timeline, price, exclusions. Test on two people." },
            { label: "Day 5 — Proof", detail: "Publish one real piece of work — an audit, a teardown, or your method written out." },
            { label: "Day 6 — Research", detail: "Research ten prospects properly, ten minutes each, recording the tracker fields." },
            { label: "Day 7 — Research", detail: "Research ten more. Disqualify any without a genuine observation." },
          ],
        },
        {
          type: "framework",
          title: "Week two — contact and conversation",
          steps: [
            { label: "Day 8 — First five", detail: "Write and send five individual messages. Log each and schedule the single follow-up." },
            { label: "Day 9 — Partnerships", detail: "List ten adjacent providers. Approach three, leading with a referral or genuine compliment." },
            { label: "Day 10 — Referrals", detail: "Ask three past clients or contacts for a specific referral. Specific, not \"anyone you know\"." },
            { label: "Day 11 — Second five", detail: "Send five more messages. Adjust based on anything you learned from the first batch." },
            { label: "Day 12 — Call prep", detail: "Write your eight discovery questions and your five objection answers on one page." },
            { label: "Day 13 — Content", detail: "Publish one piece addressing a problem your niche has, in their words. Include a path to contact you." },
            { label: "Day 14 — Review and follow up", detail: "Send the scheduled follow-ups. Review the pipeline. Set next week's targets and book the weekly review." },
          ],
        },
        {
          type: "heading",
          text: "After the fourteen days",
        },
        {
          type: "text",
          body: "The challenge builds the pipeline. Maintaining it is a weekly rhythm rather than a sprint — roughly five hours across the week keeps it alive without consuming the time you need for delivery.",
        },
        {
          type: "list",
          items: [
            "Research five new prospects each week.",
            "Send five new messages each week.",
            "Send every follow-up that is due.",
            "Publish once, on your chosen cadence.",
            "Ask for one referral whenever a project produces a visible result.",
            "Run the 30-minute pipeline review on the same day each week.",
          ],
        },
      ],
      checklist: {
        title: "14-day challenge tracker",
        groups: [
          {
            label: "Week one",
            items: [
              "Day 1 — Niche chosen and twenty examples listed",
              "Day 2 — Positioning statement written",
              "Day 3 — Statement tested on three people and revised",
              "Day 4 — Offer written and tested",
              "Day 5 — One real piece of work published",
              "Day 6 — Ten prospects researched",
              "Day 7 — Ten more researched, weak ones disqualified",
            ],
          },
          {
            label: "Week two",
            items: [
              "Day 8 — Five messages sent, follow-ups scheduled",
              "Day 9 — Three partnership approaches made",
              "Day 10 — Three specific referral requests sent",
              "Day 11 — Five more messages sent",
              "Day 12 — Discovery questions and objection answers written",
              "Day 13 — One piece of content published",
              "Day 14 — Follow-ups sent, pipeline reviewed, weekly rhythm booked",
            ],
          },
          {
            label: "Measured by what you control",
            items: [
              "Twenty prospects researched",
              "Ten messages sent",
              "Three partnership approaches",
              "Three referral requests",
              "Two pieces published",
              "Weekly review scheduled as a recurring commitment",
            ],
          },
        ],
      },
      actionStep:
        "Put all fourteen days in your calendar right now, with a specific hour each day. Undated plans become intentions, and intentions are why most acquisition never starts.",
      recap: [
        "Fourteen dated actions, roughly an hour each, in order.",
        "Measure by actions completed and conversations held — those are what you control.",
        "After the challenge, roughly five hours a week maintains the pipeline.",
        "The weekly review is what stops deals dying of drift.",
      ],
    },
  ],
};
