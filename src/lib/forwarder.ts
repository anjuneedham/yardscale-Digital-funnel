import "server-only";

/**
 * Server-side submission forwarding.
 *
 * No email or CRM provider is hard-coded. Submissions are forwarded to whatever
 * endpoint is configured through environment variables, which lets YardScale
 * connect ConvertKit, HubSpot, Zapier, Make, Airtable, a Slack webhook, or a
 * custom endpoint without a code change.
 *
 *   LEAD_WEBHOOK_URL          — lead magnet signups
 *   QUALIFICATION_WEBHOOK_URL — completed qualification flows
 *   GROWTH_REQUEST_WEBHOOK_URL— contact-page growth requests
 *   FORM_WEBHOOK_URL          — fallback for all of the above
 *   FORM_WEBHOOK_TOKEN        — optional bearer token sent with each request
 *
 * When nothing is configured, submissions are accepted and logged so the site
 * is fully functional before the integration exists.
 */

export type SubmissionKind = "lead" | "qualification" | "growth-request";

const ENV_BY_KIND: Record<SubmissionKind, string> = {
  lead: "LEAD_WEBHOOK_URL",
  qualification: "QUALIFICATION_WEBHOOK_URL",
  "growth-request": "GROWTH_REQUEST_WEBHOOK_URL",
};

export type ForwardResult = {
  delivered: boolean;
  /** Present when a webhook is configured but rejected the submission. */
  error?: string;
};

export async function forwardSubmission(
  kind: SubmissionKind,
  payload: Record<string, unknown>,
): Promise<ForwardResult> {
  const endpoint = process.env[ENV_BY_KIND[kind]] || process.env.FORM_WEBHOOK_URL;

  const record = {
    kind,
    receivedAt: new Date().toISOString(),
    ...payload,
  };

  if (!endpoint) {
    // No integration configured yet. Keep a structured server log so nothing is lost.
    console.info(`[yardscale] ${kind} submission received (no webhook configured)`, {
      ...record,
      // Avoid writing full free-text answers into logs.
      answers: undefined,
    });
    return { delivered: false };
  }

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(process.env.FORM_WEBHOOK_TOKEN
          ? { Authorization: `Bearer ${process.env.FORM_WEBHOOK_TOKEN}` }
          : {}),
      },
      body: JSON.stringify(record),
      // Never let a slow third party hold the visitor's request open.
      signal: AbortSignal.timeout(8000),
    });

    if (!response.ok) {
      console.error(`[yardscale] ${kind} webhook responded ${response.status}`);
      return { delivered: false, error: `Upstream responded ${response.status}` };
    }

    return { delivered: true };
  } catch (error) {
    console.error(`[yardscale] ${kind} webhook failed`, error);
    return { delivered: false, error: "Upstream request failed" };
  }
}
