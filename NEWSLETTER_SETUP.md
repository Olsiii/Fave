# Newsletter subscription – how to make it work

The newsletter form on the homepage uses **EmailJS** to send you an email when someone subscribes. Until you add your own EmailJS keys, the form will still show “Thanks for subscribing” but **no email will be sent**.

## 1. Create an EmailJS account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/).
2. Sign up (free tier is enough).
3. Confirm your email if asked.

## 2. Add an email service

1. In the dashboard, go to **Email Services** → **Add New Service**.
2. Pick your provider (e.g. **Gmail**, **Outlook**, **SendGrid**).
3. Connect the account (e.g. for Gmail you’ll use an App Password).
4. After saving, copy the **Service ID** (e.g. `service_abc123`).

## 3. Create an email template

1. Go to **Email Templates** → **Create New Template**.
2. Set **To Email** to `{{to_email}}` (we send this from the site).
3. Set **Subject** to something like: `FAVE newsletter: {{subject}}`.
4. In the body you can use:
   - `{{subscriber_email}}` – the person who subscribed
   - `{{from_email}}` – same as above
   - `{{message}}` – short text we send
   - `{{date}}` – signup date
5. Save and copy the **Template ID** (e.g. `template_xyz789`).

## 4. Get your public key

1. Go to **Account** → **API Keys** (or **General**).
2. Copy your **Public Key** (e.g. `abc123XYZ`).

## 5. Put the keys in your project

1. Open **main.js**.
2. Find the `EMAILJS_CONFIG` object near the top.
3. Replace the placeholders with your real values:

```javascript
const EMAILJS_CONFIG = {
  publicKey: "YOUR_ACTUAL_PUBLIC_KEY",
  serviceId: "service_xxxxx",   // from Email Services
  templateId: "template_xxxxx", // from Email Templates
  receiveEmail: "contact@drinkfave.com"
}
```

4. Save the file.

## 6. Test

1. Open your site (e.g. the homepage).
2. Enter an email in the newsletter form and click **Subscribe**.
3. You should see “Thanks for subscribing!” and receive an email at `receiveEmail`.

If you see “Couldn’t subscribe…” instead, check the browser console (F12 → Console) for the exact error and that your Service ID, Template ID, and Public Key are correct in `EMAILJS_CONFIG`.
