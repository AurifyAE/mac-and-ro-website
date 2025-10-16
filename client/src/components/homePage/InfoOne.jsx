import React from 'react';
import bankCertified from '../../assets/homepage/bankCertified.jpg';
import bancaDitalia from '../../assets/homepage/banca-ditalia-logo.svg';
import oecd from '../../assets/homepage/OECD.svg';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const InfoOne = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  return (
    <div className="bg-black w-full">
      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Image */}
          <div className={`${isArabic ? 'order-1 lg:order-2' : 'order-1 lg:order-1'}`}>
            <div className="relative">
              <img 
                src={bankCertified} 
                alt="Information" 
                className="w-full h-full rounded-[45px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className={`${isArabic ? 'order-2 lg:order-1' : 'order-2 lg:order-2'} text-white p-10`} dir={isArabic ? 'rtl' : 'ltr'}>
            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 tracking-wide leading-snug">
            {t('homepage.infoOne.title')}
            </h2>

            {/* Paragraph */}
            <p className="text-sm sm:text-base lg:text-base mb-8 font-light tracking-wide leading-relaxed text-gray-300">
              {t('homepage.infoOne.description')}
            </p>

            {/* Two Logos in Same Line */}
            <div className="flex items-center space-x-8 mb-8">
              <div className="flex items-center">
                <img 
                  src={bancaDitalia}
                  alt="Logo 1" 
                  className="h-12 w-auto opacity-90 hover:opacity-100 transition-opacity duration-200"
                />
              </div>
              <div className="flex items-center">
                <img 
                  src={oecd} 
                  alt="Logo 2" 
                  className="h-12 w-auto opacity-90 hover:opacity-100 transition-opacity duration-200"
                />
              </div>
            </div>

            {/* Download Button */}
            <button 
              onClick={() => {
                navigate('/corporate-governance');
              }}
              className="px-6 py-2 bg-white text-black hover:bg-black hover:text-white hover:border-white/50 border-2 rounded-lg transition-all duration-300 ease-in-out tracking-wide flex items-center space-x-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>{t('homepage.infoOne.getDocument')}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoOne;
