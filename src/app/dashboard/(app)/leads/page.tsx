import { episodes } from "@/content/campaign";
import { LeadsManager } from "@/components/dashboard/LeadsManager";
import { PageTitle } from "@/components/dashboard/ui";
import { loadLeads } from "@/lib/campaign/data";

export const metadata = { title: "Lead tracker — Zero to Hero" };

export default async function LeadsPage() {
  const { leads, error } = await loadLeads();
  const contentOptions = [
    { value: "Website / other", label: "Website / other" },
    ...episodes.flatMap((e) => [
      { value: `D${e.n} YouTube`, label: `D${e.n} · YouTube · ${e.title}` },
      ...e.clips.map((c, i) => ({ value: `D${e.n} Clip ${i + 1}`, label: `D${e.n} · Clip ${i + 1} · ${c.title}` })),
    ]),
  ];
  return (
    <>
      <PageTitle eyebrow="Objective B" title="Lead tracker" />
      {error ? (
        <p role="alert" className="mb-6 rounded-lg border border-warn/40 bg-warn/10 px-4 py-3 text-sm text-warn">
          Could not load saved leads: {error}
        </p>
      ) : null}
      <LeadsManager initial={leads} contentOptions={contentOptions} />
    </>
  );
}
