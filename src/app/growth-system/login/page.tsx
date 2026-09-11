import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";

import { pageMetadata } from "@/lib/seo";
import { getSession } from "@/lib/growth-system/access";
import { devAccessCode } from "@/lib/growth-system/config";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "Member Login — The Growth Operator System",
    description: "Log in to the Growth Operator System member dashboard.",
    path: "/growth-system/login",
  }),
  robots: { index: false, follow: true },
};

const ERROR_MESSAGES: Record<string, string> = {
  email: "Enter a valid email address.",
  code: "That access code wasn't recognised. Check it and try again.",
};

export default async function GrowthSystemLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; next?: string }>;
}) {
  // Already signed in? Go straight to the dashboard.
  if (await getSession()) redirect("/growth-system/dashboard");

  const params = await searchParams;
  const error = params.error ? ERROR_MESSAGES[params.error] : null;
  const next = params.next && params.next.startsWith("/growth-system")
    ? params.next
    : "/growth-system/dashboard";

  // Show the preview access code only while no real access code is configured.
  const showAccessHint = !process.env.GROWTH_SYSTEM_ACCESS_CODE;

  return (
    <section className="relative isolate flex min-h-[70vh] items-center overflow-hidden py-16 sm:py-24">
      <div aria-hidden className="grid-field pointer-events-none absolute inset-0 -z-10 opacity-70" />
      <div className="container-x">
        <div className="mx-auto w-full max-w-md rounded-card border border-line bg-panel/70 p-7 sm:p-9">
          <p className="label-mono text-signal">The Growth Operator System</p>
          <h1 className="mt-3 text-2xl font-semibold tracking-[-0.02em]">Member login</h1>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Enter your email and access code to open your dashboard.
          </p>

          {error ? (
            <p role="alert" className="mt-5 rounded-lg border border-warn/40 bg-warn/10 px-4 py-3 text-sm text-warn">
              {error}
            </p>
          ) : null}

          <form action="/growth-system/api/session" method="post" className="mt-6 space-y-4">
            <input type="hidden" name="intent" value="login" />
            <input type="hidden" name="next" value={next} />

            <label className="block">
              <span className="text-sm text-ink-soft">Email</span>
              <input
                type="email"
                name="email"
                autoComplete="email"
                required
                maxLength={254}
                className="mt-2 w-full rounded-lg border border-line bg-void px-4 py-3 text-[0.9375rem] text-ink placeholder:text-faint focus:border-signal/50 focus:outline-none"
                placeholder="you@company.com"
              />
            </label>

            <label className="block">
              <span className="text-sm text-ink-soft">Access code</span>
              <input
                type="text"
                name="accessCode"
                autoComplete="off"
                required
                maxLength={80}
                className="mt-2 w-full rounded-lg border border-line bg-void px-4 py-3 text-[0.9375rem] text-ink placeholder:text-faint focus:border-signal/50 focus:outline-none"
                placeholder="Your enrollment code"
              />
            </label>

            <button
              type="submit"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-signal px-6 text-[0.9375rem] font-medium text-[color:var(--color-on-signal)] transition-colors hover:bg-[#cdff2e]"
            >
              Enter the dashboard
            </button>
          </form>

          {showAccessHint ? (
            <p className="mt-5 rounded-lg border border-line bg-void/60 px-4 py-3 text-xs leading-relaxed text-faint">
              Preview access — no payment provider is connected yet. Use access code{" "}
              <span className="font-mono text-ink-soft">{devAccessCode()}</span> with any email to
              explore the member experience.
            </p>
          ) : null}

          <p className="mt-6 text-sm text-muted">
            Not enrolled yet?{" "}
            <Link href="/growth-system" className="text-ink underline underline-offset-4 hover:text-signal">
              See the course
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
