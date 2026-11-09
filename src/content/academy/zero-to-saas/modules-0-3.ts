import type { CourseModule } from "../types";

export const module0: CourseModule = {
  slug: "module-0",
  number: 0,
  title: "Founder mindset and the SaaS journey",
  stage: "Idea",
  summary: "What you are actually signing up for, the seven stages every product goes through, and the weekly rhythm that keeps you moving.",
  outcome: "A one-page founder brief and a weekly operating rhythm you can keep.",
  access: "open",
  reviewed: false,
  reviewNotes: [
    "Add your own account of moving from sales to marketing to building software — what changed in how you think about products.",
    "Add a real week from your own build log as the worked example in lesson 2.",
    "Confirm the time commitment you would honestly recommend to a first-time founder with a job.",
  ],
  lessons: [
    {
      slug: "what-you-are-signing-up-for",
      number: 1,
      title: "What you are actually signing up for",
      summary: "A SaaS is not a piece of software. It is a business that happens to deliver its value through software.",
      objective: "See the whole journey before you start, so you stop mistaking one stage for the entire job.",
      durationMinutes: 8,
      blocks: [
        {
          type: "text",
          body: "Most first-time founders think the job is building the product. Building is one stage out of seven. A working app with no customers is a hobby. A clear problem, a small product and ten paying customers is a business. This course is about the second thing.",
        },
        { type: "heading", text: "The seven stages" },
        {
          type: "framework",
          title: "Idea to growth",
          steps: [
            { label: "Idea", detail: "A specific problem, for a specific person, that you can describe in one sentence." },
            { label: "Validation", detail: "Evidence from real people that the problem is real and worth paying to solve." },
            { label: "Planning", detail: "The smallest product that solves the problem, written down before any code." },
            { label: "Building", detail: "The first version, built in small tested steps." },
            { label: "Launch", detail: "Real users in a beta, real feedback, a first price." },
            { label: "Customers", detail: "The first paying customers, found by hand." },
            { label: "Growth", detail: "Systems that keep customers arriving and staying without you doing everything manually." },
          ],
        },
        {
          type: "callout",
          tone: "signal",
          title: "The rule this course runs on",
          body: "Work on the stage you are actually at. Designing a logo before you have spoken to a customer, or planning a referral program before anyone has paid, feels productive and moves nothing.",
        },
        { type: "heading", text: "What it costs" },
        {
          type: "list",
          items: [
            "Time, consistently. A few focused hours every week beats one heroic weekend a month.",
            "Being wrong in public. Your first idea, first price and first landing page will all need changing.",
            "Talking to people. The stages most founders skip are the ones that involve other humans.",
            "Patience. Nothing in this course promises a result. It gives you a sound process and honest checkpoints.",
          ],
        },
        {
          type: "callout",
          tone: "warn",
          title: "No guarantees",
          body: "Following a good process improves your odds. It does not guarantee customers or revenue. Anyone who tells you otherwise is selling something.",
        },
      ],
      exercise: {
        title: "Locate yourself",
        prompt: "Be honest about which stage you are really at — not which one you would like to be at.",
        steps: [
          "For each of the seven stages, write one sentence of evidence that you have completed it. No evidence means not completed.",
          "Circle the earliest stage with no evidence. That is where you are.",
          "Write down what you have been working on this month. Does it belong to that stage?",
        ],
      },
      implementationTask: "Write your one-page founder brief using the template below. Keep it. You will revise it at the end of every module.",
      template: {
        title: "One-page founder brief",
        body: "THE PROBLEM I THINK EXISTS:\n\nWHO HAS IT:\n\nWHY I AM A GOOD PERSON TO SOLVE IT:\n\nSTAGE I AM HONESTLY AT:\n\nHOURS PER WEEK I CAN PROTECT:\n\nWHAT I WILL STOP DOING TO MAKE THAT TIME:\n\nWHAT WOULD MAKE ME STOP OR CHANGE DIRECTION:",
      },
      recap: [
        "A SaaS is a business first and software second.",
        "There are seven stages. Each depends on the one before it.",
        "Work on the stage you are actually at.",
      ],
    },
    {
      slug: "the-founder-operating-rhythm",
      number: 2,
      title: "The founder operating rhythm",
      summary: "Motivation runs out. A weekly rhythm does not. This is the one this course assumes you are keeping.",
      objective: "Set up a weekly cycle of deciding, building, shipping and reviewing.",
      durationMinutes: 7,
      blocks: [
        {
          type: "text",
          body: "The founders who finish are rarely the most talented. They are the ones still showing up in week twelve. You get there with a rhythm that tells you what to do when you sit down, so you never spend your limited hours deciding where to start.",
        },
        {
          type: "framework",
          title: "The weekly cycle",
          steps: [
            { label: "Decide", detail: "At the start of the week, pick one outcome for the stage you are at. One. Write it as something that is either done or not done." },
            { label: "Build", detail: "Spend your protected hours on that outcome only. New ideas go on a list, not into the week." },
            { label: "Ship", detail: "Put something in front of another person: a customer, a tester, the community. Unshipped work teaches you nothing." },
            { label: "Review", detail: "Fifteen minutes at the end of the week. What shipped, what you learned, what the next outcome is." },
          ],
        },
        { type: "heading", text: "Keep a build log" },
        {
          type: "text",
          body: "A build log is a running document with one entry per week. It is your memory, your accountability and, later, your content. Three lines is enough: what shipped, what you learned, what is next.",
        },
        {
          type: "example",
          title: "Illustrative entry",
          body: "Week 4. Shipped: five customer interviews booked, three completed. Learned: nobody mentioned the feature I assumed was the main one; two people described the same workaround in a spreadsheet. Next: finish interviews, rewrite the problem statement.",
        },
        {
          type: "callout",
          tone: "muted",
          title: "When a week goes badly",
          body: "It will. Write the entry anyway: nothing shipped, and why. A missed week you recorded is recoverable. Three you did not notice is how projects end.",
        },
      ],
      exercise: {
        title: "Set your rhythm",
        prompt: "Make the rhythm concrete enough that it survives a bad week.",
        steps: [
          "Block your protected hours in your calendar for the next four weeks.",
          "Choose where your build log lives and write the first entry today.",
          "Pick one person or community you will report to each week.",
        ],
      },
      implementationTask: "Write this week's single outcome for the stage you are at, and post it somewhere another person will see it.",
      checklist: [
        "Protected hours are in the calendar for four weeks",
        "Build log exists and has a first entry",
        "This week's one outcome is written as done / not done",
        "Someone else knows what you committed to",
      ],
      recap: [
        "Decide, build, ship, review — every week.",
        "One outcome per week, for the stage you are at.",
        "The build log is your memory and your raw material for content.",
      ],
    },
  ],
};

