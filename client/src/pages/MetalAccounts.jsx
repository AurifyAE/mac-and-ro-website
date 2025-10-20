import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import metalAccountBanner from '../assets/metalAccount/metal-account-banner.jpg';
import MetalAccountCTA from '../components/MetalAccountCTA';
import { Link } from 'react-router-dom';

const MetalAccounts = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';
  
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  const accountCards = [
    {
      id: 1,
      title: t('metalAccountsPage.accounts.deluxe.title'),
      link: "/metal-accounts/deluxe-metal-account",
      description: t('metalAccountsPage.accounts.deluxe.description'),
      whoItsFor: t('metalAccountsPage.accounts.deluxe.whoItsFor'),
      keyBenefits: t('metalAccountsPage.accounts.deluxe.keyBenefits'),
      type: "individual"
    },
    {
      id: 2,
      title: t('metalAccountsPage.accounts.macRo.title'),
      link: "/metal-accounts/mac-ro-metal-account",
      description: t('metalAccountsPage.accounts.macRo.description'),
      whoItsFor: t('metalAccountsPage.accounts.macRo.whoItsFor'),
      keyBenefits: t('metalAccountsPage.accounts.macRo.keyBenefits'),
      type: "individual"
    },
    {
      id: 3,
      title: t('metalAccountsPage.accounts.eot.title'),
      link: "/metal-accounts/end-of-treatment-payment-tfm",
      description: t('metalAccountsPage.accounts.eot.description'),
      whoItsFor: t('metalAccountsPage.accounts.eot.whoItsFor'),
      keyBenefits: t('metalAccountsPage.accounts.eot.keyBenefits'),
      type: "company"
    },
    {
      id: 4,
      title: t('metalAccountsPage.accounts.keyman.title'),
      link: "/metal-accounts/key-man-metal-account",
      description: t('metalAccountsPage.accounts.keyman.description'),
      whoItsFor: t('metalAccountsPage.accounts.keyman.whoItsFor'),
      keyBenefits: t('metalAccountsPage.accounts.keyman.keyBenefits'),
      type: "company"
    }
  ];

  return (
    <div className="min-h-screen bg-white" dir={isArabic ? 'rtl' : 'ltr'}>
      {/* Hero Section with Background Image and Gradient Overlay */}
      <section className="relative h-[480px] flex items-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${metalAccountBanner})`
          }}
        />
        
        {/* Gradient Overlay - 90 degrees from black to transparent */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(90deg, rgba(0,0,0) 0%, rgba(0,0,0,0.8) 50%, transparent 100%)'
          }}
        />
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className={`max-w-6xl ${isArabic ? 'text-left' : ''}`}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight font-playfair">
              {t('metalAccountsPage.hero.title1')} <br /> {t('metalAccountsPage.hero.title2')} <br /> {t('metalAccountsPage.hero.title3')}
            </h1>
          </div>
        </div>
      </section>

      {/* Accounts Cards Section */}
      <section className="py-10 bg-[#F1F0E8]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className={`${isArabic ? 'text-right' : 'text-left'} text-sm md:text-base text-black mb-6`}>
            {t('metalAccountsPage.intro.description')}
            </p>
          <div className="my-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#A78E52] mb-6 tracking-tight font-playfair">
              {t('metalAccountsPage.sections.forIndividuals')}
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {accountCards.filter(card => card.type === "individual").map((card, index) => (
              <motion.div 
                key={card.id}
                className="bg-black text-white rounded-3xl shadow-lg p-10 hover:shadow-xl transition-shadow duration-300"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <h3 className="text-2xl font-bold text-[#DCBC7C] mb-4 tracking-tight">
                  {card.title}
                </h3>
                <p className="leading-relaxed mb-6">
                  {card.description}
                </p>
                <div className="space-y-3">
                  <p className="text-sm">
                    <span className="font-semibold text-[#DCBC7C]">{t('metalAccountsPage.labels.whoItsFor')}</span> {card.whoItsFor}
                  </p>
                  <p className="text-sm">
                    <span className="font-semibold text-[#DCBC7C]">{t('metalAccountsPage.labels.keyBenefits')}</span> {card.keyBenefits}
                  </p>
                </div>
                <button className="mt-6 px-6 py-2 bg-black hover:bg-white hover:text-black border-1 border-white text-white font-semibold rounded-sm transition-colors duration-200 ease-in-out tracking-wide">
                <Link to={card.link}>
                  {t('metalAccountsPage.labels.learnMore')}
                </Link>
                </button>
              </motion.div>
            ))}
          </div>

          {/* For Companies Section */}
          <div className="my-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#A78E52] mb-6 tracking-tight font-playfair">
              {t('metalAccountsPage.sections.forCompanies')}
            </h2>
          </div>

          {/* Company Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {accountCards.filter(card => card.type === "company").map((card, index) => (
              <motion.div 
                key={card.id}
                className="bg-black text-white rounded-3xl shadow-lg p-10 hover:shadow-xl transition-shadow duration-300"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <h3 className="text-2xl font-bold text-[#DCBC7C] mb-4 tracking-tight">
                  {card.title}
                </h3>
                <p className="leading-relaxed mb-6">
                  {card.description}
                </p>
                <div className="space-y-3">
                  <p className="text-sm">
                    <span className="font-semibold text-[#DCBC7C]">{t('metalAccountsPage.labels.whoItsFor')}</span> {card.whoItsFor}
                  </p>
                  <p className="text-sm">
                    <span className="font-semibold text-[#DCBC7C]">{t('metalAccountsPage.labels.keyBenefits')}</span> {card.keyBenefits}
                  </p>
                </div>
                <button className="mt-6 px-6 py-2 bg-black hover:bg-white hover:text-black border-1 border-white text-white font-semibold rounded-sm transition-colors duration-200 ease-in-out tracking-wide">
                <Link to={card.link}>
                  {t('metalAccountsPage.labels.learnMore')}
                </Link>
                </button>
              </motion.div>
            ))}
          </div>
          <div className="my-16">
            <h2 className="text-2xl sm:text-3xl text-center font-semibold text-black mb-6 tracking-tight font-playfair">
            {t('metalAccountsPage.conclusion')}
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8"></div>
        </div>
      </section>

      {/* CTA Section */}
      <MetalAccountCTA  title={t('metalAccountsPage.cta.title')} />
      
    </div>
  );
};

export default MetalAccounts;
