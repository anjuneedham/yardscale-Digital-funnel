import { forwardSubmission } from "@/lib/forwarder";
import { badRequest, isBot, json, rateLimited, readBody } from "@/lib/api";
import { clamp, isEmail, isFilled } from "@/lib/validation";
import { getSupabaseClient, type GrowthCallRecord } from "@/lib/supabase";
import { sendGrowthCallNotificationEmail } from "@/lib/email";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/** Contact-page growth requests. */
export async function POST(request: Request) {
  if (rateLimited(request)) {
    return json({ ok: false, message: "Too many requests. Please try again shortly." }, 429);
  }

  const body = await readBody(request);
  if (!body) return badRequest("Invalid request.");
  if (isBot(body)) return json({ ok: true });

  const name = clamp(body.name, 120);
  const email = clamp(body.email, 254);
  const growthProblem = clamp(body.growthProblem, 1500);

  if (!isFilled(name, 120)) return badRequest("Please add your name.");
  if (!isEmail(email)) return badRequest("Please enter a valid email address.");
  if (!isFilled(growthProblem, 1500)) return badRequest("Please describe your growth problem.");

  const business = clamp(body.business, 160);
  const website = clamp(body.website, 300);
  const businessType = clamp(body.businessType, 60);
  const whatYouSell = clamp(body.whatYouSell, 600);
  const whoYouServe = clamp(body.whoYouServe, 600);
  const tryingToBuild = clamp(body.tryingToBuild, 1000);
  const triedAlready = clamp(body.triedAlready, 1000);
  const budget = clamp(body.budget, 40);
  const heardVia = clamp(body.heardVia, 40);

  // Store in Supabase if configured
  const supabase = getSupabaseClient();
  let dbError: string | undefined;
  if (supabase) {
    const record: GrowthCallRecord = {
      name,
      email,
      growth_problem: growthProblem,
      business: business || null,
      website: website || null,
      status: "new",
    };

    const { error } = await supabase.from("growth_calls").insert([record]);
    if (error) {
      console.error("[yardscale] Failed to insert growth call into Supabase:", error);
      dbError = "Failed to save submission. Please try again.";
    }
  }

  if (dbError) {
    return json({ ok: false, message: dbError }, 500);
  }

  // Send internal notification email (if configured)
  await sendGrowthCallNotificationEmail(name, email, business, website, growthProblem);

  // Forward to webhooks (for CRM/Zapier/etc., keeping backwards compatibility)
  const { delivered } = await forwardSubmission("growth-request", {
    name,
    email,
    growthProblem,
    business,
    website,
    businessType,
    whatYouSell,
    whoYouServe,
    tryingToBuild,
    triedAlready,
    budget,
    heardVia,
    context: body.context,
  });

  return json({ ok: true, delivered });
}
