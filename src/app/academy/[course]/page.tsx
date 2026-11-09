import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { courses, getCourse, lessonCount } from "@/content/academy";
import { cta } from "@/content/site";
import { getAcademyMember, signInHref } from "@/lib/academy";
import { pageMetadata, breadcrumbJsonLd, courseJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/layout/JsonLd";
import { PageHero } from "@/components/layout/PageHero";
import { BottomCta } from "@/components/layout/BottomCta";
import { Section, SectionHeader } from "@/components/ui/Section";
import { CtaLink, ArrowGlyph } from "@/components/ui/Cta";
import { Curriculum } from "@/components/academy/Curriculum";

type Params = Promise<{ course: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const course = getCourse((await params).course);
  if (!course) return {};
  return pageMetadata({
    title: `${course.title}: ${course.subtitle}`,
    description: course.description,
    path: `/academy/${course.slug}`,
  });
}

export function generateStaticParams() {
  return courses.filter((c) => !c.externalHref).map((c) => ({ course: c.slug }));
}

export default async function CoursePage({ params }: { params: Params }) {
  const course = getCourse((await params).course);
  if (!course) notFound();

  const member = await getAcademyMember();
  const path = `/academy/${course.slug}`;
  const first = course.modules[0];
  const firstLesson = `${path}/${first.slug}/${first.lessons[0].slug}`;
  const hasLocked = course.modules.some((m) => m.access === "member");

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Academy", path: "/academy" },
            { name: course.title, path },
          ]),
          courseJsonLd({ name: `${course.title}: ${course.subtitle}`, description: course.description, path }),
        ]}
      />

      <PageHero
        eyebrow={`Academy · ${course.modules.length} modules · ${lessonCount(course)} lessons`}
        title={`${course.title}: ${course.subtitle}`}
        lede={<p>{course.description}</p>}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <CtaLink href={firstLesson} size="lg" className="group" event="cta_click" eventProps={{ origin: "course_hero", cta: "first_lesson" }}>
            Start with Module {first.number} <ArrowGlyph className="group-hover:translate-x-0.5" />
          </CtaLink>
          {hasLocked && !member ? (
            <CtaLink href={signInHref(path)} variant="secondary" size="lg">
              Sign in free to unlock every module
            </CtaLink>
          ) : null}
        </div>
        {member ? (
          <p className="mt-5 text-sm text-muted">Signed in as {member.name}. Every module is unlocked.</p>
        ) : null}
      </PageHero>

      <Section divider tone="raised">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="label-mono">Who it is for</h2>
            <ul className="mt-4 border-t border-line">
              {course.audience.map((item) => (
                <li key={item} className="border-b border-line py-4 text-[0.9375rem] leading-relaxed text-ink-soft">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="label-mono">What you finish with</h2>
            <ul className="mt-4 border-t border-line">
              {course.outcomes.map((item) => (
                <li key={item} className="border-b border-line py-4 text-[0.9375rem] leading-relaxed text-ink-soft">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-10 max-w-3xl text-sm leading-relaxed text-muted">
          {course.format} The course describes a process and the work to do at each stage. It
          does not guarantee customers, revenue or a successful product.
          {course.price ? ` Price: ${course.price}.` : ""}
        </p>
      </Section>

      <Section divider id="curriculum">
        <SectionHeader
          eyebrow="Curriculum"
          title="Thirteen modules, seven stages."
          lede="Work through them in order. Each module assumes you have done the assignment from the one before."
        />
        <div className="mt-10">
          <Curriculum course={course} isMember={Boolean(member)} />
        </div>
      </Section>

      <BottomCta
        origin={`course_${course.slug}`}
        title="Want Andrew working through it with you?"
        copy="Coaching applies this process to your product, one decision at a time. Partnerships go further, for a small number of projects."
        primary={cta.coaching}
        secondary={cta.partnership}
      />
    </>
  );
}
