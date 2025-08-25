// EmailJS Configuration
// Replace these values with your actual EmailJS credentials

export const EMAILJS_CONFIG = {
  // Your EmailJS service ID (found in your EmailJS dashboard)
  SERVICE_ID: 'YOUR_EMAILJS_SERVICE_ID',
  
  // Your EmailJS template ID (found in your EmailJS dashboard)
  TEMPLATE_ID: 'YOUR_EMAILJS_TEMPLATE_ID',
  
  // Your EmailJS public key (found in your EmailJS dashboard)
  PUBLIC_KEY: 'YOUR_EMAILJS_PUBLIC_KEY',
  
  // Company email where contact form submissions will be sent
  COMPANY_EMAIL: 'mac.ro.capital.fzc@gmail.com',
  
  // Company name for email subjects
  COMPANY_NAME: 'MAC & RO Capital'
};

// EmailJS Template Variables
// These should match the variables in your EmailJS template
export const EMAILJS_TEMPLATE_VARS = {
  from_name: '',        // Sender's full name
  from_email: '',       // Sender's email
  from_phone: '',       // Sender's phone number
  branch: '',           // Selected branch (UAE or Italy)
  contact_mode: '',     // Preferred contact method
  message: '',          // Sender's message
  to_email: '',         // Company email (auto-filled)
  subject: ''           // Email subject (auto-generated)
};
