import type { Metadata } from "next";

import { site, bookingUrl, cta } from "@/content/site";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/layout/JsonLd";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/ui/Section";
import { GrowthRequestForm } from "@/components/forms/GrowthRequestForm";
import { CtaLink, ArrowGlyph } from "@/components/ui/Cta";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description:
    "Send YardScale Digital a growth request. Tell us what you sell, who you serve, and what's not working — we'll come back with a read on the bottleneck.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />

      <PageHero
        eyebrow="Contact"
        title="Let's find the bottleneck."
        lede={
          <p>
            The more you tell us, the more useful our reply will be. We read every request
            properly and answer with an actual opinion — including when the answer is that
            you don&apos;t need us.
          </p>
        }
      />

      <Section divider>
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
          <div>
            <GrowthRequestForm />
          </div>

          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-card border border-line bg-panel/60 p-6">
              <h2 className="label-mono">Prefer to talk?</h2>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-soft">
                A growth call is a working conversation, not a pitch. We look at what
                exists today and where it breaks.
              </p>
              <CtaLink
                href={bookingUrl || "/book"}
                variant="secondary"
                className="mt-5 w-full"
                event="booking_cta_click"
                eventProps={{ origin: "contact_sidebar" }}
                {...(bookingUrl ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {cta.secondary.label} <ArrowGlyph />
              </CtaLink>
            </div>

            <div className="rounded-card border border-line bg-panel/60 p-6">
              <h2 className="label-mono">Not sure what to write?</h2>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-soft">
                Run the diagnostic first. It takes a moment and gives you the vocabulary
                for the rest.
              </p>
              <CtaLink href="/#bottleneck" variant="secondary" className="mt-5 w-full">
                {cta.primary.label} <ArrowGlyph />
              </CtaLink>
            </div>

            <div className="rounded-card border border-line bg-panel/60 p-6">
              <h2 className="label-mono">Direct</h2>
              <a
                href={`mailto:${site.email}`}
                className="mt-3 block text-[0.9375rem] text-ink transition-colors hover:text-signal"
              >
                {site.email}
              </a>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                We aim to respond within two business days.
              </p>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
