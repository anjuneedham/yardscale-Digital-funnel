import { campaign, dayForDate, episodes } from "@/content/campaign";
import { PerformanceManager } from "@/components/dashboard/PerformanceManager";
import { PageTitle } from "@/components/dashboard/ui";
import { dashboardTimezone } from "@/lib/campaign/config";
import { loadMetrics, loadSettings } from "@/lib/campaign/data";
import { todayISO } from "@/lib/campaign/shared";

export const metadata = { title: "Performance — Zero to Hero" };

export default async function PerformancePage({ searchParams }: { searchParams: Promise<{ day?: string }> }) {
  const { day: dayParam } = await searchParams;
  const [{ metrics, error }, loadedSettings] = await Promise.all([loadMetrics(), loadSettings()]);
  const settings = { ytSubs: loadedSettings.ytSubs, ttFollowers: loadedSettings.ttFollowers };
  const today = dayForDate(todayISO(dashboardTimezone()));
  const requested = Number(dayParam);
  const initialDay =
    Number.isInteger(requested) && requested >= 1 && requested <= campaign.days
      ? requested
      : Math.min(Math.max(today, 1), campaign.days);

  return (
    <>
      <PageTitle eyebrow="Manual entry" title="Performance" />
      <p className="mb-6 max-w-2xl text-sm text-muted">
        Platform analytics are not connected. Copy numbers from YouTube Studio and TikTok Analytics each day. Only what you enter
        appears here.
      </p>
      {error ? (
        <p role="alert" className="mb-6 rounded-lg border border-warn/40 bg-warn/10 px-4 py-3 text-sm text-warn">
          Could not load saved numbers: {error}
        </p>
      ) : null}
      <PerformanceManager
        key={initialDay}
        days={episodes.map((e) => ({ n: e.n, title: e.title, date: e.date }))}
        initialMetrics={metrics}
        initialSettings={settings}
        initialDay={initialDay}
      />
    </>
  );
}
