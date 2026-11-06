import type { Metadata } from "next";
import { redirect } from "next/navigation";

import { isOwner, passcodeConfigured } from "@/lib/campaign/auth";

export const metadata: Metadata = {
  title: "Dashboard sign in",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

export default async function DashboardLogin({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; next?: string }>;
}) {
  if (await isOwner()) redirect("/dashboard");
  const params = await searchParams;
  const configured = passcodeConfigured();
  const next = params.next?.startsWith("/dashboard") && !params.next.startsWith("//") ? params.next : "/dashboard";

  return (
    <section className="flex min-h-screen items-center bg-void py-16">
      <div className="container-x">
        <div className="mx-auto w-full max-w-md rounded-card border border-line bg-panel/70 p-7 sm:p-9">
          <p className="label-mono text-signal">YardScale · Zero to Hero</p>
          <h1 className="mt-3 text-2xl font-semibold tracking-[-0.02em]">Campaign dashboard</h1>
          <p className="mt-2 text-sm leading-relaxed text-muted">Private. Owner access only.</p>

          {!configured ? (
            <p role="alert" className="mt-5 rounded-lg border border-warn/40 bg-warn/10 px-4 py-3 text-sm text-warn">
              The dashboard is locked because no passcode is configured. Set DASHBOARD_PASSCODE (at least 8
              characters) in the environment, then reload.
            </p>
          ) : null}
          {params.error ? (
            <p role="alert" className="mt-5 rounded-lg border border-warn/40 bg-warn/10 px-4 py-3 text-sm text-warn">
              That passcode is not correct.
            </p>
          ) : null}

          <form action="/dashboard/api/session" method="post" className="mt-6 space-y-4">
            <input type="hidden" name="intent" value="login" />
            <input type="hidden" name="next" value={next} />
            <label className="block">
              <span className="text-sm text-ink-soft">Passcode</span>
              <input
                type="password"
                name="passcode"
                autoComplete="current-password"
                required
                disabled={!configured}
                maxLength={200}
                className="mt-2 w-full min-h-12 rounded-lg border border-line bg-void px-4 py-3 text-[0.9375rem] text-ink focus:border-signal/50 focus:outline-none disabled:opacity-50"
              />
            </label>
            <button
              type="submit"
              disabled={!configured}
              className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-signal px-6 text-[0.9375rem] font-medium text-[color:var(--color-on-signal)] hover:bg-[#cdff2e] disabled:opacity-50"
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
