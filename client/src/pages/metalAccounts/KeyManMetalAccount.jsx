import React from 'react'
import MetalAccountCTA from '../../components/MetalAccountCTA';

const KeyManMetalAccount = () => {
  // Dynamic cards data
  const cardsData = [
    {
      id: 1,
      title: "Immediate Financial Protection",
      description: "Guarantees quick disbursement of the invested capital to support business continuity."
    },
    {
      id: 2,
      title: "Liquidity & Stability",
      description: "Gold is universally recognized, easily tradable, and retains long-term value."
    },
    {
      id: 3,
      title: "Operational Continuity",
      description: "Funds can be used for recruitment, training, offsetting production losses, or even repurchasing shares from heirs of a deceased partner."
    },
    {
      id: 4,
      title: "Tax Advantages",
      description: "Since the company is both contractor and beneficiary, the invested capital is not treated as a personal benefit to managers. Taxation only applies on capital gains at the time of sale."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
        <section className="relative h-[480px] flex items-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/src/assets/metalAccount/keyman-banner.jpg')`
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
          <div className="max-w-xl">
            <span className="text-[#DCBC7C] text-sm">
                KEYMAN METAL ACCOUNT
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight font-playfair">
              Protecting What Matters Most
            </h1>
            <p className="max-w-80 text-white text-base">
              Safeguard companies against the potential loss of executives.
            </p>
          </div>
        </div>
      </section>

      <section className="pt-20 pb-10 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Title & Paragraph */}
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-playfair leading-tight">
                What is a Keyman Metal Account?
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed text-base">
                <p>
                At Mac & Ro Capital, we recognize that the greatest value of a company isn’t only in its capital, products, or services — it’s in its people. In particular, those key individuals whose expertise, leadership, or client relationships make them indispensable to the success of the business.<br />
                The Key Man Metal Account is designed to safeguard companies against the potential loss of such individuals, ensuring continuity and stability when it matters most.
                </p>
                <p>
                A Key Man solution in physical investment gold is a unique product where the company acts as both the policyholder and the beneficiary. It provides a financial safety net in the event of the death or total disability of a key individual — such as a CEO, managing director, creative lead, senior sales executive, or any employee with vital expertise.
                </p>
                <p>
                By investing in physical gold, the company ensures that its protection is both solid and liquid, since gold can be realized at any moment.
                </p>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="relative">
              <div className="relative overflow-hidden shadow-2xl">
                <img 
                  src="/src/assets/metalAccount/key-gold.jpg" 
                  alt="Deluxe Metal Account - Gold Investment"
                  className="w-full h-auto object-cover"
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

      {/* Cards Section */}
      <section className="py-10 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Left-aligned title */}
          <div className="mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-playfair leading-tight max-w-2xl">
              Why choose a KeyMan Metal Account?
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
              Is this for you?
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed text-base">
                <p>
                Ideal for companies seeking stability, succession planning, and executive benefits, while protecting key people and enjoying significant tax advantages.
                </p>
                <ul className="space-y-2 text-gray-600 leading-relaxed text-base font-bold">
                  <li className="flex items-start">
                    <span className="text-[#DCBC7C] mr-2 font-bold">•</span>
                    Corporations and partnerships
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#DCBC7C] mr-2 font-bold">•</span>
                    SMEs and family businesses
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#DCBC7C] mr-2 font-bold">•</span>
                    Independent entrepreneurs and professionals
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="relative">
              <div className="relative overflow-hidden shadow-2xl">
                <img 
                  src="/src/assets/metalAccount/keymanimg2.jpg" 
                  alt="Deluxe Metal Account - Gold Investment"
                  className="w-full h-auto object-cover"
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

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-20">
            <h2 className="text-3xl sm:text-4xl lg:text-4xl text-center font-semibold text-black mb-6 tracking-tight font-playfair">
            The Mac & Ro Key Man Metal Account secures your people, protects your business, and ensures lasting resilience with the strength of gold.
            </h2>
          </div>

      {/* CTA Section */}
      <MetalAccountCTA  title="Start Your Keyman Metal Account Today" />
    </div>
  )
}

export default KeyManMetalAccount;