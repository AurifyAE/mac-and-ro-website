import React from 'react';
import { motion } from 'framer-motion';
import metalAccountBanner from '../assets/metalAccount/metal-account-banner.jpg';
import MetalAccountCTA from '../components/MetalAccountCTA';

const MetalAccounts = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  const accountCards = [
    {
      id: 1,
      title: "Deluxe Metal Account",
      description: "Own physical gold with full security, certification, and growth potential.",
      whoItsFor: "Individuals, families, and businesses seeking stable, generational wealth.",
      keyBenefits: "Full ownership, secure vaults, extra gold, globally certified.",
      type: "individual"
    },
    {
      id: 2,
      title: "Mac & Ro Metal Account",
      description: "Secure your wealth with allocated precious metals, fully certified and protected.",
      whoItsFor: "Investors and businesses seeking safe, tangible assets.",
      keyBenefits: "Numbered bars, segregated vaults, full ownership, no credit risk.",
      type: "individual"
    },
    {
      id: 3,
      title: "End Of Treatment (EOT)",
      description: "Severance payments in physical gold for executives.",
      whoItsFor: "Corporates planning executive benefits",
      keyBenefits: "Tax efficient, secure, flexible",
      type: "company"
    },
    {
      id: 4,
      title: "Key Man Metal Account",
      description: "Protect your company from loss of key personnel.",
      whoItsFor: "Businesses with essential employees",
      keyBenefits: "Immediate payout, liquid asset",
      type: "company"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Background Image and Gradient Overlay */}
      <section className="relative h-[480px] flex items-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${metalAccountBanner})`
          }}
        />
        
        {/* Gradient Overlay - 90 degrees from black to transparent */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(90deg, rgba(0,0,0) 0%, rgba(0,0,0,0.8) 50%, transparent 100%)'
          }}
        />
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight font-playfair">
              Metal Accounts: <br /> Secure Gold Ownership <br /> with Lasting Value
            </h1>
          </div>
        </div>
      </section>

      {/* Accounts Cards Section */}
      <section className="py-10 bg-[#F1F0E8]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className='text-left text-base text-black mb-6'>
            Mac & Ro Capital offers to all interested parties four different types of Metal Accounts to provide solutions dedicated to the different needs of the Physical Gold Investment Market. In addition to the classic Accumulation Plan for cyclical purchases on a monthly and quarterly basis, called PAC, we have launched the possibility of taking advantage of additional targeted opportunities, suitable for specific investors. We promote a responsible wealth culture founded on stability, direct control, certified documentation, and full regulatory compliance. The Metal Trading Account is a new type of solution available for the most demanding customers, always looking for new opportunities. This is an account through which you operate on daily trading on international markets.
            </p>
          <div className="my-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#A78E52] mb-6 tracking-tight font-playfair">
              For Individuals
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {accountCards.filter(card => card.type === "individual").map((card, index) => (
              <motion.div 
                key={card.id}
                className="bg-black text-white rounded-3xl shadow-lg p-10 hover:shadow-xl transition-shadow duration-300"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <h3 className="text-2xl font-bold text-[#DCBC7C] mb-4 tracking-tight">
                  {card.title}
                </h3>
                <p className="leading-relaxed mb-6">
                  {card.description}
                </p>
                <div className="space-y-3">
                  <p className="text-sm">
                    <span className="font-semibold text-[#DCBC7C]">Who It's For:</span> {card.whoItsFor}
                  </p>
                  <p className="text-sm">
                    <span className="font-semibold text-[#DCBC7C]">Key Benefits:</span> {card.keyBenefits}
                  </p>
                </div>
                <button className="mt-6 px-4 py-2 bg-black hover:bg-white hover:text-black border-2 border-white text-white font-semibold rounded-sm transition-colors duration-200 ease-in-out tracking-wide">
                  Learn More
                </button>
              </motion.div>
            ))}
          </div>

          {/* For Companies Section */}
          <div className="my-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#A78E52] mb-6 tracking-tight font-playfair">
              For Companies
            </h2>
          </div>

          {/* Company Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {accountCards.filter(card => card.type === "company").map((card, index) => (
              <motion.div 
                key={card.id}
                className="bg-black text-white rounded-3xl shadow-lg p-10 hover:shadow-xl transition-shadow duration-300"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <h3 className="text-2xl font-bold text-[#DCBC7C] mb-4 tracking-tight">
                  {card.title}
                </h3>
                <p className="leading-relaxed mb-6">
                  {card.description}
                </p>
                <div className="space-y-3">
                  <p className="text-sm">
                    <span className="font-semibold text-[#DCBC7C]">Who It's For:</span> {card.whoItsFor}
                  </p>
                  <p className="text-sm">
                    <span className="font-semibold text-[#DCBC7C]">Key Benefits:</span> {card.keyBenefits}
                  </p>
                </div>
                <button className="mt-6 px-4 py-2 bg-black hover:bg-white hover:text-black border-2 border-white text-white font-semibold rounded-sm transition-colors duration-200 ease-in-out tracking-wide">
                  Learn More
                </button>
              </motion.div>
            ))}
          </div>
          <div className="my-16">
            <h2 className="text-3xl sm:text-4xl lg:text-4xl text-center font-semibold text-black mb-6 tracking-tight font-playfair">
            With global expertise, ethical sourcing, and strict compliance, Mac & Ro Capital ensures your Metal Account protects both your gold and your critical personnel.
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8"></div>
        </div>
      </section>

      {/* CTA Section */}
      <MetalAccountCTA  title="Start your investment journey today!" />
      
    </div>
  );
};

export default MetalAccounts;
