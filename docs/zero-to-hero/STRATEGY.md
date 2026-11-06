# Zero to Hero: campaign strategy

**56 days of building in public. Nov 6 – Dec 31, 2026.** A YardScale Digital initiative. Agriloop is one storyline inside it, not the brand.

## The three scorecards

| | Target | Reality check |
|---|---|---|
| A. Audience | 10,000 YouTube subscribers, 10,000 TikTok followers | About 179 a day on each platform from zero. A stretch. Relevance beats volume (see "Who this is for"). |
| B. Clients | 3 paid app-development projects, won organically | The hardest target and the one that pays. Content builds trust; the outbound line (Chapter 3) builds pipeline. |
| C. Agriloop | Build it publicly; attract farmers, buyers, partners | Marketplace cold-start is the real problem, not code. Chapter 5. |

Day 56 is a full accounting against these numbers. If a target is missed, the episode says by how much.

## Positioning

Not "a guru." Not "I know nothing." **A founder with real marketing and growth experience applying it to building an app business, in public, and showing what he gets wrong.** The credibility is: you can see the screen, the prompt, the bug, the proposal, the price. Every claim in the plan is conditional on what actually happens; nothing in the content assumes a client, revenue or launch.

## Who this is for

Aspiring app founders, small-business owners with messy processes, people building with AI, and people interested in marketing and customer acquisition. Many followers will be peers, not buyers. That is useful (audience, feedback, SaaS signals) but it is **not** a client pipeline by itself, which is why the client objective has its own line (below).

## Content pillars (balance across the 56 days)

Founder journey · App development · Marketing knowledge · Business development · Sales and customers · Financial reality · Personal development · Agriloop. Each episode is tagged with its pillars in `src/content/campaign/episodes`.

## The 7 chapters

1. **The Decision** (Days 1–7): who you are, the three numbers, Agriloop, Build Flow, week-1 audit.
2. **Building the Foundation** (8–14): choose a lane, mine real complaints, first conversations, score opportunities, offer, positioning, acquisition plan.
3. **Getting the First Customer** (15–22): target list, outreach v2, the "App Idea Teardown" format, discovery, pricing, proposal, follow-up, honest pipeline.
4. **Building an Application** (23–30): choose the build (client work if it exists, otherwise a clearly labelled self-initiated showcase), cut list, design, Claude Code, bugs, data, user test, ship.
5. **Agriloop in Public** (31–38): farmer side, buyer side, cold start, real conversations, a shipped feature, monetization hypotheses, progress report.
6. **Growth and Distribution** (39–46): content autopsy, hook dissection, funnel audit, comment-section research (SaaS signals), repositioning, distribution beyond feeds, warm leads, sprint plan.
7. **The Final Push** (47–56): gap math, asking for the business, the money episode, Christmas Day, Agriloop push, what failed, what worked, audience signals, 2027, final accounting.

## Daily format

**YouTube (one per day):** hook inside 15 seconds → context → main development on screen → your own commentary → one failure → one lesson → current status → next-episode tease → one CTA. Screen recording is the spine; a short face-to-tablet take opens or closes.

**TikTok (three per day, standalone, never arbitrary cuts):**
1. **Attention:** an uncomfortable truth, a surprising realisation, a mistake, a challenge.
2. **Value:** teach or demonstrate something you actually did that day.
3. **Story / Progress:** a result, a decision, a setback, what's next.

Each clip has its own three hook options, point, visual, screen recording, overlays, closing line and CTA. No two hooks in the plan are identical (checked by `scripts/check-campaign.ts`).

## Hooks

Eight moves, each with a rule and example: specific stake, open loop, pattern interrupt, contrarian-with-receipts, before/after, demonstration, problem/solution, insider lesson. Six rules: short, natural aloud, proven by the first frame, specific over clever, never promise an unproduced result, vary structure within a day. Full text: `src/content/campaign/meta.ts` and the dashboard Guide.

## CTA system

