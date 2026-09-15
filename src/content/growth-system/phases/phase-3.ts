import type { Phase } from "../types";

/**
 * PHASE 3 — BUILD
 * Build the Conversion System.
 *
 * Phase 2 produced a statement worth converting. Phase 3 builds the
 * infrastructure that carries a stranger from arrival to a decision, and
 * instruments it so Phase 5 has something real to improve.
 */

export const phase3: Phase = {
  slug: "phase-3",
  number: 3,
  code: "BUILD",
  title: "Build the Conversion System",
  tagline: "Construct the pages, path and follow-up that carry attention to a decision.",
  status: "available",
  objective:
    "Build the core conversion infrastructure your diagnostic identified, structured around the positioning you just defined.",
  overview:
    "A conversion system is a sequence, not a page. Phase 3 builds the minimum version that actually works end to end: one page with one job, a capture that sorts serious buyers from browsers, a follow-up that runs whether or not you remember to send it, and measurement wired in before launch rather than bolted on after. You build the smallest complete path, not the most impressive one.",
  outcome: "A working conversion system for your primary offer, instrumented and live.",
  finalAsset: {
    id: "conversion-system-build-plan",
    title: "Conversion System Build Plan",
    kind: "template",
    description:
      "The specification for your conversion path: each step, its single job, what it captures, what happens next, and how each step is measured.",
  },
  lessons: [
    {
      slug: "what-a-conversion-system-is",
      number: 1,
      title: "What a Conversion System Actually Is",
      summary:
        "The difference between a set of marketing assets and a connected system that carries someone to a decision.",
      objective: "Define the conversion system as a sequence of steps, each with one job.",
      durationMinutes: 9,
      blocks: [
        {
          type: "text",
          body: "Most businesses own marketing assets: a website, a lead magnet, an email list, a booking link. Very few own a conversion system. The difference is connection — whether each asset hands the visitor to the next step with a specific job completed, or whether they sit beside each other and hope.",
        },
        {
          type: "heading",
          text: "What makes it a system",
        },
        {
          type: "framework",
          title: "Four properties of a real conversion system",
          steps: [
            { label: "Every step has one job", detail: "If you cannot state a step's single job in one sentence, it is doing several badly." },
            { label: "Every step hands off deliberately", detail: "The visitor is passed to a defined next step, not released back into the site." },
            { label: "Nothing depends on you remembering", detail: "Follow-up that requires you to notice and act is not infrastructure, it is a habit that will break." },
            { label: "Every step is measured", detail: "You can name where people leave. Without that, improvement is guessing." },
          ],
        },
        {
          type: "callout",
          tone: "signal",
          title: "The core reframe",
          body: "A beautiful page attached to nothing is still a dead end. The connections between steps are the system — the assets are just where it happens.",
        },
        {
          type: "example",
          title: "Assets versus a system",
          body: "A business has a homepage, a PDF guide, a Mailchimp account and a Calendly link. Traffic arrives at the homepage, the guide is mentioned on a different page, nobody who downloads it is followed up, and the booking link is in the footer. Every component exists. No path connects them, so none of them produce anything.",
        },
      ],
      presenterScript:
        "Open by listing the assets most businesses own and pointing out they already have all the parts. Then make the distinction: a system is the connections, not the components. Walk the four properties, lingering on 'nothing depends on you remembering' because that is the one owners resist and the one that fails first. Use the assets-versus-system example to make it concrete before moving on.",
      visualSuggestions: [
        "Scattered disconnected assets on one side; the same assets wired into a sequence on the other.",
        "A single step shown with its one job, its input and its handoff labelled.",
      ],
      exercise: {
        title: "Map what you already have",
        prompt: "List every marketing asset you own and draw the connections that actually exist between them today.",
        steps: [
          "List every asset: pages, forms, lists, links, documents.",
          "Draw an arrow only where a real automated handoff exists.",
          "Circle every asset with no incoming or outgoing arrow.",
        ],
      },
      implementationTask:
        "Write the one-sentence job for each step in your intended path. Any step you cannot reduce to one sentence gets split or deleted.",
      recap: [
        "Most businesses own assets; few own a connected system.",
        "Each step needs one job, a deliberate handoff, and measurement.",
        "Follow-up that depends on you remembering is not infrastructure.",
      ],
    },
    {
      slug: "the-single-decision-page",
      number: 2,
      title: "The Single-Decision Page",
      summary:
        "Building the page that carries your positioning statement into a specific action, with nothing competing against it.",
      objective: "Structure a page around one decision and remove everything that competes with it.",
      durationMinutes: 11,
      blocks: [
        {
          type: "text",
          body: "The page that converts is the one where a visitor has exactly one decision available. Every additional option — a second call to action, a navigation menu full of alternatives, a link that leads sideways — spends attention you paid for on something other than the decision.",
        },
        {
          type: "heading",
          text: "The structure that carries a decision",
        },
        {
          type: "framework",
          title: "What the page does, in order",
          steps: [
            { label: "Name the buyer and the situation", detail: "Line one of your positioning statement, above the fold, so the right person recognises themselves immediately." },
            { label: "State the outcome", detail: "What changes for them. Not what you produce." },
            { label: "Make the mechanism credible", detail: "Why the outcome follows. This is where scepticism either resolves or hardens." },
            { label: "Handle the two real objections", detail: "Not every objection — the two that actually stop people. More than two reads as defensiveness." },
            { label: "Ask for one action", detail: "One button, one commitment level, repeated rather than varied." },
          ],
        },
        {
          type: "callout",
          tone: "warn",
          title: "The competing-CTA problem",
          body: "\"Book a call\" and \"Download the guide\" on the same page do not double your conversion. They split it, and the easier option wins — usually the one worth less to you.",
        },
        {
          type: "text",
          body: "Length is not the variable people assume it is. A long page that answers real objections outperforms a short page that leaves them open. Cut for irrelevance, not for length.",
        },
        {
          type: "callout",
          tone: "muted",
          title: "On design",
          body: "Design should make the sequence obvious and the action unmissable. Beyond that it is rarely the constraint — a plain page with clear structure beats an attractive page with an unclear path.",
        },
      ],
      presenterScript:
        "Lead with the single-decision principle and be uncompromising about it — every extra option is a leak. Walk the five-part structure in order, connecting each part back to a line from their Phase 2 statement so it feels like assembly rather than invention. Kill the two myths explicitly: that shorter is better, and that design is usually the constraint.",
      visualSuggestions: [
        "A page skeleton with the five structural parts labelled down the side.",
        "Two CTAs splitting a stream of visitors, with the lower-value one taking most of the flow.",
      ],
      exercise: {
        title: "Build the page skeleton",
        prompt: "Draft your page as five labelled sections before writing any polished copy.",
        steps: [
          "Write the buyer-and-situation line from your Phase 2 statement.",
          "Write the outcome line underneath it.",
          "Write three sentences explaining the mechanism.",
          "Name the two objections that actually stop people and answer each in two sentences.",
          "Write one call to action and repeat it, unchanged, at two points on the page.",
        ],
      },
      implementationTask:
        "Remove or hide every secondary call to action and navigation link that competes with the primary action on this page. Count how many you removed.",
      recap: [
        "One page, one decision — every extra option splits the result.",
        "Structure: buyer and situation, outcome, mechanism, two objections, one action.",
        "Cut for irrelevance, not for length; design rarely is the constraint.",
      ],
    },
    {
      slug: "message-match",
      number: 3,
      title: "Message Match and the Traffic Source",
      summary:
        "Making the destination continue the promise the visitor just responded to, instead of restarting the conversation.",
      objective: "Align each entry point with the specific source and promise that sent the visitor.",
      durationMinutes: 9,
      blocks: [
        {
          type: "text",
          body: "A visitor arrives mid-thought. They clicked something specific — an ad, a post, a link in a video — and they arrive holding that promise. If the page does not continue it in the first few seconds, they conclude they are in the wrong place and leave, regardless of how good the page is.",
        },
        {
          type: "callout",
          tone: "signal",
          title: "The rule",
          body: "The first thing on the page should echo the thing they clicked. Same subject, same language, same specificity. Continuation, not reintroduction.",
        },
        {
          type: "heading",
          text: "Where message match breaks",
        },
        {
          type: "list",
          items: [
            "Paid traffic from a specific ad landing on a general homepage.",
            "A page written for cold search traffic receiving warm referral traffic, or the reverse.",
            "An ad promising one thing and a page selling the adjacent, more expensive thing.",
            "Different vocabulary — the ad uses the buyer's words, the page uses the industry's.",
          ],
        },
        {
          type: "example",
          title: "The cost of a mismatch",
          body: "An ad says \"turn your existing traffic into booked calls\". The link lands on a homepage headed \"Digital growth solutions\". The visitor has to translate between the two before deciding anything, and most will not bother. The ad worked; the destination discarded the result.",
        },
        {
          type: "text",
          body: "This is why entry points get built per source rather than reused. One page serving three different promises serves none of them well — and with paid traffic, that mismatch is being paid for by the click.",
        },
      ],
      presenterScript:
        "Put the audience in the visitor's position: they arrive mid-thought, holding a promise. Make continuation the rule and reintroduction the failure. Walk the four break points, then use the mismatch example to show that a working ad plus a mismatched page equals wasted spend. Close on why entry points get built per source — this sets up Phase 4.",
      visualSuggestions: [
        "An ad and a landing page headline side by side, matched and mismatched.",
        "Three traffic sources feeding three purpose-built entry points rather than one homepage.",
      ],
      exercise: {
        title: "Match audit",
        prompt: "For each traffic source you use, compare what the visitor clicked against what they first see.",
        steps: [
          "List every source currently sending traffic anywhere.",
          "Write the exact promise or headline the visitor clicked.",
          "Write the first line they see on arrival.",
          "Mark any pair where the language or subject does not continue.",
        ],
      },
      implementationTask:
        "Fix the single worst mismatch you found by rewriting the destination's first line to echo the source's promise in the same words.",
      recap: [
        "Visitors arrive mid-thought holding the promise they clicked.",
        "The page should continue that promise, not reintroduce the business.",
        "Mismatch wastes working traffic — and with paid clicks you pay for the waste.",
      ],
    },
    {
      slug: "capture-qualify-route",
      number: 4,
      title: "Capture, Qualify, Route",
      summary:
        "Turning interest into a structured record that sorts serious buyers from browsers before you spend time on them.",
      objective: "Design capture that collects enough to qualify and route without suppressing conversion.",
      durationMinutes: 10,
      blocks: [
        {
          type: "text",
          body: "Capture is where interest becomes something you can act on. Done badly it collects an email and nothing else, leaving you to qualify manually on every call. Done well it collects the few facts that sort a serious buyer from a browser, and routes each to a different next step.",
        },
        {
          type: "heading",
          text: "The trade-off, stated honestly",
        },
        {
          type: "framework",
          title: "Field count against qualification",
          steps: [
            { label: "Fewer fields raise completion", detail: "Every additional field costs some percentage of submissions. This is real and worth respecting." },
            { label: "More fields raise qualification", detail: "A form that asks nothing produces leads you cannot prioritise and calls you should not have taken." },
            { label: "The resolution is commitment level", detail: "Low-commitment offers get short forms. A call worth real money can ask several questions, because answering them is part of qualifying." },
            { label: "Ask only what changes your action", detail: "If a field's answer would not change what happens next, it is costing conversion for nothing." },
          ],
        },
        {
          type: "callout",
          tone: "signal",
          title: "The routing question",
          body: "For every field you keep, answer: what will I do differently depending on the answer? If nothing, delete the field.",
        },
        {
          type: "text",
          body: "Routing is what makes qualification worth collecting. A good-fit submission and a poor-fit one should not receive identical experiences. At minimum, one gets your time and the other gets a useful automated response — which is better for both of you than a call neither wanted.",
        },
        {
          type: "callout",
          tone: "warn",
          title: "Confirm immediately",
          body: "The moment after submission is the highest-attention moment in the entire path. A silent form, or a generic thank-you, wastes it. Confirm what happens next and when.",
        },
      ],
      presenterScript:
        "Set up the trade-off honestly rather than pretending short forms are always right — it depends on commitment level. Give them the deletion test: if the answer would not change what you do, the field is costing conversion for free. Then make routing concrete: good fit and poor fit should not get the same experience. End on the post-submission moment, which almost everyone wastes.",
      visualSuggestions: [
        "A slider between field count and qualification, with commitment level setting the position.",
        "One form splitting into two routes — a booked call and an automated response.",
      ],
      exercise: {
        title: "Field-by-field justification",
        prompt: "Take your capture form and justify every field by what it changes.",
        steps: [
          "List every field currently on the form.",
          "For each, write what you do differently based on the answer.",
          "Delete every field with no answer to that question.",
          "Define the two routes: what happens for a good fit, and for a poor fit.",
        ],
      },
      implementationTask:
        "Write the confirmation message that appears immediately after submission. It must state what happens next and when — specifically, not 'we'll be in touch soon'.",
      recap: [
        "Capture should collect enough to qualify, not just an email address.",
        "Keep a field only if its answer changes what happens next.",
        "Route good fit and poor fit differently, and confirm immediately either way.",
      ],
    },
    {
      slug: "the-follow-up-sequence",
      number: 5,
      title: "The Follow-Up Sequence",
      summary:
        "Building the follow-up that runs without you, and why most of the result arrives after the first contact.",
      objective: "Build an automated sequence that continues the conversation on a defined schedule.",
      durationMinutes: 10,
      blocks: [
        {
          type: "text",
          body: "Most people who will eventually buy are not ready at the moment they first raise their hand. If nothing continues the conversation, that readiness arrives while they are somewhere else. Follow-up is not chasing — it is being present when the timing becomes right.",
        },
        {
          type: "callout",
          tone: "warn",
          title: "The manual trap",
          body: "Follow-up you do by hand works until the week you are busy — which is exactly the week the leads matter most. If it is not automated, assume it will not happen.",
        },
        {
          type: "heading",
          text: "What a sequence contains",
        },
        {
          type: "framework",
          title: "Four jobs across the sequence",
          steps: [
            { label: "Deliver what was promised", detail: "Immediately, without a delay and without conditions. This is the trust transaction." },
            { label: "Answer the objection they did not voice", detail: "The reason people stall is rarely the reason they state. Address the real one directly." },
            { label: "Show the mechanism working", detail: "Substantiable evidence that the route to the outcome is real. Phase 6 builds this properly." },
            { label: "Make the next step easy and specific", detail: "One action, same as the page. Repetition beats variety." },
          ],
        },
        {
          type: "text",
          body: "Length is less important than existence. A three-message sequence that runs reliably outperforms a twelve-message sequence that is still a draft. Build the short one, ship it, extend it when it has earned the attention.",
        },
        {
          type: "callout",
          tone: "muted",
          title: "On frequency",
          body: "Sequence timing is a judgement call, not a formula. Front-load the first two messages while attention is high, then space the rest. Watch unsubscribes as your signal rather than following someone else's schedule.",
        },
      ],
      presenterScript:
        "Reframe follow-up away from chasing — it is about being present when readiness arrives. Hit the manual trap hard, because every owner believes they will remember and none of them do in a busy week. Walk the four jobs, then give permission to build three messages rather than twelve. The bias is toward shipping something that runs.",
      visualSuggestions: [
        "A timeline of readiness arriving after first contact, with and without a sequence present.",
        "Four messages labelled with their jobs, front-loaded then spaced.",
      ],
      exercise: {
        title: "Draft the three-message sequence",
        prompt: "Write the minimum sequence that covers the four jobs.",
        steps: [
          "Message one: deliver what was promised, immediately.",
          "Message two: answer the unvoiced objection.",
          "Message three: show the mechanism working and restate the one action.",
          "Set the send timing for each and write it down.",
        ],
      },
      implementationTask:
        "Automate the sequence in whatever tool you already use, and test it by submitting your own form. Confirm every message actually arrives.",
      recap: [
        "Most buyers are not ready at first contact; follow-up covers that gap.",
        "Manual follow-up fails in the weeks it matters most.",
        "Three automated messages beat twelve unfinished ones.",
      ],
    },
    {
      slug: "instrument-before-you-launch",
      number: 6,
      title: "Instrument Before You Launch",
      summary:
        "Wiring measurement into every step so the system can be improved, and assembling your build plan.",
      objective: "Instrument each step and complete your Conversion System Build Plan.",
      durationMinutes: 13,
      blocks: [
        {
          type: "text",
          body: "A system you cannot measure can only be judged by whether revenue feels better, which is not a signal you can act on. Instrumentation is not analytics theatre — it is the small number of counts that let you name where people leave.",
        },
        {
          type: "heading",
          text: "The minimum instrumentation",
        },
        {
          type: "framework",
          title: "Four counts that make improvement possible",
          steps: [
            { label: "Arrivals, by source", detail: "How many reached each entry point, and where they came from. Without the source split you cannot tell a traffic problem from a page problem." },
            { label: "Engagement", detail: "How many got far enough to have actually considered the offer, rather than bouncing on arrival." },
            { label: "Submissions", detail: "How many completed the capture step, and of those, how many qualified as good fit." },
            { label: "Outcomes", detail: "How many reached the decision you are optimising for — a call held, a purchase made." },
          ],
        },
        {
          type: "callout",
          tone: "signal",
          title: "Why before launch",
          body: "Instrumenting afterwards means the first weeks of real data are lost — and those weeks contain the clearest signal you will ever get, because nothing has been changed yet.",
        },
        {
          type: "callout",
          tone: "warn",
          title: "Do not over-instrument",
          body: "Tracking forty events produces a dashboard nobody reads. Four counts you check weekly beat forty you check never.",
        },
        {
          type: "text",
          body: "Your Build Plan is the specification for everything in this phase: each step, its single job, what it captures, where it hands off, and which count measures it. It is the document Phase 5 works from when you start improving conversion, and the one Phase 4 points traffic at.",
        },
      ],
      presenterScript:
        "This is the capstone — assembly plus instrumentation. Explain why measurement goes in before launch, not after: the first weeks are the cleanest signal they will ever have. Walk the four counts and be firm about not over-instrumenting. Then assemble the Build Plan live, showing how each row connects a step to its job, its capture, its handoff and its count. Close by pointing forward — Phase 4 feeds this system, Phase 5 improves it.",
      visualSuggestions: [
        "The four counts marked along a conversion path, with drop-off visible between each.",
        "The finished Build Plan as a clean table: step, job, captures, hands off to, measured by.",
      ],
      exercise: {
        title: "Complete the Build Plan",
        prompt: "Specify every step of your conversion system in one table.",
        steps: [
          "List each step in order, from arrival to the decision.",
          "For each, write its single job in one sentence.",
          "For each, note what it captures and where it hands off.",
          "For each, name the count that measures it.",
          "Confirm every step has all five filled in — gaps are where the system will leak.",
        ],
      },
      implementationTask:
        "Complete the Conversion System Build Plan, wire the four counts, and run one real submission through the entire path end to end before sending any traffic to it.",
      recap: [
        "Four counts — arrivals by source, engagement, submissions, outcomes — make improvement possible.",
        "Instrument before launch; the first weeks of data are the cleanest you get.",
        "The Build Plan specifies each step's job, capture, handoff and measurement.",
      ],
      assets: [
        {
          id: "conversion-system-build-plan",
          title: "Conversion System Build Plan",
          kind: "template",
          description: "The step-by-step specification of your conversion path — your Phase 3 deliverable.",
        },
      ],
    },
  ],
};
