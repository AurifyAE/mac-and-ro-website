import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Accounts from '../components/homePage/Accounts';
import CreateAccountSteps from '../components/homePage/CreateAccountSteps';

const ServicePage = () => {
  const services = [
    {
      title: "Investment Advisory",
      description: "We provide strategic investment advice based on in-depth market analysis and risk profiling. Our goal is to help clients build diversified, performance-driven portfolios that align with their financial objectives.",
      
    },
    {
      title: "Wealth Management",
      description: "Our comprehensive wealth management services combine financial planning, asset management, and succession strategies to protect and grow your wealth for generations to come.",
    
    },
    {
      title: "Corporate Finance Solutions",
      description: "We support businesses with tailored capital structuring, mergers and acquisitions advisory, and debt financing solutions—ensuring sustainable growth and operational efficiency.",
      
    },
    {
      title: "Metal Accounts & Bullion Services",
      description: "Clients can access secure and transparent trading, storage, and management of precious metals. Our metal account services offer real-time tracking and physical delivery options.",
      
    },
    {
      title: "Compliance & Risk Consulting",
      description: "We assist businesses in navigating regulatory frameworks by offering governance audits, policy development, and risk mitigation strategies in line with UAE laws and international best practices.",
      
    },
    {
      title: "Private Placement & Fund Structuring",
      description: "We help structure private investment vehicles and facilitate capital raising through private placements—ensuring full regulatory alignment and investor confidence.",
      
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="py-20 bg-[#F1F0E8]">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 tracking-tight font-playfair">
            Our Services
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-6xl mx-auto leading-relaxed">
          At Mac and Ro Capital, we offer a suite of specialized financial and investment services tailored to meet the needs of individuals, corporations, and institutional clients. Our services are designed with a deep understanding of market trends, compliance requirements, and client goals—ensuring integrity, transparency, and long-term value.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-lg font-playfair font-bold mb-4 text-black">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Accounts />
      <CreateAccountSteps />  

      {/* CTA Section */}
      <section className="py-20 bg-[#F1F0E8]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 font-playfair">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact our team of experts to discuss your investment needs and learn how 
            Mac & Ro can help you achieve your financial goals.
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

export default ServicePage;
