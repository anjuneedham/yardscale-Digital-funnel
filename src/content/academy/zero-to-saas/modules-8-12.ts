import type { CourseModule } from "../types";

export const module8: CourseModule = {
  slug: "module-8",
  number: 8,
  title: "Marketing and content",
  stage: "Customers",
  summary: "Pick one channel where your customers already are, and publish content that leads somewhere.",
  outcome: "A chosen channel, a four-week content plan and a path from content to signup.",
  access: "member",
  reviewed: false,
  reviewNotes: [
    "This is core to your background. Add your own content system: what you post, where, how often, and what you have seen work.",
    "Add real examples of a video or post and the action it led to.",
    "Confirm which platforms you want to recommend first.",
  ],
  lessons: [
    {
      slug: "pick-one-channel",
      number: 1,
      title: "Pick one channel",
      summary: "Being average on five platforms loses to being consistent on one. Choose by where your customer already pays attention.",
      objective: "Choose one primary marketing channel and commit to it for a fixed period.",
      durationMinutes: 8,
      blocks: [
        {
          type: "text",
          body: "Marketing a new product is not about being everywhere. It is about showing up repeatedly in one place where your specific customer already spends time, saying something useful about a problem they have.",
        },
        {
          type: "framework",
          title: "Choosing the channel",
          steps: [
            { label: "Where are they?", detail: "From your interviews: which platforms, groups, forums or events did customers mention? Go there, not where you are comfortable." },
            { label: "What can you sustain?", detail: "Video, writing, conversation. Pick a format you can keep producing every week for three months." },
            { label: "How direct is it?", detail: "For the first customers, channels where you can talk to individuals beat channels where you broadcast to strangers." },
            { label: "Commit", detail: "One channel, a fixed schedule, twelve weeks. Judge it at the end, not after two posts." },
          ],
        },
        { type: "heading", text: "Channel types" },
        {
          type: "list",
          items: [
            "Direct outreach — messages and conversations with people who fit the profile. Slow, and the most reliable way to a first customer.",
            "Communities — groups where your customers already talk. Be useful first; mention the product when it is relevant.",
            "Short and long video — strong for showing a product and building trust in the person behind it.",
            "Search — people looking for a solution right now. Slow to build, lasting once it works.",
            "Paid ads — can work once you know your message converts. Expensive as a way to find out.",
          ],
        },
        {
          type: "callout",
          tone: "warn",
          title: "Ads are not a first step",
          body: "Paying for traffic before you know which message makes a customer act is the fastest way to spend money and learn nothing.",
        },
      ],
      exercise: {
        title: "Choose and commit",
        prompt: "One channel, in writing.",
        steps: [
          "List every place your interviewees said they spend time or look for help.",
          "Score each for customer presence, your ability to sustain it and directness.",
          "Pick one. Write your schedule for twelve weeks.",
        ],
      },
      implementationTask: "Publish or send your first piece on the chosen channel this week.",
      recap: [
        "Go where the customer already is.",
        "One channel, twelve weeks.",
        "Earn attention before you pay for it.",
      ],
    },
    {
      slug: "content-that-leads-somewhere",
      number: 2,
      title: "Content that leads somewhere",
      summary: "Content is only marketing if it ends with a next step. Build the path before you build the audience.",
      objective: "Plan four weeks of content where every piece has a next action.",
      durationMinutes: 9,
      blocks: [
        {
          type: "text",
          body: "Views are not customers. A piece of content does its job when the right person sees it, recognises their problem, and has an obvious thing to do next. Most founder content fails at the last step.",
        },
        {
          type: "framework",
          title: "The content path",
          steps: [
            { label: "Content", detail: "One idea, for one customer, about one problem. It should be useful even if they never buy." },
            { label: "Destination", detail: "One link, always the same: your landing page or a specific resource." },
            { label: "Capture", detail: "A way to stay in touch — an email signup, a waitlist, a community. Platforms control your reach. Your email list is yours." },
            { label: "Follow-up", detail: "Something sent to the people who signed up. Even one useful email a fortnight." },
            { label: "Offer", detail: "A clear invitation to try or buy, made regularly rather than once." },
          ],
        },
        { type: "heading", text: "What to make" },
        {
          type: "list",
          items: [
            "Build in public: what you shipped this week and what you learned. Your build log is the source.",
            "The problem, explained: describe the customer's situation better than they can.",
            "How-to: solve a small adjacent problem for free.",
            "Behind a decision: why you cut a feature, changed a price, picked a customer.",
            "The product doing the job: a short, real demonstration.",
          ],
        },
        {
          type: "callout",
          tone: "signal",
          title: "Document, do not perform",
          body: "You do not need to be an expert on camera. You need to show real work honestly. People trust a founder who shows what went wrong more than one who only shows wins.",
        },
        {
          type: "callout",
          tone: "muted",
          title: "Know where signups come from",
          body: "Add a simple source tag to each link you share, so you can see which platform and which piece of content produced a signup. Without it you are guessing what to make more of.",
        },
      ],
      exercise: {
        title: "Four-week plan",
        prompt: "Plan it once so you are never staring at a blank page.",
        steps: [
          "Write the content path for your product: destination, capture, follow-up, offer.",
          "List twelve content ideas, pulling from your build log and interview notes.",
          "Schedule them across four weeks and write the next action for each one.",
        ],
      },
      template: {
        title: "Content planner (per piece)",
        body: "IDEA (one sentence):\nWHO IT IS FOR:\nFORMAT / PLATFORM:\nTHE ONE POINT:\nNEXT ACTION FOR THE VIEWER:\nLINK USED (with source tag):\nPUBLISH DATE:",
      },
      implementationTask: "Check the whole path yourself: open your latest piece, follow the link, sign up, and confirm you receive the follow-up.",
      checklist: [
        "Destination and capture are live",
        "Twelve ideas listed",
        "Each piece has one next action",
        "Links carry a source tag",
        "Path tested end to end",
      ],
      recap: [
        "Every piece needs a next step.",
        "Own the list; rent the platform.",
        "Show real work, including what failed.",
      ],
    },
  ],
};

