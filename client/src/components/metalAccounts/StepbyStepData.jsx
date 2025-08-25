import React from 'react';
import { motion } from 'framer-motion';

const StepbyStepData = ({ steps }) => {
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

  return (
    <>

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
                <div className="w-16 h-16 bg-[#C9A14A] rounded-full shadow-lg flex items-center justify-center mb-4 hover:border-gray-300 transition-all duration-300">
                  <span className="font-playfair text-white font-bold text-3xl">{step.number}</span>
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
                  className="hidden lg:flex items-center justify-center self-start mt-3"
                  variants={itemVariants}
                >
                  <svg className="w-10 h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.div>
              )}
            </React.Fragment>
          ))}
        </motion.div>
        </>

  );
};

export default StepbyStepData;
