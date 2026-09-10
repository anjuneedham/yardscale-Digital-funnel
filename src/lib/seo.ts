import type { Metadata } from "next";
import { site, socials } from "@/content/site";

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  /** Optional keywords — used sparingly and only where genuinely relevant. */
  keywords?: string[];
};

export function pageMetadata({ title, description, path, keywords }: PageMetaInput): Metadata {
  const url = `${site.url}${path === "/" ? "" : path}`;
  const fullTitle = path === "/" ? title : `${title} — ${site.name}`;

  return {
    title: fullTitle,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      siteName: site.name,
      title: fullTitle,
      description,
      locale: site.locale,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}

/** Organization structured data. Only includes social profiles that actually exist. */
export function organizationJsonLd() {
  const sameAs = socials.filter((s) => s.href).map((s) => s.href);

  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${site.url}#organization`,
    name: site.name,
    url: site.url,
    description: site.description,
    slogan: site.tagline,
    email: site.email,
    ...(sameAs.length > 0 ? { sameAs } : {}),
    areaServed: "Worldwide",
    knowsAbout: [
      "Growth systems",
      "Conversion infrastructure",
      "Sales funnels",
      "Landing pages",
      "High-ticket offer systems",
      "Creator monetization",
      "Course and education platforms",
      "Digital products",
      "Mobile application development",
    ],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}#website`,
    url: site.url,
    name: site.name,
    description: site.description,
    publisher: { "@id": `${site.url}#organization` },
  };
}

export function breadcrumbJsonLd(trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${site.url}${item.path === "/" ? "" : item.path}`,
    })),
  };
}

export function faqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function serviceJsonLd(services: { name: string; description: string; id: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "YardScale Digital capabilities",
    itemListElement: services.map((s, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: s.name,
        description: s.description,
        url: `${site.url}/what-we-build#${s.id}`,
        provider: { "@id": `${site.url}#organization` },
      },
    })),
  };
}