export const module9: CourseModule = {
  slug: "module-9",
  number: 9,
  title: "Customer acquisition and sales",
  stage: "Customers",
  summary: "Get the first ten customers by hand, then turn what worked into a simple, repeatable sales process.",
  outcome: "A prospect list, an outreach message and a tracked pipeline.",
  access: "member",
  reviewed: false,
  reviewNotes: [
    "Sales is where you started. Add how you actually open and run a sales conversation, and the mistakes you see founders make.",
    "Add a real objection you hear and how you answer it.",
    "Add how the first users or customers of one of your products were found.",
  ],
  lessons: [
    {
      slug: "the-first-ten-customers-by-hand",
      number: 1,
      title: "The first ten customers by hand",
      summary: "The first customers are not found by marketing. They are found one at a time, by name.",
      objective: "Build a named prospect list and start direct outreach.",
      durationMinutes: 9,
      blocks: [
        {
          type: "text",
          body: "Nobody's first ten customers came from a funnel. They came from the founder contacting people individually, showing them the product and asking them to buy. It does not scale, and it is not supposed to. It is how you learn what makes someone say yes.",
        },
        {
          type: "framework",
          title: "Doing it by hand",
          steps: [
            { label: "Build a list of fifty", detail: "Named people or businesses that match your customer profile. Start with interviewees and beta users, then their referrals." },
            { label: "Write a short, honest message", detail: "Who you are, the specific problem, what you built, and one small ask. No pitch deck." },
            { label: "Show, do not tell", detail: "A ten-minute demonstration of the product doing their job, using their example if possible." },
            { label: "Ask for the decision", detail: "At the end, ask directly whether they want to start. Then wait." },
            { label: "Follow up", detail: "Most yeses come after the second or third contact. Following up is not pestering; it is the job." },
          ],
        },
        {
          type: "callout",
          tone: "signal",
          title: "Selling is finding out",
          body: "A sales conversation is the same skill as a customer interview: ask about their situation, listen, and only then show how the product fits. If it does not fit, say so. That honesty is what gets you referrals.",
        },
        { type: "heading", text: "Make it easy to say yes" },
        {
          type: "list",
          items: [
            "Offer to set it up for them.",
            "Offer a trial period with a clear end.",
            "Offer early-customer pricing that is honoured for as long as they stay.",
            "Give them a direct line to you.",
          ],
        },
      ],
      exercise: {
        title: "List and message",
        prompt: "Fifty names and one message.",
        steps: [
          "Build the list of fifty in a spreadsheet: name, how you know them, contact, status.",
          "Write your outreach message with the template. Keep it under a hundred words.",
          "Send ten today. Send ten more each day this week.",
        ],
      },
      template: {
        title: "Outreach message",
        body: "Hi [NAME] — [ONE LINE ON HOW YOU FOUND THEM OR WHAT YOU HAVE IN COMMON].\n\nI have been talking to [TYPE OF CUSTOMER] about [PROBLEM], and built a small tool that [OUTCOME].\n\nWould you be open to a ten-minute look this week? If it is not useful, I will not follow up again.\n\n[YOUR NAME]",
      },
      implementationTask: "Run five demonstrations this fortnight. After each, record what they asked, what they objected to, and what they decided.",
      recap: [
        "The first ten are found by name, one at a time.",
        "Listen first, show second, ask third.",
        "Follow up. Most founders stop one message too early.",
      ],
    },
    {
      slug: "a-simple-sales-process",
      number: 2,
      title: "A simple sales process",
      summary: "Once a few people have bought, write down how it happened. That is your sales process.",
      objective: "Set up a pipeline and a standard way of handling objections and follow-up.",
      durationMinutes: 8,
      blocks: [
        {
          type: "text",
          body: "A sales process is just the steps a stranger goes through to become a customer, written down so you can see where people get stuck. You do not need software. A spreadsheet with one row per prospect is enough for your first hundred.",
        },
        {
          type: "framework",
          title: "Pipeline stages",
          steps: [
            { label: "Identified", detail: "They fit the profile and you have a way to reach them." },
            { label: "Contacted", detail: "You have sent a message. Record the date." },
            { label: "In conversation", detail: "They replied or took a call." },
            { label: "Shown", detail: "They have seen the product do the job." },
            { label: "Decided", detail: "Yes, no, or not now — with the reason. 'Not now' gets a date to come back." },
          ],
        },
        { type: "heading", text: "Handling objections" },
        {
          type: "text",
          body: "An objection is information, not rejection. Write down every one you hear. After twenty conversations you will find there are only four or five, and you can prepare an honest answer to each.",
        },
        {
          type: "list",
          items: [
            "'It is too expensive' — usually means the value is not clear yet. Return to what the problem costs them.",
            "'I need to think about it' — ask what specifically they need to think through.",
            "'We already use something' — ask what they would change about it.",
            "'Now is not a good time' — ask when would be, and put it in the pipeline.",
          ],
        },
        {
          type: "callout",
          tone: "muted",
          title: "Review the pipeline weekly",
          body: "Count how many prospects moved from each stage to the next. The stage where most people stop is the part of your process to fix next.",
        },
        {
          type: "callout",
          tone: "warn",
          title: "A no is useful",
          body: "Do not argue someone into buying. A customer who was pushed leaves quickly and tells others. Record the reason and move on.",
        },
      ],
      exercise: {
        title: "Build the pipeline",
        prompt: "Make where everyone stands visible.",
        steps: [
          "Add a stage, last contact date and next step column to your prospect list.",
          "Place every prospect in a stage.",
          "List the objections you have heard and write a two-sentence honest answer to each.",
        ],
      },
      implementationTask: "Hold a fifteen-minute pipeline review every week. Record the conversion between each pair of stages.",
      checklist: [
        "Every prospect has a stage and a next step",
        "Follow-up dates set",
        "Objection list written with answers",
        "Weekly review in the calendar",
      ],
      recap: [
        "Write down how your first sales happened.",
        "A spreadsheet pipeline is enough.",
        "Fix the stage where most people stop.",
      ],
    },
  ],
};

