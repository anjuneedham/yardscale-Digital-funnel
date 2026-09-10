import { forwardSubmission } from "@/lib/forwarder";
import { badRequest, isBot, json, rateLimited, readBody } from "@/lib/api";
import { clamp, isEmail, isFilled } from "@/lib/validation";
import { qualificationQuestions } from "@/content/qualification";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const ALLOWED_ANSWER_IDS = new Set(qualificationQuestions.map((q) => q.id));

/**
 * Completed qualification flows.
 * Answers are whitelisted against the question set so nothing unexpected is
 * forwarded to the CRM.
 */
export async function POST(request: Request) {
  if (rateLimited(request)) {
    return json({ ok: false, message: "Too many requests. Please try again shortly." }, 429);
  }

  const body = await readBody(request);
  if (!body) return badRequest("Invalid request.");
  if (isBot(body)) return json({ ok: true });

  const contact = (body.contact ?? {}) as Record<string, unknown>;
  const name = clamp(contact.name, 120);
  const email = clamp(contact.email, 254);

  if (!isFilled(name, 120)) return badRequest("Please add your name.");
  if (!isEmail(email)) return badRequest("Please enter a valid email address.");

  const rawAnswers = (body.answers ?? {}) as Record<string, unknown>;
  const answers: Record<string, string | string[]> = {};

  for (const [key, value] of Object.entries(rawAnswers)) {
    if (!ALLOWED_ANSWER_IDS.has(key)) continue;
    if (Array.isArray(value)) {
      answers[key] = value.slice(0, 20).map((v) => clamp(v, 120));
    } else {
      answers[key] = clamp(value, 1000);
    }
  }

  const { delivered } = await forwardSubmission("qualification", {
    contact: {
      name,
      email,
      business: clamp(contact.business, 160),
      website: clamp(contact.website, 300),
    },
    answers,
    recommendation: body.recommendation,
    origin: clamp(body.origin, 80),
    context: body.context,
  });

  return json({ ok: true, delivered });
}
