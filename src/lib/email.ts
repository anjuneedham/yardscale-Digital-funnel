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

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
}
