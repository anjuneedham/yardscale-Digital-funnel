import "server-only";

/**
 * Optional webhook forwarding, so submissions can also flow into a CRM,
 * Zapier, Make, Slack or an email platform without a code change.
 *
 *   SUBSCRIBER_WEBHOOK_URL  — newsletter / build-notes signups
 *   APPLICATION_WEBHOOK_URL — coaching, partnership and contact submissions
 *   FORM_WEBHOOK_URL        — fallback for both
 *   FORM_WEBHOOK_TOKEN      — optional bearer token sent with each request
 */

export type SubmissionKind = "subscriber" | "application";

const ENV_BY_KIND: Record<SubmissionKind, string> = {
  subscriber: "SUBSCRIBER_WEBHOOK_URL",
  application: "APPLICATION_WEBHOOK_URL",
};

export async function forwardSubmission(
  kind: SubmissionKind,
  payload: Record<string, unknown>,
): Promise<{ delivered: boolean }> {
  const endpoint = process.env[ENV_BY_KIND[kind]] || process.env.FORM_WEBHOOK_URL;
  if (!endpoint) return { delivered: false };

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(process.env.FORM_WEBHOOK_TOKEN
          ? { Authorization: `Bearer ${process.env.FORM_WEBHOOK_TOKEN}` }
          : {}),
      },
      body: JSON.stringify({ kind, receivedAt: new Date().toISOString(), ...payload }),
      // Never let a slow third party hold the visitor's request open.
      signal: AbortSignal.timeout(8000),
    });

    if (!response.ok) {
      console.error(`[yardscale] ${kind} webhook responded ${response.status}`);
      return { delivered: false };
    }
    return { delivered: true };
  } catch (error) {
    console.error(`[yardscale] ${kind} webhook failed`, error);
    return { delivered: false };
  }
}