export const module1: CourseModule = {
  slug: "module-1",
  number: 1,
  title: "Finding and validating ideas",
  stage: "Idea → Validation",
  summary: "Where good SaaS ideas come from, how to write one down so it can be tested, and how to test it before you build.",
  outcome: "A written problem statement and a validation result you can defend.",
  access: "member",
  reviewed: false,
  reviewNotes: [
    "Add the real origin of one of your own product ideas — where the problem came from.",
    "Add an idea you dropped after validation, and what the evidence was.",
    "Confirm the validation thresholds below match what you would actually advise.",
  ],
  lessons: [
    {
      slug: "where-good-ideas-come-from",
      number: 1,
      title: "Where good SaaS ideas come from",
      summary: "Good ideas are found, not invented. They start as a problem somebody is already working around.",
      objective: "Produce three candidate problems and write each as a testable problem statement.",
      durationMinutes: 9,
      blocks: [
        {
          type: "text",
          body: "An idea that begins with 'an app that…' is a solution looking for a problem. An idea that begins with 'these people keep having to…' is a problem looking for a solution. Only the second kind can be validated.",
        },
        {
          type: "framework",
          title: "Four places to look",
          steps: [
            { label: "Your own work", detail: "Tasks you have done repeatedly in a job or business, especially the ones done in spreadsheets, email threads or by copy and paste." },
            { label: "An industry you have access to", detail: "A trade, profession or community where you already know people. Access to customers is worth more than a clever idea." },
            { label: "Existing tools people complain about", detail: "Read reviews of software in a category. Repeated complaints from the same type of user point at an underserved segment." },
            { label: "Manual services", detail: "Work that people currently pay a person or agency to do the same way every time." },
          ],
        },
        { type: "heading", text: "Signs a problem is worth pursuing" },
        {
          type: "list",
          items: [
            "It happens often — weekly is better than yearly.",
            "It costs something visible: time, money, lost customers, stress.",
            "People have already tried to solve it, with a workaround or a tool they dislike.",
            "You can name where to find twenty of the people who have it.",
          ],
        },
        {
          type: "callout",
          tone: "warn",
          title: "The common trap",
          body: "A problem you find interesting is not the same as a problem someone will pay to remove. The workaround is the tell: if nobody has bothered to work around it, it probably does not hurt enough.",
        },
      ],
      exercise: {
        title: "Three candidate problems",
        prompt: "Generate options before you fall in love with one.",
        steps: [
          "List ten repetitive or frustrating tasks from your own work or an industry you can reach.",
          "For each, note how people handle it today.",
          "Pick the three with the clearest workaround and write a problem statement for each using the template.",
        ],
      },
      template: {
        title: "Problem statement",
        body: "[SPECIFIC PERSON] regularly has to [TASK OR SITUATION].\nToday they handle it by [CURRENT WORKAROUND].\nThis costs them [TIME / MONEY / RISK].\nI can reach these people through [WHERE THEY ARE].",
      },
      implementationTask: "Choose one of your three problem statements to take into validation. Write one sentence on why it beats the other two.",
      recap: [
        "Start from a problem, not a product.",
        "A workaround is evidence the problem hurts.",
        "Access to the customer matters as much as the idea.",
      ],
    },
    {
      slug: "validate-before-you-build",
      number: 2,
      title: "Validate before you build",
      summary: "Validation is collecting evidence that people would pay, in order from cheapest to strongest.",
      objective: "Design and run a validation test with a pass mark you set in advance.",
      durationMinutes: 10,
      blocks: [
        {
          type: "text",
          body: "Validation does not mean asking friends whether your idea is good. It means looking for behaviour: time given, details shared, money committed. Opinions are cheap. Behaviour costs the other person something, which is why it is believable.",
        },
        {
          type: "framework",
          title: "The evidence ladder",
          steps: [
            { label: "They describe the problem unprompted", detail: "In conversation, they bring up the problem and what it costs before you mention a solution." },
            { label: "They show you the workaround", detail: "They open the spreadsheet, the inbox or the tool they use today." },
            { label: "They give you something", detail: "An email address for a waitlist, an introduction to a colleague, time for a second call." },
            { label: "They commit", detail: "A pre-order, a deposit, a signed letter of intent, or agreeing to be a paying beta customer." },
          ],
        },
        {
          type: "callout",
          tone: "signal",
          title: "Set the pass mark first",
          body: "Before the test, write down what result means go and what means stop. If you decide after seeing the result, you will talk yourself into whatever you wanted to do anyway.",
        },
        { type: "heading", text: "Three simple tests" },
        {
          type: "list",
          items: [
            "Conversations: fifteen interviews with people who have the problem. Module 2 covers how to run them.",
            "A landing page: one page describing the problem and the outcome, with a waitlist. Send targeted traffic and count signups.",
            "A manual version: deliver the outcome by hand for a few customers before writing software.",
          ],
        },
        {
          type: "example",
          title: "Illustrative pass mark",
          body: "I will speak to fifteen people in the target group. Go if at least eight describe the problem unprompted and at least three ask to be told when something exists. Stop or change the problem if fewer than five describe it.",
        },
      ],
      exercise: {
        title: "Design your validation test",
        prompt: "Write the test down before you run it.",
        steps: [
          "Choose one of the three tests that fits your problem and your access to customers.",
          "Write your pass mark: the number that means go, and the number that means stop.",
          "Set a deadline no more than three weeks away.",
        ],
      },
      implementationTask: "Run the test. Record every result in your build log, including the ones that disappoint you.",
      checklist: [
        "Test chosen and written down",
        "Go and stop numbers set before starting",
        "Deadline set",
        "Results recorded as they happened",
        "Decision made: go, change the problem, or stop",
      ],
      recap: [
        "Look for behaviour, not opinions.",
        "Set the pass mark before the test.",
        "Stopping an idea early is a result, not a failure.",
      ],
    },
  ],
};

