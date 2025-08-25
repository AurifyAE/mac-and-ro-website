import React from 'react'
import MetalAccountCTA from '../../components/MetalAccountCTA';
import tfmBanner from '../../assets/metalAccount/tfm-banner.jpg';
import tfmSection from '../../assets/metalAccount/tfm-section.jpg';
import tfmImg2 from '../../assets/metalAccount/tfm-img2.jpg';

const EndOfTreatmentPaymentTFM = () => {

  const cardsData = [
    {
      id: 1,
      title: "Tax Efficiency",
      description: "Gold is typically taxed only on capital gains. Setting aside profits in gold reduces immediate taxation."
    },
    {
      id: 2,
      title: "Growth Potential",
      description: "Physical gold has appreciated on average ~11% annually over the last 50 years."
    },
    {
      id: 3,
      title: "Liquidity & Flexibility",
      description: "Gold can be liquidated anytime or even pledged for short-term financing."
    },
    {
      id: 4,
      title: "Stability",
      description: "A safe-haven asset that preserves wealth against inflation and geopolitical risks."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
        <section className="relative h-[480px] flex items-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${tfmBanner})`
          }}
        />
        
        {/* Gradient Overlay - 90 degrees from black to transparent */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(90deg, rgba(0,0,0) 0%, rgba(0,0,0) 30%, rgba(0,0,0,0.8) 50%, transparent 100%)'
          }}
        />
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <span className="text-[#DCBC7C] text-sm">
              EOT SOLUTION
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight font-playfair">
            End of Term Compensation (EOT) in Physical Gold
            </h1>
            <p className="max-w-lg text-white text-base">
              Protecting your leadership, securing your company's future.
            </p>
          </div>
        </div>
      </section>

      {/* New Section: Left Title & Paragraph, Right Image */}
      <section className="pt-20 pb-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Title & Paragraph */}
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-playfair leading-tight">
                What is EOT?
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                The End of Term Compensation (EOT) is a corporate tool that allows companies to guarantee directors an additional, tax-efficient benefit at the end of their mandate. At Mac & Ro Capital, we make this compensation even stronger by linking it to physical investment gold.
                </p>
                <p>
                EOT is an additional payment to directors beyond regular salary. For companies, it is fully deductible as a cost. For directors, it is a form of deferred compensation with tax advantages.
                </p>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="relative">
              <div className="relative overflow-hidden shadow-2xl">
                <img 
                  src={tfmSection} 
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


      {/* Cards Section */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Left-aligned title */}
          <div className="mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-playfair leading-tight max-w-2xl">
              Why in Gold?
            </h2>
            {/* <p className="text-gray-600 mt-4 max-w-2xl">
              Our Key Man Metal Account solutions provide strategic protection against executive loss, 
              ensuring business continuity and financial stability.
            </p> */}
          </div>

          {/* Cards Grid - 2 rows with 2 cards each */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {cardsData.map((card) => (
              <div key={card.id} className="bg-[#C9A14A] text-[#D9D9D9] text-center border border-gray-200 rounded-lg p-12 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-bold mb-4">
                  {card.title}
                </h3>
                <p className="text-[#D9D9D9] leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Title & Paragraph */}
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-playfair leading-tight">
                Benefits for Companies & Directors
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed text-base">
                <ul className="space-y-3 text-gray-600 leading-relaxed text-base">
                  <li className="flex items-start">
                    <div className="w-5 h-5 bg-[#C9A14A] rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                      Deductible cost for the company.
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 bg-[#C9A14A] rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                      Reduced taxation for directors at payout.
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 bg-[#C9A14A] rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                      Can serve as a private “pension reserve” for directors planning early retirement.
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 bg-[#C9A14A] rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                      Works as a “golden parachute” in case of unexpected termination.
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="relative">
              <div className="relative overflow-hidden shadow-2xl">
                <img 
                  src={tfmImg2} 
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

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-4xl text-center font-semibold text-black mb-6 tracking-tight font-playfair">
          With expertise in gold trading, international compliance, and vaulting solutions, we transform EOT into a strategic corporate advantage, offering directors and companies both protection and growth.
          </h2>
      </div>

      {/* CTA Section */}
      <MetalAccountCTA  title="Need to know more about EOT?" />
    </div>
  )
}

export default EndOfTreatmentPaymentTFM;