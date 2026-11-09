import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { educationProducts } from "@/content/education";
import { courses } from "@/content/academy";

/** Static route map. Add new routes here as pages are created. */
const ROUTES: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/academy", priority: 0.9, changeFrequency: "weekly" },
  { path: "/academy/zero-to-saas", priority: 0.9, changeFrequency: "weekly" },
  { path: "/community", priority: 0.8, changeFrequency: "monthly" },
  { path: "/coaching", priority: 0.9, changeFrequency: "monthly" },
  { path: "/partnerships", priority: 0.9, changeFrequency: "monthly" },
  { path: "/about", priority: 0.6, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.6, changeFrequency: "monthly" },
  { path: "/education", priority: 0.6, changeFrequency: "weekly" },
  { path: "/growth-system", priority: 0.6, changeFrequency: "monthly" },
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

  // Open Academy lessons are public and indexable; member lessons are not.
  const lessonRoutes = courses
    .filter((c) => !c.externalHref)
    .flatMap((course) =>
      course.modules
        .filter((m) => m.access === "open")
        .flatMap((m) =>
          m.lessons.map((l) => ({
            url: `${site.url}/academy/${course.slug}/${m.slug}/${l.slug}`,
            lastModified,
            changeFrequency: "monthly" as const,
            priority: 0.7,
          })),
        ),
    );

  return [...staticRoutes, ...productRoutes, ...lessonRoutes];
}
