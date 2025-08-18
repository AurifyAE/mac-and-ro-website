import React from 'react';
import { Link } from 'react-router-dom';

const CorporateGovernance = () => {
  const governanceStructure = [
    {
      title: "Board of Directors",
      description: "Overseeing strategic direction and ensuring compliance with all regulatory requirements.",
      members: ["Chairman", "CEO", "Independent Directors", "Non-Executive Directors"]
    },
    {
      title: "Executive Management",
      description: "Responsible for day-to-day operations and implementation of board strategies.",
      members: ["Chief Executive Officer", "Chief Financial Officer", "Chief Compliance Officer", "Head of Operations"]
    },
    {
      title: "Audit Committee",
      description: "Ensuring financial integrity and compliance with accounting standards.",
      members: ["Independent Chair", "Financial Experts", "Non-Executive Directors"]
    },
    {
      title: "Risk Management",
      description: "Identifying, assessing, and managing operational and financial risks.",
      members: ["Chief Risk Officer", "Risk Committee", "Internal Audit Team"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="py-20 bg-[#F1F0E8]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight font-playfair">
            Corporate Governance
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Mac & Ro maintains the highest standards of corporate governance, ensuring 
            transparency, accountability, and ethical business practices across all operations.
          </p>
        </div>
      </section>

      {/* Governance Principles */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 font-playfair">
              Our Governance Principles
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We are committed to maintaining the highest standards of corporate governance 
              and ethical business conduct.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#DCBC7C] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Transparency</h3>
              <p className="text-gray-600 text-sm">
                Open and clear communication with all stakeholders
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#DCBC7C] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Accountability</h3>
              <p className="text-gray-600 text-sm">
                Clear responsibility and decision-making processes
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#DCBC7C] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Integrity</h3>
              <p className="text-gray-600 text-sm">
                Ethical behavior and honest business practices
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#DCBC7C] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Security</h3>
              <p className="text-gray-600 text-sm">
                Protection of client assets and information
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Governance Structure */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 font-playfair">
              Governance Structure
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our organizational structure ensures clear lines of responsibility and 
              effective oversight of all business operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {governanceStructure.map((structure, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-[#DCBC7C]">
                  {structure.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {structure.description}
                </p>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Members:</h4>
                  <ul className="space-y-2">
                    {structure.members.map((member, memberIndex) => (
                      <li key={memberIndex} className="flex items-center text-gray-700">
                        <span className="w-2 h-2 bg-[#DCBC7C] rounded-full mr-3"></span>
                        {member}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#F1F0E8]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 font-playfair">
            Committed to Excellence
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Our strong corporate governance framework ensures we operate with the highest 
            standards of integrity and transparency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/accreditations"
              className="px-8 py-4 bg-[#DCBC7C] hover:bg-[#C4A76A] text-black font-semibold rounded-lg transition-all duration-300 text-lg"
            >
              View Accreditations
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

export default CorporateGovernance;
