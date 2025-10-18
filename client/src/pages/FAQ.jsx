import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  const faqs = [
    {
      question: t('faq.questions.whatIsMacRo.question'),
      answer: t('faq.questions.whatIsMacRo.answer')
    },
    {
      question: t('faq.questions.authorizedInUAE.question'),
      answer: t('faq.questions.authorizedInUAE.answer')
    },
    {
      question: t('faq.questions.services.question'),
      answer: (
        <div className="space-y-4 text-gray-600 leading-relaxed">
          <p>{t('faq.questions.services.answer')}</p>
          <ul className="list-disc list-inside px-3 space-y-2">
            {t('faq.questions.services.points', { returnObjects: true }).map((point, index) => (
              <li key={index}>
                <strong>{point.split(':')[0]}:</strong> {point.split(':').slice(1).join(':')}
              </li>
            ))}
          </ul>
          <p>{t('faq.questions.services.conclusion')}</p>
        </div>
      )
    },
    {
      question: t('faq.questions.securityMeasures.question'),
      answer: t('faq.questions.securityMeasures.answer')
    },
    {
      question: t('faq.questions.authenticityPurity.question'),
      answer: t('faq.questions.authenticityPurity.answer')
    },
    {
      question: t('faq.questions.dataProtection.question'),
      answer: t('faq.questions.dataProtection.answer')
    },
    {
      question: t('faq.questions.howToBuy.question'),
      answer: (
        <div className="space-y-4 text-gray-600 leading-relaxed">
          <p>{t('faq.questions.howToBuy.answer')}</p>
          <ul className="list-disc list-inside px-3 space-y-2">
            {t('faq.questions.howToBuy.methods', { returnObjects: true }).map((method, index) => (
              <li key={index}>
                <strong>{method.split(':')[0]}:</strong> {method.split(':').slice(1).join(':')}
              </li>
            ))}
          </ul>
        </div>
      )
    },
    {
      question: t('faq.questions.minimumQuantity.question'),
      answer: (
        <div className="space-y-4 text-gray-600 leading-relaxed">
          <p>{t('faq.questions.minimumQuantity.answer')}</p>
          <ul className="list-disc list-inside px-3 space-y-2">
            {t('faq.questions.minimumQuantity.methods', { returnObjects: true }).map((method, index) => (
              <li key={index}>
                <strong>{method.split(':')[0]}:</strong> {method.split(':').slice(1).join(':')}
              </li>
            ))}
          </ul>
        </div>
      )
    },
    {
      question: t('faq.questions.sellBack.question'),
      answer: t('faq.questions.sellBack.answer')
    },
    {
      question: t('faq.questions.pricing.question'),
      answer: t('faq.questions.pricing.answer')
    },
    {
      question: t('faq.questions.brands.question'),
      answer: t('faq.questions.brands.answer')
    },
    {
      question: t('faq.questions.deliveryCosts.question'),
      answer: t('faq.questions.deliveryCosts.answer')
    },
    {
      question: t('faq.questions.directCollection.question'),
      answer: t('faq.questions.directCollection.answer')
    },
    {
      question: t('faq.questions.insurance.question'),
      answer: t('faq.questions.insurance.answer')
    },
    {
      question: t('faq.questions.internationalDelivery.question'),
      answer: t('faq.questions.internationalDelivery.answer')
    },
    {
      question: t('faq.questions.secureStorage.question'),
      answer: (
        <div className="space-y-4 text-gray-600 leading-relaxed">
          <p>{t('faq.questions.secureStorage.answer')}</p>
          <p>{t('faq.questions.secureStorage.conclusion')}</p>
        </div>
      )
    },
    {
      question: t('faq.questions.documentsRequired.question'),
      answer: t('faq.questions.documentsRequired.answer')
    },
    {
      question: t('faq.questions.lostCredentials.question'),
      answer: t('faq.questions.lostCredentials.answer')
    },
    {
      question: t('faq.questions.customerService.question'),
      answer: t('faq.questions.customerService.answer')
    },
    {
      question: t('faq.questions.vat.question'),
      answer: t('faq.questions.vat.answer')
    },
    {
      question: t('faq.questions.otherTaxes.question'),
      answer: t('faq.questions.otherTaxes.answer')
    },
    {
      question: t('faq.questions.onlinePlatform.question'),
      answer: t('faq.questions.onlinePlatform.answer')
    },
    {
      question: t('faq.questions.accountRequired.question'),
      answer: t('faq.questions.accountRequired.answer')
    },
    {
      question: t('faq.questions.openAccount.question'),
      answer: t('faq.questions.openAccount.answer')
    },
    {
      question: t('faq.questions.accessAccount.question'),
      answer: t('faq.questions.accessAccount.answer')
    },
    {
      question: t('faq.questions.minimumAmount.question'),
      answer: t('faq.questions.minimumAmount.answer')
    },
    {
      question: t('faq.questions.operationalHours.question'),
      answer: t('faq.questions.operationalHours.answer')
    },
    {
      question: t('faq.questions.maintenance.question'),
      answer: t('faq.questions.maintenance.answer')
    },
    {
      question: t('faq.questions.connectionInterruption.question'),
      answer: t('faq.questions.connectionInterruption.answer')
    },
    {
      question: t('faq.questions.spotPrice.question'),
      answer: t('faq.questions.spotPrice.answer')
    },
    {
      question: t('faq.questions.hiddenFees.question'),
      answer: t('faq.questions.hiddenFees.answer')
    },
    {
      question: t('faq.questions.advancedOrders.question'),
      answer: t('faq.questions.advancedOrders.answer')
    },
    {
      question: t('faq.questions.otherAccountTypes.question'),
      answer: t('faq.questions.otherAccountTypes.answer')
    },
    {
      question: t('faq.questions.goldSavingAccount.question'),
      answer: t('faq.questions.goldSavingAccount.answer')
    },
    {
      question: t('faq.questions.fundingCurrencies.question'),
      answer: t('faq.questions.fundingCurrencies.answer')
    },
    {
      question: t('faq.questions.platformCharges.question'),
      answer: t('faq.questions.platformCharges.answer')
    },
    {
      question: t('faq.questions.fundingMethods.question'),
      answer: (
        <div className="space-y-4 text-gray-600 leading-relaxed">
          <p>{t('faq.questions.fundingMethods.answer')}</p>
          <ul className="list-disc list-inside px-3 space-y-2">
            {t('faq.questions.fundingMethods.methods', { returnObjects: true }).map((method, index) => (
              <li key={index}>
                <strong>{method.split(':')[0]}:</strong> {method.split(':').slice(1).join(':')}
              </li>
            ))}
          </ul>
        </div>
      )
    },
    {
      question: t('faq.questions.redemptionTime.question'),
      answer: t('faq.questions.redemptionTime.answer')
    },
    {
      question: t('faq.questions.marketUpdates.question'),
      answer: t('faq.questions.marketUpdates.answer')
    },
    {
      question: t('faq.questions.uaeRegulation.question'),
      answer: (
        <div className="space-y-4 text-gray-600 leading-relaxed">
          <p>{t('faq.questions.uaeRegulation.answer')}</p>
          <p>{t('faq.questions.uaeRegulation.additional')}</p>
        </div>
      )
    },
    {
      question: t('faq.questions.uaeOversight.question'),
      answer: (
        <div className="space-y-4 text-gray-600 leading-relaxed">
          <p>{t('faq.questions.uaeOversight.answer')}</p>
          {t('faq.questions.uaeOversight.details', { returnObjects: true }).map((detail, index) => (
            <p key={index}>{detail}</p>
          ))}
        </div>
      )
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white" dir={isArabic ? 'rtl' : 'ltr'}>
      {/* Header Section */}
      <section className="py-10 md:py-20 bg-[#F1F0E8]">
        <div className={`max-w-6xl mx-auto px-4 ${isArabic ? "text-right" : "text-left"}`}>
          <h1 className="text-3xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 tracking-tight font-playfair">
            {t('faq.hero.title')}
          </h1>
          <p className="text-sm sm:text-base text-gray-600 mx-auto leading-relaxed">
            {t('faq.hero.description')}
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-10 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg border border-gray-200 overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </span>
                  <svg 
                    className={`w-6 h-6 text-[#DCBC7C] transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {openIndex === index && (
                  <div className="px-6 py-4">
                    <div className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-10 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 font-playfair">
            {t('faq.contact.title')}
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            {t('faq.contact.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="px-8 py-4 bg-[#DCBC7C] hover:bg-[#C4A76A] text-black font-semibold rounded-lg transition-all duration-300 text-lg"
            >
              {t('faq.contact.contactTeam')}
            </Link>
            <Link 
              to="/services"
              className="px-8 py-4 bg-transparent border-2 border-[#DCBC7C] text-[#DCBC7C] hover:bg-[#DCBC7C] hover:text-black font-semibold rounded-lg transition-all duration-300 text-lg"
            >
              {t('faq.contact.viewServices')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;