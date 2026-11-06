import {
  attribution,
  campaign,
  chapters,
  ctaKinds,
  ctaMix,
  hookFramework,
  hookRules,
  pillars,
  productionDefaults,
  scriptFramework,
} from "@/content/campaign";
import { Card, H2, PageTitle } from "@/components/dashboard/ui";

export const metadata = { title: "Guide — Zero to Hero" };

const DAILY = [
  "Open today (the lime Today button). Read the brief.",
  "Write your real YouTube script in the YouTube tab. Use the hook options as prompts, not as lines.",
  "Open TikTok 1, 2, 3. Pick or write a hook for each. Write short scripts.",
  "Record the screen and your voice. Screen first; keep takes short.",
  "Edit. Add captions. Make the thumbnail.",
  "Publish. Paste each live URL into its script box.",
  "Set all four statuses to Published (or where they really are).",
  "Performance → enter today's numbers from the platforms.",
  "Review tab → write one lesson.",
  "If the numbers say something, edit tomorrow's brief or add a note.",
];

export default function GuidePage() {
  return (
    <>
      <PageTitle eyebrow="Reference" title="Execution guide" />

      <div className="space-y-4">
        <Card>
          <H2>The mission</H2>
          <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-soft">
            {campaign.name}: {campaign.days} days, Nov 6 – Dec 31, 2026. Three scorecards: {campaign.targets.youtube.toLocaleString("en-US")} YouTube
            subscribers, {campaign.targets.tiktok.toLocaleString("en-US")} TikTok followers, {campaign.targets.projects} paid app projects. One YouTube
            episode and three standalone TikToks every day. Agriloop is one storyline inside the documentary, not the whole brand. The SaaS
            idea is not designed or built: audience problems are logged as Notes until the evidence repeats.
          </p>
        </Card>

        <Card>
          <H2>Every day</H2>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-[0.9375rem] leading-relaxed text-ink-soft marker:text-signal">
            {DAILY.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ol>
          <p className="mt-3 text-sm text-muted">Minimum on a bad day: one honest YouTube episode and three clips, short. Never skip; shrink.</p>
        </Card>

        <Card>
          <H2>Chapters</H2>
          <ul className="mt-3 space-y-3 text-sm">
            {chapters.map((c) => (
              <li key={c.n}>
                <strong className="font-medium">
                  {c.n}. {c.name}
                </strong>
                <span className="text-muted"> · Days {c.from}–{c.to}</span>
                <p className="mt-0.5 text-ink-soft">{c.goal}</p>
              </li>
            ))}
          </ul>
        </Card>

        <Card>
          <H2>Content pillars</H2>
          <ul className="mt-3 grid gap-2 text-sm sm:grid-cols-2">
            {Object.values(pillars).map((p) => (
              <li key={p.label}>
                <strong className="font-medium">{p.label}</strong> <span className="text-muted">· {p.blurb}</span>
              </li>
            ))}
          </ul>
        </Card>

        <Card>
          <H2>Hook framework</H2>
          <ul className="mt-3 space-y-3 text-sm">
            {hookFramework.map((h) => (
              <li key={h.name}>
                <strong className="font-medium">{h.name}.</strong> <span className="text-ink-soft">{h.rule}</span>
                <p className="mt-0.5 text-muted">e.g. “{h.example}”</p>
              </li>
            ))}
          </ul>
          <h3 className="mt-5 text-sm font-medium">Rules</h3>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-ink-soft">
            {hookRules.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </Card>

        <Card>
          <H2>Script frame</H2>
          <ol className="mt-3 space-y-2 text-sm text-ink-soft">
            {scriptFramework.map((s) => (
              <li key={s.step}>
                <strong className="font-medium text-ink">{s.step}</strong> — {s.prompt}
              </li>
            ))}
          </ol>
        </Card>

        <Card>
          <H2>CTA system</H2>
          <p className="mt-2 text-sm text-muted">One CTA per piece. Rotate; never end a day with three of the same kind.</p>
          <ul className="mt-3 space-y-3 text-sm">
            {Object.entries(ctaKinds).map(([k, v]) => (
              <li key={k}>
                <strong className="font-medium">{v.label}</strong> <span className="text-muted">· share of seeded plan {ctaMix[k as keyof typeof ctaMix]}</span>
                <p className="text-ink-soft">{v.use}</p>
                <p className="text-muted">e.g. “{v.example}”</p>
              </li>
            ))}
          </ul>
        </Card>

        <Card>
          <H2>Attribution</H2>
          <p className="mt-2 text-sm text-ink-soft">{attribution.principle}</p>
          <p className="mt-3 break-all rounded-lg bg-void p-3 font-mono text-xs text-muted">{attribution.linkPattern}</p>
          <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm text-ink-soft">
            {attribution.steps.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ol>
        </Card>

        <Card>
          <H2>Production standards</H2>
          {(
            [
              ["Recording", productionDefaults.recordDay],
              ["Editing", productionDefaults.editing],
              ["Captions", productionDefaults.captions],
              ["Privacy", productionDefaults.privacy],
            ] as const
          ).map(([t, items]) => (
            <div key={t} className="mt-4">
              <h3 className="text-sm font-medium">{t}</h3>
              <ul className="mt-1.5 list-disc space-y-1 pl-5 text-sm text-ink-soft">
                {items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </Card>
      </div>
    </>
  );
}
