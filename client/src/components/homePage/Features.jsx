import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import featureImage1 from '../../assets/homepage/goldVault.png';
import featureImage3 from '../../assets/homepage/orovivo-app.jpg';
import locationSwapVideo from '../../assets/location-swap/location-swap-video.mov';
import googlePlay from '../../assets/homepage/googlePlay.png';
import appStore from '../../assets/homepage/appStore.png';
import { useTranslation } from 'react-i18next';

const Features = () => { 
    const navigate = useNavigate();
    const { t, i18n } = useTranslation();
    // Determine if the language is Arabic (rtl)
    const isArabic = i18n.language === 'ar';
    
    // State for mobile tooltips
    const [activeTooltip, setActiveTooltip] = useState(null);

    const handleClick = (tooltipId, e) => {
        e.preventDefault();
        setActiveTooltip(activeTooltip === tooltipId ? null : tooltipId);
    };

    // Close tooltip when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (!event.target.closest('.tooltip-container')) {
                setActiveTooltip(null);
            }
        }

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    // Array of location data
    const locations = [
        { key: 'dubai' },
        { key: 'lecce' },
        { key: 'zurich' },
        { key: 'singapore' },
        { key: 'istanbul' }
    ];
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
        <section className="md:py-20 py-10 bg-gradient-to-br from-gray-50 to-white">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center" dir={isArabic ? 'rtl' : 'ltr'}>
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
                            {t('homepage.features.globalVaults')}
                        </motion.h2>
                        
                        <motion.p 
                            className="text-base text-gray-600 mb-8 leading-relaxed text-center"
                            variants={fadeInUp}
                        >
                            {t('homepage.features.vaultDescription')}
                        </motion.p>

                        <motion.ul 
                            className="mb-8 space-y-4 list-disc list-inside px-10"
                            
                            variants={itemVariants}
                        >
                            {locations.map((location, index) => (
                                <motion.li
                                    key={location.key}
                                    className={`text-sm sm:text-base font-light tracking-wide text-gray-600 flex items-center w-full`}
                                    variants={itemVariants}
                                >
                                    {t(`homepage.features.${location.key}`)}
                                </motion.li>
                            ))}
                        </motion.ul>

                        <motion.p 
                            className="text-base text-gray-600 mb-8 leading-relaxed text-center"
                            variants={fadeInUp}
                        >
                            {t('homepage.features.vaultProtocols')}
                        </motion.p>
                        
                        <motion.div variants={fadeInUp} className='flex justify-center'>
                            <button 
                            onClick={() => {
                                navigate('/contact');
                            }}
                            className="px-6 py-2 bg-transparent hover:bg-black hover:text-white border-2 border-black text-black font-semibold rounded-lg transition-all duration-300 transform hover:scale-105">
                                {t('homepage.features.bookConsultant')}
                            </button>
                        </motion.div>
                    </motion.div>
                    
                    <motion.div 
                        className="order-1 lg:order-2"
                        variants={slideInLeft}
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

        <section className="md:py-20 py-10 bg-white">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center" dir={isArabic ? 'rtl' : 'ltr'}>
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
                        variants={slideInLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <motion.h2 
                            className="font-playfair text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-6 leading-tight"
                            variants={fadeInUp}
                        >
                            {t('homepage.features.locationSwapTitle')}
                        </motion.h2>
                        
                        <motion.p 
                            className="text-base text-gray-600 mb-8 leading-relaxed"
                            variants={fadeInUp}
                        >
                            {t('homepage.features.locationSwapDescription')}
                        </motion.p>
                        
                        <motion.div variants={fadeInUp}>
                            <button 
                            onClick={() => {
                                navigate('/location-swap');
                            }}
                            className="px-6 py-2 bg-transparent hover:bg-black hover:text-white border-2 border-black text-black font-semibold rounded-lg transition-all duration-300 transform hover:scale-105">
                                {t('homepage.features.knowMore')}
                            </button>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>

        <section className="md:py-20 py-10 bg-white">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center" dir={isArabic ? 'rtl' : 'ltr'}>
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
                            {t('homepage.features.orovivoTitle')}
                        </motion.h2>
                        
                        <motion.p 
                            className="text-base text-gray-600 mb-8 leading-relaxed"
                            variants={fadeInUp}
                        >
                            {t('homepage.features.orovivoDescription')}
                        </motion.p>
                        
                        <motion.div variants={fadeInUp}>
                            <button 
                            onClick={() => {
                                navigate('/');
                            }}
                            className="px-6 py-2 bg-transparent hover:bg-black hover:text-white border-2 border-black text-black font-semibold rounded-lg transition-all duration-300 transform hover:scale-105">
                                {t('homepage.features.downloadNow')}
                            </button>
                            <div className="flex items-center justify-center gap-4 mt-8">
                                <div className="tooltip-container">
                                    <div className="relative group cursor-pointer">
                                        <button 
                                            className="block"
                                            onClick={(e) => handleClick('google-play', e)}
                                        >
                                            <img 
                                                src={googlePlay} 
                                                alt="OROVIVO App" 
                                                className="w-28 h-auto shadow-2xl" 
                                            />
                                        </button>
                                        <span className={`absolute top-full left-8 mt-2 px-2 py-1 text-xs text-white bg-gray-950 rounded transition-opacity duration-300 whitespace-nowrap z-10 ${
                                            activeTooltip === 'google-play' ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                                        }`}>
                                            Coming soon
                                        </span>
                                    </div>
                                </div>
                                <div className="tooltip-container">
                                    <div className="relative group cursor-pointer">
                                        <button 
                                            className="block"
                                            onClick={(e) => handleClick('app-store', e)}
                                        >
                                            <img 
                                                src={appStore} 
                                                alt="OROVIVO App" 
                                                className="w-28 h-auto shadow-2xl" 
                                            />
                                        </button>
                                        <span className={`absolute top-full left-12 mt-2 px-2 py-1 text-xs text-white bg-gray-950 rounded transition-opacity duration-300 whitespace-nowrap z-10 ${
                                            activeTooltip === 'app-store' ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                                        }`}>
                                            Coming soon
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                    
                    <motion.div 
                        className="order-1 lg:order-2"
                        variants={slideInLeft}
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
