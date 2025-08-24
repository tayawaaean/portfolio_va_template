# EmailJS Setup Guide

## Step 1: Create Environment Variables

Create a `.env` file in your project root (same level as `package.json`) with the following content:

```env
# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=your_actual_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key_here
```

## Step 2: Get Your EmailJS Credentials

1. Go to [EmailJS](https://www.emailjs.com/) and create an account
2. Create a new Email Service (Gmail, Outlook, etc.)
3. Create a new Email Template
4. Get your Public Key from Account > API Keys

## Step 3: Update the .env File

Replace the placeholder values with your actual credentials:

```env
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_EMAILJS_PUBLIC_KEY=user_def456
```

## Step 4: Restart Development Server

After updating the `.env` file, restart your development server:

```bash
npm run dev
```

## Important Notes

- **Never commit your `.env` file** to version control
- The `.env.example` file shows the required format
- All environment variables must start with `VITE_` to be accessible in the browser
- Your contact form will now work with real email functionality

## Troubleshooting

If emails aren't sending:
1. Check that all credentials are correct
2. Ensure the `.env` file is in the project root
3. Verify the development server has been restarted
4. Check the browser console for any error messages
