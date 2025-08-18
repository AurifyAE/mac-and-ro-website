import React from 'react';
import { motion } from 'framer-motion';

const Accounts = () => {
    const cardVariants = {
        hidden: { 
            opacity: 0, 
            y: 50 
        },
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
        <div className="bg-gray-50 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-40">
                
                {/* Left-aligned Heading and Paragraph */}
                <div className="text-left mb-16">
                    <h2 className="font-playfair text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
                        Our Metal Accounts 
                    </h2>
                    <p className="text-sm sm:text-base lg:text-base text-gray-600 leading-relaxed tracking-wide max-w-4xl">
                        Mac & Ro Srl offers to all interested parties four different types of Metal Accounts to provide solutions dedicated to the different needs of the Physical Gold Investment Market. In addition to the classic Accumulation Plan for cyclical purchases on a monthly and quarterly basis, called PAC, we have launched the possibility of taking advantage of additional targeted opportunities, suitable for specific investors.
                    </p>
                </div>

                {/* Two Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                
                    {/* First Card */}
                    <motion.div 
                        className="bg-black text-white rounded-3xl shadow-lg p-10 hover:shadow-xl transition-shadow duration-300"
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ delay: 0.2 }}
                    >
                        <h3 className="text-2xl font-bold text-[#DCBC7C] mb-4 tracking-tight">
                            Deluxe Metal Account
                        </h3>
                        <p className="leading-relaxed mb-6">
                        Severance payments in physical gold for executives.
                        </p>
                        <div className="space-y-3">
                            <p className="text-sm">
                                <span className="font-semibold text-[#DCBC7C]">Who It's For:</span> Corporates planning executive benefits
                            </p>
                            <p className="text-sm">
                                <span className="font-semibold text-[#DCBC7C]">Key Benefits:</span> Tax efficient, secure, flexible
                            </p>
                        </div>
                        <button className="mt-6 px-6 py-3 bg-black hover:bg-white hover:text-black border-2 border-white text-white font-semibold rounded-sm transition-colors duration-200 ease-in-out tracking-wide">
                            Learn More
                        </button>
                    </motion.div>

                    {/* Second Card */}
                    <motion.div 
                        className="bg-black text-white rounded-3xl shadow-lg p-10 hover:shadow-xl transition-shadow duration-300"
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ delay: 0.2 }}
                    >
                        <h3 className="text-2xl font-bold text-[#DCBC7C] mb-4 tracking-tight">
                            Key Man Metal Account
                        </h3>
                        <p className="leading-relaxed mb-6">
                        Strategic gold allocation for corporate treasury portfolios.
                        </p>
                        <div className="space-y-3">
                            <p className="text-sm">
                                <span className="font-semibold text-[#DCBC7C]">Who It's For:</span> Companies seeking portfolio diversification
                            </p>
                            <p className="text-sm">
                                <span className="font-semibold text-[#DCBC7C]">Key Benefits:</span> Risk mitigation, inflation hedge, liquidity
                            </p>
                        </div>
                        <button className="mt-6 px-6 py-3 bg-black hover:bg-white hover:text-black border-2 border-white text-white font-semibold rounded-sm transition-colors duration-200 ease-in-out tracking-wide">
                            Learn More
                        </button>
                    </motion.div>

                </div>

            </div>
        </div>
    );
};

export default Accounts;
