#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('📧 EmailJS Environment Setup');
console.log('============================\n');

// Check if .env file already exists
const envPath = path.join(__dirname, '.env');
if (fs.existsSync(envPath)) {
  console.log('⚠️  .env file already exists!');
  console.log('Please edit it manually with your EmailJS credentials.\n');
} else {
  // Create .env file with template
  const envContent = `# EmailJS Configuration
# Get these values from your EmailJS account at https://www.emailjs.com/

# Your EmailJS Service ID
VITE_EMAILJS_SERVICE_ID=your_service_id_here

# Your EmailJS Template ID  
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here

# Your EmailJS Public Key
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
`;

  fs.writeFileSync(envPath, envContent);
  console.log('✅ .env file created successfully!');
  console.log('📝 Please edit the .env file with your actual EmailJS credentials.\n');
}

console.log('📚 Next steps:');
console.log('1. Go to https://www.emailjs.com/ and create an account');
console.log('2. Create an Email Service (Gmail, Outlook, etc.)');
console.log('3. Create an Email Template');
console.log('4. Get your Public Key from Account > API Keys');
console.log('5. Update the .env file with your credentials');
console.log('6. Restart your development server (npm run dev)');
console.log('\n📖 See EMAILJS_SETUP.md for detailed instructions');
