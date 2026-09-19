import type { EducationProduct } from "../types";

/**
 * FREE — 5 Funnel Mistakes Killing Your Leads.
 *
 * Diagnostic rather than instructional: each chapter names a mistake, shows a
 * bad and better implementation, and gives a fix that takes minutes. Ends in a
 * scored self-audit, which is the asset people keep.
 */

export const funnelMistakes: EducationProduct = {
  slug: "funnel-mistakes",
  title: "5 Funnel Mistakes Killing Your Leads",
  shortTitle: "5 Funnel Mistakes",
  tier: "free",
  price: null,
  format: "guide",
  category: "funnels",
  difficulty: "beginner",
  estimatedMinutes: 45,
  summary:
    "The five failures that quietly waste most of the traffic a small business pays for — and the quick fix for each.",
  description:
    "Most funnels do not fail dramatically. They leak. Traffic arrives, something small is wrong, and the visitor leaves without either of you noticing. This guide covers the five leaks that account for most of that loss, with a bad and better version of each, and ends with a ten-minute audit you can score yourself.",
  whatYouWillLearn: [
    "Why sending traffic to your homepage wastes most of what you paid for it",
    "How to tell an offer problem from a traffic problem",
    "The distraction audit — what to remove from a converting page",
    "What counts as proof when you have no testimonials yet",
    "Why most of the money is lost after first contact, not before",
  ],
  whoItIsFor: [
    "Anyone running paid traffic that is not paying back",
    "Solopreneurs getting visitors but almost no enquiries",
    "People who have built a funnel and cannot tell why it underperforms",
  ],
  whatYouWillBuild: [
    "A completed 10-Minute Funnel Audit with a score for each of the five leaks",
    "A prioritised fix list, ordered by what costs you most",
  ],
  includedResources: [
    { title: "10-Minute Funnel Audit", detail: "A scored self-assessment across all five leaks, with interpretation." },
    { title: "Quick-fix checklist", detail: "The specific change to make for each mistake, most of them under an hour." },
  ],
  nextStep: {
    slug: "funnel-blueprint",
    pitch:
      "Fixing leaks improves what you have. If you would rather build the whole sequence properly — six funnel models, page structures and follow-up — that is the blueprint.",
  },
  faqs: [
    {
      question: "I do not run ads. Is this still relevant?",
      answer:
        "Yes. Every one of these leaks applies to organic traffic, referrals and content too. Paid traffic simply makes them expensive enough to notice — with organic traffic the same losses happen quietly.",
    },
    {
      question: "How long does the audit take?",
      answer:
        "About ten minutes if your funnel is live and you can click through it. You will need access to your own pages and a rough sense of your traffic numbers, but no analytics expertise.",
    },
    {
      question: "What if I score badly on all five?",
      answer:
        "That is common and it is good news, because it means the fixes are available rather than the offer being wrong. Work them in the order the audit gives you — the first two usually account for most of the loss.",
    },
  ],
  chapters: [
    {
      slug: "wrong-destination",
      number: 1,
      title: "Mistake 1 — Sending Traffic to the Wrong Page",
      summary:
        "Why the homepage is almost always the wrong destination for campaign traffic.",
      durationMinutes: 8,
      blocks: [
        {
          type: "text",
          body: "Someone clicks an ad about one specific thing and lands on a homepage that describes your entire business. They now have to work out where to go, whether this is the right place, and what any of it has to do with what they just clicked. Most will not do that work.",
        },
        {
          type: "heading",
          text: "Why it hurts",
        },
        {
          type: "text",
          body: "The click already cost you — in money if it was paid, in attention and goodwill if it was organic. A homepage serves everyone, which means it is optimised for nobody in particular. The visitor arrived mid-thought holding a specific promise, and the page restarts the conversation from the beginning.",
        },
        {
          type: "example",
          title: "Bad implementation",
          body: "An ad says \"Get your bookkeeping caught up before year end.\" The link goes to a homepage headed \"Chartered accountants serving the Midlands since 2009\", with navigation to Services, About, Team, Blog and Contact. The visitor has to translate between the ad and the page, decide which of five links is relevant, and start reading again. Most leave.",
        },
        {
          type: "example",
          title: "Better implementation",
          body: "The same ad links to a page headed \"Get your bookkeeping caught up before year end.\" Same words. Below it: what the catch-up involves, how long it takes, what it costs, and one button — \"Check if we have capacity\". No navigation, no other offers. The visitor's thought continues instead of restarting.",
        },
        {
          type: "callout",
          tone: "signal",
          title: "The rule",
          body: "The first thing on the destination should echo the thing they clicked. Same subject, same language, same specificity. Continuation, not reintroduction.",
        },
        {
          type: "heading",
          text: "The quick fix",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "List every place you currently send traffic from — ads, bio links, email, posts.",
            "For each, write the exact promise the visitor clicked.",
            "Write the first line they actually see on arrival.",
            "Fix the worst mismatch by rewriting the destination's first line to use the source's words.",
          ],
        },
      ],
      checklist: {
        title: "Destination checklist",
        groups: [
          {
            items: [
              "Every campaign has a purpose-built destination, not the homepage",
              "The destination headline echoes the source promise in the same words",
              "Navigation removed or reduced on campaign landing pages",
              "One offer per page — no competing secondary offers",
              "Each traffic source's destination checked by actually clicking through it",
            ],
          },
        ],
      },
      actionStep:
        "Click your own ad or bio link right now as a stranger would. Read only the first line of the destination. If it does not obviously continue what you just clicked, that is your biggest leak.",
      recap: [
        "Campaign traffic arrives holding a specific promise.",
        "Homepages serve everyone, so they convert specific traffic badly.",
        "The destination's first line should echo the source in the same language.",
      ],
    },
    {
      slug: "weak-offer",
      number: 2,
      title: "Mistake 2 — A Weak or Unclear Offer",
      summary:
        "When no amount of page optimisation helps, because the thing being offered is not evaluable.",
      durationMinutes: 9,
      blocks: [
        {
          type: "text",
          body: "This is the leak people least want to hear about, because fixing it means changing the business rather than the page. If a visitor cannot tell what they get, who it is for, or why it would work, the page is not the problem. No headline rewrite fixes an offer nobody can assess.",
        },
        {
          type: "heading",
          text: "Why it hurts",
        },
        {
          type: "text",
          body: "Buyers do not say \"your offer is unclear.\" They say \"it is too expensive,\" or they say nothing and leave. Price objections are usually clarity objections wearing a disguise — the person cannot judge the value, so any price feels like a risk.",
        },
        {
          type: "framework",
          title: "What a clear offer states",
          steps: [
            { label: "The outcome", detail: "What changes for them, in their words. Not the deliverable you produce." },
            { label: "The mechanism", detail: "How the outcome happens. This is what makes the promise credible rather than optimistic." },
            { label: "The scope", detail: "What is included, what is not, what they are responsible for. Unstated scope reads as risk." },
            { label: "The commitment", detail: "Price or range, timeline, and what happens if it does not work." },
          ],
        },
        {
          type: "example",
          title: "Bad implementation",
          body: "\"Digital marketing solutions tailored to your business. We work with you to develop a bespoke strategy that drives results. Contact us to learn more.\" Nothing here can be evaluated. Every competitor could publish the identical sentence, and the reader has no idea what they would receive, when, or for how much.",
        },
        {
          type: "example",
          title: "Better implementation",
          body: "\"We rebuild service-business websites that get traffic but almost no enquiries. Four weeks, from £4,000. You get a rebuilt homepage and booking flow, the messaging rewritten around one offer, and tracking so you can see what changed. If enquiries have not moved in 60 days we keep working at no extra cost.\" A stranger can decide.",
        },
        {
          type: "callout",
          tone: "warn",
          title: "Promise only what you can defend",
          body: "The example above ends in a guarantee. Only make one you can honour — a promise you cannot keep converts a marketing problem into a refund conversation and a reputation problem.",
        },
        {
          type: "heading",
          text: "The quick fix",
        },
        {
          type: "text",
          body: "Write the four components out in full, then compress them into three sentences on the page. If you cannot complete the mechanism line, that is the real work — and it is worth doing before you spend anything more on traffic.",
        },
      ],
      checklist: {
        title: "Offer clarity checklist",
        groups: [
          {
            items: [
              "Outcome stated in the customer's words, not as a deliverable",
              "Mechanism explained — why the outcome follows",
              "Scope stated, including what is not included",
              "Price or a range visible somewhere on the page",
              "A stranger could repeat the offer back after one read",
              "No claim on the page that a competitor could copy verbatim",
            ],
          },
        ],
      },
      exercise: {
        title: "The one-read test",
        prompt:
          "Send your offer section to three people who do not know your business. Ask what they would get, and what it costs.",
        steps: [
          "Copy just the offer section into a message — no design, no context.",
          "Ask two questions: what do you get, and roughly what does it cost?",
          "Record their answers verbatim, including the wrong ones.",
          "Rewrite whichever of the four components produced the confusion.",
        ],
      },
      actionStep:
        "Write your offer's four components on one page. If the mechanism line is the hard one, that is your highest-value work this month — harder than any page change and worth more.",
      recap: [
        "Price objections are usually clarity objections in disguise.",
        "Four components: outcome, mechanism, scope, commitment.",
        "If a competitor could publish your sentence unchanged, it says nothing.",
      ],
    },
    {
      slug: "too-many-distractions",
      number: 3,
      title: "Mistake 3 — Too Many Distractions",
      summary:
        "Every additional option on a converting page splits the result rather than improving it.",
      durationMinutes: 8,
      blocks: [
        {
          type: "text",
          body: "A landing page with one action converts better than the same page with three, and this surprises people every time. Adding options feels generous. In practice it transfers a decision to the visitor that you were supposed to make for them.",
        },
        {
          type: "heading",
          text: "Why it hurts",
        },
        {
          type: "text",
          body: "Two calls to action do not double conversion — they split it, and the easier option wins. That is usually the one worth least to you. Meanwhile every navigation link is an exit route, and on a page you paid to send someone to, an exit is money leaving.",
        },
        {
          type: "example",
          title: "Bad implementation",
          body: "A landing page for a paid consultation with: full site navigation, a newsletter popup after eight seconds, a live chat bubble, a \"download our free guide\" banner, links to three case studies, and social icons in the header. The consultation button is present, somewhere. The page offers six ways to not buy.",
        },
        {
          type: "example",
          title: "Better implementation",
          body: "The same page with the logo linking home, no other navigation, no popup, no chat widget, case studies quoted inline rather than linked away, social icons moved to the footer, and the consultation button repeated three times down the page — identical wording each time.",
        },
        {
          type: "callout",
          tone: "signal",
          title: "The subtraction test",
          body: "Go through your page element by element and ask of each: does this help the visitor take the one action? If it does not, it is competing with it. There is no neutral element on a landing page.",
        },
        {
          type: "callout",
          tone: "muted",
          title: "This applies to landing pages, not every page",
          body: "Your homepage legitimately serves several audiences and needs navigation. The single-action rule is for pages you deliberately send campaign traffic to.",
        },
        {
          type: "heading",
          text: "The quick fix",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Open your landing page and list every clickable element on it.",
            "Mark each one as either the primary action or a distraction.",
            "Remove or hide every distraction — navigation, popups, chat, secondary offers, outbound links.",
            "Repeat the primary CTA at the top, the middle and the end, with identical wording.",
          ],
        },
      ],
      checklist: {
        title: "Distraction audit",
        groups: [
          {
            items: [
              "Site navigation removed or reduced to the logo only",
              "No popups or interstitials on the landing page",
              "Chat widget removed or disabled here",
              "No outbound links — proof quoted inline instead of linked",
              "Social icons not in the header",
              "One CTA wording, repeated rather than varied",
              "No secondary offer competing with the primary one",
            ],
          },
        ],
      },
      actionStep:
        "Count the clickable elements on your landing page. Anything above about five on a page with one job is worth questioning individually.",
      recap: [
        "Two CTAs split traffic; the easier and less valuable one wins.",
        "Navigation links are exit routes on a page you paid for.",
        "No element on a landing page is neutral — it helps or it competes.",
      ],
    },
    {
      slug: "no-trust",
      number: 4,
      title: "Mistake 4 — No Trust or Proof",
      summary:
        "What counts as evidence when you have no testimonials yet, and where to place it.",
      durationMinutes: 9,
      blocks: [
        {
          type: "text",
          body: "By the time someone is reading your offer, they usually accept that the outcome would be valuable. What they doubt is that it will happen for them, with you, at this price. That doubt is risk, and only evidence reduces it.",
        },
        {
          type: "heading",
          text: "Why it hurts",
        },
        {
          type: "text",
          body: "Without proof, a visitor has to take your word for everything — and everyone's website makes confident claims. The page reads as a series of assertions, so the reader defers the decision. Deferred decisions do not come back.",
        },
        {
          type: "callout",
          tone: "warn",
          title: "Never fabricate proof",
          body: "Invented testimonials and borrowed results are easy to check and permanently damaging when found. Having no proof yet is an ordinary starting position. Manufacturing it is not a shortcut — it is a liability with your name on it.",
        },
        {
          type: "heading",
          text: "What counts as proof when you are starting",
        },
        {
          type: "framework",
          title: "Five forms, and the three you already have",
          steps: [
            { label: "Measured client outcomes", detail: "The strongest, and the hardest to have early. Requires a baseline you recorded before the work." },
            { label: "Demonstrated mechanism", detail: "Showing the method working, step by step. Persuasive precisely because it can be inspected." },
            { label: "Work product", detail: "The actual thing you produce — a real audit, a real page, a real build. Available immediately." },
            { label: "Specificity of understanding", detail: "Describing the reader's problem more precisely than they expected. Reads as experience and needs nobody's permission." },
            { label: "Conduct before purchase", detail: "Fast replies, a genuinely useful free resource, a clear page. Every pre-sale interaction is evidence about delivery." },
          ],
        },
        {
          type: "example",
          title: "Bad implementation",
          body: "A testimonials section containing three unattributed quotes — \"Great service!\" — beside stock photos of people who are not clients. This reduces trust rather than building it, because the reader can tell, and now doubts everything else on the page.",
        },
        {
          type: "example",
          title: "Better implementation",
          body: "No testimonials section at all. Instead: a short walkthrough of exactly how the first two weeks work, a real screenshot of the deliverable, and a paragraph describing the reader's situation more accurately than they expected. All true, all available on day one, and more convincing than three anonymous quotes.",
        },
        {
          type: "heading",
          text: "Placement matters more than volume",
        },
        {
          type: "text",
          body: "Proof collected onto a testimonials page does very little, because doubt does not happen there. It happens at specific moments — when you claim the mechanism works, when the price appears, when you ask for commitment. Put the evidence next to the doubt it answers.",
        },
      ],
      checklist: {
        title: "Proof checklist",
        groups: [
          {
            items: [
              "Every claim on the page can be substantiated if challenged",
              "Nothing invented, borrowed, or presented as more than it is",
              "Evidence of the mechanism working, not just assertions about it",
              "Real work product shown where possible",
              "Proof placed beside the claim it supports, not collected on one page",
              "Permission obtained for anything identifying a client",
              "Empty slots left honestly empty rather than filled with vague claims",
            ],
          },
        ],
      },
      actionStep:
        "Audit your page for anything you could not defend if a prospect challenged it. Remove it today, even if it seems to be performing.",
      recap: [
        "The real question is not \"is this good\" but \"will it work for me\".",
        "Three proof types need no clients: mechanism, work product, specificity.",
        "Place evidence beside the doubt it answers, not on a testimonials page.",
      ],
    },
    {
      slug: "no-follow-up",
      number: 5,
      title: "Mistake 5 — No Follow-Up System",
      summary:
        "Most of the available revenue sits after first contact, and most businesses leave it there.",
      durationMinutes: 8,
      blocks: [
        {
          type: "text",
          body: "This is the largest leak and the least visible one, because it happens after the part everyone measures. Someone raises their hand, receives one reply or none, and is never contacted again. They were interested. They just were not ready that week.",
        },
        {
          type: "heading",
          text: "Why it hurts",
        },
        {
          type: "text",
          body: "People who have already expressed interest are the cheapest conversions available to you — you have paid for them once. Every one who goes cold is money spent twice: once to acquire them, and again to replace them.",
        },
        {
          type: "example",
          title: "Bad implementation",
          body: "A form submits. The page says \"Thanks, we'll be in touch.\" The owner sees the email two days later during a busy week, replies once, gets no answer, and moves on. Nothing else ever happens. The lead cost money and produced nothing.",
        },
        {
          type: "example",
          title: "Better implementation",
          body: "The form submits and an automated email arrives within a minute: what happens next, when, and from whom. Two days later, a second message answering the objection people usually raise. Five days later, a short message showing the mechanism working with one clear next step. All automated, all running whether or not anyone remembers.",
        },
        {
          type: "callout",
          tone: "warn",
          title: "Manual follow-up is not a system",
          body: "Follow-up you do by hand works until the week you are busy — which is exactly the week the leads matter most. If it is not automated, assume it will not happen.",
        },
        {
          type: "heading",
          text: "The minimum viable sequence",
        },
        {
          type: "framework",
          title: "Three messages beat twelve unfinished ones",
          steps: [
            { label: "Immediately — deliver and confirm", detail: "Give them whatever was promised and state exactly what happens next and when. This is the highest-attention moment you will get." },
            { label: "Two days — answer the unvoiced objection", detail: "The reason people stall is rarely the reason they state. Address the real one directly." },
            { label: "Five days — show it working, ask once", detail: "Demonstrate the mechanism, then restate the same single action. Same wording as the page." },
          ],
        },
        {
          type: "callout",
          tone: "signal",
          title: "The no-show leak",
          body: "If people book calls and do not attend, that is a conversion problem with a cheap fix — a confirmation, a reminder the day before, and a line about why the call is worth their time. It is frequently the single largest recoverable loss in a funnel and almost nobody measures it.",
        },
      ],
      checklist: {
        title: "Follow-up checklist",
        groups: [
          {
            items: [
              "Automated confirmation sent within a minute of submission",
              "Confirmation states what happens next and when, specifically",
              "At least three automated messages in the sequence",
              "Sequence tested by submitting your own form and confirming arrival",
              "Booked calls get a confirmation and a reminder",
              "Someone who says \"not now\" is contacted again later",
              "Good-fit and poor-fit leads receive different follow-up",
            ],
          },
        ],
      },
      actionStep:
        "Submit your own form today and time how long the first response takes. If the answer is \"there isn't one\", build the immediate confirmation before anything else in this guide.",
      recap: [
        "Most buyers are not ready at first contact; follow-up covers that gap.",
        "Manual follow-up fails in exactly the weeks it matters most.",
        "Three automated messages beat twelve unfinished ones.",
        "Measure booked-versus-attended — it is usually a large, cheap fix.",
      ],
    },
    {
      slug: "ten-minute-audit",
      number: 6,
      title: "The 10-Minute Funnel Audit",
      summary:
        "Score your own funnel across all five leaks and get a prioritised fix list.",
      durationMinutes: 10,
      blocks: [
        {
          type: "text",
          body: "Work through this with your funnel open in front of you. Click your own links as a stranger would, submit your own forms, and score honestly — a generous score here costs you real money later.",
        },
        {
          type: "callout",
          tone: "signal",
          title: "How to use the result",
          body: "Do not fix everything at once. Take your lowest score, fix that one thing, and give it two weeks before changing anything else. Fixing several things simultaneously means you learn nothing about which one mattered.",
        },
      ],
      scorecard: {
        title: "10-Minute Funnel Audit",
        instructions:
          "Score each row from 1 to 5 with your funnel open in front of you. 1 means absent or clearly broken; 5 means designed, tested and working. Total the five scores.",
        scale: "1 = absent or broken · 3 = partially there · 5 = designed, tested and working",
        rows: [
          {
            label: "Destination match",
            detail:
              "Campaign traffic lands on a purpose-built page whose first line echoes what the visitor clicked, in the same words.",
          },
          {
            label: "Offer clarity",
            detail:
              "A stranger can state the outcome, roughly how it works, what is included and what it costs, after one read.",
          },
          {
            label: "Focus",
            detail:
              "One call to action, repeated unchanged. No navigation, popups, chat widget or competing offers on the landing page.",
          },
          {
            label: "Proof",
            detail:
              "Substantiable evidence placed beside the claims it supports. Nothing invented or unverifiable anywhere on the page.",
          },
          {
            label: "Follow-up",
            detail:
              "Automated confirmation within a minute, at least three messages in sequence, and reminders for anything booked.",
          },
        ],
        interpretation: [
          {
            range: "5–12",
            meaning:
              "Most of your traffic is being wasted, and the causes are structural rather than subtle. Start with destination match and offer clarity — together they usually account for the majority of the loss. Do not increase spend until both score at least 4.",
          },
          {
            range: "13–18",
            meaning:
              "The funnel works but leaks in two or three identifiable places. Take your single lowest row, fix it properly, and hold everything else steady for two weeks so you can read the result.",
          },
          {
            range: "19–22",
            meaning:
              "Solid. The remaining gains are in follow-up and proof, which is usually where the cheapest recoverable revenue sits. Check your booked-versus-attended rate specifically.",
          },
          {
            range: "23–25",
            meaning:
              "The funnel is not your constraint. Your growth limit is now either the offer's ceiling or distribution — how many of the right people ever see it.",
          },
        ],
      },
      checklist: {
        title: "Prioritised fix list",
        groups: [
          {
            label: "Do first — usually the largest loss",
            items: [
              "Build one purpose-built destination for your main traffic source",
              "Rewrite its first line to echo the source promise word for word",
              "Write your offer's four components and put them on the page",
            ],
          },
          {
            label: "Do next — cheap and fast",
            items: [
              "Strip navigation, popups and chat from the landing page",
              "Repeat one CTA, identically worded, three times",
              "Set up the automated confirmation email",
            ],
          },
          {
            label: "Do after — compounding",
            items: [
              "Build the three-message follow-up sequence",
              "Add booking confirmation and reminder",
              "Move proof beside the claims it supports",
              "Remove anything you could not substantiate",
            ],
          },
        ],
      },
      exercise: {
        title: "Score it and commit to one fix",
        prompt:
          "Complete the audit, then commit to fixing only your lowest-scoring row this fortnight.",
        steps: [
          "Score all five rows with the funnel open, being strict rather than generous.",
          "Total the score and read the matching interpretation.",
          "Write down your single lowest row.",
          "Write the one change you will make, and the date you will judge it.",
        ],
      },
      actionStep:
        "Put a date in your calendar two weeks out to re-run this audit. Scores move, and the leak you fix first will reveal the next one.",
      recap: [
        "Score honestly with the funnel open — generous scores cost real money.",
        "Fix one thing at a time or you learn nothing about what worked.",
        "Destination match and offer clarity usually account for most of the loss.",
      ],
    },
  ],
};
