import type { Metadata } from "next";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";

import { courses, getCourse, getModule } from "@/content/academy";
import { cta } from "@/content/site";
import { getAcademyMember, signInHref } from "@/lib/academy";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/layout/JsonLd";
import { LessonView } from "@/components/academy/LessonView";
import { CtaLink, ArrowGlyph } from "@/components/ui/Cta";
import { SubscribeForm } from "@/components/forms/SubscribeForm";

type Params = Promise<{ course: string; module: string; lesson: string }>;

function find(params: { course: string; module: string; lesson: string }) {
  const course = getCourse(params.course);
  const courseModule = course ? getModule(course, params.module) : undefined;
  const lesson = courseModule?.lessons.find((l) => l.slug === params.lesson);
  return course && courseModule && lesson ? { course, courseModule, lesson } : null;
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const found = find(await params);
  if (!found) return {};
  const { course, courseModule, lesson } = found;
  return {
    ...pageMetadata({
      title: `${lesson.title} — ${course.title}`,
      description: lesson.summary,
      path: `/academy/${course.slug}/${courseModule.slug}/${lesson.slug}`,
    }),
    // Member lessons sit behind a sign-in, so they stay out of search results.
    ...(courseModule.access === "member" ? { robots: { index: false, follow: true } } : {}),
  };
}

/** Open lessons are prerendered. Member lessons render on request, after the access check. */
export function generateStaticParams() {
  return courses
    .filter((c) => !c.externalHref)
    .flatMap((course) =>
      course.modules
        .filter((m) => m.access === "open")
        .flatMap((m) => m.lessons.map((l) => ({ course: course.slug, module: m.slug, lesson: l.slug }))),
    );
}

export default async function LessonPage({ params }: { params: Params }) {
  const found = find(await params);
  if (!found) notFound();
  const { course, courseModule, lesson } = found;

  const coursePath = `/academy/${course.slug}`;
  const path = `${coursePath}/${courseModule.slug}/${lesson.slug}`;

  if (courseModule.access === "member" && !(await getAcademyMember())) {
    redirect(signInHref(path));
  }

  // Flatten the course into reading order to find previous and next.
  const order = course.modules.flatMap((m) =>
    m.lessons.map((l) => ({ module: m, lesson: l, href: `${coursePath}/${m.slug}/${l.slug}` })),
  );
  const index = order.findIndex((o) => o.href === path);
  const prev = index > 0 ? order[index - 1] : null;
  const next = index < order.length - 1 ? order[index + 1] : null;

  return (
    <article className="pb-20 pt-10 sm:pb-28 sm:pt-14">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Academy", path: "/academy" },
          { name: course.title, path: coursePath },
          { name: lesson.title, path },
        ])}
      />
      <div className="container-x">
        <div className="mx-auto max-w-2xl">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted">
            <Link href="/academy" className="py-1 transition-colors hover:text-ink">Academy</Link>
            <span aria-hidden className="text-faint">/</span>
            <Link href={coursePath} className="py-1 transition-colors hover:text-ink">{course.title}</Link>
            <span aria-hidden className="text-faint">/</span>
            <Link href={`${coursePath}#${courseModule.slug}`} className="py-1 transition-colors hover:text-ink">
              Module {courseModule.number}
            </Link>
          </nav>

          <header className="mt-6">
            <p className="label-mono text-signal">
              Module {courseModule.number} · Lesson {lesson.number} of {courseModule.lessons.length}
              {lesson.durationMinutes ? ` · ${lesson.durationMinutes} min read` : ""}
            </p>
            <h1 className="mt-3 text-balance text-3xl font-semibold leading-[1.08] tracking-[-0.03em] sm:text-[2.75rem]">
              {lesson.title}
            </h1>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-ink-soft">{lesson.summary}</p>
            {lesson.objective ? (
              <p className="mt-6 border-l-2 border-signal pl-4 text-[0.9375rem] leading-relaxed text-ink-soft">
                <span className="text-muted">Objective: </span>
                {lesson.objective}
              </p>
            ) : null}
            {courseModule.reviewed ? null : (
              <p className="mt-6 rounded-lg border border-line bg-panel px-4 py-3 text-sm leading-relaxed text-muted">
                Working draft. The method in this lesson is complete; Andrew&apos;s own examples
                from the products he is building are still being added.
              </p>
            )}
          </header>

          <div className="mt-10">
            <LessonView lesson={lesson} scope={path} />
          </div>

          <nav aria-label="Lesson" className="mt-12 grid gap-4 border-t border-line pt-8 sm:grid-cols-2">
            {prev ? (
              <Link href={prev.href} className="group block rounded-lg border border-line p-4 transition-colors hover:border-line-strong">
                <span className="label-mono">Previous</span>
                <span className="mt-1 block text-[0.9375rem] text-ink-soft group-hover:text-ink">{prev.lesson.title}</span>
              </Link>
            ) : (
              <span className="hidden sm:block" />
            )}
            {next ? (
              <Link href={next.href} className="group block rounded-lg border border-signal/50 p-4 transition-colors hover:border-signal sm:text-right">
                <span className="label-mono text-signal">
                  Next{next.module.slug !== courseModule.slug ? ` · Module ${next.module.number}` : ""}
                </span>
                <span className="mt-1 block text-[0.9375rem] text-ink">{next.lesson.title}</span>
              </Link>
            ) : (
              <Link href={coursePath} className="group block rounded-lg border border-signal/50 p-4 transition-colors hover:border-signal sm:text-right">
                <span className="label-mono text-signal">Course complete</span>
                <span className="mt-1 block text-[0.9375rem] text-ink">Back to the curriculum</span>
              </Link>
            )}
          </nav>

          {/* Every lesson ends with a next action beyond the next lesson. */}
          <aside className="mt-12 border-t border-line pt-10">
            {courseModule.access === "open" ? (
              <>
                <h2 className="text-xl font-semibold tracking-[-0.015em]">Get the rest as it is published.</h2>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">
                  Join the build notes to hear when modules are finished and new lessons go up.
                </p>
                <div className="mt-5">
                  <SubscribeForm origin={`lesson_${courseModule.slug}_${lesson.slug}`} />
                </div>
              </>
            ) : (
              <>
                <h2 className="text-xl font-semibold tracking-[-0.015em]">Stuck on this for your own product?</h2>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">
                  Coaching is direct, one-on-one help from Andrew on exactly this, applied to what you are building.
                </p>
                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <CtaLink href={cta.coaching.href} className="group" event="cta_click" eventProps={{ origin: "lesson_end", cta: "coaching" }}>
                    {cta.coaching.label} <ArrowGlyph className="group-hover:translate-x-0.5" />
                  </CtaLink>
                  <CtaLink href={cta.community.href} variant="secondary">
                    {cta.community.label}
                  </CtaLink>
                </div>
              </>
            )}
          </aside>
        </div>
      </div>
    </article>
  );
}
