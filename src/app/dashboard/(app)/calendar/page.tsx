import { dayForDate, episodes } from "@/content/campaign";
import { CalendarList } from "@/components/dashboard/CalendarList";
import { PageTitle } from "@/components/dashboard/ui";
import { dashboardTimezone } from "@/lib/campaign/config";
import { loadEpisodeStates } from "@/lib/campaign/data";
import { todayISO } from "@/lib/campaign/shared";

export const metadata = { title: "Content calendar — Zero to Hero" };

export default async function CalendarPage() {
  const { states, error } = await loadEpisodeStates();
  const today = dayForDate(todayISO(dashboardTimezone()));
  return (
    <>
      <PageTitle eyebrow="Nov 6 – Dec 31, 2026" title="Content calendar" />
      {error ? (
        <p role="alert" className="mb-6 rounded-lg border border-warn/40 bg-warn/10 px-4 py-3 text-sm text-warn">
          Could not load saved statuses: {error}
        </p>
      ) : null}
      <CalendarList
        episodes={episodes.map(({ n, date, chapter, title }) => ({ n, date, chapter, title }))}
        initial={states}
        today={today}
      />
    </>
  );
}
