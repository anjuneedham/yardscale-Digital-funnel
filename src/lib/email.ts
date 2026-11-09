import "server-only";
import { Resend } from "resend";
import { site } from "@/content/site";

/**
 * Email via Resend — the provider already connected to this project.
 *
 *   RESEND_API_KEY          — activates everything below. Without it, every
 *                             function is a logged no-op and forms still work.
 *   RESEND_FROM_EMAIL       — sender address on a domain verified in Resend.
 *   LEAD_NOTIFICATION_EMAIL — where Andrew is notified of new applications
 *                             and subscribers. Falls back to the site email.
 *   RESEND_AUDIENCE_ID      — optional Resend audience that subscribers are
 *                             added to, for sending broadcasts later.
 */

export type EmailResult = { delivered: boolean; error?: string };

function client(): Resend | null {
  const key = process.env.RESEND_API_KEY;
  return key ? new Resend(key) : null;
}

const from = () => `${site.name} <${process.env.RESEND_FROM_EMAIL || site.email}>`;

const notifyTo = () =>
  process.env.LEAD_NOTIFICATION_EMAIL ||
  process.env.GROWTH_CALL_NOTIFICATION_EMAIL ||
  site.email;

async function send(options: {
  to: string;
  subject: string;
  html: string;
  replyTo?: string;
}): Promise<EmailResult> {
  const resend = client();
  if (!resend) {
    console.info(`[yardscale] RESEND_API_KEY not set — email skipped: ${options.subject}`);
    return { delivered: false };
  }

  try {
    const { error } = await resend.emails.send({
      from: from(),
      to: options.to,
      subject: options.subject,
      html: options.html,
      ...(options.replyTo ? { replyTo: options.replyTo } : {}),
    });
    if (error) {
      console.error("[yardscale] Resend send failed", error);
      return { delivered: false, error: error.message };
    }
    return { delivered: true };
  } catch (error) {
    console.error("[yardscale] email failed", error);
    return { delivered: false, error: "Email send failed" };
  }
}

/** Internal notification with every answer from an application or message. */
export function notifyApplication(input: {
  kind: string;
  name: string;
  email: string;
  platform: string;
  answers: { label: string; value: string }[];
}): Promise<EmailResult> {
  const rows = input.answers
    .filter((a) => a.value)
    .map(
      (a) => `
        <p style="margin: 18px 0 4px; font-size: 12px; letter-spacing: 0.08em; text-transform: uppercase; color: #6b6b66;">${escapeHtml(a.label)}</p>
        <p style="margin: 0; white-space: pre-wrap;">${escapeHtml(a.value)}</p>`,
    )
    .join("");

  return send({
    to: notifyTo(),
    replyTo: input.email,
    subject: `New ${input.kind} — ${input.name}`,
    html: wrap(`
      <h2 style="margin: 0 0 6px; font-size: 18px;">New ${escapeHtml(input.kind)}</h2>
      <p style="margin: 0; color: #6b6b66; font-size: 13px;">
        ${escapeHtml(input.name)} · <a href="mailto:${escapeHtml(input.email)}">${escapeHtml(input.email)}</a>
        ${input.platform ? ` · via ${escapeHtml(input.platform)}` : ""}
      </p>
      ${rows}
      <p style="margin-top: 28px; color: #6b6b66; font-size: 13px;">Reply to this email to answer ${escapeHtml(input.name)} directly.</p>
    `),
  });
}

/** Confirmation to the applicant, so they know it arrived and what happens next. */
export function confirmApplication(input: {
  kind: "coaching" | "partnership";
  name: string;
  email: string;
}): Promise<EmailResult> {
  const first = input.name.split(" ")[0] || input.name;
  const label = input.kind === "coaching" ? "coaching application" : "partnership application";
  return send({
    to: input.email,
    subject: `We received your ${label}`,
    html: wrap(`
      <p>Hi ${escapeHtml(first)},</p>
      <p>Your ${label} has arrived. ${escapeHtml(site.founder)} reads every application personally.</p>
      <p>If it looks like a fit, you will get a reply inviting you to a conversation. If it is not a fit, you will be told that too. Applying does not guarantee a place.</p>
      <p>If you want to add anything, reply to this email.</p>
      <p style="color: #6b6b66; font-size: 13px; margin-top: 24px;">${escapeHtml(site.name)}</p>
    `),
  });
}

/** Welcome email for a new subscriber. */
export function welcomeSubscriber(input: { name: string; email: string }): Promise<EmailResult> {
  const first = input.name.split(" ")[0];
  return send({
    to: input.email,
    subject: "You're on the YardScale build notes",
    html: wrap(`
      <p>${first ? `Hi ${escapeHtml(first)},` : "Hi,"}</p>
      <p>You are on the list. You will hear from ${escapeHtml(site.founder)} when there is something worth sending: new lessons, build breakdowns and what is being learned building real software products.</p>
      <p>In the meantime, the first module of Zero to SaaS is open to read: <a href="${site.url}/academy/zero-to-saas">${site.url.replace(/^https?:\/\//, "")}/academy/zero-to-saas</a></p>
      <p>Reply to this email any time. A person reads it.</p>
      <p style="color: #6b6b66; font-size: 13px; margin-top: 24px;">${escapeHtml(site.name)} · You can unsubscribe by replying "unsubscribe".</p>
    `),
  });
}

/** Adds a subscriber to the Resend audience, when one is configured. */
export async function addToAudience(input: { name: string; email: string }): Promise<boolean> {
  const resend = client();
  const audienceId = process.env.RESEND_AUDIENCE_ID;
  if (!resend || !audienceId) return false;

  try {
    const [firstName, ...rest] = input.name.split(" ");
    const { error } = await resend.contacts.create({
      audienceId,
      email: input.email,
      firstName: firstName || undefined,
      lastName: rest.join(" ") || undefined,
      unsubscribed: false,
    });
    if (error) {
      console.error("[yardscale] Resend audience add failed", error);
      return false;
    }
    return true;
  } catch (error) {
    console.error("[yardscale] Resend audience add failed", error);
    return false;
  }
}

function wrap(inner: string): string {
  return `<div style="font-family: -apple-system, Helvetica, Arial, sans-serif; max-width: 560px; margin: 0 auto; color: #1a1a1a; line-height: 1.6;">${inner}</div>`;
}

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
}
