import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const Contact = () => {
  const COMPANY_EMAIL = 'info@mac-ro-capital.com';
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    branch: 'uae',
    message: '',
    contactMode: 'email',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const formRef = useRef();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePhoneChange = (value) => {
    setFormData({
      ...formData,
      phone: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);

    // Validate required fields
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.message) {
      alert('Please fill in all required fields.');
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address.');
      return;
    }

    // Validate message length
    if (formData.message.length > 500) {
      alert('Message is too long. Please keep it under 500 characters.');
      return;
    }

    const emailSubject = `New Contact Form Submission from ${formData.firstName} ${formData.lastName}`;
    const branchDisplay = formData.branch === 'uae' ? 'UAE' : formData.branch === 'italy' ? 'Italy' : 'Unknown';
    const emailBody = `Hello MAC & RO Capital Team,

      I would like to get in touch regarding precious metals investment. Here are my details:

      Name: ${formData.firstName} ${formData.lastName}
      Email: ${formData.email}
      Phone: ${formData.phone}
      Branch: ${branchDisplay}
      Preferred Contact Method: ${formData.contactMode}

      Message:
      ${formData.message}

      I look forward to hearing from you.

      Best regards,
      ${formData.firstName} ${formData.lastName}`;

    // Construct and test mailto URL
    const mailtoUrl = `mailto:${COMPANY_EMAIL}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    console.log('Mailto URL:', mailtoUrl);
    console.log('Mailto URL length:', mailtoUrl.length);

    // Attempt redirect with fallback
    try {
      window.location.href = mailtoUrl;
      // Fallback to window.open after a short delay
      setTimeout(() => {
        window.open(mailtoUrl, '_blank');
      }, 100);
    } catch (error) {
      console.error('Error triggering mailto redirect:', error);
      alert('Unable to open email client. Please ensure an email client is configured or contact us directly at ' + COMPANY_EMAIL);
    }

    resetForm();
    alert('Form submitted! Please check your email client to send the message. If it does not open, contact us directly at ' + COMPANY_EMAIL);
  };

  const resetForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      branch: 'uae',
      message: '',
      contactMode: 'email',
    });
    setFormSubmitted(false);
    if (formRef.current) {
      formRef.current.reset();
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="py-20 bg-[#F1F0E8]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight font-playfair">
            Contact Us
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to start your investment journey? Get in touch with our team of experts 
            for personalized guidance and support.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="py-20 bg-black relative">
              <div className="max-w-6xl mx-auto px-4">
                <div className="flex items-center justify-center min-h-[600px]">
                  <div className="text-white text-center">
                    <h2 className="text-2xl font-medium text-white mb-4 tracking-wide">
                      WE'D LOVE TO
                    </h2>
                    <h1 className="text-5xl sm:text-6xl lg:text-6xl font-bold text-[#DCBC7C] tracking-tight font-playfair mb-8">
                      Hear From You
                    </h1>
                  </div>
                </div>
                <div className="absolute bottom-10 left-0 right-0 flex items-end justify-center text-center">
                  <p className="text-lg text-gray-300">
                    Get in touch for more details
                  </p>
                </div>
              </div>
            </div> 

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 font-playfair">
                Send Us a Message
              </h2>
              
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      aria-required="true"
                      aria-describedby="firstName-error"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A78E52] focus:border-transparent"
                      placeholder="Enter your first name"
                    />
                    {formSubmitted && !formData.firstName && (
                      <p id="firstName-error" className="text-red-600 text-sm mt-1">
                        First name is required.
                      </p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      aria-required="true"
                      aria-describedby="lastName-error"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A78E52] focus:border-transparent"
                      placeholder="Enter your last name"
                    />
                    {formSubmitted && !formData.lastName && (
                      <p id="lastName-error" className="text-red-600 text-sm mt-1">
                        Last name is required.
                      </p>
                    )}
                  </div>
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <PhoneInput
                    country={'ae'}
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    enableSearch={true}
                    searchPlaceholder="Search country..."
                    countryCodeEditable={false}
                    inputProps={{
                      required: true,
                      placeholder: 'Enter phone number',
                      id: 'phone',
                    }}
                    inputStyle={{
                      width: '100%',
                      height: '55px',
                      padding: '12px 12px 12px 80px',
                      border: '2px solid #e0e0e0',
                      borderRadius: '8px',
                      fontSize: '16px',
                      color: '#333',
                      backgroundColor: '#fff',
                    }}
                    buttonStyle={{
                      backgroundColor: '#f3f4f6',
                      border: '2px solid #e0e0e0',
                      borderRight: 'none',
                      borderRadius: '8px 0 0 8px',
                      padding: '12px 15px',
                      height: '55px',
                    }}
                    dropdownStyle={{
                      width: '300px',
                      borderRadius: '8px',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
                      border: '1px solid #e0e0e0',
                    }}
                    containerClass="w-full"
                    buttonClass="focus:outline-none focus:ring-2 focus:ring-[#A78E52] focus:ring-offset-2"
                    inputClass="focus:outline-none focus:ring-2 focus:ring-[#A78E52] focus:ring-offset-2"
                  />
                  {formSubmitted && !formData.phone && (
                    <p id="phone-error" className="text-red-600 text-sm mt-1">
                      Phone number is required.
                    </p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    aria-required="true"
                    aria-describedby="email-error"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A78E52] focus:border-transparent"
                    placeholder="Enter your email address"
                  />
                  {formSubmitted && !emailRegex.test(formData.email) && (
                    <p id="email-error" className="text-red-600 text-sm mt-1">
                      Please enter a valid email address.
                    </p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Select the Branch *
                  </label>
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="branch"
                        value="uae"
                        checked={formData.branch === 'uae'}
                        onChange={handleChange}
                        required
                        className="w-4 h-4 text-black border-gray-300 accent-[#DCBC7C] focus:ring-black"
                      />
                      <span className="ml-3 text-sm text-gray-700">UAE</span>
                    </label>
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="branch"
                        value="italy"
                        checked={formData.branch === 'italy'}
                        onChange={handleChange}
                        className="w-4 h-4 text-black border-gray-300 accent-[#DCBC7C] focus:ring-black"
                      />
                      <span className="ml-3 text-sm text-gray-700">Italy</span>
                    </label>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    aria-required="true"
                    aria-describedby="message-error"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A78E52] focus:border-transparent"
                    placeholder="Tell us about your investment goals and how we can help..."
                  />
                  {formSubmitted && !formData.message && (
                    <p id="message-error" className="text-red-600 text-sm mt-1">
                      Message is required.
                    </p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Preferred Mode of Contact *
                  </label>
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="contactMode"
                        value="phone"
                        checked={formData.contactMode === 'phone'}
                        onChange={handleChange}
                        required
                        className="w-4 h-4 text-black border-gray-300 accent-[#A78E52] focus:ring-black"
                      />
                      <span className="ml-3 text-sm text-gray-700">Phone</span>
                    </label>
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="contactMode"
                        value="email"
                        checked={formData.contactMode === 'email'}
                        onChange={handleChange}
                        className="w-4 h-4 text-black border-gray-300 accent-[#DCBC7C] focus:ring-black"
                      />
                      <span className="ml-3 text-sm text-gray-700">Email</span>
                    </label>
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="contactMode"
                        value="whatsapp"
                        checked={formData.contactMode === 'whatsapp'}
                        onChange={handleChange}
                        className="w-4 h-4 text-black border-gray-300 accent-[#A78E52]"
                      />
                      <span className="ml-3 text-sm text-gray-700">WhatsApp</span>
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-4 font-semibold rounded-lg transition-all duration-300 text-base bg-transparent border-2 border-black hover:bg-black text-black hover:text-white"
                >
                  Submit
                </button>
              </form>
              
              <div className="py-8 mt-12 border-t border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 font-playfair">
                  Contact Information
                </h2>
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-base text-gray-600">
                    <div className="flex items-center mb-2 sm:mb-0">
                      <svg className="w-5 h-5 mr-2 text-[#DCBC7C]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                      </svg>
                      <span>Tel: +39 392 294 7569</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-[#DCBC7C]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                      </svg>
                      <span>Email: {COMPANY_EMAIL}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F1F0E8]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 font-playfair">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Our team is ready to help you navigate the world of precious metals investment 
            and find the perfect solution for your financial goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/services"
              className="px-8 py-4 bg-[#DCBC7C] hover:bg-[#C4A76A] text-black font-semibold rounded-lg transition-all duration-300 text-lg"
            >
              View Our Services
            </Link>
            <Link 
              to="/"
              className="px-8 py-4 bg-transparent border-2 border-[#DCBC7C] text-[#DCBC7C] hover:bg-[#DCBC7C] hover:text-black font-semibold rounded-lg transition-all duration-300 text-lg"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;