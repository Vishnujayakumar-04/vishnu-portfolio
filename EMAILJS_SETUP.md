# EmailJS Setup Guide

This guide will help you set up EmailJS to receive contact form submissions via email.

## Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (free tier includes 200 emails/month)
3. Verify your email address

## Step 2: Set Up Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the connection steps for your email provider
5. Once connected, note down your **Service ID** (you'll need this later)

## Step 3: Create Email Template

1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use this template structure:

   **Template Name:** Contact Form
  
   **Subject:** New Contact Form Message from {{from_name}}
  
   **Content:**
   ```
   You have received a new message from your portfolio contact form.
   
   Name: {{from_name}}
   Email: {{from_email}}
   
   Message:
   {{message}}
   
   ---
   This email was sent from your portfolio website.
   ```

4. Save the template and note down your **Template ID**

## Step 4: Get Your Public Key

1. Go to **Account** → **General** in your EmailJS dashboard
2. Find your **Public Key** (also called User ID)
3. Copy this value

## Step 5: Configure Environment Variables

1. Copy the `.env.example` file to create a `.env` file:
   ```bash
   cp .env.example .env
   ```

2. Open the `.env` file and fill in your EmailJS credentials:
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id_from_step_2
   VITE_EMAILJS_TEMPLATE_ID=your_template_id_from_step_3
   VITE_EMAILJS_PUBLIC_KEY=your_public_key_from_step_4
   ```

3. Replace the placeholder values with your actual EmailJS credentials

## Step 6: Update Email Template Variables (Important!)

Make sure your EmailJS template includes these variable names (they must match exactly):
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{message}}` - The message content
- `{{to_email}}` - Your email (vishnujayakumar4104@gmail.com)

The contact form automatically sends these values to your template.

## Step 7: Test Your Setup

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Go to the Contact page
3. Fill out the form and submit
4. Check your email inbox - you should receive the message!

## Troubleshooting

### Form shows "Email service is not configured"
- Make sure you created a `.env` file (not just `.env.example`)
- Check that all three environment variables are set correctly
- Restart your development server after creating/updating `.env`

### Emails not being received
- Check your EmailJS dashboard for error logs
- Verify your email service connection in EmailJS
- Make sure your email provider allows emails from EmailJS
- Check spam/junk folder

### Template variables not working
- Ensure variable names in your EmailJS template match exactly: `{{from_name}}`, `{{from_email}}`, `{{message}}`
- Variable names are case-sensitive

## Important Notes

- The `.env` file is already in `.gitignore`, so your credentials won't be committed to git
- For production deployment, you'll need to add these environment variables to your hosting platform (Vercel, Netlify, etc.)
- The free tier includes 200 emails per month - upgrade if you need more

## Alternative: Direct Email Link

If you don't want to set up EmailJS, the form will show an error message with your direct email address (vishnujayakumar4104@gmail.com) for users to contact you directly.

