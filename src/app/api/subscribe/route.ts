import { badRequest, isBot, json, rateLimited, readBody } from "@/lib/api";
import { clamp, isEmail } from "@/lib/validation";
import { readContext, recordSubscriber } from "@/lib/leads";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/** Build-notes signups from every opt-in form on the site. */
export async function POST(request: Request) {
  if (rateLimited(request)) {
    return json({ ok: false, message: "Too many requests. Please try again shortly." }, 429);
  }

  const body = await readBody(request);
  if (!body) return badRequest("Invalid request.");

  // Silently accept bot submissions so scrapers get no signal.
  if (isBot(body)) return json({ ok: true });

  const email = clamp(body.email, 254);
  if (!isEmail(email)) return badRequest("Please enter a valid email address.");

  const result = await recordSubscriber({
    email,
    name: clamp(body.name, 120),
    origin: clamp(body.origin, 80),
    context: readContext(body),
  });

  if (!result.ok) {
    return json(
      { ok: false, message: "That did not go through. Please try again in a moment." },
      502,
    );
  }
  return json({ ok: true });
}
