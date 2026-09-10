"use client";

import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";
import { track, type FunnelEvent } from "@/lib/analytics";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const BASE =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50";

const VARIANTS: Record<Variant, string> = {
  primary:
    "bg-signal text-[#0d1400] hover:bg-[#bfe95e] shadow-[0_0_0_1px_rgba(163,230,53,0.35),0_10px_40px_-12px_rgba(163,230,53,0.55)] hover:shadow-[0_0_0_1px_rgba(163,230,53,0.5),0_14px_48px_-10px_rgba(163,230,53,0.7)]",
  secondary:
    "border border-line-strong bg-raised/60 text-ink hover:border-signal/50 hover:bg-raised",
  ghost: "text-ink-soft hover:text-ink",
};

const SIZES: Record<Size, string> = {
  // 48px min height on mobile keeps every CTA thumb-friendly.
  md: "min-h-12 px-5 text-sm sm:text-[0.9375rem]",
  lg: "min-h-13 px-7 text-[0.9375rem] sm:min-h-14 sm:px-8 sm:text-base",
};

type CtaProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  /** Analytics event fired on click. */
  event?: FunnelEvent;
  eventProps?: Record<string, string>;
};

export function CtaLink({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  event,
  eventProps,
  onClick,
  ...rest
}: CtaProps & Omit<ComponentProps<typeof Link>, "className" | "children">) {
  return (
    <Link
      href={href}
      className={cn(BASE, VARIANTS[variant], SIZES[size], className)}
      onClick={(e) => {
        if (event) track(event, { ...eventProps, href: String(href) });
        onClick?.(e);
      }}
      {...rest}
    >
      {children}
    </Link>
  );
}

export function CtaButton({
  children,
  variant = "primary",
  size = "md",
  className,
  event,
  eventProps,
  onClick,
  ...rest
}: CtaProps & Omit<ComponentProps<"button">, "className" | "children">) {
  return (
    <button
      type="button"
      className={cn(BASE, VARIANTS[variant], SIZES[size], className)}
      onClick={(e) => {
        if (event) track(event, eventProps);
        onClick?.(e);
      }}
      {...rest}
    >
      {children}
    </button>
  );
}

/** The small right-pointing chevron used on primary calls to action. */
export function ArrowGlyph({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 16 16"
      className={cn("h-3.5 w-3.5 shrink-0 transition-transform duration-200", className)}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 8h9.5M8.5 4l4 4-4 4" />
    </svg>
  );
}
