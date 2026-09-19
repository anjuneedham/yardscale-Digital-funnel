import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { site } from "@/content/site";
import { educationProducts, getProduct } from "@/content/education";
import {
  categoryLabels,
  difficultyLabels,
  formatDuration,
  formatLabels,
} from "@/content/education/types";
import { getProductAccess } from "@/lib/education/access";
import { Section, SectionHeader } from "@/components/ui/Section";
import { BottomCta } from "@/components/layout/BottomCta";
import { JsonLd } from "@/components/layout/JsonLd";
import { CtaLink, ArrowGlyph } from "@/components/ui/Cta";
import { MetaPill, PriceBadge, ProductCard } from "@/components/education/ProductCard";

type Params = { params: Promise<{ product: string }> };

export function generateStaticParams() {
  return educationProducts.map((product) => ({ product: product.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { product: slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};

  return pageMetadata({
    title: product.title,
    description: product.description,
    path: `/education/${product.slug}`,
  });
}

export default async function ProductPage({ params }: Params) {
  const { product: slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const access = await getProductAccess(product.slug);
  const locked = !access.unlocked;
  const firstChapter = product.chapters[0];
  const nextProduct = product.nextStep ? getProduct(product.nextStep.slug) : undefined;

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Education Library", path: "/education" },
          { name: product.title, path: `/education/${product.slug}` },
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Course",
          name: product.title,
          description: product.description,
          url: `${site.url}/education/${product.slug}`,
          provider: {
            "@type": "Organization",
            name: site.name,
            url: site.url,
          },
          educationalLevel: difficultyLabels[product.difficulty],
          isAccessibleForFree: product.tier === "free",
        }}
      />

      {/* Hero */}
      <section className="relative isolate overflow-hidden pb-14 pt-14 sm:pb-20 sm:pt-20">
        <div aria-hidden className="grid-field pointer-events-none absolute inset-0 -z-10 opacity-70" />
        <div className="container-x">
          <nav aria-label="Breadcrumb" className="mb-6">
            <Link
              href="/education"
              className="-my-3 inline-flex items-center gap-2 py-3 font-mono text-xs uppercase tracking-[0.08em] text-faint transition-colors hover:text-ink-soft"
            >
              <span aria-hidden>&larr;</span> Education Library
            </Link>
          </nav>

          <div className="flex flex-wrap items-center gap-3">
            <PriceBadge price={product.price} />
            <MetaPill>{formatLabels[product.format]}</MetaPill>
            <MetaPill>{categoryLabels[product.category]}</MetaPill>
          </div>

          <h1 className="mt-6 max-w-4xl text-balance text-4xl font-semibold leading-[1.04] tracking-[-0.035em] sm:text-5xl lg:text-6xl">
            {product.title}
          </h1>

          <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-ink-soft sm:text-lg">
            {product.description}
          </p>

          <dl className="mt-9 flex flex-wrap gap-x-10 gap-y-5">
            <div>
              <dt className="label-mono text-faint">Difficulty</dt>
              <dd className="mt-1.5 text-[0.9375rem] text-ink">
                {difficultyLabels[product.difficulty]}
              </dd>
            </div>
            <div>
              <dt className="label-mono text-faint">Time to complete</dt>
              <dd className="mt-1.5 text-[0.9375rem] text-ink">
                {formatDuration(product.estimatedMinutes)}
              </dd>
            </div>
            <div>
              <dt className="label-mono text-faint">Parts</dt>
              <dd className="mt-1.5 text-[0.9375rem] text-ink">{product.chapters.length}</dd>
            </div>
            <div>
              <dt className="label-mono text-faint">Price</dt>
              <dd className="mt-1.5 text-[0.9375rem] text-ink">
                {product.price === null ? "Free" : `$${product.price}`}
              </dd>
            </div>
          </dl>

          <div className="mt-9">
            {locked ? (
              <div className="rounded-card border border-line bg-panel/60 p-5 sm:p-6">
                <p className="label-mono mb-2 text-warn">Not yet available for purchase</p>
                <p className="max-w-xl text-[0.9375rem] leading-relaxed text-ink-soft">
                  Checkout for the paid playbooks is not connected yet. The full curriculum,
                  resources and outcomes are listed below so you can see exactly what it covers.
                </p>
                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <CtaLink href="/education/free" size="lg" className="group w-full sm:w-auto">
                    Start with the free resources
                    <ArrowGlyph className="group-hover:translate-x-0.5" />
                  </CtaLink>
                </div>
              </div>
            ) : (
              firstChapter && (
                <CtaLink
                  href={`/education/${product.slug}/${firstChapter.slug}`}
                  size="lg"
                  className="group"
                >
                  {product.tier === "free" ? "Start free" : "Start reading"}
                  <ArrowGlyph className="group-hover:translate-x-0.5" />
                </CtaLink>
              )
            )}
          </div>
        </div>
      </section>

      {/* What you'll learn + who it's for */}
      <Section divider>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="label-mono mb-5 flex items-center gap-3">
              <span aria-hidden className="signal-rule" />
              What you&rsquo;ll learn
            </p>
            <ul className="space-y-3">
              {product.whatYouWillLearn.map((item) => (
                <li key={item} className="flex gap-3.5 text-[0.9375rem] leading-relaxed text-ink-soft">
                  <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="label-mono mb-5 flex items-center gap-3">
              <span aria-hidden className="signal-rule" />
              Who it&rsquo;s for
            </p>
            <ul className="space-y-3">
              {product.whoItIsFor.map((item) => (
                <li key={item} className="flex gap-3.5 text-[0.9375rem] leading-relaxed text-ink-soft">
                  <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* What you'll build */}
      <Section divider tone="raised" size="compact">
        <SectionHeader
          eyebrow="What you'll build"
          title="You finish with assets, not notes."
        />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {product.whatYouWillBuild.map((item, i) => (
            <li
              key={item}
              className="flex gap-4 rounded-card border border-line bg-panel/60 p-5"
            >
              <span className="font-mono text-xs text-signal">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-[0.9375rem] leading-relaxed text-ink-soft">{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* Curriculum */}
      <Section divider grid>
        <SectionHeader
          eyebrow="Curriculum"
          title={`${product.chapters.length} parts, in order.`}
          lede="Each part ends with something you do, not just something you read."
        />
        <ol className="mt-12 space-y-3">
          {product.chapters.map((chapter) => {
            const href = `/education/${product.slug}/${chapter.slug}`;
            const inner = (
              <>
                <div className="flex items-start gap-5">
                  <span className="mt-0.5 font-mono text-xs text-signal">
                    {String(chapter.number).padStart(2, "0")}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-pretty text-base font-semibold tracking-[-0.01em] text-ink sm:text-lg">
                      {chapter.title}
                    </h3>
                    <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-muted">
                      {chapter.summary}
                    </p>
                    <div className="mt-3 flex flex-wrap items-center gap-2">
                      <MetaPill>{formatDuration(chapter.durationMinutes)}</MetaPill>
                      {chapter.checklist ? <MetaPill>Checklist</MetaPill> : null}
                      {chapter.template ? <MetaPill>Template</MetaPill> : null}
                      {chapter.scorecard ? <MetaPill>Scorecard</MetaPill> : null}
                      {chapter.exercise ? <MetaPill>Exercise</MetaPill> : null}
                    </div>
                  </div>
                  {locked ? (
                    <svg
                      aria-hidden
                      viewBox="0 0 16 16"
                      className="mt-1 h-4 w-4 shrink-0 text-faint"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <rect x="3.5" y="7" width="9" height="6.5" rx="1.5" />
                      <path d="M5.5 7V5a2.5 2.5 0 0 1 5 0v2" />
                    </svg>
                  ) : null}
                </div>
              </>
            );

            return (
              <li key={chapter.slug}>
                {locked ? (
                  <div className="rounded-card border border-line bg-panel/40 p-5 sm:p-6">{inner}</div>
                ) : (
                  <Link
                    href={href}
                    className="block rounded-card border border-line bg-panel/60 p-5 transition-colors duration-200 hover:border-line-strong sm:p-6"
                  >
                    {inner}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </Section>

      {/* Included resources */}
      <Section divider tone="raised" size="compact">
        <SectionHeader eyebrow="Included" title="Resources you keep." />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {product.includedResources.map((resource) => (
            <li key={resource.title} className="rounded-card border border-line bg-panel/60 p-5">
              <p className="text-[0.9375rem] font-medium text-ink">{resource.title}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{resource.detail}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* FAQ */}
      <Section divider>
        <SectionHeader eyebrow="Questions" title="Before you start." />
        <dl className="mt-12 max-w-3xl divide-y divide-line border-t border-line">
          {product.faqs.map((faq) => (
            <div key={faq.question} className="py-7">
              <dt className="text-pretty text-base font-semibold tracking-[-0.01em] text-ink sm:text-lg">
                {faq.question}
              </dt>
              <dd className="mt-3 text-pretty text-[0.9375rem] leading-relaxed text-ink-soft">
                {faq.answer}
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      {/* Next step */}
      {nextProduct && product.nextStep ? (
        <Section divider tone="raised" size="compact">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-16">
            <div>
              <p className="label-mono mb-4 flex items-center gap-3">
                <span aria-hidden className="signal-rule" />
                What next
              </p>
              <p className="text-pretty text-lg leading-relaxed text-ink-soft">
                {product.nextStep.pitch}
              </p>
            </div>
            <ProductCard product={nextProduct} />
          </div>
        </Section>
      ) : null}

      <BottomCta
        title="Want this built rather than taught?"
        copy="This teaches the method. If you would rather have the offer, funnel and distribution built for you, start with the bottleneck."
        origin={`education-product-${product.slug}`}
      />
    </>
  );
}
