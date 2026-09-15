import type { Phase } from "../types";

/**
 * PHASE 2 — POSITION
 * Own a Category of One.
 *
 * Phase 1 found the constraint. Phase 2 does the work that makes every later
 * build cheaper: sharpening who the offer is for and why it wins, so the
 * conversion system in Phase 3 has something worth converting.
 */

export const phase2: Phase = {
  slug: "phase-2",
  number: 2,
  code: "POSITION",
  title: "Own a Category of One",
  tagline: "Make your offer the obvious choice by sharpening who it's for and why it wins.",
  status: "available",
  objective:
    "Sharpen positioning and offer until a stranger can evaluate it in one read and decide whether it is for them.",
  overview:
    "Most offers do not fail because they are bad. They fail because a buyer cannot tell, quickly, what the outcome is, who it is for, or why this one rather than the alternative. Phase 2 fixes that before you build anything. You will choose a specific buyer, define the outcome you sell, name the mechanism that makes it credible, and compress it all into a statement that survives the one-read test.",
  outcome: "A positioning statement and offer structure a stranger can evaluate without your help.",
  finalAsset: {
    id: "positioning-offer-statement",
    title: "Positioning & Offer Statement",
    kind: "worksheet",
    description:
      "A one-page statement of who the offer is for, the outcome it delivers, the mechanism behind it, and the reason to act — tested against readers who do not know you.",
  },
  lessons: [
    {
      slug: "why-positioning-beats-persuasion",
      number: 1,
      title: "Why Positioning Beats Persuasion",
      summary:
        "Why sharper positioning outperforms better copy, and why most conversion problems are really positioning problems.",
      objective: "Recognise positioning as the highest-leverage conversion lever available.",
      durationMinutes: 8,
      blocks: [
        {
          type: "text",
          body: "When something is not selling, the instinct is to write better copy. But copy can only amplify a decision the buyer is already able to make. If they cannot tell whether the offer is for them, no amount of persuasion closes that gap — it just makes the confusion more enthusiastic.",
        },
        {
          type: "heading",
          text: "What positioning actually decides",
        },
        {
          type: "framework",
          title: "The four things a buyer resolves in seconds",
          steps: [
            { label: "Is this for someone like me?", detail: "If they cannot place themselves in it, nothing else in the page gets read." },
            { label: "What outcome am I buying?", detail: "Not the deliverable — the change in their situation once it works." },
            { label: "Why would this work?", detail: "The mechanism. A credible reason the outcome follows from the thing you do." },
            { label: "Why now, and why you?", detail: "The reason to act rather than defer, and to choose you rather than the alternative." },
          ],
        },
        {
          type: "callout",
          tone: "signal",
          title: "The core reframe",
          body: "Persuasion works on a buyer who understands the offer. Positioning is what makes them understand it. Fix the second and you need far less of the first.",
        },
        {
          type: "example",
          title: "Same service, two positions",
          body: "\"We build websites\" asks the buyer to work out whether they need one, what kind, and whether you are the right choice. \"We rebuild sites that get traffic but no enquiries\" answers all three in one line — and disqualifies everyone else, which is the point.",
        },
      ],
      presenterScript:
        "Start with the common failure: an owner convinced they need better copy when the real problem is that nobody can tell what they sell. Make the distinction sharp — persuasion amplifies a decision, positioning enables it. Walk the four questions a buyer resolves in seconds and point out that most pages answer none of them above the fold. Close by promising that this phase produces a statement that answers all four.",
      visualSuggestions: [
        "Four stacked questions a buyer asks, with a timer showing how few seconds they get.",
        "Two versions of the same headline side by side — vague vs specific — with the specific one visibly narrower.",
      ],
      exercise: {
        title: "The four-question audit",
        prompt: "Take your current homepage or sales page and answer the four buyer questions using only what is visible without scrolling.",
        steps: [
          "Open your main page and read only what is above the fold.",
          "Write down what a stranger could answer for each of the four questions.",
          "Mark any question the page leaves unanswered.",
        ],
      },
      implementationTask:
        "Send your main page to one person outside your industry. Ask them to tell you who it is for and what it does. Write down exactly what they say, including the parts they get wrong.",
      recap: [
        "Copy amplifies a decision; positioning is what makes the decision possible.",
        "Buyers resolve four questions fast: is it for me, what outcome, why it works, why now and why you.",
        "Most conversion problems are positioning problems wearing a copy costume.",
      ],
    },
    {
      slug: "choosing-who-its-for",
      number: 2,
      title: "Choosing Who It's For",
      summary:
        "Narrowing the buyer deliberately, and why a smaller audience usually produces more revenue rather than less.",
      objective: "Define a specific buyer precise enough to change what you build and how you sell it.",
      durationMinutes: 10,
      blocks: [
        {
          type: "text",
          body: "Broad positioning feels safe because it appears to keep every option open. In practice it removes your ability to say anything specific, which is the only thing that makes a stranger stop. Narrowing is not giving up revenue — it is choosing the buyer you can win.",
        },
        {
          type: "callout",
          tone: "warn",
          title: "The everyone trap",
          body: "An offer for everyone is an offer no one recognises as theirs. Breadth is what makes a page forgettable.",
        },
        {
          type: "heading",
          text: "What makes a buyer definition useful",
        },
        {
          type: "list",
          items: [
            "It is observable — you could identify one from the outside, not just describe a mindset.",
            "It implies a situation, not just a demographic. Situation is what creates urgency.",
            "It changes your build. If the definition would not alter a single page or feature, it is not specific enough.",
            "You can name three real places they already gather, so distribution has somewhere to point.",
          ],
        },
        {
          type: "example",
          title: "Sharpening in three passes",
          body: "\"Small businesses\" becomes \"service businesses doing consistent revenue by referral\" becomes \"service businesses that get consistent referrals and have no way to convert anyone who is not referred.\" The third one implies the offer, the objection, and the channel.",
        },
        {
          type: "callout",
          tone: "muted",
          title: "On excluding people",
          body: "You are not refusing to serve anyone who arrives. You are deciding who the page is written for. Those are different decisions, and conflating them is what keeps positioning vague.",
        },
      ],
      presenterScript:
        "Address the fear directly: narrowing feels like turning off revenue. Show that the opposite happens, because specificity is what makes a stranger recognise themselves. Run the three-pass sharpening live so they can see a vague segment become an actionable one. Make the distinction between who the page is written for and who you will accept as a client — that resolves most of the resistance.",
      visualSuggestions: [
        "A funnel narrowing across three passes, with the message getting sharper as the audience narrows.",
        "Two pages side by side: one addressed to 'businesses', one to a named situation.",
      ],
      exercise: {
        title: "Three-pass narrowing",
        prompt: "Take your current audience description and sharpen it three times, each pass adding a situational detail.",
        steps: [
          "Write your current audience in one line.",
          "Pass one: add what they do or sell.",
          "Pass two: add the situation they are currently in.",
          "Pass three: add the specific thing that is not working for them.",
        ],
      },
      implementationTask:
        "Name three real places your sharpened buyer already gathers — a platform, a community, a search they run. If you cannot name three, the definition is still too abstract.",
      recap: [
        "Breadth removes specificity, and specificity is what makes a stranger stop.",
        "A useful buyer definition is observable, situational, and changes what you build.",
        "Who the page is written for is a separate decision from who you will accept.",
      ],
    },
    {
      slug: "the-category-of-one",
      number: 3,
      title: "The Category of One",
      summary:
        "Competing on a dimension where comparison stops working, instead of being one option in a list.",
      objective: "Identify the dimension on which your offer is not comparable to the obvious alternatives.",
      durationMinutes: 9,
      blocks: [
        {
          type: "text",
          body: "When a buyer can line you up against three alternatives on the same axis, the decision collapses to price and convenience. A category of one is not a slogan — it is the state of being difficult to compare, because you compete on a dimension the alternatives do not occupy.",
        },
        {
          type: "heading",
          text: "Where differentiation actually comes from",
        },
        {
          type: "framework",
          title: "Four dimensions that resist comparison",
          steps: [
            { label: "The buyer", detail: "You serve a narrower situation than anyone else addresses directly." },
            { label: "The mechanism", detail: "You get to the outcome by a different route, and you can explain why it works." },
            { label: "The scope", detail: "You solve a bigger or smaller slice of the problem than the alternatives choose to." },
            { label: "The model", detail: "How the work is delivered, priced, or risked differs in a way the buyer feels." },
          ],
        },
        {
          type: "callout",
          tone: "warn",
          title: "Not differentiation",
          body: "Quality, care, experience and communication are table stakes. Every competitor claims them, which means none of them separate you. If the alternative's page could carry your sentence unchanged, it is not a differentiator.",
        },
        {
          type: "text",
          body: "Test any candidate differentiator by writing it on your closest competitor's page in your head. If it still reads as true and unremarkable there, keep looking. The one that would be false or awkward on their page is the one worth building on.",
        },
      ],
      presenterScript:
        "Explain the comparison collapse — once a buyer can compare on one axis, you are negotiating on price. Introduce the four dimensions, and be blunt that quality and care are not among them. Run the competitor-page test live on two or three claims so they feel how many of their differentiators evaporate. Land on choosing one dimension, not four.",
      visualSuggestions: [
        "A comparison table where the offer refuses to fit the columns.",
        "Four labelled axes with a marker on the one this business will own.",
      ],
      exercise: {
        title: "The competitor-page test",
        prompt: "List everything you currently claim as a differentiator, then test each one against your closest alternative's page.",
        steps: [
          "Write down every claim you make about why someone should choose you.",
          "For each, ask whether your closest competitor could write the same sentence truthfully.",
          "Delete every claim that survives on their page too.",
          "From what remains, choose one dimension to build the position on.",
        ],
      },
      implementationTask:
        "Write one sentence: 'Unlike the obvious alternative, we ______, which matters because ______.' The second blank must describe a consequence the buyer feels.",
      recap: [
        "Comparability collapses decisions to price; a category of one resists comparison.",
        "Differentiation comes from buyer, mechanism, scope, or model — not from quality claims.",
        "If a competitor could truthfully write your differentiator, it is not one.",
      ],
    },
    {
      slug: "offer-architecture",
      number: 4,
      title: "Offer Architecture",
      summary:
        "Assembling outcome, mechanism, scope and risk into something a buyer can evaluate without a call.",
      objective: "Structure the offer so its value is legible before any conversation happens.",
      durationMinutes: 11,
      blocks: [
        {
          type: "text",
          body: "An offer is not a price attached to a service. It is a structured promise: a specific outcome, for a specific buyer, by a stated mechanism, with the risk and scope made clear enough that a stranger can decide. Most expertise is real and unpackaged — architecture is what turns it into something buyable.",
        },
        {
          type: "heading",
          text: "The four components",
        },
        {
          type: "framework",
          title: "What every buyable offer states",
          steps: [
            { label: "Outcome", detail: "The change in their situation, described the way they would describe it — not the deliverable you produce." },
            { label: "Mechanism", detail: "How the outcome is produced. This is what makes the promise credible rather than optimistic." },
            { label: "Scope", detail: "What is included, what is not, and what the buyer is responsible for. Ambiguity here is read as risk." },
            { label: "Risk position", detail: "What happens if it does not work — and what the buyer is committing before they know." },
          ],
        },
        {
          type: "callout",
          tone: "signal",
          title: "Outcome, not deliverable",
          body: "\"A five-page website\" is a deliverable. \"A site that turns your existing traffic into booked calls\" is an outcome. Buyers pay for the second and argue about the price of the first.",
        },
        {
          type: "callout",
          tone: "warn",
          title: "On promises you cannot keep",
          body: "State only what you can actually deliver and substantiate. An outcome you cannot defend becomes a refund conversation, a bad review, and a positioning problem far worse than vagueness.",
        },
        {
          type: "text",
          body: "Scope is where most offers leak. When the boundary is unstated, the buyer assumes the largest possible version and you deliver the smallest defensible one. Writing the boundary down protects the margin and, counter-intuitively, increases trust.",
        },
      ],
      presenterScript:
        "Draw the line between a service and an offer — a service is what you do, an offer is a structured promise a stranger can evaluate. Work the four components, spending most time on outcome versus deliverable because that is where the value gets lost. Be firm about only promising what can be defended. Finish on scope as a margin-protection tool, not bureaucracy.",
      visualSuggestions: [
        "Four stacked blocks forming an offer, with a weak one missing the mechanism block.",
        "Side-by-side: deliverable language vs outcome language for the same work.",
      ],
      exercise: {
        title: "Architect the offer",
        prompt: "Write your primary offer using all four components, in the buyer's language.",
        steps: [
          "Outcome: finish the sentence 'After this works, you will ______.'",
          "Mechanism: in two sentences, how does the outcome get produced?",
          "Scope: three lines of what is included, one line of what is not.",
          "Risk: what you guarantee, and what the buyer commits up front.",
        ],
      },
      implementationTask:
        "Rewrite your offer's headline so it names the outcome rather than the deliverable, and check that the mechanism appears within the first two lines below it.",
      recap: [
        "An offer is a structured promise: outcome, mechanism, scope, risk.",
        "Buyers pay for outcomes and negotiate over deliverables.",
        "Unstated scope is read as risk and quietly destroys margin.",
      ],
    },
    {
      slug: "pricing-as-positioning",
      number: 5,
      title: "Pricing as Positioning",
      summary:
        "Why the number itself is a positioning signal, and how to set it from value and structure rather than from nerves.",
      objective: "Set a price that matches the position and survives being said out loud.",
      durationMinutes: 9,
      blocks: [
        {
          type: "text",
          body: "Price is not only a commercial decision. It is read as information about what the offer is. A number far below the category tells buyers you are a smaller version of the alternative; a number above it demands that the positioning justify the gap. Either is fine — as long as it is chosen rather than flinched into.",
        },
        {
          type: "heading",
          text: "Symptoms of a price set by nerves",
        },
        {
          type: "list",
          items: [
            "The number changes depending on who is asking.",
            "You discount before the buyer raises an objection.",
            "You cannot state the price without adding a justification nobody requested.",
            "Delivery regularly exceeds scope because the price felt too high to defend.",
          ],
        },
        {
          type: "framework",
          title: "Setting the number",
          steps: [
            { label: "Anchor on the outcome's value", detail: "What is the change worth to the buyer over a sensible time horizon? That sets the ceiling, not your costs." },
            { label: "Check it against the position", detail: "A premium position with a budget number confuses buyers more than a high price does." },
            { label: "Structure for the commitment", detail: "Payment structure changes perceived risk. The same total can be easy or impossible depending on how it is staged." },
            { label: "Say it out loud", detail: "If you cannot state it in a sentence without softening it, you have not finished the positioning work." },
          ],
        },
        {
          type: "callout",
          tone: "signal",
          title: "The test",
          body: "Price is right when you can state it plainly, without a discount reflex, and the buyer's next question is about the work rather than the number.",
        },
      ],
      presenterScript:
        "Frame price as a signal, not just a transaction — buyers read it as information. Go through the nerve symptoms and let them recognise themselves; most will. Then work the four steps, emphasising that value sets the ceiling and cost sets only the floor. End on the say-it-out-loud test, which is the fastest diagnostic they have.",
      visualSuggestions: [
        "A price point plotted against a positioning axis, showing the mismatch zone.",
        "Two payment structures for the same total, with perceived risk shown differently.",
      ],
      exercise: {
        title: "Defend the number",
        prompt: "State your price out loud, then write the sentence that follows it without any softening or discount.",
        steps: [
          "Write the price and the one-line reason it is that number.",
          "Say both aloud and notice any urge to add qualifiers.",
          "Rewrite until no qualifier is needed.",
          "Check whether the number matches the position you chose in lesson 3.",
        ],
      },
      implementationTask:
        "Set one price for your primary offer and write it down as a committed number. Use it in the next three conversations without adjusting it mid-sentence.",
      recap: [
        "Price is read as information about what the offer is.",
        "Value sets the ceiling; costs only set the floor.",
        "If you cannot say the number without softening it, the positioning is unfinished.",
      ],
    },
    {
      slug: "the-one-read-test",
      number: 6,
      title: "The One-Read Test",
      summary:
        "Compressing everything into a statement a stranger can evaluate in one read — and testing it on actual strangers.",
      objective: "Produce and validate your Positioning & Offer Statement.",
      durationMinutes: 14,
      blocks: [
        {
          type: "text",
          body: "This is where the phase resolves. Everything you have chosen — the buyer, the differentiating dimension, the offer architecture, the price — compresses into a statement short enough to be read once and understood. If it needs a second read, it is not finished.",
        },
        {
          type: "heading",
          text: "The statement structure",
        },
        {
          type: "framework",
          title: "Four lines, in order",
          steps: [
            { label: "For [buyer] who [situation]", detail: "The specific person and the specific thing that is not working." },
            { label: "We [outcome]", detail: "The change, in their words, not the deliverable in yours." },
            { label: "By [mechanism]", detail: "The route to the outcome, stated plainly enough to be credible." },
            { label: "Unlike [alternative], [difference]", detail: "The one dimension you chose to own." },
          ],
        },
        {
          type: "callout",
          tone: "signal",
          title: "How to test it properly",
          body: "Give the statement to three people who do not know your business. Ask each to tell you who it is for and what it does. If two of three get it right without follow-up questions, it passes. If they hedge, the statement is doing work the reader should not have to do.",
        },
        {
          type: "callout",
          tone: "muted",
          title: "When it fails",
          body: "A failed test is information, not a setback. Note which of the four lines produced the confusion and rewrite only that line. Most failures trace to an outcome stated as a deliverable, or a buyer defined too broadly.",
        },
        {
          type: "text",
          body: "Keep this statement. Phase 3 builds the conversion system around it — the headline, the page structure, and the follow-up all inherit from these four lines. A vague statement here produces a vague build there, at considerably greater cost.",
        },
      ],
      presenterScript:
        "This is the capstone — treat it as an assembly, not new material. Walk the four-line structure and write one live from a messy example so they see the compression happen. Be specific about the test protocol: three strangers, no prompting, note where they hedge. Close by connecting it forward — Phase 3 inherits these four lines directly, so the quality here determines the cost there.",
      visualSuggestions: [
        "The four lines assembling from the earlier lessons' outputs, shown as inputs feeding one statement.",
        "A clean finished statement card, with the three-stranger test shown as pass/hedge marks beside it.",
      ],
      exercise: {
        title: "Write and test the statement",
        prompt: "Assemble your four lines, then run the three-stranger test and record the results verbatim.",
        steps: [
          "Write all four lines using your outputs from lessons 2 through 5.",
          "Read it aloud once and cut every word that is not doing work.",
          "Send it to three people outside your industry with the same two questions.",
          "Record their answers word for word, and note which line caused any hedging.",
          "Rewrite the failing line and retest with one new reader.",
        ],
      },
      implementationTask:
        "Complete your Positioning & Offer Statement and save it. This is your Phase 2 asset and the direct input to the conversion system you build in Phase 3.",
      recap: [
        "The statement compresses buyer, outcome, mechanism and difference into four lines.",
        "Test on three strangers: two clean reads without questions is a pass.",
        "Hedging points at the specific line that needs rewriting, usually outcome or buyer.",
      ],
      assets: [
        {
          id: "positioning-offer-statement",
          title: "Positioning & Offer Statement",
          kind: "worksheet",
          description: "The four-line statement you write and validate in this lesson — your Phase 2 deliverable.",
        },
      ],
    },
  ],
};
