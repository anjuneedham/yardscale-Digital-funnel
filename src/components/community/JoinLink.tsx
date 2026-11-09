"use client";

import { CtaLink, ArrowGlyph } from "@/components/ui/Cta";
import { track } from "@/lib/analytics";

/**
 * Join button for an external community. With no link configured it renders
 * an honest "not open yet" state that points at the notify form instead of a
 * dead or fake link.
 */
export function JoinLink({
  name,
  href,
  variant = "primary",
}: {
  name: string;
  href: string;
  variant?: "primary" | "secondary";
}) {
  if (!href) {
    return (
      <div>
        <p className="flex items-center gap-2 font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-warn">
          <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-warn" />
          Not open yet
        </p>
        <CtaLink href="#notify" variant="secondary" className="group mt-4">
          Tell me when {name} opens <ArrowGlyph className="group-hover:translate-x-0.5" />
        </CtaLink>
      </div>
    );
  }

  return (
    <CtaLink
      href={href}
      variant={variant}
      size="lg"
      className="group"
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => track("community_click", { target: name.toLowerCase() })}
    >
      Join on {name} <ArrowGlyph className="group-hover:translate-x-0.5" />
    </CtaLink>
  );
}
