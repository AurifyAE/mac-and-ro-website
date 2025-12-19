import React from 'react';
import { Link } from 'react-router-dom';
import { newsItems } from '../data/news';

const News = () => {
  

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="py-10 md:py-16 bg-[#F1F0E8]">
        <div className="max-w-6xl mx-auto px-4 text-left">
          <h1 className="text-3xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 tracking-tight font-playfair">
            News & Updates
          </h1>
          <p className="text-sm md:text-base sm:text-base text-gray-600 mx-auto leading-relaxed">
            Stay informed about the latest developments at Mac & Ro, market insights, 
            and industry updates from the world of precious metals investment.
          </p>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-10 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[...newsItems].reverse().map((news, index) => (
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
                
                <p className="text-sm md:text-base text-gray-600 mb-6 leading-relaxed whitespace-pre-line">
                  {news.excerpt}
                </p>
                
                <Link to={`/news/${news.slug}`} className="text-[#DCBC7C] hover:text-[#C4A76A] font-semibold transition-colors">
                  Read More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-10 md:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 font-playfair">
            Stay Updated
          </h2>
          <p className="text-sm md:text-base text-gray-600 mb-8 max-w-2xl mx-auto">
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
    </div>
  );
};

export default News;