export const module10: CourseModule = {
  slug: "module-10",
  number: 10,
  title: "Onboarding and retention",
  stage: "Customers → Growth",
  summary: "Get new customers to the outcome fast, and find out why the ones who leave are leaving.",
  outcome: "A defined activation moment, an onboarding checklist and a churn log.",
  access: "member",
  reviewed: false,
  reviewNotes: [
    "Add what onboarding real users onto one of your products has taught you.",
    "Add a real reason a user stopped using a product and what you changed.",
  ],
  lessons: [
    {
      slug: "time-to-first-value",
      number: 1,
      title: "Time to first value",
      summary: "A new customer decides whether to stay within the first session. Your job is to get them to the outcome before they leave.",
      objective: "Define your activation moment and remove every step in front of it.",
      durationMinutes: 8,
      blocks: [
        {
          type: "text",
          body: "The moment a customer first gets the outcome they came for is called activation. Everything before it is friction. The longer it takes, the more people give up, however good the product is on the other side.",
        },
        {
          type: "framework",
          title: "Shortening the path",
          steps: [
            { label: "Name the activation moment", detail: "One specific event: first booking received, first invoice sent, first listing published." },
            { label: "List every step before it", detail: "From signup to that moment. Count the screens, fields and decisions." },
            { label: "Remove or delay", detail: "Anything not needed to reach activation moves to after it. Profile details, preferences, invitations." },
            { label: "Fill the blank page", detail: "An empty product is intimidating. Provide an example, a template or sensible defaults." },
            { label: "Guide the first run", detail: "A short checklist or a welcome message that says exactly what to do first." },
          ],
        },
        {
          type: "callout",
          tone: "signal",
          title: "Onboard the first customers yourself",
          body: "A personal welcome message and an offer to set things up together does more for early retention than any automated tour. You will also see precisely where people get stuck.",
        },
        { type: "heading", text: "The first messages" },
        {
          type: "list",
          items: [
            "Immediately: a welcome that states the one thing to do first.",
            "After a day with no activation: a nudge and an offer of help.",
            "After activation: confirm what they achieved and show the next useful thing.",
          ],
        },
      ],
      exercise: {
        title: "Map the first run",
        prompt: "See it the way a new customer does.",
        steps: [
          "Write your activation moment as a single event.",
          "Sign up as a brand new user and time how long it takes to reach it.",
          "List every step. Mark each as needed, can be delayed or can be removed.",
        ],
      },
      implementationTask: "Remove or delay at least two steps before activation, and write the three onboarding messages.",
      checklist: [
        "Activation moment defined as one event",
        "Time to activation measured",
        "Unnecessary steps removed or delayed",
        "No blank first screen",
        "Three onboarding messages written",
      ],
      recap: [
        "Activation is the first real outcome.",
        "Everything before it is friction.",
        "Onboard early customers personally.",
      ],
    },
    {
      slug: "retention-and-churn",
      number: 2,
      title: "Retention and churn",
      summary: "Keeping a customer is cheaper than finding one. Start by finding out why people leave.",
      objective: "Track retention simply and build a habit of asking why customers leave.",
      durationMinutes: 8,
      blocks: [
        {
          type: "text",
          body: "A subscription business grows when more customers stay than leave. If customers leave as fast as they arrive, more marketing only makes you busier. Before you scale acquisition, you need to know that people who start, stay.",
        },
        {
          type: "framework",
          title: "Why customers leave",
          steps: [
            { label: "They never activated", detail: "They signed up and never reached the outcome. An onboarding problem." },
            { label: "The problem went away", detail: "It was a one-off need. A positioning or customer-choice problem." },
            { label: "It did not fit how they work", detail: "The product solves the problem in a way that does not suit them. A product problem." },
            { label: "Something better or cheaper", detail: "A competitor or a workaround won. Find out which, and why." },
            { label: "It broke or they were ignored", detail: "Bugs and slow support. The most preventable reason of all." },
          ],
        },
        { type: "heading", text: "A simple retention routine" },
        {
          type: "list",
          items: [
            "Each month, count customers at the start, new customers and customers who left.",
            "Ask every customer who cancels one question: what is the main reason?",
            "Keep a churn log: who, when, how long they stayed, the reason in their words.",
            "Watch for customers who have gone quiet, and contact them before they cancel.",
          ],
        },
        {
          type: "callout",
          tone: "signal",
          title: "Talk to the ones who stay, too",
          body: "Ask your most active customers what they would miss if the product disappeared. Their answer is your real value, and usually your best marketing line.",
        },
        {
          type: "callout",
          tone: "muted",
          title: "Make leaving easy",
          body: "A cancel button that works earns more trust than a maze. Customers who leave on good terms sometimes come back, and often refer others.",
        },
      ],
      exercise: {
        title: "Start the churn log",
        prompt: "You cannot fix what you are not recording.",
        steps: [
          "Create a churn log with: customer, start date, end date, reason, what would have kept them.",
          "Contact the last three people who stopped using the product and ask why.",
          "Contact your three most active users and ask what they would miss.",
        ],
      },
      implementationTask: "Add a one-question exit survey to your cancellation step, and review the churn log at every monthly review.",
      recap: [
        "Fix retention before you scale acquisition.",
        "Ask everyone who leaves why.",
        "Your most active customers will tell you what you are really selling.",
      ],
    },
  ],
};

