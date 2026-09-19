import type { EducationProduct } from "../types";

/**
 * FREE — How to Get Your First Online Client.
 *
 * Twelve topics across seven chapters, from choosing a service through to
 * turning the first client into proof. Deliberately anti-spam: every
 * outreach framework here is researched, specific and low-volume.
 */

export const firstOnlineClient: EducationProduct = {
  slug: "first-online-client",
  title: "How to Get Your First Online Client",
  shortTitle: "First Online Client",
  tier: "free",
  price: null,
  format: "guide",
  category: "acquisition",
  difficulty: "beginner",
  estimatedMinutes: 90,
  summary:
    "A practical path from no clients to one paying client — without cold-spamming anyone or waiting until you feel ready.",
  description:
    "The first client is the hardest, because you have no proof, no referrals and no track record. This guide is the sequence that works anyway: choose a service people already buy, pick a specific person to serve, build proof before you have clients, and have real conversations with a small number of well-researched prospects.",
  whatYouWillLearn: [
    "How to choose a service people are already paying for, rather than one you wish existed",
    "Why a specific customer type gets you hired faster than broad availability",
    "How to build credible proof before you have a single client",
    "Where to find prospects without buying a list or scraping anyone",
    "How to start a conversation that does not read as a template",
    "A discovery call structure that diagnoses before it pitches",
    "How to handle the four objections you will actually hear",
    "How to turn the first client into proof, referrals and a second client",
  ],
  whoItIsFor: [
    "Freelancers and consultants who have a skill but no clients yet",
    "People leaving a job and starting to sell their expertise directly",
    "Anyone who has been \"getting ready to start\" for several months",
    "Service providers whose only clients so far came from luck rather than a process",
  ],
  whatYouWillBuild: [
    "A defined service, a specific customer type, and a one-paragraph offer",
    "A researched prospect list of 20 real people or businesses",
    "Your own outreach message, written to one person rather than a list",
    "A discovery call structure you can run without improvising",
    "A first-client action plan with dated steps",
  ],
  includedResources: [
    { title: "Prospecting checklist", detail: "What qualifies someone as a real prospect before you spend time on them." },
    { title: "Outreach framework", detail: "The four-part message structure, with what to research first." },
    { title: "Simple offer template", detail: "A one-paragraph offer a stranger can evaluate." },
    { title: "Discovery call framework", detail: "Question sequence that diagnoses before presenting anything." },
    { title: "Follow-up framework", detail: "How and when to follow up without becoming a nuisance." },
    { title: "Client onboarding checklist", detail: "Everything to agree and set up before work starts." },
    { title: "First-client action plan", detail: "A dated fourteen-step plan from today to a signed project." },
  ],
  nextStep: {
    slug: "client-acquisition",
    pitch:
      "One client proves you can sell. If you now want a repeatable system that produces clients predictably rather than one at a time, that is the playbook.",
  },
  faqs: [
    {
      question: "Do I need a website first?",
      answer:
        "No. Your first client will come from a conversation, not from search traffic. A simple page explaining what you do and who for is useful for credibility, but do not let building it delay the outreach. Many first clients are closed before the website exists.",
    },
    {
      question: "Is this cold outreach? I do not want to spam people.",
      answer:
        "It is researched, individual outreach to a small number of people where you have a specific reason to contact them. That is a different activity from bulk messaging, and the guide is explicit about the line. If you follow it, you will contact roughly twenty people, and each message will be genuinely about them.",
    },
    {
      question: "What should I charge for the first project?",
      answer:
        "Enough that you take it seriously and they do too. Free work tends to be deprioritised by both sides and produces a weaker case study. Chapter 3 covers pricing the first project when you have no track record, including when a reduced rate is a reasonable trade for a testimonial and a reference.",
    },
    {
      question: "How long does this usually take?",
      answer:
        "That depends on your service, your market and how much time you can give it — so any specific number would be invented. What the guide does provide is a dated fourteen-step action plan, so progress is measured by steps completed rather than by waiting.",
    },
  ],
  chapters: [
    {
      slug: "choose-a-service",
      number: 1,
      title: "Choose a Service People Already Pay For",
      summary:
        "Starting from existing demand rather than inventing a category nobody is shopping for.",
      durationMinutes: 12,
      blocks: [
        {
          type: "text",
          body: "The fastest way to a first client is to sell something people are already buying. Not something clever, not something new — something that already appears in other people's budgets. Educating a market about why they need a thing is expensive and slow, and it is the wrong project for someone who needs a client this quarter.",
        },
        {
          type: "heading",
          text: "What makes a service sellable now",
        },
        {
          type: "framework",
          title: "Four tests",
          steps: [
            { label: "Money already moves", detail: "Businesses in your target market already pay someone for this, whether an agency, a freelancer or an employee. You can point at examples." },
            { label: "The pain is current", detail: "It is a problem they have this month, not one they will have eventually. Urgency is what converts interest into a project." },
            { label: "You can deliver it now", detail: "Not after a course you plan to take. Something you could competently do next week if someone paid you today." },
            { label: "The result is visible", detail: "Both of you can tell whether it worked. Vague services are hard to sell and harder to get referrals from." },
          ],
        },
        {
          type: "callout",
          tone: "warn",
          title: "The invented category trap",
          body: "\"Holistic brand transformation consulting\" fails all four tests. Nobody has a line in their budget for it, nobody is searching for it, and neither party can tell whether it worked. Start with a service that has an obvious name.",
        },
        {
          type: "heading",
          text: "Finding what you can already sell",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "List everything you can competently do today. Include things from your job that felt ordinary — ordinary to you is often scarce elsewhere.",
            "Cross out anything you would need to learn first.",
            "For each survivor, find three real examples of someone being paid for it. Job listings, freelancer profiles, agency service pages all count as evidence.",
            "Of the ones with evidence, pick the one where you can name a specific business that needs it right now.",
          ],
        },
        {
          type: "example",
          title: "Narrowing in practice",
          body: "\"Marketing\" is not a service. \"Social media management\" is a service but crowded. \"Setting up and running the email follow-up for people who get consultation bookings but lose most of them before the call\" is a service with an obvious buyer, a visible result, and very little competition — and it is a subset of skills the person already had.",
        },
        {
          type: "callout",
          tone: "signal",
          title: "Narrow beats broad, early",
          body: "Broad availability sounds safer and converts worse. A prospect hiring for a specific problem picks the person who does that specific thing over the generalist who also does it, almost every time.",
        },
      ],
      exercise: {
        title: "Choose your service",
        prompt: "Produce one service, not a menu. Menus get deferred; single services get hired.",
        steps: [
          "List everything you could do competently starting next week.",
          "Cross out anything requiring learning first.",
          "Find three real examples of each remaining one being paid for.",
          "Pick the one where you can immediately name a business that needs it.",
          "Write it in one sentence, using the words a buyer would use.",
        ],
      },
      actionStep:
        "Write your service in one sentence, with no 'and'. If you need an 'and', you have two services and should choose one for now.",
      recap: [
        "Sell into existing demand rather than educating a market.",
        "Four tests: money already moves, pain is current, you can deliver now, the result is visible.",
        "Narrow beats broad when you are competing for a first client.",
      ],
    },
    {
      slug: "customer-and-offer",
      number: 2,
      title: "Pick a Specific Customer and Build a Simple Offer",
      summary:
        "Choosing who you serve, then packaging the service into something a stranger can say yes to.",
      durationMinutes: 14,
      blocks: [
        {
          type: "text",
          body: "You now have a service. Next: who exactly is it for, and what precisely do they get. These two decisions do more for your conversion rate than any amount of polish on the messaging afterwards.",
        },
        {
          type: "heading",
          text: "Choosing the customer",
        },
        {
          type: "text",
          body: "Specificity is what makes a stranger recognise themselves. It also makes your outreach possible — you cannot research \"businesses\", but you can research thirty independent physiotherapy clinics.",
        },
        {
          type: "framework",
          title: "A customer definition you can act on",
          steps: [
            { label: "Observable from outside", detail: "You could identify one without talking to them. A type of business, a role, a situation visible on their website." },
            { label: "Reachable", detail: "You can name three places they gather, publish or can be found. If you cannot, you cannot do outreach." },
            { label: "Has budget", detail: "They already spend money on things like this. A business that has never paid for anything similar is a long education project." },
            { label: "You have some connection", detail: "An industry you have worked in, a community you belong to, a problem you have had yourself. Connection shortens the trust gap enormously." },
          ],
        },
        {
          type: "callout",
          tone: "signal",
          title: "Start where you already are",
          body: "Your first client will usually come from adjacent to your existing life — a former employer's industry, a community you are in, a problem you personally solved. That is not a lack of ambition; it is the shortest route to trust when you have no proof.",
        },
        {
          type: "heading",
          text: "The simple offer",
        },
        {
          type: "text",
          body: "An offer is not a price attached to a service. It is a structured promise, short enough to read once and specific enough to evaluate without a conversation.",
        },
      ],
      template: {
        title: "Simple offer template",
        body: `I help [specific customer type] who [specific situation]
to [specific outcome]
by [what you actually do — the mechanism].

What's included:
— [Deliverable 1]
— [Deliverable 2]
— [Deliverable 3]

Timeline: [how long]
Investment: [price or range]
Not included: [one or two things, stated plainly]`,
        adapt: [
          "Replace every bracket — if you cannot fill one, that is the part of the offer that is not finished.",
          "The outcome must be what changes for them, not what you produce.",
          "Keep 'not included' in. It reads as confidence and prevents scope problems later.",
          "State a price or a range. Hidden pricing reads as expensive and evasive.",
        ],
      },
      exercise: {
        title: "Write your offer",
        prompt:
          "Fill in the template completely, then test it on someone who does not know your work.",
        steps: [
          "Complete every bracket in the template.",
          "Read it aloud and cut any sentence that does not help someone decide.",
          "Send it to two people and ask: what would you get, and what does it cost?",
          "Rewrite whichever part they could not answer.",
        ],
      },
      checklist: {
        title: "Offer readiness",
        groups: [
          {
            items: [
              "Customer type is observable from outside",
              "You can name three places they gather or can be found",
              "They already spend money on something similar",
              "Outcome stated as their change, not your deliverable",
              "Mechanism explained in one sentence",
              "Price or range stated",
              "One or two exclusions stated plainly",
              "A stranger repeated it back correctly after one read",
            ],
          },
        ],
      },
      actionStep:
        "Name your customer type specifically enough that it excludes people. If your definition includes almost everyone, narrow it once more before moving on.",
      recap: [
        "Specificity makes strangers recognise themselves and makes outreach possible.",
        "Start adjacent to your existing life — connection shortens the trust gap.",
        "An offer states outcome, mechanism, inclusions, timeline, price and exclusions.",
      ],
    },
    {
      slug: "build-proof-early",
      number: 3,
      title: "Build Proof Before You Have Clients",
      summary:
        "What counts as credible evidence on day one, and how to price the first project.",
      durationMinutes: 13,
      blocks: [
        {
          type: "text",
          body: "The obvious problem with a first client is that you have no first client to point at. This is solvable, because client results are only one form of proof and the other forms are available immediately.",
        },
        {
          type: "heading",
          text: "Proof you can create this week",
        },
        {
          type: "framework",
          title: "Four things that work before you have clients",
          steps: [
            { label: "Do the work on yourself", detail: "Build the thing for your own business and show it. A funnel specialist with a visibly excellent funnel has demonstrated the skill directly." },
            { label: "Do it publicly for a real example", detail: "Take a real (non-client) business, produce a genuine audit or teardown, and publish it. This is work product and it is checkable." },
            { label: "Show the mechanism", detail: "Write out exactly how you approach the problem, step by step. Explaining a method well is evidence of understanding it." },
            { label: "Describe the problem precisely", detail: "Describing their situation more accurately than they expected reads as experience. It requires no permission and nobody can copy it if it is genuinely yours." },
          ],
        },
        {
          type: "callout",
          tone: "warn",
          title: "Do not invent proof",
          body: "No fake testimonials, no borrowed case studies, no 'we have helped hundreds of businesses' when you have helped none. It is checkable, it is increasingly easy to check, and a founder caught doing it does not recover the credibility.",
        },
        {
          type: "heading",
          text: "Pricing the first project",
        },
        {
          type: "text",
          body: "The temptation is to work free to get a case study. Free work is usually a mistake: it gets deprioritised by the client, it attracts people who do not value the outcome, and it produces a weaker reference than paid work.",
        },
        {
          type: "list",
          items: [
            "Charge something real, even if it is below your intended rate. Paid work gets taken seriously by both sides.",
            "A reduced first-project rate is reasonable when explicitly traded for a testimonial and a reference — say that out loud rather than just discounting.",
            "Never discount before the client has raised price as an issue. Discounting pre-emptively signals you do not believe the number.",
            "Write down what your intended rate will be after two or three projects, so the low rate is a decision with an end date.",
          ],
        },
        {
          type: "example",
          title: "Trading price for proof, stated honestly",
          body: "\"My normal rate for this will be £2,500. For the first two projects I am charging £1,200, because what I need from this is a result I can show and a reference I can use. If it works, I'd ask you for a short written testimonial and permission to describe what we did. Does that work?\" — direct, honest, and it sets up the case study before the work starts.",
        },
        {
          type: "callout",
          tone: "signal",
          title: "Record the baseline",
          body: "Before you start any work, write down the numbers as they are today. Without a recorded starting point you cannot substantiate an improvement later, and this is the single most common reason people finish good work with no usable case study.",
        },
      ],
      checklist: {
        title: "Proof groundwork",
        groups: [
          {
            items: [
              "The work is visible on your own business where applicable",
              "One public teardown or audit of a real example published",
              "Your method written out step by step",
              "Nothing published that you could not substantiate",
              "First-project rate decided, with an end date for it",
              "Testimonial and reference agreed up front, not asked for afterwards",
              "Baseline numbers recorded before work begins",
            ],
          },
        ],
      },
      actionStep:
        "Publish one genuine piece of work this week — an audit, a teardown, or your method written out. It is the fastest credibility you can build without a client.",
      recap: [
        "Client results are one form of proof; three others are available on day one.",
        "Charge something real — free work is deprioritised and produces weaker references.",
        "Trade a reduced rate explicitly for a testimonial rather than just discounting.",
        "Record the baseline before you start or you cannot prove the result later.",
      ],
    },
    {
      slug: "find-and-approach",
      number: 4,
      title: "Find Prospects and Start Conversations",
      summary:
        "Building a researched list of twenty, then writing messages that are genuinely about them.",
      durationMinutes: 16,
      blocks: [
        {
          type: "text",
          body: "This chapter is where most people either get a client or quietly stop. It is also where the line between outreach and spam sits, so let us be precise about it.",
        },
        {
          type: "callout",
          tone: "warn",
          title: "The line",
          body: "Spam is high volume, low research, identical messages, sent to people who have no particular reason to hear from you. Outreach is low volume, researched, individually written, and sent to people where you have a specific and honest reason to make contact. The first damages your reputation permanently. This guide teaches the second.",
        },
        {
          type: "heading",
          text: "Where to find prospects",
        },
        {
          type: "list",
          items: [
            "Your existing network — former colleagues, clients of previous employers, people from your industry. Highest conversion, lowest volume.",
            "Communities you are genuinely part of — forums, Slack groups, local business associations. Participate first; pitch rarely and only when relevant.",
            "Businesses visibly exhibiting the problem you solve — you can see the broken funnel, the outdated site, the missing follow-up.",
            "People publishing about the problem — someone posting about a struggle you solve is the warmest possible prospect.",
            "Referrals from adjacent providers — the designer who does not do development, the accountant who does not do marketing.",
          ],
        },
        {
          type: "callout",
          tone: "signal",
          title: "Twenty, not two thousand",
          body: "Twenty well-researched prospects will outperform two thousand scraped emails, and will not damage your name. Volume is not the lever at this stage; relevance is.",
        },
        {
          type: "heading",
          text: "The outreach message",
        },
        {
          type: "text",
          body: "The message has four parts and should be short. Its only job is to start a conversation — not to sell, not to book, and certainly not to attach a proposal.",
        },
        {
          type: "framework",
          title: "Four-part structure",
          steps: [
            { label: "Why them, specifically", detail: "Something you actually observed about their business. This must be real; a fake personalisation token is worse than none." },
            { label: "The observation", detail: "The specific thing you noticed that relates to what you do. Useful and concrete, not a criticism of their work." },
            { label: "What you do, in one line", detail: "Brief and plain. They can look you up if interested." },
            { label: "A small, easy ask", detail: "A question or a short call. Not a proposal, not a 30-minute 'discovery session', not a calendar link in the first message." },
          ],
        },
      ],
      template: {
        title: "Outreach framework",
        body: `Subject: [specific observation about their business]

Hi [name],

[Why them — something real you observed. "I came across
[business] while looking at [genuine context]" or "I've been
following your posts about [topic]".]

[The observation — the specific thing you noticed.
"I noticed your booking page asks for seven fields before
someone can request a call — in my experience that's where
most enquiries drop off."]

[What you do — one line. "I build booking and follow-up
flows for [customer type]."]

[Small ask — "Worth a quick conversation, or is this
already handled?"]

[Your name]`,
        adapt: [
          "The observation must be genuinely specific — if you could send it to fifty businesses unchanged, start again.",
          "Never attach a proposal or a price to a first message.",
          "'Is this already handled?' gives them an easy exit, which paradoxically increases replies.",
          "Do not include a calendar link in the first message. It asks for commitment you have not earned.",
          "One follow-up after about a week. Then stop.",
        ],
      },
      checklist: {
        title: "Prospecting checklist",
        groups: [
          {
            label: "Qualifying a prospect",
            items: [
              "They match your defined customer type",
              "You can see evidence of the problem you solve",
              "They appear to have budget — they are paying for other things",
              "You have a real, honest reason to contact them",
              "You can name the specific person, not a generic inbox",
            ],
          },
          {
            label: "Before sending",
            items: [
              "Message is individually written, not a template with a name swapped in",
              "The observation is specific to this business",
              "No proposal, price or calendar link attached",
              "Message is short enough to read on a phone without scrolling",
              "One follow-up scheduled for a week later, and only one",
            ],
          },
        ],
      },
      exercise: {
        title: "Build the list of twenty",
        prompt:
          "Research twenty real prospects before writing a single message. Research first, write second — doing both at once produces generic messages.",
        steps: [
          "Find twenty businesses or people matching your customer type.",
          "For each, note one specific, real observation relevant to what you do.",
          "Disqualify any where you cannot find a genuine observation — that is a sign they are not a fit.",
          "Write the first five messages individually, using the framework.",
          "Send those five before writing the next five, so you can learn from any replies.",
        ],
      },
      actionStep:
        "Send five researched messages this week. Five real ones beat fifty templated ones, and they will not cost you your reputation.",
      recap: [
        "Outreach is low volume, researched and individual. Spam is the opposite of all three.",
        "Twenty researched prospects beat two thousand scraped addresses.",
        "Four parts: why them, the observation, what you do, a small ask.",
        "No proposals, prices or calendar links in a first message.",
      ],
    },
    {
      slug: "diagnose-and-present",
      number: 5,
      title: "Diagnose the Problem, Then Present the Solution",
      summary:
        "Running a discovery call that finds the real problem before proposing anything.",
      durationMinutes: 14,
      blocks: [
        {
          type: "text",
          body: "Someone replied and agreed to talk. The most common way this call is wasted is by presenting too early — describing your service in the first five minutes, before you know what they actually need. Diagnose first. It converts better and it produces better work.",
        },
        {
          type: "heading",
          text: "The call structure",
        },
        {
          type: "framework",
          title: "Five phases, in order",
          steps: [
            { label: "Frame it (2 min)", detail: "\"I'd like to understand what's going on, and if I can help I'll tell you how. If I can't, I'll say so.\" This lowers their guard and sets up an honest ending." },
            { label: "Diagnose (15 min)", detail: "Questions only. Resist every urge to solve out loud. You are looking for the real constraint, not the stated one." },
            { label: "Play it back (3 min)", detail: "\"So what I'm hearing is...\" Summarise their situation in your own words. If you have understood it, they will visibly relax." },
            { label: "Present, only if you can help (5 min)", detail: "Connect your specific approach to the specific problem you just diagnosed. If you cannot help, say so — and refer them if you can." },
            { label: "Agree next step (5 min)", detail: "Something concrete and dated: a proposal by Thursday, a scoped first phase, a decision by a specific day." },
          ],
        },
        {
          type: "callout",
          tone: "signal",
          title: "The discipline that wins the call",
          body: "You will feel pressure to prove expertise by solving things live. Resist it. The person who asks good questions for fifteen minutes is perceived as more expert than the one who starts talking at minute three — and they end up proposing the right thing.",
        },
        {
          type: "heading",
          text: "What to ask",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "\"Tell me what's happening at the moment.\" Open, no framing. Let them describe it their way.",
            "\"How long has that been the case?\" Duration tells you urgency and how much they have already tried.",
            "\"What have you already tried?\" Prevents you proposing something that failed last year.",
            "\"What does it cost you when it doesn't work?\" This is where they establish the value themselves, which is worth more than you asserting it.",
            "\"What happens if nothing changes?\" Tests whether this is urgent or theoretical.",
            "\"Who else is involved in deciding?\" Asked kindly, early, and it saves weeks.",
            "\"If we did work together, what would make it obviously worth it?\" Gives you their success criteria in their own words.",
          ],
        },
        {
          type: "example",
          title: "Presenting after diagnosing",
          body: "Weak: \"I do funnel builds, landing pages, email sequences and paid ads — whichever you need.\" Strong: \"From what you've described, the problem isn't traffic — you said you get around forty enquiries a month. It's that nothing happens between the enquiry and the call. I'd build the follow-up sequence first, because that's the cheapest thing to fix and you'd see it within a month.\" The second one is only possible because they diagnosed first.",
        },
        {
          type: "callout",
          tone: "muted",
          title: "Saying no is a selling behaviour",
          body: "Telling someone honestly that you are not the right fit, and referring them onward, builds more credibility than taking work you should not take. Those people refer others, and you have avoided a project that would have produced a bad reference.",
        },
      ],
      checklist: {
        title: "Discovery call framework",
        groups: [
          {
            label: "Before",
            items: [
              "Researched their business for ten minutes",
              "Written three specific questions about their situation",
              "Decided what would disqualify them as a fit",
              "Booked with a clear length so nobody is surprised",
            ],
          },
          {
            label: "During",
            items: [
              "Framed the call honestly at the start",
              "Asked questions for at least fifteen minutes before presenting anything",
              "Let them state the cost of the problem",
              "Played their situation back in your own words",
              "Established who else decides",
              "Agreed a concrete, dated next step",
            ],
          },
          {
            label: "After",
            items: [
              "Written summary sent within 24 hours",
              "Summary restates their problem before your solution",
              "Price and scope stated plainly",
              "Clear single next action and a date",
            ],
          },
        ],
      },
      actionStep:
        "Write your seven discovery questions on one page and keep it visible during the call. Improvising the structure is how calls turn into premature pitches.",
      recap: [
        "Diagnose for fifteen minutes before presenting anything.",
        "Let them state what the problem costs — it is worth more than your assertion.",
        "Ask who else decides, early and kindly.",
        "Saying you are not a fit builds credibility and produces referrals.",
      ],
    },
    {
      slug: "objections-and-closing",
      number: 6,
      title: "Handle Objections and Close the First Project",
      summary:
        "The four objections you will actually hear, and how to get to a decision cleanly.",
      durationMinutes: 12,
      blocks: [
        {
          type: "text",
          body: "An objection is an unanswered question, not resistance to overcome. Treat it as information: they are telling you exactly what is missing from their confidence. The four below cover nearly everything you will hear for a first project.",
        },
        {
          type: "heading",
          text: "The four you will hear",
        },
        {
          type: "framework",
          title: "What they mean and what to do",
          steps: [
            {
              label: "\"It's too expensive\"",
              detail: "Usually means value is unclear, not that the number is wrong. Go back to what they said the problem costs them. Ask: \"Compared to what?\" — the answer tells you whether it is budget, priority, or unclear value.",
            },
            {
              label: "\"I need to think about it\"",
              detail: "Almost always an unvoiced concern. Ask kindly: \"Of course — what's the part you're least sure about?\" That question surfaces the real objection more reliably than anything else.",
            },
            {
              label: "\"How do I know this will work?\"",
              detail: "A proof request, and entirely fair when you are new. Answer with your mechanism, your method, and a reduced-risk first phase. Do not answer with confidence alone.",
            },
            {
              label: "\"We're not ready yet\"",
              detail: "Sometimes true. Ask what would need to be true for them to be ready, and when that is likely. Then follow up on that date. Half of these become clients later if you actually follow up.",
            },
          ],
        },
        {
          type: "callout",
          tone: "warn",
          title: "Do not discount to close",
          body: "Dropping the price when someone hesitates teaches them the number was arbitrary and invites them to push again. If you need to reduce risk, reduce scope instead — a smaller first phase at a proportional price keeps the rate intact.",
        },
        {
          type: "heading",
          text: "Reducing risk without cutting price",
        },
        {
          type: "list",
          items: [
            "Offer a smaller scoped first phase with a decision point at the end of it.",
            "Stage payments — part up front, part on completion.",
            "Define a clear, checkable success criterion so nobody is guessing later.",
            "Put a specific end date on it, so it is not open-ended.",
          ],
        },
        {
          type: "heading",
          text: "Closing",
        },
        {
          type: "text",
          body: "Closing is mostly removing ambiguity. Most first projects are lost not to a competitor but to indecision — nothing happened, and eventually both sides moved on.",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Summarise their problem in their words, then the scope, price and timeline in yours.",
            "Ask directly: \"Do you want to go ahead?\" Then stop talking and let them answer.",
            "If yes, send the agreement the same day while momentum exists.",
            "If not yet, agree a specific date to revisit and put it in both calendars.",
            "If no, ask what made it a no. That answer improves your next five conversations.",
          ],
        },
        {
          type: "callout",
          tone: "signal",
          title: "The follow-up most people skip",
          body: "One clear, useful follow-up after a week recovers a meaningful share of stalled deals. Not \"just checking in\" — send something genuinely useful related to what you discussed, then restate the one next step.",
        },
      ],
      template: {
        title: "Follow-up framework",
        body: `Day 0 — After the call
Written summary: their problem in their words,
your proposed scope, price, timeline, one next step
and a decision date.

Day 7 — If no reply
Something useful, not a nudge. A relevant example,
a short observation about their situation, a resource.
Then one line restating the next step.

Day 21 — If still nothing
Close the loop honestly: "I'll assume the timing
isn't right — happy to pick this up whenever it is."
This gets replies more often than another chase.

If they said "not yet" with a reason
Follow up on the date they gave, referencing
what they said would need to change.`,
        adapt: [
          "Never send 'just checking in' — it adds nothing and signals you have nothing to add.",
          "Three contacts total, then stop. Persistence past that damages the relationship.",
          "Closing the loop honestly at day 21 often produces the reply the chases did not.",
        ],
      },
      actionStep:
        "Write your answer to \"how do I know this will work?\" before your next call. It is the objection a first-time provider hears most and improvises worst.",
      recap: [
        "Objections are unanswered questions, not resistance.",
        "\"What's the part you're least sure about?\" surfaces the real concern.",
        "Reduce scope, not price, when you need to reduce risk.",
        "Most first projects are lost to indecision — ask directly and set a date.",
      ],
    },
    {
      slug: "deliver-and-multiply",
      number: 7,
      title: "Deliver Extremely Well, Then Turn One Client Into More",
      summary:
        "Onboarding, over-delivering deliberately, and converting the first project into proof and referrals.",
      durationMinutes: 13,
      blocks: [
        {
          type: "text",
          body: "The first project is not just revenue. It is your proof, your reference, your testimonial and your route to a second client. Treating it as all four from day one changes how you run it.",
        },
        {
          type: "heading",
          text: "Onboarding properly",
        },
        {
          type: "text",
          body: "Most first-project problems are onboarding problems that surfaced later — unclear scope, unclear responsibilities, unclear definition of done. An hour of agreement at the start prevents nearly all of it.",
        },
        {
          type: "callout",
          tone: "signal",
          title: "Record the baseline. Again.",
          body: "This is mentioned twice in this guide deliberately, because it is the most commonly skipped step with the largest consequence. Before you touch anything, write down the current numbers and the client's own description of the problem. Without it you cannot prove what changed.",
        },
        {
          type: "heading",
          text: "Over-delivering usefully",
        },
        {
          type: "text",
          body: "Over-delivering does not mean working free or expanding scope. Scope creep damages the project. It means being unusually good at the things clients actually notice — most of which cost nothing.",
        },
        {
          type: "list",
          items: [
            "Reply faster than they expect. Responsiveness is the most-noticed quality in a service provider.",
            "Send a short progress update before they ask for one. It prevents the anxiety that produces difficult clients.",
            "Flag problems early, with a proposed solution. Hiding a problem until it is unavoidable is what loses references.",
            "Hand over more clearly than required — a short explanation of what was done and why.",
            "Finish on the date you said. Delivering on time is rarer than it should be, and it is remembered.",
          ],
        },
        {
          type: "heading",
          text: "Turning it into the second client",
        },
        {
          type: "framework",
          title: "Four things to do at the end",
          steps: [
            { label: "Ask at the moment of satisfaction", detail: "When they express that something worked — that is when to ask, not weeks later at the end of the engagement." },
            { label: "Ask the right question", detail: "\"Would you write a testimonial?\" produces generic praise and creates work. \"What was the situation before, and what changed?\" produces specifics, which is the part that persuades." },
            { label: "Ask for a specific referral", detail: "\"Do you know anyone else?\" gets a vague yes. \"Do you know another clinic owner with the same booking problem?\" gets a name." },
            { label: "Write the case study while it is fresh", detail: "Situation, constraint, what you did and why, the outcome, and the honest caveat about what else contributed. Get written permission before publishing anything identifying." },
          ],
        },
        {
          type: "callout",
          tone: "muted",
          title: "The honest caveat",
          body: "If revenue rose while you rebuilt the funnel and they also hired a salesperson, say so in the case study. Naming what else contributed makes the whole account more credible, not less — and claiming sole credit for a multi-cause result is how case studies become indefensible.",
        },
      ],
      checklist: {
        title: "Client onboarding checklist",
        groups: [
          {
            label: "Before work starts",
            items: [
              "Written agreement covering scope, price, timeline and payment terms",
              "Definition of done agreed in writing",
              "Baseline numbers recorded",
              "Client's own description of the problem saved in their words",
              "Access and credentials received and tested",
              "Single point of contact agreed on their side",
              "Permission to write about the work agreed up front",
            ],
          },
          {
            label: "During",
            items: [
              "Progress update sent on a regular rhythm, unprompted",
              "Problems flagged early with a proposed solution",
              "Scope changes acknowledged in writing before doing them",
              "Decisions and their reasons recorded as you go",
            ],
          },
          {
            label: "At the end",
            items: [
              "Handover document explaining what was done and why",
              "Result measured against the recorded baseline",
              "Testimonial asked for at a moment of satisfaction",
              "Specific referral requested, not a vague one",
              "Case study drafted with an honest caveat",
              "Written permission obtained before publishing",
            ],
          },
        ],
      },
      exercise: {
        title: "First-client action plan",
        prompt:
          "Put dates against every step. Undated plans become intentions, and intentions are why people spend six months getting ready.",
        steps: [
          "Day 1 — Write your service in one sentence with no 'and'.",
          "Day 2 — Define your customer type specifically enough to exclude people.",
          "Day 3 — Complete the offer template.",
          "Day 4 — Test the offer on two people and rewrite what they could not answer.",
          "Days 5–7 — Publish one real piece of work: an audit, a teardown or your method.",
          "Days 8–10 — Research twenty prospects with one genuine observation each.",
          "Day 11 — Write and send the first five messages.",
          "Day 14 — Send the second five. Follow up on the first five once.",
          "Ongoing — Hold discovery calls using the seven questions.",
          "After each call — Send the written summary within 24 hours.",
          "Day 21 — Follow up per the framework, then close loops honestly.",
          "On signing — Run the onboarding checklist before any work begins.",
          "During — Record the baseline and send unprompted updates.",
          "At the end — Ask at the moment of satisfaction, then write the case study.",
        ],
      },
      actionStep:
        "Put the fourteen dated steps in your calendar today. The plan only works if the steps have dates attached to them.",
      recap: [
        "The first project is revenue, proof, a reference and a referral source — run it as all four.",
        "Record the baseline before you touch anything.",
        "Over-deliver on responsiveness and clarity, not on scope.",
        "Ask at the moment of satisfaction, and ask for a specific referral rather than a vague one.",
      ],
    },
  ],
};
