import React from 'react';
import GoldInfoImage from '../../assets/homepage/goldInfo.webp';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const GoldInfo = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';
  const itemVariants = {
    hidden: { 
      opacity: 0, 
      x: isArabic ? 100 : -100 
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
    <div className="bg-white md:py-20 py-10" dir={isArabic ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isArabic ? 'lg:grid-flow-col-dense' : ''}`}>
          
          {/* Image Section */}
          <div className={`${isArabic ? 'order-1 lg:order-1' : 'order-2 lg:order-1'}`}>
            <div className="relative">
              {/* Was a 454KB JPEG; now 59KB of WebP at the same 648x985. */}
              <img
                src={GoldInfoImage}
                alt="Gold bullion bars representing a physical gold investment"
                width="648"
                height="985"
                loading="lazy"
                decoding="async"
                className="w-full h-auto object-cover rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>

          {/* Content Section */}
          <div className={`${isArabic ? 'order-2 lg:order-2' : 'order-1 lg:order-2'}`} dir={isArabic ? 'rtl' : 'ltr'}>
            {/* Main Heading */}
            <motion.h2 
              className={`font-playfair text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-12 tracking-tight ${isArabic ? 'text-right' : 'text-left'}`}
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
              <h3 className={`text-xl sm:text-2xl font-semibold text-gray-800 mb-4 tracking-wide ${isArabic ? 'text-right' : 'text-left'}`}>
                {t('homepage.goldInfo.inflationProtection')}
              </h3>
              <p className={`text-sm md:text-base text-gray-600 leading-relaxed tracking-wide ${isArabic ? 'text-right' : 'text-left'}`}>
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
              <h3 className={`text-xl sm:text-2xl font-semibold text-gray-800 mb-4 tracking-wide ${isArabic ? 'text-right' : 'text-left'}`}>
                {t('homepage.goldInfo.portfolioDiversification')}
              </h3>
              <p className={`text-sm md:text-base text-gray-600 leading-relaxed tracking-wide mb-6 ${isArabic ? 'text-right' : 'text-left'}`}>
                {t('homepage.goldInfo.diversificationDescription')}
              </p>
              <div className={`flex justify-start`}>
                <Link to="/portfolio">
                  <button 
                    className="px-6 py-2 bg-white border-1 border-black hover:bg-black hover:text-white  text-black font-semibold rounded-sm transition-colors duration-300 ease-in-out tracking-wide text-base"
                  >
                    {t('homepage.goldInfo.createPortfolio')}
                  </button>
                </Link>
              </div>
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
              <h3 className={`text-xl sm:text-2xl font-semibold text-gray-800 mb-4 tracking-wide ${isArabic ? 'text-right' : 'text-left'}`}>
                {t('homepage.goldInfo.liquidity')}
              </h3>
              <p className={`text-sm md:text-base text-gray-600 leading-relaxed tracking-wide ${isArabic ? 'text-right' : 'text-left'}`}>
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
