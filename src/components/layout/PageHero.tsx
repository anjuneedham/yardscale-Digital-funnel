import type { ReactNode } from "react";

/** Consistent opening for every supporting page. */
export function PageHero({
  eyebrow,
  title,
  lede,
  children,
}: {
  eyebrow: string;
  title: string;
  lede: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden pb-14 pt-14 sm:pb-20 sm:pt-20">
      <div aria-hidden className="grid-field pointer-events-none absolute inset-0 -z-10 opacity-70" />
      <div className="container-x">
        <p className="label-mono">{eyebrow}</p>
        <h1 className="mt-5 max-w-4xl text-balance text-4xl font-semibold leading-[1.04] tracking-[-0.035em] sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <div className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-ink-soft sm:text-lg">
          {lede}
        </div>
        {children ? <div className="mt-9">{children}</div> : null}
      </div>
    </section>
  );
}
