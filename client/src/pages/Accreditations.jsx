import React from 'react';
import { Link } from 'react-router-dom';

const Accreditations = () => {
  const accreditations = [
    {
      title: "Bank of Italy",
      code: "Professional Operator Code Gold 5010277",
      description: "Full regulatory compliance with Italian banking regulations for precious metals operations.",
      status: "Active",
      validUntil: "2025-12-31"
    },
    {
      title: "OECD Guidelines",
      description: "Compliance with OECD Due Diligence Guidance for Responsible Supply Chains of Minerals from Conflict-Affected and High-Risk Areas.",
      status: "Certified",
      validUntil: "Ongoing"
    },
    {
      title: "Dubai Multi Commodities Centre",
      description: "Registered member of DMCC, enabling operations in the UAE's premier free trade zone.",
      status: "Active",
      validUntil: "2026-06-30"
    },
    {
      title: "Sharia Compliance",
      description: "Islamic finance certification ensuring all products meet Sharia law requirements.",
      status: "Certified",
      validUntil: "Ongoing"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="py-20 bg-[#F1F0E8]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight font-playfair">
            Accreditations & Compliance
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Mac & Ro operates under the highest standards of regulatory compliance and 
            industry certifications, ensuring the security and legitimacy of all operations.
          </p>
        </div>
      </section>

      {/* Main Accreditations */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {accreditations.map((accreditation, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 text-[#DCBC7C]">
                    {accreditation.title}
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    accreditation.status === 'Active' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {accreditation.status}
                  </span>
                </div>
                
                {accreditation.code && (
                  <p className="text-sm text-gray-500 mb-3 font-mono bg-gray-50 px-3 py-2 rounded">
                    {accreditation.code}
                  </p>
                )}
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {accreditation.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>Valid until: {accreditation.validUntil}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Standards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 font-playfair">
              Our Compliance Standards
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We maintain rigorous internal controls and regularly undergo external audits 
              to ensure continued compliance with all regulatory requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#DCBC7C] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Regular Audits</h3>
              <p className="text-gray-600">
                Annual external audits by independent regulatory bodies ensure ongoing compliance.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#DCBC7C] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Internal Controls</h3>
              <p className="text-gray-600">
                Comprehensive internal control systems monitor all operations and transactions.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#DCBC7C] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Transparency</h3>
              <p className="text-gray-600">
                Full disclosure of all regulatory certifications and compliance status.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#F1F0E8]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 font-playfair">
            Trust in Our Compliance
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Our accreditations demonstrate our commitment to operating at the highest 
            standards of regulatory compliance and industry best practices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/services"
              className="px-8 py-4 bg-[#DCBC7C] hover:bg-[#C4A76A] text-black font-semibold rounded-lg transition-all duration-300 text-lg"
            >
              Explore Our Services
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

export default Accreditations;
