import type { EducationProduct } from "../types";

/**
 * PAID — Website Launch Checklist ($9).
 *
 * The cheapest product in the library and the most immediately usable.
 * Seven categories of checks, each with the reasoning behind it, built to be
 * worked through interactively or printed.
 */

export const websiteLaunchChecklist: EducationProduct = {
  slug: "website-launch-checklist",
  title: "Website Launch Checklist",
  tier: "paid",
  price: 9,
  format: "checklist",
  category: "websites",
  difficulty: "beginner",
  estimatedMinutes: 90,
  summary:
    "Every check to run before a website goes live — strategy, content, design, technical, SEO, conversion and final QA.",
  description:
    "Launch is where preventable mistakes happen, because people rush the last ten percent. This is the complete pre-launch checklist across seven categories, with the reason behind each check so you can judge which ones matter for your site. Work through it interactively or print it.",
  whatYouWillLearn: [
    "The strategic checks most people skip entirely before launching",
    "What to verify in content, design and responsiveness",
    "The technical checks that prevent invisible, expensive failures",
    "SEO basics that matter on day one and cost an hour",
    "Conversion and tracking verification before you send any traffic",
    "A final QA pass that catches what everything else missed",
  ],
  whoItIsFor: [
    "Anyone about to launch a website and wanting to not regret it",
    "Freelancers and agencies who need a repeatable client handover process",
    "People whose site is already live and was never properly checked",
  ],
  whatYouWillBuild: [
    "A completed launch checklist across all seven categories",
    "A verified, tested, tracked website ready for traffic",
  ],
  includedResources: [
    { title: "Strategy checks", detail: "Audience, offer, positioning and the single action." },
    { title: "Content checks", detail: "Headlines, copy, images, proof and FAQs." },
    { title: "Design checks", detail: "Desktop, tablet, mobile, typography, spacing and consistency." },
    { title: "Technical checks", detail: "Domain, hosting, SSL, forms, email, links, 404 and performance." },
    { title: "SEO checks", detail: "Titles, descriptions, headings, alt text, sitemap and indexing." },
    { title: "Conversion checks", detail: "CTAs, forms, tracking, thank-you page and follow-up." },
    { title: "Final QA", detail: "The last pass before you announce it." },
  ],
  faqs: [
    {
      question: "My site is already live. Is this still useful?",
      answer:
        "Yes, and often more so. Live sites accumulate problems nobody checks for — broken forms, dead links, tracking that stopped working after a redesign. The Technical and Conversion categories are the ones to run first on an existing site.",
    },
    {
      question: "Do I need all of these for a simple site?",
      answer:
        "No. Each check explains why it exists, so you can judge relevance. The Technical and Final QA categories apply to every site without exception. Some SEO checks matter less if you are not pursuing search traffic at all.",
    },
    {
      question: "Can I use this with clients?",
      answer:
        "Yes. It works well as a handover document — running it with a client at the end of a project demonstrates thoroughness and prevents the post-launch problems that damage otherwise good relationships.",
    },
  ],
  nextStep: {
    slug: "landing-page",
    pitch:
      "A properly launched site is the baseline. If you now want a page built specifically to convert one audience into one action, that is a different discipline.",
  },
  chapters: [
    {
      slug: "strategy-and-content",
      number: 1,
      title: "Strategy and Content",
      summary:
        "The checks most people skip — whether the site is actually built around anything.",
      durationMinutes: 20,
      blocks: [
        {
          type: "text",
          body: "These are the checks nobody runs, because they feel like they belong to an earlier phase. They do — but launch is the last honest moment to notice that the site was never built around a specific person or a specific action.",
        },
        {
          type: "callout",
          tone: "signal",
          title: "If strategy fails, stop",
          body: "A technically perfect site with no defined audience, offer or action will not produce anything. If the strategy checks fail, fixing them is worth delaying launch for. Nothing further down this list compensates.",
        },
        {
          type: "heading",
          text: "Why content checks matter at launch",
        },
        {
          type: "text",
          body: "Copy written weeks ago, edited in pieces, and pasted into a builder accumulates inconsistencies — different claims on different pages, a headline that no longer matches the offer, placeholder text nobody removed. Reading the whole site in one sitting catches all of it.",
        },
        {
          type: "list",
          items: [
            "Read every page in one sitting, in the order a visitor would.",
            "Read aloud. It catches awkward phrasing and typos that silent reading skips entirely.",
            "Check that claims on one page do not contradict another page.",
            "Search the whole site for \"lorem\", \"TODO\", \"placeholder\" and your builder's default text.",
          ],
        },
      ],
      checklist: {
        title: "Strategy and content checks",
        groups: [
          {
            label: "Strategy",
            items: [
              "Target audience defined specifically enough to exclude people",
              "One main offer chosen, not a menu of everything",
              "Positioning stated — what you do, for whom, and why you rather than the alternative",
              "One primary action defined for the whole site",
              "Every page routes toward that same action",
              "A stranger could state what you do after reading the homepage once",
            ],
          },
          {
            label: "Content",
            items: [
              "Every page has a headline naming an outcome or problem, not a category",
              "Copy written to \"you\", one reader at a time",
              "Every claim substantiable if challenged",
              "No invented testimonials, statistics or credentials",
              "Images are relevant — no stock photos of unrelated strangers",
              "Any testimonials are real, attributed, and used with permission",
              "FAQs answer questions people actually ask",
              "Contact details correct and tested",
              "All placeholder and sample text removed",
              "Whole site read aloud for typos and flow",
              "No contradictions between pages",
            ],
          },
        ],
      },
      actionStep:
        "Read your entire site aloud in one sitting, in the order a visitor would. It is tedious and it catches more than any other single check on this list.",
      recap: [
        "Strategy checks are the ones people skip and the ones that matter most.",
        "Reading aloud catches what silent reading misses.",
        "Search for placeholder text explicitly — it hides in unvisited pages.",
      ],
    },
    {
      slug: "design-and-technical",
      number: 2,
      title: "Design and Technical",
      summary:
        "Responsiveness, consistency, and the technical failures that are invisible until they are expensive.",
      durationMinutes: 30,
      blocks: [
        {
          type: "text",
          body: "Design checks here are limited to what affects whether the site works and converts — not aesthetic preference. Technical checks cover the failures that are completely invisible from the outside, which is exactly what makes them dangerous.",
        },
        {
          type: "heading",
          text: "Responsive testing, properly",
        },
        {
          type: "text",
          body: "Resizing a browser window is not mobile testing. Real devices differ in touch behaviour, font rendering, viewport quirks and connection speed. Check on an actual phone.",
        },
        {
          type: "callout",
          tone: "warn",
          title: "The silent form failure",
          body: "The most common serious bug on a small business website is a contact form that submits successfully and delivers nothing. It looks perfect to every visitor and to you. Test it, check the inbox, check spam — then test it again after any change to the site.",
        },
        {
          type: "heading",
          text: "Performance",
        },
        {
          type: "text",
          body: "Unoptimised images are the single most common cause of slow sites, and the easiest to fix. Test on mobile data rather than your office connection — that is what most of your visitors are using.",
        },
        {
          type: "list",
          items: [
            "Compress every image before uploading. Most can be reduced substantially with no visible difference.",
            "Serve images at roughly the size they display. A 4000px image in a 400px slot wastes almost all of it.",
            "Check total page weight — a homepage above a few megabytes will feel slow on mobile data.",
            "Limit fonts. Each additional weight and family is another download before text renders.",
          ],
        },
      ],
      checklist: {
        title: "Design and technical checks",
        groups: [
          {
            label: "Design — devices",
            items: [
              "Checked on a real phone, not a resized browser window",
              "Checked on tablet width",
              "Checked on desktop, including a wide screen",
              "No horizontal scrolling at any width",
              "Tap targets comfortably thumb-sized on mobile",
              "Body text 16px or larger",
            ],
          },
          {
            label: "Design — consistency",
            items: [
              "Two font families maximum",
              "Heading sizes consistent across pages",
              "Spacing rhythm consistent — no section noticeably tighter or looser without reason",
              "Button styles identical everywhere",
              "Brand colour reserved for actions, not decoration",
              "Text contrast readable against every background it appears on",
            ],
          },
          {
            label: "Technical",
            items: [
              "Domain pointed correctly and resolving",
              "Auto-renew enabled on the domain",
              "WHOIS privacy enabled",
              "Site loads on https with a valid certificate",
              "www and non-www both resolve to the same place",
              "Every internal link clicked and working",
              "Every external link checked and opening correctly",
              "Every form submitted and the email confirmed received",
              "Spam folder checked for form emails",
              "Email sending from the domain configured and tested",
              "404 page exists and looks intentional",
              "All images compressed and correctly sized",
              "Page load acceptable on mobile data",
              "Tested in a second browser",
            ],
          },
        ],
      },
      exercise: {
        title: "The device pass",
        prompt:
          "Do this in one sitting with an actual phone in your hand.",
        steps: [
          "Open every page on your phone and scroll through completely.",
          "Tap every button and link with a thumb, not a fingernail.",
          "Submit every form from the phone.",
          "Note anything hard to read, hard to tap, or slow to appear.",
          "Fix everything you noted, then repeat the pass.",
        ],
      },
      actionStep:
        "Fill in your own contact form from your phone right now and confirm the email arrives. If it does not, nothing else on this list matters yet.",
      recap: [
        "Resizing a browser is not mobile testing — use a real device.",
        "Forms fail silently and look perfect while doing so.",
        "Unoptimised images are the most common cause of slow sites.",
        "Test on mobile data, not office wifi.",
      ],
    },
    {
      slug: "seo-conversion-qa",
      number: 3,
      title: "SEO, Conversion and Final QA",
      summary:
        "Being findable, being measurable, and the last pass before you announce it.",
      durationMinutes: 30,
      blocks: [
        {
          type: "text",
          body: "SEO basics take about an hour and matter for years. Conversion checks make sure you can tell whether any of it worked. Final QA catches what the previous six categories missed — and something always slips through.",
        },
        {
          type: "callout",
          tone: "warn",
          title: "The noindex trap",
          body: "Most builders set new sites to discourage search engines while in draft, and it is easy to launch without turning it off. Sites have sat invisible for months because of this one setting. Check it explicitly on launch day.",
        },
        {
          type: "heading",
          text: "Conversion and tracking",
        },
        {
          type: "text",
          body: "Install tracking before launch, not after. The first weeks of data are the cleanest signal you will ever get, because nothing has been changed yet. And verify it fires — assumed tracking is the most expensive bug on this list, because you only discover it when you try to make a decision from data that was never collected.",
        },
        {
          type: "callout",
          tone: "signal",
          title: "Verify, do not assume",
          body: "Complete your own conversion — submit the form, make the purchase — and confirm it appears in your analytics. A site converting without recording it looks identical to one that is not converting at all.",
        },
        {
          type: "heading",
          text: "The final pass",
        },
        {
          type: "text",
          body: "Run final QA in one sitting rather than across several days. Problems cluster, and one focused pass catches substantially more than three distracted ones.",
        },
      ],
      checklist: {
        title: "SEO, conversion and final QA",
        groups: [
          {
            label: "SEO",
            items: [
              "Unique page title on every page, roughly 50–60 characters",
              "Meta description written for every page, around 150 characters",
              "One h1 per page",
              "Headings step down in order without skipping levels",
              "Alt text on every meaningful image",
              "sitemap.xml generated",
              "Sitemap submitted to Google Search Console",
              "noindex / \"discourage search engines\" explicitly turned OFF",
              "robots.txt not accidentally blocking the site",
              "Canonical URLs set correctly",
              "Social sharing preview checked — title, description and image",
            ],
          },
          {
            label: "Conversion",
            items: [
              "One primary call to action, consistent across the site",
              "CTA visible without scrolling on mobile",
              "Forms ask only for fields that change what you do next",
              "Form validation messages are clear and helpful",
              "Confirmation shown after submission, stating what happens next and when",
              "Thank-you page exists rather than an inline message alone",
              "Automated follow-up email configured and tested",
              "Analytics installed and recording",
              "A test conversion completed and confirmed visible in analytics",
              "Conversion events tracked, not just page views",
            ],
          },
          {
            label: "Final QA",
            items: [
              "Every button tested",
              "Every form tested end to end",
              "Every link clicked, internal and external",
              "Every page viewed on phone, tablet and desktop",
              "Page speed checked on mobile data",
              "Whole site proofread aloud",
              "Analytics verified as recording",
              "404 page reached deliberately and looks intentional",
              "Site checked while logged out and in a private window",
              "Someone else asked to click through it and report anything odd",
            ],
          },
        ],
      },
      exercise: {
        title: "The full launch pass",
        prompt:
          "Work all seven categories in one sitting. Record problems rather than fixing as you go.",
        steps: [
          "Work every category in order, marking each item honestly.",
          "Write down every problem without stopping to fix it.",
          "Fix the whole list afterwards, technical issues first.",
          "Re-run the Technical, Conversion and Final QA categories after fixing.",
          "Only announce the site once those three come back completely clean.",
        ],
      },
      actionStep:
        "Ask one person who has never seen the site to click through it while you watch in silence. They will find something you cannot see anymore, and they will find it in about ninety seconds.",
      recap: [
        "Check the noindex setting explicitly — it has hidden sites for months.",
        "Install tracking before launch; verify it fires rather than assuming.",
        "Run final QA in one focused sitting, recording rather than fixing as you go.",
        "Have someone else click through before you announce it.",
      ],
    },
  ],
};
