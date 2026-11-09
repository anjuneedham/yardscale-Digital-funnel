import type { CourseModule } from "../types";

export const module4: CourseModule = {
  slug: "module-4",
  number: 4,
  title: "Planning and AI-assisted development",
  stage: "Planning → Building",
  summary: "Turn the scope into a written spec, then build it with AI tools in small steps you can test and undo.",
  outcome: "A one-page product spec and a working first slice of the product.",
  access: "member",
  reviewed: false,
  reviewNotes: [
    "Name the AI tools and stack you actually use, and why. This lesson deliberately stays tool-neutral until you do.",
    "Add a real example of an AI-generated change that broke something, and how you caught it.",
    "Add your own spec or brief format if it differs from the template.",
  ],
  lessons: [
    {
      slug: "write-the-spec-before-the-prompt",
      number: 1,
      title: "Write the spec before the prompt",
      summary: "AI tools build what you describe. If the description is vague, the product will be too.",
      objective: "Write a one-page spec covering users, data, screens and flows.",
      durationMinutes: 10,
      blocks: [
        {
          type: "text",
          body: "AI-assisted development has made writing code much faster. It has not made deciding what to build any faster. The founders who get good results from AI tools are the ones who arrive with a clear written spec. The ones who start by typing 'build me an app that…' get a demo that falls over the first time a real user touches it.",
        },
        {
          type: "framework",
          title: "The one-page spec",
          steps: [
            { label: "Users", detail: "Each type of user and what they are allowed to do. For an MVP, usually one or two." },
            { label: "Data", detail: "The things the product stores and how they relate. A booking has a customer, a service and a time. Write it as a plain list." },
            { label: "Screens", detail: "Every screen in the value loop, with what is on it and what each button does." },
            { label: "Flows", detail: "The value loop step by step, including what happens when something goes wrong." },
            { label: "Rules", detail: "The business rules. Who can see what. What cannot be deleted. What must be unique." },
            { label: "Not included", detail: "Your 'later' list, stated explicitly so the AI does not helpfully add it." },
          ],
        },
        {
          type: "callout",
          tone: "signal",
          title: "Plain language is enough",
          body: "You do not need diagrams or technical vocabulary. A spec written the way you would explain the product to a new employee is exactly what an AI tool works best from.",
        },
        { type: "heading", text: "Choosing a stack" },
        {
          type: "list",
          items: [
            "Prefer common, well-documented tools. AI models are better at them, and so is every developer you might hire later.",
            "Use managed services for login, database, hosting and payments. Do not build what you can rent.",
            "Pick one stack and stay on it. Switching tools mid-build is a way of avoiding the hard part.",
          ],
        },
      ],
      exercise: {
        title: "Write your spec",
        prompt: "One page. If it runs to three, your scope has grown.",
        steps: [
          "Fill in each section of the template for your MVP scope.",
          "Walk through the value loop against the spec. Every step needs a screen and the data it reads or writes.",
          "Ask an AI assistant to list anything ambiguous or missing in the spec. Fix what it finds.",
        ],
      },
      template: {
        title: "One-page product spec",
        body: "PRODUCT IN ONE SENTENCE:\n\nUSERS AND WHAT EACH CAN DO:\n-\n\nDATA (things stored, and how they relate):\n-\n\nSCREENS (name → what is on it → what each action does):\n-\n\nMAIN FLOW, STEP BY STEP:\n1.\n\nWHAT HAPPENS WHEN IT GOES WRONG:\n-\n\nRULES:\n-\n\nNOT INCLUDED IN THIS VERSION:\n-",
      },
      implementationTask: "Finish the spec and save it in the project itself, so every AI session starts by reading it.",
      recap: [
        "Deciding what to build is still your job.",
        "A plain-language spec is the best prompt you will ever write.",
        "Rent the standard parts. Build only what is yours.",
      ],
    },
    {
      slug: "building-with-ai-in-small-steps",
      number: 2,
      title: "Building with AI in small steps",
      summary: "The loop that keeps an AI-built product working: one slice at a time, run it, test it, save it.",
      objective: "Build the first slice of your product using a repeatable build loop.",
      durationMinutes: 11,
      blocks: [
        {
          type: "text",
          body: "The failure pattern is always the same. Someone asks an AI tool for the whole product at once, gets something that looks finished, then spends weeks unable to fix or change it. The alternative is slower for the first day and far faster after that.",
        },
        {
          type: "framework",
          title: "The build loop",
          steps: [
            { label: "Pick one slice", detail: "One step of the value loop, end to end. 'A customer can pick a time and see a confirmation' is a slice. 'The backend' is not." },
            { label: "Brief it", detail: "Tell the AI what this slice does, point it at the spec, and say what is out of scope." },
            { label: "Read what it did", detail: "You do not have to understand every line. You do have to understand what files changed and why. Ask it to explain." },
            { label: "Run it", detail: "Open the product and use the slice yourself, the way a customer would. Then try to break it." },
            { label: "Save it", detail: "Commit the working state with version control before starting the next slice. This is your undo button." },
          ],
        },
        { type: "heading", text: "Habits that prevent most disasters" },
        {
          type: "list",
          items: [
            "Use version control from the first hour. Every working state is saved.",
            "One change at a time. If three things changed and it broke, you do not know which one did it.",
            "When something breaks, give the AI the exact error message, not a description of it.",
            "If a fix takes more than three attempts, go back to the last saved state and brief the slice differently.",
            "Never paste passwords or secret keys into code. Use environment variables, and keep them out of version control.",
          ],
        },
        {
          type: "callout",
          tone: "warn",
          title: "AI output is a draft",
          body: "AI tools produce confident code that is sometimes wrong, and occasionally insecure. Anything touching logins, payments or other people's data deserves a second look — from you, from a different AI session asked to review it, or from a developer.",
        },
        {
          type: "callout",
          tone: "muted",
          title: "You are still the product owner",
          body: "The tool does not know your customer. When it suggests adding something that is not in the spec, the answer is almost always no.",
        },
      ],
      exercise: {
        title: "Ship the first slice",
        prompt: "One slice, working, saved.",
        steps: [
          "Set up the project with version control and the spec file inside it.",
          "Choose the first step of your value loop as the slice.",
          "Run the build loop once, fully. Do not start slice two until slice one is saved and working.",
          "Write in your build log what the AI got wrong and how you noticed.",
        ],
      },
      implementationTask: "List every slice needed to complete the value loop, in order. Build them one at a time and tick each off only when it is run, tested and saved.",
      checklist: [
        "Version control set up",
        "Spec stored in the project",
        "Slices listed in order",
        "First slice runs end to end",
        "Working state committed",
        "No secrets in the code",
      ],
      recap: [
        "Build in slices, not all at once.",
        "Run it yourself before moving on.",
        "Save every working state so you can always go back.",
      ],
    },
  ],
};

