import Link from "next/link";
import { site } from "@/content/site";

/** Wordmark with a small signal glyph — the growth system in miniature. */
export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link
      href="/"
      className="group inline-flex items-center gap-2.5"
      aria-label={`${site.name} — home`}
    >
      <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0" aria-hidden>
        <rect x="1" y="1" width="22" height="22" rx="6" fill="#111111" stroke="#373737" />
        <path
          d="M6 15.5 L10 15.5 L12 8.5 L14 12.5 L18 12.5"
          fill="none"
          stroke="#a3e635"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="whitespace-nowrap text-[0.9375rem] font-semibold tracking-[-0.01em] text-ink">
        YardScale
        {compact ? null : <span className="text-muted"> Digital</span>}
      </span>
    </Link>
  );
}
