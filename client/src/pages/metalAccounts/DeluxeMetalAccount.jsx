import React from 'react'
import StepbyStepData from '../../components/metalAccounts/StepbyStepData'
import { motion } from 'framer-motion';
import MetalAccountCTA from '../../components/MetalAccountCTA';
import deluxeBanner from '../../assets/metalAccount/deluxe-banner.jpg';
import appleGold from '../../assets/metalAccount/apple-gold-video.mp4';
import deluxeImg2 from '../../assets/metalAccount/deluxe-img2.jpg';
import { useTranslation } from 'react-i18next';

const DeluxeMetalAccount = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  // Dynamic advantages data
  const advantagesData = [
    {
      id: 1,
      title: t('metalAccounts.deluxe.advantages.items.ownership.title'),
      description: t('metalAccounts.deluxe.advantages.items.ownership.description')
    },
    {
      id: 2,
      title: t('metalAccounts.deluxe.advantages.items.returns.title'),
      description: t('metalAccounts.deluxe.advantages.items.returns.description')
    },
    {
      id: 3,
      title: t('metalAccounts.deluxe.advantages.items.certified.title'),
      description: t('metalAccounts.deluxe.advantages.items.certified.description')
    },
    {
      id: 4,
      title: t('metalAccounts.deluxe.advantages.items.compliance.title'),
      description: t('metalAccounts.deluxe.advantages.items.compliance.description')
    }
  ];

  const steps = [
    {
      number: "1",
      title: t('stepByStep.deluxeMetalAccount.steps.step1.title'),
      description: t('stepByStep.deluxeMetalAccount.steps.step1.description')
    },
    {
      number: "2", 
      title: t('stepByStep.deluxeMetalAccount.steps.step2.title'),
      description: t('stepByStep.deluxeMetalAccount.steps.step2.description')
    },
    {
      number: "3",
      title: t('stepByStep.deluxeMetalAccount.steps.step3.title'), 
      description: t('stepByStep.deluxeMetalAccount.steps.step3.description')
    },
    {
      number: "4",
      title: t('stepByStep.deluxeMetalAccount.steps.step4.title'),
      description: t('stepByStep.deluxeMetalAccount.steps.step4.description')
    },
    {
      number: "5",
      title: t('stepByStep.deluxeMetalAccount.steps.step5.title'),
      description: t('stepByStep.deluxeMetalAccount.steps.step5.description')
    }
  ];

  return (
    <div className="min-h-screen bg-white"  dir={isArabic ? 'rtl' : 'ltr'}>
        <section className="relative h-[480px] flex items-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${deluxeBanner})`
          }}
        />
        
        {/* Gradient Overlay - 90 degrees from black to transparent */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(90deg, rgba(0,0,0) 0%, rgba(0,0,0,0.6) 40%, transparent 100%)'
          }}
        />
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className={`max-w-6xl ${isArabic ? 'text-left' : ''}`}>
            <span className="text-[#DCBC7C] text-sm">
                {t('metalAccounts.deluxe.hero.badge')}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight font-playfair mt-2">
            {t('metalAccounts.deluxe.hero.title')}
            </h1>
            <p className={`${isArabic ? "" : "max-w-lg"} text-white text-base`}>
            {t('metalAccounts.deluxe.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* New Section: Left Title & Paragraph, Right Image */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Title & Paragraph */}
            <div className={`${isArabic ? "text-right order-1" : "" } space-y-6`}>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-playfair leading-tight">
                {t('metalAccounts.deluxe.whatIs.title')}
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  {t('metalAccounts.deluxe.whatIs.description')}
                </p>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className={`${isArabic ? "text-right" : "" } relative`}>
              <div className="relative overflow-hidden shadow-2xl">
                <video 
                  src={appleGold} 
                  alt="Deluxe Metal Account - Gold Investment"
                  className="w-full h-auto object-cover"
                  autoPlay
                  muted
                  loop
                />
                {/* Optional overlay for enhanced visual appeal */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#DCBC7C] rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      <div className={`${isArabic ? "text-right" : "text-left" } max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 my-10`}>
        <h2 className="text-3xl sm:text-4xl lg:text-4xl font-semibold text-black mb-6 tracking-tight font-playfair">
          {t('metalAccounts.deluxe.howItWorks.title')}
        </h2>
        <p className="text-gray-600 leading-relaxed text-base">
          {t('metalAccounts.deluxe.howItWorks.description')}
        </p>

        <div className="py-10">
            <div className="max-w-7xl mx-auto px-4">
                <motion.div 
                className={`text-left mb-16`}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.h2 
                        className="text-3xl lg:text-4xl text-center font-semibold text-gray-900 mb-6 tracking-tight"
                        variants={itemVariants}
                    >
                        {t('stepByStep.deluxeMetalAccount.title')}
                    </motion.h2>
                </motion.div>
            <StepbyStepData steps={steps} />
            </div>
        </div>
      </div>

      {/* Advantages Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 my-10">
        <h2 className="text-3xl sm:text-4xl lg:text-4xl font-semibold text-black mb-6 tracking-tight font-playfair">
          {t('metalAccounts.deluxe.advantages.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-15">
          {advantagesData.map((advantage) => (
            <div key={advantage.id} className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-[#DCBC7C] rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{advantage.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-3xl sm:text-4xl lg:text-4xl font-semibold text-black mb-6 tracking-tight font-playfair">
            {t('metalAccounts.deluxe.growthProfiles.title')}
        </h2>
        <div className="space-y-6 text-gray-600 leading-relaxed text-base">
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className={`text-[#DCBC7C] ${isArabic ? "ml-3" : "mr-3"} font-bold text-lg`}>•</span>
              <span><strong>{t('metalAccounts.deluxe.growthProfiles.items.sixPercent')}</strong></span>
            </li>
            <li className="flex items-start">
              <span className={`text-[#DCBC7C] ${isArabic ? "ml-3" : "mr-3"} font-bold text-lg`}>•</span>
              <span><strong>{t('metalAccounts.deluxe.growthProfiles.items.tenPercent')}</strong></span>
            </li>
          </ul>
          <p className="mt-6">
            {t('metalAccounts.deluxe.growthProfiles.contractTerms')}
          </p>
        </div>
      </div>

      <section className="py-10 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Title & Paragraph */}
            <div className={`${isArabic ? "order-1" : ""} space-y-6`}>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-playfair leading-tight">
              {t('metalAccounts.deluxe.isThisForYou.title')}
              </h2>
              <div className="space-y-10 text-gray-600 leading-relaxed text-base">
                <p>
                {t('metalAccounts.deluxe.isThisForYou.description')}
                </p>
                <ul className="space-y-3 text-gray-600 leading-relaxed text-base font-bold">
                  <li className="flex items-start">
                    <span className={`text-[#DCBC7C] ${isArabic ? "ml-3" : "mr-3"} font-bold`}>•</span>
                    {t('metalAccounts.deluxe.isThisForYou.audiences.individuals')}
                  </li>
                  <li className="flex items-start">
                    <span className={`text-[#DCBC7C] ${isArabic ? "ml-3" : "mr-3"} font-bold`}>•</span>
                    {t('metalAccounts.deluxe.isThisForYou.audiences.families')}
                  </li>
                  <li className="flex items-start">
                    <span className={`text-[#DCBC7C] ${isArabic ? "ml-3" : "mr-3"} font-bold`}>•</span>
                    {t('metalAccounts.deluxe.isThisForYou.audiences.businesses')}
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="relative">
              <div className="relative overflow-hidden shadow-2xl">
                <img 
                  src={deluxeImg2} 
                  alt="Deluxe Metal Account - Gold Investment"
                  className="w-full h-auto object-cover"
                />
                {/* Optional overlay for enhanced visual appeal */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>              
            </div>
          </div>
        </div>
      </section>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-20">
            <h2 className="text-2xl sm:text-3xl text-center font-semibold text-black mb-6 tracking-tight font-playfair">
                {t('metalAccounts.deluxe.conclusion')}
            </h2>
        </div>

      {/* CTA Section */}
      <MetalAccountCTA  title={t('metalAccounts.deluxe.cta')} />
    </div>
  )
}

export default DeluxeMetalAccount;