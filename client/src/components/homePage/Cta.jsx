import React from 'react';
import { motion } from 'framer-motion';
import gold1kg from '../../assets/homepage/gold1kg.png';

const Cta = () => {
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
    <section className="py-20 bg-white">
      {/* Top Section - Centered Heading and Paragraph */}
      <motion.div 
        className="text-center mb-16 px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2 
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight font-playfair"
          variants={itemVariants}
        >
          Build your future on solid gold
        </motion.h2>
        <motion.p 
          className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          Mac & Ro offers a wide range of highly qualified and professional services in the field of investment gold and precious metals with particular attention to flexibility, creating ad hoc products based on the needs of our Customers.
        </motion.p>
      </motion.div>

      {/* Black Background Box with Left Image and Right Content */}
      <motion.div 
        className="max-w-5xl mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="bg-black rounded-2xl overflow-hidden shadow-2xl">
          <div className="flex flex-col items-center justify-evenly lg:flex-row">
            {/* Left Image */}
            <motion.div 
              className="lg:w-1/2 h-80 lg:h-80"
              variants={itemVariants}
            >
              <img 
                src={gold1kg} 
                alt="Investment Consultation" 
                className="w-full h-full object-contain"
              />
            </motion.div>

            {/* Right Content */}
            <motion.div 
              className="lg:w-1/2 p-8 sm:p-12 lg:p-16 flex flex-col justify-center"
              variants={itemVariants}
            >
              <motion.h3 
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#DCBC7C] mb-6 tracking-tight"
                variants={itemVariants}
              >
                Ingots
              </motion.h3>
              
              <motion.p 
                className="text-base sm:text-lg text-gray-300 mb-8 leading-relaxed"
                variants={itemVariants}
              >
                Gold bars offer a cost-effective way to invest in pure gold at scale. Available in sizes from 1 gram to 1 kilo, each bar is certified for purity and globally recognized—perfect for building a strong, secure portfolio.
              </motion.p>

              <motion.button 
                className="px-6 py-2 bg-transparent hover:bg-white hover:text-black hover:border-white/50 border-2 text-white font-semibold rounded-lg transition-all duration-300 ease-in-out tracking-wide text-base flex items-center space-x-2 mt-6 w-fit"
                variants={itemVariants}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                <span>Shop Now</span>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Cta;
