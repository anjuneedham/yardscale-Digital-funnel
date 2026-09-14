import "server-only";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { Resend } from "resend";
import { site } from "@/content/site";

/**
 * Direct transactional delivery for the starter guide lead magnet, via Resend.
 *
 * Set RESEND_API_KEY to activate. RESEND_FROM_EMAIL must be an address on a
 * domain verified in Resend — falls back to site.email, which will fail to
 * send until that domain is verified there too. Until RESEND_API_KEY is set,
 * this is a no-op: the form still succeeds, nothing is emailed.
 */

const GUIDE_PATH = join(process.cwd(), "public", "growth-system-starter-guide.pdf");
const GUIDE_FILENAME = "YardScale-Growth-System-Starter-Guide.pdf";

export type EmailResult = { delivered: boolean; error?: string };

export async function sendGrowthCallNotificationEmail(
  name: string,
  email: string,
  business: string,
  website: string,
  growthProblem: string,
): Promise<EmailResult> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.info("[yardscale] RESEND_API_KEY not configured — growth call notification skipped");
    return { delivered: false };
  }

  const notificationEmail = process.env.GROWTH_CALL_NOTIFICATION_EMAIL;
  if (!notificationEmail) {
    console.warn(
      "[yardscale] GROWTH_CALL_NOTIFICATION_EMAIL not configured — growth call notification skipped",
    );
    return { delivered: false };
  }

  try {
    const resend = new Resend(apiKey);
    const from = process.env.RESEND_FROM_EMAIL || site.email;

    const { error } = await resend.emails.send({
      from: `${site.name} <${from}>`,
      to: notificationEmail,
      subject: `New YardScale Growth Call Lead — ${name}`,
      html: buildGrowthCallNotificationHtml(name, email, business, website, growthProblem),
    });

    if (error) {
      console.error("[yardscale] Growth call notification send failed", error);
      return { delivered: false, error: error.message };
    }
    return { delivered: true };
  } catch (error) {
    console.error("[yardscale] growth call notification failed", error);
    return { delivered: false, error: "Email send failed" };
  }
}

export async function sendStarterGuideEmail(name: string, email: string): Promise<EmailResult> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.info("[yardscale] RESEND_API_KEY not configured — guide email skipped");
    return { delivered: false };
  }

  try {
    const [pdf, resend] = await Promise.all([
      readFile(GUIDE_PATH),
      Promise.resolve(new Resend(apiKey)),
    ]);

    const from = process.env.RESEND_FROM_EMAIL || site.email;
    const firstName = name.split(" ")[0] || name;

    const { error } = await resend.emails.send({
      from: `${site.name} <${from}>`,
      to: email,
      subject: "Your Growth System Starter Guide",
      html: buildEmailHtml(firstName),
      attachments: [{ filename: GUIDE_FILENAME, content: pdf }],
    });

    if (error) {
      console.error("[yardscale] Resend send failed", error);
      return { delivered: false, error: error.message };
    }
    return { delivered: true };
  } catch (error) {
    console.error("[yardscale] guide email failed", error);
    return { delivered: false, error: "Email send failed" };
  }
}

function buildEmailHtml(firstName: string): string {
  return `
    <div style="font-family: -apple-system, Helvetica, Arial, sans-serif; max-width: 480px; margin: 0 auto;">
      <p>Hi ${escapeHtml(firstName)},</p>
      <p>Here's your copy of the ${escapeHtml(site.name)} Growth System Starter Guide — the six-stage growth system, how to find your bottleneck without guessing, and what to build first.</p>
      <p>It's attached to this email as a PDF.</p>
      <p>Questions about your own bottleneck? Just reply — a person reads this inbox.</p>
      <p style="color: #84827c; font-size: 13px; margin-top: 24px;">${escapeHtml(site.tagline)}</p>
    </div>
  `.trim();
}

function buildGrowthCallNotificationHtml(
  name: string,
  email: string,
  business: string,
  website: string,
  growthProblem: string,
): string {
  const businessSection = business ? `<p><strong>Business:</strong> ${escapeHtml(business)}</p>` : "";
  const websiteSection = website
    ? `<p><strong>Website:</strong> <a href="${escapeHtml(website)}" style="color: #cdff2e; text-decoration: none;">${escapeHtml(website)}</a></p>`
    : "";

  return `
    <div style="font-family: -apple-system, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
      <div style="background: #f5f5f5; padding: 20px; margin-bottom: 20px; border-radius: 8px;">
        <h2 style="margin: 0 0 16px 0; font-size: 18px;">New Growth Call Submission</h2>
      </div>

      <div style="line-height: 1.6;">
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}" style="color: #cdff2e; text-decoration: none;">${escapeHtml(email)}</a></p>
        ${businessSection}
        ${websiteSection}

        <p style="margin-top: 24px;"><strong>What they need help with:</strong></p>
        <div style="background: #f9f9f9; padding: 12px; border-left: 3px solid #cdff2e; margin: 8px 0;">
          <p style="margin: 0; white-space: pre-wrap;">${escapeHtml(growthProblem)}</p>
        </div>

        <p style="margin-top: 24px; color: #666; font-size: 13px;">
          Submitted via YardScale Digital growth call request form at ${escapeHtml(site.url)}
        </p>
      </div>
    </div>
  `.trim();
}

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
}
