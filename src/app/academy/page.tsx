import type { Metadata } from "next";
import Link from "next/link";

import { courseHref, courses, flagship, lessonCount, plannedCourses } from "@/content/academy";
import { educationProducts } from "@/content/education";
import { community, cta } from "@/content/site";
import { pageMetadata, breadcrumbJsonLd, courseJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/layout/JsonLd";
import { PageHero } from "@/components/layout/PageHero";
import { BottomCta } from "@/components/layout/BottomCta";
import { Section, SectionHeader } from "@/components/ui/Section";
import { CtaLink, ArrowGlyph } from "@/components/ui/Cta";
import { Subscribe } from "@/components/home/Subscribe";

export const metadata: Metadata = pageMetadata({
  title: "Academy — courses for SaaS founders",
  description:
    "Text-based courses for building a SaaS from idea to customers. Start with Zero to SaaS: The Founder Operating System — thirteen modules of lessons, exercises, templates and checklists.",
  path: "/academy",
});

export default function AcademyPage() {
  const others = courses.filter((c) => c.slug !== flagship.slug);
  const firstLesson = `/academy/${flagship.slug}/${flagship.modules[0].slug}/${flagship.modules[0].lessons[0].slug}`;

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Academy", path: "/academy" },
          ]),
          courseJsonLd({
            name: `${flagship.title}: ${flagship.subtitle}`,
            description: flagship.description,
            path: `/academy/${flagship.slug}`,
          }),
        ]}
      />

      <PageHero
        eyebrow="Academy"
        title="Learn the whole process, in order."
        lede={
          <p>
            Written courses you can read at your own pace and act on the same day. Every
            lesson ends with an exercise and an assignment, because reading about building
            a SaaS is not the same as building one.
          </p>
        }
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <CtaLink href={firstLesson} size="lg" className="group" event="cta_click" eventProps={{ origin: "academy_hero", cta: "first_lesson" }}>
            Read the first lesson <ArrowGlyph className="group-hover:translate-x-0.5" />
          </CtaLink>
          <CtaLink href={`/academy/${flagship.slug}`} variant="secondary" size="lg">
            See the full curriculum
          </CtaLink>
        </div>
      </PageHero>

      <Section divider tone="raised">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <div>
            <p className="label-mono text-signal">Flagship course</p>
            <h2 className="mt-4 text-balance text-4xl font-semibold leading-[1.04] tracking-[-0.03em] sm:text-5xl">
              {flagship.title}
              <span className="block text-muted">{flagship.subtitle}</span>
            </h2>
            <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-ink-soft sm:text-lg">
              {flagship.description}
            </p>
            <dl className="mt-8 grid max-w-xl grid-cols-3 border-y border-line py-5">
              <div>
                <dt className="label-mono">Modules</dt>
                <dd className="mt-1 text-2xl font-semibold">{flagship.modules.length}</dd>
              </div>
              <div>
                <dt className="label-mono">Lessons</dt>
                <dd className="mt-1 text-2xl font-semibold">{lessonCount(flagship)}</dd>
              </div>
              <div>
                <dt className="label-mono">Format</dt>
                <dd className="mt-1 text-2xl font-semibold">Text</dd>
              </div>
            </dl>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted">
              Module 0 is open to read now. The remaining modules are free with a sign-in
              while the course is a working draft: Andrew is still adding his own examples,
              and each module is marked until that is done.
            </p>
            <div className="mt-8">
              <CtaLink href={`/academy/${flagship.slug}`} className="group">
                Open the course <ArrowGlyph className="group-hover:translate-x-0.5" />
              </CtaLink>
            </div>
          </div>

          <ol className="self-start border-t border-line">
            {flagship.modules.map((module) => (
              <li key={module.slug} className="border-b border-line">
                <Link
                  href={`/academy/${flagship.slug}#${module.slug}`}
                  className="group flex items-baseline gap-4 py-3 transition-colors"
                >
                  <span className="w-7 shrink-0 font-mono text-xs text-signal">
                    {String(module.number).padStart(2, "0")}
                  </span>
                  <span className="text-[0.9375rem] leading-snug text-ink-soft group-hover:text-ink">
                    {module.title}
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section divider>
        <SectionHeader
          eyebrow="More to read"
          title="Other courses and guides."
          lede="Earlier YardScale material that is still useful once you have a product to grow."
        />
        <ul className="mt-10 border-t border-line">
          {others.map((course) => (
            <li key={course.slug} className="border-b border-line">
              <Link
                href={courseHref(course)}
                className="group grid gap-2 py-6 lg:grid-cols-[18rem_1fr_auto] lg:items-center lg:gap-10"
              >
                <h3 className="text-xl font-semibold tracking-[-0.02em]">{course.title}</h3>
                <p className="max-w-2xl text-pretty text-[0.9375rem] leading-relaxed text-muted">
                  {course.description}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-medium group-hover:text-signal">
                  Open <ArrowGlyph className="group-hover:translate-x-0.5" />
                </span>
              </Link>
            </li>
          ))}
          <li className="border-b border-line">
            <Link
              href="/education"
              className="group grid gap-2 py-6 lg:grid-cols-[18rem_1fr_auto] lg:items-center lg:gap-10"
            >
              <h3 className="text-xl font-semibold tracking-[-0.02em]">Guides library</h3>
              <p className="max-w-2xl text-pretty text-[0.9375rem] leading-relaxed text-muted">
                {educationProducts.length} shorter playbooks on websites, landing pages, funnels,
                app building and getting first clients.
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-medium group-hover:text-signal">
                Browse <ArrowGlyph className="group-hover:translate-x-0.5" />
              </span>
            </Link>
          </li>
          {plannedCourses.map((course) => (
            <li key={course.title} className="grid gap-2 border-b border-line py-6 lg:grid-cols-[18rem_1fr_auto] lg:items-center lg:gap-10">
              <h3 className="text-xl font-semibold tracking-[-0.02em] text-ink-soft">{course.title}</h3>
              <p className="max-w-2xl text-pretty text-[0.9375rem] leading-relaxed text-muted">{course.summary}</p>
              <span className="font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-warn">Planned</span>
            </li>
          ))}
        </ul>
        <p className="mt-8 max-w-2xl text-sm leading-relaxed text-muted">
          {community.skool.href
            ? "The courses also run as a guided classroom in the Skool community."
            : "A guided classroom version of the courses is planned for the Skool community. It is not open yet."}{" "}
          <Link href={cta.community.href} className="text-ink underline underline-offset-4 hover:text-signal">
            About the community
          </Link>
        </p>
      </Section>

      <Subscribe
        origin="academy_subscribe"
        title="Get each new lesson as it is published."
        copy="The course is being written and reviewed in the open. Join the build notes to hear when a module is finished or a new course starts."
      />

      <BottomCta
        origin="academy"
        title="Want help applying it to your product?"
        copy="The course gives you the process. Coaching puts Andrew alongside you while you run it on your own SaaS."
        primary={cta.coaching}
        secondary={cta.partnership}
      />
    </>
  );
}
