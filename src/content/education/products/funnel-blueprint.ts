import type { EducationProduct } from "../types";

/**
 * PAID — Funnel-Building Blueprint ($19).
 *
 * The full sequence from traffic to referral, plus six funnel models with
 * page structures, follow-up sequences and the metrics that tell you which
 * stage is leaking.
 */

export const funnelBlueprint: EducationProduct = {
  slug: "funnel-blueprint",
  title: "Funnel-Building Blueprint",
  tier: "paid",
  price: 19,
  format: "blueprint",
  category: "funnels",
  difficulty: "intermediate",
  estimatedMinutes: 195,
  summary:
    "Build the whole sequence — traffic to referral — using the funnel model that actually matches your offer.",
  description:
    "A funnel is a sequence, not a page. This blueprint covers all nine stages from traffic through to referral, then gives you six funnel models with their page structures, follow-up sequences and metrics — so you build the one that fits your offer rather than copying one that fits someone else's.",
  whatYouWillLearn: [
    "The nine stages every funnel has, and the job each one does",
    "How to choose between six funnel models based on price and trust required",
    "The page structure and CTA for each model",
    "Follow-up sequences that run without you remembering",
    "Which metrics to track at each stage, and which to ignore",
    "How to find the stage that is actually leaking",
  ],
  whoItIsFor: [
    "Anyone who has a landing page but no sequence around it",
    "Solopreneurs whose leads go cold after first contact",
    "People who copied a funnel template that does not fit their offer",
    "Service providers moving from referrals to a repeatable process",
  ],
  whatYouWillBuild: [
    "A mapped funnel with all nine stages defined for your offer",
    "The chosen funnel model with its page structure specified",
    "A written follow-up sequence, ready to automate",
    "A metrics sheet showing what to measure at each stage",
  ],
  includedResources: [
    { title: "Nine-stage funnel map", detail: "Every stage, its job, and how it hands off to the next." },
    { title: "Six funnel model diagrams", detail: "Page structure, CTA, follow-up and metrics for each model." },
    { title: "Model selection framework", detail: "Choosing based on price point and trust required." },
    { title: "Follow-up sequence templates", detail: "Message-by-message structure for each funnel type." },
    { title: "Funnel metrics sheet", detail: "What to measure at each stage and what good looks like." },
    { title: "Implementation checklist", detail: "Build order and what to verify before sending traffic." },
  ],
  nextStep: {
    slug: "client-acquisition",
    pitch:
      "A funnel converts the traffic it receives. If the constraint is that not enough people reach it, the next problem is acquisition — channels, outreach and a repeatable pipeline.",
  },
  faqs: [
    {
      question: "Do I need expensive funnel software?",
      answer:
        "No. Every model here can be built with a website builder, a form, and an email tool — typically under $50 a month combined. Dedicated funnel platforms package those together conveniently but they are not required, and they are a poor first purchase before you know which model you need.",
    },
    {
      question: "Which funnel should I build first?",
      answer:
        "Chapter 2 gives you a selection framework based on your price point and how much trust the purchase requires. For most solopreneurs selling services between roughly $500 and $5,000, the consultation funnel is the right first build.",
    },
    {
      question: "How long does it take to build one?",
      answer:
        "The lead magnet and consultation funnels are typically a weekend of focused work if your offer is already clear. Webinar funnels take considerably longer because the content itself is the main build. The blueprint gives you the build order so you ship something live rather than perfecting one stage.",
    },
    {
      question: "What if I already have a funnel that half works?",
      answer:
        "Start with the metrics chapter. Find which stage has the largest proportional drop-off, then read the chapter covering that stage. Rebuilding a whole funnel when one stage is leaking is expensive and usually unnecessary.",
    },
  ],
  chapters: [
    {
      slug: "funnel-anatomy",
      number: 1,
      title: "Funnel Anatomy — The Nine Stages",
      summary:
        "Every funnel has the same nine stages. Knowing which one you are missing is most of the work.",
      durationMinutes: 25,
      blocks: [
        {
          type: "text",
          body: "People use \"funnel\" to mean a landing page, an email sequence, or a vague sense that marketing should be more organised. It is none of those. A funnel is a sequence of stages, each with one job, each handing the person to the next stage deliberately.",
        },
        {
          type: "text",
          body: "Nearly every funnel problem is a missing stage or a broken handoff between two stages. Once you can name all nine, diagnosing becomes straightforward.",
        },
        {
          type: "framework",
          title: "The nine stages",
          steps: [
            { label: "1. Traffic", detail: "How people arrive. Paid, organic, referral, direct. Its job is volume of the right person, not volume." },
            { label: "2. Landing page", detail: "Converts a visitor into someone willing to identify themselves. One audience, one action." },
            { label: "3. Lead capture", detail: "Collects enough to contact and qualify them. Every field costs conversion, so each one must change what you do next." },
            { label: "4. Thank-you page", detail: "The highest-attention moment in the entire funnel, and the most commonly wasted. Confirm, set expectations, and offer the next step." },
            { label: "5. Follow-up", detail: "Automated sequence that continues the conversation. This is where most recoverable revenue sits." },
            { label: "6. Offer", detail: "The moment you ask for money or serious commitment. Can be a page, a call, or an email." },
            { label: "7. Purchase or booked call", detail: "The conversion event. Needs confirmation, and for calls, reminders." },
            { label: "8. Delivery", detail: "Doing what was promised. Part of the funnel because it determines stage nine." },
            { label: "9. Referral or repeat", detail: "Turning one customer into proof, a referral, or a second purchase. Cheapest growth available and almost always neglected." },
          ],
        },
        {
          type: "callout",
          tone: "signal",
          title: "The thank-you page is not a dead end",
          body: "Someone just said yes to something. Their attention and goodwill are at their highest point in the entire funnel, and most businesses use that moment to display the word \"Thanks\". Confirm what happens next, then offer one logical next step.",
        },
        {
          type: "heading",
          text: "Handoffs are where funnels break",
        },
        {
          type: "text",
          body: "Most businesses own all nine components in some form. What they lack is deliberate handoffs — each stage releasing the person into the next with a specific job completed. A landing page that captures a lead into a spreadsheet nobody reads is a broken handoff, not a missing stage.",
        },
        {
          type: "list",
          items: [
            "Every stage should state what happens next and when.",
            "Nothing should depend on you noticing and acting — that is a habit, not infrastructure.",
            "Each handoff should carry information forward. What they told you at capture should shape the follow-up they receive.",
            "Every stage needs a count, or you cannot tell which one leaks.",
          ],
        },
        {
          type: "example",
          title: "All the parts, no funnel",
          body: "A consultant has a website, a PDF guide, a Mailchimp account and a Calendly link. Traffic goes to the homepage. The guide is mentioned on a different page. Nobody who downloads it is followed up. The booking link is in the footer. Every component exists; no path connects them, so none of them produce anything.",
        },
      ],
      exercise: {
        title: "Map your nine stages",
        prompt:
          "Draw your current funnel honestly, marking stages that do not exist rather than the ones you intend to build.",
        steps: [
          "Write the nine stages down the page.",
          "For each, write what currently exists — or \"nothing\".",
          "Draw an arrow only where an automated handoff genuinely happens.",
          "Circle every stage with no incoming or outgoing arrow.",
          "Note which stage has no count attached to it.",
        ],
      },
      actionStep:
        "Name the stage you are missing entirely. For most people it is the thank-you page or the follow-up sequence, and both are cheap to fix.",
      recap: [
        "A funnel is nine stages, each with one job and a deliberate handoff.",
        "Most funnel problems are a missing stage or a broken handoff.",
        "The thank-you page is the highest-attention moment and the most wasted.",
        "Every stage needs a count or you cannot find the leak.",
      ],
    },
    {
      slug: "choosing-your-model",
      number: 2,
      title: "Choosing Your Funnel Model",
      summary:
        "Six models, and how to pick based on price point and the trust the purchase requires.",
      durationMinutes: 20,
      blocks: [
        {
          type: "text",
          body: "The most common funnel mistake is copying a model that worked for a different kind of offer. A funnel that sells a $27 ebook has almost nothing in common with one that sells a $15,000 engagement, and forcing one into the other's shape wastes months.",
        },
        {
          type: "heading",
          text: "The two variables that decide",
        },
        {
          type: "framework",
          title: "What determines your model",
          steps: [
            { label: "Price point", detail: "Higher prices require more steps, because the decision is larger. A $19 product can convert on one page; a $10,000 service cannot." },
            { label: "Trust required", detail: "Not the same as price. Anything involving your business's core operations, personal data, or a long commitment requires more trust regardless of cost." },
          ],
        },
        {
          type: "framework",
          title: "The six models, by fit",
          steps: [
            { label: "Lead magnet funnel", detail: "Any price. Used to build an audience you can sell to later. The entry funnel for people with traffic but no list." },
            { label: "Product funnel", detail: "Roughly $10–$200. Low trust required. Can convert directly from a page with no human contact." },
            { label: "Service funnel", detail: "Roughly $500–$5,000. Moderate trust. Usually needs an enquiry step rather than direct purchase." },
            { label: "Consultation funnel", detail: "Roughly $1,000–$10,000. The workhorse for most solopreneurs. Converts on a call, not a page." },
            { label: "High-ticket funnel", detail: "$5,000 upward. Requires qualification before the call, because unqualified calls at this level are expensive to hold." },
            { label: "Webinar funnel", detail: "Any price above roughly $500. Trades a large content investment for the ability to build trust at scale." },
          ],
        },
        {
          type: "callout",
          tone: "signal",
          title: "Most solopreneurs should build the consultation funnel first",
          body: "It works for the price range most service businesses sit in, it requires no content production beyond the page, and it puts you in a conversation where you can learn what buyers actually object to. That learning improves every other funnel you build later.",
        },
        {
          type: "callout",
          tone: "warn",
          title: "Do not build two funnels at once",
          body: "Two half-built funnels convert worse than one finished one, and you cannot tell which is working. Build one, get it live, run traffic through it for a few weeks, then consider the second.",
        },
        {
          type: "heading",
          text: "The universal build order",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Offer — settle what you are actually selling before building anything.",
            "Landing page — the destination has to exist before you point traffic at it.",
            "Capture and thank-you page — including the immediate confirmation email.",
            "Follow-up sequence — three messages minimum, automated.",
            "Tracking — counts at every stage, verified before launch.",
            "Traffic — last, deliberately. Sending traffic at an unfinished funnel wastes it.",
          ],
        },
      ],
      exercise: {
        title: "Select your model",
        prompt: "Choose one, and write down why the others do not fit.",
        steps: [
          "Write your price point and how much trust the purchase requires.",
          "Match it against the six models.",
          "Write one sentence explaining why your choice fits and why the adjacent model does not.",
          "Commit to building only that one for now.",
        ],
      },
      actionStep:
        "Write your chosen model at the top of your build notes. Every decision from here follows from it, and changing model mid-build is what produces half-finished funnels.",
      recap: [
        "Price point and trust required decide the model.",
        "The consultation funnel fits most solopreneurs and teaches you the most.",
        "Build one funnel at a time, in the order: offer, page, capture, follow-up, tracking, traffic.",
      ],
    },
    {
      slug: "lead-magnet-and-product",
      number: 3,
      title: "Lead Magnet and Product Funnels",
      summary:
        "The two lowest-friction models — building an audience, and selling directly from a page.",
      durationMinutes: 30,
      blocks: [
        {
          type: "text",
          body: "These two models share a property: they can convert without a conversation. That makes them the cheapest to run and the most dependent on the page doing its job unaided.",
        },
        {
          type: "heading",
          text: "The lead magnet funnel",
        },
        {
          type: "text",
          body: "Purpose: convert anonymous traffic into a contactable audience you can sell to over time. Use it when you have traffic but no owned list, or when your offer needs more trust than a first visit can produce.",
        },
        {
          type: "framework",
          title: "Lead magnet funnel — structure",
          steps: [
            { label: "Who it is for", detail: "Anyone with traffic and no list. Creators, content publishers, businesses with organic search visibility." },
            { label: "Page structure", detail: "Short. Headline naming what they get and the problem it solves, three bullet points of contents, one form with name and email only, one line on what happens next. No long sales argument — the ask is small." },
            { label: "CTA", detail: "\"Get the [specific thing]\" — name the asset and its format. \"Download the 12-page funnel audit\" beats \"Subscribe\"." },
            { label: "Follow-up", detail: "Deliver immediately. Then a sequence that provides value first and introduces the offer around message three or four." },
            { label: "Metrics", detail: "Page conversion rate, delivery open rate, sequence engagement, and eventually how many list members become customers." },
          ],
        },
        {
          type: "callout",
          tone: "warn",
          title: "The magnet must be genuinely useful",
          body: "A thin lead magnet trains people to ignore you. The asset is your first demonstration of quality — if it disappoints, the sequence that follows is talking to someone who has already decided you are not worth attention.",
        },
        {
          type: "callout",
          tone: "signal",
          title: "Specific beats comprehensive",
          body: "\"The complete guide to marketing\" converts worse than \"the 10-minute funnel audit\". Narrow, immediately usable assets outperform comprehensive ones — they promise a result rather than a reading commitment.",
        },
        {
          type: "heading",
          text: "The product funnel",
        },
        {
          type: "text",
          body: "Purpose: sell a low-price digital product directly, with no conversation. Use it for anything roughly $10–$200 where the buyer can evaluate the offer without talking to you.",
        },
        {
          type: "framework",
          title: "Product funnel — structure",
          steps: [
            { label: "Who it is for", detail: "Digital products, templates, short courses, guides. Anything where the buyer's risk is small enough to decide alone." },
            { label: "Page structure", detail: "Full landing page — hero, problem, what it contains, who it is for, proof, price, FAQ, final CTA. The page does all the selling, so it carries the whole argument." },
            { label: "CTA", detail: "Direct purchase. \"Get [product] — $19\". Price in the button removes a question and pre-qualifies the click." },
            { label: "Follow-up", detail: "Two sequences. Buyers: delivery, how to use it, and a check-in. Non-buyers who visited but did not purchase: one honest follow-up, then stop." },
            { label: "Metrics", detail: "Page conversion rate, checkout completion rate, refund rate. Checkout abandonment is the most commonly ignored and most fixable." },
          ],
        },
        {
          type: "example",
          title: "Where product funnels leak",
          body: "A product page converts 4% of visitors to the checkout, and 40% of those abandon at payment. Most owners try to improve the page. The bigger, cheaper win is the checkout: too many fields, no payment method they use, unexpected charges appearing at the last step, or no reassurance about what happens after paying.",
        },
        {
          type: "heading",
          text: "Sequencing the two",
        },
        {
          type: "text",
          body: "These models work well together: the lead magnet builds the audience, the product funnel monetises it. Build the lead magnet first if you have traffic but no list, and the product funnel first if you already have an audience and nothing to sell them.",
        },
      ],
      checklist: {
        title: "Lead magnet and product funnel checklist",
        groups: [
          {
            label: "Lead magnet",
            items: [
              "The asset is narrow and immediately usable, not comprehensive",
              "Page names what they get and the problem it solves",
              "Form asks for name and email only",
              "Delivery is automatic and arrives within a minute",
              "Sequence gives value before introducing the offer",
              "Delivery email tested — including checking spam",
            ],
          },
          {
            label: "Product funnel",
            items: [
              "Full landing page structure, since the page does all the selling",
              "Price stated in the CTA button",
              "Checkout tested on mobile end to end",
              "No unexpected charges appearing at the final step",
              "Purchase confirmation states how to access the product",
              "Separate follow-up for buyers and non-buyers",
              "Refund policy stated plainly",
            ],
          },
        ],
      },
      actionStep:
        "If you already sell a product, complete your own checkout on a phone right now, paying real money. Most checkout problems are invisible until you actually go through it.",
      recap: [
        "Both models convert without a conversation, so the page must work unaided.",
        "Lead magnets should be narrow and immediately usable, not comprehensive.",
        "Put the price in the product CTA — it pre-qualifies the click.",
        "Checkout abandonment is usually a bigger, cheaper win than page conversion.",
      ],
    },
    {
      slug: "service-and-consultation",
      number: 4,
      title: "Service and Consultation Funnels",
      summary:
        "The two models most solopreneurs need — converting interest into an enquiry or a booked call.",
      durationMinutes: 30,
      blocks: [
        {
          type: "text",
          body: "These are the workhorses. Both convert to a conversation rather than a purchase, because at these price points the buyer needs to talk to someone before committing.",
        },
        {
          type: "heading",
          text: "The service funnel",
        },
        {
          type: "text",
          body: "Purpose: convert a visitor into a qualified enquiry. Use it for defined services roughly $500–$5,000 where the scope varies enough that the buyer needs a quote rather than a price button.",
        },
        {
          type: "framework",
          title: "Service funnel — structure",
          steps: [
            { label: "Who it is for", detail: "Freelancers and small agencies selling defined services where scope varies by client." },
            { label: "Page structure", detail: "Hero, problem, what the service includes, process (what happens week by week), proof, price range, FAQ, enquiry form. The process section matters more here than anywhere else — it removes the fear of an unknown engagement." },
            { label: "CTA", detail: "\"Request a quote\" or \"Check availability\". Lower commitment than a call, which converts more of the people who are not yet ready to talk." },
            { label: "Follow-up", detail: "Immediate confirmation stating when you will respond. Personal reply within 24 hours. Then a sequence for anyone who goes quiet." },
            { label: "Metrics", detail: "Enquiry rate, enquiry-to-quote rate, quote-to-close rate. Track them separately — they fail for different reasons." },
          ],
        },
        {
          type: "callout",
          tone: "signal",
          title: "Show a price range",
          body: "Hiding price entirely produces enquiries from people who could never afford you, which wastes your time and theirs. A range — \"most projects are £2,000–£6,000\" — qualifies without committing you to a number before you understand the scope.",
        },
        {
          type: "heading",
          text: "The consultation funnel",
        },
        {
          type: "text",
          body: "Purpose: convert a visitor into a booked call where you diagnose and propose. This is the model most solopreneurs should build first, and the one that teaches you the most about your buyers.",
        },
        {
          type: "framework",
          title: "Consultation funnel — structure",
          steps: [
            { label: "Who it is for", detail: "Consultants, coaches, agencies and specialists selling roughly $1,000–$10,000 engagements." },
            { label: "Page structure", detail: "Full landing page, with heavy emphasis on what the call actually is. Most people hesitate because they expect a sales pitch — say explicitly what happens, how long it takes, and what they leave with." },
            { label: "CTA", detail: "\"Book a 20-minute call\". Name the duration. Add one line: \"No pitch — if I can't help, I'll say so.\" That line alone measurably increases bookings." },
            { label: "Follow-up", detail: "Booking confirmation immediately, reminder 24 hours before, reminder one hour before. After the call: written summary within 24 hours, then the follow-up framework." },
            { label: "Metrics", detail: "Page-to-booking rate, booking-to-attendance rate, attendance-to-proposal rate, proposal-to-close rate. Attendance is the one nobody measures and the one most often broken." },
          ],
        },
        {
          type: "callout",
          tone: "warn",
          title: "The no-show leak",
          body: "If people book and do not attend, you are losing conversions that are already paid for. Confirmation, a 24-hour reminder, a one-hour reminder, and a line about what they will leave the call with — that combination typically recovers a substantial share, and it costs nothing to set up.",
        },
        {
          type: "heading",
          text: "The qualification question",
        },
        {
          type: "text",
          body: "Every field on the booking form costs you some bookings and gains you some qualification. The right balance depends on how expensive an unqualified call is. If a call costs you 30 minutes, ask two or three questions. If it costs 90 minutes plus preparation, ask more.",
        },
        {
          type: "list",
          items: [
            "Ask only what changes your action — if the answer would not alter how you prepare or whether you take the call, delete the field.",
            "Budget questions are legitimate but reduce bookings. Use a range selector rather than a free text field.",
            "\"What's the main thing you'd want to solve?\" is the single most useful question — it lets you prepare and it makes the call better.",
            "Route differently based on answers: a good-fit booking and a poor-fit one should not get an identical experience.",
          ],
        },
      ],
      checklist: {
        title: "Service and consultation funnel checklist",
        groups: [
          {
            label: "Service funnel",
            items: [
              "Process section explains what happens week by week",
              "Price range shown to pre-qualify enquiries",
              "Enquiry form asks only what changes your response",
              "Automated confirmation states your response time",
              "Personal reply sent within the stated window",
              "Sequence exists for enquiries that go quiet",
            ],
          },
          {
            label: "Consultation funnel",
            items: [
              "Page states explicitly what the call is and is not",
              "CTA names the call duration",
              "\"No pitch\" style reassurance line present",
              "Booking confirmation sent immediately",
              "Reminder sent 24 hours before",
              "Reminder sent one hour before",
              "Written summary sent within 24 hours after the call",
              "Attendance rate measured, not just booking rate",
            ],
          },
        ],
      },
      exercise: {
        title: "Measure your attendance rate",
        prompt:
          "If you already take calls, this number is usually worse than people assume and cheaper to fix than anything else in the funnel.",
        steps: [
          "Count bookings made in the last two months.",
          "Count how many actually happened.",
          "Calculate the percentage.",
          "If it is below 80%, add the two reminders before changing anything else.",
        ],
      },
      actionStep:
        "Add the line \"No pitch — if I can't help, I'll say so\" under your booking CTA, and mean it. It is the cheapest conversion improvement in this chapter.",
      recap: [
        "Both models convert to a conversation, not a purchase.",
        "Show a price range — hidden pricing produces unqualified enquiries.",
        "Say explicitly what the call is; most hesitation is fear of a pitch.",
        "Measure attendance, not just bookings. It is the most common silent leak.",
      ],
    },
    {
      slug: "high-ticket-and-webinar",
      number: 5,
      title: "High-Ticket and Webinar Funnels",
      summary:
        "The two models that trade extra steps for the trust a larger purchase requires.",
      durationMinutes: 28,
      blocks: [
        {
          type: "text",
          body: "Both of these models add steps deliberately. At higher prices, the extra friction is not a cost — it is what makes the decision possible, and it protects your time from conversations that were never going to close.",
        },
        {
          type: "heading",
          text: "The high-ticket funnel",
        },
        {
          type: "text",
          body: "Purpose: qualify hard before a call, because at this price point an unqualified call is expensive. Use it above roughly $5,000.",
        },
        {
          type: "framework",
          title: "High-ticket funnel — structure",
          steps: [
            { label: "Who it is for", detail: "Consultants and agencies selling substantial engagements, and anyone whose call time is their main constraint." },
            { label: "Page structure", detail: "Long-form landing page carrying the full argument, heavy on proof and mechanism. Then an application rather than a booking form." },
            { label: "CTA", detail: "\"Apply for a strategy call\". The word \"apply\" reframes the interaction — it signals selectivity and improves the quality of who completes it." },
            { label: "Application", detail: "Six to ten questions covering situation, what they have tried, timeline, budget range and decision-making. Long enough to filter, short enough to complete in five minutes." },
            { label: "Follow-up", detail: "Accepted applicants get a booking link and a preparation email. Declined applicants get an honest, useful message and a referral where possible — never silence." },
            { label: "Metrics", detail: "Application rate, acceptance rate, show rate, close rate. Acceptance rate is a lever: too high means the application is not filtering." },
          ],
        },
        {
          type: "callout",
          tone: "signal",
          title: "Declining people well is part of the funnel",
          body: "Someone who is declined kindly, with a useful suggestion, refers others and often returns when circumstances change. Someone who is ghosted after completing a ten-question application tells people about it.",
        },
        {
          type: "callout",
          tone: "warn",
          title: "Do not fake selectivity",
          body: "If you accept everyone who applies, the application is theatre and people can tell. Either genuinely decline poor fits or use a simpler booking form. Manufactured exclusivity is a short-term tactic with a reputational cost.",
        },
        {
          type: "heading",
          text: "The webinar funnel",
        },
        {
          type: "text",
          body: "Purpose: build trust at scale by teaching something genuinely useful, then making an offer to people who have now experienced your thinking. Use it when you can produce good content and your offer needs more trust than a page can build.",
        },
        {
          type: "framework",
          title: "Webinar funnel — structure",
          steps: [
            { label: "Who it is for", detail: "Educators, consultants and anyone selling above roughly $500 whose expertise is demonstrable in 45 minutes." },
            { label: "Page structure", detail: "Registration page — what they will learn, when it is, who it is for. Short. The webinar itself does the selling, not this page." },
            { label: "CTA", detail: "\"Save your seat\" for live sessions; \"Watch the training\" for recorded ones. Live converts better; recorded scales better." },
            { label: "The session", detail: "Roughly 45 minutes teaching something genuinely useful, then 10–15 minutes on the offer. The teaching must stand alone — if someone leaves before the offer, they should still have received value." },
            { label: "Follow-up", detail: "Registration confirmation, reminder 24 hours before, reminder one hour before, replay for non-attendees, then a short offer sequence for both groups." },
            { label: "Metrics", detail: "Registration rate, attendance rate, watch-through rate, offer conversion. Attendance is typically the lowest number and the biggest lever." },
          ],
        },
        {
          type: "callout",
          tone: "warn",
          title: "Webinars are a large content build",
          body: "The funnel mechanics are straightforward; producing 45 minutes of genuinely useful teaching is not. Do not choose this model to avoid building a landing page — choose it because you have something worth 45 minutes of a stranger's attention.",
        },
        {
          type: "callout",
          tone: "muted",
          title: "Teach the what, sell the how",
          body: "A webinar that withholds everything useful to force a purchase annoys people. One that genuinely teaches an approach, then offers help implementing it, converts better and builds an audience that returns.",
        },
      ],
      checklist: {
        title: "High-ticket and webinar checklist",
        groups: [
          {
            label: "High-ticket",
            items: [
              "Long-form page carrying the full argument",
              "Application rather than a direct booking form",
              "Six to ten questions, completable in five minutes",
              "Budget range asked as a selector, not free text",
              "Accepted applicants receive a booking link and preparation email",
              "Declined applicants receive an honest, useful reply — never silence",
              "Acceptance rate tracked; genuinely declining some applicants",
            ],
          },
          {
            label: "Webinar",
            items: [
              "Registration page is short — the session does the selling",
              "Teaching stands alone and is useful without the offer",
              "Offer confined to the last 10–15 minutes",
              "Reminders at 24 hours and one hour",
              "Replay sent to non-attendees",
              "Separate follow-up for attendees and non-attendees",
              "Attendance rate measured as the primary lever",
            ],
          },
        ],
      },
      actionStep:
        "If you are considering a high-ticket funnel, write your application questions first. If you cannot justify each one as changing whether you take the call, use a simpler booking form instead.",
      recap: [
        "Both models add steps deliberately to build trust and protect your time.",
        "\"Apply\" reframes the interaction, but only if you genuinely decline some people.",
        "Declining well is part of the funnel — silence after an application costs you reputation.",
        "A webinar is a large content build; choose it for the content, not the mechanics.",
      ],
    },
    {
      slug: "follow-up-metrics-implementation",
      number: 6,
      title: "Follow-Up, Metrics and Implementation",
      summary:
        "The sequences that run without you, the numbers that find the leak, and the order to build in.",
      durationMinutes: 32,
      blocks: [
        {
          type: "text",
          body: "Two things separate a funnel that works from a collection of pages: follow-up that runs automatically, and enough measurement to know which stage is losing people. This chapter covers both, then the build order.",
        },
        {
          type: "heading",
          text: "Follow-up that runs without you",
        },
        {
          type: "text",
          body: "Most people who eventually buy are not ready the first time they raise their hand. If nothing continues the conversation, that readiness arrives while they are somewhere else.",
        },
        {
          type: "framework",
          title: "The four jobs a sequence does",
          steps: [
            { label: "Deliver and confirm", detail: "Immediately. Give what was promised and state exactly what happens next and when. This is the trust transaction." },
            { label: "Answer the unvoiced objection", detail: "The reason people stall is rarely the reason they state. Address the real one directly." },
            { label: "Show the mechanism working", detail: "Substantiable evidence that the route to the outcome is real." },
            { label: "Ask, once, clearly", detail: "One action, same wording as the page. Repetition beats variety." },
          ],
        },
        {
          type: "callout",
          tone: "signal",
          title: "Three messages that send beat twelve in draft",
          body: "Length matters far less than existence. Build three, automate them, verify they arrive, and extend later once they have earned the attention.",
        },
        {
          type: "heading",
          text: "The metrics that matter",
        },
        {
          type: "text",
          body: "You need a count at every stage and nothing else. Tracking forty events produces a dashboard nobody reads; five numbers checked weekly will find every leak you have.",
        },
        {
          type: "framework",
          title: "What to measure, stage by stage",
          steps: [
            { label: "Traffic", detail: "Arrivals, split by source. Without the source split you cannot tell a traffic problem from a page problem." },
            { label: "Landing page", detail: "Conversion rate — arrivals to captured leads. The headline number for page quality." },
            { label: "Capture", detail: "Form starts versus form completions. A gap here means friction, not disinterest." },
            { label: "Follow-up", detail: "Open and click rates, and how many re-enter the funnel from the sequence." },
            { label: "Offer", detail: "For calls: booked, attended, proposed. For products: checkout started, checkout completed." },
            { label: "Customer", detail: "Closed, and what each one cost to acquire." },
          ],
        },
        {
          type: "callout",
          tone: "warn",
          title: "Find the leak proportionally",
          body: "Look at the percentage lost between each consecutive stage, not the absolute numbers. Large absolute losses at the top are normal; a 90% drop between booking and attendance is not.",
        },
        {
          type: "callout",
          tone: "muted",
          title: "Small numbers lie",
          body: "With very few visitors, stage-by-stage percentages swing wildly. At low volume, fix obvious structural problems you can argue for rather than chasing percentage changes you cannot read.",
        },
        {
          type: "heading",
          text: "Building it",
        },
        {
          type: "text",
          body: "Build in this order and you will have something live in a weekend. Build in any other order and you will have four half-finished stages and no way to test any of them.",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Settle the offer. Everything downstream inherits from it.",
            "Build the landing page. One audience, one action.",
            "Build capture and the thank-you page, including the immediate confirmation email.",
            "Write and automate three follow-up messages.",
            "Wire the counts and verify each one fires by testing the funnel yourself.",
            "Only now, send traffic — starting small enough to fix what the first visitors reveal.",
          ],
        },
      ],
      template: {
        title: "Follow-up sequence templates",
        body: `LEAD MAGNET SEQUENCE

Msg 1 — immediately
  Deliver the asset. One line on how to use it.
  State what will arrive next and when.

Msg 2 — day 2
  The single most useful idea from the asset,
  expanded. No offer yet.

Msg 3 — day 4
  The objection people have at this stage,
  answered directly.

Msg 4 — day 7
  Show the mechanism working. One clear ask.


CONSULTATION SEQUENCE (booked)

  Immediately — confirmation: what the call is,
  what they'll leave with, how to reschedule.
  24h before — reminder + the one question to
  think about.
  1h before — short reminder with the link.
  After — written summary within 24 hours.


ENQUIRY GONE QUIET

  Day 0 — summary and next step.
  Day 7 — something genuinely useful, then one
  line restating the next step.
  Day 21 — close the loop honestly:
  "I'll assume the timing isn't right."`,
        adapt: [
          "Never send 'just checking in' — it signals you have nothing to add.",
          "Front-load the first two messages while attention is high, then space the rest.",
          "Three contacts then stop. Persistence past that damages the relationship.",
          "Test every sequence by submitting your own form and confirming each message arrives.",
        ],
      },
      checklist: {
        title: "Implementation checklist",
        groups: [
          {
            label: "Build order",
            items: [
              "Offer settled and written before anything was built",
              "Landing page live with one audience and one action",
              "Capture form built and tested",
              "Thank-you page states what happens next and when",
              "Immediate confirmation email arrives within a minute",
              "Three follow-up messages written and automated",
            ],
          },
          {
            label: "Before traffic",
            items: [
              "Counts wired at every stage",
              "Whole funnel tested end to end by you, from a phone",
              "Every automated message confirmed received, spam folder checked",
              "Tracking verified as firing, not assumed",
              "Traffic budget and stop point decided in advance",
            ],
          },
          {
            label: "After launch",
            items: [
              "Stage counts reviewed weekly",
              "Proportional drop calculated between each stage",
              "One change made at a time, with the prediction written first",
              "Changes logged with dates",
            ],
          },
        ],
      },
      exercise: {
        title: "Find your leaking stage",
        prompt: "Use your own numbers rather than benchmarks — every business differs too much for benchmarks to be useful.",
        steps: [
          "Write each stage's count for the same period.",
          "Calculate the percentage lost between each consecutive pair.",
          "Identify the largest proportional drop.",
          "Sanity-check it — an impossible-looking number is usually broken tracking, not a real leak.",
          "Fix that one stage and hold everything else steady for two weeks.",
        ],
      },
      actionStep:
        "Run your own funnel end to end from a phone today — submit the form, wait for the emails, click through the whole sequence. Most funnel bugs are only visible from the outside.",
      recap: [
        "Three automated messages beat twelve unfinished ones.",
        "A count at every stage; proportional drops find the leak.",
        "Build in order: offer, page, capture, follow-up, tracking, traffic.",
        "Test the whole funnel yourself before sending anyone else through it.",
      ],
    },
  ],
};
