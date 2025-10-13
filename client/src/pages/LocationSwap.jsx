import React from 'react'
import MetalAccountCTA from '../components/MetalAccountCTA';
import locationSwapHero from '../assets/location-swap/location-swap-hero.jpg';
import locationIcon from '../assets/location-swap/location-icon.png';
import { useTranslation } from 'react-i18next';

const LocationSwap = () => {
    const { t } = useTranslation();
    
    // Dynamic location data
    const locations = [
        { id: 1, name: t('locationSwap.locations.london')},
        { id: 2, name: t('locationSwap.locations.zurich')},
        { id: 3, name: t('locationSwap.locations.lecce')},
        { id: 4, name: t('locationSwap.locations.dubai')},
        { id: 5, name: t('locationSwap.locations.hongKong')},
        { id: 6, name: t('locationSwap.locations.newYork')}
    ];

    // Dynamic Q&A data
    const qaData = [
        {
            id: 1,
            question: t('locationSwap.benefits.reducedTransportation.title'),
            points: t('locationSwap.benefits.reducedTransportation.points', { returnObjects: true })
        },
        {
            id: 2,
            question: t('locationSwap.benefits.regulatoryOptimization.title'),
            points: t('locationSwap.benefits.regulatoryOptimization.points', { returnObjects: true })
        },
        {
            id: 3,
            question: t('locationSwap.benefits.riskReduction.title'),
            points: t('locationSwap.benefits.riskReduction.points', { returnObjects: true })
        },
        {
            id: 4,
            question: t('locationSwap.benefits.centralBankSupport.title'),
            points: t('locationSwap.benefits.centralBankSupport.points', { returnObjects: true })
        },
        {
            id: 5,
            question: t('locationSwap.benefits.improvedLiquidity.title'),
            points: t('locationSwap.benefits.improvedLiquidity.points', { returnObjects: true })
        },
        {
            id: 6,
            question: t('locationSwap.benefits.fasterSettlement.title'),
            points: t('locationSwap.benefits.fasterSettlement.points', { returnObjects: true })
        },
        {
            id: 7,
            question: t('locationSwap.benefits.flexibility.title'),
            points: t('locationSwap.benefits.flexibility.points', { returnObjects: true })
        }
    ];

    // Interleave benefits for correct reading order on mobile and desktop (1,5,2,6,3,7,4)
    const leftCol = qaData.slice(0, 4);
    const rightCol = qaData.slice(4);
    const interleavedQa = [];
    for (let i = 0; i < leftCol.length; i++) {
        interleavedQa.push(leftCol[i]);
        if (rightCol[i]) interleavedQa.push(rightCol[i]);
    }

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section with Background Image */}
            <section className="relative min-h-screen flex items-end justify-center">
                {/* Background Image */}
                <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url(${locationSwapHero})`
                    }}
                />
                
                {/* Dark Overlay for better text readability */}
                <div className="absolute inset-0 bg-black/20"></div>
                
                {/* Content - Bottom Center */}
                <div className="relative z-10 text-center pb-16 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight font-playfair">
                        {t('locationSwap.hero.title')}
                        </h1>
                        <p className="text-sm sm:text-base text-white/90 leading-relaxed max-w-4xl mx-auto">
                        {t('locationSwap.hero.description')}
                        </p>
                    </div>
                </div>
            </section>

            <section>
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                    <p className="text-gray-600 leading-relaxed text-base text-center">
                        {t('locationSwap.locations.description')}
                    </p>
                    <div className="flex flex-wrap gap-20 items-center justify-center py-10">
                        {locations.map((location) => (
                            <div key={location.id} className="flex flex-col items-center gap-2">
                                <img src={locationIcon} alt={location.name} className="w-4 h-4" />
                                <span className="text-gray-600 text-lg font-semibold uppercase">{location.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Q&A Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-playfair leading-tight text-center mb-16">
                    {t('locationSwap.benefits.title')}
                    </h2>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {interleavedQa.map((qa) => (
                            <div key={qa.id} className="bg-white p-6">
                                <div className="flex items-start gap-3 mb-4">
                                    <h3 className="text-lg font-semibold text-gray-900">
                                        {qa.question}
                                    </h3>
                                </div>
                                <div className="ml-11 space-y-3">
                                    {qa.points.map((point, index) => (
                                        <div key={index} className="flex items-start gap-3">
                                            <span className="text-[#DCBC7C] text-lg font-bold mt-0.5">•</span>
                                            <p className="text-gray-600 leading-relaxed text-sm">
                                                {point}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            {/* CTA Section */}
            <MetalAccountCTA  title={t('locationSwap.cta')} />
        </div>
    )
}

export default LocationSwap;