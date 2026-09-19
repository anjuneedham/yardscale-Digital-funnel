import type { EducationProduct } from "../types";

/**
 * PAID — Complete Landing-Page Tutorial ($19).
 *
 * The deepest single-page build in the library. Structure, psychology,
 * copywriting formulas, and the audit checklists that turn a first draft
 * into something that converts.
 */

export const landingPage: EducationProduct = {
  slug: "landing-page",
  title: "Complete Landing-Page Tutorial",
  shortTitle: "Landing-Page Tutorial",
  tier: "paid",
  price: 19,
  format: "tutorial",
  category: "websites",
  difficulty: "intermediate",
  estimatedMinutes: 180,
  summary:
    "Build a landing page that converts one audience into one action — section by section, with the copy formulas and audit checklists.",
  description:
    "A landing page is not a shorter website. It is a single argument built to carry one specific audience to one specific decision. This tutorial covers the psychology behind why people act, the structure that works, how to write each section, and the checklists that catch what a first draft always misses.",
  whatYouWillLearn: [
    "Why people actually act — and the three things that must be true before they do",
    "The above-the-fold formula that decides whether the rest gets read",
    "How to write headlines that are specific without being gimmicky",
    "Agitating a problem honestly, without manipulation",
    "Where proof goes, and what to do when you do not have much",
    "Risk reversal — what you can honestly offer and what you cannot",
    "How to audit and improve a page that is already live",
  ],
  whoItIsFor: [
    "Anyone sending paid or campaign traffic to a page that underperforms",
    "Solopreneurs selling a specific offer who need one page to do the work",
    "People who have built a landing page from a template and know it is not right",
    "Freelancers building landing pages for clients who want a repeatable structure",
  ],
  whatYouWillBuild: [
    "A complete landing-page wireframe with every section's job defined",
    "Headline, subheadline and CTA written and tested",
    "The full page copy, section by section",
    "A completed conversion audit and mobile optimisation pass",
  ],
  includedResources: [
    { title: "Complete landing-page wireframe", detail: "Eleven sections in order, with the job and the failure mode of each." },
    { title: "Copywriting formulas", detail: "Headline, subheadline, benefit and CTA formulas with worked examples." },
    { title: "CTA example bank", detail: "Weak versus strong calls to action across common offer types." },
    { title: "Landing-page audit checklist", detail: "Section-by-section review for a page that is already live." },
    { title: "Mobile optimisation checklist", detail: "What to verify on an actual device." },
    { title: "Conversion checklist", detail: "Final pass before you send traffic." },
  ],
  nextStep: {
    slug: "funnel-blueprint",
    pitch:
      "A converting page is one step. If you want the full sequence around it — capture, follow-up, and the funnel model that matches your offer — that is the blueprint.",
  },
  faqs: [
    {
      question: "Do I need design skills?",
      answer:
        "No. This tutorial is about structure and copy, which is where nearly all conversion is won or lost. The visual guidance is limited to what affects conversion — hierarchy, contrast, spacing and mobile behaviour — all of which you can execute in any builder.",
    },
    {
      question: "Will this work for my type of offer?",
      answer:
        "The structure works for services, consultations, digital products, courses and bookings. The tutorial notes where the emphasis shifts by offer type — a high-ticket service page leans harder on proof and risk reversal, a low-price digital product leans harder on clarity and speed to purchase.",
    },
    {
      question: "What if I already have a landing page?",
      answer:
        "Start with the audit checklist in the final chapter, then go back to whichever sections scored badly. Most live pages fail on the first screen and on proof placement, so those two chapters are usually the highest-value read.",
    },
    {
      question: "Does this cover writing ads to send traffic?",
      answer:
        "Only the join between them — the message match that determines whether a click survives arrival. Campaign structure, targeting and budget belong to distribution, which is covered in the Funnel-Building Blueprint and the Client Acquisition Playbook.",
    },
  ],
  chapters: [
    {
      slug: "landing-page-psychology",
      number: 1,
      title: "Landing-Page Psychology",
      summary:
        "The three conditions that must be true before anyone acts, and what actually blocks each one.",
      durationMinutes: 20,
      blocks: [
        {
          type: "text",
          body: "People do not act because a page is persuasive. They act when three things are simultaneously true, and a landing page works by making all three true at once. When a page underperforms, exactly one of them is usually missing — which is why diagnosing beats rewriting.",
        },
        {
          type: "framework",
          title: "The three conditions",
          steps: [
            { label: "Motivation — they want the outcome", detail: "Not the product; the change in their situation. If motivation is missing, no amount of design fixes it — the offer or the audience is wrong." },
            { label: "Ability — acting is easy enough", detail: "The step is small, clear and low-friction. A long form, an unclear commitment or a confusing next step kills otherwise motivated people." },
            { label: "Trigger — a reason to act now", detail: "Something makes this moment the moment. Without it, a motivated and able person simply defers — and deferred decisions do not return." },
          ],
        },
        {
          type: "callout",
          tone: "signal",
          title: "Diagnose before you rewrite",
          body: "A page with a motivation problem needs a different offer or a different audience. A page with an ability problem needs friction removed. A page with a trigger problem needs a genuine reason to act now. Fixing the wrong one produces no change and costs you a cycle.",
        },
        {
          type: "heading",
          text: "What the visitor is actually doing",
        },
        {
          type: "text",
          body: "The visitor is not evaluating your page. They are running a fast, mostly unconscious risk calculation: is this for me, will it work, what does it cost me, and what happens if I am wrong. Your page either answers those or it does not.",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Am I in the right place? — answered in the first screen or they leave.",
            "What is this, exactly? — the offer, in terms they can evaluate.",
            "Would it work for someone like me? — proof, especially from a similar starting situation.",
            "What does it cost, in money and effort? — stated, not hidden.",
            "What if it goes wrong? — risk reversal, or at least honesty about scope.",
          ],
        },
        {
          type: "heading",
          text: "Honest persuasion",
        },
        {
          type: "text",
          body: "There is a real line between helping someone see a problem clearly and manufacturing anxiety to force a sale. The first is useful. The second converts short-term, produces refunds, bad reviews and clients who resent you, and is not worth doing.",
        },
        {
          type: "callout",
          tone: "warn",
          title: "Tactics to leave alone",
          body: "Fake countdown timers that reset on reload. Invented scarcity. Made-up statistics. Testimonials you wrote. \"Only 3 spots left\" when there is no limit. All of them work slightly, briefly, and all of them cost more than they return.",
        },
        {
          type: "example",
          title: "The same pressure, honest and dishonest",
          body: "Dishonest: a timer saying the price rises in 14 minutes, which resets every time the page loads. Honest: \"I take four clients a quarter and two are booked\" — when that is true. Both create urgency. Only one survives the customer finding out.",
        },
      ],
      exercise: {
        title: "Diagnose your page",
        prompt:
          "Before writing anything, work out which of the three conditions your page currently fails.",
        steps: [
          "Read your page as a stranger and mark where each of the five visitor questions is answered.",
          "Note any question that is never answered — that is a gap.",
          "Decide whether your main problem is motivation, ability or trigger.",
          "Write one sentence stating which, and why you believe it.",
        ],
      },
      actionStep:
        "Name your page's failing condition — motivation, ability or trigger — before you change a single word. The rest of this tutorial is faster once you know which one you are fixing.",
      recap: [
        "Three conditions must be true at once: motivation, ability, trigger.",
        "The visitor is running a risk calculation, not evaluating your writing.",
        "Diagnose which condition is missing before rewriting anything.",
        "Manufactured urgency converts briefly and costs more than it returns.",
      ],
    },
    {
      slug: "offer-positioning",
      number: 2,
      title: "Offer Positioning",
      summary:
        "Deciding what the page is actually selling, and to whom, before you write a line of it.",
      durationMinutes: 18,
      blocks: [
        {
          type: "text",
          body: "A landing page can only carry one offer to one audience. The moment it tries to serve two, it serves neither — the copy becomes general to accommodate both, and general copy converts nobody.",
        },
        {
          type: "heading",
          text: "The four positioning decisions",
        },
        {
          type: "framework",
          title: "Settle these before writing",
          steps: [
            { label: "Who this page is for", detail: "One audience, in one situation. Not \"businesses\" — the specific person arriving from this specific traffic source." },
            { label: "What they get", detail: "The outcome in their language, with the deliverables that make it concrete underneath." },
            { label: "Why it works", detail: "The mechanism. This is what separates a credible promise from an optimistic one, and most pages skip it entirely." },
            { label: "Why you", detail: "The one dimension where you are not directly comparable to the obvious alternative." },
          ],
        },
        {
          type: "callout",
          tone: "signal",
          title: "The competitor test",
          body: "Take any claim on your page and imagine it on your closest competitor's site. If it reads as true and unremarkable there too, it is not doing work. The claim that would be false or awkward on their page is the one to build on.",
        },
        {
          type: "heading",
          text: "Matching the traffic source",
        },
        {
          type: "text",
          body: "The page and whatever sent the visitor are one message across two surfaces. Intent traffic (search) arrives already looking and can be addressed directly. Interruption traffic (social, display) was mid-scroll and has to be earned before it is asked for anything.",
        },
        {
          type: "framework",
          title: "Two traffic types, two page openings",
          steps: [
            { label: "Intent traffic", detail: "They searched for this. Lead with the solution and the specifics — they already accept the problem exists. Get to the offer fast." },
            { label: "Interruption traffic", detail: "They were doing something else. Lead with the problem or the recognition, because they need to agree they have the problem before they care about your solution." },
          ],
        },
        {
          type: "example",
          title: "Same offer, two openings",
          body: "For search traffic on \"bookkeeping catch-up service\": \"Bookkeeping catch-up, done in three weeks — from £900.\" For social traffic: \"Eighteen months of receipts in a shoebox and a deadline in January. That's a solvable problem, and it takes about three weeks.\" Same service, different entry point, because the reader's state is different.",
        },
        {
          type: "callout",
          tone: "muted",
          title: "One page per audience",
          body: "If you have two meaningfully different audiences, build two pages. It is less work than trying to write one page that speaks convincingly to both, and it converts substantially better.",
        },
      ],
      exercise: {
        title: "Settle the four decisions",
        prompt: "Write these before you draft any page copy. Ambiguity here produces vague copy everywhere.",
        steps: [
          "Name the one audience and the one situation they are in.",
          "Write the outcome in their words, and three deliverables underneath it.",
          "Write the mechanism in two sentences — why the outcome follows.",
          "Run the competitor test on every claim and cut the ones that survive on their page.",
          "Note whether your traffic is intent or interruption, and which opening that implies.",
        ],
      },
      actionStep:
        "Write your mechanism in two sentences. If that is the hard one, it is also the most valuable — most pages have no mechanism at all, which is why their promises read as optimistic.",
      recap: [
        "One page, one offer, one audience. Two audiences means two pages.",
        "Four decisions: who, what they get, why it works, why you.",
        "The mechanism is what makes a promise credible rather than hopeful.",
        "Intent traffic leads with the solution; interruption traffic leads with the problem.",
      ],
    },
    {
      slug: "above-the-fold",
      number: 3,
      title: "Above the Fold",
      summary:
        "The first screen decides whether anything else gets read — headline, subheadline, CTA and visual.",
      durationMinutes: 25,
      blocks: [
        {
          type: "text",
          body: "Most of the people who will ever leave your page leave from the first screen, before reading anything else. Everything below it only matters to people this section convinced to keep going. It deserves disproportionate effort.",
        },
        {
          type: "heading",
          text: "What the first screen must contain",
        },
        {
          type: "framework",
          title: "Five elements, no more",
          steps: [
            { label: "Headline", detail: "The outcome or the problem, stated specifically. The single most important line on the page." },
            { label: "Subheadline", detail: "One sentence adding the mechanism or the specificity the headline had to leave out." },
            { label: "Primary CTA", detail: "Visible without scrolling. Names the action and its format." },
            { label: "A credibility marker", detail: "One line of proof, a real logo you have permission to use, or a specific fact. Small, not a full section." },
            { label: "A relevant visual", detail: "The product, the deliverable, or you. Not a stock photo of strangers in a meeting room." },
          ],
        },
        {
          type: "heading",
          text: "Headline formulas that work",
        },
        {
          type: "text",
          body: "Formulas are scaffolding, not a substitute for knowing your offer. Use them to generate options quickly, then choose on specificity rather than cleverness.",
        },
        {
          type: "framework",
          title: "Four reliable structures",
          steps: [
            { label: "Outcome + timeframe", detail: "\"Bookkeeping caught up in three weeks.\" Works when the timeframe is genuinely notable and true." },
            { label: "Problem, named precisely", detail: "\"Your booking page is losing enquiries at the form.\" Works when the reader will recognise it immediately." },
            { label: "Outcome without the objection", detail: "\"More qualified calls, without spending more on ads.\" Names the result and pre-empts the obvious cost objection." },
            { label: "Audience + outcome", detail: "\"For consultants who get referrals but nothing else — a system that brings in the rest.\" Explicitly excludes, which sharpens it." },
          ],
        },
        {
          type: "callout",
          tone: "warn",
          title: "Headlines that waste the screen",
          body: "Your company name. \"Welcome.\" A tagline nobody outside the business understands. A clever pun that requires the subheadline to explain the joke. All of them spend your most valuable line saying nothing.",
        },
        {
          type: "example",
          title: "Weak to strong, in three passes",
          body: "\"Professional Web Design Services\" — describes a category, says nothing. \"Websites that actually convert\" — better, but every competitor says it. \"Service-business websites that turn existing traffic into booked calls\" — names the audience, the mechanism and the outcome. A stranger can now decide in one read whether this is for them.",
        },
        {
          type: "heading",
          text: "The subheadline",
        },
        {
          type: "text",
          body: "The subheadline does the job the headline could not do without becoming unreadable. Usually that is the mechanism, the audience, or the specificity — whichever the headline left out.",
        },
        {
          type: "heading",
          text: "The first CTA",
        },
        {
          type: "list",
          items: [
            "Visible without scrolling on a phone, not only on desktop.",
            "Names the action and the format: \"Book a 20-minute call\", not \"Get started\".",
            "Commitment proportional to the trust earned — which at this point is almost none.",
            "One button. A second option here splits your best-converting traffic.",
            "Below it, one line removing risk: what happens next, or how long it takes.",
          ],
        },
      ],
      template: {
        title: "Above-the-fold formulas",
        body: `HEADLINE — pick one structure

Outcome + timeframe:
  [Outcome] in [timeframe].

Problem, named:
  Your [specific thing] is [specific failure].

Outcome minus objection:
  [Outcome], without [the obvious cost].

Audience + outcome:
  For [specific audience] who [situation] —
  [outcome].

SUBHEADLINE — add what the headline omitted

  [Mechanism: how the outcome is produced]
  or
  [Specificity: for whom, how long, how much]

CTA — name the action and the format

  [Verb] a [format] [qualifier]
  e.g. "Book a 20-minute call"
       "Get the 12-page guide"
       "Start the 5-minute audit"

RISK LINE — one sentence under the button

  [What happens next] or [what it costs them]
  e.g. "No pitch — if I can't help I'll say so."`,
        adapt: [
          "Write five headlines, not one. The first is almost never the best.",
          "Choose on specificity, not cleverness. Clever headlines age badly and convert worse.",
          "Read the headline and subheadline together aloud — they must work as one thought.",
          "If the headline needs the subheadline to make sense, the headline is not finished.",
        ],
      },
      exercise: {
        title: "Write five headlines",
        prompt:
          "Use all four formulas and produce at least five options. Then choose on specificity.",
        steps: [
          "Write one headline using each of the four structures.",
          "Write a fifth in your own words with no formula.",
          "Score each on: could a competitor publish this unchanged? Cut every yes.",
          "Choose the most specific survivor, then write the subheadline that completes it.",
          "Read both aloud as a single thought and adjust until they flow.",
        ],
      },
      checklist: {
        title: "First-screen checklist",
        groups: [
          {
            items: [
              "Headline names an outcome or a problem, not a category",
              "Headline would be false or awkward on a competitor's page",
              "Subheadline adds the mechanism or specificity the headline omitted",
              "CTA visible without scrolling on a phone",
              "CTA names the action and its format",
              "One credibility marker present, substantiable",
              "Visual is relevant — no stock photos of strangers",
              "Only one call to action on the first screen",
              "A risk-reducing line under the button",
            ],
          },
        ],
      },
      actionStep:
        "Open your page on a phone and screenshot the first screen. Everything the reader needs to decide whether to continue must be in that screenshot.",
      recap: [
        "Most people who leave, leave from the first screen.",
        "Five elements: headline, subheadline, CTA, one credibility marker, a relevant visual.",
        "Write five headlines and choose on specificity, not cleverness.",
        "The CTA must be visible without scrolling on mobile.",
      ],
    },
    {
      slug: "problem-and-solution",
      number: 4,
      title: "Problem, Agitation and Solution",
      summary:
        "Making the reader feel understood, then showing the way out — without manipulation.",
      durationMinutes: 22,
      blocks: [
        {
          type: "text",
          body: "The problem section is where the reader decides you understand them. It is the highest-leverage writing on the page after the headline, and it is the section most people write worst — because they write about their service instead of the reader's situation.",
        },
        {
          type: "heading",
          text: "Writing the problem",
        },
        {
          type: "list",
          items: [
            "Use their words. Not the industry term for the problem — the sentence they would say to a friend.",
            "Be specific enough to be slightly uncomfortable. Vague problems produce vague recognition.",
            "Describe the situation, not the emotion. \"You are checking the inbox at 11pm\" lands harder than \"you feel overwhelmed\".",
            "Three or four sentences is usually enough. This is not the longest section on the page.",
          ],
        },
        {
          type: "example",
          title: "Service-centred versus reader-centred",
          body: "Service-centred: \"Many businesses struggle with lead generation and conversion optimisation.\" Reader-centred: \"You get about forty enquiries a month. You reply to most of them. Maybe six turn into calls, and you have no idea what happened to the other thirty-four.\" The second one is the same problem, described from inside it.",
        },
        {
          type: "heading",
          text: "Agitation, honestly",
        },
        {
          type: "text",
          body: "Agitation means making the cost of the problem visible — not manufacturing distress. The honest version states consequences that are genuinely true and that the reader already half-knows. The dishonest version invents catastrophes to create panic.",
        },
        {
          type: "framework",
          title: "The line",
          steps: [
            { label: "Honest agitation", detail: "Naming a real consequence they are already living with. \"Those thirty-four enquiries cost you the same in ad spend as the six that converted.\" True, checkable, and it reframes the problem as expensive rather than annoying." },
            { label: "Manipulation", detail: "Inventing consequences, implying disaster, or exaggerating urgency. \"Every day you wait you are losing thousands\" — asserted without evidence, and the reader knows it." },
          ],
        },
        {
          type: "callout",
          tone: "signal",
          title: "One consequence, stated plainly",
          body: "You need one real cost, stated once. Piling on four increasingly dramatic consequences reads as a sales letter and triggers the scepticism you were trying to avoid.",
        },
        {
          type: "heading",
          text: "The solution section",
        },
        {
          type: "text",
          body: "Now show the way out. The mistake here is jumping straight to deliverables. What the reader needs first is the mechanism — the reason this approach produces the outcome — because that is what makes everything after it believable.",
        },
        {
          type: "framework",
          title: "Solution section structure",
          steps: [
            { label: "The reframe", detail: "One sentence recasting the problem in a way that makes the solution obvious. \"This isn't a traffic problem — it's what happens after someone raises their hand.\"" },
            { label: "The mechanism", detail: "How your approach produces the outcome, in two or three sentences a non-expert can follow." },
            { label: "What it looks like in practice", detail: "The concrete deliverables, now that they understand why those things matter." },
            { label: "What changes", detail: "The outcome restated, now that it has been earned rather than claimed." },
          ],
        },
        {
          type: "callout",
          tone: "muted",
          title: "Mechanism beats credentials",
          body: "\"Fifteen years of experience\" is a claim the reader must accept on faith. Explaining precisely how you approach the problem lets them evaluate your thinking directly — which is far more convincing and available to someone on day one.",
        },
      ],
      exercise: {
        title: "Write the problem section",
        prompt:
          "Draft it in their words, then test it on someone in your target audience.",
        steps: [
          "Write four sentences describing their situation using words they would say.",
          "Remove every industry term.",
          "Add one real, checkable consequence — the cost of the problem.",
          "Read it aloud. If it sounds like a brochure it is too abstract; add a concrete detail.",
          "Show it to one person in your audience and ask: does this describe you?",
        ],
      },
      checklist: {
        title: "Problem and solution checklist",
        groups: [
          {
            items: [
              "Problem written in the reader's words, not industry terms",
              "Describes the situation, not the emotion",
              "One real consequence stated, not four dramatic ones",
              "Nothing invented or exaggerated for effect",
              "Solution opens with a reframe, not a deliverable",
              "Mechanism explained in two or three plain sentences",
              "Deliverables come after the mechanism, not before",
              "A person in the target audience confirmed the problem describes them",
            ],
          },
        ],
      },
      actionStep:
        "Show your problem section to one real person in your target audience and ask whether it describes them. Their reaction is worth more than any amount of rewriting alone.",
      recap: [
        "The problem section is where the reader decides you understand them.",
        "Describe the situation in their words, not the emotion in yours.",
        "One real consequence, stated plainly. Piling on reads as manipulation.",
        "Lead the solution with the mechanism — it is what makes deliverables matter.",
      ],
    },
    {
      slug: "benefits-features-proof",
      number: 5,
      title: "Benefits, Features and Proof",
      summary:
        "Making the offer concrete and then making it believable.",
      durationMinutes: 22,
      blocks: [
        {
          type: "text",
          body: "By this point the reader understands the problem and roughly how you solve it. This section makes it concrete — what they actually receive — and then makes it credible, which is where most pages quietly fail.",
        },
        {
          type: "heading",
          text: "Benefits and features together",
        },
        {
          type: "text",
          body: "A benefit without a feature is a promise with nothing under it. A feature without a benefit is a specification the reader has to translate. Pair them and each one fixes the other's weakness.",
        },
        {
          type: "framework",
          title: "The pairing formula",
          steps: [
            { label: "Lead with the change", detail: "What is different for them afterwards. This is what they are buying." },
            { label: "Follow with the thing", detail: "The concrete deliverable that produces it. This is what makes the change believable." },
            { label: "Keep to five or six", detail: "More than that and none of them are memorable. Choose the ones that matter most to this audience." },
          ],
        },
        {
          type: "example",
          title: "Three versions of one line",
          body: "Feature only: \"Automated email sequence.\" Benefit only: \"Never lose a lead again.\" Paired: \"Stop losing enquiries in your inbox — a five-message sequence that follows up automatically, whether or not you remember.\" The third both promises and substantiates.",
        },
        {
          type: "heading",
          text: "Proof placement",
        },
        {
          type: "text",
          body: "Proof works when it sits beside the claim it supports. Collected into a single testimonials block, it does much less — because doubt does not occur in a testimonials block, it occurs at the moment a specific claim is made.",
        },
        {
          type: "framework",
          title: "Where each doubt occurs",
          steps: [
            { label: "At the mechanism", detail: "Doubt: does this actually work? Place a demonstration of the method or a piece of real work product." },
            { label: "At the problem section", detail: "Doubt: is my situation different? Place a case from a similar starting point." },
            { label: "At the price", detail: "Doubt: is it worth it? Place evidence of the outcome's value, stated honestly." },
            { label: "At the CTA", detail: "Doubt: what if this goes wrong? Place the risk reversal and evidence of how you work." },
          ],
        },
        {
          type: "callout",
          tone: "warn",
          title: "Only substantiable proof",
          body: "Everything in this section depends on being true. Invented testimonials, borrowed results, unattributed quotes and made-up numbers are checkable, and the damage when caught is permanent. If you have little proof, use less — do not manufacture more.",
        },
        {
          type: "heading",
          text: "Testimonials that work",
        },
        {
          type: "list",
          items: [
            "Specific beats glowing. \"They rebuilt our booking flow and enquiries stopped disappearing\" beats \"Amazing to work with!\"",
            "Attributed beats anonymous. A name, a business, ideally a photo — with permission.",
            "A testimonial that mentions an initial doubt and how it resolved is the most persuasive kind.",
            "Three good ones beat twelve generic ones.",
            "No testimonials at all is a legitimate position. An obviously empty slot is more credible than a vague one.",
          ],
        },
        {
          type: "callout",
          tone: "signal",
          title: "Proof without clients",
          body: "Demonstrated mechanism, real work product, and unusually precise understanding of the problem all count as evidence, require no client permission, and are available from day one.",
        },
      ],
      exercise: {
        title: "Pair and place",
        prompt: "Rewrite your benefits and then move your proof to where the doubt happens.",
        steps: [
          "List every feature you currently name on the page.",
          "For each, write the change it produces for the reader.",
          "Rewrite as paired lines: change first, deliverable second. Keep six maximum.",
          "Find the four doubt moments on your page.",
          "Move your strongest substantiable proof beside each one.",
        ],
      },
      checklist: {
        title: "Proof and benefits checklist",
        groups: [
          {
            items: [
              "Every benefit paired with the feature that substantiates it",
              "Six benefit lines maximum",
              "Change stated first, deliverable second",
              "Every claim on the page can be defended if challenged",
              "Proof placed beside the claim it supports, not collected in one block",
              "Testimonials specific and attributed, with permission",
              "Nothing invented, borrowed or exaggerated",
              "Empty proof slots left honestly empty",
            ],
          },
        ],
      },
      actionStep:
        "Audit your page for any claim you could not defend if a prospect challenged it directly. Remove those today, even the ones that appear to be working.",
      recap: [
        "Pair benefits with features — each fixes the other's weakness.",
        "Place proof beside the claim it supports, not in a testimonials block.",
        "Specific, attributed testimonials beat glowing anonymous ones.",
        "Mechanism, work product and precise understanding are proof available on day one.",
      ],
    },
    {
      slug: "objections-risk-final-cta",
      number: 6,
      title: "FAQ, Risk Reversal and the Final CTA",
      summary:
        "Closing the page — handling what is left, removing risk honestly, and asking clearly.",
      durationMinutes: 20,
      blocks: [
        {
          type: "text",
          body: "The reader is interested and nearly convinced. What remains are the specific concerns that stop people, and the question of what happens if this goes wrong. Handle both plainly and then ask.",
        },
        {
          type: "heading",
          text: "The FAQ as objection handling",
        },
        {
          type: "text",
          body: "The FAQ is the least defensive place to answer hard questions, because the reader chose to read it. Use it for the objections that genuinely stop people — not for questions nobody asks.",
        },
        {
          type: "list",
          items: [
            "Answer the four or five that actually stop people, not twelve that do not.",
            "Write the question as the reader would ask it, including the blunt version.",
            "Answer directly in the first sentence, then explain. Do not build up to it.",
            "Include at least one question that is genuinely awkward. Answering it honestly earns more trust than avoiding it.",
            "Use the price question here if price is not stated elsewhere.",
          ],
        },
        {
          type: "example",
          title: "An awkward question, answered well",
          body: "\"What if it doesn't work?\" — \"Then we keep working, or you don't pay for the second phase. I'd rather have that conversation than a refund one. Specifically: if enquiries haven't moved in 60 days, phase two is free until they do.\" Direct, specific, and it makes the guarantee checkable rather than vague.",
        },
        {
          type: "heading",
          text: "Risk reversal",
        },
        {
          type: "text",
          body: "Risk reversal shifts some of the risk of being wrong from the buyer back to you. It is powerful and it is a commitment — only offer what you can honour without resentment.",
        },
        {
          type: "framework",
          title: "Options, from lightest to heaviest",
          steps: [
            { label: "Clear scope and exit points", detail: "Staged work with a decision point between phases. Costs you nothing and removes most of the fear." },
            { label: "Staged payment", detail: "Part up front, part on completion. Signals confidence and reduces the size of the leap." },
            { label: "A specific, checkable promise", detail: "\"If X hasn't happened by Y, then Z.\" Only if X is genuinely within your control." },
            { label: "Money-back guarantee", detail: "Strongest, and only viable when your delivery is reliable and your buyers are well-qualified. Expect to honour it occasionally." },
          ],
        },
        {
          type: "callout",
          tone: "warn",
          title: "Do not promise outcomes you do not control",
          body: "Guaranteeing revenue, rankings or results that depend on the client's own execution creates disputes you will lose. Guarantee what you control — the work, the timeline, the standard — and be honest about the rest.",
        },
        {
          type: "heading",
          text: "The final CTA",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Same wording as the first CTA. Consistency, not variety.",
            "Restate the outcome in one line directly above it.",
            "Remove everything else from that part of the page — no links, no footer noise adjacent to it.",
            "Add the risk-reducing line underneath: what happens next, or what it costs them.",
            "Make it the last thing on the page before the footer.",
          ],
        },
        {
          type: "callout",
          tone: "signal",
          title: "Ask plainly",
          body: "After a page of careful explanation, people often soften the ask. Do the opposite. A direct, specific request converts better than a polite, vague one.",
        },
      ],
      exercise: {
        title: "Write the FAQ from real questions",
        prompt:
          "Source these from actual conversations rather than inventing them.",
        steps: [
          "List everything you find yourself explaining in sales conversations.",
          "Identify the five that come up most and stop people most.",
          "Write each as the reader would ask it, bluntly.",
          "Answer in the first sentence, then explain in two more.",
          "Include one genuinely awkward question and answer it honestly.",
        ],
      },
      checklist: {
        title: "Closing section checklist",
        groups: [
          {
            items: [
              "FAQ answers four or five real objections, sourced from conversations",
              "Questions written the way readers actually ask them",
              "Each answer leads with the answer, then explains",
              "At least one genuinely awkward question answered honestly",
              "Risk reversal offered is one you can honour without resentment",
              "No guarantee covering outcomes outside your control",
              "Final CTA identical in wording to the first",
              "Outcome restated in one line above the final CTA",
              "No competing links adjacent to the final CTA",
            ],
          },
        ],
      },
      actionStep:
        "Write down the one objection you hear most and answer it on the page. If you are explaining the same thing on every call, the page should be doing it for you.",
      recap: [
        "The FAQ is the least defensive place to answer hard questions.",
        "Include one genuinely awkward question — answering it earns trust.",
        "Only guarantee what you control, and only what you can honour.",
        "Final CTA identical to the first, with everything else cleared away.",
      ],
    },
    {
      slug: "wireframe-and-audit",
      number: 7,
      title: "The Complete Wireframe and Audit",
      summary:
        "The full page structure in order, plus the audits to run before sending traffic.",
      durationMinutes: 25,
      blocks: [
        {
          type: "text",
          body: "Here is the whole page in sequence. Build it in this order — the argument depends on it. Each section assumes the reader accepted the one before.",
        },
        {
          type: "framework",
          title: "Complete landing-page wireframe",
          steps: [
            { label: "1. Hero", detail: "Headline, subheadline, CTA, one credibility marker, relevant visual. Fails when it names the company instead of the outcome." },
            { label: "2. Problem", detail: "Their situation in their words, three or four sentences. Fails when written about your service rather than their life." },
            { label: "3. Consequence", detail: "One real, checkable cost of the problem. Fails when it piles on invented catastrophes." },
            { label: "4. Reframe and mechanism", detail: "Why this is solvable and how your approach produces the outcome. Fails when it jumps to deliverables." },
            { label: "5. What you get", detail: "Concrete deliverables, now that they matter. Fails when it is a feature list with no benefits." },
            { label: "6. Benefits", detail: "Five or six paired lines, change first. Fails when benefits float free of anything concrete." },
            { label: "7. Proof", detail: "Substantiable evidence, distributed to the doubts it answers. Fails when it is a testimonial block of anonymous praise." },
            { label: "8. Offer and price", detail: "What it costs, what is included, what is not. Fails when price is hidden — that reads as expensive and evasive." },
            { label: "9. Risk reversal", detail: "What happens if it does not work. Fails when it promises outcomes you do not control." },
            { label: "10. FAQ", detail: "Four or five real objections, answered directly. Fails when it answers questions nobody asks." },
            { label: "11. Final CTA", detail: "Same wording as the first, outcome restated above it, nothing competing. Fails when it softens the ask." },
          ],
        },
        {
          type: "callout",
          tone: "signal",
          title: "Order matters more than length",
          body: "A long page in the right order outperforms a short page in the wrong one. Cut for irrelevance, never for length — every section here is doing a job the next one depends on.",
        },
        {
          type: "heading",
          text: "Before you send traffic",
        },
        {
          type: "text",
          body: "Run all three checklists below in one sitting. Problems cluster, and you will catch far more in one focused pass than across three sessions.",
        },
      ],
      checklist: {
        title: "Landing-page audit",
        groups: [
          {
            label: "Structure",
            items: [
              "All eleven sections present and in order",
              "One offer, one audience, one action",
              "Headline names an outcome or problem, not a category",
              "Mechanism explained before deliverables",
              "Price or range stated on the page",
              "Same CTA wording used throughout",
            ],
          },
          {
            label: "Copy",
            items: [
              "Written to \"you\", one person at a time",
              "Problem section uses the reader's words",
              "Every claim substantiable if challenged",
              "No adjective a competitor could also claim",
              "Benefits paired with features",
              "Passed the stranger test with two of three readers",
            ],
          },
          {
            label: "Conversion",
            items: [
              "CTA visible without scrolling on mobile",
              "No navigation, popups or chat widget",
              "No outbound links — proof quoted inline",
              "Form asks only for fields that change what you do next",
              "Confirmation message states what happens next and when",
              "Tracking fires on submission and has been verified",
            ],
          },
          {
            label: "Mobile",
            items: [
              "Tested on a real device, not a resized window",
              "Tap targets comfortably thumb-sized",
              "Body text 16px or larger",
              "Images compressed",
              "No horizontal scrolling at any width",
              "Loads acceptably on mobile data, not office wifi",
              "First screen complete and legible on a phone",
            ],
          },
        ],
      },
      exercise: {
        title: "Full audit pass",
        prompt:
          "Work all four groups in one sitting, recording problems rather than fixing as you go.",
        steps: [
          "Score every item honestly, with the live page open.",
          "Write down every failure without stopping to fix it.",
          "Fix the whole list afterwards, structure first, then copy, then conversion, then mobile.",
          "Re-run the Conversion and Mobile groups after fixing.",
          "Only send paid traffic once both come back clean.",
        ],
      },
      actionStep:
        "Submit your own form from your phone and confirm the email arrives and the tracking fires. A page that converts but does not record it is the most expensive bug in this tutorial.",
      recap: [
        "Eleven sections, in order — each assumes the reader accepted the last.",
        "Cut for irrelevance, never for length.",
        "Run all four audit groups in one focused pass before sending traffic.",
        "Verify the form and the tracking end to end, from a phone.",
      ],
    },
  ],
};
