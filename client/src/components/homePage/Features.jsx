import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import featureImage1 from '../../assets/homepage/feature-image1.jpg';
import featureImage3 from '../../assets/homepage/feature-image3.jpg';
import locationSwapVideo from '../../assets/location-swap/location-swap-video.mov';
import googlePlay from '../../assets/homepage/googlePlay.png';
import appStore from '../../assets/homepage/appStore.png';

const Features = () => { 
    const navigate = useNavigate();
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

    const slideInLeft = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const slideInRight = {
        hidden: { opacity: 0, x: 50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
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
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div 
                        className="order-2 lg:order-1"
                        variants={slideInLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <motion.h2 
                            className="font-playfair text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-6 leading-tight text-center"
                            variants={fadeInUp}
                        >
                            Global Vault Locations
                        </motion.h2>
                        
                        <motion.p 
                            className="text-base text-gray-600 mb-8 leading-relaxed text-center"
                            variants={fadeInUp}
                        >
                            Your Gold, Strategically Positioned Mac & Ro operates across a trusted network of vaults, providing geographical diversity and client choice
                        </motion.p>

                        <motion.ul 
                            className="mb-8 space-y-4 list-disc list-inside flex flex-col items-start px-10"
                            variants={itemVariants}
                        >
                            <motion.li className="text-sm sm:text-base font-light tracking-wide text-gray-600" variants={itemVariants}>
                            Dubai - Middle East hub with world-class infrastructure
                            </motion.li>
                            
                            <motion.li className="text-sm sm:text-base font-light tracking-wide text-gray-600" variants={itemVariants}>
                            Lecce - Head office, Gold Bank licensed jurisdiction
                            </motion.li>
                            
                            <motion.li className="text-sm sm:text-base font-light tracking-wide text-gray-600" variants={itemVariants}>
                            Zurich - Swiss precision and neutrality
                            </motion.li>
                            
                            <motion.li className="text-sm sm:text-base font-light tracking-wide text-gray-600" variants={itemVariants}>
                            Singapore - Gateway to Asia's high-growth economies
                            </motion.li>
                            
                            <motion.li className="text-sm sm:text-base font-light tracking-wide text-gray-600" variants={itemVariants}>
                            Istanbul - Regional vault under development
                            </motion.li>
                        </motion.ul>

                        <motion.p 
                            className="text-base text-gray-600 mb-8 leading-relaxed text-center"
                            variants={fadeInUp}
                        >
                            Clients can shift balances or request physical delivery under applicable protocols.
                        </motion.p>
                        
                        <motion.div variants={fadeInUp} className='flex justify-center'>
                            <button 
                            onClick={() => {
                                navigate('/contact');
                            }}
                            className="px-6 py-2 bg-transparent hover:bg-black hover:text-white border-2 border-black text-black font-semibold rounded-lg transition-all duration-300 transform hover:scale-105">
                                Book Consultant
                            </button>
                        </motion.div>
                    </motion.div>
                    
                    <motion.div 
                        className="order-1 lg:order-2"
                        variants={slideInRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <div className="relative">
                            <img 
                                src={featureImage1} 
                                alt="Gold Investment Solutions" 
                                className="w-full h-auto rounded-[40px] shadow-2xl"
                            />
                            
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>

        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div 
                        variants={slideInLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <div className="relative">
                            <video 
                                src={locationSwapVideo} 
                                alt="Gold Market Intelligence" 
                                className="w-full h-auto rounded-[40px] shadow-2xl"
                                autoPlay
                                muted
                                loop
                                playsInline
                            />
                            
                        </div>
                    </motion.div>
                    
                    <motion.div 
                        className="text-center"
                        variants={slideInRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <motion.h2 
                            className="font-playfair text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-6 leading-tight"
                            variants={fadeInUp}
                        >
                            Location Swap of Gold
                        </motion.h2>
                        
                        <motion.p 
                            className="text-lg text-gray-600 mb-8 leading-relaxed"
                            variants={fadeInUp}
                        >
                            A location swap (from the Latina for “locus/locatio”) is a physical gold transaction where equivalent amounts of gold are exchanged between two different locations, typically two gold hubs. Location swaps allow an efficient transfer of metal without the need to physically transport gold to a single central location.
                        </motion.p>
                        
                        <motion.div variants={fadeInUp}>
                            <button 
                            onClick={() => {
                                navigate('/location-swap');
                            }}
                            className="px-6 py-2 bg-transparent hover:bg-black hover:text-white border-2 border-black text-black font-semibold rounded-lg transition-all duration-300 transform hover:scale-105">
                                Know more
                            </button>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>

        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div 
                        className="order-2 lg:order-1 text-center"
                        variants={slideInLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <motion.h2 
                            className="font-playfair text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-6 leading-tight"
                            variants={fadeInUp}
                        >
                            Mac & Ro App
                        </motion.h2>
                        
                        <motion.p 
                            className="text-lg text-gray-600 mb-8 leading-relaxed"
                            variants={fadeInUp}
                        >
                            The Mac & Ro App lets you buy, sell, and location Swap of Gold securely in specified locations. Easily convert gold to cash and vice versa or move it to specified locations with just a few taps.
                        </motion.p>
                        
                        <motion.div variants={fadeInUp}>
                            <button 
                            onClick={() => {
                                navigate('/');
                            }}
                            className="px-6 py-2 bg-transparent hover:bg-black hover:text-white border-2 border-black text-black font-semibold rounded-lg transition-all duration-300 transform hover:scale-105">
                                Download Now
                            </button>
                            <div className="flex justify-center gap-4 mt-8">
                                <img src={googlePlay} alt="Mac & Ro App" className="w-28 h-auto shadow-2xl" />
                                <img src={appStore} alt="Mac & Ro App" className="w-28 h-auto shadow-2xl" />
                            </div>
                        </motion.div>
                    </motion.div>
                    
                    <motion.div 
                        className="order-1 lg:order-2"
                        variants={slideInRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <div className="relative">
                            <img 
                                src={featureImage3} 
                                alt="Premium Metal Account Services" 
                                className="w-full h-auto rounded-[40px] shadow-2xl"
                            />
                            
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
        </>
    );
};

export default Features;
