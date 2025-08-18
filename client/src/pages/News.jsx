import React from 'react';
import { Link } from 'react-router-dom';

const News = () => {
  const newsItems = [
    {
      title: "Mac & Ro Expands to Dubai",
      date: "March 15, 2024",
      excerpt: "We're excited to announce the opening of our new Dubai office, expanding our presence in the Middle East region.",
      category: "Company News"
    },
    {
      title: "Gold Market Update Q1 2024",
      date: "March 1, 2024",
      excerpt: "Analysis of gold market performance and outlook for the first quarter of 2024.",
      category: "Market Analysis"
    },
    {
      title: "New Sharia-Compliant Products",
      date: "February 20, 2024",
      excerpt: "Launch of new Islamic finance compliant gold investment products for our Middle Eastern clients.",
      category: "Product Launch"
    },
    {
      title: "Regulatory Compliance Update",
      date: "February 10, 2024",
      excerpt: "Latest updates on regulatory requirements and our continued compliance with international standards.",
      category: "Compliance"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="py-20 bg-[#F1F0E8]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight font-playfair">
            News & Updates
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay informed about the latest developments at Mac & Ro, market insights, 
            and industry updates from the world of precious metals investment.
          </p>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {newsItems.map((news, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-[#DCBC7C] text-black text-sm font-semibold rounded-full">
                    {news.category}
                  </span>
                  <span className="text-sm text-gray-500">{news.date}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {news.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {news.excerpt}
                </p>
                
                <button className="text-[#DCBC7C] hover:text-[#C4A76A] font-semibold transition-colors">
                  Read More →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 font-playfair">
            Stay Updated
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest news, market updates, 
            and exclusive insights directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DCBC7C] focus:border-transparent"
            />
            <button className="px-6 py-3 bg-[#DCBC7C] hover:bg-[#C4A76A] text-black font-semibold rounded-lg transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#F1F0E8]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 font-playfair">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Have questions about our news or want to learn more about our services? 
            Our team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="px-8 py-4 bg-[#DCBC7C] hover:bg-[#C4A76A] text-black font-semibold rounded-lg transition-all duration-300 text-lg"
            >
              Contact Us
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

export default News;
