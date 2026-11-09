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
    "@type": "Organization",
    "@id": `${site.url}#organization`,
    name: site.name,
    url: site.url,
    description: site.description,
    slogan: site.tagline,
    email: site.email,
    founder: { "@type": "Person", name: site.founder },
    ...(sameAs.length > 0 ? { sameAs } : {}),
    knowsAbout: [
      "SaaS",
      "Software product development",
      "MVP development",
      "AI-assisted software development",
      "Startup validation",
      "Customer acquisition",
      "Founder education",
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

export function courseJsonLd(course: { name: string; description: string; path: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.name,
    description: course.description,
    url: `${site.url}${course.path}`,
    provider: { "@id": `${site.url}#organization` },
  };
}
