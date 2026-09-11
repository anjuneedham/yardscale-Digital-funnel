import Link from "next/link";
import { notFound } from "next/navigation";

import { getProgress } from "@/lib/growth-system/progress";
import { phaseProgress, isLessonComplete } from "@/lib/growth-system/progress-utils";
import { getPhase } from "@/content/growth-system/phases";

export default async function PhasePage({
  params,
}: {
  params: Promise<{ phase: string }>;
}) {
  const { phase: phaseSlug } = await params;
  const phase = getPhase(phaseSlug);
  if (!phase) notFound();

  if (phase.status === "upcoming") {
    return <UpcomingPhase phase={phase} />;
  }

  const progress = await getProgress();
  const pp = phaseProgress(progress, phase);

  return (
    <div className="mx-auto max-w-3xl">
      <Link href="/growth-system/dashboard" className="text-sm text-muted transition-colors hover:text-ink">
        ← Dashboard
      </Link>

      <div className="mt-5">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <span className="label-mono text-signal">Phase {phase.number} · {phase.code}</span>
          {pp.isComplete ? (
            <span className="rounded-full bg-signal/15 px-2 py-0.5 font-mono text-[0.625rem] uppercase tracking-[0.12em] text-signal">
              Complete
            </span>
          ) : null}
        </div>
        <h1 className="mt-3 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">{phase.title}</h1>
        <p className="mt-3 text-pretty text-base leading-relaxed text-ink-soft">{phase.tagline}</p>
      </div>

      {/* Objective + overview */}
      <div className="mt-8 rounded-card border border-line bg-panel/60 p-6 sm:p-7">
        <p className="label-mono">Objective</p>
        <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-soft">{phase.objective}</p>
        {phase.overview ? (
          <p className="mt-4 text-[0.9375rem] leading-relaxed text-muted">{phase.overview}</p>
        ) : null}
      </div>

      {/* Progress */}
      <div className="mt-8">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted">
            {pp.completed} of {pp.total} lessons complete
          </span>
          <span className="font-mono text-xs text-signal">{pp.percent}%</span>
        </div>
        <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-line">
          <div className="h-full rounded-full bg-signal transition-all duration-500" style={{ width: `${pp.percent}%` }} />
        </div>
      </div>

      {/* Lessons */}
      <ol className="mt-8 space-y-2.5">
        {phase.lessons.map((lesson) => {
          const done = isLessonComplete(progress, phase.slug, lesson.slug);
          return (
            <li key={lesson.slug}>
              <Link
                href={`/growth-system/${phase.slug}/${lesson.slug}`}
                className="card-interactive flex items-center gap-4 rounded-[14px] border border-line bg-panel/70 p-4 sm:p-5"
              >
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border font-mono text-xs ${
                    done
                      ? "border-signal bg-signal text-[color:var(--color-on-signal)]"
                      : "border-line-strong bg-void text-ink-soft"
                  }`}
                >
                  {done ? (
                    <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3.5 8.5l3 3 6-6.5" />
                    </svg>
                  ) : (
                    String(lesson.number).padStart(2, "0")
                  )}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[0.9375rem] font-medium text-ink">{lesson.title}</span>
                  <span className="mt-0.5 block truncate text-sm text-muted">{lesson.summary}</span>
                </span>
                {lesson.durationMinutes ? (
                  <span className="hidden shrink-0 font-mono text-xs text-faint sm:inline">
                    {lesson.durationMinutes} min
                  </span>
                ) : null}
              </Link>
            </li>
          );
        })}
      </ol>

      {/* Final asset */}
      {phase.finalAsset ? (
        <div className="mt-8 rounded-card border border-signal/30 bg-signal/[0.06] p-6 sm:p-7">
          <p className="label-mono text-signal">Phase deliverable</p>
          <h2 className="mt-2 text-lg font-semibold tracking-[-0.01em]">{phase.finalAsset.title}</h2>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">{phase.finalAsset.description}</p>
        </div>
      ) : null}
    </div>
  );
}

function UpcomingPhase({
  phase,
}: {
  phase: NonNullable<ReturnType<typeof getPhase>>;
}) {
  return (
    <div className="mx-auto max-w-2xl">
      <Link href="/growth-system/dashboard" className="text-sm text-muted transition-colors hover:text-ink">
        ← Dashboard
      </Link>
      <div className="mt-8 rounded-card border border-line bg-panel/60 p-8 text-center sm:p-12">
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-line bg-void text-faint">
          <svg viewBox="0 0 16 16" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="3.5" y="7" width="9" height="6.5" rx="1.5" />
            <path d="M5.5 7V5a2.5 2.5 0 0 1 5 0v2" />
          </svg>
        </span>
        <p className="label-mono mt-5 text-signal">Phase {phase.number} · {phase.code}</p>
        <h1 className="mt-3 text-2xl font-semibold tracking-[-0.02em] sm:text-3xl">{phase.title}</h1>
        <p className="mt-3 text-pretty text-[0.9375rem] leading-relaxed text-ink-soft">{phase.tagline}</p>
        <div className="mt-6 rounded-lg border border-line bg-void/50 p-5 text-left">
          <p className="label-mono">Objective</p>
          <p className="mt-2 text-sm leading-relaxed text-muted">{phase.objective}</p>
          <p className="label-mono mt-4">You&apos;ll build</p>
          <p className="mt-2 text-sm leading-relaxed text-muted">{phase.outcome}</p>
        </div>
        <p className="mt-6 text-sm text-faint">
          This phase is in development and unlocks here when it launches. Finish the phases available
          now to be ready for it.
        </p>
        <div className="mt-6">
          <Link
            href="/growth-system/dashboard"
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-line-strong px-6 text-sm text-ink transition-colors hover:border-signal/50"
          >
            Back to dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
