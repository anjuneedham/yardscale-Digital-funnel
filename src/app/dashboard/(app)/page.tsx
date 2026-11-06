import Link from "next/link";

import { campaign, chapterForDay, dayForDate, episodes } from "@/content/campaign";
import { dashboardTimezone } from "@/lib/campaign/config";
import { loadEpisodeStates, loadLeads, loadMetrics, loadSettings } from "@/lib/campaign/data";
import {
  PIECES,
  PIECE_SHORT,
  formatDate,
  overallStatus,
  pct,
  pieceStatus,
  publishedCount,
  statusLabel,
  targets,
  todayISO,
} from "@/lib/campaign/shared";
import { Card, Chip, H2, PageTitle, ProgressBar } from "@/components/dashboard/ui";

export default async function OverviewPage() {
  const today = todayISO(dashboardTimezone());
  const day = dayForDate(today);
  const [{ states, error: e1 }, { metrics }, settings, { leads }] = await Promise.all([
    loadEpisodeStates(),
    loadMetrics(),
    loadSettings(),
    loadLeads(),
  ]);

  const before = day < 1;
  const after = day > campaign.days;
  const elapsed = Math.max(0, Math.min(day, campaign.days));
  const remaining = Math.max(0, campaign.days - elapsed);

  const sum = (key: "subsGained" | "followersGained") =>
    Object.values(metrics).reduce((a, m) => a + (m[key] ?? 0), 0);
  const ytNow = settings.ytSubs ?? sum("subsGained");
  const ttNow = settings.ttFollowers ?? sum("followersGained");
  const won = leads.filter((l) => l.status === "Won").length;

  const fully = episodes.filter((e) => publishedCount(states[e.n]) === 4).length;
  const ytPub = episodes.filter((e) => pieceStatus(states[e.n], "yt") === "published").length;
  const ttPub = episodes.reduce(
    (a, e) => a + (["c1", "c2", "c3"] as const).filter((k) => pieceStatus(states[e.n], k) === "published").length,
    0,
  );

  const todayEp = day >= 1 && day <= campaign.days ? episodes[day - 1] : undefined;
  const upcoming = episodes.filter((e) => e.n > Math.max(day, 0)).slice(0, 3);
  const activeLeads = leads.filter((l) => !["Won", "Lost", "Not a fit"].includes(l.status ?? "New")).length;

  return (
    <>
      <PageTitle eyebrow={`${campaign.name} · ${campaign.subtitle}`} title="Campaign overview">
        <Chip>
          {formatDate(campaign.start)} → {formatDate(campaign.end)}, 2026
        </Chip>
      </PageTitle>

      {e1 ? (
        <p role="alert" className="mb-6 rounded-lg border border-warn/40 bg-warn/10 px-4 py-3 text-sm text-warn">
          Could not load saved data: {e1}
        </p>
      ) : null}

      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <p className="label-mono">
            {before ? "Starts soon" : after ? "Campaign finished" : `Chapter ${chapterForDay(day).n} · ${chapterForDay(day).name}`}
          </p>
          <p className="mt-2 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
            {before ? `Starts ${formatDate(campaign.start)}` : after ? "Day 56 complete" : `Day ${day} of ${campaign.days}`}
          </p>
          <div className="mt-4 grid grid-cols-3 gap-3 text-sm">
            <Stat label="Days elapsed" value={elapsed} />
            <Stat label="Days remaining" value={remaining} />
            <Stat label="Episodes fully published" value={`${fully}/${campaign.days}`} />
          </div>
          <div className="mt-5">
            <ProgressBar value={pct(elapsed, campaign.days)} label="Campaign days elapsed" />
          </div>
        </Card>

        <Card>
          <p className="label-mono">Today</p>
          {todayEp ? (
            <>
              <p className="mt-2 font-semibold leading-snug">{todayEp.title}</p>
              <p className="mt-1 text-sm text-muted">
                Overall: {statusLabel(overallStatus(states[todayEp.n]))}
              </p>
              <ul className="mt-3 grid grid-cols-4 gap-1.5 text-center text-xs">
                {PIECES.map((k) => (
                  <li key={k} className="rounded-md border border-line px-1 py-1.5">
                    <span className="block text-faint">{PIECE_SHORT[k]}</span>
                    <span className={pieceStatus(states[todayEp.n], k) === "published" ? "text-signal" : "text-ink-soft"}>
                      {pieceStatus(states[todayEp.n], k) === "published" ? "Live" : "…"}
                    </span>
                  </li>
                ))}
              </ul>
              <Link
                href={`/dashboard/episode/${todayEp.n}`}
                className="mt-4 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-signal px-5 text-sm font-medium text-[color:var(--color-on-signal)]"
              >
                Open today&rsquo;s episode
              </Link>
            </>
          ) : (
            <p className="mt-2 text-sm text-muted">
              {before ? "The campaign hasn’t started. Preview Day 1." : "The campaign window has ended."}
              <Link href="/dashboard/episode/1" className="ml-1 text-ink underline underline-offset-4">
                Open Day 1
              </Link>
            </p>
          )}
        </Card>
      </div>

      <h2 className="sr-only">Scorecards</h2>
      <div className="mt-4 grid gap-4 md:grid-cols-3">
        <Score label="YouTube subscribers" now={ytNow} target={targets.youtube} note={settings.ytSubs === undefined ? "Sum of daily gains. Enter your real total on Performance." : "Entered total"} />
        <Score label="TikTok followers" now={ttNow} target={targets.tiktok} note={settings.ttFollowers === undefined ? "Sum of daily gains. Enter your real total on Performance." : "Entered total"} />
        <Score label="Paid app projects" now={won} target={targets.projects} note="Leads marked Won in the tracker" />
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        <Card>
          <H2>Publishing progress</H2>
          <div className="mt-4 space-y-4 text-sm">
            <Row label="YouTube episodes published" now={ytPub} of={campaign.days} />
            <Row label="TikTok clips published" now={ttPub} of={campaign.days * 3} />
          </div>
          <p className="mt-4 text-sm text-muted">
            Pipeline: {leads.length} lead{leads.length === 1 ? "" : "s"} tracked, {activeLeads} active.
          </p>
        </Card>
        <Card>
          <H2>Coming up</H2>
          <ul className="mt-3 divide-y divide-line">
            {upcoming.map((e) => (
              <li key={e.n}>
                <Link href={`/dashboard/episode/${e.n}`} className="flex min-h-12 items-center justify-between gap-3 py-2 hover:text-signal">
                  <span className="min-w-0">
                    <span className="label-mono block">
                      Day {e.n} · {formatDate(e.date)}
                    </span>
                    <span className="block truncate text-sm">{e.title}</span>
                  </span>
                  <Chip>{statusLabel(overallStatus(states[e.n]))}</Chip>
                </Link>
              </li>
            ))}
            {upcoming.length === 0 ? <li className="py-3 text-sm text-muted">Nothing left on the calendar.</li> : null}
          </ul>
        </Card>
      </div>
    </>
  );
}

function Stat({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="rounded-lg border border-line px-3 py-2.5">
      <p className="text-xl font-semibold">{value}</p>
      <p className="text-xs text-muted">{label}</p>
    </div>
  );
}

function Score({ label, now, target, note }: { label: string; now: number; target: number; note: string }) {
  return (
    <Card>
      <p className="label-mono">{label}</p>
      <p className="mt-2 text-3xl font-semibold tracking-[-0.02em]">
        {now.toLocaleString("en-US")}
        <span className="text-lg text-muted"> / {target.toLocaleString("en-US")}</span>
      </p>
      <div className="mt-3">
        <ProgressBar value={pct(now, target)} label={`${label} progress`} />
      </div>
      <p className="mt-2 text-xs text-muted">{note}</p>
    </Card>
  );
}

function Row({ label, now, of }: { label: string; now: number; of: number }) {
  return (
    <div>
      <div className="mb-1.5 flex justify-between text-muted">
        <span>{label}</span>
        <span className="text-ink">
          {now}/{of}
        </span>
      </div>
      <ProgressBar value={pct(now, of)} label={label} />
    </div>
  );
}
