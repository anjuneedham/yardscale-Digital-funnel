import type { Exercise, Scorecard, Template } from "@/content/education/types";

/** The supporting blocks that follow a chapter body: exercise, template, scorecard, action, recap. */

export function ExerciseBlock({ exercise }: { exercise: Exercise }) {
  return (
    <section className="rounded-card border border-line bg-raised/40 p-5 sm:p-6">
      <p className="label-mono mb-3 text-signal">Exercise</p>
      <h2 className="text-base font-semibold tracking-[-0.01em] text-ink">{exercise.title}</h2>
      <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-soft">{exercise.prompt}</p>
      {exercise.steps ? (
        <ol className="mt-4 space-y-2.5">
          {exercise.steps.map((step, i) => (
            <li key={i} className="flex gap-3.5 text-[0.9375rem] leading-relaxed text-ink-soft">
              <span className="font-mono text-xs text-signal">{String(i + 1).padStart(2, "0")}</span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      ) : null}
    </section>
  );
}

export function TemplateBlock({ template }: { template: Template }) {
  return (
    <section className="rounded-card border border-line bg-panel/60 p-5 sm:p-6">
      <p className="label-mono mb-3 text-faint">Template</p>
      <h2 className="text-base font-semibold tracking-[-0.01em] text-ink">{template.title}</h2>
      <pre className="mt-4 overflow-x-auto rounded-lg border border-line bg-void/60 p-4 font-mono text-[0.8125rem] leading-relaxed text-ink-soft">
        <code>{template.body}</code>
      </pre>
      {template.adapt ? (
        <div className="mt-4">
          <p className="label-mono mb-2.5 text-faint">Before you use it</p>
          <ul className="space-y-2">
            {template.adapt.map((item, i) => (
              <li key={i} className="flex gap-3 text-sm leading-relaxed text-muted">
                <span aria-hidden className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-signal" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </section>
  );
}

export function ScorecardBlock({ scorecard }: { scorecard: Scorecard }) {
  return (
    <section className="rounded-card border border-signal/30 bg-signal/[0.04] p-5 sm:p-6">
      <p className="label-mono mb-3 text-signal">Scorecard</p>
      <h2 className="text-base font-semibold tracking-[-0.01em] text-ink">{scorecard.title}</h2>
      <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-soft">{scorecard.instructions}</p>
      <p className="mt-3 font-mono text-xs text-muted">{scorecard.scale}</p>

      {/*
        Stacked rows rather than a table: a three-column table cannot fit a
        375px viewport without horizontal scrolling, and this content is read
        on phones. Each row is its own bordered block, with the score box
        sitting beside the label from small screens up.
      */}
      <ol className="mt-5 space-y-3">
        {scorecard.rows.map((row, i) => (
          <li
            key={row.label}
            className="rounded-lg border border-line bg-void/30 p-4"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex min-w-0 gap-3">
                <span className="mt-0.5 font-mono text-xs text-signal">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0">
                  <p className="text-[0.9375rem] font-medium text-ink">{row.label}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{row.detail}</p>
                </div>
              </div>
              <div className="shrink-0 text-center">
                <span
                  aria-hidden
                  className="block h-9 w-12 rounded border border-dashed border-line-strong"
                />
                <span className="mt-1 block font-mono text-[0.625rem] uppercase tracking-[0.08em] text-faint">
                  Score
                </span>
              </div>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-6">
        <p className="label-mono mb-3 text-faint">What your total means</p>
        <dl className="space-y-3">
          {scorecard.interpretation.map((entry) => (
            <div key={entry.range} className="flex flex-col gap-1 sm:flex-row sm:gap-4">
              <dt className="shrink-0 font-mono text-xs text-signal sm:w-16 sm:pt-0.5">
                {entry.range}
              </dt>
              <dd className="text-sm leading-relaxed text-ink-soft">{entry.meaning}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export function ActionStep({ action }: { action: string }) {
  return (
    <section className="rounded-card border border-signal/30 bg-signal/[0.06] p-5 sm:p-6">
      <p className="label-mono mb-2 text-signal">Do this now</p>
      <p className="text-[0.9375rem] leading-relaxed text-ink-soft">{action}</p>
    </section>
  );
}

export function Recap({ points }: { points: string[] }) {
  return (
    <section className="rounded-card border border-line bg-panel/60 p-5 sm:p-6">
      <p className="label-mono mb-3 text-faint">Recap</p>
      <ul className="space-y-2.5">
        {points.map((point, i) => (
          <li key={i} className="flex gap-3.5 text-[0.9375rem] leading-relaxed text-ink-soft">
            <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
