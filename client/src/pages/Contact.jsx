import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    investmentType: 'individual'
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
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
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 font-playfair">
                Send Us a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DCBC7C] focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DCBC7C] focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DCBC7C] focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DCBC7C] focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DCBC7C] focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Investment Type
                  </label>
                  <select
                    name="investmentType"
                    value={formData.investmentType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DCBC7C] focus:border-transparent"
                  >
                    <option value="individual">Individual Investment</option>
                    <option value="corporate">Corporate Investment</option>
                    <option value="institutional">Institutional Investment</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DCBC7C] focus:border-transparent"
                    placeholder="Tell us about your investment goals and how we can help..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-[#DCBC7C] hover:bg-[#C4A76A] text-black font-semibold rounded-lg transition-all duration-300 text-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 font-playfair">
                Get in Touch
              </h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 text-[#DCBC7C]">
                    Dubai Office
                  </h3>
                  <p className="text-gray-600 mb-2">
                    MAC & RO CAPITAL FZC
                  </p>
                  <p className="text-gray-600 mb-2">
                    Saif Suite - Gold Park, Q1-1-027 Sharjah
                  </p>
                  <p className="text-gray-600">
                    Tel: +39 392 294 7569
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 text-[#DCBC7C]">
                    Milan Office
                  </h3>
                  <p className="text-gray-600 mb-2">
                    MAC & RO SRL
                  </p>
                  <p className="text-gray-600 mb-2">
                    Via dei Mocenigo 9, 73100 Lecce, Italy
                  </p>
                  <p className="text-gray-600">
                    Tel: +39 392 294 7569
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 text-[#DCBC7C]">
                    Business Hours
                  </h3>
                  <p className="text-gray-600 mb-2">
                    Monday - Friday: 9:00 AM - 6:00 PM (CET)
                  </p>
                  <p className="text-gray-600 mb-2">
                    Saturday: 9:00 AM - 1:00 PM (CET)
                  </p>
                  <p className="text-gray-600">
                    Sunday: Closed
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 text-[#DCBC7C]">
                    Emergency Contact
                  </h3>
                  <p className="text-gray-600 mb-2">
                    For urgent matters outside business hours
                  </p>
                  <p className="text-gray-600 font-semibold">
                    +39 392 294 7569
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
