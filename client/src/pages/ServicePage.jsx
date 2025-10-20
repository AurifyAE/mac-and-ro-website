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
import { useTranslation } from 'react-i18next';

const ServicePage = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';
  
  const services = [
    {
      title: t('servicePage.services.consultancy.title'),
      description: t('servicePage.services.consultancy.description'),
      image: InvestmentAdvisory,
    },
    {
      title: t('servicePage.services.sourcing.title'),
      description: t('servicePage.services.sourcing.description'),
      image: Sourcing,
    },
    {
      title: t('servicePage.services.mining.title'),
      description: t('servicePage.services.mining.description'),
      image: Mining,
    },
    {
      title: t('servicePage.services.smelting.title'),
      description: t('servicePage.services.smelting.description'),
      image: Smelting,
    },
    {
      title: t('servicePage.services.refining.title'),
      description: t('servicePage.services.refining.description'),
      image: MetalAccounts, 
    },
    {
      title: t('servicePage.services.vaultSafeDeposit.title'),
      description: t('servicePage.services.vaultSafeDeposit.description'),
      image: CapitalRaising,
    }
  ];

  return (
    <div className="min-h-screen bg-white" dir={isArabic ? 'rtl' : 'ltr'}>
      {/* Header Section */}
      <section className="md:py-20 py-10 bg-[#F1F0E8]">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 tracking-tight font-playfair">
            {t('servicePage.hero.title')}
          </h1>
          <p className="text-sm md:text-base text-gray-600 max-w-6xl mx-auto leading-relaxed">
          {t('servicePage.hero.description')}
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
                <p className="text-sm md:text-base text-gray-600 mb-6 leading-relaxed">
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
