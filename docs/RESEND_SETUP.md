# Resend Email Setup for Growth Call Notifications

This document explains how to set up Resend email notifications for new Growth Call submissions.

## Overview

When a visitor submits a Growth Call request (at `/book`), your team receives an internal email notification. This happens automatically after the submission is saved to Supabase.

The email contains:
- Visitor's name and email
- Business name and website (if provided)
- Growth problem description
- Timestamp of submission

## Prerequisites

1. A Resend account ([resend.com](https://resend.com))
2. A domain verified in Resend
3. The Growth Call form connected to Supabase (see `docs/SUPABASE_SETUP.md`)

## Setup Steps

### 1. Create a Resend Account

1. Go to [resend.com](https://resend.com) and sign up
2. Verify your email

### 2. Set Up a Verified Domain

Resend requires a domain to send from. You have two options:

#### Option A: Use Resend's Domain (Development Only)

For testing, use Resend's default `onboarding@resend.dev` domain. ⚠️ This is **not suitable for production**.

#### Option B: Verify Your Domain (Production)

1. In Resend dashboard, click **Domains**
2. Click **Add Domain**
3. Enter your domain (e.g., `mail.yardscaledigital.com` or `yardscaledigital.com`)
4. Resend will provide DNS records to add
5. Add those records to your domain registrar's DNS settings
6. Return to Resend and click **Verify**
7. Wait for verification to complete (usually a few minutes)

### 3. Get Your Resend API Key

1. In Resend dashboard, click **API Keys**
2. Click **Create API Key**
3. Give it a name (e.g., "Growth Call Notifications")
4. Copy the key (starts with `re_...`)
5. **Keep this secret** — never share or commit it

### 4. Configure Environment Variables

Add these to your `.env.local` (for development):

```bash
# Resend API key for sending emails
RESEND_API_KEY=re_XXXXXXXXXXXX

# Email address that sends notifications (must be verified in Resend)
# Use a noreply address, info address, or any address on your verified domain
RESEND_FROM_EMAIL=growth@yardscaledigital.com

# Email address that RECEIVES Growth Call notifications (your team)
# This is the internal team address where leads go
GROWTH_CALL_NOTIFICATION_EMAIL=team@yardscaledigital.com
```

## Environment Variables

| Variable | Purpose | Example |
|----------|---------|---------|
| `RESEND_API_KEY` | Authentication with Resend | `re_XXX...` |
| `RESEND_FROM_EMAIL` | Who the email comes "from" (must be verified) | `growth@company.com` |
| `GROWTH_CALL_NOTIFICATION_EMAIL` | Where notifications go (your team inbox) | `team@company.com` |

### Important Notes

- ✅ `RESEND_API_KEY` is server-only (never sent to browser)
- ✅ `RESEND_FROM_EMAIL` must be on a domain verified in Resend
- ✅ `GROWTH_CALL_NOTIFICATION_EMAIL` can be any email address
- ⚠️ Without `GROWTH_CALL_NOTIFICATION_EMAIL`, notifications are skipped (with a warning in logs)
- ⚠️ Without `RESEND_API_KEY`, all email features are disabled (with info in logs)

## Vercel Configuration

### Production

Add these to **Project Settings > Environment Variables** for **Production**:

```
RESEND_API_KEY = re_XXXXXXXXXXXX
RESEND_FROM_EMAIL = growth@yardscaledigital.com
GROWTH_CALL_NOTIFICATION_EMAIL = team@yardscaledigital.com
```

### Preview

For preview deployments (optional):

```
RESEND_API_KEY = re_XXXXXXXXXXXX
RESEND_FROM_EMAIL = growth@yardscaledigital.com
GROWTH_CALL_NOTIFICATION_EMAIL = team+preview@yardscaledigital.com
```

Or use the same as production if you want preview emails to go to your main inbox.

## Email Content

When a new Growth Call is submitted, the team receives an email with:

```
Subject: New YardScale Growth Call Lead — [Visitor Name]

Contents:
- Name: [Full Name]
- Email: [visitor@example.com]
- Business: [Business Name] (if provided)
- Website: [business.com] (if provided)
- What they need help with: [Growth Problem Description]
- Submitted: [Date & Time]
```

The email is clean, professional, and uses YardScale's brand colors (lime/black).

## Testing

### Local Development

1. Ensure `.env.local` has all three variables set:
   ```bash
   RESEND_API_KEY=re_...
   RESEND_FROM_EMAIL=your-verified-email@domain.com
   GROWTH_CALL_NOTIFICATION_EMAIL=your-email@domain.com
   ```

2. Run the dev server:
   ```bash
   npm run dev
   ```

3. Go to http://localhost:3000/book

4. Fill out and submit the Growth Call form

5. **Check your email** — you should receive the notification within 30 seconds

6. **If you don't receive it:**
   - Check spam/junk folders
   - Check server logs: `npm run dev` should show success or error
   - Verify `GROWTH_CALL_NOTIFICATION_EMAIL` is correct
   - Verify `RESEND_FROM_EMAIL` is verified in Resend

### Production (Vercel)

1. Deploy with production environment variables set
2. Test the form at your live URL
3. Check your team's notification email inbox
4. Look in spam if it doesn't arrive

## Disabling Email Notifications

To disable Growth Call email notifications:

**Option A:** Remove `GROWTH_CALL_NOTIFICATION_EMAIL`
- Submissions still save to Supabase
- Webhooks still fire
- Email notifications are skipped (logged as warning)

**Option B:** Remove `RESEND_API_KEY`
- All email functionality disabled
- Forms still work
- Supabase and webhooks still work

## Common Issues

### "Growth call notification skipped — RESEND_API_KEY not configured"

- Set `RESEND_API_KEY` in your environment variables
- Restart dev server after adding the variable

### "Growth call notification skipped — GROWTH_CALL_NOTIFICATION_EMAIL not configured"

- Set `GROWTH_CALL_NOTIFICATION_EMAIL` to your team's inbox email address
- Restart dev server

### "Growth call notification send failed"

- Check that `RESEND_FROM_EMAIL` is verified in Resend
- Check Resend logs in your Resend dashboard
- Verify API key is correct (hasn't been rotated)

### Email goes to spam

- Resend has good deliverability, but check spam filters
- Verify domain is properly set up in Resend
- Add your sending domain to SPF/DKIM if needed

## Email Headers

Emails are sent with:

- **From:** YardScale Digital <growth@yardscaledigital.com> (example)
- **To:** team@yardscaledigital.com (your notification email)
- **Subject:** New YardScale Growth Call Lead — [Visitor Name]

## Data in Emails

**Included:**
- Name (escaped HTML)
- Email address (escaped HTML, clickable mailto link)
- Business (escaped HTML)
- Website (escaped HTML, clickable link)
- Growth problem (escaped HTML, preserving line breaks)

**Not included:**
- Password or sensitive data
- API keys or tokens
- Other form fields (businessType, budget, etc.)

Those detailed fields are still available in:
1. Supabase `growth_calls` table
2. Webhook payloads

## Resend Limits

Resend's free tier includes:

- 100 emails/day (sufficient for most sites)
- Unlimited recipients
- Unlimited API calls
- Always free to start

Paid plans available if you need higher volume.

## Next Steps

1. ✅ Supabase configured (see `docs/SUPABASE_SETUP.md`)
2. ✅ Resend account created and domain verified
3. ✅ Environment variables added
4. ✅ Growth Call form tested
5. ⏳ Optional: Set up lead scoring or CRM integration

For other integrations, see:

- `docs/SUPABASE_SETUP.md` — Database setup
- `README.md` — Project overview
