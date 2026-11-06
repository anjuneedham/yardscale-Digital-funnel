// Generates docs/zero-to-hero/CALENDAR.md and TIKTOK-BRIEFS.md from the campaign content.
// Run: npx tsx scripts/export-campaign.ts
import { writeFileSync } from "node:fs";
import { chapters, ctaKinds, episodes } from "../src/content/campaign/index";

const role = { attention: "Attention", value: "Value", story: "Story / Progress" } as const;
const d = (iso: string) =>
  new Date(iso + "T00:00:00Z").toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric", timeZone: "UTC" });

let cal = "# Zero to Hero: 56-day calendar\n\nGenerated from `src/content/campaign`. Edit the content there (or edit briefs in the dashboard), then run `npx tsx scripts/export-campaign.ts`.\n\n";
for (const c of chapters) {
  cal += `## Chapter ${c.n}: ${c.name} (Days ${c.from}-${c.to})\n\n${c.goal}\n\n| Day | Date | Episode | YT CTA | TikTok 1 (Attention) | TikTok 2 (Value) | TikTok 3 (Story) |\n|---|---|---|---|---|---|---|\n`;
  for (const e of episodes.filter((x) => x.chapter === c.n)) {
    cal += `| ${e.n} | ${d(e.date)} | ${e.title} | ${ctaKinds[e.yt.cta.kind].label} | ${e.clips.map((k) => `${k.title} (${ctaKinds[k.cta.kind].label})`).join(" | ")} |\n`;
  }
  cal += "\n";
}
writeFileSync("docs/zero-to-hero/CALENDAR.md", cal);

let tt = "# TikTok briefs: 168 standalone clips\n\nThree per day. Each works without the YouTube episode. Hooks are options; write your own in your own words.\n\n";
for (const e of episodes) {
  tt += `## Day ${e.n} · ${d(e.date)} · ${e.title}\n\n`;
  e.clips.forEach((c, i) => {
    tt += `### D${e.n} Clip ${i + 1}: ${c.title} (${role[c.role]})\n\n`;
    tt += `**Hook options**\n${c.hooks.map((h) => `- ${h}`).join("\n")}\n\n`;
    tt += `**Main point:** ${c.point}\n\n**Visual:** ${c.visual}\n\n**Screen recording:** ${c.screenRecording}\n\n`;
    tt += `**On-screen text:** ${c.overlays.join(" / ")}\n\n**Closing:** ${c.closing}\n\n**CTA (${ctaKinds[c.cta.kind].label}):** ${c.cta.text}\n\n**Campaign connection:** ${c.connection}\n\n`;
  });
}
writeFileSync("docs/zero-to-hero/TIKTOK-BRIEFS.md", tt);
console.log("wrote CALENDAR.md and TIKTOK-BRIEFS.md");
