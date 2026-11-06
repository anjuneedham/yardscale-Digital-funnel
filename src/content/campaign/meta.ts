import type { ContentStatus, CtaKind, Pillar } from "./types";

export const campaign = {
  name: "Zero to Hero",
  subtitle: "56 days of building in public",
  start: "2026-11-06",
  end: "2026-12-31",
  days: 56,
  targets: { youtube: 10000, tiktok: 10000, projects: 3 },
} as const;

export const chapters = [
  { n: 1, name: "The Decision", from: 1, to: 7, goal: "Introduce who you are, why you're doing this, and what you intend to build. Set the three scorecards publicly." },
  { n: 2, name: "Building the Foundation", from: 8, to: 14, goal: "Define the business, find real customer problems, and choose where YardScale's app-building should point first." },
  { n: 3, name: "Getting the First Customer", from: 15, to: 22, goal: "Find prospects, run real conversations, price, propose, and document the true state of the pipeline." },
  { n: 4, name: "Building an Application", from: 23, to: 30, goal: "Scope, design, and build a real MVP on camera with AI-assisted coding, then ship it." },
  { n: 5, name: "Agriloop in Public", from: 31, to: 38, goal: "Show the real Agriloop MVP, both sides of the marketplace, and the honest work of getting farmers and buyers on it." },
  { n: 6, name: "Growth and Distribution", from: 39, to: 46, goal: "Audit what the content is actually doing, fix what isn't working, and convert attention into conversations." },
  { n: 7, name: "The Final Push", from: 47, to: 56, goal: "Close the gaps, account for the money, and give the audience a real accounting of 56 days." },
] as const;

export const statuses: { key: ContentStatus; label: string }[] = [
  { key: "planned", label: "Planned" },
  { key: "brief-ready", label: "Brief ready" },
  { key: "script-written", label: "Script written" },
  { key: "recording", label: "Recording" },
  { key: "editing", label: "Editing" },
  { key: "ready", label: "Ready to publish" },
  { key: "published", label: "Published" },
];

export const pillars: Record<Pillar, { label: string; blurb: string }> = {
  journey: { label: "Founder journey", blurb: "Decisions, doubts, and the honest state of things." },
  build: { label: "App development", blurb: "Real screens, real code, real AI-assisted building." },
  marketing: { label: "Marketing knowledge", blurb: "Your growth background applied to your own products." },
  business: { label: "Business development", blurb: "Positioning, offers, partnerships, structure." },
  sales: { label: "Sales and customers", blurb: "Finding, talking to, and winning clients." },
  money: { label: "Financial reality", blurb: "What it costs, what comes in, what it means." },
  personal: { label: "Personal development", blurb: "Habits, mistakes, energy, and what changes in you." },
  agriloop: { label: "Agriloop", blurb: "A marketplace for Caribbean farmers and buyers, built in public." },
};

export const ctaKinds: Record<CtaKind, { label: string; use: string; example: string }> = {
  follow: { label: "Follow", use: "Give a reason tied to what happens next, not 'please follow'.", example: "Tomorrow I show the pricing sheet I'm scared to send. Follow to see it." },
  comment: { label: "Comment", use: "Ask one specific question that only the right people can answer.", example: "What's the one manual process in your business that you'd pay to never touch again?" },
  share: { label: "Share", use: "Only when the clip is genuinely useful to a specific person.", example: "Send this to the friend who keeps saying they'll build an app 'someday'." },
  youtube: { label: "YouTube", use: "Point to the full episode for the part the clip couldn't show.", example: "The full pricing breakdown, including the number I changed, is in today's episode. Link in bio." },
  client: { label: "Client", use: "Invite a conversation about an app idea. Soft ask, low pressure, never more than ~1 in 4 pieces.", example: "If you have an app idea and want a straight opinion on scope, tell me about it. Link in bio." },
  agriloop: { label: "Agriloop", use: "Invite farmers, buyers and partners. Specific about who should act.", example: "If you farm or buy produce in the Caribbean, I want your honest feedback on the app." },
  community: { label: "Community", use: "Invite people into the build: vote, suggest, challenge a decision.", example: "I have two features and time for one. Vote in the comments." },
};

/**
 * Actual CTA mix across the 224 seeded pieces (56 YouTube + 168 TikTok), from
 * scripts/check-campaign.ts. Re-run it after editing the plan.
 * Rule: no day has more than one client-CTA clip, and client CTAs stay under ~1 in 4.
 */
export const ctaMix: Record<CtaKind, string> = {
  comment: "~29%",
  youtube: "~21% (TikTok → YouTube)",
  share: "~20%",
  follow: "~11%",
  agriloop: "~7% (concentrated in Chapter 5)",
  client: "~6% (ceiling: 1 in 4)",
  community: "~4%",
};

/** The hook framework. Every hook should be built from one of these moves. */
export const hookFramework = [
  { name: "Specific stake", rule: "Name a real number, date, or thing you are actually doing.", example: "I have 56 days and a tablet. Here's what I'm building." },
  { name: "Open loop", rule: "Show the outcome exists, withhold how or why. Never lie about the payoff.", example: "I found a bug that would have cost me a customer. It wasn't in the code." },
  { name: "Pattern interrupt", rule: "Say the thing the niche never says: a failure, a cost, a doubt.", example: "I sent 20 messages today. Nobody replied. Here's what I'm changing." },
  { name: "Contrarian with receipts", rule: "Disagree with common advice, then prove it with your own footage.", example: "I think most app ideas die before they're built. Here's the check I run first." },
  { name: "Before / after", rule: "Show the screen as it was and as it is.", example: "This was Agriloop's farmer screen on Monday. This is Friday." },
  { name: "Demonstration", rule: "Start mid-action. The screen is the hook.", example: "Watch me turn this messy idea into a build plan in 60 seconds." },
  { name: "Problem / solution", rule: "A real problem, named in the customer's words, then the fix on screen.", example: "Business owners track jobs in WhatsApp. Here's a better version in a day." },
  { name: "Insider lesson", rule: "A marketing lesson from your own experience that changes how they see their app.", example: "Marketing taught me this before I wrote a line of code." },
] as const;

