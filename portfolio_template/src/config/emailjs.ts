// EmailJS Configuration
// Update these values with your actual EmailJS credentials
// Get them from your EmailJS account at https://www.emailjs.com/

export const EMAILJS_CONFIG = {
  // Your EmailJS Service ID
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'your_service_id_here',
  
  // Your EmailJS Template ID
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'your_template_id_here',
  
  // Your EmailJS Public Key
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'your_public_key_here',
};

// Instructions for setup:
// 1. Create a .env file in your project root
// 2. Add your EmailJS credentials:
//    VITE_EMAILJS_SERVICE_ID=your_actual_service_id
//    VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id
//    VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
// 3. Restart your development server
