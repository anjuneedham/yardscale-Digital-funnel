import Link from "next/link";

import { getSession } from "@/lib/growth-system/access";
import { getProgress } from "@/lib/growth-system/progress";
import {
  overallProgress,
  phaseProgress,
  currentPhase,
  nextAction,
} from "@/lib/growth-system/progress-utils";
import { SystemMap, type StageState } from "@/components/growth-system/SystemMap";
import { phases } from "@/content/growth-system/phases";
import { frameworkStages } from "@/content/growth-system/course";

export default async function DashboardPage() {
  const [session, progress] = await Promise.all([getSession(), getProgress()]);
  const overall = overallProgress(progress, phases);
  const current = currentPhase(progress, phases);
  const action = nextAction(progress, phases);
  const firstName = (session?.name ?? "Operator").split(" ")[0];

  const states: Record<string, StageState> = {};
  for (const phase of phases) {
    if (phase.status === "upcoming") {
      states[phase.slug] = "locked";
      continue;
    }
    const pp = phaseProgress(progress, phase);
    states[phase.slug] = pp.isComplete
      ? "complete"
      : phase.slug === current?.slug
        ? "current"
        : "available";
  }

  return (
    <div className="mx-auto max-w-5xl">
      {/* Header */}
      <div>
        <p className="label-mono text-signal">Growth Operator Dashboard</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
          Welcome back, {firstName}.
        </h1>
        <p className="mt-3 max-w-2xl text-pretty text-[0.9375rem] leading-relaxed text-muted sm:text-base">
          This is your operating console. Work one phase at a time, complete each lesson, and build
          the system that relieves your growth constraint.
        </p>
      </div>

      {/* Stat row */}
      <div className="mt-8 grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-3">
        <Stat label="Overall progress" value={`${overall.percent}%`} detail={`${overall.completedLessons}/${overall.totalLessons} lessons`} />
        <Stat label="Current phase" value={current ? current.code : "—"} detail={current ? current.title : "All phases complete"} />
        <Stat label="Phases complete" value={`${overall.completedPhases}/${overall.availablePhases}`} detail="available now" />
      </div>

      {/* Overall progress bar */}
      <div className="mt-6">
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-line">
          <div
            className="h-full rounded-full bg-signal transition-all duration-500"
            style={{ width: `${overall.percent}%` }}
          />
        </div>
      </div>

      {/* Next action */}
      {action ? (
        <div className="mt-8 rounded-card border border-signal/30 bg-signal/[0.06] p-6 sm:p-8">
          <p className="label-mono text-signal">Next recommended action</p>
          <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-balance text-xl font-semibold tracking-[-0.02em] sm:text-2xl">
              {action.label}
            </h2>
            <Link
              href={action.href}
              className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-signal px-6 text-[0.9375rem] font-medium text-[color:var(--color-on-signal)] transition-colors hover:bg-[#cdff2e]"
            >
              Continue
              <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 8h9.5M8.5 4l4 4-4 4" />
              </svg>
            </Link>
          </div>
        </div>
      ) : null}

      {/* System map */}
      <div className="mt-12">
        <div className="flex items-baseline justify-between">
          <h2 className="text-lg font-semibold tracking-[-0.01em]">Your growth system</h2>
          <span className="label-mono">9 phases</span>
        </div>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
          Each phase strengthens one stage of your system. Completed phases are marked; upcoming
          phases unlock as the course expands.
        </p>
        <div className="mt-6">
          <SystemMap stages={frameworkStages} states={states} linkBase="/growth-system" />
        </div>
      </div>
    </div>
  );
}

function Stat({ label, value, detail }: { label: string; value: string; detail: string }) {
  return (
    <div className="bg-surface p-5 sm:p-6">
      <p className="label-mono">{label}</p>
      <p className="mt-3 text-2xl font-semibold tracking-[-0.02em] text-ink sm:text-3xl">{value}</p>
      <p className="mt-1 text-xs text-muted">{detail}</p>
    </div>
  );
}
