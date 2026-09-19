import type { EducationProduct } from "../types";

/**
 * FREE — Build Your First Website (mini-course, 5 modules).
 *
 * The entry point to the library. Teaches a complete beginner to plan, build
 * and launch a website that does a job, then hands off to the paid
 * landing-page tutorial for people who want the page to convert harder.
 */

export const buildYourFirstWebsite: EducationProduct = {
  slug: "build-your-first-website",
  title: "Build Your First Website",
  tier: "free",
  price: null,
  format: "mini-course",
  category: "websites",
  difficulty: "beginner",
  estimatedMinutes: 150,
  summary:
    "Plan, build and launch a website that does a job — instead of one that just sits there looking like a business card.",
  description:
    "Most first websites fail in the planning, not the building. This mini-course walks you through deciding what the site is for, structuring it around one action, building it with whichever approach fits your budget and skills, and launching it without the mistakes that cost people their first month of traffic.",
  whatYouWillLearn: [
    "Why most websites do nothing, and what separates them from ones that produce enquiries",
    "How to plan a site before you open a builder, so you do not rebuild it three times",
    "The nine sections a homepage needs, and the job each one does",
    "How to choose between no-code, AI-assisted, and traditional development honestly",
    "How to write for conversion without sounding like a sales letter",
    "The complete launch sequence — domain, hosting, SSL, testing, analytics",
  ],
  whoItIsFor: [
    "Anyone building their first business website and unsure where to start",
    "Solopreneurs whose current site describes them but produces nothing",
    "People who have started a website builder three times and abandoned it",
    "Freelancers and consultants who need a credible destination fast",
  ],
  whatYouWillBuild: [
    "A one-page website plan: purpose, audience, offer, and the one action",
    "A sitemap and content outline you can hand to any builder",
    "A structured homepage wireframe, section by section",
    "A completed pre-launch checklist covering technical, content and mobile",
  ],
  includedResources: [
    { title: "Website Planning Worksheet", detail: "The five questions to answer before you open a builder." },
    { title: "Homepage Wireframe", detail: "The nine-section structure with the job of each section written out." },
    { title: "Pre-Launch Checklist", detail: "Everything to verify before the site goes live." },
    { title: "Mobile Testing Checklist", detail: "What to check on an actual phone, not a resized browser window." },
  ],
  nextStep: {
    slug: "landing-page",
    pitch:
      "Your site exists and works. If you now want a page that converts a specific audience into a specific action — a booked call, a sale, a signup — that is a different discipline.",
  },
  faqs: [
    {
      question: "Do I need to know how to code?",
      answer:
        "No. Module 3 covers three build approaches, and two of them require no coding at all. The course is about deciding what to build and why; the tooling is a choice you make afterwards based on your budget, timeline and appetite for learning.",
    },
    {
      question: "How long will this actually take me?",
      answer:
        "Reading takes about two and a half hours. Doing it — planning, building and launching a real site — usually takes somewhere between a weekend and three weeks depending on how much content you need to write and which build approach you choose. The planning modules are the ones worth not rushing.",
    },
    {
      question: "What will the website cost me to run?",
      answer:
        "A domain is typically $10–$20 a year. Hosting ranges from free (for a static site on a platform like Vercel or Netlify) to roughly $15–$30 a month for a hosted website builder. SSL is free on every modern host. Module 5 covers what you actually need versus what gets upsold.",
    },
    {
      question: "Is this relevant if I already have a website?",
      answer:
        "Yes, if the site is not producing anything. Modules 1, 2 and 4 are diagnostic — they will tell you whether the problem is the structure, the message, or the fact that the site was never designed around an action in the first place.",
    },
  ],
  chapters: [
    {
      slug: "what-makes-a-website-work",
      number: 1,
      title: "What Makes a Website Actually Work",
      summary:
        "The difference between a site that describes a business and one that moves someone toward a decision.",
      durationMinutes: 25,
      blocks: [
        {
          type: "text",
          body: "Most business websites are online brochures. They say who the business is, what it does, and roughly where it is — then stop. The visitor reads it, thinks \"that seems fine\", and leaves. Nothing was wrong with the site. It just never asked for anything.",
        },
        {
          type: "text",
          body: "A website that works does something different: it takes a stranger who arrived with a problem and moves them, step by step, toward one specific action. That is the whole difference, and it is a decision you make before you choose a single colour.",
        },
        {
          type: "heading",
          text: "Brochure versus system",
        },
        {
          type: "framework",
          title: "The same business, two websites",
          steps: [
            {
              label: "The brochure",
              detail: "Home, About, Services, Contact. Each page describes something. The visitor has to work out for themselves what to do next, and most will not bother.",
            },
            {
              label: "The system",
              detail: "A homepage that names the visitor's problem, shows the outcome, proves it is credible, handles the two objections that stop people, and asks for one specific action — repeated three times down the page.",
            },
          ],
        },
        {
          type: "callout",
          tone: "signal",
          title: "The core question",
          body: "Before anything else, answer this: what is the single thing you want a visitor to do? Book a call. Buy the thing. Join the list. One answer. Everything on the site is then judged by whether it helps or hinders that.",
        },
        {
          type: "heading",
          text: "The visitor journey, honestly",
        },
        {
          type: "text",
          body: "People do not read websites. They scan for evidence that they are in the right place, and they leave the moment they conclude they are not. You get a few seconds to survive that scan. This is not a reason to write less — it is a reason to put the most important thing first.",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "They arrive from somewhere specific — a search, a link, an ad, a referral — holding an expectation.",
            "They scan the top of the page for confirmation that this matches what they came for.",
            "If confirmed, they read further and start assessing whether you are credible.",
            "If credible, they look for what happens next and how much it commits them to.",
            "If the next step is clear and low-risk enough, they take it. If not, they leave and rarely come back.",
          ],
        },
        {
          type: "heading",
          text: "What builds trust on a website",
        },
        {
          type: "text",
          body: "Trust is not built by claiming to be trustworthy. It comes from specific, checkable things — and a beginner can produce most of them on day one.",
        },
        {
          type: "list",
          items: [
            "Specificity. Describing the visitor's problem more precisely than they expected reads as expertise.",
            "A real human. A name, a face, a location. Anonymous businesses feel risky.",
            "Working details. A real email, a real phone number, a site that loads fast and does not break on mobile.",
            "Honest scope. Saying what you do not do makes what you do say more believable.",
            "Evidence, where you have it. Real work, real results, real names — only when you can substantiate them.",
          ],
        },
        {
          type: "callout",
          tone: "warn",
          title: "Do not fake it",
          body: "Invented testimonials, stock photos of fake teams, and made-up statistics are easy to spot and permanently damaging when caught. Having no testimonials yet is normal and fine. Fabricating them is a decision you cannot undo.",
        },
        {
          type: "heading",
          text: "Calls to action",
        },
        {
          type: "text",
          body: "A call to action is a button or link asking for the one thing. Three rules make them work: say what happens when clicked, keep the commitment proportional to the trust you have earned, and use the same one everywhere rather than varying it.",
        },
        {
          type: "example",
          title: "Weak versus clear",
          body: "\"Learn more\" tells the visitor nothing and commits to nothing — so nobody clicks it with intent. \"Book a 20-minute call\" tells them the format, the length, and implicitly the cost (twenty minutes of their time). The second converts better because the person clicking knows exactly what they are agreeing to.",
        },
      ],
      exercise: {
        title: "Audit a website you know",
        prompt:
          "Open your current website, or a competitor's if you do not have one yet. Spend five minutes assessing it as a stranger would.",
        steps: [
          "Read only what is visible without scrolling. Write down what you think the business does and who for.",
          "Count the calls to action above the fold. More than one is a split; zero is a brochure.",
          "Find the single most specific sentence on the page. If there is not one, that is the problem.",
          "Check it on your phone. Note anything that is hard to read or tap.",
        ],
      },
      actionStep:
        "Write one sentence: \"The single action I want a visitor to take is ______.\" Keep it to one action. You will use this in every module that follows.",
      recap: [
        "A brochure describes; a system moves someone toward one action.",
        "Visitors scan for confirmation before they read — put the most important thing first.",
        "Trust comes from specificity, real details and honest scope, not from claiming trustworthiness.",
        "One call to action, stated clearly, repeated — not three competing ones.",
      ],
    },
    {
      slug: "plan-before-you-build",
      number: 2,
      title: "Plan Before You Build",
      summary:
        "The five decisions that determine whether the build takes a weekend or three frustrating months.",
      durationMinutes: 30,
      blocks: [
        {
          type: "text",
          body: "The most common way a first website fails is that someone opens a builder, picks a template, and starts filling in boxes. Three weeks later they have a site that looks acceptable and says nothing, because the template decided the structure and the structure decided the message.",
        },
        {
          type: "text",
          body: "Planning first is not bureaucracy. It is the difference between building once and rebuilding three times. This module produces a one-page plan you can hand to any builder, any developer, or any AI tool.",
        },
        {
          type: "heading",
          text: "The five decisions",
        },
        {
          type: "framework",
          title: "Answer these before you open anything",
          steps: [
            {
              label: "What the business does",
              detail: "In one sentence, in plain language, without industry vocabulary. If a friend outside your field cannot repeat it back, rewrite it.",
            },
            {
              label: "Who it is for",
              detail: "Be specific enough that it excludes people. \"Small businesses\" is not a customer; \"independent bookkeepers with more referrals than they can handle\" is.",
            },
            {
              label: "The main offer",
              detail: "The one thing you most want to sell. Not everything you can do — the thing that pays best, that you deliver best, or that opens the door to the rest.",
            },
            {
              label: "The desired action",
              detail: "The single thing a visitor should do. Book, buy, enquire, subscribe. One only. Everything else on the site is secondary to this.",
            },
            {
              label: "The proof you actually have",
              detail: "Real work, real outcomes, real credentials. List only what you can substantiate. Empty is fine — it tells you what to collect first.",
            },
          ],
        },
        {
          type: "callout",
          tone: "signal",
          title: "The one-sentence test",
          body: "Write: \"I help [who] to [outcome] by [how].\" If you cannot fill all three blanks without hedging, the website is not the problem yet — the offer is. Fix that first; it makes every page easier to write.",
        },
        {
          type: "heading",
          text: "Your sitemap",
        },
        {
          type: "text",
          body: "A first website does not need many pages. More pages means more content to write, more to maintain, and more places for a visitor to wander away from the action. Start with four or five and add only when something genuinely needs its own page.",
        },
        {
          type: "framework",
          title: "The standard first sitemap",
          steps: [
            { label: "Home", detail: "Does 80% of the work. Problem, outcome, proof, action. Most visitors will see only this page." },
            { label: "Services or Offer", detail: "What you sell, in detail, for people who need more before deciding." },
            { label: "About", detail: "Who you are and why you are credible. More visited than people expect — it is where trust gets checked." },
            { label: "Contact or Book", detail: "Where the action happens. Keep it free of distractions." },
            { label: "Work or Proof (optional)", detail: "Add only once you have real work to show. An empty portfolio page is worse than no portfolio page." },
          ],
        },
        {
          type: "heading",
          text: "Planning the content",
        },
        {
          type: "text",
          body: "Write the words before you design anything. Design is supposed to present content — when you design first, you end up writing to fill boxes, and the message bends to fit a template someone else built for a different business.",
        },
        {
          type: "list",
          items: [
            "For each page, write the one job that page does in a single sentence.",
            "Write the headline first. If the headline is vague, the page will be too.",
            "Draft in a plain document with no formatting — it forces you to judge the words alone.",
            "Read every sentence and ask: would a competitor write this too? If yes, it is not saying anything.",
            "Cut anything that is true but does not help the visitor decide.",
          ],
        },
        {
          type: "example",
          title: "Writing to fill a box",
          body: "A template has a three-column feature section, so the business invents three features. One is real, one is a restatement of the first, and one is \"Great Communication\". The visitor reads three things, believes one, and trusts the page slightly less than before they read it. The template caused that.",
        },
      ],
      checklist: {
        title: "Website Planning Worksheet",
        groups: [
          {
            label: "The five decisions",
            items: [
              "Business described in one plain sentence, no jargon",
              "Target customer specific enough to exclude people",
              "Main offer chosen — one, not a menu",
              "Single desired action defined",
              "Proof inventory written, with nothing unsubstantiated on it",
            ],
          },
          {
            label: "Structure",
            items: [
              "Sitemap written — four or five pages maximum to start",
              "One-sentence job written for every page",
              "Headline drafted for every page",
              "Every page routes to the same single action",
            ],
          },
          {
            label: "Content",
            items: [
              "Copy drafted in a plain document before any design",
              "Every sentence passes the \"would a competitor write this?\" test",
              "Industry jargon removed or explained",
              "Contact details decided and real",
            ],
          },
        ],
      },
      exercise: {
        title: "Write the one-page plan",
        prompt:
          "Produce the plan on a single page. It should be short enough to read in a minute and complete enough to build from.",
        steps: [
          "Answer all five decisions in one line each.",
          "Write your sitemap as a simple list.",
          "For each page, write its one-sentence job.",
          "Write the homepage headline. Rewrite it three times and keep the most specific version.",
        ],
      },
      actionStep:
        "Send your one-sentence business description to someone outside your industry. Ask them to tell you what you do and who for. If they get it wrong, rewrite it before building anything.",
      recap: [
        "Planning first is the difference between building once and rebuilding three times.",
        "Five decisions: what, who, the offer, the action, the proof.",
        "Start with four or five pages — the homepage does most of the work.",
        "Write the words before the design, or the template will write them for you.",
      ],
    },
    {
      slug: "build-the-website",
      number: 3,
      title: "Build the Website",
      summary:
        "Choosing a build approach honestly, then structuring the homepage section by section.",
      durationMinutes: 35,
      blocks: [
        {
          type: "text",
          body: "There are three realistic ways to build a website in 2026, and the marketing around all three overstates how easy it is. Here is the honest version, so you can pick based on your actual situation rather than an ad.",
        },
        {
          type: "heading",
          text: "The three approaches",
        },
        {
          type: "framework",
          title: "What each one actually costs you",
          steps: [
            {
              label: "No-code builders",
              detail: "Webflow, Squarespace, Framer, Wix, Carrd. Fastest to something live. Monthly cost, typically $15–$40. You are limited to what the platform supports, and moving off later means rebuilding. Best when you want a site this week and your needs are standard.",
            },
            {
              label: "AI-assisted development",
              detail: "Tools like Claude Code, Cursor or v0 generating a real codebase you own. Far more capable and cheaper to host, but you still need to read what it produced, test it, and be able to fix it when something breaks. Best when you are willing to learn a little and want to own the result.",
            },
            {
              label: "Traditional development",
              detail: "Hiring a developer, or writing it yourself. Most control, highest cost in money or time. Best when the site does something genuinely custom, or when it is commercially important enough to justify the spend.",
            },
          ],
        },
        {
          type: "callout",
          tone: "warn",
          title: "On AI-assisted building",
          body: "AI can produce a working site quickly. It does not remove the need to test it, understand roughly how it works, or check that forms actually deliver email. Treat generated code as a capable first draft from someone who cannot see your business — not as a finished product.",
        },
        {
          type: "callout",
          tone: "muted",
          title: "Choose for this year, not forever",
          body: "A no-code site you launch this month beats a custom build you are still planning in six months. You can always rebuild later, and by then you will know far more about what the site actually needs to do.",
        },
        {
          type: "heading",
          text: "The homepage structure",
        },
        {
          type: "text",
          body: "This is the wireframe. Nine sections, in this order, each with one job. It works for service businesses, consultants, freelancers and most small product businesses. Build it in this sequence and the page will hold together regardless of which tool you used.",
        },
        {
          type: "framework",
          title: "Homepage wireframe, top to bottom",
          steps: [
            {
              label: "1. Navigation",
              detail: "Four or five links maximum, plus your one call to action as a button. Every extra link is an exit. No dropdown menus on a first site.",
            },
            {
              label: "2. Hero",
              detail: "Headline naming the outcome or the problem, one supporting sentence, and the call to action. A visitor should understand who this is for within about five seconds.",
            },
            {
              label: "3. Problem",
              detail: "Describe the situation they are in, in their words. This is where they decide you understand them. Specificity here does more than any other section.",
            },
            {
              label: "4. Solution",
              detail: "What you do about it, and crucially how it works. The mechanism is what makes the promise credible rather than optimistic.",
            },
            {
              label: "5. Services or products",
              detail: "What is actually buyable, with enough detail to evaluate. Three options maximum — more creates paralysis rather than choice.",
            },
            {
              label: "6. Proof",
              detail: "Evidence you can substantiate: real work, real results, real names with permission. If you have none yet, use a demonstration of method instead and skip the testimonials.",
            },
            {
              label: "7. About",
              detail: "A short version on the homepage — who you are, why you are credible, one photo of an actual person. Link to the full page.",
            },
            {
              label: "8. FAQ",
              detail: "The four or five questions people genuinely ask before buying. This section quietly handles objections without sounding defensive.",
            },
            {
              label: "9. Final CTA and footer",
              detail: "Repeat the same call to action, unchanged. Footer carries contact details, legal pages and nothing that competes for attention.",
            },
          ],
        },
        {
          type: "heading",
          text: "Building it in practice",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Build the structure with placeholder text first, so you can see the shape before the words distract you.",
            "Drop your real copy in, section by section, starting with the hero.",
            "Build mobile first, or at minimum check every section on a phone as you go rather than at the end.",
            "Keep the styling boring: two fonts maximum, your brand colour used sparingly for actions, generous spacing.",
            "Add the form and test it immediately. Do not leave forms until launch day.",
          ],
        },
        {
          type: "example",
          title: "Why the problem section matters most",
          body: "Two consultants sell the same service. One writes \"We provide strategic operational consulting for growing businesses.\" The other writes \"You are the bottleneck. Every decision routes through you, you are working weekends, and hiring has not helped because nothing is written down.\" The second one gets the enquiry — not because the service is better, but because the reader recognised themselves.",
        },
      ],
      checklist: {
        title: "Homepage Build Checklist",
        groups: [
          {
            label: "Structure",
            items: [
              "Navigation has five links or fewer, plus one CTA button",
              "Hero states the outcome or problem, not the company name",
              "Problem section written in the customer's words",
              "Solution explains the mechanism, not just the promise",
              "Three offers maximum in the services section",
              "Proof section contains only substantiable evidence",
              "FAQ answers four or five real questions",
              "Same CTA repeated at the end, unchanged",
            ],
          },
          {
            label: "Craft",
            items: [
              "Two fonts maximum across the whole site",
              "Brand colour reserved for calls to action",
              "Every section checked on a real phone",
              "Form built and successfully tested",
              "No placeholder text remaining anywhere",
            ],
          },
        ],
      },
      exercise: {
        title: "Write your problem section",
        prompt:
          "This is the highest-leverage section on the page. Write it before anything else in the build.",
        steps: [
          "Write down three sentences describing your customer's situation, using words they would actually say.",
          "Remove every industry term and replace it with plain language.",
          "Read it aloud. If it sounds like a brochure, it is too abstract — add a specific detail.",
          "Show it to one person in your target audience and ask whether it describes them.",
        ],
      },
      actionStep:
        "Pick your build approach and commit to it today. Then build the page structure with placeholder text only — no copy, no styling — so you can see the shape before you fill it.",
      recap: [
        "Three approaches: no-code (fast), AI-assisted (capable, needs testing), traditional (control, cost).",
        "A live site this month beats a perfect site in six.",
        "Nine sections, each with one job, in a fixed order.",
        "The problem section does more work than any other — write it in the customer's words.",
      ],
    },
    {
      slug: "make-it-convert",
      number: 4,
      title: "Make It Convert",
      summary:
        "Turning a site that exists into a site that produces enquiries — messaging, trust signals, mobile and speed.",
      durationMinutes: 30,
      blocks: [
        {
          type: "text",
          body: "Your site now exists and is structurally sound. This module is about the difference between a site people visit and a site people act on. Most of it comes down to clarity, and clarity is mostly a writing problem rather than a design one.",
        },
        {
          type: "heading",
          text: "Benefits and features",
        },
        {
          type: "text",
          body: "A feature is what something is. A benefit is what changes for the person because of it. Both belong on the page — the benefit sells, the feature makes the benefit believable. Most beginner sites list only features and wonder why nothing lands.",
        },
        {
          type: "example",
          title: "The same thing, three ways",
          body: "Feature only: \"Weekly reporting dashboard.\" Benefit only: \"Always know where you stand.\" Both, which is what works: \"Always know where you stand — a weekly dashboard showing what came in, what converted, and what it cost.\" The benefit gives them a reason to care; the feature makes it credible.",
        },
        {
          type: "heading",
          text: "Writing that converts",
        },
        {
          type: "list",
          items: [
            "Write to one person. \"You\", not \"our clients\" or \"businesses\".",
            "Lead with the outcome, support with the mechanism, prove with evidence.",
            "Cut adjectives that cannot be checked — innovative, passionate, cutting-edge, world-class. They are noise and every competitor uses them.",
            "Use numbers where they are real and verifiable. Never invent them.",
            "Short sentences for important points. Long ones are fine for explanation, but not for the line you most need read.",
          ],
        },
        {
          type: "callout",
          tone: "signal",
          title: "The stranger test",
          body: "Send your homepage link to three people who do not know your business. Ask two questions: what does this do, and who is it for? If two of three answer correctly without follow-up, the messaging works. If they hedge, the page is asking the reader to do work you should have done.",
        },
        {
          type: "heading",
          text: "Calls to action that get clicked",
        },
        {
          type: "framework",
          title: "Four rules",
          steps: [
            { label: "Name the action and the format", detail: "\"Book a 20-minute call\" beats \"Get in touch\" because the reader knows exactly what they are agreeing to." },
            { label: "Match commitment to trust", detail: "Asking a first-time visitor for a sales call is a large ask. A lower-commitment step — a guide, a short audit — converts more people and warms them up." },
            { label: "Repeat, do not vary", detail: "The same CTA at the top, middle and bottom. Different CTAs on one page split your traffic between them." },
            { label: "Remove competition around it", detail: "No secondary links beside the primary button. Give the action clear space." },
          ],
        },
        {
          type: "heading",
          text: "Trust signals",
        },
        {
          type: "text",
          body: "You can add most of these on day one, before you have any clients. They work because they are checkable facts rather than claims.",
        },
        {
          type: "list",
          items: [
            "A real photo of you, not an illustration or a stock image of a stranger.",
            "Your actual location, even if you work remotely.",
            "A working email address and, if you are comfortable, a phone number.",
            "Clear pricing or at least a price range. Hidden pricing reads as expensive and evasive.",
            "Honest scope — what you do not do, and who you are not right for.",
            "A page that loads fast and works on a phone. Both are read as competence.",
          ],
        },
        {
          type: "heading",
          text: "Mobile and speed",
        },
        {
          type: "text",
          body: "More than half of your visitors will be on a phone, and for social traffic it is far higher. A site that is awkward on mobile is not a minor flaw — it is most of your audience having a bad experience.",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Test on a real phone, not a resized browser window. They behave differently.",
            "Tap targets need to be comfortably thumb-sized — roughly 44 pixels minimum.",
            "Body text at 16 pixels or larger. Anything smaller forces pinch-zooming.",
            "Compress every image before uploading. Unoptimised images are the single most common cause of slow sites.",
            "Check your load time on a mobile connection, not your office wifi.",
          ],
        },
        {
          type: "callout",
          tone: "warn",
          title: "Forms fail silently",
          body: "The most common serious bug on a small business website is a contact form that submits successfully and delivers nothing. It looks fine to every visitor and to you. Test it, check the inbox, and check the spam folder — then test it again after any change to the site.",
        },
      ],
      checklist: {
        title: "Conversion Checklist",
        groups: [
          {
            label: "Message",
            items: [
              "Headline names an outcome or problem, not the company",
              "Written to \"you\", one person at a time",
              "Every claim is either checkable or removed",
              "Benefits paired with the features that make them credible",
              "Passed the stranger test with at least two of three readers",
            ],
          },
          {
            label: "Action",
            items: [
              "One call to action, repeated unchanged",
              "CTA names the action and its format",
              "Commitment level matches a first-time visitor",
              "No competing links beside the primary button",
            ],
          },
          {
            label: "Trust",
            items: [
              "Real photo of a real person",
              "Location stated",
              "Working contact details",
              "Pricing or a range shown",
              "Only substantiable proof on the page",
            ],
          },
          {
            label: "Mobile and speed",
            items: [
              "Tested on an actual phone",
              "Tap targets comfortably thumb-sized",
              "Body text 16px or larger",
              "All images compressed",
              "Load time checked on mobile data",
              "Contact form tested end to end, inbox confirmed",
            ],
          },
        ],
      },
      exercise: {
        title: "Run the stranger test",
        prompt:
          "This is the fastest diagnostic available to you, and almost nobody does it.",
        steps: [
          "Send your homepage to three people outside your industry.",
          "Ask exactly two questions: what does this business do, and who is it for?",
          "Write their answers down word for word, including the wrong ones.",
          "Rewrite your hero section based on what they got wrong, then retest with one new person.",
        ],
      },
      actionStep:
        "Fill in your own contact form right now, from your phone, and confirm the email arrives. If it does not, fix that before anything else on this list.",
      recap: [
        "Benefits sell, features make the benefit believable — use both.",
        "Cut every adjective a competitor could also claim.",
        "One CTA, named specifically, repeated unchanged.",
        "Test on a real phone, and test your form end to end.",
      ],
    },
    {
      slug: "launch",
      number: 5,
      title: "Launch",
      summary:
        "Domain, hosting, SSL, testing, analytics and the complete pre-launch checklist.",
      durationMinutes: 30,
      blocks: [
        {
          type: "text",
          body: "Launch is where preventable mistakes happen, because people rush the last ten percent after doing ninety percent of the work. This module is the sequence, in order, plus the checklist that catches what the sequence misses.",
        },
        {
          type: "heading",
          text: "Domain",
        },
        {
          type: "list",
          items: [
            "Buy from an established registrar. Prices are broadly similar; avoid the ones that advertise a $1 first year and renew at $40.",
            "Shorter is better, and easier to say out loud beats clever spelling.",
            ".com remains the default people type. Country domains are fine when you serve one country.",
            "Turn on auto-renew immediately. Expired domains are a genuinely painful and avoidable disaster.",
            "Turn on WHOIS privacy so your home address is not public.",
          ],
        },
        {
          type: "heading",
          text: "Hosting and SSL",
        },
        {
          type: "text",
          body: "If you used a website builder, hosting and SSL are included and there is nothing to do. If you built a real codebase, static hosting on a platform like Vercel or Netlify is free at small scale and faster than most paid shared hosting.",
        },
        {
          type: "callout",
          tone: "signal",
          title: "SSL is not optional",
          body: "Your site must load on https with a padlock. Browsers actively warn visitors away from sites without it. Every modern host issues certificates free and automatically — if yours wants to charge for SSL, that tells you something about the host.",
        },
        {
          type: "heading",
          text: "SEO basics",
        },
        {
          type: "text",
          body: "You do not need an SEO strategy to launch. You need the basics correct so that search engines can read the site and so your link looks right when shared. That is roughly an hour of work and it matters for years.",
        },
        {
          type: "framework",
          title: "The basics that matter",
          steps: [
            { label: "Page title", detail: "Every page needs a unique one, roughly 50–60 characters, describing the page rather than the brand alone." },
            { label: "Meta description", detail: "One or two sentences, around 150 characters. This is the snippet people read in search results — write it for them, not for an algorithm." },
            { label: "One h1 per page", detail: "The main heading. Subheadings then step down to h2 and h3 in order, without skipping levels." },
            { label: "Image alt text", detail: "Describe what the image shows. Needed for screen readers, and it is how search engines read images." },
            { label: "Sitemap and indexing", detail: "Generate a sitemap.xml, submit it to Google Search Console, and confirm your pages are not accidentally set to noindex." },
          ],
        },
        {
          type: "callout",
          tone: "warn",
          title: "The noindex trap",
          body: "Many builders set new sites to \"discourage search engines\" while in draft, and it is easy to launch without turning that off. Check it explicitly on launch day. Sites have sat invisible for months because of this single setting.",
        },
        {
          type: "heading",
          text: "Analytics",
        },
        {
          type: "text",
          body: "Install analytics before launch, not after. The first weeks of data are the cleanest signal you will get because nothing has been changed yet. You need four numbers: how many people arrived, where they came from, which pages they saw, and how many completed the action.",
        },
        {
          type: "heading",
          text: "Testing before you announce it",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Click every single link, including the footer and the navigation. Broken links are the most common launch bug.",
            "Submit every form and confirm the email arrives. Check spam.",
            "View every page on a phone, a tablet and a desktop.",
            "Test in a second browser — something built only in Chrome occasionally breaks elsewhere.",
            "Read every page aloud for typos. Reading aloud catches what silent reading skips.",
            "Check the site loads on https with a valid padlock.",
            "Visit a URL that does not exist and confirm you get a proper 404 page rather than a crash.",
          ],
        },
      ],
      checklist: {
        title: "Launch Checklist",
        groups: [
          {
            label: "Domain and hosting",
            items: [
              "Domain purchased with auto-renew enabled",
              "WHOIS privacy turned on",
              "Domain correctly pointed at the host",
              "Site loads on https with a valid certificate",
              "www and non-www both resolve to the same place",
            ],
          },
          {
            label: "SEO",
            items: [
              "Unique page title on every page",
              "Meta description written for every page",
              "One h1 per page, headings in order",
              "Alt text on every meaningful image",
              "sitemap.xml generated and submitted",
              "\"Discourage search engines\" / noindex explicitly turned OFF",
            ],
          },
          {
            label: "Function",
            items: [
              "Every link clicked and working",
              "Every form submitted and the email confirmed received",
              "Confirmation message shown after form submission",
              "404 page exists and looks intentional",
              "Analytics installed and recording a test visit",
            ],
          },
          {
            label: "Final QA",
            items: [
              "Viewed on a real phone, tablet and desktop",
              "Checked in a second browser",
              "Every page proofread aloud",
              "No placeholder text or sample images remaining",
              "Load time acceptable on mobile data",
            ],
          },
        ],
      },
      exercise: {
        title: "The full pre-launch pass",
        prompt:
          "Work the checklist above in one sitting rather than across several days. Problems cluster, and you will catch more in one focused pass.",
        steps: [
          "Work through every checklist group in order and mark each item honestly.",
          "Write down every problem you find rather than fixing them as you go.",
          "Fix the whole list afterwards, then re-run the Function and Final QA groups.",
          "Only announce the site once both those groups are fully clear.",
        ],
      },
      actionStep:
        "Set your launch date now, before the site is finished. A dated deadline prevents the indefinite polishing phase that stops most first websites from ever going live.",
      recap: [
        "Auto-renew the domain and turn on privacy — both take one minute and prevent real damage.",
        "SSL is mandatory; every modern host provides it free.",
        "Check the noindex setting explicitly on launch day.",
        "Install analytics before launch; the first weeks are the cleanest data you get.",
        "Test links, forms and devices in one focused pass before announcing anything.",
      ],
    },
  ],
};
