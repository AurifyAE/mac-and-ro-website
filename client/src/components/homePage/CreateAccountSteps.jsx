import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const CreateAccountSteps = () => {
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
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const steps = [
    {
      number: "1",
      title: t('homepage.createSteps.step1Title'),
      description: ""
    },
    {
      number: "2", 
      title: t('homepage.createSteps.step2Title'),
      description: t('homepage.createSteps.step2Description')
    },
    {
      number: "3",
      title: t('homepage.createSteps.step3Title'), 
      description: t('homepage.createSteps.step3Description')
    },
    {
      number: "4",
      title: t('homepage.createSteps.step4Title'),
      description: t('homepage.createSteps.step4Description')
    }
  ];

  return (
    <section className="md:py-20 py-10 bg-gray-50" dir={isArabic ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading and Paragraph */}
        <motion.div 
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight font-playfair"
            variants={itemVariants}
          >
            {t('homepage.createSteps.title')}
          </motion.h2>
          <motion.p 
            className="text-sm md:text-base text-gray-600 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            {t('homepage.createSteps.description')}
          </motion.p>
        </motion.div>

        {/* Steps with Numbered Boxes */}
        <motion.div 
          className="flex flex-col lg:flex-row lg:items-start items-center justify-center space-y-8 lg:space-y-0 lg:space-x-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {steps.map((step, index) => (
            <React.Fragment key={step.number}>
              {/* Step Box with Number Only */}
              <motion.div 
                className="flex flex-col items-center"
                variants={itemVariants}
              >
                <div className="w-32 h-32 bg-black rounded-lg shadow-lg flex items-center justify-center mb-4 hover:border-gray-300 transition-all duration-300">
                  <span className="font-playfair text-white font-bold text-5xl">{step.number}</span>
                </div>
                
                {/* Content Below Box */}
                <div className="text-center max-w-48">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>

              {/* Right Arrow (except for last step) - Positioned at box level */}
              {index < steps.length - 1 && (
                <motion.div 
                  className="hidden lg:flex items-center justify-center self-start mt-5"
                  variants={itemVariants}
                >
                  <svg className="w-18 h-18 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.div>
              )}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CreateAccountSteps;
