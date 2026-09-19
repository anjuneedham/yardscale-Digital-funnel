import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { educationProducts } from "@/content/education";

/** Static route map. Add new routes here as pages are created. */
const ROUTES: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/what-we-build", priority: 0.9, changeFrequency: "monthly" },
  { path: "/how-it-works", priority: 0.8, changeFrequency: "monthly" },
  { path: "/work", priority: 0.8, changeFrequency: "weekly" },
  { path: "/education", priority: 0.9, changeFrequency: "weekly" },
  { path: "/education/free", priority: 0.8, changeFrequency: "weekly" },
  { path: "/education/paid", priority: 0.8, changeFrequency: "weekly" },
  { path: "/resources", priority: 0.7, changeFrequency: "weekly" },
  { path: "/about", priority: 0.6, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.7, changeFrequency: "monthly" },
  { path: "/book", priority: 0.9, changeFrequency: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes = ROUTES.map((route) => ({
    url: `${site.url}${route.path === "/" ? "" : route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  // Education product pages. Free products also expose their chapters, which
  // are readable without purchase; paid chapters are gated so they stay out.
  const productRoutes = educationProducts.flatMap((product) => {
    const base = {
      url: `${site.url}/education/${product.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    };

    if (product.tier !== "free") return [base];

    return [
      base,
      ...product.chapters.map((chapter) => ({
        url: `${site.url}/education/${product.slug}/${chapter.slug}`,
        lastModified,
        changeFrequency: "monthly" as const,
        priority: 0.6,
      })),
    ];
  });

  return [...staticRoutes, ...productRoutes];
}
