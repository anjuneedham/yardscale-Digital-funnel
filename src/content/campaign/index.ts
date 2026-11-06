import { campaign, chapters } from "./meta";
import { ch1 } from "./episodes/ch1";
import { ch2 } from "./episodes/ch2";
import { ch3 } from "./episodes/ch3";
import { ch4 } from "./episodes/ch4";
import { ch5 } from "./episodes/ch5";
import { ch6 } from "./episodes/ch6";
import { ch7 } from "./episodes/ch7";
import { depthA } from "./episodes/depth-a";
import { depthB } from "./episodes/depth-b";
import { depthC } from "./episodes/depth-c";
import type { Clip, ClipRole, Episode, SeedClip, SeedEpisode } from "./types";

export * from "./types";
export * from "./meta";

const seeds: SeedEpisode[] = [...ch1, ...ch2, ...ch3, ...ch4, ...ch5, ...ch6, ...ch7];

const ROLES: ClipRole[] = ["attention", "value", "story"];
/** Merge the depth layers per clip and per field, so a later layer never erases an earlier one. */
const depth: Record<string, Partial<SeedClip>> = {};
for (const layer of [depthA, depthB, depthC]) {
  for (const [key, fields] of Object.entries(layer)) depth[key] = { ...depth[key], ...fields };
}

/** Pure date math in UTC so the calendar is identical on every server and device. */
export function dateForDay(n: number): string {
  const [y, m, d] = campaign.start.split("-").map(Number);
  const ms = Date.UTC(y, m - 1, d) + (n - 1) * 86_400_000;
  return new Date(ms).toISOString().slice(0, 10);
}

export function chapterForDay(n: number) {
  return chapters.find((c) => n >= c.from && n <= c.to) ?? chapters[chapters.length - 1];
}

function clip(base: SeedClip, role: ClipRole, key: string): Clip {
  const seed = { ...base, ...depth[key] };
  return {
    role,
    title: seed.t,
    hooks: seed.h,
    point: seed.pt,
    visual: seed.vis,
    screenRecording: seed.rec,
    overlays: seed.ov,
    closing: seed.end,
    cta: { kind: seed.cta[0], text: seed.cta[1] },
    connection: seed.link,
  };
}

function expand(seed: SeedEpisode, index: number): Episode {
  const n = index + 1;
  return {
    n,
    date: dateForDay(n),
    chapter: chapterForDay(n).n,
    title: seed.t,
    storyline: seed.story,
    objective: seed.obj,
    why: seed.why,
    feel: seed.feel,
    pillars: seed.p,
    conditional: seed.cond,
    yt: {
      hooks: seed.yt.h,
      openingFootage: seed.yt.open,
      context: seed.yt.ctx,
      talkingPoints: seed.yt.talk,
      screenRecordings: seed.yt.rec,
      questions: seed.yt.q,
      demo: seed.yt.demo,
      closing: seed.yt.close,
      tease: seed.yt.tease,
      cta: { kind: seed.yt.cta[0], text: seed.yt.cta[1] },
    },
    clips: [
      clip(seed.c[0], ROLES[0], `${n}.1`),
      clip(seed.c[1], ROLES[1], `${n}.2`),
      clip(seed.c[2], ROLES[2], `${n}.3`),
    ],
    personalInput: seed.me,
    capture: seed.cap,
    reuse: seed.reuse,
    thumbnail: seed.thumb,
  };
}

export const episodes: Episode[] = seeds.map(expand);

export function getEpisode(n: number): Episode | undefined {
  return episodes[n - 1];
}

/** Which campaign day (1-based) a given ISO date falls on. 0 = before start, days+1 = after end. */
export function dayForDate(iso: string): number {
  const [y, m, d] = campaign.start.split("-").map(Number);
  const [y2, m2, d2] = iso.split("-").map(Number);
  const diff = Math.round((Date.UTC(y2, m2 - 1, d2) - Date.UTC(y, m - 1, d)) / 86_400_000);
  return diff + 1;
}
