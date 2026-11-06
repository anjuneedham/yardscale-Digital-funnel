import { NotesManager } from "@/components/dashboard/NotesManager";
import { PageTitle } from "@/components/dashboard/ui";
import { dashboardTimezone } from "@/lib/campaign/config";
import { loadNotes } from "@/lib/campaign/data";
import { todayISO } from "@/lib/campaign/shared";

export const metadata = { title: "Campaign notes — Zero to Hero" };

export default async function NotesPage() {
  const { notes, error } = await loadNotes();
  return (
    <>
      <PageTitle eyebrow="Lessons · experiments · ideas" title="Campaign notes" />
      {error ? (
        <p role="alert" className="mb-6 rounded-lg border border-warn/40 bg-warn/10 px-4 py-3 text-sm text-warn">
          Could not load saved notes: {error}
        </p>
      ) : null}
      <NotesManager initial={notes} today={todayISO(dashboardTimezone())} />
    </>
  );
}
