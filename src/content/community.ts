/**
 * Community page copy and the recommended structures for Discord and Skool.
 * Invite links live in site.ts (`community`). The same structures are written
 * up as a setup checklist in docs/COMMUNITY_SETUP.md.
 */

export const communityPage = {
  eyebrow: "Community",
  title: "Build alongside people who are building too.",
  lede: "Most SaaS ideas die quietly, with nobody watching. A community changes that: people who notice when you go silent, who have hit the problem you are stuck on, and who will tell you the truth about your landing page.",

  benefits: [
    { title: "Momentum", detail: "Showing your progress every week to people doing the same thing is the simplest accountability there is." },
    { title: "Feedback before launch", detail: "Put your idea, MVP scope or pricing in front of other founders before you put it in front of customers." },
    { title: "Shortcuts", detail: "Someone has already fought the bug, the payment setup or the app store rejection you are about to meet." },
    { title: "Honest lessons", detail: "What worked and what did not, shared while it is happening rather than polished afterwards." },
  ],
};

export const spaces = {
  discord: {
    role: "The open room",
    summary:
      "The wider founder discussion and networking space. Free to join. Drop in, introduce yourself, share what you are building, ask questions and give feedback.",
    bestFor: [
      "Meeting other founders",
      "Quick questions and feedback",
      "Sharing progress in public",
      "Staying close to what Andrew is building",
    ],
    cost: "Free",
  },
  skool: {
    role: "The classroom",
    summary:
      "The structured, paid learning community. The courses live here as a guided classroom, with a smaller group working through the same material at the same time.",
    bestFor: [
      "Working through Zero to SaaS step by step",
      "Course discussion alongside each module",
      "A smaller, more committed group",
      "Closer access as new courses are released",
    ],
    cost: "Paid membership",
  },
};

/** Recommended Discord layout. */
export const discordStructure: { category: string; channels: { name: string; purpose: string }[] }[] = [
  {
    category: "Start here",
    channels: [
      { name: "announcements", purpose: "New videos, lessons and updates from Andrew. Read-only." },
      { name: "introductions", purpose: "Who you are, what you are building, what stage you are at." },
    ],
  },
  {
    category: "Build",
    channels: [
      { name: "saas-ideas", purpose: "Ideas, problems worth solving, and validation questions." },
      { name: "product-feedback", purpose: "Post a link, a screenshot or a scope. Get specific feedback." },
      { name: "building-in-public", purpose: "Progress updates. What shipped this week, what did not." },
      { name: "ai-and-development", purpose: "AI-assisted development, tools, prompts, bugs and stack questions." },
    ],
  },
  {
    category: "Grow",
    channels: [
      { name: "marketing-and-sales", purpose: "Positioning, content, outreach and first customers." },
      { name: "wins-and-lessons", purpose: "Things that worked and things that did not. Both count." },
    ],
  },
];

/** Recommended Skool classroom layout, mirroring the Academy. */
export const skoolStructure = {
  categories: ["Announcements", "Introductions", "Course Q&A", "Build logs", "Feedback requests", "Wins and lessons"],
  classroom: [
    { title: "Start here", detail: "How the community works, how to use the classroom, how to ask for feedback." },
    { title: "Zero to SaaS: The Founder Operating System", detail: "The flagship course. One Skool module per course module (0–12), each linking to its lessons, exercises and templates." },
    { title: "Templates and checklists", detail: "Every template and checklist from the course in one place." },
    { title: "Future courses", detail: "New courses are added as their own classroom entries as they are released." },
  ],
};
