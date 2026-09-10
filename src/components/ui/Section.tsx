import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  /** Adds the faint technical grid used behind pivotal sections. */
  grid?: boolean;
  /** Draws a hairline across the top — the site's main structural rhythm. */
  divider?: boolean;
  as?: ElementType;
  /** Tighter vertical rhythm for supporting sections. */
  size?: "default" | "compact" | "loose";
};

const PADDING = {
  compact: "py-14 sm:py-16",
  default: "py-20 sm:py-24 lg:py-28",
  loose: "py-24 sm:py-32 lg:py-40",
} as const;

export function Section({
  id,
  children,
  className,
  grid = false,
  divider = false,
  as: Tag = "section",
  size = "default",
}: SectionProps) {
  return (
    <Tag
      id={id}
      className={cn(
        "relative isolate",
        PADDING[size],
        divider && "border-t border-line",
        className,
      )}
      // Anchor targets must clear the sticky header.
      style={id ? { scrollMarginTop: "5.5rem" } : undefined}
    >
      {grid ? (
        <div aria-hidden className="grid-field pointer-events-none absolute inset-0 -z-10 opacity-60" />
      ) : null}
      <div className="container-x">{children}</div>
    </Tag>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  lede,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <header
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? <p className="label-mono mb-4">{eyebrow}</p> : null}
      <h2 className="text-balance text-3xl font-semibold leading-[1.08] tracking-[-0.02em] sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {lede ? (
        <div className="mt-5 text-pretty text-base leading-relaxed text-ink-soft sm:text-lg">
          {lede}
        </div>
      ) : null}
    </header>
  );
}