export const module5: CourseModule = {
  slug: "module-5",
  number: 5,
  title: "Testing and beta launches",
  stage: "Launch",
  summary: "Break the product yourself before anyone else does, then put it in front of a small group of real users.",
  outcome: "A tested critical path and a running beta with a feedback loop.",
  access: "member",
  reviewed: false,
  reviewNotes: [
    "Add how the AgriLoop beta was actually recruited and run, and what you would do differently.",
    "Add a real bug or surprise that only showed up once real users arrived.",
    "Add your experience of app store submission if you want it covered here.",
  ],
  lessons: [
    {
      slug: "test-before-anyone-else-does",
      number: 1,
      title: "Test before anyone else does",
      summary: "You only need to test one thing thoroughly: the path a customer takes to get the outcome.",
      objective: "Write and run a critical path test for your product.",
      durationMinutes: 8,
      blocks: [
        {
          type: "text",
          body: "A beta user will forgive a rough edge. They will not forgive losing their data or hitting a dead end on the first screen. Testing an MVP is not about covering everything. It is about making sure the value loop works every time, on the devices your customers use.",
        },
        {
          type: "framework",
          title: "Critical path testing",
          steps: [
            { label: "Write the path", detail: "The value loop as numbered steps, starting from a brand new user with nothing set up." },
            { label: "Walk it clean", detail: "New account, real device, real data. Do every step exactly as written." },
            { label: "Walk it badly", detail: "Empty fields, wrong formats, double-clicks, the back button, a slow connection, closing the tab halfway." },
            { label: "Walk it on a phone", detail: "Most people will open your link on a phone first. Test on a real one, not a resized browser window." },
            { label: "Fix, then repeat", detail: "Every fix can break something else. Re-walk the whole path after each round." },
          ],
        },
        { type: "heading", text: "What must never fail" },
        {
          type: "list",
          items: [
            "Signing up and logging back in.",
            "Saving the thing the user came to create.",
            "One user seeing another user's private data.",
            "Any email or notification the loop depends on.",
            "Taking payment, if you take payment.",
          ],
        },
        {
          type: "callout",
          tone: "signal",
          title: "Watch one person use it",
          body: "Before the beta, sit with one person from the target group and watch them use the product without helping. Where they hesitate is your to-do list.",
        },
      ],
      exercise: {
        title: "Run the critical path",
        prompt: "Do it properly once, and keep the script for every future release.",
        steps: [
          "Write the critical path as numbered steps.",
          "Walk it clean, badly and on a phone. Note every problem.",
          "Sort problems into blocks the path, confusing, cosmetic. Fix the first group before beta.",
        ],
      },
      implementationTask: "Watch one real person from your target group complete the path. Do not explain anything. Write down every hesitation.",
      checklist: [
        "Critical path written as steps",
        "Walked with a new account",
        "Walked with bad input",
        "Walked on a real phone",
        "Blocking problems fixed and path re-walked",
        "One observed session with a real person",
      ],
      recap: [
        "Test the value loop, not everything.",
        "Test like a careless, impatient user on a phone.",
        "Watching one person teaches more than a week of guessing.",
      ],
    },
    {
      slug: "running-a-beta",
      number: 2,
      title: "Running a beta",
      summary: "A beta is a small, deliberate group of real users and a commitment to listen to them.",
      objective: "Recruit beta users, run a feedback loop and decide when the beta ends.",
      durationMinutes: 10,
      blocks: [
        {
          type: "text",
          body: "A beta is not a launch with an excuse attached. It is a controlled test: enough users to find the real problems, few enough that you can speak to every one of them.",
        },
        {
          type: "framework",
          title: "A beta that teaches you something",
          steps: [
            { label: "Invite, do not announce", detail: "Start with the people you interviewed. Bring them in personally, in small groups, so each gets your attention." },
            { label: "Onboard by hand", detail: "Set up the first users yourself, on a call if needed. You will see exactly where the product is unclear." },
            { label: "Make feedback easy", detail: "One obvious way to reach you: a message, a short form, a group chat. Reply fast." },
            { label: "Review weekly", detail: "Who came back? Who completed the loop? What did three different people ask for?" },
            { label: "Set an exit", detail: "Decide in advance what ends the beta — for example, ten users completing the loop twice without your help." },
          ],
        },
        {
          type: "example",
          title: "From the studio: AgriLoop",
          body: "AgriLoop opened as an invitation-only beta. New farmers are brought on by name rather than through open signup, which keeps the first group small enough to support directly while the product is still changing.",
        },
        { type: "heading", text: "Reading beta feedback" },
        {
          type: "list",
          items: [
            "What people do outweighs what they say. Usage tells you what matters.",
            "One request is an opinion. The same request from three unrelated users is a pattern.",
            "Bugs on the critical path get fixed immediately. Feature requests go on the 'later' list until a pattern appears.",
            "Silence is feedback too. If someone stopped using it, ask them why.",
          ],
        },
        {
          type: "callout",
          tone: "muted",
          title: "Charging in beta",
          body: "Whether to charge during beta depends on your product and customers. Free access gets you more users and more feedback. Charging, even a small amount, tells you whether anyone values it enough to pay. Module 6 covers how to decide.",
        },
      ],
      exercise: {
        title: "Plan your beta",
        prompt: "Write the plan before you invite anyone.",
        steps: [
          "List your first ten beta invitees by name.",
          "Write the invitation message: what it is, what you are asking of them, how to reach you.",
          "Decide your feedback channel and your weekly review time.",
          "Write your exit criteria.",
        ],
      },
      implementationTask: "Invite the first five people. Onboard each personally and log what confused them.",
      recap: [
        "Small and personal beats big and anonymous.",
        "Usage is the truest feedback.",
        "Decide what ends the beta before it starts.",
      ],
    },
  ],
};

