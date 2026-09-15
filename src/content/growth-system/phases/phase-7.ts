import type { Phase } from "../types";

/**
 * PHASE 7 — ACQUIRE
 * Acquire Predictably.
 *
 * The system converts and the proof reduces risk. Phase 7 asks the commercial
 * question: what does a customer cost, what are they worth, and does that
 * relationship support scaling the distribution built in Phase 4?
 */

export const phase7: Phase = {
  slug: "phase-7",
  number: 7,
  code: "ACQUIRE",
  title: "Acquire Predictably",
  tagline: "Turn the working system into a predictable customer-acquisition machine.",
  status: "available",
  objective:
    "Stand up predictable, measured customer acquisition by knowing what a customer costs, what one is worth, and how fast that money comes back.",
  overview:
    "A growth system becomes a business asset at the moment you can say: spend this, get roughly that. Phase 7 establishes those numbers honestly — acquisition cost including the spend people forget, customer value you can actually defend, and the payback period that determines whether you can afford to scale. Most growth stalls not because a channel stopped working, but because nobody knew the economics well enough to keep going.",
  outcome: "A predictable acquisition model with known numbers and a defensible spending ceiling.",
  finalAsset: {
    id: "acquisition-model",
    title: "Acquisition Model",
    kind: "worksheet",
    description:
      "Your acquisition cost, customer value, payback period and the maximum you can afford to spend to acquire a customer — with the assumptions behind each number stated.",
  },
  lessons: [
    {
      slug: "the-numbers-that-make-acquisition-predictable",
      number: 1,
      title: "The Numbers That Make Acquisition Predictable",
      summary:
        "The small set of figures that turn growth from a hope into a calculation.",
      objective: "Identify the four numbers that make acquisition predictable and locate them in your own business.",
      durationMinutes: 9,
      blocks: [
        {
          type: "text",
          body: "Predictable acquisition means you can state a relationship: if we spend this, we get approximately that, and the money comes back within this period. Businesses that cannot state it are not scaling — they are spending and hoping, and they stop the moment a month looks bad.",
        },
        {
          type: "heading",
          text: "The four numbers",
        },
        {
          type: "framework",
          title: "What you need to know",
          steps: [
            { label: "Cost to acquire a customer", detail: "Total acquisition spend divided by customers acquired — including the costs people leave out." },
            { label: "Customer value", detail: "What a customer is actually worth to you over a defensible horizon, in margin rather than revenue." },
            { label: "Payback period", detail: "How long until an acquired customer has returned what they cost. This determines what you can afford to do." },
            { label: "Conversion rate through the path", detail: "From your Phase 3 counts. This is what connects spend at the top to customers at the bottom." },
          ],
        },
        {
          type: "callout",
          tone: "signal",
          title: "Why payback matters more than ratio",
          body: "A healthy value-to-cost ratio with a two-year payback can still bankrupt you, because the cash goes out now and comes back later. Ratio tells you whether it works; payback tells you whether you can survive doing it.",
        },
        {
          type: "callout",
          tone: "muted",
          title: "On precision",
          body: "These numbers do not need to be exact. They need to be honest and roughly right. A defensible estimate you act on beats a precise figure you never calculate.",
        },
      ],
      presenterScript:
        "Define predictable acquisition as a statable relationship, and contrast it with spend-and-hope. Introduce the four numbers without going deep — the next lessons do that. Make the payback-versus-ratio point early because it is the one that surprises people and the one that causes cash crises. Give permission for rough-but-honest numbers so nobody stalls on precision.",
      visualSuggestions: [
        "Spend in, customers out, with the four numbers labelled along the path.",
        "Two businesses with identical ratios but different payback periods, one running out of cash.",
      ],
      exercise: {
        title: "Locate your numbers",
        prompt: "For each of the four numbers, write down whether you currently know it and where the data lives.",
        steps: [
          "Write each of the four numbers and your current best estimate.",
          "Note where the underlying data would come from.",
          "Mark any number you are guessing at rather than calculating.",
          "Identify which missing number would change your decisions most.",
        ],
      },
      implementationTask:
        "Pick a period with enough data to be meaningful — usually a quarter — and gather the raw figures for all four numbers before the next lesson.",
      recap: [
        "Predictable acquisition means you can state spend-to-customers as a relationship.",
        "Four numbers: acquisition cost, customer value, payback period, conversion rate.",
        "Payback determines survivability; ratio only determines viability.",
      ],
    },
    {
      slug: "cost-to-acquire-a-customer",
      number: 2,
      title: "Cost to Acquire a Customer",
      summary:
        "Calculating acquisition cost honestly, including the spend most businesses quietly leave out.",
      objective: "Calculate a true acquisition cost you would defend to someone checking your work.",
      durationMinutes: 10,
      blocks: [
        {
          type: "text",
          body: "Most stated acquisition costs are ad spend divided by customers, which understates the real figure — often severely. The number is only useful if it includes everything that had to be paid for the customer to arrive.",
        },
        {
          type: "heading",
          text: "What belongs in the calculation",
        },
        {
          type: "list",
          items: [
            "Advertising spend across every channel in the period.",
            "Tools and platforms used specifically to acquire — landing page software, email, ad management.",
            "Money paid to people for acquisition work, including contractors and agencies.",
            "The cost of content or creative produced specifically for acquisition.",
            "Time, if you want an honest number — your own hours have a cost even when unpaid.",
          ],
        },
        {
          type: "callout",
          tone: "warn",
          title: "The founder-time omission",
          body: "Excluding your own time makes acquisition look cheaper than it is and hides the moment the model stops working — which is exactly when you try to replace yourself and discover the economics never supported it.",
        },
        {
          type: "framework",
          title: "Calculating it properly",
          steps: [
            { label: "Choose a meaningful period", detail: "Long enough to smooth variation, usually a quarter. A single week measures noise." },
            { label: "Sum all acquisition costs in that period", detail: "Everything from the list above, not just media spend." },
            { label: "Count customers acquired in that period", detail: "Customers, not leads. Leads are an intermediate step, not the output." },
            { label: "Divide, then split by channel", detail: "A blended figure hides that one channel is efficient and another is not." },
          ],
        },
        {
          type: "callout",
          tone: "muted",
          title: "On attribution",
          body: "A customer who saw an ad, read three posts and was then referred does not belong wholly to any one channel. Perfect attribution does not exist; consistency does. Pick a rule, apply it the same way every period, and compare like with like.",
        },
      ],
      presenterScript:
        "Start by dismantling the usual calculation — ad spend over customers understates badly. Walk the full cost list and dwell on founder time, because omitting it hides the failure mode that appears when they try to hire. Work the four calculation steps, insisting on customers rather than leads. Close on attribution pragmatically: consistency beats accuracy here.",
      visualSuggestions: [
        "An iceberg: visible ad spend above the line, tools, people, creative and time below.",
        "A blended acquisition cost splitting into two very different per-channel figures.",
      ],
      exercise: {
        title: "Calculate your real acquisition cost",
        prompt: "Work out your cost per customer for the last quarter, including everything.",
        steps: [
          "Total all acquisition spend for the quarter using the full list.",
          "Add a reasonable cost for your own acquisition time.",
          "Count customers acquired in that quarter.",
          "Divide, then repeat the calculation per channel.",
        ],
      },
      implementationTask:
        "Write your acquisition cost with and without your own time included. The gap between the two numbers is what you will need to cover when you stop doing it yourself.",
      recap: [
        "Acquisition cost is everything paid for the customer to arrive, not just media.",
        "Excluding founder time hides the point where the model breaks on hiring.",
        "Calculate per channel; blended figures hide efficient and wasteful channels alike.",
      ],
    },
    {
      slug: "customer-value-and-payback",
      number: 3,
      title: "Customer Value and Payback",
      summary:
        "Establishing what a customer is worth in margin, and how long it takes to get the acquisition cost back.",
      objective: "Calculate defensible customer value and payback period.",
      durationMinutes: 11,
      blocks: [
        {
          type: "text",
          body: "Customer value is where optimism does the most damage. Assuming long retention and repeat purchases you have not observed produces a number that justifies spending you cannot afford. The rule is simple: value is what you have evidence for, in margin, over a horizon you can defend.",
        },
        {
          type: "heading",
          text: "Calculating value honestly",
        },
        {
          type: "framework",
          title: "Four disciplines",
          steps: [
            { label: "Use margin, not revenue", detail: "A customer paying ten thousand who costs seven thousand to serve is worth three thousand. Spending against revenue is how profitable-looking businesses run out of money." },
            { label: "Use observed behaviour", detail: "If you have twelve months of history, do not model a three-year lifetime. Project from what you have seen." },
            { label: "Account for those who do not stay", detail: "Average across everyone acquired, including the ones who left early or never bought again." },
            { label: "Segment where behaviour differs", detail: "If one type of customer is worth three times another, one average hides the fact that you should be acquiring more of one and fewer of the other." },
          ],
        },
        {
          type: "callout",
          tone: "signal",
          title: "Payback is the operational number",
          body: "Payback period is how long until the customer has returned their acquisition cost in margin. Short payback means you can reinvest quickly and grow from cash flow. Long payback means growth requires funding, whatever the lifetime value says.",
        },
        {
          type: "callout",
          tone: "warn",
          title: "The lifetime-value trap",
          body: "Businesses justify high acquisition costs with lifetime value that assumes years of retention they have never observed. The cash leaves this month; the lifetime is a forecast. Treat the forecast with appropriate suspicion.",
        },
        {
          type: "text",
          body: "With value and cost established, you can state the maximum you can afford to pay for a customer — the point past which acquisition stops being an investment and becomes a subsidy.",
        },
      ],
      presenterScript:
        "Name optimism as the main risk here — inflated value justifies unaffordable spending. Walk the four disciplines, making margin-versus-revenue the headline. Then introduce payback as the operational constraint, distinct from ratio. Hit the lifetime-value trap directly: cash leaves now, the lifetime is a forecast. Finish by deriving the maximum affordable acquisition cost, which sets up the next lesson.",
      visualSuggestions: [
        "Revenue bar shrinking to a margin bar, with the affordable acquisition cost derived from the smaller one.",
        "Two payback curves, one recovering in weeks and one in years, against a cash line.",
      ],
      exercise: {
        title: "Calculate value and payback",
        prompt: "Work out defensible customer value in margin, then your payback period.",
        steps: [
          "Calculate average margin per customer over your observed history.",
          "Average across everyone acquired, including those who did not stay.",
          "Divide acquisition cost by monthly margin to get payback in months.",
          "Segment if two customer types behave very differently.",
        ],
      },
      implementationTask:
        "Write your maximum affordable acquisition cost as a single number, with the assumptions listed underneath it.",
      recap: [
        "Value is margin over an observed horizon, not revenue over a hoped-for one.",
        "Average across everyone acquired, including those who left.",
        "Payback determines whether growth can be funded from cash flow.",
      ],
    },
    {
      slug: "scaling-paid-spend",
      number: 4,
      title: "Scaling Paid Spend Without Breaking Economics",
      summary:
        "Increasing spend in a way the economics survive, and recognising the ceiling when you reach it.",
      objective: "Scale spend incrementally while monitoring the numbers that indicate the ceiling.",
      durationMinutes: 11,
      blocks: [
        {
          type: "text",
          body: "Working economics at a given spend level do not automatically survive being multiplied. Acquisition cost tends to rise as spend increases, because the cheapest, most interested audience is reached first. Scaling is the discipline of finding how far that holds before it stops being worth it.",
        },
        {
          type: "callout",
          tone: "warn",
          title: "Why doubling breaks things",
          body: "A large sudden increase resets platform learning, reaches a less-qualified audience, and produces a worse cost per result that is easy to misread as the channel failing. Step, then hold, then read.",
        },
        {
          type: "heading",
          text: "The scaling discipline",
        },
        {
          type: "framework",
          title: "Four rules",
          steps: [
            { label: "Increase in steps, not jumps", detail: "Raise spend moderately, then hold long enough for delivery to stabilise and the numbers to be readable." },
            { label: "Watch acquisition cost, not volume", detail: "More customers at an unaffordable cost is not growth. The cost number is the one that decides." },
            { label: "Know your ceiling in advance", detail: "You calculated the maximum affordable acquisition cost. When scaling pushes you past it, that is the ceiling — not a reason to hope." },
            { label: "Check delivery can absorb it", detail: "Acquiring more customers than you can serve well converts a growth success into a churn and reputation problem." },
          ],
        },
        {
          type: "callout",
          tone: "signal",
          title: "When you hit the ceiling",
          body: "Reaching the ceiling does not mean growth is over. It means further growth comes from improving conversion — which lowers acquisition cost at the same spend — or from raising customer value, rather than from adding budget.",
        },
        {
          type: "text",
          body: "This is why Phase 5 matters commercially. A conversion improvement does not just increase results; it lowers what each customer costs, which raises the ceiling and buys you more room to scale.",
        },
      ],
      presenterScript:
        "Explain why economics degrade with scale — the cheapest audience is reached first. Make the doubling warning concrete, since resetting learning and misreading the result is extremely common. Walk the four rules, tying the ceiling back to the number they calculated last lesson. Then reframe the ceiling as a signal to improve conversion rather than as a wall — this connects Phase 5 to the commercial outcome.",
      visualSuggestions: [
        "Acquisition cost rising as spend increases, crossing the affordable ceiling line.",
        "The ceiling line moving upward after a conversion improvement, opening new scaling room.",
      ],
      exercise: {
        title: "Plan the scaling steps",
        prompt: "Define your increments, hold periods and the ceiling that stops you.",
        steps: [
          "Write your current spend level and current acquisition cost.",
          "Define the size of each increase and how long you will hold before reading.",
          "Write the acquisition cost at which you stop increasing.",
          "Check your delivery capacity at the target volume.",
        ],
      },
      implementationTask:
        "Make one scaling step, hold it without changes for the full period you defined, and record the acquisition cost before and after.",
      recap: [
        "Acquisition cost rises with spend because the cheapest audience goes first.",
        "Step and hold rather than jumping; jumps reset learning and mislead.",
        "The ceiling redirects growth to conversion and value, not more budget.",
      ],
    },
    {
      slug: "channel-portfolio-and-concentration-risk",
      number: 5,
      title: "Channel Portfolio and Concentration Risk",
      summary:
        "Managing the risk of depending on one channel, without abandoning the focus that made it work.",
      objective: "Assess concentration risk and decide when to add a second channel.",
      durationMinutes: 9,
      blocks: [
        {
          type: "text",
          body: "Phase 4 told you to run one channel properly, and that was right — focus is what produced a working channel. But a business acquiring every customer through one platform holds a risk it usually has not priced: that platform can change costs, rules or delivery without consulting you.",
        },
        {
          type: "heading",
          text: "The tension, stated honestly",
        },
        {
          type: "framework",
          title: "Focus against resilience",
          steps: [
            { label: "Focus produces working channels", detail: "Splitting attention early means nothing gets learned properly. This does not stop being true once you are succeeding." },
            { label: "Concentration creates fragility", detail: "One channel, one account, one policy change away from no acquisition at all." },
            { label: "The resolution is sequence", detail: "Make one channel work and prove the economics, then add the second — deliberately, not in a panic." },
            { label: "The trigger is stability, not fear", detail: "Add a channel when the first is stable and understood, not when it wobbles. Diversifying under stress produces two broken channels." },
          ],
        },
        {
          type: "callout",
          tone: "warn",
          title: "Account risk is real",
          body: "Advertising accounts get restricted, sometimes without a clear reason and sometimes wrongly. If acquisition would stop entirely, that is a business continuity risk, not a marketing one.",
        },
        {
          type: "callout",
          tone: "signal",
          title: "Owned distribution is your hedge",
          body: "The owned layer from Phase 4 is what keeps acquisition alive when a platform changes. An email list and a direct audience do not get restricted by someone else's policy update.",
        },
      ],
      presenterScript:
        "Acknowledge the apparent contradiction with Phase 4 and resolve it by sequence — focus first, then deliberate diversification. Make account risk concrete: restrictions happen and are not always fair. Emphasise the trigger being stability rather than fear, because diversifying in a panic produces two half-working channels. Point back to the owned layer as the real hedge.",
      visualSuggestions: [
        "A business with one acquisition channel, shown with a single point of failure.",
        "A sequence: channel one proven, then channel two added, with owned distribution underneath both.",
      ],
      exercise: {
        title: "Concentration assessment",
        prompt: "Work out what happens to your business if your primary channel stops tomorrow.",
        steps: [
          "Calculate what percentage of customers come from your primary channel.",
          "Write what your monthly acquisition would be if it stopped entirely.",
          "Note how long your owned distribution could sustain acquisition alone.",
          "Decide whether your first channel is stable enough to add a second.",
        ],
      },
      implementationTask:
        "If your primary channel is stable and the economics are proven, name the second channel and the date you will start it. If it is not yet stable, write what stability would look like instead.",
      recap: [
        "Focus builds working channels; concentration creates fragility.",
        "Add a second channel from stability, never from panic.",
        "Owned distribution is the hedge that survives platform decisions.",
      ],
    },
    {
      slug: "your-acquisition-model",
      number: 6,
      title: "Your Acquisition Model",
      summary:
        "Assembling the numbers into a model you can operate from, with assumptions visible.",
      objective: "Complete your Acquisition Model and establish the review rhythm.",
      durationMinutes: 12,
      blocks: [
        {
          type: "text",
          body: "The model is one page that states what you now know: what a customer costs, what one is worth, how quickly the money returns, the most you can afford to pay, and where you currently sit against that ceiling. Its value is that it makes acquisition a decision rather than a reflex.",
        },
        {
          type: "heading",
          text: "What the model states",
        },
        {
          type: "framework",
          title: "Six lines",
          steps: [
            { label: "Acquisition cost", detail: "Per channel and blended, including tools, people and your time." },
            { label: "Customer value", detail: "In margin, over an observed horizon, averaged across everyone acquired." },
            { label: "Payback period", detail: "How many months until an acquired customer has returned their cost." },
            { label: "Maximum affordable cost", detail: "The ceiling past which acquisition becomes a subsidy." },
            { label: "Current position", detail: "Where you sit against that ceiling today, and how much room remains." },
            { label: "The assumptions", detail: "Every estimate the model rests on, written down so a wrong one can be found later." },
          ],
        },
        {
          type: "callout",
          tone: "signal",
          title: "Write the assumptions down",
          body: "Models fail quietly when an assumption stops being true and nobody notices. Listing them means a surprising result sends you to the assumption that broke rather than to a guess.",
        },
        {
          type: "callout",
          tone: "muted",
          title: "Review quarterly",
          body: "These numbers move. Costs rise, conversion improves, customer behaviour shifts. A model reviewed quarterly stays useful; one calculated once becomes confidently wrong.",
        },
        {
          type: "text",
          body: "Phase 8 turns this into an operating rhythm — the dashboard, the weekly review, and the decision discipline that keeps the whole system healthy rather than requiring a crisis to get attention.",
        },
      ],
      presenterScript:
        "Frame the model as the document that makes acquisition a decision rather than a reflex. Walk the six lines, then make the assumptions point strongly — models fail silently when an assumption breaks unnoticed. Set the quarterly review rhythm. Close by handing off to Phase 8, where these numbers become part of an operating cadence.",
      visualSuggestions: [
        "The six-line model as a clean one-page card with assumptions listed beneath.",
        "Current position marked on a scale against the affordable ceiling, with remaining room visible.",
      ],
      exercise: {
        title: "Complete the Acquisition Model",
        prompt: "Fill in all six lines using the figures from this phase.",
        steps: [
          "Enter acquisition cost, per channel and blended.",
          "Enter customer value in margin and payback in months.",
          "Enter the maximum affordable cost and your current position against it.",
          "List every assumption the model rests on.",
          "Set the date of the first quarterly review.",
        ],
      },
      implementationTask:
        "Complete the Acquisition Model and use it to make one real decision this week — to increase spend, hold it, or redirect effort into conversion instead.",
      recap: [
        "The model states cost, value, payback, ceiling, position and assumptions.",
        "Written assumptions let you find what broke when results surprise you.",
        "Review quarterly; a model calculated once becomes confidently wrong.",
      ],
      assets: [
        {
          id: "acquisition-model",
          title: "Acquisition Model",
          kind: "worksheet",
          description: "Your acquisition cost, customer value, payback, ceiling and assumptions — your Phase 7 deliverable.",
        },
      ],
    },
  ],
};
