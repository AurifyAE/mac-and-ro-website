import React from 'react'
import StepbyStepData from '../../components/metalAccounts/StepbyStepData'
import { motion } from 'framer-motion';
import MetalAccountCTA from '../../components/MetalAccountCTA';
import deluxeBanner from '../../assets/metalAccount/deluxe-banner.jpg';
import appleGold from '../../assets/metalAccount/apple-gold-video.mp4';
import deluxeImg2 from '../../assets/metalAccount/deluxe-img2.jpg';

const DeluxeMetalAccount = () => {
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
        duration: 0.5
      }
    }
  };

  // Dynamic advantages data
  const advantagesData = [
    {
      id: 1,
      title: "100 % Ownership",
      description: "Gold is legally yours at all times — individually titled, traceable, and never pooled."
    },
    {
      id: 2,
      title: "Additional Returns",
      description: "Additional physical gold 6-10% credited to your account."
    },
    {
      id: 3,
      title: "Certified & Traceable",
      description: "Each bar is numbered, documented, and accompanied by certification of purity and origin."
    },
    {
      id: 4,
      title: "Compliance & Transparency",
      description: "International standards and legal protection."
    }
  ];

  const steps = [
    {
      number: "1",
      title: "Acquisition",
      description: "Raw gold sourced from certified, traceable suppliers."
    },
    {
      number: "2", 
      title: "Refining",
      description: "Processed in LBMA-accredited facilities to 999.9 purity."
    },
    {
      number: "3",
      title: "Conversion", 
      description: "Cast into numbered, certified bars."
    },
    {
      number: "4",
      title: "Institutional Sale",
      description: "Distributed to banks, funds, and governments."
    },
    {
      number: "5",
      title: "Client Benefit",
      description: "Profits from the cycle are returned as additional physical gold credited to your Deluxe Metal Account"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
        <section className="relative h-[480px] flex items-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${deluxeBanner})`
          }}
        />
        
        {/* Gradient Overlay - 90 degrees from black to transparent */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(90deg, rgba(0,0,0) 0%, rgba(0,0,0,0.6) 40%, transparent 100%)'
          }}
        />
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <span className="text-[#DCBC7C] text-sm">
                DELUXE METAL ACCOUNT
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight font-playfair mt-2">
            Your Gold Remains Yours. But it Grows.
            </h1>
            <p className="max-w-lg text-white text-base">
            Secure, certified, and growing — the Deluxe Metal Account turns gold ownership into a lasting strategy for wealth protection.
            </p>
          </div>
        </div>
      </section>

      {/* New Section: Left Title & Paragraph, Right Image */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Title & Paragraph */}
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-playfair leading-tight">
                What Is a Deluxe Metal Account?
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  As part of our independent consulting activity, we select structured tools and operating models that meet legal soundness, traceability, and asset protection criteria. We have selected Deluxe metal Account for the premium Clients - an advanced solution for utilizing physical gold that combines protection, growth, and full individual ownership. This exclusive tool allows clients to enhance their gold holdings without losing ownership. The structure ensures legal soundness, compliance with regulations, and results aligned with the objectives, structure, and time horizon of the client.
                </p>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="relative">
              <div className="relative overflow-hidden shadow-2xl">
                <video 
                  src={appleGold} 
                  alt="Deluxe Metal Account - Gold Investment"
                  className="w-full h-auto object-cover"
                  autoPlay
                  muted
                  loop
                />
                {/* Optional overlay for enhanced visual appeal */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#DCBC7C] rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 my-10">
        <h2 className="text-3xl sm:text-4xl lg:text-4xl text-left font-semibold text-black mb-6 tracking-tight font-playfair">
          How does it work?
        </h2>
        <p className="text-left text-gray-600 leading-relaxed text-base">
          Through a <span className="font-bold">loan-for-use contract</span>, your physical gold — which always remains your property — is temporarily employed by certified industrial companies. During this time, the gold remains securely stored in certified vaults and fully tracked. In return, you receive additional physical gold credited directly to your Metal Account Deluxe. All processes comply with Italian law, ensuring transparency, contractual protection, and a focus on wealth enhancement.
        </p>

        <div className="py-10 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
                <motion.div 
                className="text-left mb-16"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.h2 
                        className="text-3xl lg:text-4xl text-center font-semibold text-gray-900 mb-6 tracking-tight"
                        variants={itemVariants}
                    >
                        Gold Valorization Cycle
                    </motion.h2>
                </motion.div>
            <StepbyStepData steps={steps} />
            </div>
        </div>
      </div>

      {/* Advantages Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 my-10">
        <h2 className="text-3xl sm:text-4xl lg:text-4xl text-left font-semibold text-black mb-6 tracking-tight font-playfair">
          Advantages of a Deluxe Metal Account
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-15">
          {advantagesData.map((advantage) => (
            <div key={advantage.id} className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-[#DCBC7C] rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{advantage.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-3xl sm:text-4xl lg:text-4xl text-left font-semibold text-black mb-6 tracking-tight font-playfair">
            Tailored Growth Profiles
        </h2>
        <div className="space-y-6 text-gray-600 leading-relaxed text-base">
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-[#DCBC7C] mr-3 font-bold text-lg">•</span>
              <span><strong>6% Additional Gold:</strong> For deposits between €10,000 - €99,000 (credited semi-annually).</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#DCBC7C] mr-3 font-bold text-lg">•</span>
              <span><strong>10% Additional Gold:</strong> For deposits above €100,000 (credited quarterly).</span>
            </li>
          </ul>
          <p className="mt-6">
            Contract terms: 13 to 60 months, with growth always paid in additional physical gold, backed by international certification.
          </p>
        </div>
      </div>

      <section className="py-10 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Title & Paragraph */}
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-playfair leading-tight">
              Is this for you?
              </h2>
              <div className="space-y-10 text-gray-600 leading-relaxed text-base">
                <p>
                The Deluxe Metal Account is designed for anyone who values stability and long-term wealth protection. Whether you’re an individual looking to safeguard your savings, a family building generational wealth, or a business diversifying assets, this account offers a secure and transparent way to own gold.
                </p>
                <ul className="space-y-3 text-gray-600 leading-relaxed text-base font-bold">
                  <li className="flex items-start">
                    <span className="text-[#DCBC7C] mr-2 font-bold">•</span>
                    Individuals seeking stable, inflation-proof assets.
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#DCBC7C] mr-2 font-bold">•</span>
                    Families preserving wealth for future generations.
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#DCBC7C] mr-2 font-bold">•</span>
                    Businesses and professionals diversifying their portfolio.
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="relative">
              <div className="relative overflow-hidden shadow-2xl">
                <img 
                  src={deluxeImg2} 
                  alt="Deluxe Metal Account - Gold Investment"
                  className="w-full h-auto object-cover"
                />
                {/* Optional overlay for enhanced visual appeal */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>              
            </div>
          </div>
        </div>
      </section>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-20">
            <h2 className="text-3xl sm:text-4xl lg:text-4xl text-center font-semibold text-black mb-6 tracking-tight font-playfair">
                With Mac & Ro Capital, gold is no longer just a safe store of value. It becomes a dynamic asset that offers stability, flexibility, and tangible growth — without compromising ownership or security.
            </h2>
        </div>

      {/* CTA Section */}
      <MetalAccountCTA  title="Start Your Deluxe Metal Account Today" />
    </div>
  )
}

export default DeluxeMetalAccount;