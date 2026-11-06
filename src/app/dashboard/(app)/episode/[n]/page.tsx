import { notFound } from "next/navigation";

import { campaign, dayForDate, getEpisode } from "@/content/campaign";
import { EpisodeWorkspace } from "@/components/dashboard/EpisodeWorkspace";
import { PageTitle } from "@/components/dashboard/ui";
import { dashboardTimezone } from "@/lib/campaign/config";
import { loadEpisodeStates } from "@/lib/campaign/data";
import { formatDate, todayISO } from "@/lib/campaign/shared";

export default async function EpisodePage({ params }: { params: Promise<{ n: string }> }) {
  const { n: raw } = await params;
  const n = Number(raw);
  const ep = Number.isInteger(n) ? getEpisode(n) : undefined;
  if (!ep) notFound();

  const { states, error } = await loadEpisodeStates();
  const today = dayForDate(todayISO(dashboardTimezone()));

  return (
    <>
      <PageTitle eyebrow={`Day ${ep.n} of ${campaign.days} · ${formatDate(ep.date)}`} title={ep.title} />
      {error ? (
        <p role="alert" className="mb-6 rounded-lg border border-warn/40 bg-warn/10 px-4 py-3 text-sm text-warn">
          Could not load saved work for this episode: {error}. Edits may not persist.
        </p>
      ) : null}
      <EpisodeWorkspace
        key={ep.n}
        episode={ep}
        initial={states[ep.n] ?? {}}
        prev={ep.n > 1 ? ep.n - 1 : null}
        next={ep.n < campaign.days ? ep.n + 1 : null}
        isToday={ep.n === today}
      />
    </>
  );
}