export const module6: CourseModule = {
  slug: "module-6",
  number: 6,
  title: "Pricing and monetization",
  stage: "Launch",
  summary: "Choose how you charge, set a first price you can defend, and learn quickly whether it is wrong.",
  outcome: "A pricing model, a first price and a plan to test it.",
  access: "member",
  reviewed: false,
  reviewNotes: [
    "Add how you arrived at pricing for one of your own products, including what you changed.",
    "Add your view on free trials versus free plans from real experience.",
    "Confirm whether you want to reference AgriLoop's pricing structure publicly.",
  ],
  lessons: [
    {
      slug: "choosing-a-pricing-model",
      number: 1,
      title: "Choosing a pricing model",
      summary: "How you charge shapes who buys. Pick the model that grows when your customer gets more value.",
      objective: "Choose a pricing model and a value metric for your product.",
      durationMinutes: 8,
      blocks: [
        {
          type: "text",
          body: "Pricing has two parts: the model, which is how you charge, and the number. Founders agonise over the number and skip the model. The model matters more, because it decides whether your revenue grows as your customers succeed.",
        },
        {
          type: "framework",
          title: "Common SaaS models",
          steps: [
            { label: "Flat subscription", detail: "One price per month. Simple to explain and sell. A good default for a first product." },
            { label: "Tiered", detail: "Two or three plans with increasing limits or features. Use it when you have clearly different customer sizes." },
            { label: "Per seat", detail: "Price per user. Works when value grows with team size. Can discourage adoption inside a company." },
            { label: "Usage based", detail: "Price per unit of use. Fair, but harder for customers to predict and for you to forecast." },
            { label: "Free plan plus paid", detail: "Free forever with limits. Only works with very large numbers of users and low cost to serve." },
            { label: "Different prices for different sides", detail: "In a two-sided product, each side can have its own price, or one side can be free." },
          ],
        },
        { type: "heading", text: "Find your value metric" },
        {
          type: "text",
          body: "The value metric is the thing your customer gets more of as your product helps them more: bookings taken, invoices sent, listings published, team members. When price follows the value metric, customers who get more pay more, and nobody feels overcharged.",
        },
        {
          type: "callout",
          tone: "signal",
          title: "Start simple",
          body: "For a first product with a handful of customers, one plan at one price is usually right. You can add tiers when you can see real differences in how customers use it.",
        },
        {
          type: "callout",
          tone: "muted",
          title: "Trial or free plan?",
          body: "A time-limited free trial lets people reach the outcome before paying and then asks for a decision. A permanent free plan removes the decision. For most first products, a trial is the safer choice.",
        },
      ],
      exercise: {
        title: "Pick the model",
        prompt: "Decide, write down why, and move on.",
        steps: [
          "Write down what your customer gets more of when the product works. That is your candidate value metric.",
          "Choose the simplest model that fits it.",
          "Decide: trial, free plan or neither. Write one sentence justifying it.",
        ],
      },
      implementationTask: "Add your pricing model and value metric to your founder brief.",
      recap: [
        "Choose the model before the number.",
        "Tie price to the value the customer receives.",
        "One plan is enough to start.",
      ],
    },
    {
      slug: "setting-and-testing-a-first-price",
      number: 2,
      title: "Setting and testing a first price",
      summary: "Your first price will be wrong. Set it using what the problem costs, then find out which direction to move.",
      objective: "Set a first price and run a real pricing conversation.",
      durationMinutes: 9,
      blocks: [
        {
          type: "text",
          body: "There is no formula that produces the right price. There is a way to produce a reasonable first one, and a way to learn from it. First-time founders almost always start too low, because they price against their own doubt rather than the customer's problem.",
        },
        {
          type: "framework",
          title: "Three anchors",
          steps: [
            { label: "What the problem costs", detail: "From your interviews: hours lost, money leaked, customers missed. Your price should be a small fraction of that." },
            { label: "What alternatives cost", detail: "The tools and workarounds customers use today, including the cost of their own time." },
            { label: "What you need", detail: "Your running costs per customer, and what it takes for this to be worth doing. This is a floor, not a target." },
          ],
        },
        { type: "heading", text: "Testing the price" },
        {
          type: "list",
          items: [
            "Say the price out loud to a real prospect and then stop talking. Their reaction is your data.",
            "If nobody ever pushes back, it is too low.",
            "If everyone refuses, either the price is too high or you are talking to the wrong customer. Check which.",
            "Raise the price for new customers and keep existing ones on their original deal. That is fair and it is normal.",
          ],
        },
        {
          type: "callout",
          tone: "warn",
          title: "Do not compete on cheap",
          body: "Being the cheapest attracts the customers who leave fastest and complain most. Compete on fitting a specific customer better than the general tools do.",
        },
        {
          type: "callout",
          tone: "muted",
          title: "Taking payment",
          body: "Use an established payment provider with hosted checkout pages. Do not build your own billing. For the first few customers, a payment link or a manual invoice is entirely acceptable.",
        },
      ],
      exercise: {
        title: "Set the price",
        prompt: "Work it out, then say it to someone.",
        steps: [
          "Write down the three anchors with real numbers from your research.",
          "Choose a first price. Then ask whether you chose it out of evidence or out of nerves.",
          "State the price to three prospects or beta users this week and record exactly how each responds.",
        ],
      },
      implementationTask: "Ask your most engaged beta user to become your first paying customer at your chosen price.",
      checklist: [
        "Problem cost, alternatives and floor written down",
        "First price chosen",
        "Price said out loud to three real prospects",
        "Reactions recorded",
        "A way to take payment is ready",
      ],
      recap: [
        "Price against the customer's problem.",
        "Silence after you say the price is information.",
        "Raise prices for new customers; honour old deals.",
      ],
    },
  ],
};

