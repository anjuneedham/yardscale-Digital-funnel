/**
 * Zero to Hero — campaign content types.
 *
 * Seed content (this folder) is the plan. Anything the owner edits in the
 * dashboard is stored separately as an override, so the seed can be improved
 * in code without clobbering the owner's own scripts and edits.
 */

export type CtaKind =
  | "follow"
  | "comment"
  | "share"
  | "youtube"
  | "client"
  | "agriloop"
  | "community";

export type ClipRole = "attention" | "value" | "story";

export type Pillar =
  | "journey"
  | "build"
  | "marketing"
  | "business"
  | "sales"
  | "money"
  | "personal"
  | "agriloop";

export type Cta = { kind: CtaKind; text: string };

export type Clip = {
  role: ClipRole;
  title: string;
  hooks: [string, string, string];
  point: string;
  visual: string;
  screenRecording: string;
  overlays: string[];
  closing: string;
  cta: Cta;
  connection: string;
};

export type Episode = {
  n: number;
  date: string; // ISO yyyy-mm-dd
  chapter: number;
  title: string;
  storyline: string;
  objective: string;
  why: string;
  feel: string;
  pillars: Pillar[];
  /** Present when the episode depends on an outcome that may not have happened. */
  conditional?: string;
  yt: {
    hooks: [string, string, string];
    openingFootage: string;
    context: string;
    talkingPoints: string[];
    screenRecordings: string[];
    questions: string[];
    demo: string;
    closing: string;
    tease: string;
    cta: Cta;
  };
  clips: [Clip, Clip, Clip];
  personalInput: string[];
  capture: string[];
  reuse: string;
  thumbnail: string;
};

/** Compact authoring format used in episodes/*.ts. Expanded by index.ts. */
export type SeedClip = {
  t: string;
  h: [string, string, string];
  pt: string;
  vis: string;
  rec: string;
  ov: string[];
  end: string;
  cta: [CtaKind, string];
  link: string;
};

export type SeedEpisode = {
  t: string;
  story: string;
  obj: string;
  why: string;
  feel: string;
  p: Pillar[];
  cond?: string;
  yt: {
    h: [string, string, string];
    open: string;
    ctx: string;
    talk: string[];
    rec: string[];
    q: string[];
    demo: string;
    close: string;
    tease: string;
    cta: [CtaKind, string];
  };
  c: [SeedClip, SeedClip, SeedClip];
  me: string[];
  cap: string[];
  reuse: string;
  thumb: string;
};

export type ContentStatus =
  | "planned"
  | "brief-ready"
  | "script-written"
  | "recording"
  | "editing"
  | "ready"
  | "published";

export type PieceKey = "yt" | "c1" | "c2" | "c3";
