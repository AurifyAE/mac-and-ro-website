import React from 'react';
import GoldInfoImage from '../../assets/homepage/goldInfo.jpg';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const GoldInfo = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const itemVariants = {
    hidden: { 
      opacity: 0, 
      x: -100 
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="bg-white md:py-20 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Image (No Animation) */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img 
                src={GoldInfoImage} 
                alt="Gold Investment" 
                className="w-full h-auto object-cover rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>

          {/* Right Side - Content (Individual Animations) */}
          <div className="order-1 lg:order-2">
            {/* Main Heading */}
            <motion.h2 
              className="font-playfair text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-12 tracking-tight"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {t('homepage.goldInfo.title')}
            </motion.h2>

            {/* First Sub-section */}
            <motion.div 
              className="mb-10"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 tracking-wide">
                {t('homepage.goldInfo.inflationProtection')}
              </h3>
              <p className="text-gray-600 leading-relaxed tracking-wide">
                {t('homepage.goldInfo.inflationDescription')}
              </p>
            </motion.div>

            {/* Second Sub-section with Button */}
            <motion.div 
              className="mb-10"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 tracking-wide">
                {t('homepage.goldInfo.portfolioDiversification')}
              </h3>
              <p className="text-gray-600 leading-relaxed tracking-wide mb-6">
                {t('homepage.goldInfo.diversificationDescription')}
              </p>
              <Link to="/portfolio">
                <button 
                  className="px-6 py-2 bg-white border-1 border-black hover:bg-black hover:text-white  text-black font-semibold rounded-sm transition-colors duration-300 ease-in-out tracking-wide text-base"
                >
                  {t('homepage.goldInfo.createPortfolio')}
                </button>
              </Link>
            </motion.div>

            {/* Third Sub-section */}
            <motion.div 
              className="mb-10"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.6 }}
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 tracking-wide">
                {t('homepage.goldInfo.liquidity')}
              </h3>
              <p className="text-gray-600 leading-relaxed tracking-wide">
                {t('homepage.goldInfo.liquidityDescription')}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoldInfo;
