import React from 'react';
import { Link } from 'react-router-dom';

const WhoWeAre = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="py-20 bg-[#F1F0E8]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight font-playfair">
            Who We Are
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Mac & Ro is a leading precious metals investment firm, committed to providing secure, 
            transparent, and compliant investment solutions to clients worldwide.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 font-playfair">
                Our Story
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Founded with a vision to democratize access to precious metals investments, 
                Mac & Ro has grown from a local Italian firm to an international powerhouse 
                serving clients across Europe, the Middle East, and beyond.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our journey began in Lecce, Italy, where we established our first operations 
                under the strict regulatory oversight of the Bank of Italy. Today, we operate 
                across multiple jurisdictions, maintaining the highest standards of compliance 
                and client service.
              </p>
            </div>
            <div className="bg-gray-100 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Milestones</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-[#DCBC7C] rounded-full mr-3"></span>
                  <span className="text-gray-700">2018 - Company founded in Lecce, Italy</span>
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-[#DCBC7C] rounded-full mr-3"></span>
                  <span className="text-gray-700">2020 - Bank of Italy certification</span>
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-[#DCBC7C] rounded-full mr-3"></span>
                  <span className="text-gray-700">2022 - Dubai office expansion</span>
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-[#DCBC7C] rounded-full mr-3"></span>
                  <span className="text-gray-700">2024 - Global operations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 font-playfair">
              Mission & Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We are driven by our commitment to excellence, transparency, and client success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#DCBC7C] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Trust & Security</h3>
              <p className="text-gray-600">
                Building lasting relationships through transparent operations and secure investments.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#DCBC7C] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600">
                Continuously evolving our services to meet the changing needs of our clients.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#DCBC7C] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Client Focus</h3>
              <p className="text-gray-600">
                Putting our clients' success at the heart of everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#F1F0E8]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 font-playfair">
            Ready to Learn More?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover how Mac & Ro can help you achieve your investment goals with our 
            professional expertise and comprehensive services.
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

export default WhoWeAre;
