import "server-only";

import { getProduct } from "@/content/education";
import { getSession } from "@/lib/growth-system/access";

/**
 * Education Library access.
 *
 * Deliberately reuses the existing member session from the Growth Operator
 * System rather than introducing a competing authentication system. There is
 * one identity on this site; this module only answers entitlement.
 *
 * SEAM: `resolveProductEntitlement` is the single place a payment provider
 * plugs in. Replace its body with a lookup keyed on the purchaser's email (or
 * user id) against completed purchases — PayPal, Stripe, or any provider —
 * returning true for an active purchase of that product. No caller changes.
 *
 * Until that exists, paid products show a locked preview: the full curriculum,
 * resources and outcomes are public, the chapter bodies are not.
 */

export type ProductAccess = {
  /** Whether the reader may read chapter bodies. */
  unlocked: boolean;
  /** Free products never require a purchase. */
  requiresPurchase: boolean;
  /** True when a signed-in member session exists. */
  signedIn: boolean;
};

/**
 * Preview escape hatch for the site owner to review paid content before a
 * payment provider is connected. Never enable this in production.
 */
function previewAllEnabled(): boolean {
  return process.env.EDUCATION_PREVIEW_ALL === "true";
}

/**
 * SEAM — replace with a real purchase lookup.
 *
 * Example once a provider is connected:
 *   const purchase = await findPurchase({ email, productSlug });
 *   return purchase?.status === "completed";
 */
async function resolveProductEntitlement(
  productSlug: string,
  email: string | null,
): Promise<boolean> {
  void productSlug;
  void email;
  return false;
}

export async function getProductAccess(productSlug: string): Promise<ProductAccess> {
  const product = getProduct(productSlug);
  const session = await getSession();
  const signedIn = session !== null;

  if (!product || product.tier === "free") {
    return { unlocked: true, requiresPurchase: false, signedIn };
  }

  if (previewAllEnabled()) {
    return { unlocked: true, requiresPurchase: true, signedIn };
  }

  const entitled = await resolveProductEntitlement(productSlug, session?.email ?? null);
  return { unlocked: entitled, requiresPurchase: true, signedIn };
}