export const module11: CourseModule = {
  slug: "module-11",
  number: 11,
  title: "Operations and systems",
  stage: "Growth",
  summary: "The minimum set of systems that stop the business depending on your memory, and the handful of numbers worth watching.",
  outcome: "A one-page operations sheet and a weekly metrics review.",
  access: "member",
  reviewed: false,
  reviewNotes: [
    "Add the actual tools and routines you use to run your products day to day.",
    "Legal, tax and data protection requirements vary by country — confirm how you want this caveat worded and whether to point to specific resources.",
    "Add a real incident (outage, lost data, missed message) and what system you put in place afterwards.",
  ],
  lessons: [
    {
      slug: "the-founders-minimum-systems",
      number: 1,
      title: "The founder's minimum systems",
      summary: "You do not need a company's worth of process. You need six things to not go wrong.",
      objective: "Set up a minimum operating system for a small SaaS.",
      durationMinutes: 9,
      blocks: [
        {
          type: "text",
          body: "Operations sounds like something for larger companies. For a solo founder it means one thing: when a customer has a problem, a payment fails or the product goes down, you find out quickly and know what to do. Set this up before you need it.",
        },
        {
          type: "framework",
          title: "The six minimum systems",
          steps: [
            { label: "Support", detail: "One place customers can reach you, and a promise about how fast you reply. A shared inbox is enough." },
            { label: "Billing", detail: "A payment provider handling subscriptions, receipts and failed payments. Know how to refund." },
            { label: "Monitoring", detail: "An alert when the product is down or throwing errors. You should hear before your customers tell you." },
            { label: "Backups", detail: "Automatic backups of customer data, and one test that you can actually restore from them." },
            { label: "Access and security", detail: "A password manager, two-factor authentication on every critical account, and a list of what you have access to." },
            { label: "The basics on paper", detail: "Terms of use, a privacy policy and the business registration your country requires." },
          ],
        },
        {
          type: "callout",
          tone: "warn",
          title: "This is not legal advice",
          body: "Rules on business registration, tax and personal data differ between countries. Find out what applies where you and your customers are, and get professional advice where money or personal data is involved.",
        },
        { type: "heading", text: "Write things down once" },
        {
          type: "text",
          body: "Any task you do a third time deserves a short written procedure: the steps, in order, with links. It makes the task faster now and possible to hand over later. Automate only after the manual version is stable.",
        },
      ],
      exercise: {
        title: "Operations sheet",
        prompt: "One page that answers 'what do I do when…'.",
        steps: [
          "For each of the six systems, write what you use and where to find it.",
          "Write what happens when: the site is down, a payment fails, a customer asks for a refund, a customer asks for their data to be deleted.",
          "Test one backup restore.",
        ],
      },
      template: {
        title: "Operations sheet",
        body: "SUPPORT — channel / reply-time promise:\nBILLING — provider / how to refund:\nMONITORING — tool / who gets alerted:\nBACKUPS — how often / last restore test:\nACCESS — password manager / 2FA on:\nLEGAL — terms / privacy policy / registration:\n\nIF THE SITE IS DOWN:\nIF A PAYMENT FAILS:\nIF A CUSTOMER WANTS A REFUND:\nIF A CUSTOMER WANTS THEIR DATA REMOVED:",
      },
      implementationTask: "Complete the operations sheet and close every gap marked 'none' within two weeks.",
      recap: [
        "Operations means finding out fast and knowing what to do.",
        "Six systems cover most of what goes wrong.",
        "Write it down on the third repetition.",
      ],
    },
    {
      slug: "metrics-and-the-weekly-review",
      number: 2,
      title: "Metrics and the weekly review",
      summary: "Five numbers and fifteen minutes a week tell you more than any dashboard.",
      objective: "Choose your core metrics and run a weekly business review.",
      durationMinutes: 7,
      blocks: [
        {
          type: "text",
          body: "It is easy to track everything and understand nothing. A small product needs a handful of numbers that follow the customer's path, looked at on the same day each week, with one decision made as a result.",
        },
        {
          type: "framework",
          title: "Five numbers",
          steps: [
            { label: "New visitors or leads", detail: "How many of the right people found you this week, and from where." },
            { label: "Signups", detail: "How many started." },
            { label: "Activated", detail: "How many reached the activation moment." },
            { label: "Paying customers", detail: "Total, new this week, and lost this week." },
            { label: "Recurring revenue", detail: "What the business will bring in next month if nothing changes." },
          ],
        },
        { type: "heading", text: "The weekly review" },
        {
          type: "list",
          ordered: true,
          items: [
            "Write this week's five numbers next to last week's.",
            "Find the biggest drop between two stages. That is your constraint.",
            "Read every piece of customer feedback from the week.",
            "Choose next week's one outcome, aimed at the constraint.",
            "Write it in the build log.",
          ],
        },
        {
          type: "callout",
          tone: "signal",
          title: "Numbers point, customers explain",
          body: "A metric tells you where the problem is. It never tells you why. For the why, talk to the people behind the number.",
        },
        {
          type: "callout",
          tone: "muted",
          title: "Early numbers are small",
          body: "With ten customers, one cancellation looks like a crisis in a chart. Read small numbers as individual stories, not as trends.",
        },
      ],
      exercise: {
        title: "First weekly review",
        prompt: "Do it once properly to set the habit.",
        steps: [
          "Define exactly how you count each of the five numbers.",
          "Record this week's figures, even if several are zero.",
          "Identify the biggest drop and choose next week's outcome.",
        ],
      },
      implementationTask: "Book the weekly review as a recurring appointment and keep the numbers in one simple sheet.",
      checklist: [
        "Five numbers defined",
        "First week recorded",
        "Constraint identified",
        "Next outcome chosen",
        "Review booked as recurring",
      ],
      recap: [
        "Five numbers that follow the customer's path.",
        "The biggest drop is the constraint.",
        "One decision per review.",
      ],
    },
  ],
};

