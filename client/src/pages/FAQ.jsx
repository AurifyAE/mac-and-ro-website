import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is Mac & Ro and what services do you provide?",
      answer: "Mac & Ro is a leading precious metals investment firm that provides gold investment accounts, physical gold delivery, corporate gold solutions, and Sharia-compliant investment products. We operate under strict regulatory oversight and offer secure, transparent investment solutions."
    },
    {
      question: "Is Mac & Ro regulated and compliant?",
      answer: "Yes, Mac & Ro operates under full regulatory compliance. We are certified by the Bank of Italy (Professional Operator Code Gold 5010277), comply with OECD guidelines, and maintain Sharia compliance for Islamic finance products."
    },
    {
      question: "What types of gold products can I invest in?",
      answer: "We offer a range of gold investment options including gold bars (1g to 1kg), gold coins, gold investment accounts, and corporate gold solutions. All products are certified for purity and globally recognized."
    },
    {
      question: "How secure is my investment with Mac & Ro?",
      answer: "Your investment is highly secure. We use world-class vault facilities, maintain comprehensive insurance coverage, and operate under strict regulatory oversight. All transactions are monitored and audited regularly."
    },
    {
      question: "Do you offer Sharia-compliant products?",
      answer: "Yes, we offer a full range of Sharia-compliant gold investment products that meet Islamic finance requirements. These products operate without interest charges and follow ethical investment principles."
    },
    {
      question: "What are the minimum investment amounts?",
      answer: "We offer flexible investment options starting from as little as 1 gram of gold. Corporate clients can access larger investment opportunities with customized solutions tailored to their needs."
    },
    {
      question: "How can I open an account with Mac & Ro?",
      answer: "Opening an account is simple. You can start online through our website or contact our institutional desk. Our team will guide you through the application process, compliance review, and account activation."
    },
    {
      question: "What are your fees and charges?",
      answer: "We maintain transparent fee structures with no hidden charges. Our fees are competitive and clearly disclosed upfront. We offer volume discounts for larger investments and corporate clients."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="py-20 bg-[#F1F0E8]">
        <div className="max-w-6xl mx-auto px-4 text-left">
          <h1 className="text-3xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 tracking-tight font-playfair">
            Frequently Asked Questions
          </h1>
          <p className="text-base sm:text-base text-gray-600 mx-auto leading-relaxed">
            Find answers to common questions about our services, investment processes, 
            and how to get started with Mac & Ro.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg border border-gray-200 overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </span>
                  <svg 
                    className={`w-6 h-6 text-[#DCBC7C] transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 font-playfair">
            Still Have Questions?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Can't find the answer you're looking for? Our team of experts is here to help. 
            Contact us for personalized assistance with your investment needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="px-8 py-4 bg-[#DCBC7C] hover:bg-[#C4A76A] text-black font-semibold rounded-lg transition-all duration-300 text-lg"
            >
              Contact Our Team
            </Link>
            <Link 
              to="/services"
              className="px-8 py-4 bg-transparent border-2 border-[#DCBC7C] text-[#DCBC7C] hover:bg-[#DCBC7C] hover:text-black font-semibold rounded-lg transition-all duration-300 text-lg"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 bg-[#F1F0E8]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 font-playfair">
              Quick Links
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore more about Mac & Ro and our comprehensive investment solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link 
              to="/who-we-are"
              className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">About Us</h3>
              <p className="text-gray-600">
                Learn about our company history, mission, and values.
              </p>
            </Link>
            
            <Link 
              to="/accreditations"
              className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Accreditations</h3>
              <p className="text-gray-600">
                View our regulatory certifications and compliance status.
              </p>
            </Link>
            
            <Link 
              to="/"
              className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Home</h3>
              <p className="text-gray-600">
                Return to our main page for an overview of all services.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
