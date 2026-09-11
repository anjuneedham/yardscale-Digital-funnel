import { forwardSubmission } from "@/lib/forwarder";
import { sendStarterGuideEmail } from "@/lib/email";
import { badRequest, isBot, json, rateLimited, readBody } from "@/lib/api";
import { clamp, isEmail, isFilled } from "@/lib/validation";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/** Lead magnet signups. Forwarded to whichever email platform is configured. */
export async function POST(request: Request) {
  if (rateLimited(request)) {
    return json({ ok: false, message: "Too many requests. Please try again shortly." }, 429);
  }

  const body = await readBody(request);
  if (!body) return badRequest("Invalid request.");

  // Silently accept bot submissions so scrapers get no signal.
  if (isBot(body)) return json({ ok: true, message: "Thanks." });

  const name = clamp(body.name, 120);
  const email = clamp(body.email, 254);

  if (!isFilled(name, 120)) return badRequest("Please add your first name.");
  if (!isEmail(email)) return badRequest("Please enter a valid email address.");

  const resourceId = clamp(body.resourceId, 80);

  const [{ delivered: emailed }] = await Promise.all([
    resourceId === "starter-guide"
      ? sendStarterGuideEmail(name, email)
      : Promise.resolve({ delivered: false }),
    forwardSubmission("lead", {
      name,
      email,
      resourceId,
      resourceTitle: clamp(body.resourceTitle, 200),
      origin: clamp(body.origin, 80),
      context: body.context,
    }),
  ]);

  return json({
    ok: true,
    delivered: emailed,
    message: emailed
      ? "Thanks — check your inbox for the guide."
      : "Thanks — the guide is on its way.",
  });
}