export const hookRules = [
  "Under 15 words if it can be. It must sound natural out loud.",
  "The first frame is on screen footage that proves the hook, not a talking-head intro.",
  "Specific beats clever. A number, a name, or a screen beats an adjective.",
  "Never promise a result you haven't produced. No fake revenue, no invented clients.",
  "A hook is a promise. The next 10 seconds must deliver the first piece of it.",
  "Don't repeat a hook structure on the same day across the three clips.",
] as const;

/** The reusable daily script-writing framework (the owner writes the words). */
export const scriptFramework = [
  { step: "1. Hook (0–15s)", prompt: "Pick one of the three hook options, or write your own. Say it to your tablet camera once before you decide." },
  { step: "2. Stakes (15–45s)", prompt: "Why does this matter today? Say what you were trying to do and what was in the way." },
  { step: "3. Show it", prompt: "Cut to the screen recording. Narrate what you are doing and why, not what the button says." },
  { step: "4. Your experience", prompt: "Where does your actual background change the decision? Say it in your own words. No borrowed expertise." },
  { step: "5. What went wrong", prompt: "Say one thing that was harder, slower, or wrong. Every episode needs one." },
  { step: "6. Lesson", prompt: "One sentence a viewer could repeat. If you need two, you have two episodes." },
  { step: "7. Status", prompt: "Where does this leave the mission? Use real numbers or say 'no change'." },
  { step: "8. Tease + CTA", prompt: "Say what tomorrow's problem is. Then one CTA, never two." },
] as const;

export const productionDefaults = {
  recordDay: [
    "Screen-record first, voice second: record the actual work, then narrate over it, or talk while doing it. Never recreate work for the camera.",
    "Keep one 2-minute 'face to tablet camera' take per episode for the opening or closing only.",
    "Record in short blocks (3 to 5 minutes). Short takes edit faster than long ones.",
    "Name every file as: D{day}-{yt|c1|c2|c3}-{short-label}.",
  ],
  editing: [
    "Cut dead air and false starts. Keep honest hesitation if it shows a decision.",
    "Something visual changes every 8 to 12 seconds in the opening: cut, zoom, new screen, or text.",
    "YouTube: hook in the first 15 seconds, no logo intro. Chapters/markers at each main section.",
    "TikTok: 9:16, hook text on screen within the first second, under 60 seconds unless the story needs more.",
  ],
  captions: [
    "Burn in captions on every TikTok. Keep to 2 lines, bottom-third safe zone.",
    "Highlight the one word that carries the hook.",
    "YouTube: upload your own caption file or review the auto-captions for names and app terms.",
  ],
  privacy: [
    "Blur or crop client names, emails, phone numbers, API keys, and any private dashboard before publishing.",
    "Never show real farmer or buyer details without their permission.",
    "Check revenue and analytics screens: only show numbers that are real and current.",
  ],
} as const;

export const metricFields = [
  { key: "ytViews", label: "YouTube views" },
  { key: "subsGained", label: "Subscribers gained" },
  { key: "ttViews", label: "TikTok views (all 3)" },
  { key: "followersGained", label: "TikTok followers gained" },
  { key: "engagement", label: "Engagement (likes + comments + shares)" },
  { key: "inquiries", label: "Inquiries" },
  { key: "qualifiedLeads", label: "Qualified leads" },
  { key: "conversations", label: "Client conversations" },
  { key: "projectsSecured", label: "Projects secured" },
] as const;

export const leadStatuses = [
  "New",
  "Contacted",
  "In conversation",
  "Proposal sent",
  "Won",
  "Lost",
  "Not a fit",
] as const;

export const leadSources = [
  "TikTok clip",
  "YouTube episode",
  "Comment / DM",
  "Outreach",
  "Referral",
  "Website",
  "Other",
] as const;

export const noteTypes = [
  "Lesson",
  "Experiment",
  "Idea",
  "Problem",
  "Weekly reflection",
  "Future content",
  "Audience problem (SaaS signal)",
] as const;

/** Attribution: how inquiries are tied back to content. */
export const attribution = {
  principle:
    "Every client-facing CTA points to one link with a source tag. When someone enquires, you log which piece they came from, and ask them: 'What did you watch or read that made you reach out?'",
  linkPattern: "https://yardscaledigital.com/book?utm_source={tiktok|youtube}&utm_medium=organic&utm_campaign=zero-to-hero&utm_content=d{day}-{yt|c1|c2|c3}",
  steps: [
    "Use the pattern above for the link in the YouTube description and for any link you send in DMs.",
    "TikTok bios hold one link only, so say 'link in bio' and add the code word 'D{day}' on screen when a clip has a client CTA.",
    "In the Lead Tracker, set Lead source and pick the Relevant content (e.g. 'D14 clip 2').",
    "When a lead reaches you, always ask how they found you, and record their words. Self-reported source beats a tracking link.",
    "Every Sunday, count leads per source and per content type, and note it in a weekly reflection.",
  ],
} as const;
