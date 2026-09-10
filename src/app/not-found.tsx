import Link from "next/link";
import type { Metadata } from "next";
import { CtaLink, ArrowGlyph } from "@/components/ui/Cta";
import { nav } from "@/content/site";

export const metadata: Metadata = {
  title: "Page not found — YardScale Digital",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="relative isolate flex min-h-[70vh] items-center overflow-hidden py-24">
      <div aria-hidden className="grid-field pointer-events-none absolute inset-0 -z-10 opacity-60" />
      <div className="container-x">
        <p className="label-mono">Error 404</p>
        <h1 className="mt-5 max-w-2xl text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.035em] sm:text-5xl">
          That page doesn&apos;t exist.
        </h1>
        <p className="mt-5 max-w-lg text-pretty text-base leading-relaxed text-muted">
          A broken link is its own kind of bottleneck. Here&apos;s the way back.
        </p>

        <div className="mt-9">
          <CtaLink href="/#bottleneck" size="lg" className="group">
            Find your growth bottleneck
            <ArrowGlyph className="group-hover:translate-x-0.5" />
          </CtaLink>
        </div>

        <nav aria-label="Site" className="mt-12 border-t border-line pt-8">
          <ul className="flex flex-wrap gap-x-6 gap-y-3">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-muted transition-colors hover:text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
