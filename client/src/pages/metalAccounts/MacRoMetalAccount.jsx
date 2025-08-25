import React from 'react'
import StepbyStepData from '../../components/metalAccounts/StepbyStepData'
import { motion } from 'framer-motion';
import MetalAccountCTA from '../../components/MetalAccountCTA';

const MacRoMetalAccount = () => {
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

  const steps = [
    {
      number: "1",
      title: "Direct Allocation",
      description: "Your account reflects actual physical holdings, not just a balance."
    },
    {
      number: "2",
      title: "Physical Movement",
      description: "Credits and debits match the real transfer of bars in or out of the vault."
    },
    
    {
      number: "3",
      title: "Full Ownership",
      description: "You retain full rights to your bars, even if the account operator defaults."
    },
    
    {
      number: "4",
      title: "Secure Custody",
      description: "High-security vaults ensure your metals are protected at all times. (though physical collection is complex due to vault security)."
    },
  ]
  return (
    <div className="min-h-screen bg-white">
        <section className="relative h-[480px] flex items-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/src/assets/metalAccount/mac-banner.jpg')`
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
            <span className="text-[#DCBC7C] text-sm">MAC & RO  METAL ACCOUNT</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight font-playfair">
              Invest in Certainty.
            </h1>
            <p className="max-w-lg text-white text-base">
              A Smarter Way to Own Precious Metals
            </p>
          </div>
        </div>
      </section>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 my-10">
        <div className="space-y-12">
          {/* First Q&A Pair */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Question */}
            <div>
              <h3 className="text-4xl font-semibold text-gray-900 mb-4 font-playfair">
                What is a Mac & Ro Metal Account?
              </h3>
            </div>
            
            {/* Answer */}
            <div>
              <p className="text-gray-600 leading-relaxed text-base">
              The Mac & Ro Metal Account is a secure and cost-effective way to invest in gold and other precious metals. Designed for both individuals and institutions, it allows you to build long-term reserves or manage short-to-medium-term investments with ease and transparency.
              </p>
            </div>
          </div>

          {/* Second Q&A Pair */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Question */}
            <div>
              <h3 className="text-3xl sm:text-4xl lg:text-4xl font-semibold text-gray-900 mb-4 font-playfair">
                What Makes It Different?
              </h3>
            </div>
            
            {/* Answer */}
            <div>
              <p className="text-gray-600 leading-relaxed text-base mb-6">
              Unlike traditional investments, the Metal Account is allocated — meaning your holdings are backed by specific, identifiable bars, plates, or ingots. Each piece is recorded with:
              </p>
              <ul className="space-y-3 text-gray-600 leading-relaxed text-base font-bold">
                <li className="flex items-start">
                  <span className="text-[#DCBC7C] mr-2 font-bold">•</span>
                  A unique serial number
                </li>
                <li className="flex items-start">
                  <span className="text-[#DCBC7C] mr-2 font-bold">•</span>
                  Gross weight
                </li>
                <li className="flex items-start">
                  <span className="text-[#DCBC7C] mr-2 font-bold">•</span>
                  Purity / fineness
                </li>
                <li className="flex items-start">
                  <span className="text-[#DCBC7C] mr-2 font-bold">•</span>
                  Fine weight (for gold)
                </li>
              </ul>
              <p className="text-gray-600 leading-relaxed text-base mt-6">
                This ensures complete transparency and direct ownership of your metals.
              </p>
            </div>
          </div>
        </div>
        </div>


        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-30 bg-gray-50">
            <motion.div 
            className="text-left mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            >
                <motion.h2 
                    className="text-3xl lg:text-4xl  font-bold text-gray-900 mb-6 tracking-tight font-playfair"
                    variants={itemVariants}
                >
                    How it works?
                </motion.h2>
            </motion.div>
          <StepbyStepData steps={steps} />
        </div>

      {/* Three Column Section: Title, Points, Image */}
      <section className="py-20 bg-[#DCBC7C]/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            {/* Column 1: Title */}
            <div className="lg:col-span-1">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-playfair leading-tight mb-6">
                Key Benefits
              </h2>
            </div>

            {/* Column 2: 4 Points with Tick Icons */}
            <div className="lg:col-span-1">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-6 h-6 bg-[#DCBC7C] rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Tangible Ownership</h3>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-6 h-6 bg-[#DCBC7C] rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">No Overdraft Risk</h3>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-6 h-6 bg-[#DCBC7C] rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Custodial Simplicity</h3>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-6 h-6 bg-[#DCBC7C] rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Flexibility</h3>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 3: Image */}
            <div className="lg:col-span-1">
              <div className="relative">
                <div className="relative overflow-hidden shadow-2xl">
                  <img 
                    src="/src/assets/metalAccount/mac-img2.jpg" 
                    alt="Mac & Ro Metal Account - Gold Investment"
                    className="w-full h-auto object-cover"
                  />
                  {/* Optional overlay for enhanced visual appeal */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                
                {/* Decorative element */}
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-[#DCBC7C] rounded-full opacity-20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 my-20">
        <div className="space-y-12">
          {/* First Q&A Pair */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Question */}
            <div>
              <h3 className="text-4xl font-semibold text-gray-900 mb-4 font-playfair">
              Insurance
              </h3>
            </div>
            
            {/* Answer */}
            <div>
              <p className="text-gray-600 leading-relaxed text-base">
                By default, account holders are responsible for arranging their own insurance unless otherwise agreed. This ensures maximum flexibility and control over your asset protection.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <MetalAccountCTA  title="Start your Metal Account Today!" />
    </div>
  )
}

export default MacRoMetalAccount