export const module2: CourseModule = {
  slug: "module-2",
  number: 2,
  title: "Customer and market research",
  stage: "Validation",
  summary: "How to interview customers so they tell you the truth, and how to judge whether the market is big enough to bother.",
  outcome: "Interview notes, a customer profile and a bottom-up market estimate.",
  access: "member",
  reviewed: false,
  reviewNotes: [
    "Add what you learned from sales about asking questions — this is your strongest first-hand material for this module.",
    "Add a real interview insight that changed one of your products.",
  ],
  lessons: [
    {
      slug: "customer-interviews-that-tell-the-truth",
      number: 1,
      title: "Customer interviews that tell the truth",
      summary: "People are polite. Ask about what they did, not what they would do, and you get facts instead of encouragement.",
      objective: "Run interviews that produce evidence you can act on.",
      durationMinutes: 10,
      blocks: [
        {
          type: "text",
          body: "If you describe your idea and ask what someone thinks, they will be kind and you will learn nothing. A useful interview barely mentions your idea. It is about their work, their last bad experience of the problem, and what they did about it.",
        },
        {
          type: "framework",
          title: "Questions that work",
          steps: [
            { label: "Tell me about the last time…", detail: "A specific recent event gives you real detail. 'Usually' and 'generally' give you guesses." },
            { label: "What did you do about it?", detail: "Reveals the workaround, and whether the problem mattered enough to act on." },
            { label: "What did that cost you?", detail: "Time, money, a customer, sleep. This is what your product will be priced against." },
            { label: "What have you tried?", detail: "Shows you the competition as the customer sees it, which is often a spreadsheet." },
            { label: "Who else deals with this?", detail: "Finds the real buyer, and gets you your next interview." },
          ],
        },
        { type: "heading", text: "Questions to avoid" },
        {
          type: "list",
          items: [
            "Would you use something that did X? — People say yes to hypotheticals.",
            "How much would you pay? — Nobody knows until they are asked to pay.",
            "Do you think this is a good idea? — You are asking for a compliment.",
          ],
        },
        {
          type: "callout",
          tone: "muted",
          title: "Finding people to talk to",
          body: "Start with anyone you know in the target group and ask each one for two introductions. Then go where they gather: trade groups, forums, local associations. A short, honest message works: you are researching a problem, you are not selling, and you want twenty minutes.",
        },
      ],
      exercise: {
        title: "Book five interviews",
        prompt: "The hardest part is asking. Do it this week.",
        steps: [
          "List twenty people or places where your target customer can be reached.",
          "Send ten short requests for a twenty-minute conversation.",
          "Run each interview with the script below and write notes within an hour of finishing.",
        ],
      },
      template: {
        title: "Interview script",
        body: "1. What is your role, and what does a normal week involve?\n2. Tell me about the last time you had to deal with [PROBLEM].\n3. What did you do about it?\n4. What did it cost you — time, money, anything else?\n5. What have you tried to make it easier?\n6. If it disappeared tomorrow, what would change for you?\n7. Who else should I talk to about this?\n\nAFTER THE CALL — record: exact phrases they used, the workaround, the cost, and whether they offered anything (time, an intro, interest).",
      },
      implementationTask: "Complete at least five interviews. After the fifth, write down the three phrases you heard more than once, in the customer's words.",
      recap: [
        "Ask about past behaviour, not future intentions.",
        "The workaround and the cost are the two facts you need.",
        "Keep the customer's exact words. They become your marketing.",
      ],
    },
    {
      slug: "sizing-the-market-and-reading-competitors",
      number: 2,
      title: "Sizing the market and reading competitors",
      summary: "You do not need a billion-dollar market. You need enough reachable customers, and a reason they would pick you.",
      objective: "Estimate your market from the bottom up and map the alternatives customers already use.",
      durationMinutes: 9,
      blocks: [
        {
          type: "text",
          body: "Top-down market sizes quoted from research reports are useless to a solo founder. What matters is how many customers you can actually reach, and what each is worth to you in a year.",
        },
        {
          type: "framework",
          title: "Bottom-up estimate",
          steps: [
            { label: "Count the reachable customers", detail: "How many businesses or people fit your profile in the places you can reach? Use directories, association lists, platform member counts." },
            { label: "Estimate a realistic share", detail: "A small single-digit percentage in the first couple of years is a sane planning assumption, not a prediction." },
            { label: "Multiply by yearly price", detail: "Customers × share × what one pays per year. This is a planning number to test, not a forecast." },
            { label: "Sanity check", detail: "Would that number make this worth your time? If not, the segment is too small or the price too low." },
          ],
        },
        { type: "heading", text: "Reading competitors" },
        {
          type: "text",
          body: "Competitors are good news: they prove people pay to solve the problem. Your job is not to have none. It is to find the customer they serve badly.",
        },
        {
          type: "list",
          items: [
            "List every alternative the customer mentioned, including doing nothing and using a spreadsheet.",
            "For each, note who it is built for, what it costs, and what its users complain about.",
            "Look for a group that is too small, too specific or too local for the big tools to care about.",
          ],
        },
        {
          type: "callout",
          tone: "signal",
          title: "Narrow beats broad",
          body: "A product for 'small businesses' competes with everyone. A product for one trade in one region competes with almost no one, and its customers all know each other.",
        },
      ],
      exercise: {
        title: "Market and competitor sheet",
        prompt: "Put numbers and names on paper.",
        steps: [
          "Count reachable customers from at least two sources and write down the sources.",
          "Work through the bottom-up estimate with a cautious share.",
          "Fill in a competitor grid: alternative, built for, price, main complaint.",
        ],
      },
      implementationTask: "Write a one-paragraph customer profile: who they are, where they are found, what they use today, and why they would switch.",
      checklist: [
        "Reachable customer count with sources",
        "Bottom-up yearly estimate written down",
        "At least four alternatives mapped, including 'do nothing'",
        "One underserved group identified",
        "Customer profile paragraph written",
      ],
      recap: [
        "Size the market from customers you can reach.",
        "Competitors prove demand.",
        "Pick the narrowest group that is still worth your time.",
      ],
    },
  ],
};

