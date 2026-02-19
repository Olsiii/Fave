# EmailJS Setup Instructions

This guide will help you set up EmailJS so that newsletter subscriptions and store notifications actually send emails.

## Step 1: Create EmailJS Account

1. Go to https://www.emailjs.com/
2. Sign up for a free account (allows 200 emails/month)
3. Verify your email address

## Step 2: Create an Email Service

1. In the EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose **Gmail** as your email provider
4. **IMPORTANT for Gmail Setup:**
   
   **Option A: Use Gmail with App Password (Recommended)**
   - Go to your Google Account settings: https://myaccount.google.com/
   - Enable 2-Step Verification (required for App Passwords)
   - Go to: https://myaccount.google.com/apppasswords
   - Generate an App Password for "Mail"
   - Copy the 16-character password (no spaces)
   - In EmailJS, paste this App Password (NOT your regular Gmail password)
   
   **Option B: Use Gmail OAuth (Alternative)**
   - Click "Connect Account" in EmailJS
   - Sign in with your Gmail account
   - Grant permissions when prompted
   - Make sure all scopes are approved
   
5. **Copy your Service ID** (you'll need this)

## Step 3: Create Email Templates

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Set up your template:

   **Template Name:** FAVE Newsletter Subscription
   
   **Subject:** New FAVE Newsletter Subscription
   
   **Content:**
   ```
   New newsletter subscription:
   
   Email: {{subscriber_email}}
   Date: {{date}}
   
   This subscriber wants to be notified about:
   - New flavor drops
   - Store locations
   - Company updates
   ```
   
4. **Copy your Template ID** (you'll need this)
5. Create a second template for store notifications (optional, or reuse the same one)

## Step 4: Get Your Public Key

1. Go to **Account** → **General**
2. Find your **Public Key**
3. **Copy your Public Key**

## Step 5: Update main.js

Open `main.js` and replace these placeholders:

1. **Line ~315:** Replace `"YOUR_PUBLIC_KEY"` with your EmailJS Public Key
2. **Line ~330:** Replace `"YOUR_SERVICE_ID"` with your EmailJS Service ID  
3. **Line ~331:** Replace `"YOUR_TEMPLATE_ID"` with your EmailJS Template ID
4. **Line ~365:** Replace `"YOUR_SERVICE_ID"` with your EmailJS Service ID (for store notifications)
5. **Line ~366:** Replace `"YOUR_TEMPLATE_ID"` with your EmailJS Template ID (for store notifications)

## Step 6: Update Recipient Email

In `main.js`, update the `to_email` field to your actual email address:
- Line ~333: `to_email: "hello@favedrinks.com"` (change to your email)
- Line ~368: `to_email: "hello@favedrinks.com"` (change to your email)

## Step 7: Test

1. Open your website
2. Try subscribing to the newsletter
3. Check your email inbox for the notification
4. Check the EmailJS dashboard for delivery status

## Troubleshooting

- **Emails not sending?** Check the browser console for errors
- **Service ID/Template ID errors?** Make sure you copied them correctly (no extra spaces)
- **Rate limits?** Free plan allows 200 emails/month. Upgrade if needed.
- **"Insufficient authentication scopes" error?** 
  - Go to EmailJS dashboard → Email Services
  - Click on your Gmail service
  - Click "Reconnect Account" or "Update Service"
  - Make sure you're using an App Password (not your regular password)
  - If using OAuth, make sure all permissions are granted
  - Try disconnecting and reconnecting the service
- **Gmail setup issues?** 
  - Use App Passwords (recommended): https://myaccount.google.com/apppasswords
  - Enable 2-Step Verification first
  - Use the 16-character App Password in EmailJS (not your regular password)

## Alternative: Use Your Own Backend

If you prefer to use your own backend instead of EmailJS:

1. Create an API endpoint that accepts POST requests with email data
2. Update the `emailjs.send()` calls in `main.js` to use `fetch()` to your API
3. Handle email sending on your server using services like:
   - SendGrid
   - Mailgun
   - AWS SES
   - Nodemailer (Node.js)

## Example Backend Code (Node.js/Express)

```javascript
app.post('/api/newsletter', async (req, res) => {
  const { email } = req.body;
  
  // Send email using your preferred service
  await sendEmail({
    to: 'hello@favedrinks.com',
    subject: 'New Newsletter Subscription',
    text: `New subscriber: ${email}`
  });
  
  res.json({ success: true });
});
```

Then update `main.js` to use:
```javascript
await fetch('/api/newsletter', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ email })
});
```

