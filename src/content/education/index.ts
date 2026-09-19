import type { Category, EducationProduct, Tier } from "./types";
import { buildYourFirstWebsite } from "./products/build-your-first-website";
import { funnelMistakes } from "./products/funnel-mistakes";
import { firstOnlineClient } from "./products/first-online-client";
import { landingPage } from "./products/landing-page";
import { funnelBlueprint } from "./products/funnel-blueprint";
import { clientAcquisition } from "./products/client-acquisition";
import { appBuilding } from "./products/app-building";
import { websiteLaunchChecklist } from "./products/website-launch-checklist";

/**
 * Education Library registry.
 *
 * To add a product: create a module in ./products exporting an
 * `EducationProduct`, import it here, and add it to the array. Routes,
 * cards, category filters and the sitemap all follow automatically.
 */

export const educationProducts: EducationProduct[] = [
  buildYourFirstWebsite,
  funnelMistakes,
  firstOnlineClient,
  landingPage,
  funnelBlueprint,
  clientAcquisition,
  appBuilding,
  websiteLaunchChecklist,
];

export const library = {
  title: "Education Library",
  hero: "Build. Launch. Get Customers. Grow.",
  lede:
    "Practical playbooks for people building businesses, websites, apps, funnels and customer-acquisition systems.",
} as const;

export function getProduct(slug: string): EducationProduct | undefined {
  return educationProducts.find((p) => p.slug === slug);
}

export function getChapter(productSlug: string, chapterSlug: string) {
  const product = getProduct(productSlug);
  const chapter = product?.chapters.find((c) => c.slug === chapterSlug);
  return product && chapter ? { product, chapter } : undefined;
}

export function productsByTier(tier: Tier): EducationProduct[] {
  return educationProducts.filter((p) => p.tier === tier);
}

export function productsByCategory(category: Category): EducationProduct[] {
  return educationProducts.filter((p) => p.category === category);
}

/** Categories that actually have products, in library order. */
export function activeCategories(): Category[] {
  const seen = new Set<Category>();
  for (const product of educationProducts) seen.add(product.category);
  return [...seen];
}

/** The next chapter in a product, or undefined at the end. */
export function nextChapter(productSlug: string, chapterSlug: string) {
  const product = getProduct(productSlug);
  if (!product) return undefined;
  const index = product.chapters.findIndex((c) => c.slug === chapterSlug);
  return index >= 0 ? product.chapters[index + 1] : undefined;
}

/** The previous chapter in a product, or undefined at the start. */
export function previousChapter(productSlug: string, chapterSlug: string) {
  const product = getProduct(productSlug);
  if (!product) return undefined;
  const index = product.chapters.findIndex((c) => c.slug === chapterSlug);
  return index > 0 ? product.chapters[index - 1] : undefined;
}

export * from "./types";
