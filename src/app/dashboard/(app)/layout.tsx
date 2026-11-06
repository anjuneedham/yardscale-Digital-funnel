import type { Metadata } from "next";
import type { ReactNode } from "react";

import { DashShell } from "@/components/dashboard/DashShell";
import { requireOwner } from "@/lib/campaign/auth";
import { dashboardTimezone } from "@/lib/campaign/config";
import { campaign, dayForDate } from "@/content/campaign";
import { storeInfo } from "@/lib/campaign/store";
import { todayISO } from "@/lib/campaign/shared";

export const metadata: Metadata = {
  title: "Zero to Hero — Dashboard",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

/** Authoritative gate for every dashboard page (the proxy is only the first line). */
export default async function DashboardLayout({ children }: { children: ReactNode }) {
  await requireOwner();
  const day = dayForDate(todayISO(dashboardTimezone()));
  const todayHref = day >= 1 && day <= campaign.days ? `/dashboard/episode/${day}` : null;
  const store = storeInfo();

  return (
    <DashShell todayHref={todayHref}>
      {!store.durable ? (
        <p role="alert" className="mb-6 rounded-lg border border-warn/40 bg-warn/10 px-4 py-3 text-sm text-warn">
          {store.message}
        </p>
      ) : null}
      {children}
    </DashShell>
  );
}