export const module7: CourseModule = {
  slug: "module-7",
  number: 7,
  title: "Positioning and branding",
  stage: "Launch",
  summary: "Say who the product is for and why it is different, in words a stranger understands in five seconds.",
  outcome: "A positioning statement, a one-line description and a landing page outline.",
  access: "member",
  reviewed: false,
  reviewNotes: [
    "Add what you learned about positioning from your marketing work — real before-and-after examples if you have them.",
    "Add how you named one of your products.",
  ],
  lessons: [
    {
      slug: "positioning-in-one-statement",
      number: 1,
      title: "Positioning in one statement",
      summary: "Positioning is a decision about who you are for and what you are compared against. Everything else follows from it.",
      objective: "Write a positioning statement and a one-line description of your product.",
      durationMinutes: 8,
      blocks: [
        {
          type: "text",
          body: "When a stranger lands on your page, they ask three things in about five seconds: what is this, is it for me, and why this rather than what I already use. Positioning is having an answer to all three before they ask.",
        },
        {
          type: "framework",
          title: "The positioning statement",
          steps: [
            { label: "For…", detail: "The specific customer. The narrower, the stronger." },
            { label: "Who…", detail: "The situation or problem, in their words from your interviews." },
            { label: "It is a…", detail: "The category. Use one they already understand: a booking tool, an invoicing app, a marketplace." },
            { label: "That…", detail: "The main outcome it delivers." },
            { label: "Unlike…", detail: "The alternative they use today, and the one difference that matters to them." },
          ],
        },
        {
          type: "example",
          title: "Illustrative statement",
          body: "For independent mobile mechanics who lose jobs because they cannot answer the phone under a car, it is a booking link that lets customers book and confirm a job themselves. Unlike general scheduling tools, it is built around call-outs, not appointments at a desk.",
        },
        { type: "heading", text: "The one-liner" },
        {
          type: "text",
          body: "Compress the statement into one sentence you can say to a stranger: what it is, for whom, and the result. If someone can repeat it to a friend after hearing it once, it is working.",
        },
        {
          type: "callout",
          tone: "warn",
          title: "Words to cut",
          body: "Revolutionary, seamless, all-in-one, powerful, next-generation. They say nothing and every competitor uses them. Use the phrases your customers used instead.",
        },
      ],
      exercise: {
        title: "Write the position",
        prompt: "Build it from your interview notes.",
        steps: [
          "Fill in the positioning statement template.",
          "Compress it into a one-line description of under fifteen words.",
          "Say the one-liner to five people in your target group. Ask them to tell you what the product does. Fix it until they get it right.",
        ],
      },
      template: {
        title: "Positioning statement",
        body: "FOR [SPECIFIC CUSTOMER]\nWHO [SITUATION / PROBLEM],\n[PRODUCT] IS A [CATEGORY]\nTHAT [MAIN OUTCOME].\nUNLIKE [CURRENT ALTERNATIVE],\nIT [THE ONE DIFFERENCE THAT MATTERS].\n\nONE-LINER:",
      },
      implementationTask: "Put the one-liner at the top of your founder brief and use it everywhere you describe the product this week.",
      recap: [
        "Answer what, for whom and why this one.",
        "Use a category people already understand.",
        "The customer's words beat your adjectives.",
      ],
    },
    {
      slug: "the-minimum-viable-brand",
      number: 2,
      title: "The minimum viable brand",
      summary: "At this stage a brand is a name, a clear page and a consistent way of talking. Nothing more is needed.",
      objective: "Choose a name and outline a landing page that converts a visitor into a signup.",
      durationMinutes: 9,
      blocks: [
        {
          type: "text",
          body: "Founders lose weeks to logos and colour palettes. Early customers will not remember your logo. They will remember whether they understood what you do and whether you answered their message. Brand, for now, is clarity and consistency.",
        },
        { type: "heading", text: "A name that is good enough" },
        {
          type: "list",
          items: [
            "Easy to say aloud and easy to spell after hearing it once.",
            "Hints at what it does or who it is for.",
            "A usable domain and social handle are available.",
            "Not confusingly close to an existing product in your category. Do a basic search before you commit.",
          ],
        },
        {
          type: "framework",
          title: "Landing page structure",
          steps: [
            { label: "Headline", detail: "The outcome, for the specific customer. Your one-liner, or close to it." },
            { label: "Show it", detail: "A screenshot or a short video of the product doing the job. Real, not a mock-up." },
            { label: "The problem", detail: "Two or three lines describing the situation in the customer's words." },
            { label: "How it works", detail: "The value loop in three steps." },
            { label: "Proof", detail: "Only what is real: a beta user's comment with permission, or simply who built it and why." },
            { label: "Price and the ask", detail: "What it costs and one clear action: start a trial, join the beta, book a demo." },
            { label: "Questions", detail: "The three or four objections you heard most, answered plainly." },
          ],
        },
        {
          type: "callout",
          tone: "signal",
          title: "One page, one action",
          body: "Every button on the page should lead to the same next step. A page that asks for five different things gets none of them.",
        },
        {
          type: "callout",
          tone: "warn",
          title: "Never invent proof",
          body: "No made-up testimonials, user counts or logos. It is dishonest, it is often illegal, and it collapses the first time someone checks. A plain page that tells the truth outperforms a polished one that does not.",
        },
      ],
      exercise: {
        title: "Outline the page",
        prompt: "Write the words before anyone designs anything.",
        steps: [
          "Shortlist three names and check each against the four criteria.",
          "Write every section of the landing page as plain text.",
          "Show the text to two target customers and ask what they would do next. If the answer is not your one action, rewrite.",
        ],
      },
      implementationTask: "Publish the landing page with a single working call to action, and make sure every signup reaches you.",
      checklist: [
        "Name chosen, domain secured",
        "Headline states outcome and customer",
        "Real screenshot or video on the page",
        "One call to action, repeated",
        "Signup tested end to end",
        "Nothing on the page is invented",
      ],
      recap: [
        "Brand is clarity and consistency, not a logo.",
        "One page, one action.",
        "Only real proof.",
      ],
    },
  ],
};
