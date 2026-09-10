"use client";

import { useEffect, useRef } from "react";
import { QualificationFlow } from "./QualificationFlow";

/**
 * Accessible modal shell for the qualification flow.
 * Uses the native <dialog> element so focus trapping, Escape handling and the
 * top layer come from the platform rather than from bespoke JS.
 */
export function QualificationDialog({
  open,
  origin,
  seedBottleneck,
  onClose,
}: {
  open: boolean;
  origin: string;
  seedBottleneck?: string;
  onClose: () => void;
}) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;

    if (open && !dialog.open) {
      dialog.showModal();
      document.documentElement.style.overflow = "hidden";
    } else if (!open && dialog.open) {
      dialog.close();
      document.documentElement.style.overflow = "";
    }

    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      aria-label="Find your growth path"
      className="m-0 h-full max-h-none w-full max-w-none bg-transparent p-0 backdrop:bg-void/85 backdrop:backdrop-blur-sm"
    >
      {open ? (
        <div className="flex min-h-full items-start justify-center overflow-y-auto p-0 sm:p-6">
          <div className="relative w-full max-w-3xl border-line bg-surface sm:rounded-card sm:border">
            <button
              type="button"
              onClick={onClose}
              className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-line bg-panel text-muted transition-colors hover:border-line-strong hover:text-ink"
              aria-label="Close"
            >
              <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                <path d="M4 4l8 8M12 4l-8 8" />
              </svg>
            </button>
            <QualificationFlow origin={origin} seedBottleneck={seedBottleneck} onClose={onClose} />
          </div>
        </div>
      ) : null}
    </dialog>
  );
}