Seven kinds (follow, comment, share, YouTube, client, Agriloop, community). One CTA per piece. Seeded mix across 224 pieces: comment 29%, YouTube 21%, share 20%, follow 11%, Agriloop 7%, client 6%, community 4%. No day has more than one client-CTA clip, and client asks stay soft ("tell me about your app idea, I'll tell you honestly what I'd scope").

**Client acquisition without constant advertising:** the *App Idea Teardown* (Day 17) shows the service by doing it: scoping a real idea on camera. Other content demonstrates problem discovery, scoping, pricing, proposals and building, which is the sales process shown as education.

**Attribution:** tagged link per piece (`utm_content=d{day}-{yt|c1|c2|c3}`), a code word on client-CTA clips, the Lead Tracker's *Source* and *Relevant content* fields, and always asking a lead "what did you watch that made you reach out?". Weekly count by source in a reflection note. (See the dashboard Guide.)

## What the research said (and how much to trust it)

Searches were run on YouTube retention, TikTok distribution and building-in-public for client acquisition. Sources were mostly vendor and practitioner blogs, not platform documentation, so **treat all thresholds as rough guides to test, not facts**.

- **YouTube retention:** sources agree the first ~30 seconds drive drop-off, openings that introduce the creator lose viewers, the opening should deliver what the title/thumbnail promised, and something should change visually every ~8–12 seconds. Benchmarks conflict (anywhere from ~60% to 80%+ still watching at 30 seconds). → Plan: hook in 15 seconds, no logo intro, proof footage first, check *your own* retention graph, change one variable per upload. ([vidIQ](https://vidiq.com/blog/post/increase-audience-retention-youtube/), [Subscribr](https://subscribr.ai/youtube-strategy/youtube-analytics-improve-video-hooks-intros), [OutlierKit](https://outlierkit.com/resources/youtube-hooks-and-retention/))
- **TikTok:** watch time, completion rate and replays are the most consistently cited signals; a consistent niche is widely recommended; posting-frequency advice varies (2–5 a week up to 1–3 a day); completion-rate numbers are unverified. → Plan: tight clips, a clear niche (founder + app building + marketing), three a day as a deliberate stretch, judge by *followers per view* and shares, not views alone. ([eClincher](https://www.eclincher.com/articles/how-to-grow-on-tiktok-in-2026-tactics-that-actually-work), [Fanpage Karma](https://www.fanpagekarma.com/insights/?p=6328))
- **Building in public → clients:** the evidence points to a **trust and referral channel, not a direct lead engine**, unless your customers are founders. Self-reported agency anecdotes say documenting work builds trust before the first call; skeptics say it doesn't replace outbound. → Plan: content for trust plus an explicit outbound line, and attribution to find out which actually produces conversations. ([Averi](https://www.averi.ai/blog/build-in-public-content-strategy-startup-growth), [Pyango](https://pyango.ch/blog/what-launching-build-in-public-projects-this-year-has-taught-us-so-far-20250924-141230))

**Honest implication:** the audience goal and the client goal pull in different directions. Founders and aspiring builders will follow; owners with budgets are fewer. Chapter 3's outbound work and the teardown format exist to close that gap. If by Day 22 the pipeline is empty, the plan says to change the approach, not to stage a win.

## Sustainability

224 pieces in 56 days is a serious load. Rules that keep it possible: screen recording is the primary asset (record the real work, narrate over it); record in 3–5 minute blocks; reuse footage deliberately (each brief lists what's reusable); the minimum viable day is a short honest episode and three short clips; *shrink, never skip*.

## SaaS opportunity (explicitly not designed or built)

The longer-term idea of a SaaS for entrepreneurs, app builders and growth operators is not finalised and nothing here designs it. Instead: tag audience problems in **Notes → "Audience problem (SaaS signal)"**, count how many different people raise each, and review on Day 42 and Day 54. A problem becomes a candidate only if it repeats, people will pay, and you can reach them cheaply.

## Non-goals / rules

No fabricated clients, revenue, testimonials or results. Showcase builds are labelled as self-initiated. I (the assistant) prepared briefs and structure; **you write the spoken scripts.** Private client and farmer details are blurred or omitted.
