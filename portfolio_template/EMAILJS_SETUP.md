# EmailJS Setup Guide for Portfolio Contact Form

## Issues Fixed ✅

1. **Service Interest dropdown not clickable** - Fixed by replacing HTML `<option>` with Material-UI `<MenuItem>`
2. **Company name not going through** - Fixed by updating form field names to match EmailJS expectations

## Step-by-Step Setup

### 1. Create EmailJS Account
- Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)
- Sign up for a free account

### 2. Create Email Service
- Click "Email Services" → "Add New Service"
- Choose your email provider (Gmail, Outlook, etc.)
- Follow the authentication steps
- **Save your Service ID**

### 3. Create Email Template
- Click "Email Templates" → "Create New Template"
- Choose the email service you just created
- **Copy the template from `EMAILJS_TEMPLATE.html`**
- Paste it into the EmailJS template editor
- **Save your Template ID**

### 4. Get Your Public Key
- Go to "Account" → "API Keys"
- **Copy your Public Key**

### 5. Update Environment Variables
Create a `.env` file in your project root:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

### 6. Test Your Form
- Restart your development server
- Fill out the contact form
- Submit and check if you receive the email

## Form Field Mapping

Your contact form now uses these field names that match the EmailJS template:

| Form Field | EmailJS Variable | Description |
|------------|------------------|-------------|
| `user_name` | `{{user_name}}` | Full Name (required) |
| `user_email` | `{{user_email}}` | Email Address (required) |
| `user_company` | `{{user_company}}` | Company Name (optional) |
| `user_service` | `{{user_service}}` | Service Interest (optional) |
| `user_message` | `{{user_message}}` | Message (required) |

## Troubleshooting

### Service Interest Dropdown Not Working
- ✅ **Fixed**: Replaced `<option>` with `<MenuItem>`
- Make sure you have `MenuItem` imported from `@mui/material`

### Company Name Not Sending
- ✅ **Fixed**: Updated field name to `user_company`
- Ensure the field name matches exactly in both the form and template

### Email Not Received
1. Check your EmailJS dashboard for errors
2. Verify all three IDs are correct in your `.env` file
3. Check your spam folder
4. Ensure your email service is properly configured

### Form Validation Issues
- Required fields: Name, Email, Message
- Optional fields: Company, Service Interest
- Email format is validated before submission

## Template Features

The EmailJS template includes:
- Professional styling matching your portfolio theme
- All form fields properly mapped
- Quick action links (reply, WhatsApp, LinkedIn)
- Responsive design for mobile and desktop
- Fallback text for optional fields

## Next Steps

1. **Set up EmailJS** using the steps above
2. **Test the form** with real data
3. **Customize the template** if needed
4. **Monitor submissions** in your EmailJS dashboard

## Support

If you encounter issues:
1. Check the EmailJS documentation
2. Verify all credentials are correct
3. Test with a simple template first
4. Check browser console for JavaScript errors
