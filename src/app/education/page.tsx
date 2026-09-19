import type { Metadata } from "next";
import Link from "next/link";

import { pageMetadata } from "@/lib/seo";
import { site } from "@/content/site";
import {
  activeCategories,
  categoryLabels,
  educationProducts,
  library,
  productsByTier,
} from "@/content/education";
import { Section, SectionHeader } from "@/components/ui/Section";
import { PageHero } from "@/components/layout/PageHero";
import { BottomCta } from "@/components/layout/BottomCta";
import { JsonLd } from "@/components/layout/JsonLd";
import { CtaLink, ArrowGlyph } from "@/components/ui/Cta";
import { ProductGrid } from "@/components/education/ProductCard";

export const metadata: Metadata = pageMetadata({
  title: "Education Library",
  description:
    "Practical playbooks for people building businesses, websites, apps, funnels and customer-acquisition systems. Free mini-courses and guides, plus paid tutorials and blueprints.",
  path: "/education",
  keywords: [
    "build your first website",
    "funnel building guide",
    "client acquisition playbook",
    "landing page tutorial",
    "app building starter guide",
  ],
});

export default function EducationPage() {
  const free = productsByTier("free");
  const paid = productsByTier("paid");
  const categories = activeCategories();

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: `${site.name} ${library.title}`,
          itemListElement: educationProducts.map((product, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: product.title,
            description: product.summary,
            url: `${site.url}/education/${product.slug}`,
          })),
        }}
      />

      <PageHero
        eyebrow={library.title}
        title={library.hero}
        lede={library.lede}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <CtaLink href="#free" size="lg" className="group w-full sm:w-auto">
            Start with the free resources
            <ArrowGlyph className="group-hover:translate-x-0.5" />
          </CtaLink>
          <CtaLink href="#paid" variant="secondary" size="lg" className="w-full sm:w-auto">
            See the paid playbooks
          </CtaLink>
        </div>
      </PageHero>

      {/* Browse by category */}
      <Section divider size="compact">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="label-mono text-faint">Browse by topic</p>
          <nav aria-label="Browse by topic">
            <ul className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <li key={category}>
                  <Link
                    href={`#${category}`}
                    className="inline-flex min-h-10 items-center rounded-full border border-line bg-panel/60 px-4 text-sm text-ink-soft transition-colors hover:border-signal/60 hover:text-ink"
                  >
                    {categoryLabels[category]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Section>

      {/* Free */}
      <Section id="free" divider grid>
        <SectionHeader
          eyebrow="Free resources"
          title="Start here. No payment, no catch."
          lede="Three complete resources covering the things people get stuck on first: building a site that works, finding what is leaking in a funnel, and getting a first client."
        />
        <div className="mt-12">
          <ProductGrid products={free} />
        </div>
      </Section>

      {/* Paid */}
      <Section id="paid" divider tone="raised">
        <SectionHeader
          eyebrow="Paid playbooks"
          title="Go deeper on one thing."
          lede="Focused, implementation-led products for when you know what you are building and want the complete method rather than an overview."
        />
        <div className="mt-12">
          <ProductGrid products={paid} />
        </div>
      </Section>

      {/* Category sections — anchors for the browse nav */}
      {categories.map((category) => {
        const items = educationProducts.filter((p) => p.category === category);
        return (
          <Section key={category} id={category} divider size="compact">
            <div className="flex items-baseline justify-between gap-4">
              <h2 className="text-xl font-semibold tracking-[-0.02em] sm:text-2xl">
                {categoryLabels[category]}
              </h2>
              <p className="font-mono text-xs text-faint">
                {items.length} {items.length === 1 ? "resource" : "resources"}
              </p>
            </div>
            <div className="mt-8">
              <ProductGrid products={items} />
            </div>
          </Section>
        );
      })}

      <BottomCta
        title="Want this built rather than taught?"
        copy="The library teaches the method. If you would rather have the offer, funnel and distribution built for you, start with the bottleneck."
        origin="education-library"
      />
    </>
  );
}
