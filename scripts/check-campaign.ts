// Validates the campaign seed content. Run: npx tsx scripts/check-campaign.ts
import { episodes, campaign, dateForDay } from "../src/content/campaign/index";

const errors: string[] = [];
if (episodes.length !== campaign.days) errors.push(`expected ${campaign.days} episodes, got ${episodes.length}`);
if (dateForDay(1) !== "2026-11-06") errors.push("day 1 date wrong");
if (dateForDay(56) !== "2026-12-31") errors.push("day 56 date wrong: " + dateForDay(56));

const hooks = new Map<string, string>();
const kinds: Record<string, number> = {};
let clips = 0;
for (const e of episodes) {
  const where = `D${e.n}`;
  if (e.clips.length !== 3) errors.push(`${where}: needs 3 clips`);
  if (e.yt.hooks.length !== 3) errors.push(`${where}: needs 3 yt hooks`);
  for (const h of e.yt.hooks) if (!h.trim()) errors.push(`${where}: empty yt hook`);
  if (e.yt.talkingPoints.length < 3) errors.push(`${where}: <3 talking points`);
  if (e.yt.questions.length < 3) errors.push(`${where}: <3 questions`);
  if (e.personalInput.length < 3) errors.push(`${where}: <3 personal prompts`);
  kinds[e.yt.cta.kind] = (kinds[e.yt.cta.kind] ?? 0) + 1;
  const clipKinds = new Set<string>();
  e.clips.forEach((c, i) => {
    clips++;
    const w = `${where}c${i + 1}`;
    if (c.hooks.length !== 3 || c.hooks.some((h) => !h.trim())) errors.push(`${w}: needs 3 hooks`);
    for (const f of ["point", "visual", "screenRecording", "closing", "connection"] as const)
      if (!c[f].trim()) errors.push(`${w}: empty ${f}`);
    if (c.overlays.length < 1) errors.push(`${w}: no overlays`);
    if (!c.cta.text.trim()) errors.push(`${w}: no cta`);
    kinds[c.cta.kind] = (kinds[c.cta.kind] ?? 0) + 1;
    clipKinds.add(c.cta.kind);
    for (const h of c.hooks) {
      const k = h.toLowerCase();
      if (hooks.has(k)) errors.push(`${w}: duplicate hook also at ${hooks.get(k)}`);
      hooks.set(k, w);
    }
  });
  const first = e.clips.map((c) => c.hooks[0].split(" ").slice(0, 3).join(" ").toLowerCase());
  if (new Set(first).size < 3) errors.push(`${where}: clips start hooks the same way`);
  if (e.clips.filter((c) => c.cta.kind === "client").length > 1) errors.push(`${where}: >1 client CTA clip`);
}
if (clips !== 168) errors.push(`expected 168 clips, got ${clips}`);

const total = Object.values(kinds).reduce((a, b) => a + b, 0);
console.log("episodes", episodes.length, "clips", clips, "pieces", total);
console.log(Object.entries(kinds).map(([k, v]) => `${k}:${v} (${Math.round((v / total) * 100)}%)`).join("  "));
if (errors.length) {
  console.error("\nFAILED:\n" + errors.join("\n"));
  process.exit(1);
}
console.log("OK");
