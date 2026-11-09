import type { Lesson } from "@/content/academy/types";
import { LessonBlocks } from "@/components/growth-system/LessonBlocks";
import { Checklist } from "@/components/education/Checklist";

/**
 * Renders one Academy lesson: the teaching blocks, then the exercise,
 * template, implementation assignment, checklist and recap. Pure presentation
 * — all content comes from src/content/academy.
 */
export function LessonView({ lesson, scope }: { lesson: Lesson; scope: string }) {
  return (
    <>
      <LessonBlocks blocks={lesson.blocks} />

      {lesson.exercise ? (
        <section className="mt-10 border-t border-line pt-8">
          <p className="label-mono text-signal">Exercise</p>
          <h2 className="mt-2 text-xl font-semibold tracking-[-0.015em]">{lesson.exercise.title}</h2>
          <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-soft">{lesson.exercise.prompt}</p>
          {lesson.exercise.steps ? (
            <ol className="mt-5 space-y-3">
              {lesson.exercise.steps.map((step, i) => (
                <li key={i} className="flex gap-4 text-[0.9375rem] leading-relaxed text-ink-soft">
                  <span className="pt-0.5 font-mono text-xs text-signal">{String(i + 1).padStart(2, "0")}</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          ) : null}
        </section>
      ) : null}

      {lesson.template ? (
        <section className="mt-10 border-t border-line pt-8">
          <p className="label-mono text-signal">Template</p>
          <h2 className="mt-2 text-xl font-semibold tracking-[-0.015em]">{lesson.template.title}</h2>
          <p className="mt-2 text-sm text-muted">Copy this into your own document and fill it in.</p>
          <pre className="mt-4 overflow-x-auto whitespace-pre-wrap rounded-card border border-line bg-panel p-5 font-mono text-[0.8125rem] leading-relaxed text-ink-soft">
            {lesson.template.body}
          </pre>
        </section>
      ) : null}

      {lesson.implementationTask ? (
        <section className="mt-10 rounded-card border border-signal/40 bg-signal/[0.06] p-6 sm:p-7">
          <p className="label-mono text-signal">Implementation assignment</p>
          <p className="mt-2 text-base leading-relaxed text-ink">{lesson.implementationTask}</p>
        </section>
      ) : null}

      {lesson.checklist && lesson.checklist.length > 0 ? (
        <section className="mt-10">
          <Checklist
            scope={scope}
            checklist={{ title: "Done when", groups: [{ items: lesson.checklist }] }}
          />
        </section>
      ) : null}

      {lesson.recap && lesson.recap.length > 0 ? (
        <section className="mt-10 border-t border-line pt-8">
          <p className="label-mono mb-3">Recap</p>
          <ul className="space-y-2.5">
            {lesson.recap.map((item, i) => (
              <li key={i} className="flex gap-3.5 text-[0.9375rem] leading-relaxed text-ink-soft">
                <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </>
  );
}