export const module3: CourseModule = {
  slug: "module-3",
  number: 3,
  title: "Product strategy and MVP definition",
  stage: "Planning",
  summary: "Decide the one job the product does, then cut the first version down to it.",
  outcome: "A core job statement and a one-page MVP scope with a ship date.",
  access: "member",
  reviewed: false,
  reviewNotes: [
    "Confirm the AgriLoop example is accurate and that you are happy for it to be used publicly.",
    "Add a feature you cut from an MVP and what happened as a result.",
    "Add how long your own first versions actually took against what you planned.",
  ],
  lessons: [
    {
      slug: "the-one-job",
      number: 1,
      title: "The one job",
      summary: "A first product that does one thing well beats one that does six things badly. Decide the one thing.",
      objective: "Write a core job statement and the value loop that delivers it.",
      durationMinutes: 8,
      blocks: [
        {
          type: "text",
          body: "Customers do not buy features. They hire a product to get a job done. Your research told you what the job is and what it costs them today. Product strategy at this stage is one decision: which single job does version one do?",
        },
        {
          type: "framework",
          title: "Core job statement",
          steps: [
            { label: "When…", detail: "The situation that triggers the need. Use the situation your interviewees described." },
            { label: "I want to…", detail: "The outcome they are after, in their words." },
            { label: "So that…", detail: "What it gets them: time back, money saved, a risk removed." },
            { label: "Without…", detail: "The pain of the current workaround that your product removes." },
          ],
        },
        { type: "heading", text: "The value loop" },
        {
          type: "text",
          body: "The value loop is the shortest path a new user takes from arriving to getting the outcome. Three to five steps. If you cannot draw it, the product is not defined yet. Everything in the MVP exists to make that loop work once, for one kind of user.",
        },
        {
          type: "example",
          title: "Illustrative value loop",
          body: "A booking tool for a mobile mechanic: customer opens link → picks a service and a time → mechanic gets a notification → both get a confirmation. Four steps. No accounts, no reviews, no payments in that loop.",
        },
        {
          type: "callout",
          tone: "warn",
          title: "If you have two jobs",
          body: "You have two products. Pick the one your interviews mentioned most and park the other. You can come back to it when the first one has customers.",
        },
      ],
      exercise: {
        title: "Define the job",
        prompt: "Write it using your customers' language, not yours.",
        steps: [
          "Write the core job statement using phrases from your interview notes.",
          "Draw the value loop in three to five steps.",
          "Read both to someone outside the project. If they cannot repeat it back, simplify.",
        ],
      },
      template: {
        title: "Core job statement",
        body: "WHEN [SITUATION],\nI WANT TO [OUTCOME],\nSO THAT [BENEFIT],\nWITHOUT [CURRENT PAIN].\n\nVALUE LOOP:\n1.\n2.\n3.\n4.",
      },
      implementationTask: "Add the core job statement and value loop to the top of your founder brief.",
      recap: [
        "Version one does one job.",
        "The value loop is the shortest path to the outcome.",
        "Two jobs means two products. Pick one.",
      ],
    },
    {
      slug: "cutting-the-mvp",
      number: 2,
      title: "Cutting the MVP",
      summary: "An MVP is finished when there is nothing left to remove. Most first versions are three times too big.",
      objective: "Produce a one-page scope that sorts every feature into now, later or never.",
      durationMinutes: 10,
      blocks: [
        {
          type: "text",
          body: "Scope is where most first products die. Every feature seems reasonable on its own. Together they add months, and the product never reaches a customer. The fix is a rule applied without mercy: if the value loop works without it, it is not in version one.",
        },
        {
          type: "framework",
          title: "Now, later, never",
          steps: [
            { label: "Now", detail: "The value loop cannot complete without it. This list should be uncomfortably short." },
            { label: "Later", detail: "Useful, expected eventually, but the first users can get the outcome without it. Most ideas go here." },
            { label: "Never (for now)", detail: "Things that serve a different customer or a different job. Write them down so they stop nagging you." },
          ],
        },
        { type: "heading", text: "What usually belongs in 'later'" },
        {
          type: "list",
          items: [
            "Payments inside the product — invoice manually or use a payment link first.",
            "Team accounts, roles and permissions.",
            "Dashboards, analytics and reports.",
            "Settings pages and customisation.",
            "Integrations with other tools.",
            "Native mobile apps, if a responsive web app will do.",
          ],
        },
        {
          type: "example",
          title: "From the studio: AgriLoop",
          body: "AgriLoop is a marketplace where farmers list produce and buyers order it. In its beta, buyers and farmers settle payment directly between themselves; the platform does not hold the money. Processing payments is a large piece of work with real risk attached. Leaving it out let the core loop — list, find, message, order — reach real users first.",
        },
        {
          type: "callout",
          tone: "signal",
          title: "Do it by hand first",
          body: "Anything that can be done manually behind the scenes for the first ten customers should be. Onboarding by video call, reports sent by email, data entered by you. You learn what to automate by doing it.",
        },
      ],
      exercise: {
        title: "The scope cut",
        prompt: "List everything, then remove most of it.",
        steps: [
          "Write down every feature you have imagined for the product.",
          "Sort each into now, later or never using the value loop as the test.",
          "For each 'now' item, ask whether it could be done by hand for ten customers. Move it if so.",
          "Set a ship date for the 'now' list. If it is more than six to eight weeks away, cut again.",
        ],
      },
      template: {
        title: "One-page MVP scope",
        body: "CORE JOB:\n\nFIRST USER (one specific type):\n\nVALUE LOOP:\n\nNOW (must exist for the loop to work):\n-\n\nDONE BY HAND AT FIRST:\n-\n\nLATER:\n-\n\nNEVER (FOR NOW):\n-\n\nSHIP DATE:\n\nHOW I WILL KNOW IT WORKED:",
      },
      implementationTask: "Complete the one-page MVP scope and share it with one other founder for criticism before you start building.",
      checklist: [
        "Every feature sorted into now, later or never",
        "'Now' list supports exactly one value loop",
        "Manual substitutes identified",
        "Ship date set within eight weeks",
        "Scope reviewed by someone else",
      ],
      recap: [
        "If the value loop works without it, it waits.",
        "Do things by hand before you automate them.",
        "A ship date turns a wish list into a plan.",
      ],
    },
  ],
};
