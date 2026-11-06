# Execution guide (for Andrew)

You'll mostly use this on a tablet. Open `/dashboard`, sign in with your passcode, tap **Today**.

## One-time setup (before Nov 6)

1. In Vercel, set `DASHBOARD_PASSCODE` (long, 8+ characters). Without it the dashboard stays locked.
2. Decide where data lives (see ARCHITECTURE.md → Persistence). Until a database is set, the dashboard shows an orange banner and **will not save anything**. Do this *first*, then test by changing a status and reloading.
3. Performance → **Current totals**: enter your real YouTube subscriber and TikTok follower counts (baseline).
4. Optional: add the dashboard to your tablet's home screen.

## The daily loop (about the order you'll do it)

1. **Today** → read the **Brief** tab. If something in it isn't true yet (the yellow "Depends on what really happens" box), say what's true instead.
2. **YouTube** tab → pick one of the three hook options or write your own. Answer the questions in your own words. Write your script in **Your script** (it autosaves; you'll see "Saved"). Bullets are fine.
3. **TikTok 1 / 2 / 3** → each clip stands alone. Choose a hook, write a short script. Don't repeat the same hook shape across the three.
4. **Production** tab → record. Screen first, voice second. Tick items off as you capture them.
5. Edit, caption, thumbnail, privacy check, publish.
6. Paste each live URL into that piece's **Published URL** box. Set the four **statuses** (top of the episode, or inline on the Calendar).
7. **Performance** → enter today's numbers from YouTube Studio and TikTok Analytics.
8. **Review** tab → write one honest lesson sentence. Add a **Note** if something should change tomorrow.

**Bad day rule:** a short honest episode and three short clips. Shrink, never skip.

## Writing your scripts

The dashboard never writes your words. Each brief gives hooks, talking points, screen sequences and personal-input questions so you can write quickly. Use the **frame for writing it** at the top of the YouTube tab. Answer the personal-input questions with real experience; if you don't have an honest answer, say so on camera. That *is* the series.

## Editing the briefs

Every brief field has **Edit**. Save changes the text for you only; **Reset to plan** brings the original back. Use this to adapt tomorrow's episode to what happened today. Edits are stored separately from the plan.

## Statuses

Planned → Brief ready → Script written → Recording → Editing → Ready to publish → Published. Each of the four pieces (YouTube + three TikToks) has its own. Writing a script on a piece that's still "Brief ready" moves it to "Script written" automatically; you move everything else.

## Recording performance

Performance → pick the day → fill in what you have (blank fields stay blank) → **Save Day**. Use the note to say *why* ("clip 2 got shares, hook was a demo"). **Nothing is pulled from YouTube or TikTok.** Totals you type under *Current totals* drive the Overview scorecards; if you haven't typed them, the scorecards show the sum of daily gains.

## Leads

Add a lead only when a real person enquires or you reach out to a real prospect. Set **Lead source** and **Relevant content** (e.g. "D17 Clip 1"), and always ask "what did you watch that made you reach out?" and write the answer in Notes. **Won** counts as a paid project on the Overview. Use link pattern from the Guide so enquiries can be traced.

## Notes

Types: Lesson, Experiment, Idea, Problem, Weekly reflection, Future content, **Audience problem (SaaS signal)**. Every Sunday write a weekly reflection: what worked, what didn't, leads by source, what you'll change.

## Checkpoints to hold yourself to

| Day | Date | Do |
|---|---|---|
| 7 | Nov 12 | Week-1 audit; first real baseline |
| 14 | Nov 19 | Acquisition plan live; attribution working |
| 22 | Nov 27 | Honest pipeline check; change approach if empty |
| 30 | Dec 5 | Build shipped (or honestly not) |
| 38 | Dec 13 | Agriloop report |
| 42 / 54 | Dec 17 / Dec 29 | Review audience-problem signals (no product commitment) |
| 56 | Dec 31 | Final accounting against Day 1 targets |

## What to watch for

- **Views without followers** means the wrong audience; adjust topic, not volume.
- **Followers without enquiries** means the path from clip to conversation leaks (Day 41).
- **Zero conversations by Day 22** means change the outbound approach; do not stage a win.
- Never show real client, farmer or buyer details, API keys, private dashboards, or revenue that isn't real.

## Other files

- `CALENDAR.md`: all 56 episodes at a glance. `TIKTOK-BRIEFS.md`: all 168 clip briefs, printable.
- `STRATEGY.md`: the why. `ARCHITECTURE.md`: how it's built and deployed. `QA-REPORT.md`: what was and wasn't tested.
