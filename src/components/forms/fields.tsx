import type { ComponentProps } from "react";

/** Shared form field primitives. 16px text on inputs prevents iOS zoom-on-focus. */

export const FIELD_CLASS =
  "mt-2 w-full rounded-lg border border-line-strong bg-panel px-4 py-3 text-base text-ink placeholder:text-faint focus:border-signal focus:outline-none";

export function Honeypot({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  // Visually and semantically hidden. Real people never fill it; bots do.
  return (
    <div aria-hidden className="absolute h-0 w-0 overflow-hidden opacity-0">
      <label>
        Company
        <input tabIndex={-1} autoComplete="off" value={value} onChange={(e) => onChange(e.target.value)} />
      </label>
    </div>
  );
}

export function FieldLabel({
  label,
  required,
  hint,
}: {
  label: string;
  required?: boolean;
  hint?: string;
}) {
  return (
    <>
      <span className="text-sm font-medium text-ink">
        {label}
        {required ? <span className="text-signal"> *</span> : null}
      </span>
      {hint ? <span className="mt-0.5 block text-xs text-muted">{hint}</span> : null}
    </>
  );
}

export function SelectChevron(props: ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden {...props}>
      <path d="M2.5 4.5L6 8l3.5-3.5" />
    </svg>
  );
}
