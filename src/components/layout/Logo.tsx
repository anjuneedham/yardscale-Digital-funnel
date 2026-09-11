import Link from "next/link";
import { site } from "@/content/site";
import { YsMark } from "./YsMark";

/**
 * The brand lockup: the YS monogram beside the wordmark, split the way the
 * brand kit splits it — "YARD" in ink, "SCALE" in the signal colour.
 */
export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link
      href="/"
      className="group inline-flex items-center gap-2.5"
      aria-label={`${site.name} — home`}
    >
      <YsMark className="h-7 w-auto text-ink transition-transform duration-300 group-hover:-translate-y-px sm:h-8" />
      <span className="flex flex-col leading-none">
        <span className="whitespace-nowrap text-[0.9375rem] font-bold uppercase tracking-[0.02em] text-ink">
          Yard<span className="text-signal">Scale</span>
        </span>
        {compact ? null : (
          <span className="mt-1 whitespace-nowrap text-[0.5625rem] font-medium uppercase tracking-[0.34em] text-muted">
            Digital
          </span>
        )}
      </span>
    </Link>
  );
}