export const module12: CourseModule = {
  slug: "module-12",
  number: 12,
  title: "Growth and scaling",
  stage: "Growth",
  summary: "Find the one thing limiting growth, fix it, and repeat — and know when adding more would only break what works.",
  outcome: "A named constraint, a ninety-day plan and a rule for what to scale next.",
  access: "member",
  reviewed: false,
  reviewNotes: [
    "This module is the thinnest on first-hand material. Add your own experience of growing a product past its first customers as it happens.",
    "Decide how this module should hand off to the Growth Operator System course.",
  ],
  lessons: [
    {
      slug: "find-the-constraint",
      number: 1,
      title: "Find the constraint",
      summary: "At any moment one stage limits growth. Improving anything else changes nothing.",
      objective: "Identify the single constraint on your growth and plan to relieve it.",
      durationMinutes: 8,
      blocks: [
        {
          type: "text",
          body: "When growth stalls, the instinct is to add: more content, more features, more channels. But a business is a chain of stages, and its output is set by the weakest one. Strengthening a strong link does nothing. Growth is the discipline of finding the weak one.",
        },
        {
          type: "framework",
          title: "Where growth gets stuck",
          steps: [
            { label: "Attention", detail: "Not enough of the right people know you exist." },
            { label: "Interest", detail: "People arrive but do not understand or care. A positioning problem." },
            { label: "Signup", detail: "They understand but do not start. An offer or trust problem." },
            { label: "Activation", detail: "They start but never reach the outcome. An onboarding problem." },
            { label: "Payment", detail: "They get value but do not pay. A pricing or value problem." },
            { label: "Retention", detail: "They pay, then leave. A product or fit problem." },
          ],
        },
        {
          type: "callout",
          tone: "signal",
          title: "Fix from the bottom up",
          body: "If retention is poor, more attention just fills a leaking bucket faster. Check the later stages first, and only push more people in at the top once those hold.",
        },
        { type: "heading", text: "Relieving a constraint" },
        {
          type: "list",
          ordered: true,
          items: [
            "Use your five numbers to find the stage with the biggest drop.",
            "Talk to five people who dropped at that stage.",
            "Form one specific explanation.",
            "Make one change aimed at it.",
            "Measure for long enough to tell, then keep it or undo it.",
          ],
        },
        {
          type: "callout",
          tone: "muted",
          title: "Go deeper",
          body: "Diagnosing and relieving growth constraints is the subject of YardScale's second course, The Growth Operator System, available in the Academy.",
        },
      ],
      exercise: {
        title: "Name the constraint",
        prompt: "One stage. Not three.",
        steps: [
          "Lay out your numbers across the six stages.",
          "Mark the biggest proportional drop.",
          "Write one sentence: growth is currently limited by [stage] because [evidence].",
        ],
      },
      implementationTask: "Run one change aimed at the constraint and record the before and after in your build log.",
      recap: [
        "One stage limits growth at a time.",
        "Fix later stages before adding attention.",
        "One change, measured, then decide.",
      ],
    },
    {
      slug: "scale-what-works-then-repeat",
      number: 2,
      title: "Scale what works, then repeat",
      summary: "Scaling is doing more of something already proven. Doing more of something unproven is just spending.",
      objective: "Decide what to scale next and write a ninety-day plan.",
      durationMinutes: 8,
      blocks: [
        {
          type: "text",
          body: "Scaling has a precondition: something that already works at small size. A channel that reliably produces customers. An onboarding that reliably activates them. A product they keep paying for. Until those hold, the work is still finding, not scaling.",
        },
        {
          type: "framework",
          title: "Ready to scale?",
          steps: [
            { label: "Repeatable", detail: "You can describe how a customer is acquired, and it has happened the same way more than a handful of times." },
            { label: "Retained", detail: "Customers who start mostly stay. You know why the ones who leave do." },
            { label: "Affordable", detail: "A customer is worth clearly more to you than it costs to get one." },
            { label: "Sustainable", detail: "The business would survive you taking a week off." },
          ],
        },
        { type: "heading", text: "What to add, in order" },
        {
          type: "list",
          ordered: true,
          items: [
            "More of the channel that works, until it stops improving.",
            "Automation of the manual steps you have repeated enough to understand.",
            "Help for the task that takes most of your time and least of your judgement.",
            "A second channel, only when the first is stable.",
            "New features, driven by patterns in what paying customers ask for.",
          ],
        },
        {
          type: "callout",
          tone: "warn",
          title: "What breaks first",
          body: "Growth exposes whatever you were doing by hand: support, onboarding, billing questions. Before pushing volume, ask what would break at three times the customers, and fix that first.",
        },
        {
          type: "callout",
          tone: "signal",
          title: "Then go round again",
          body: "Relieve one constraint and another appears somewhere else. That is not failure. It is what a growing business looks like. The seven stages are a loop you keep walking with better information each time.",
        },
      ],
      exercise: {
        title: "Ninety-day plan",
        prompt: "One page, three months, one focus.",
        steps: [
          "Score yourself honestly against the four readiness tests.",
          "If any fail, that is your ninety-day focus. If all pass, choose the next item from the order above.",
          "Write the plan: the one focus, three monthly milestones, the number that will tell you it worked.",
        ],
      },
      template: {
        title: "Ninety-day plan",
        body: "CURRENT CONSTRAINT:\n\nTHE ONE FOCUS FOR 90 DAYS:\n\nMONTH 1 MILESTONE:\nMONTH 2 MILESTONE:\nMONTH 3 MILESTONE:\n\nTHE NUMBER THAT TELLS ME IT WORKED:\n\nWHAT I WILL NOT DO IN THIS PERIOD:\n\nWHAT WOULD BREAK AT 3X CUSTOMERS:",
      },
      implementationTask: "Revise your founder brief one last time with what you now know, and share your ninety-day plan with someone who will hold you to it.",
      checklist: [
        "Four readiness tests scored",
        "One ninety-day focus chosen",
        "Three milestones set",
        "Success number defined",
        "Plan shared with someone",
      ],
      recap: [
        "Scale only what already works.",
        "Ask what breaks at three times the size.",
        "The journey is a loop. Go round again.",
      ],
    },
  ],
};
