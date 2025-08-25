import React from 'react';
import { motion } from 'framer-motion';

const CreateAccountSteps = () => {
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
      title: "Choose Your Metal Account",
      description: ""
    },
    {
      number: "2", 
      title: "Submit Application",
      description: "Start online or via our institutional desk."
    },
    {
      number: "3",
      title: "Compliance Review", 
      description: "Our team reviews, verifies, and provides account approval."
    },
    {
      number: "4",
      title: "Account Activation",
      description: "Gain access to the gold banking portal, vault instructions, or trading desk."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
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
            Begin Securely. Operate Confidently.
          </motion.h2>
          <motion.p 
            className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Onboarding with Mac & Ro Capital FZC is fast, secure, and guided by our relationship managers.
            We support clients across time zones and offer multilingual assistance
          </motion.p>
        </motion.div>

        {/* Steps with Numbered Boxes */}
        <motion.div 
          className="flex flex-col lg:flex-row items-start justify-center space-y-8 lg:space-y-0 lg:space-x-2"
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
