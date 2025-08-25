import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Accounts from '../components/homePage/Accounts';
import CreateAccountSteps from '../components/homePage/CreateAccountSteps';
import InvestmentAdvisory from '../assets/service/investment-advisory.svg';
import MetalAccounts from '../assets/service/bullion-bars.svg';
import CapitalRaising from '../assets/service/capital.svg';
import Sourcing from '../assets/service/sourcing.svg';
import Mining from '../assets/service/mining.svg';
import Smelting from '../assets/service/smelting.svg';
import serviceBanner from '../assets/service/service-banner.jpg';

const ServicePage = () => {
  const services = [
    {
      title: "Consultancy",
      description: "Mac & Ro Capital FZC provides specialized consultancy in gold investment and wealth management. Our experts guide individuals, families, and businesses in building tailored strategies that focus on security, diversification, and long-term growth, with full compliance to international standards.",
      image: InvestmentAdvisory,
    },
    {
      title: "Sourcing",
      description: "We ensure the ethical and responsible sourcing of raw gold through partnerships with certified and traceable suppliers. Every step follows strict OECD guidelines, giving our clients complete transparency and confidence in the origins of their investments.",
      image: Sourcing,
    },
    {
      title: "Mining",
      description: "Through strategic mining collaborations, Mac & Ro secures access to high-quality raw gold. Our commitment to responsible mining practices ensures sustainability, legal compliance, and respect for environmental and social standards.",
      image: Mining,
    },
    {
      title: "Smelting",
      description: "Our advanced smelting facilities transform mined materials into uniform, high-quality inputs for refining. This process guarantees reliability, consistency, and full traceability as raw material progresses through the gold value chain.",
      image: Smelting,
    },
    {
      title: "Refining",
      description: "Mac & Ro refines gold to the highest international standards, delivering LBMA-certified 24K (999.9) pure gold. Every bar is numbered, documented, and accompanied by certification to ensure authenticity and investment-grade quality.",
      image: MetalAccounts, 
    },
    {
      title: "Vault Safe Deposit",
      description: "We provide world-class storage solutions for precious metals in international vaults such as Brinks, Loomis, and Malca-Amit. With segregated deposits, constant tracking, and full insurance coverage, clients enjoy complete peace of mind and full legal ownership of their assets.",
      image: CapitalRaising,
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
          At Mac & Ro Capital, we provide end-to-end solutions across the gold value chain — from sourcing and mining to refining and secure vaulting. With decades of expertise and strict adherence to international standards, our services are designed to deliver transparency, reliability, and long-term value for individuals, families, and businesses seeking to safeguard and grow their wealth through physical gold.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white p-8 border border-gray-200 hover:shadow-lg transition-all duration-300"
              >
                <img src={service.image} alt={service.title} className="w-12 h-12 mb-4" />
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

      <section>
        <div className="max-w-6xl mx-auto px-4 py-5">
          <div className="max-w-6xl mx-auto">
            <img 
              src={serviceBanner} 
              alt="Gold Investment Services" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>
      
      <CreateAccountSteps />  

    </div>
  );
};

export default ServicePage;
