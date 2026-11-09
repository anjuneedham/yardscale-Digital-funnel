import type { Metadata } from "next";
import Link from "next/link";

import { cta, site, socials } from "@/content/site";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/layout/JsonLd";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/ui/Section";
import { ArrowGlyph } from "@/components/ui/Cta";
import { ApplicationForm } from "@/components/forms/ApplicationForm";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description:
    "Contact YardScale Digital. For coaching or a partnership, use the application forms. For anything else, send a message.",
  path: "/contact",
});

const ROUTES = [
  { title: "Coaching", detail: "Want one-on-one help with your SaaS? Use the coaching application.", ...cta.coaching },
  { title: "Partnerships", detail: "Want YardScale to build with you? Use the partnership application.", ...cta.partnership },
  { title: "Learning", detail: "Looking for the courses? Start in the Academy.", ...cta.academy },
];

export default function ContactPage() {
  const liveSocials = socials.filter((s) => s.href);

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
        title="Get in touch."
        lede={
          <p>
            For coaching or a partnership, the application forms get you a faster and more
            useful answer. For everything else, send a message here.
          </p>
        }
      />

      <Section divider>
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
          <div>
            <h2 className="mb-6 text-2xl font-semibold tracking-[-0.025em]">Send a message</h2>
            <ApplicationForm kind="contact" />
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <h2 className="label-mono">The right door</h2>
            <ul className="mt-4 border-t border-line">
              {ROUTES.map((route) => (
                <li key={route.title} className="border-b border-line">
                  <Link href={route.href} className="group block py-5">
                    <span className="flex items-center justify-between gap-4 text-lg font-semibold tracking-[-0.015em] group-hover:text-signal">
                      {route.label}
                      <ArrowGlyph className="group-hover:translate-x-0.5" />
                    </span>
                    <span className="mt-1 block text-sm leading-relaxed text-muted">{route.detail}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <h2 className="label-mono mt-10">Direct</h2>
            <a href={`mailto:${site.email}`} className="mt-3 block break-all text-lg text-ink transition-colors hover:text-signal">
              {site.email}
            </a>

            {liveSocials.length > 0 ? (
              <>
                <h2 className="label-mono mt-10">Follow the build</h2>
                <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
                  {liveSocials.map((channel) => (
                    <li key={channel.id}>
                      <a href={channel.href} target="_blank" rel="noopener noreferrer me" className="text-[0.9375rem] text-ink-soft hover:text-signal">
                        {channel.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </>
            ) : null}
          </aside>
        </div>
      </Section>
    </>
  );
}
