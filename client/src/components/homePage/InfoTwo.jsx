import React from 'react';
import { motion } from 'framer-motion';
import vaultImage from '../../assets/homepage/vault-image.jpg';

const InfoTwo = () => { 
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
        <div className="relative w-full h-screen mt-10">
        {/* Full Width Background Image */}
        <div className="absolute inset-0 w-full h-full">
            <img 
            src={vaultImage} 
            alt="Global Vault Locations" 
            className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Left 50% Overlay with Content */}
        <div className="relative z-10 w-full h-full">
            <div className="w-full lg:w-1/2 h-full bg-black/75 backdrop-blur-sm">
            <div className="h-full flex items-center">
                <motion.div 
                className="px-8 sm:px-12 lg:px-16 text-white"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                >
                {/* Heading */}
                <motion.h2 
                    className="font-playfair text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 tracking-tight"
                    variants={itemVariants}
                >
                    Global Vault Locations
                </motion.h2>

                {/* Main Paragraph */}
                <motion.p 
                    className="text-sm sm:text-base lg:text-base mb-8 font-light tracking-wide leading-relaxed text-gray-200"
                    variants={itemVariants}
                >
                    Your Gold, Strategically Positioned Mac & Ro operates across a trusted network of vaults, providing geographical diversity and client choice
                </motion.p>

                {/* Bullet Points */}
                <motion.ul 
                    className="mb-8 space-y-4 list-disc list-inside"
                    variants={itemVariants}
                >
                    <motion.li className="text-sm sm:text-base font-light tracking-wide text-gray-200" variants={itemVariants}>
                    Dubai - Middle East hub with world-class infrastructure
                    </motion.li>
                    
                    <motion.li className="text-sm sm:text-base font-light tracking-wide text-gray-200" variants={itemVariants}>
                    Milan - Head office, Gold Bank licensed jurisdiction
                    </motion.li>
                    
                    <motion.li className="text-sm sm:text-base font-light tracking-wide text-gray-200" variants={itemVariants}>
                    Zurich - Swiss precision and neutrality
                    </motion.li>
                    
                    <motion.li className="text-sm sm:text-base font-light tracking-wide text-gray-200" variants={itemVariants}>
                    Singapore - Gateway to Asia's high-growth economies
                    </motion.li>
                    
                    <motion.li className="text-sm sm:text-base font-light tracking-wide text-gray-200" variants={itemVariants}>
                    Istanbul - Regional vault under development
                    </motion.li>
                </motion.ul>

                {/* Final Paragraph */}
                <motion.p 
                    className="text-sm sm:text-base font-light tracking-wide leading-relaxed text-gray-300"
                    variants={itemVariants}
                >
                    Clients can shift balances or request physical delivery under applicable protocols.
                </motion.p>

                {/* Book Consultant Button */}
                <motion.button 
                    className="px-6 py-3 bg-transparent hover:bg-white hover:text-black hover:border-white/50 border-2 text-white font-semibold rounded-lg transition-all duration-300 ease-in-out tracking-wide text-base flex items-center space-x-2 mt-6"
                    variants={itemVariants}
                    whileTap={{ scale: 0.95 }}
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>Book Consultant</span>
                </motion.button>
                </motion.div>
            </div>
            </div>
        </div>
        </div>
    );
};

export default InfoTwo;
