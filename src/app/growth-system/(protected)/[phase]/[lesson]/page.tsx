import Link from "next/link";
import { notFound } from "next/navigation";

import { getProgress } from "@/lib/growth-system/progress";
import { isLessonComplete } from "@/lib/growth-system/progress-utils";
import { getPhase } from "@/content/growth-system/phases";
import { LessonBlocks } from "@/components/growth-system/LessonBlocks";
import { LessonCompleteButton } from "@/components/growth-system/LessonCompleteButton";

export default async function LessonPage({
  params,
}: {
  params: Promise<{ phase: string; lesson: string }>;
}) {
  const { phase: phaseSlug, lesson: lessonSlug } = await params;
  const phase = getPhase(phaseSlug);
  if (!phase || phase.status !== "available") notFound();

  const index = phase.lessons.findIndex((l) => l.slug === lessonSlug);
  if (index === -1) notFound();

  const lesson = phase.lessons[index];
  const prev = index > 0 ? phase.lessons[index - 1] : null;
  const next = index < phase.lessons.length - 1 ? phase.lessons[index + 1] : null;

  const progress = await getProgress();
  const done = isLessonComplete(progress, phase.slug, lesson.slug);

  const nextHref = next ? `/growth-system/${phase.slug}/${next.slug}` : `/growth-system/${phase.slug}`;

  return (
    <article className="mx-auto max-w-2xl">
      {/* Breadcrumb */}
      <nav className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted">
        <Link href="/growth-system/dashboard" className="transition-colors hover:text-ink">Dashboard</Link>
        <span className="text-faint">/</span>
        <Link href={`/growth-system/${phase.slug}`} className="transition-colors hover:text-ink">
          {phase.code}
        </Link>
      </nav>

      {/* Header */}
      <header className="mt-5">
        <p className="label-mono text-signal">
          Phase {phase.number} · Lesson {lesson.number} of {phase.lessons.length}
        </p>
        <h1 className="mt-3 text-balance text-3xl font-semibold leading-[1.1] tracking-[-0.03em] sm:text-4xl">
          {lesson.title}
        </h1>
        <p className="mt-3 text-pretty text-base leading-relaxed text-ink-soft">{lesson.summary}</p>
        {lesson.objective ? (
          <div className="mt-6 rounded-lg border border-line bg-panel/60 px-5 py-4">
            <p className="label-mono">Objective</p>
            <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-ink-soft">{lesson.objective}</p>
          </div>
        ) : null}
      </header>

      {/* Body */}
      <div className="mt-8">
        <LessonBlocks blocks={lesson.blocks} />
      </div>

      {/* Exercise */}
      {lesson.exercise ? (
        <section className="mt-8 rounded-card border border-line bg-raised/40 p-6 sm:p-7">
          <p className="label-mono text-signal">Exercise</p>
          <h2 className="mt-2 text-lg font-semibold tracking-[-0.01em]">{lesson.exercise.title}</h2>
          <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-soft">{lesson.exercise.prompt}</p>
          {lesson.exercise.steps ? (
            <ol className="mt-4 space-y-2.5">
              {lesson.exercise.steps.map((step, i) => (
                <li key={i} className="flex gap-3.5 text-sm leading-relaxed text-muted">
                  <span className="font-mono text-xs text-signal">{String(i + 1).padStart(2, "0")}</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          ) : null}
        </section>
      ) : null}

      {/* Implementation task */}
      {lesson.implementationTask ? (
        <section className="mt-6 rounded-card border border-signal/30 bg-signal/[0.06] p-6 sm:p-7">
          <p className="label-mono text-signal">Implementation task</p>
          <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-soft">{lesson.implementationTask}</p>
        </section>
      ) : null}

      {/* Assets */}
      {lesson.assets && lesson.assets.length > 0 ? (
        <section className="mt-6">
          <p className="label-mono mb-3">Assets</p>
          <ul className="space-y-2.5">
            {lesson.assets.map((asset) => (
              <li key={asset.id} className="flex items-center justify-between gap-4 rounded-lg border border-line bg-panel/60 px-4 py-3.5">
                <span className="min-w-0">
                  <span className="block text-[0.9375rem] font-medium text-ink">{asset.title}</span>
                  <span className="mt-0.5 block text-sm text-muted">{asset.description}</span>
                </span>
                {asset.href ? (
                  <a href={asset.href} className="shrink-0 text-sm text-signal underline underline-offset-4" target="_blank" rel="noopener noreferrer">
                    Open
                  </a>
                ) : (
                  <span className="shrink-0 font-mono text-[0.625rem] uppercase tracking-[0.12em] text-faint">Included</span>
                )}
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {/* Recap */}
      {lesson.recap && lesson.recap.length > 0 ? (
        <section className="mt-8 border-t border-line pt-8">
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

      {/* Complete + next */}
      <div className="mt-10 border-t border-line pt-8">
        <LessonCompleteButton
          phaseSlug={phase.slug}
          lessonSlug={lesson.slug}
          initialComplete={done}
          nextHref={nextHref}
        />
      </div>

      {/* Prev / next nav */}
      <nav className="mt-8 flex items-center justify-between gap-4 border-t border-line pt-6 text-sm">
        {prev ? (
          <Link href={`/growth-system/${phase.slug}/${prev.slug}`} className="group min-w-0 text-muted transition-colors hover:text-ink">
            <span className="block text-xs text-faint">Previous</span>
            <span className="block truncate">{prev.title}</span>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link href={`/growth-system/${phase.slug}/${next.slug}`} className="group min-w-0 text-right text-muted transition-colors hover:text-ink">
            <span className="block text-xs text-faint">Next</span>
            <span className="block truncate">{next.title}</span>
          </Link>
        ) : (
          <Link href={`/growth-system/${phase.slug}`} className="text-right text-muted transition-colors hover:text-ink">
            <span className="block text-xs text-faint">Finish</span>
            <span className="block">Back to {phase.code}</span>
          </Link>
        )}
      </nav>
    </article>
  );
}
