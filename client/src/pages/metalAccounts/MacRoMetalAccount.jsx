import React from 'react'
import StepbyStepData from '../../components/metalAccounts/StepbyStepData'
import { motion } from 'framer-motion';
import MetalAccountCTA from '../../components/MetalAccountCTA';
import macBanner from '../../assets/metalAccount/mac-video-banner.mp4';
import macImg2 from '../../assets/metalAccount/mac-img2.jpg';
import { useTranslation } from 'react-i18next';

const MacRoMetalAccount = () => {
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

  const steps = [
    {
      number: "1",
      title: t('stepByStep.macRoMetalAccount.steps.step1.title'),
      description: t('stepByStep.macRoMetalAccount.steps.step1.description')
    },
    {
      number: "2",
      title: t('stepByStep.macRoMetalAccount.steps.step2.title'),
      description: t('stepByStep.macRoMetalAccount.steps.step2.description')
    },
    
    {
      number: "3",
      title: t('stepByStep.macRoMetalAccount.steps.step3.title'),
      description: t('stepByStep.macRoMetalAccount.steps.step3.description')
    },
    
    {
      number: "4",
      title: t('stepByStep.macRoMetalAccount.steps.step4.title'),
      description: t('stepByStep.macRoMetalAccount.steps.step4.description')
    },
  ]
  return (
    <div className="min-h-screen bg-white" dir={isArabic ? 'rtl' : 'ltr'}>
        <section className="relative h-[480px] flex items-center">
        {/* Background Video */}
        <video 
          src={macBanner} 
          alt="Mac & Ro Metal Account - Gold Investment"
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
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
            <span className="text-[#DCBC7C] text-sm">{t('metalAccounts.macRo.hero.badge')}</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight font-playfair">
              {t('metalAccounts.macRo.hero.title')}
            </h1>
            <p className={`${isArabic ? "" : "max-w-lg"} text-white text-base`}>
              {t('metalAccounts.macRo.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 my-10">
        <div className="space-y-12">
          {/* First Q&A Pair */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Question */}
            <div>
              <h3 className="text-4xl font-semibold text-gray-900 mb-4 font-playfair">
                {t('metalAccounts.macRo.whatIs.title')}
              </h3>
            </div>
            
            {/* Answer */}
            <div>
              <p className="text-gray-600 leading-relaxed text-base">
              {t('metalAccounts.macRo.whatIs.description')}
              </p>
            </div>
          </div>

          {/* Second Q&A Pair */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Question */}
            <div>
              <h3 className="text-3xl sm:text-4xl lg:text-4xl font-semibold text-gray-900 mb-4 font-playfair">
                {t('metalAccounts.macRo.whatMakesDifferent.title')}
              </h3>
            </div>
            
            {/* Answer */}
            <div>
              <p className="text-gray-600 leading-relaxed text-base mb-6">
              {t('metalAccounts.macRo.whatMakesDifferent.description')}
              </p>
              <ul className="space-y-3 text-gray-600 leading-relaxed text-base font-bold">
                <li className="flex items-start">
                  <span className={`text-[#DCBC7C] ${isArabic ? "ml-3" : "mr-3"} font-bold`}>•</span>
                  {t('metalAccounts.macRo.whatMakesDifferent.features.serialNumber')}
                </li>
                <li className="flex items-start">
                  <span className={`text-[#DCBC7C] ${isArabic ? "ml-3" : "mr-3"} font-bold`}>•</span>
                  {t('metalAccounts.macRo.whatMakesDifferent.features.grossWeight')}
                </li>
                <li className="flex items-start">
                  <span className={`text-[#DCBC7C] ${isArabic ? "ml-3" : "mr-3"} font-bold`}>•</span>
                  {t('metalAccounts.macRo.whatMakesDifferent.features.purity')}
                </li>
                <li className="flex items-start">
                  <span className="text-[#DCBC7C] mr-2 font-bold">•</span>
                  {t('metalAccounts.macRo.whatMakesDifferent.features.fineWeight')}
                </li>
              </ul>
              <p className="text-gray-600 leading-relaxed text-base mt-6">
                {t('metalAccounts.macRo.whatMakesDifferent.conclusion')}
              </p>
            </div>
          </div>
        </div>
        </div>


        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-30 bg-gray-50">
            <motion.div 
            className={`${isArabic ? "" : "text-left"}  mb-16`}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            >
                <motion.h2 
                    className="text-3xl lg:text-4xl  font-bold text-gray-900 mb-6 tracking-tight font-playfair"
                    variants={itemVariants}
                >
                    {t('metalAccounts.macRo.howItWorks.title')}
                </motion.h2>
            </motion.div>
          <StepbyStepData steps={steps} />
        </div>

      {/* Three Column Section: Title, Points, Image */}
      <section className="py-20 bg-[#DCBC7C]/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            {/* Column 1: Title */}
            <div className="lg:col-span-1">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-playfair leading-tight mb-6">
                {t('metalAccounts.macRo.keyBenefits.title')}
              </h2>
            </div>

            {/* Column 2: 4 Points with Tick Icons */}
            <div className="lg:col-span-1">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-6 h-6 bg-[#DCBC7C] rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('metalAccounts.macRo.keyBenefits.items.tangibleOwnership')}</h3>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-6 h-6 bg-[#DCBC7C] rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('metalAccounts.macRo.keyBenefits.items.noOverdraftRisk')}</h3>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-6 h-6 bg-[#DCBC7C] rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('metalAccounts.macRo.keyBenefits.items.custodialSimplicity')}</h3>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-6 h-6 bg-[#DCBC7C] rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('metalAccounts.macRo.keyBenefits.items.flexibility')}</h3>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 3: Image */}
            <div className="lg:col-span-1">
              <div className="relative">
                <div className="relative overflow-hidden shadow-2xl">
                  <img 
                    src={macImg2} 
                    alt="Mac & Ro Metal Account - Gold Investment"
                    className="w-full h-auto object-cover"
                  />
                  {/* Optional overlay for enhanced visual appeal */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                
                {/* Decorative element */}
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-[#DCBC7C] rounded-full opacity-20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 my-20">
        <div className="space-y-12">
          {/* First Q&A Pair */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Question */}
            <div>
              <h3 className="text-4xl font-semibold text-gray-900 mb-4 font-playfair">
              {t('metalAccounts.macRo.insurance.title')}
              </h3>
            </div>
            
            {/* Answer */}
            <div>
              <p className="text-gray-600 leading-relaxed text-base">
                {t('metalAccounts.macRo.insurance.description')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <MetalAccountCTA  title={t('metalAccounts.macRo.cta')} />
    </div>
  )
}

export default MacRoMetalAccount