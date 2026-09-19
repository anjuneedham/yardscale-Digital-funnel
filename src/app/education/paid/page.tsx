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
  title: "Paid Playbooks",
  description:
    "Focused, implementation-led playbooks on landing pages, funnel building, client acquisition, app building and launching a website properly.",
  path: "/education/paid",
});

export default function PaidEducationPage() {
  const paid = productsByTier("paid");

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Education Library", path: "/education" },
          { name: "Paid Playbooks", path: "/education/paid" },
        ])}
      />

      <PageHero
        eyebrow="Paid playbooks"
        title="Go deeper on one thing."
        lede="Complete methods rather than overviews — for when you know what you are building and want the whole process, including the checklists and templates."
      >
        <CtaLink href="/education/free" variant="secondary" size="lg">
          Start with the free resources
        </CtaLink>
      </PageHero>

      <Section divider grid>
        <SectionHeader
          eyebrow="The paid tier"
          title="Five focused playbooks."
          lede="Each one covers a single discipline completely, including the checklists and templates you keep."
        />
        <div className="mt-12">
          <ProductGrid products={paid} />
        </div>
      </Section>

      <BottomCta
        title="Want this built rather than taught?"
        copy="The playbooks teach the method. If you would rather have the offer, funnel and distribution built for you, start with the bottleneck."
        origin="education-paid"
      />
    </>
  );
}
