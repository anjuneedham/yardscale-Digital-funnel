import Link from "next/link";
import type { Course } from "@/content/academy/types";

/** The module-by-module curriculum for a course, with access shown per module. */
export function Curriculum({ course, isMember }: { course: Course; isMember: boolean }) {
  return (
    <ol className="border-t border-line">
      {course.modules.map((module) => {
        const locked = module.access === "member" && !isMember;
        return (
          <li key={module.slug} id={module.slug} className="border-b border-line py-7 sm:py-9" style={{ scrollMarginTop: "5.5rem" }}>
            <div className="grid gap-5 lg:grid-cols-[1fr_1.3fr] lg:gap-12">
              <div>
                <p className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[0.6875rem] uppercase tracking-[0.12em]">
                  <span className="text-signal">Module {module.number}</span>
                  <span className="text-muted">{module.stage}</span>
                </p>
                <h3 className="mt-2 text-xl font-semibold leading-snug tracking-[-0.02em] sm:text-2xl">
                  {module.title}
                </h3>
                <p className="mt-3 text-pretty text-[0.9375rem] leading-relaxed text-muted">{module.summary}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  <span className="text-muted">You finish with: </span>
                  {module.outcome}
                </p>
              </div>

              <div>
                <p className="mb-2 font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-muted">
                  {module.access === "open"
                    ? "Open to read"
                    : locked
                      ? "Free with sign-in"
                      : "Unlocked"}
                  {module.reviewed ? "" : " · Working draft"}
                </p>
                <ul className="border-t border-line">
                  {module.lessons.map((lesson) => (
                    <li key={lesson.slug} className="border-b border-line">
                      <Link
                        href={`/academy/${course.slug}/${module.slug}/${lesson.slug}`}
                        className="group flex items-center justify-between gap-4 py-3.5 transition-colors hover:text-signal"
                      >
                        <span className="flex min-w-0 gap-3">
                          <span className="pt-0.5 font-mono text-xs text-muted">
                            {module.number}.{lesson.number}
                          </span>
                          <span className="text-[0.9375rem] leading-snug text-ink group-hover:text-signal">
                            {lesson.title}
                          </span>
                        </span>
                        <span className="shrink-0 font-mono text-[0.6875rem] uppercase tracking-[0.1em] text-muted">
                          {lesson.durationMinutes ? `${lesson.durationMinutes} min` : ""}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
