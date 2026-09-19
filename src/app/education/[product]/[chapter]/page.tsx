import type { Metadata } from "next";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";

import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import {
  educationProducts,
  getChapter,
  nextChapter,
  previousChapter,
} from "@/content/education";
import { formatDuration } from "@/content/education/types";
import { getProductAccess } from "@/lib/education/access";
import { Section } from "@/components/ui/Section";
import { JsonLd } from "@/components/layout/JsonLd";
import { LessonBlocks } from "@/components/growth-system/LessonBlocks";
import { Checklist } from "@/components/education/Checklist";
import {
  ActionStep,
  ExerciseBlock,
  Recap,
  ScorecardBlock,
  TemplateBlock,
} from "@/components/education/ChapterExtras";
import { MetaPill } from "@/components/education/ProductCard";
import { CtaLink, ArrowGlyph } from "@/components/ui/Cta";

type Params = { params: Promise<{ product: string; chapter: string }> };

export function generateStaticParams() {
  return educationProducts.flatMap((product) =>
    product.chapters.map((chapter) => ({
      product: product.slug,
      chapter: chapter.slug,
    })),
  );
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { product: productSlug, chapter: chapterSlug } = await params;
  const found = getChapter(productSlug, chapterSlug);
  if (!found) return {};

  return pageMetadata({
    title: `${found.chapter.title} — ${found.product.shortTitle ?? found.product.title}`,
    description: found.chapter.summary,
    path: `/education/${productSlug}/${chapterSlug}`,
  });
}

export default async function ChapterPage({ params }: Params) {
  const { product: productSlug, chapter: chapterSlug } = await params;
  const found = getChapter(productSlug, chapterSlug);
  if (!found) notFound();

  const { product, chapter } = found;

  const access = await getProductAccess(product.slug);
  if (!access.unlocked) redirect(`/education/${product.slug}`);

  const next = nextChapter(product.slug, chapter.slug);
  const previous = previousChapter(product.slug, chapter.slug);
  const scope = `${product.slug}/${chapter.slug}`;

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Education Library", path: "/education" },
          { name: product.title, path: `/education/${product.slug}` },
          { name: chapter.title, path: `/education/${product.slug}/${chapter.slug}` },
        ])}
      />

      <article>
        {/* Chapter hero */}
        <section className="relative isolate overflow-hidden border-b border-line pb-12 pt-14 sm:pb-14 sm:pt-20">
          <div
            aria-hidden
            className="grid-field pointer-events-none absolute inset-0 -z-10 opacity-60"
          />
          <div className="container-x">
            <nav aria-label="Breadcrumb" className="mb-6">
              <Link
                href={`/education/${product.slug}`}
                className="-my-3 inline-flex items-center gap-2 py-3 font-mono text-xs uppercase tracking-[0.08em] text-faint transition-colors hover:text-ink-soft"
              >
                <span aria-hidden>&larr;</span>{" "}
                {product.shortTitle ?? product.title}
              </Link>
            </nav>

            <p className="label-mono text-signal">
              Part {chapter.number} of {product.chapters.length}
            </p>

            <h1 className="mt-4 max-w-3xl text-balance text-3xl font-semibold leading-[1.06] tracking-[-0.03em] sm:text-4xl lg:text-5xl">
              {chapter.title}
            </h1>

            <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-ink-soft sm:text-lg">
              {chapter.summary}
            </p>

            <div className="mt-7">
              <MetaPill>{formatDuration(chapter.durationMinutes)}</MetaPill>
            </div>
          </div>
        </section>

        {/* Body */}
        <Section size="compact">
          <div className="max-w-3xl space-y-10">
            <LessonBlocks blocks={chapter.blocks} />

            {chapter.template ? <TemplateBlock template={chapter.template} /> : null}
            {chapter.scorecard ? <ScorecardBlock scorecard={chapter.scorecard} /> : null}
            {chapter.exercise ? <ExerciseBlock exercise={chapter.exercise} /> : null}
            {chapter.checklist ? (
              <Checklist checklist={chapter.checklist} scope={scope} />
            ) : null}
            {chapter.actionStep ? <ActionStep action={chapter.actionStep} /> : null}
            {chapter.recap ? <Recap points={chapter.recap} /> : null}
          </div>
        </Section>

        {/* Chapter navigation */}
        <Section divider size="compact">
          <nav aria-label="Chapter navigation" className="max-w-3xl">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-stretch sm:justify-between">
              {previous ? (
                <Link
                  href={`/education/${product.slug}/${previous.slug}`}
                  className="group flex-1 rounded-card border border-line bg-panel/60 p-5 transition-colors hover:border-line-strong"
                >
                  <p className="label-mono mb-2 text-faint">Previous</p>
                  <p className="text-[0.9375rem] font-medium text-ink">{previous.title}</p>
                </Link>
              ) : (
                <div className="hidden flex-1 sm:block" />
              )}

              {next ? (
                <Link
                  href={`/education/${product.slug}/${next.slug}`}
                  className="group flex-1 rounded-card border border-line bg-panel/60 p-5 text-right transition-colors hover:border-signal/60"
                >
                  <p className="label-mono mb-2 text-signal">Next</p>
                  <p className="text-[0.9375rem] font-medium text-ink">{next.title}</p>
                </Link>
              ) : (
                <div className="flex-1 rounded-card border border-signal/30 bg-signal/[0.06] p-5">
                  <p className="label-mono mb-2 text-signal">Finished</p>
                  <p className="text-[0.9375rem] leading-relaxed text-ink-soft">
                    That is the last part of {product.shortTitle ?? product.title}.
                  </p>
                </div>
              )}
            </div>

            {!next && product.nextStep ? (
              <div className="mt-10 rounded-card border border-line bg-panel/60 p-6 sm:p-8">
                <p className="label-mono mb-3 text-faint">What next</p>
                <p className="text-pretty text-base leading-relaxed text-ink-soft">
                  {product.nextStep.pitch}
                </p>
                <div className="mt-6">
                  <CtaLink href={`/education/${product.nextStep.slug}`} className="group">
                    See it
                    <ArrowGlyph className="group-hover:translate-x-0.5" />
                  </CtaLink>
                </div>
              </div>
            ) : null}

            <div className="mt-10">
              <Link
                href={`/education/${product.slug}`}
                className="-my-3 inline-flex items-center gap-2 py-3 font-mono text-xs uppercase tracking-[0.08em] text-faint transition-colors hover:text-ink-soft"
              >
                <span aria-hidden>&larr;</span> All parts
              </Link>
            </div>
          </nav>
        </Section>
      </article>
    </>
  );
}
