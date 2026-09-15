import type { Phase } from "../types";

/**
 * PHASE 5 — CONVERT
 * Maximise Conversion.
 *
 * Traffic is flowing and the counts from Phase 3 are filling in. Phase 5 uses
 * them: find where the path actually leaks, fix that one stage, and verify the
 * fix honestly rather than declaring victory on noise.
 */

export const phase5: Phase = {
  slug: "phase-5",
  number: 5,
  code: "CONVERT",
  title: "Maximise Conversion",
  tagline: "Turn more of the attention you already have into committed customers.",
  status: "available",
  objective:
    "Systematically raise conversion at the constraint stage, using evidence from your own system rather than general best practice.",
  overview:
    "Once traffic is flowing, improving conversion is almost always cheaper than buying more attention. Phase 5 is the discipline of doing it properly: locating the actual leak instead of the one you assume, diagnosing whether it is friction, clarity or motivation, changing one thing at a time, and being honest about whether the change worked. This is where the counts you wired in Phase 3 start paying for themselves.",
  outcome: "A measurably higher-converting path, with the change documented and verified.",
  finalAsset: {
    id: "conversion-improvement-log",
    title: "Conversion Improvement Log",
    kind: "worksheet",
    description:
      "A running record of each change: the stage, the hypothesis, what was changed, the before and after numbers, and the honest verdict.",
  },
  lessons: [
    {
      slug: "find-the-leak-before-you-fix-it",
      number: 1,
      title: "Find the Leak Before You Fix It",
      summary:
        "Locating the stage that actually loses people, rather than improving the stage you find most interesting.",
      objective: "Identify the single stage where the largest proportion of people are lost.",
      durationMinutes: 10,
      blocks: [
        {
          type: "text",
          body: "The instinct is to improve whatever is most visible — usually the page headline, because it is the part you look at most. But the leak is wherever the largest proportion of people disappear, and that stage is often somewhere nobody is looking: the form, the confirmation, the gap between booking and showing up.",
        },
        {
          type: "heading",
          text: "Reading your own counts",
        },
        {
          type: "framework",
          title: "How to locate the leak",
          steps: [
            { label: "Write each stage's count in order", detail: "Arrivals, engaged, submissions, qualified, outcomes. Use the numbers from Phase 3, not impressions." },
            { label: "Calculate the drop between each pair", detail: "The percentage lost at each transition, not the absolute number. Big absolute losses early can be normal." },
            { label: "Find the largest proportional drop", detail: "That transition is your constraint for this phase, regardless of how interesting it is." },
            { label: "Check it is not a measurement artefact", detail: "An impossible-looking drop is often broken tracking. Verify before you rebuild anything." },
          ],
        },
        {
          type: "callout",
          tone: "warn",
          title: "The interesting-stage trap",
          body: "Teams redesign homepages while ninety percent of the loss happens at a form nobody has opened in a year. Let the numbers choose the stage.",
        },
        {
          type: "callout",
          tone: "muted",
          title: "On small numbers",
          body: "With very few visitors, stage-by-stage percentages swing wildly and will mislead you. If volume is low, fix the obvious structural problems first and return to measured optimisation when there is enough traffic to read.",
        },
      ],
      presenterScript:
        "Start with the trap: everyone optimises the part they look at most. Walk the four steps of reading counts, insisting on proportional drops rather than absolute numbers. Spend a moment on measurement artefacts — an impossible drop is usually broken tracking, and rebuilding on bad data is expensive. Be honest about low volume rather than pretending statistics work at any scale.",
      visualSuggestions: [
        "A funnel with proportional drops labelled between each stage, the largest one highlighted.",
        "A team redesigning a homepage while the leak is visibly at a later stage.",
      ],
      exercise: {
        title: "Locate your leak",
        prompt: "Write out your stage counts and find the largest proportional drop.",
        steps: [
          "List each stage with its count for the same period.",
          "Calculate the percentage lost between each consecutive pair.",
          "Identify the largest proportional drop.",
          "Sanity-check it against what you would expect; investigate anything impossible.",
        ],
      },
      implementationTask:
        "Write one sentence: 'The stage losing the most people is ______, where ______ percent drop off.' Do not propose a fix yet.",
      recap: [
        "The leak is where the largest proportion disappears, not where you look most.",
        "Use proportional drops between stages, not absolute counts.",
        "Verify surprising numbers before rebuilding — it is often broken tracking.",
      ],
    },
    {
      slug: "friction-clarity-motivation",
      number: 2,
      title: "Friction, Clarity, Motivation",
      summary:
        "Diagnosing why a stage leaks, because the three causes require completely different fixes.",
      objective: "Correctly classify the cause of your leak before choosing a fix.",
      durationMinutes: 10,
      blocks: [
        {
          type: "text",
          body: "Knowing where people leave does not tell you why. There are three causes and they look identical in the numbers: the step is too hard, the step is unclear, or the person does not want the outcome enough. Fixing the wrong one produces no change and wastes a cycle.",
        },
        {
          type: "heading",
          text: "The three causes",
        },
        {
          type: "framework",
          title: "Diagnosis and the fix each implies",
          steps: [
            { label: "Friction — it is too hard", detail: "Too many fields, too many steps, a slow page, a required account. The fix is removal: take work away from the visitor." },
            { label: "Clarity — they do not understand", detail: "Unclear what happens next, what they get, or what it costs. The fix is explanation at the exact point of confusion." },
            { label: "Motivation — they do not want it enough", detail: "They understand and it is easy, and they still leave. The fix is upstream: the offer, the proof, or the audience is wrong." },
          ],
        },
        {
          type: "callout",
          tone: "signal",
          title: "How to tell them apart",
          body: "Friction shows as people starting a step and abandoning it midway. Clarity shows as hesitation, re-reading, and questions arriving by other channels. Motivation shows as clean, immediate exits — they looked and left without engaging.",
        },
        {
          type: "callout",
          tone: "warn",
          title: "The expensive misdiagnosis",
          body: "Motivation problems get treated as friction problems constantly. Removing form fields when the offer is not compelling makes it easier to not want something. Nothing improves and the qualification data is now gone too.",
        },
        {
          type: "text",
          body: "Where the numbers cannot distinguish the cause, ask people. Five short conversations with visitors who did not convert will tell you more than a month of guessing at percentages.",
        },
      ],
      presenterScript:
        "Make clear that location and cause are different questions — most people skip straight from one to a fix. Walk the three causes and their distinct fixes. Spend time on how to tell them apart behaviourally, since that is the practical skill. Hammer the misdiagnosis warning: motivation problems dressed as friction problems waste enormous effort. End on the value of five actual conversations.",
      visualSuggestions: [
        "Three identical drop-offs with three different causes and three different fixes beneath.",
        "Behavioural signatures: mid-step abandonment, hesitation, immediate exit.",
      ],
      exercise: {
        title: "Diagnose your leak",
        prompt: "Classify your leaking stage as friction, clarity or motivation, with evidence.",
        steps: [
          "Describe the behaviour you observe at the leaking stage.",
          "Match it against the three behavioural signatures.",
          "Write the evidence supporting your classification.",
          "Note what would have to be true for one of the other two to be the real cause.",
        ],
      },
      implementationTask:
        "Talk to three people who did not convert. Ask what they were expecting and what stopped them. Record the answers verbatim, without defending anything.",
      recap: [
        "Three causes — friction, clarity, motivation — look identical in the numbers.",
        "Each implies a completely different fix, so classification comes first.",
        "Motivation problems misdiagnosed as friction waste the most effort.",
      ],
    },
    {
      slug: "objection-handling-in-the-path",
      number: 3,
      title: "Objection Handling in the Path",
      summary:
        "Answering the real reasons people hesitate, at the exact point in the path where the hesitation occurs.",
      objective: "Identify the two objections that actually stop people and place answers where they arise.",
      durationMinutes: 10,
      blocks: [
        {
          type: "text",
          body: "Objections are not obstacles to overcome with argument. They are unanswered questions, and they are usually answered too late — in a call, after most of the people who had them have already gone. The work is finding the real ones and answering them where they occur.",
        },
        {
          type: "callout",
          tone: "signal",
          title: "Stated versus real objections",
          body: "\"It's too expensive\" is the stated objection roughly always. The real one is usually \"I'm not convinced this will work for my situation\" — which is a proof and specificity problem, not a price problem.",
        },
        {
          type: "heading",
          text: "Finding the real objections",
        },
        {
          type: "list",
          items: [
            "Read the questions people ask before buying — those are objections in polite form.",
            "Note what you find yourself explaining on every call. That explanation belongs earlier in the path.",
            "Ask people who said no what would have needed to be true. Ask after the decision, when they have no reason to be diplomatic.",
            "Look at where hesitation shows in the numbers — the stage people re-visit before leaving.",
          ],
        },
        {
          type: "framework",
          title: "Placing the answer",
          steps: [
            { label: "Answer at the point of doubt", detail: "An objection answered three sections after it arises has already cost you the reader." },
            { label: "Answer in their words", detail: "Restate the objection as they would say it, then answer it. Recognition is most of the work." },
            { label: "Answer with evidence, not assertion", detail: "\"We're very experienced\" answers nothing. A specific, substantiable demonstration does." },
            { label: "Answer two, not ten", detail: "Handling every conceivable objection reads as defensive and introduces doubts the reader did not have." },
          ],
        },
        {
          type: "callout",
          tone: "muted",
          title: "On the ones you cannot answer",
          body: "Some objections are legitimate and you cannot resolve them — the offer genuinely is not right for that person. Letting them leave cleanly is better than converting someone who will be unhappy.",
        },
      ],
      presenterScript:
        "Reframe objections as unanswered questions rather than resistance. Make the stated-versus-real distinction early, because price is almost never the actual objection. Give the four practical methods for finding real ones, especially 'what you explain on every call'. Then work placement, insisting on two objections rather than ten. Close with permission to let poor-fit buyers leave.",
      visualSuggestions: [
        "A stated objection with the real one underneath it.",
        "A path with objections answered at the point they arise versus all bunched at the end.",
      ],
      exercise: {
        title: "Find and place two objections",
        prompt: "Identify the two objections that actually stop people and place an answer at each point of doubt.",
        steps: [
          "List everything you explain repeatedly in sales conversations.",
          "Identify which two come up most and stop the most people.",
          "For each, write the point in the path where the doubt arises.",
          "Write a two-sentence answer using evidence you can substantiate.",
        ],
      },
      implementationTask:
        "Add both objection answers to your path at the points where the doubt arises, in the buyer's own words.",
      recap: [
        "Objections are unanswered questions, usually answered too late.",
        "The stated objection is rarely the real one; price usually masks doubt about fit.",
        "Answer two objections with evidence, at the point the doubt occurs.",
      ],
    },
    {
      slug: "testing-without-fooling-yourself",
      number: 4,
      title: "Testing Without Fooling Yourself",
      summary:
        "Changing one thing at a time and reading the result honestly, rather than declaring victory on noise.",
      objective: "Run changes in a way that produces trustworthy conclusions.",
      durationMinutes: 11,
      blocks: [
        {
          type: "text",
          body: "The purpose of testing is to find out whether you were right, which means it has to be able to tell you that you were wrong. Most informal testing cannot do that — the change is confounded, the period is too short, or the criteria move after the data arrives.",
        },
        {
          type: "heading",
          text: "The rules that make a result trustworthy",
        },
        {
          type: "framework",
          title: "Four disciplines",
          steps: [
            { label: "Change one thing", detail: "Change three and a positive result tells you nothing about which one worked, or whether one helped while another hurt." },
            { label: "Write the prediction first", detail: "State what you expect and what would count as success before you look. This is the difference between testing and rationalising." },
            { label: "Run long enough to cover normal variation", detail: "Traffic behaves differently across days and sources. A two-day test measures the two days." },
            { label: "Accept a negative result", detail: "A change that did not work is information worth having. Reverting it is a success, not a failure." },
          ],
        },
        {
          type: "callout",
          tone: "warn",
          title: "Small numbers lie confidently",
          body: "Four conversions versus seven looks like a seventy-five percent improvement and is almost certainly noise. At low volume, prefer structural fixes you have good reason to believe in over micro-tests you cannot read.",
        },
        {
          type: "callout",
          tone: "signal",
          title: "When you cannot test properly",
          body: "Most small businesses cannot run statistically clean tests, and pretending otherwise produces false confidence. The honest alternative: make changes you can argue for from the diagnosis, document them, and watch the direction over a longer window.",
        },
        {
          type: "text",
          body: "Document every change with a date. Without a record, a gradual decline three months from now is impossible to trace back to the change that caused it — and you will be diagnosing a system whose history you cannot reconstruct.",
        },
      ],
      presenterScript:
        "Define testing by its ability to prove you wrong — that is the standard. Walk the four disciplines, emphasising the written prediction because that is what separates testing from post-hoc rationalising. Be honest that most small businesses cannot run clean tests, and give them the legitimate alternative rather than pretending. Insist on dated documentation for traceability.",
      visualSuggestions: [
        "Two conversion numbers with overlapping uncertainty, showing an apparent win that is noise.",
        "A change log with dates, predictions and verdicts.",
      ],
      exercise: {
        title: "Write the prediction",
        prompt: "Before making your fix, write down what you expect to happen and what would count as success.",
        steps: [
          "Describe the single change you are about to make.",
          "Write the number you expect it to move and by roughly how much.",
          "Write the result that would mean it did not work.",
          "Write the date you will read the result.",
        ],
      },
      implementationTask:
        "Make one change, log it with the date and prediction, and do not make a second change until you have read the first result.",
      recap: [
        "A real test can tell you that you were wrong.",
        "One change at a time, prediction written first, run long enough to cover variation.",
        "At low volume prefer well-argued structural fixes to unreadable micro-tests.",
      ],
    },
    {
      slug: "the-follow-up-multiplier",
      number: 5,
      title: "The Follow-Up Multiplier",
      summary:
        "Why improving what happens after first contact usually beats improving the page itself.",
      objective: "Find and fix the conversion opportunity sitting in your existing follow-up.",
      durationMinutes: 9,
      blocks: [
        {
          type: "text",
          body: "Page optimisation gets the attention, but the largest recoverable losses are usually after first contact — people who raised their hand and then received nothing, or received something generic, or were followed up once and dropped. These people already expressed interest, which makes them the cheapest conversions available.",
        },
        {
          type: "heading",
          text: "Where follow-up loses people",
        },
        {
          type: "list",
          items: [
            "The delay between submission and first response is long enough for interest to cool.",
            "The sequence stops after two messages because that felt like enough.",
            "Every lead receives identical follow-up regardless of what they told you at capture.",
            "Booked calls are not confirmed or reminded, so people simply do not attend.",
            "Nobody who said 'not now' is ever contacted again.",
          ],
        },
        {
          type: "callout",
          tone: "signal",
          title: "The no-show leak",
          body: "If people book and do not attend, that is a conversion problem with a cheap fix — confirmation, a reminder, and a reason the call matters. It is frequently the largest single recoverable loss in the whole path.",
        },
        {
          type: "framework",
          title: "Three upgrades, in order of return",
          steps: [
            { label: "Reduce time to first response", detail: "Speed matters more than polish. A fast adequate response beats a slow excellent one." },
            { label: "Differentiate by what they told you", detail: "Use the qualification data from Phase 3. A good-fit lead and a browser should not get identical messages." },
            { label: "Add a later re-contact", detail: "Most 'no' answers are 'not now'. One useful message weeks later recovers people who would otherwise be gone." },
          ],
        },
      ],
      presenterScript:
        "Point out that the cheapest conversions available are people who already raised their hand and were then neglected. Walk the five loss points and let them recognise their own. Make the no-show leak explicit — it is common and cheap to fix, and most people have never measured it. Then give the three upgrades in return order so they start with speed.",
      visualSuggestions: [
        "A cohort of interested leads shrinking through each follow-up failure point.",
        "Booked versus attended, with the gap highlighted as recoverable.",
      ],
      exercise: {
        title: "Audit the after-contact path",
        prompt: "Trace what actually happens after someone submits, and measure the gaps.",
        steps: [
          "Time the delay between submission and first response.",
          "Count how many messages the sequence actually sends before stopping.",
          "Check whether good-fit and poor-fit leads receive different messages.",
          "If you book calls, calculate the percentage that are actually attended.",
        ],
      },
      implementationTask:
        "Fix the largest gap you found. If you book calls and do not send reminders, start there — it is usually the highest return for the least work.",
      recap: [
        "The cheapest conversions are people who already raised their hand.",
        "Speed of first response beats polish of first response.",
        "No-shows and never-re-contacted 'not now' leads are common recoverable losses.",
      ],
    },
    {
      slug: "your-conversion-improvement-plan",
      number: 6,
      title: "Your Conversion Improvement Plan",
      summary:
        "Turning improvement into a repeating loop rather than a one-off project, and recording it honestly.",
      objective: "Establish the improvement loop and complete your Conversion Improvement Log.",
      durationMinutes: 12,
      blocks: [
        {
          type: "text",
          body: "Conversion improvement is not a project that finishes. It is a loop you run repeatedly: find the leak, diagnose the cause, change one thing, read the result honestly, then find the next leak — which will be somewhere else, because fixing one stage moves the constraint.",
        },
        {
          type: "heading",
          text: "The loop",
        },
        {
          type: "framework",
          title: "Five steps, repeated",
          steps: [
            { label: "Locate", detail: "Largest proportional drop between stages, from your own counts." },
            { label: "Diagnose", detail: "Friction, clarity or motivation — with behavioural evidence, not assumption." },
            { label: "Predict", detail: "Write what you expect the change to do before you make it." },
            { label: "Change one thing", detail: "A single change, dated and documented." },
            { label: "Read honestly", detail: "Including when the answer is that it did nothing. Revert and log it." },
          ],
        },
        {
          type: "callout",
          tone: "signal",
          title: "The constraint moves",
          body: "When you fix the worst stage, a different stage becomes the worst. That is the loop working, not the system failing. Re-run the location step rather than continuing to optimise the stage you just fixed.",
        },
        {
          type: "callout",
          tone: "muted",
          title: "Why the log matters",
          body: "Six months of undocumented changes produces a system nobody can reason about. The log is what lets you trace a decline to its cause and stop repeating changes that already failed.",
        },
        {
          type: "text",
          body: "Phase 6 addresses what you will keep running into here: motivation problems that no amount of page work fixes, because the buyer does not yet believe the outcome is real. That is a proof problem, and proof is built deliberately.",
        },
      ],
      presenterScript:
        "Establish improvement as a loop rather than a project — this is the mindset that separates operators from people doing a website refresh. Walk the five steps as a cycle. Make the moving-constraint point clearly, because people keep optimising the stage they just fixed. Justify the log on traceability grounds. Close by pointing at Phase 6: motivation problems are proof problems.",
      visualSuggestions: [
        "The five steps drawn as a closed loop with the constraint moving to a different stage each cycle.",
        "A filled improvement log showing changes, predictions and honest verdicts including failures.",
      ],
      exercise: {
        title: "Complete the improvement log",
        prompt: "Record your first full cycle and set up the log for the next one.",
        steps: [
          "Record the stage, the diagnosis, the change and the date.",
          "Record the before number and the after number.",
          "Write the honest verdict: worked, did nothing, or made it worse.",
          "Re-run the location step and name the next constraint.",
        ],
      },
      implementationTask:
        "Complete the Conversion Improvement Log with your first cycle, then locate your next leak and schedule the next cycle.",
      recap: [
        "Improvement is a repeating loop: locate, diagnose, predict, change, read.",
        "Fixing one stage moves the constraint elsewhere — re-locate each cycle.",
        "The log makes the system traceable and stops repeated failed changes.",
      ],
      assets: [
        {
          id: "conversion-improvement-log",
          title: "Conversion Improvement Log",
          kind: "worksheet",
          description: "Your running record of changes, predictions, results and verdicts — your Phase 5 deliverable.",
        },
      ],
    },
  ],
};
