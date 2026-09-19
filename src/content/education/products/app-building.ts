import type { EducationProduct } from "../types";

/**
 * PAID — App-Building Starter Guide ($19).
 *
 * Idea to deployed application, honestly. Covers AI-assisted development as
 * a real accelerant while being explicit that it does not remove the need to
 * test, understand, or take responsibility for what ships.
 */

export const appBuilding: EducationProduct = {
  slug: "app-building",
  title: "App-Building Starter Guide",
  tier: "paid",
  price: 19,
  format: "guide",
  category: "apps",
  difficulty: "intermediate",
  estimatedMinutes: 210,
  summary:
    "Turn an idea into a working, deployed application — validation through to launch, including what AI-assisted development actually does and does not solve.",
  description:
    "Most app ideas fail before a line of code, because nobody checked whether the problem was real. This guide covers the full path: validating the problem, defining the smallest useful version, building the front end and back end, handling auth, data and payments, then testing, deploying and iterating. AI-assisted development is covered as the genuine accelerant it is, without pretending it removes the need to understand what you shipped.",
  whatYouWillLearn: [
    "How to validate a problem before building anything",
    "Defining an MVP that is genuinely minimal but actually useful",
    "Designing the user flow before designing any screens",
    "What the front end, back end, database and auth each do, in plain terms",
    "How to use AI-assisted development well — and where it goes wrong",
    "Deployment, analytics, feedback and how to decide what to build next",
  ],
  whoItIsFor: [
    "People with an app idea and no clear path from idea to working product",
    "Solopreneurs whose manual process has outgrown spreadsheets",
    "Technical beginners who can follow instructions and want to build something real",
    "Consultants who want to productise a process they currently run by hand",
  ],
  whatYouWillBuild: [
    "A completed idea validation worksheet with real evidence",
    "A defined MVP scope with an explicit not-building list",
    "A user flow and data model on paper",
    "A deployed, working application with auth and a database",
    "A testing checklist run before launch",
  ],
  includedResources: [
    { title: "App idea validation worksheet", detail: "The evidence to gather before writing any code." },
    { title: "MVP feature checklist", detail: "Cutting to the smallest version that delivers the outcome." },
    { title: "User flow template", detail: "Mapping the path before designing screens." },
    { title: "Database planning worksheet", detail: "Entities, fields and relationships in plain language." },
    { title: "Bug-testing checklist", detail: "What to break on purpose before users find it." },
    { title: "Launch checklist", detail: "Everything to verify before real people use it." },
  ],
  faqs: [
    {
      question: "Do I need to be able to code?",
      answer:
        "You need to be willing to read code and understand roughly what it does. With AI assistance you will not write most of it from scratch, but you will need to test it, debug it, and take responsibility for what it does with user data. Complete beginners can follow this; people unwilling to learn anything technical will struggle.",
    },
    {
      question: "Can AI just build my app for me?",
      answer:
        "It can write most of the code, and that is a genuine change in what is possible for a solo builder. It cannot validate your idea, decide your scope, test your app in the ways that matter, or be accountable for a security mistake. Treat it as a fast, capable collaborator who cannot see your users.",
    },
    {
      question: "What will it cost to build and run?",
      answer:
        "The tools covered here have free tiers sufficient for building and early users — typically $0 to start and roughly $20–$50 a month once you have real usage. A domain is about $15 a year. The main cost is your time.",
    },
    {
      question: "How long does an MVP take?",
      answer:
        "That depends entirely on scope and your starting skill, so any number would be invented. What the guide does is push your scope small enough that the answer is weeks rather than months — most first builds fail by being too ambitious rather than too slow.",
    },
  ],
  nextStep: {
    slug: "landing-page",
    pitch:
      "A working app still needs people to find it and understand it. The landing-page tutorial covers turning a built product into one that a stranger can evaluate and buy.",
  },
  chapters: [
    {
      slug: "validate-and-define",
      number: 1,
      title: "Validate the Problem and Define the User",
      summary:
        "Checking the problem is real before building, and knowing precisely who it is for.",
      durationMinutes: 30,
      blocks: [
        {
          type: "text",
          body: "The most expensive mistake in software is building something nobody needed. It is expensive because it consumes months and produces nothing you can reuse. Validation is the cheap way to avoid it, and it takes about a week.",
        },
        {
          type: "callout",
          tone: "warn",
          title: "The feature-first trap",
          body: "If you can describe your idea only in terms of what it does — \"it has a dashboard, notifications and a calendar\" — you have a feature list, not a problem. Features are answers. You need to be able to state the question first.",
        },
        {
          type: "heading",
          text: "What counts as validation",
        },
        {
          type: "framework",
          title: "Four levels, weakest to strongest",
          steps: [
            { label: "People say it is a problem", detail: "Weakest. People are agreeable in conversation and will confirm almost any problem exists if you describe it sympathetically." },
            { label: "People already work around it", detail: "Stronger. A messy spreadsheet, a manual process, a hired assistant. Workarounds are evidence of real pain." },
            { label: "People already pay to solve it", detail: "Strong. Existing spending proves budget and priority, and tells you the price ceiling." },
            { label: "People pay you before it exists", detail: "Strongest. A pre-order or a paid pilot. Difficult, and it removes essentially all doubt." },
          ],
        },
        {
          type: "callout",
          tone: "signal",
          title: "Run the process manually first",
          body: "Before building software, do the job by hand for real users — with spreadsheets, email, whatever works. It is slow and it teaches you the actual requirements, most of which you would have guessed wrong. The manual version is research, not a delay.",
        },
        {
          type: "heading",
          text: "Validation conversations",
        },
        {
          type: "text",
          body: "Ask about their past behaviour, not their future intentions. \"Would you use this?\" produces politeness. \"What did you do last time this happened?\" produces facts.",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "\"Walk me through the last time you dealt with this.\" — behaviour, not opinion.",
            "\"What did you use to handle it?\" — reveals the real competitor, which is usually a spreadsheet.",
            "\"How long did it take?\" — sizes the pain.",
            "\"What was annoying about that?\" — the specific pain, in their words.",
            "\"Have you looked for something better?\" — searching is strong evidence; not searching means low priority.",
            "\"What do you currently spend on this?\" — budget and price ceiling.",
          ],
        },
        {
          type: "heading",
          text: "Defining the user",
        },
        {
          type: "text",
          body: "One user type for version one. Not three. Every additional user type multiplies the features, the edge cases and the ways the interface has to compromise — and it is the most common reason first builds never ship.",
        },
      ],
      checklist: {
        title: "App idea validation worksheet",
        groups: [
          {
            label: "The problem",
            items: [
              "Stated as a problem, not a feature list",
              "You can describe it in one sentence a non-user would understand",
              "You have spoken to at least five real potential users",
              "At least three described a current workaround",
              "You know what they currently spend on it, if anything",
            ],
          },
          {
            label: "The user",
            items: [
              "One user type defined for version one",
              "You can name five real individuals who match it",
              "You know where they are findable",
              "You have run the process manually for at least one of them",
            ],
          },
          {
            label: "Honest assessment",
            items: [
              "Validation level identified (say / work around / pay / pre-pay)",
              "You know who or what you are replacing",
              "You have written down what would prove this idea wrong",
              "You would still build it if only ten people ever used it",
            ],
          },
        ],
      },
      exercise: {
        title: "Five validation conversations",
        prompt:
          "Have five real conversations before writing any code. This week, not eventually.",
        steps: [
          "Find five people who plausibly have the problem.",
          "Ask the six behavioural questions. Do not describe your idea until the end.",
          "Write down their exact words about the workaround they use.",
          "Count how many already pay for something related.",
          "Write one sentence: the problem, in a user's own words.",
        ],
      },
      actionStep:
        "Write down what would prove your idea wrong, before you start. Deciding the disconfirming evidence in advance is the only reliable protection against building something you have already decided to believe in.",
      recap: [
        "The expensive mistake is building something nobody needed.",
        "Four validation levels — workarounds and existing spending are the useful signals.",
        "Run the process manually first; it is research, not delay.",
        "One user type for version one.",
      ],
    },
    {
      slug: "mvp-and-user-flow",
      number: 2,
      title: "Define the MVP and Design the User Flow",
      summary:
        "Cutting to the smallest useful version, then mapping the path before designing any screen.",
      durationMinutes: 30,
      blocks: [
        {
          type: "text",
          body: "Minimum viable does not mean bad. It means the smallest thing that delivers the core outcome to one user type. Most first builds fail by being too ambitious — not by being too crude.",
        },
        {
          type: "heading",
          text: "Finding the core feature",
        },
        {
          type: "framework",
          title: "Three questions that cut scope",
          steps: [
            { label: "What is the one job?", detail: "The single thing a user comes to do. If you cannot name one, the product is unfocused and will stay that way." },
            { label: "What is the shortest path to it?", detail: "The minimum steps from arriving to the outcome. Everything not on that path is version two." },
            { label: "What can a human do instead?", detail: "Anything you can do manually behind the scenes — onboarding, approvals, sending things — does not need building yet." },
          ],
        },
        {
          type: "callout",
          tone: "signal",
          title: "Do things that do not scale",
          body: "For the first users, manual work behind an automated-looking interface is entirely legitimate and enormously faster. If ten users need onboarding, do it by hand. Automate it when doing it by hand becomes the constraint, not before.",
        },
        {
          type: "callout",
          tone: "warn",
          title: "The features that always creep in",
          body: "Admin dashboards, settings pages, notification preferences, dark mode, onboarding tours, team accounts. None of them deliver the core outcome, all of them feel necessary, and together they are why first builds take six months instead of four weeks.",
        },
        {
          type: "heading",
          text: "The user flow",
        },
        {
          type: "text",
          body: "Map the path before designing any screen. A flow is a sequence of steps with a decision at each — it tells you what screens you need, and more usefully, which ones you do not.",
        },
        {
          type: "framework",
          title: "Mapping a flow",
          steps: [
            { label: "Entry", detail: "How they arrive and what state they are in. Logged out and curious is different from logged in and returning." },
            { label: "Each step", detail: "What they do, what the system does, what they see next. One line each." },
            { label: "Decisions", detail: "Where the path branches. Each branch is work — minimise them in version one." },
            { label: "The outcome", detail: "The moment the core job is done. This is what the whole flow exists for." },
            { label: "Failure paths", detail: "What happens when something goes wrong. Skipping these is why early apps feel broken." },
          ],
        },
        {
          type: "example",
          title: "Cutting a flow to its core",
          body: "First draft: sign up, verify email, complete profile, take a tour, connect an integration, configure settings, then finally do the thing. Cut version: sign up, do the thing, and ask for the rest only when it is actually needed. The second gets users to the outcome; the first loses most of them before it.",
        },
      ],
      checklist: {
        title: "MVP feature checklist",
        groups: [
          {
            label: "Include only if",
            items: [
              "It is required to deliver the core outcome",
              "The product is unusable without it",
              "It cannot reasonably be done manually behind the scenes",
            ],
          },
          {
            label: "Explicitly not building in v1",
            items: [
              "Admin dashboard — use the database directly",
              "Settings and preferences — pick sensible defaults",
              "Notifications — send manually or not at all",
              "Team or multi-user accounts — one user type only",
              "Onboarding tour — if it needs a tour, simplify the product",
              "Anything for a second user type",
            ],
          },
          {
            label: "Flow mapped",
            items: [
              "Entry state defined",
              "Every step written as one line",
              "Branches minimised",
              "The outcome moment identified",
              "Failure paths defined for each step",
            ],
          },
        ],
      },
      exercise: {
        title: "Cut your scope in half",
        prompt:
          "List your intended features, then remove everything not on the shortest path to the outcome.",
        steps: [
          "List every feature you currently imagine building.",
          "Mark the one that delivers the core outcome.",
          "Cross out everything not required for that one to work.",
          "For each survivor, ask whether a human could do it manually instead.",
          "Write the not-building list explicitly — it is as valuable as the build list.",
        ],
      },
      actionStep:
        "Write your not-building list and keep it visible during the build. Scope creep happens one reasonable-seeming decision at a time, and a written list is what makes each one visible.",
      recap: [
        "Minimum viable means smallest thing delivering the core outcome, not a bad product.",
        "Manual work behind the interface is legitimate and much faster early.",
        "Map the flow before designing screens — it tells you which screens you do not need.",
        "The not-building list is as important as the build list.",
      ],
    },
    {
      slug: "architecture-and-data",
      number: 3,
      title: "Front End, Back End, Auth and Database",
      summary:
        "What each part actually does, and how to plan your data before you build.",
      durationMinutes: 35,
      blocks: [
        {
          type: "text",
          body: "Four pieces make up nearly every web application. You do not need deep expertise in any of them to build a first version, but you do need to know what each one is responsible for — otherwise you cannot tell where a problem is coming from.",
        },
        {
          type: "framework",
          title: "The four pieces, plainly",
          steps: [
            { label: "Front end", detail: "What the user sees and interacts with in the browser. Runs on their device, so nothing secret can live here — anyone can read it." },
            { label: "Back end", detail: "Code running on a server that the user cannot see. Where anything requiring trust happens: checking permissions, talking to payment providers, handling secrets." },
            { label: "Database", detail: "Where information persists between visits. Users, their data, the records your app creates." },
            { label: "Authentication", detail: "Proving a user is who they claim, and controlling what they can access. Two separate jobs that are easy to confuse." },
          ],
        },
        {
          type: "callout",
          tone: "warn",
          title: "The security mistake beginners make most",
          body: "Putting secret keys in front-end code. Anything in the browser is readable by anyone — API keys, database credentials, payment secrets. They belong on the server only. This one mistake is the most common serious vulnerability in first apps, and it is entirely avoidable.",
        },
        {
          type: "heading",
          text: "Planning the database",
        },
        {
          type: "text",
          body: "Plan this on paper before building. Changing a data model after you have real users is significantly harder than changing a screen, so it is worth an hour of thinking.",
        },
        {
          type: "framework",
          title: "Three questions",
          steps: [
            { label: "What things exist?", detail: "The nouns in your product. Users, projects, bookings, messages. Each becomes a table." },
            { label: "What do you know about each?", detail: "The fields. A booking has a date, a customer, a status. Only what you actually need — extra fields are easy to add later and awkward to remove." },
            { label: "How do they relate?", detail: "One user has many bookings. One booking belongs to one user. Getting these relationships right early prevents most later pain." },
          ],
        },
        {
          type: "heading",
          text: "Authentication and access",
        },
        {
          type: "text",
          body: "Do not build authentication yourself. It is a solved problem where mistakes are severe, and every modern platform provides it. Use what your backend platform offers.",
        },
        {
          type: "list",
          items: [
            "Use your platform's built-in auth — Supabase, Clerk, Auth0 and similar all handle this properly.",
            "Email and password plus one social login covers nearly everyone.",
            "Never store passwords yourself. If you find yourself writing password-hashing code, stop and use the platform.",
            "Authorisation is the separate question: once logged in, what can this specific user see and change? Check it on the server, every time.",
            "Test by logging in as one user and attempting to access another user's data directly. If it works, you have a serious bug.",
          ],
        },
        {
          type: "callout",
          tone: "signal",
          title: "Row-level security",
          body: "If your platform supports database-level access rules — Supabase does — use them. They enforce access in the database itself, so a mistake in your application code cannot leak another user's data. It is the single highest-value security measure available to a solo builder.",
        },
        {
          type: "heading",
          text: "Payments",
        },
        {
          type: "text",
          body: "Use an established provider — Stripe, Paddle, Lemon Squeezy, PayPal. Never handle raw card details yourself; the compliance requirements alone make it unrealistic, and the providers do it better.",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Redirect to the provider's hosted checkout. Simplest and safest for a first build.",
            "Handle the webhook that confirms payment — this is what grants access, not the user returning to your success page.",
            "Never grant access based on the user arriving at a success URL. That URL can be visited directly by anyone.",
            "Test with the provider's test cards, including declines and failures, before going live.",
          ],
        },
      ],
      checklist: {
        title: "Database planning worksheet",
        groups: [
          {
            label: "Design",
            items: [
              "Every entity listed as a table",
              "Fields listed for each, with only what you need",
              "Relationships defined between tables",
              "Every table has a created-at timestamp",
              "You know which user owns each row",
            ],
          },
          {
            label: "Security",
            items: [
              "No secret keys anywhere in front-end code",
              "Authentication handled by a platform, not built by hand",
              "Access rules enforced on the server, not only in the interface",
              "Row-level security enabled where the platform supports it",
              "Tested: logged in as user A, attempted to read user B's data, and failed",
            ],
          },
          {
            label: "Payments",
            items: [
              "Established provider used; no raw card handling",
              "Access granted by webhook, not by the success page",
              "Declines and failures tested with test cards",
              "Receipt or confirmation sent to the customer",
            ],
          },
        ],
      },
      actionStep:
        "Draw your data model on paper before writing any code. Tables, fields, and lines between them. An hour here saves a painful migration later.",
      recap: [
        "Four pieces: front end, back end, database, authentication.",
        "Nothing secret can live in the front end — it is readable by anyone.",
        "Never build authentication yourself; use the platform.",
        "Grant paid access from the webhook, never from the success page.",
      ],
    },
    {
      slug: "ai-assisted-building",
      number: 4,
      title: "Building It, With AI Assistance",
      summary:
        "Using AI development tools well — what they genuinely accelerate, and where they go wrong.",
      durationMinutes: 35,
      blocks: [
        {
          type: "text",
          body: "AI-assisted development has genuinely changed what a solo builder can produce. It has not changed the need to understand what you shipped, to test it, or to be accountable for what it does with someone's data. Both halves of that are true and this chapter treats them as such.",
        },
        {
          type: "heading",
          text: "The tools",
        },
        {
          type: "framework",
          title: "A practical stack for a first app",
          steps: [
            { label: "Claude Code", detail: "AI coding in your terminal or editor. Reads your whole codebase, writes and edits files, runs commands. Strongest for building and changing real projects rather than producing snippets." },
            { label: "GitHub", detail: "Version control. Non-negotiable — it is how you undo a change that broke everything, which will happen. Learn commit, push and revert; that covers most of what you need." },
            { label: "Vercel", detail: "Deployment. Connects to your GitHub repository and publishes on every push. Free tier is sufficient for a first app." },
            { label: "Supabase", detail: "Database, authentication and file storage together. Generous free tier, and row-level security available from the start." },
          ],
        },
        {
          type: "callout",
          tone: "warn",
          title: "What AI will not do for you",
          body: "It will not validate your idea, decide your scope, or tell you the feature is unnecessary. It will not test the app the way a real user does. It will not notice that you left a key exposed unless you ask. And it cannot be accountable for a data breach — that is yours.",
        },
        {
          type: "heading",
          text: "Working with it well",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Give it context. Your data model, your stack, what already exists. Vague requests produce generic code that does not fit.",
            "Work in small pieces. One feature at a time, tested before moving on. Asking for a whole app at once produces something you cannot debug.",
            "Read what it produced. Not every line, but enough to know what it does. Code you cannot explain is code you cannot fix.",
            "Commit before each significant change, so you can revert cleanly when something breaks.",
            "Ask it to explain anything you do not understand. This is the fastest way to actually learn while building.",
            "Test after every change. Generated code that looks right and is subtly wrong is the failure mode to watch for.",
          ],
        },
        {
          type: "callout",
          tone: "signal",
          title: "Ask it to review its own work",
          body: "\"What could go wrong with this code? Are there security issues? What happens if the input is empty or malformed?\" This catches a meaningful share of problems, and it is free. It is not a substitute for testing, but it is a good first pass.",
        },
        {
          type: "heading",
          text: "Where AI-assisted builds go wrong",
        },
        {
          type: "list",
          items: [
            "Accepting code you do not understand, then being unable to fix it when it breaks.",
            "Skipping version control, so there is no way back from a bad change.",
            "Assuming generated code is secure. Ask explicitly about security; it often will not volunteer concerns.",
            "Building faster than you test, and accumulating bugs you discover all at once.",
            "Letting scope expand because adding features feels cheap — it is cheap to generate and expensive to maintain.",
          ],
        },
        {
          type: "callout",
          tone: "muted",
          title: "The honest position",
          body: "AI assistance makes a first app realistic for someone who could not have built one alone. It does not make you a software engineer, and shipping something handling real user data carries real responsibility. Build, but understand what you built.",
        },
      ],
      checklist: {
        title: "AI-assisted build checklist",
        groups: [
          {
            items: [
              "Git repository initialised before writing any code",
              "Committing before each significant change",
              "Building one feature at a time, tested before the next",
              "Can explain roughly what every part of the app does",
              "Explicitly asked for a security review of anything handling user data",
              "No secrets committed to the repository — environment variables used",
              "A .gitignore excluding .env files",
              "Tested every feature manually after generating it",
            ],
          },
        ],
      },
      exercise: {
        title: "Build one feature end to end",
        prompt:
          "Pick the single core feature and take it all the way, rather than starting several.",
        steps: [
          "Set up the repository and commit an empty project first.",
          "Describe your data model and stack to the AI tool as context.",
          "Ask for the one core feature only.",
          "Read the result and ask about anything you do not understand.",
          "Test it manually, including with empty and malformed input.",
          "Ask for a security review, then commit.",
        ],
      },
      actionStep:
        "Set up version control before writing a single line. The first time a change breaks everything, it is the difference between a two-minute revert and losing a day's work.",
      recap: [
        "AI genuinely accelerates building; it does not remove testing or accountability.",
        "Small pieces, read the output, commit often, test after every change.",
        "Ask explicitly about security — it often will not volunteer concerns.",
        "Code you cannot explain is code you cannot fix.",
      ],
    },
    {
      slug: "test-deploy-iterate",
      number: 5,
      title: "Test, Deploy, Measure and Iterate",
      summary:
        "Breaking it on purpose, shipping it, and deciding what to build next from evidence.",
      durationMinutes: 35,
      blocks: [
        {
          type: "text",
          body: "Your app works when you use it correctly. Real users will not. This chapter is about finding the failures before they do, deploying safely, and then deciding what to build next based on evidence rather than enthusiasm.",
        },
        {
          type: "heading",
          text: "Testing means trying to break it",
        },
        {
          type: "text",
          body: "Testing is not confirming it works. It is actively attempting to make it fail, which requires deliberately doing the wrong things.",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Submit every form empty. Then with only spaces. Then with an enormous amount of text.",
            "Enter the wrong type of thing — letters in a number field, a malformed email address.",
            "Double-click every button that submits or saves. Duplicate records are a classic.",
            "Press back after submitting something. Then refresh. Then resubmit.",
            "Log in as one user and try to access another user's data by changing an ID in the URL.",
            "Turn off your network mid-action and see what the app tells the user.",
            "Use it entirely on a phone, at a realistic screen size.",
          ],
        },
        {
          type: "callout",
          tone: "warn",
          title: "The URL-tampering test is not optional",
          body: "Changing an ID in the URL to access someone else's record is the most common serious vulnerability in first applications, and the easiest to check. Do it before anyone else does.",
        },
        {
          type: "heading",
          text: "Deploying",
        },
        {
          type: "framework",
          title: "Deployment sequence",
          steps: [
            { label: "Environment variables", detail: "Every secret set in the hosting platform, never committed to the repository. Verify nothing sensitive is in your git history." },
            { label: "Separate environments", detail: "Ideally a preview and a production environment, with separate databases. Never test against production data." },
            { label: "Deploy and smoke test", detail: "Sign up as a brand new user on the live site and complete the core flow end to end." },
            { label: "Custom domain and SSL", detail: "Point the domain, confirm https works and the certificate is valid." },
            { label: "A way to be told about errors", detail: "At minimum, check your platform's error logs regularly. Users rarely report bugs; they just leave." },
          ],
        },
        {
          type: "heading",
          text: "Measuring and iterating",
        },
        {
          type: "text",
          body: "You need very few numbers for a first app, and they should answer one question: are people getting to the outcome?",
        },
        {
          type: "list",
          items: [
            "Signups — how many started.",
            "Activation — how many reached the core outcome at least once. The most important number by a distance.",
            "Return usage — how many came back. Tells you whether it was genuinely useful.",
            "Drop-off point — where in the flow people stop. This is where your next build should go.",
          ],
        },
        {
          type: "callout",
          tone: "signal",
          title: "Watch someone use it",
          body: "Ten minutes watching a real person use your app, without helping them, will teach you more than a month of analytics. Say nothing while they use it. The urge to explain is strong and the silence is where the learning is.",
        },
        {
          type: "heading",
          text: "Deciding what to build next",
        },
        {
          type: "framework",
          title: "Prioritising honestly",
          steps: [
            { label: "Fix what blocks the outcome", detail: "Anything stopping users reaching the core result comes first, always." },
            { label: "Then what users repeatedly ask for", detail: "Repeatedly. One request is an opinion; five is a pattern." },
            { label: "Then what the drop-off data shows", detail: "The step losing the most people is where the next work belongs." },
            { label: "Last, what you find interesting", detail: "This is honest rather than dismissive — but it should not be first, and for most builders it silently is." },
          ],
        },
        {
          type: "callout",
          tone: "muted",
          title: "Not every app should continue",
          body: "If nobody reaches the outcome, nobody returns, and nobody asks for anything, that is data. Stopping is a legitimate outcome, and the validation work in chapter one is what makes stopping cheap rather than devastating.",
        },
      ],
      checklist: {
        title: "Bug-testing and launch checklist",
        groups: [
          {
            label: "Break it on purpose",
            items: [
              "Every form submitted empty",
              "Wrong data types entered in every field",
              "Every submit button double-clicked",
              "Back and refresh tested after submissions",
              "Another user's data attempted via URL tampering — and blocked",
              "Network interruption handled with a sensible message",
              "Whole app used on a real phone",
            ],
          },
          {
            label: "Before deploying",
            items: [
              "All secrets in environment variables, none in the repository",
              "Git history checked for accidentally committed secrets",
              "Separate production database from any test data",
              "Error logging accessible and checked",
            ],
          },
          {
            label: "After deploying",
            items: [
              "Signed up as a brand new user on the live site",
              "Completed the core flow end to end in production",
              "Payment tested with a real transaction if applicable",
              "Custom domain and valid SSL confirmed",
              "Analytics recording signups and activation",
            ],
          },
        ],
      },
      exercise: {
        title: "Watch one person use it",
        prompt:
          "Find someone who matches your user type and watch them, in silence.",
        steps: [
          "Ask them to complete the core task without any guidance.",
          "Say nothing, even when they go wrong. Especially then.",
          "Write down every place they hesitate, misread or get stuck.",
          "Afterwards, ask what they expected to happen at each stuck point.",
          "Fix the top two before adding any new feature.",
        ],
      },
      actionStep:
        "Try to access another user's data by changing an ID in the URL. If it works, stop everything and fix it before anyone else uses the app.",
      recap: [
        "Testing means trying to break it, not confirming it works.",
        "URL tampering is the most common serious first-app vulnerability.",
        "Activation — reaching the outcome once — is the number that matters most.",
        "Watching one real user beats a month of analytics.",
      ],
    },
  ],
};
