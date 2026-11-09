import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";

import { pageMetadata } from "@/lib/seo";
import { getAcademyMember } from "@/lib/academy";
import { FIELD_CLASS } from "@/components/forms/fields";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "Sign in to the Academy",
    description: "Free access to every Academy module with your name and email.",
    path: "/academy/sign-in",
  }),
  robots: { index: false, follow: true },
};

const ERRORS: Record<string, string> = {
  email: "Please enter a valid email address.",
  name: "Please enter your name.",
};

export default async function AcademySignInPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; next?: string }>;
}) {
  const params = await searchParams;
  const next = params.next && params.next.startsWith("/academy") ? params.next : "/academy/zero-to-saas";

  if (await getAcademyMember()) redirect(next);

  const error = params.error ? ERRORS[params.error] : null;

  return (
    <section className="py-16 sm:py-24">
      <div className="container-x">
        <div className="mx-auto w-full max-w-md">
          <p className="label-mono text-signal">Academy</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
            Unlock every module. Free.
          </h1>
          <p className="mt-4 text-[0.9375rem] leading-relaxed text-ink-soft">
            Enter your name and email to read the full course. No password and no payment.
            You will also get the build notes by email, and can unsubscribe any time.
          </p>

          {error ? (
            <p role="alert" className="mt-6 rounded-lg border border-warn/50 bg-warn/10 px-4 py-3 text-sm text-warn">
              {error}
            </p>
          ) : null}

          <form action="/growth-system/api/session" method="post" className="relative mt-8 space-y-5">
            <input type="hidden" name="intent" value="login" />
            <input type="hidden" name="next" value={next} />

            <label className="block">
              <span className="text-sm font-medium text-ink">Name</span>
              <input type="text" name="name" autoComplete="name" required maxLength={120} className={FIELD_CLASS} />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-ink">Email</span>
              <input type="email" name="email" autoComplete="email" required maxLength={254} className={FIELD_CLASS} />
            </label>

            <div aria-hidden className="absolute h-0 w-0 overflow-hidden opacity-0">
              <label>
                Company
                <input type="text" name="company" tabIndex={-1} autoComplete="off" />
              </label>
            </div>

            <button
              type="submit"
              className="inline-flex min-h-13 w-full cursor-pointer items-center justify-center rounded-full bg-signal px-7 text-base font-semibold text-[color:var(--color-on-signal)] transition-colors hover:bg-[#cbff35]"
            >
              Unlock the course
            </button>
          </form>

          <p className="mt-8 text-sm text-muted">
            Not ready?{" "}
            <Link href="/academy/zero-to-saas/module-0/what-you-are-signing-up-for" className="text-ink underline underline-offset-4 hover:text-signal">
              Read Module 0 without signing in
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
