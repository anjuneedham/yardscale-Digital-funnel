import type { Metadata } from "next";

import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { productsByTier } from "@/content/education";
import { Section, SectionHeader } from "@/components/ui/Section";
import { PageHero } from "@/components/layout/PageHero";
import { BottomCta } from "@/components/layout/BottomCta";
import { JsonLd } from "@/components/layout/JsonLd";
import { CtaLink } from "@/components/ui/Cta";
import { ProductGrid } from "@/components/education/ProductCard";

export const metadata: Metadata = pageMetadata({
  title: "Free Resources",
  description:
    "Free mini-courses and guides on building your first website, fixing the leaks in a funnel, and getting your first online client.",
  path: "/education/free",
});

export default function FreeEducationPage() {
  const free = productsByTier("free");

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Education Library", path: "/education" },
          { name: "Free Resources", path: "/education/free" },
        ])}
      />

      <PageHero
        eyebrow="Free resources"
        title="Start here. No payment, no catch."
        lede="Three complete resources, each useful on its own. Work through them in any order — most people start with whichever problem they currently have."
      >
        <CtaLink href="/education/paid" variant="secondary" size="lg">
          See the paid playbooks
        </CtaLink>
      </PageHero>

      <Section divider grid>
        <SectionHeader
          eyebrow="The free tier"
          title="Three complete resources."
          lede="Each one is finished and useful on its own — not a preview of something paid."
        />
        <div className="mt-12">
          <ProductGrid products={free} />
        </div>
      </Section>

      <BottomCta
        title="Want this built rather than taught?"
        copy="These resources teach the method. If you would rather have the offer, funnel and distribution built for you, start with the bottleneck."
        origin="education-free"
      />
    </>
  );
}
