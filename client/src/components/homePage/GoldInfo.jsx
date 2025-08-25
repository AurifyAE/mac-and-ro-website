import React from 'react';
import GoldInfoImage from '../../assets/homepage/goldInfo.jpg';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const GoldInfo = () => {
  const navigate = useNavigate();
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
    <div className="bg-white py-20">
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
              Why invest in gold?
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
                Inflation Protection
              </h3>
              <p className="text-gray-600 leading-relaxed tracking-wide">
                Physical gold is a reliable, tangible asset known for its ability to retain value over time, free from market speculation. It's simple to own, flexible to pass on, and immune to financial instability. Whether you're looking for long-term stability or an inflation hedge, gold provides a trusted foundation.
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
                Portfolio Diversification
              </h3>
              <p className="text-gray-600 leading-relaxed tracking-wide mb-6">
                Investing in gold allows you to diversify your portfolio, reducing overall risk. Gold has a low correlation with other financial assets such as stocks and bonds, which means it can increase in value even when other investments are losing value.
              </p>
              <button 
              onClick={() => {
                navigate('/contact');
              }}
              className="px-6 py-2 bg-white border-1 border-black hover:bg-black hover:text-white  text-black font-semibold rounded-sm transition-colors duration-300 ease-in-out tracking-wide text-base">
                Create Your Gold Portfolio
              </button>
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
                Liquidity and Ease of Sale
              </h3>
              <p className="text-gray-600 leading-relaxed tracking-wide">
                Gold is a highly liquid asset that can be sold quickly and easily in almost any part of the world. This means you can turn your gold investments into cash when you need it, without long waits or complications.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoldInfo;
