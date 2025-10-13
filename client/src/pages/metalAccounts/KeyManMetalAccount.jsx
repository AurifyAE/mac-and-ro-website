import React from 'react'
import MetalAccountCTA from '../../components/MetalAccountCTA';
import keymanBanner from '../../assets/metalAccount/keyman-banner.jpg';
import keyGold from '../../assets/metalAccount/key-gold.jpg';
import keymanImg2 from '../../assets/metalAccount/keymanimg2.jpg';
import { useTranslation } from 'react-i18next';

const KeyManMetalAccount = () => {
  const { t } = useTranslation();
  // Dynamic cards data
  const cardsData = [
    {
      id: 1,
      title: t('metalAccounts.keyman.whyChoose.items.protection.title'),
      description: t('metalAccounts.keyman.whyChoose.items.protection.description')
    },
    {
      id: 2,
      title: t('metalAccounts.keyman.whyChoose.items.liquidity.title'),
      description: t('metalAccounts.keyman.whyChoose.items.liquidity.description')
    },
    {
      id: 3,
      title: t('metalAccounts.keyman.whyChoose.items.continuity.title'),
      description: t('metalAccounts.keyman.whyChoose.items.continuity.description')
    },
    {
      id: 4,
      title: t('metalAccounts.keyman.whyChoose.items.taxAdvantages.title'),
      description: t('metalAccounts.keyman.whyChoose.items.taxAdvantages.description')
    }
  ];

  return (
    <div className="min-h-screen bg-white">
        <section className="relative h-[480px] flex items-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${keymanBanner})`
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
                {t('metalAccounts.keyman.hero.badge')}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight font-playfair">
              {t('metalAccounts.keyman.hero.title')}
            </h1>
            <p className="max-w-80 text-white text-base">
              {t('metalAccounts.keyman.hero.subtitle')}
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
                {t('metalAccounts.keyman.whatIs.title')}
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed text-base">
                <p>
                {t('metalAccounts.keyman.whatIs.description1')}<br />
                {t('metalAccounts.keyman.whatIs.description2')}
                </p>
                <p>
                {t('metalAccounts.keyman.whatIs.description3')}
                </p>
                <p>
                {t('metalAccounts.keyman.whatIs.description4')}
                </p>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="relative">
              <div className="relative overflow-hidden shadow-2xl">
                <img 
                  src={keyGold} 
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
              {t('metalAccounts.keyman.whyChoose.title')}
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
              {t('metalAccounts.keyman.isThisForYou.title')}
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed text-base">
                <p>
                {t('metalAccounts.keyman.isThisForYou.description')}
                </p>
                <ul className="space-y-2 text-gray-600 leading-relaxed text-base font-bold">
                  <li className="flex items-start">
                    <span className="text-[#DCBC7C] mr-2 font-bold">•</span>
                    {t('metalAccounts.keyman.isThisForYou.audiences.corporations')}
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#DCBC7C] mr-2 font-bold">•</span>
                    {t('metalAccounts.keyman.isThisForYou.audiences.smb')}
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#DCBC7C] mr-2 font-bold">•</span>
                    {t('metalAccounts.keyman.isThisForYou.audiences.professionals')}
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="relative">
              <div className="relative overflow-hidden shadow-2xl">
                <img 
                  src={keymanImg2} 
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
            <h2 className="text-2xl sm:text-3xl text-center font-semibold text-black mb-6 tracking-tight font-playfair">
            {t('metalAccounts.keyman.conclusion')}
            </h2>
          </div>

      {/* CTA Section */}
      <MetalAccountCTA  title={t('metalAccounts.keyman.cta')} />
    </div>
  )
}

export default KeyManMetalAccount;