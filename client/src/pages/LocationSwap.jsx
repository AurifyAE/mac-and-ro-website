import React from 'react'
import MetalAccountCTA from '../components/MetalAccountCTA';

const LocationSwap = () => {
    // Dynamic Q&A data
    const qaData = [
        {
            id: 1,
            question: "1. Reduced Transportation and Storage Costs",
            points: [
                "Instead of physically moving gold from one location to another (which is expensive and risky), traders can swap it with a counterparty who already has gold in the desired location.",
                "Saves on shipping, insurance, security, and customs fees."
            ]
        },
        {
            id: 2,
            question: "3. Regulatory & Tax Optimization",
            points: [
                "Some jurisdictions have more favourable tax, duty, or reporting regimes.",
                "By swapping instead of shipping, parties can avoid triggering import/export taxes or regulatory hurdles."
            ]
        },
        {
            id: 3,
            question: "5. Risk Reduction",
            points: [
                "Eliminates risks tied to physical transport (theft, delays, political instability in transit countries).",
                "Reduces counterparty risk by using recognized exchanges, LBMA standards, or trusted vaulting networks."
            ]
        },
        {
            id: 4,
            question: "7. Support for Central Banks & Large Institutions",
            points: [
                "Central banks often hold gold across multiple international vaults. Location swaps allow them to optimize holdings without disrupting physical reserves.",
                "Institutions can rebalance gold inventory closer to end users or refiners."
            ]
        },
        {
            id: 5,
            question: "2. Improved Liquidity & Market Access",
            points: [
                "Location swaps help participants gain access to local markets (e.g., Swiss refining centres, Asian buyers in Singapore or Shanghai, Middle East demand in Dubai).",
                "This makes gold more fungible globally and ensures liquidity in multiple hubs."
            ]
        },
        {
            id: 6,
            question: "4. Faster Settlement & Delivery",
            points: [
                "Physical transportation of gold can take days or weeks.",
                "A location swap allows “instant” delivery obligations to be met in another hub, helping to settle contracts more efficiently."
            ]
        },
        {
            id: 7,
            question: "6. Flexibility for Arbitrage & Hedging",
            points: [
                "Traders can arbitrage differences between regional gold prices (e.g., London spot vs. Shanghai premium).",
                "Refineries, jewellers, or bullion banks can secure supplies where demand is highest without moving bullion across borders."
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section with Background Image */}
            <section className="relative min-h-screen flex items-end justify-center">
                {/* Background Image */}
                <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url('/src/assets/location-swap/location-swap-hero.jpg')`
                    }}
                />
                
                {/* Dark Overlay for better text readability */}
                <div className="absolute inset-0 bg-black/20"></div>
                
                {/* Content - Bottom Center */}
                <div className="relative z-10 text-center pb-16 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight font-playfair">
                        Location Swap of Gold
                        </h1>
                        <p className="text-sm sm:text-base text-white/90 leading-relaxed max-w-4xl mx-auto">
                        A location swap (from the Latina for "locus/locatio") is a physical gold transaction where equivalent amounts of gold are exchanged between two different locations, typically two gold hubs. Location swaps allow an efficient transfer of metal without the need to physically transport gold to a single central location. 
                        </p>
                    </div>
                </div>
            </section>

            <section>
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                    <p className="text-gray-600 leading-relaxed text-base text-center">
                        Mac & Ro Capital FZC can provide Gold Location Swap in the following hubs: 
                    </p>
                    <div className="flex flex-wrap gap-20 items-center justify-center py-10">
                        <div className="flex flex-col items-center gap-2">
                            <img src="/src/assets/location-swap/location-icon.png" alt="London" className="w-4 h-4" />
                            <span className="text-gray-600 text-lg font-semibold uppercase">London</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <img src="/src/assets/location-swap/location-icon.png" alt="Zurich" className="w-4 h-4" />
                            <span className="text-gray-600 text-lg font-semibold uppercase">Zurich</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <img src="/src/assets/location-swap/location-icon.png" alt="Lecce" className="w-4 h-4" />
                            <span className="text-gray-600 text-lg font-semibold uppercase">Lecce</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <img src="/src/assets/location-swap/location-icon.png" alt="Dubai" className="w-4 h-4" />
                            <span className="text-gray-600 text-lg font-semibold uppercase">Dubai</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <img src="/src/assets/location-swap/location-icon.png" alt="Hong Kong" className="w-4 h-4" />
                            <span className="text-gray-600 text-lg font-semibold uppercase">Hong Kong</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <img src="/src/assets/location-swap/location-icon.png" alt="New York" className="w-4 h-4" />
                            <span className="text-gray-600 text-lg font-semibold uppercase">New York</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Q&A Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-playfair leading-tight text-center mb-16">
                    Benefits of a Gold Location Swap
                    </h2>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Left Column */}
                        <div className="space-y-8">
                            {qaData.slice(0, 4).map((qa) => (
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

                        {/* Right Column */}
                        <div className="space-y-8">
                            {qaData.slice(4, 7).map((qa) => (
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
                </div>
            </section>
            
            {/* CTA Section */}
            <MetalAccountCTA  title="Need help with swapping your gold location?" />
        </div>
    )
}

export default LocationSwap;