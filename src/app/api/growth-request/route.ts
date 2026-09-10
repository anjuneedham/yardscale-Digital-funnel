import { forwardSubmission } from "@/lib/forwarder";
import { badRequest, isBot, json, rateLimited, readBody } from "@/lib/api";
import { clamp, isEmail, isFilled } from "@/lib/validation";

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

  const { delivered } = await forwardSubmission("growth-request", {
    name,
    email,
    growthProblem,
    business: clamp(body.business, 160),
    website: clamp(body.website, 300),
    businessType: clamp(body.businessType, 60),
    whatYouSell: clamp(body.whatYouSell, 600),
    whoYouServe: clamp(body.whoYouServe, 600),
    tryingToBuild: clamp(body.tryingToBuild, 1000),
    triedAlready: clamp(body.triedAlready, 1000),
    budget: clamp(body.budget, 40),
    heardVia: clamp(body.heardVia, 40),
    context: body.context,
  });

  return json({ ok: true, delivered });
}
