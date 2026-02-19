# Newsletter Subscription Guide

## How Newsletter Subscriptions Work

When visitors subscribe to your newsletter through the website, their email addresses are sent to **contact@drinkfave.com** via EmailJS.

### Current Setup

- **Subscription Email Destination**: `contact@drinkfave.com`
- **Email Service**: EmailJS (configured in `main.js`)
- **Service ID**: `service_zrgt5j8`
- **Template ID**: `template_wggnxwu`
- **Public Key**: `5-5qrTfZPTohgUGLU`

## How Subscribers Subscribe

1. Visitors go to the homepage (index.html) and scroll to the newsletter section
2. They enter their email address in the newsletter form
3. Upon submission, an email is sent to **contact@drinkfave.com** with the subscriber's email
4. The subscriber sees a success message: "Thanks for subscribing! Check your inbox soon."

## How to Send Emails to Subscribers

There are several ways to send emails to your subscribers when new flavors or stores open:

### Option 1: EmailJS with Bulk Email Service (Recommended)

**Best for**: Small to medium subscriber lists (up to 200 emails/month on free tier)

1. **Set up EmailJS Template for Bulk Emails**:
   - Log in to EmailJS: https://www.emailjs.com/
   - Go to **Email Templates** → **Create New Template**
   - Create a template named "FAVE Newsletter Announcement"
   - Use EmailJS variables: `{{subject}}`, `{{message}}`, `{{subscriber_list}}`
   - Save the template and copy the Template ID

2. **Build Subscriber List**:
   - Check your `contact@drinkfave.com` inbox for subscription emails
   - Collect all subscriber emails into a CSV or list
   - Or use EmailJS's built-in contact list feature (if available on your plan)

3. **Send Bulk Emails**:
   - Use EmailJS's API to send to multiple recipients
   - Or manually send using EmailJS dashboard (if supported)

**Limitation**: Free tier allows 200 emails/month. For more, upgrade to paid plan ($15/month for 1000 emails).

### Option 2: Export to Email Marketing Service (Best Practice)

**Best for**: Unlimited subscribers, professional email campaigns

1. **Export Subscriber List**:
   - Collect all subscriber emails from `contact@drinkfave.com` inbox
   - Export to CSV format: `email`
   ```
   email
   subscriber1@example.com
   subscriber2@example.com
   subscriber3@example.com
   ```

2. **Choose an Email Marketing Service**:
   
   **Mailchimp** (Recommended):
   - Free up to 500 subscribers
   - Go to: https://mailchimp.com/
   - Sign up → Import contacts from CSV
   - Create email campaigns
   - Design beautiful emails with templates
   - Send to all subscribers at once

   **SendGrid**:
   - Free tier: 100 emails/day
   - Go to: https://sendgrid.com/
   - Import contact list
   - Use their API or dashboard to send emails

   **MailerLite**:
   - Free up to 1,000 subscribers
   - Go to: https://www.mailerlite.com/
   - Import subscribers
   - Create and send campaigns

3. **Send Announcement Emails**:
   - Create a new campaign
   - Write subject: "🍑 New FAVE Flavor Dropping Soon!"
   - Design email with product images
   - Send to all subscribers

**Example Email Template**:
```
Subject: 🍑 New FAVE Flavor Dropping Soon!

Hey FAVE fam!

We've been working on something special, and it's finally ready...

Introducing [NEW FLAVOR NAME]! 

[Product image]

Get ready for [flavor description]. This one's going to be a game-changer.

Get yours first at [link to find_fave.html]

- The FAVE Team
```

### Option 3: Integrate with Google Sheets + Email Service

**Best for**: Automatic subscriber management

1. **Set up Google Sheets**:
   - Create a new Google Sheet: "FAVE Subscribers"
   - Add columns: `Email`, `Date Subscribed`, `Status`
   - Make it accessible via API

2. **Update EmailJS to Save to Google Sheets**:
   - Use EmailJS's Google Sheets integration
   - Automatically save new subscribers to the sheet
   - Or use Google Apps Script to forward emails to Sheets

3. **Use Email Marketing Service**:
   - Connect your Google Sheet to Mailchimp/SendGrid
   - Auto-sync subscribers
   - Send campaigns when needed

### Option 4: Build Your Own Backend (Advanced)

**Best for**: Complete control, custom features

1. **Create Backend API**:
   - Store subscribers in a database (PostgreSQL, MongoDB, etc.)
   - Update `main.js` to send subscriptions to your API instead of EmailJS
   - Build an admin dashboard to manage subscribers

2. **Send Emails via Backend**:
   - Use SendGrid/Mailgun/SES API
   - Send bulk emails programmatically
   - Track opens, clicks, unsubscribes

**Example API endpoint**:
```javascript
// POST /api/newsletter/subscribe
// Saves email to database

// POST /api/newsletter/send
// Sends email to all subscribers
```

## Recommended Workflow

### For New Flavor Announcements:

1. **Prepare your announcement** (copy, images, links)
2. **Export subscriber list** from `contact@drinkfave.com` to CSV
3. **Import to Mailchimp** (or your chosen service)
4. **Create email campaign** with announcement
5. **Send to all subscribers**
6. **Track opens and engagement**

### For New Store Openings:

1. **Create announcement email** with store location, address, hours
2. **Use Mailchimp/SendGrid** to send to all subscribers
3. **Include map link** or directions
4. **Add special opening day offer** if applicable

## Setting Up Mailchimp (Step-by-Step)

1. **Sign up**: https://mailchimp.com/ (free for up to 500 contacts)

2. **Create Audience**:
   - Dashboard → Audience → Create Audience
   - Name it "FAVE Newsletter Subscribers"

3. **Import Contacts**:
   - Audience → Add contacts → Import contacts
   - Upload your CSV file with subscriber emails
   - Map "email" column
   - Import

4. **Create Campaign**:
   - Campaigns → Create campaign → Email
   - Choose audience: "FAVE Newsletter Subscribers"
   - Design your email
   - Set subject line
   - Schedule or send immediately

5. **Send**:
   - Review and send
   - Track performance (opens, clicks)

## EmailJS Template Setup (Current)

Your EmailJS template should have:

**Subject**: `New FAVE Newsletter Subscription`

**Body**:
```
New newsletter subscription:

Email: {{subscriber_email}}
Date: {{date}}

This subscriber wants to be notified about:
- New flavor drops
- Store locations  
- Company updates

---

Reply to this email to contact the subscriber directly.
```

## Quick Tips

- **Always get permission**: Only send to people who subscribed
- **Include unsubscribe link**: Required by law (CAN-SPAM Act)
- **Personalize**: Use subscriber's name if possible
- **Mobile-friendly**: Most people read emails on phones
- **Clear call-to-action**: "Shop Now", "Find Store", etc.
- **Track performance**: See what resonates with your audience

## Support

If you need help setting up email marketing:
- Mailchimp Support: https://mailchimp.com/support/
- EmailJS Support: https://www.emailjs.com/support/
- Or contact your developer

---

**Last Updated**: January 2025
**Email for Subscriptions**: contact@drinkfave.com





