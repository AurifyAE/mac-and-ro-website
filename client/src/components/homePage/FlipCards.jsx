import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Import images
import deluxeBanner from '../../assets/homePage/deluxe-flip.jpg';
import macBanner from '../../assets/homePage/mac-flip.jpg';
import keymanBanner from '../../assets/homePage/keyman-flip.jpg';
import tfmBanner from '../../assets/homePage/tfm-flip.jpg';

const flipCardsData = [
    {
        id: 1,
        title: "DELUXE METAL ACCOUNT",
        bgImage: deluxeBanner,
        frontContent: "Secure your future with physical gold investments",
        backContent: {
            description: "Invest in certified physical gold with secure vault storage and full ownership rights.",
            who: "Individuals, families, and businesses seeking stable, generational wealth.",
            benefits: "Full ownership, secure vaults, extra gold, globally certified.",
            ctaLink: "/metal-accounts/deluxe-metal-account"
        }
    },
    {
        id: 2,
        title: "MAC & RO METAL ACCOUNT",
        bgImage: macBanner,
        frontContent: "Professional wealth management services",
        backContent: {
            description: "Expert financial advisors help you build and protect your wealth portfolio.",
            who: "Individuals, families, and businesses seeking stable, generational wealth.",
            benefits: "Full ownership, secure vaults, extra gold, globally certified.",
            ctaLink: "/metal-accounts/mac-ro-metal-account"
        }
    },
    {
        id: 3,
        title: "KEYMAN METAL ACCOUNT",
        bgImage: keymanBanner,
        frontContent: "Strategic corporate investment solutions",
        backContent: {
            description: "Tailored investment strategies for businesses and corporate entities.",
            who: "Individuals, families, and businesses seeking stable, generational wealth.",
            benefits: "Full ownership, secure vaults, extra gold, globally certified.",
            ctaLink: "/metal-accounts/key-man-metal-account"
        }
    },
    {
        id: 4,
        title: "END OF TREATMENT (EOT)",
        bgImage: tfmBanner,
        frontContent: "Trade precious metals on global markets",
        backContent: {
            description: "Access international precious metals markets with professional trading tools.",
            who: "Individuals, families, and businesses seeking stable, generational wealth.",
            benefits: "Full ownership, secure vaults, extra gold, globally certified.",
            ctaLink: "/metal-accounts/end-of-treatment-payment-tfm"
        }
    }
];

const FlipCards = () => {
    const [flippedCards, setFlippedCards] = useState({});
    // const navigate = useNavigate();

    const handleCardFlip = (cardId, isFlipped) => {
        setFlippedCards(prev => ({
            ...prev,
            [cardId]: isFlipped
        }));
    };

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
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {flipCardsData.map((card, index) => (
                <motion.div
                    key={card.id}
                    className="relative h-[475px] cursor-pointer perspective-1000"
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ delay: index * 0.1 }}
                    onMouseEnter={() => handleCardFlip(card.id, true)}
                    onMouseLeave={() => handleCardFlip(card.id, false)}
                >
                    <div className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
                        flippedCards[card.id] ? 'rotate-y-180' : ''
                    }`}>
                        {/* Front of Card */}
                        <div className="absolute inset-0 w-full h-full backface-hidden">
                            <motion.div 
                                className="w-full h-full rounded-2xl shadow-lg overflow-hidden relative group"
                                style={{
                                    backgroundImage: `url(${card.bgImage})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                }}
                                whileHover={{
                                    scale: 0.95,
                                    transition: { 
                                        duration: 0.4, 
                                        ease: [0.25, 0.46, 0.45, 0.94]
                                    }
                                }}
                                initial={{ scale: 1 }}
                                animate={{ 
                                    scale: flippedCards[card.id] ? 0.95 : 1
                                }}
                                transition={{ 
                                    duration: 0.4, 
                                    ease: [0.25, 0.46, 0.45, 0.94]
                                }}
                            >
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/70 group-hover:bg-opacity-50 transition-all duration-300"></div>
                                
                                {/* Content */}
                                <div className="relative z-10 p-10 h-full text-center flex flex-col items-center justify-center text-white">
                                    <h3 className="text-4xl font-bold mb-3 text-[#DCBC7C]">
                                        {card.title}
                                    </h3>
                                </div>
                            </motion.div>
                        </div>

                        {/* Back of Card */}
                        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-[#C9A14A] rounded-2xl shadow-lg p-6">
                            <div className="h-full flex flex-col items-center justify-center text-center text-white">
                                <div className="w-full max-w-sm mx-auto">
                                    <p className="text-lg leading-relaxed mb-4">
                                        {card.backContent.description}
                                    </p>
                                    <p className="text-lg leading-relaxed mb-4">
                                        <span className="font-semibold text-black">Who It's For:</span> {card.backContent.who}
                                    </p>
                                    <p className="text-lg leading-relaxed mb-4">
                                        <span className="font-semibold text-black">Key Benefits:</span> {card.backContent.benefits}
                                    </p>
                                </div>
                                <Link 
                                    to={card.backContent.ctaLink}
                                    className="w-full max-w-xs mx-auto px-4 py-2 bg-black hover:bg-transparent hover:border-1 hover:border-black hover:text-black text-white font-semibold rounded-lg transition-all duration-300 text-sm cursor-pointer block text-center"
                                >
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default FlipCards;
