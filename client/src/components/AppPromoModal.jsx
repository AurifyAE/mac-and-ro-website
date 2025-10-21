import React, { useEffect, useState } from 'react';
import appStore from '../assets/homepage/appStore.png';
import googlePlay from '../assets/homepage/googlePlay.png';
import featureImage3 from '../assets/homepage/orovivo-app.jpg';
import { useTranslation } from 'react-i18next';

const AppPromoModal = ({ isOpen, onClose }) => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  // Internal state: modal only shows after 1 minutes if parent prop `isOpen` is true
  const [show, setShow] = useState(false);

  useEffect(() => {
    let timerId;
    // Only consider timer if parent wants it open (isOpen === true)
    if (isOpen) {
      timerId = setTimeout(() => {
        setShow(true);
        document.body.style.overflow = 'hidden';
      }, 60000); // 1 minutes in milliseconds
    } else {
      setShow(false);
      document.body.style.overflow = '';
    }
    return () => {
      if (timerId) clearTimeout(timerId);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Don't render the modal until 1 minutes have passed and parent isOpen is true
  if (!isOpen || !show) return null;

  // Close logic
  const handleClose = (e) => {
    e?.stopPropagation();
    document.body.style.overflow = '';
    setShow(false);
    onClose();
  };

  // If click on backdrop, close modal
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose(e);
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[100] p-4 transition-opacity duration-300"
      onClick={handleBackdropClick}
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      <div className="bg-white rounded-2xl max-w-4xl w-full mx-4 relative overflow-hidden shadow-2xl flex flex-col md:flex-row transition-all duration-300">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-50 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors cursor-pointer"
          aria-label={t('appModal.close') || 'Close'}
          type="button"
        >
          <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Left Side - Feature Image */}
        <div className="w-full md:w-1/2 h-48 md:h-auto relative">
          <img
            src={featureImage3}
            alt="ORO VIVO App Features"
            className="w-full h-full object-cover rounded-t-2xl md:rounded-l-2xl md:rounded-t-none"
            loading="lazy"
          />
          {/* Overlay for better text readability if needed */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#DCBC7C]/20 to-transparent rounded-t-2xl md:rounded-l-2xl md:rounded-t-none"></div>
        </div>

        {/* Right Side - Content */}
        <div className="w-full md:w-1/2 relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#DCBC7C] to-[#F1F0E8] opacity-10 pointer-events-none"></div>

          <div className="relative z-10 p-4 md:p-8 h-full flex flex-col justify-center">
            {/* Header */}
            <div className={`mb-4 md:mb-6 ${isArabic ? 'text-right' : 'text-left'}`}>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 font-playfair">
                {t('appModal.downloadTitle')}
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                {t('appModal.description')}
              </p>
            </div>

            {/* App Features */}
            <div className="mb-4 md:mb-6 space-y-2 md:space-y-3">
              <div className="flex items-center text-xs md:text-sm text-gray-700">
                <svg className={`w-3 h-3 md:w-4 md:h-4 text-[#DCBC7C] ${isArabic ? 'ml-3' : 'mr-3'} flex-shrink-0`} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {t('appModal.realTimeTrading')}
              </div>
              <div className="flex items-center text-xs md:text-sm text-gray-700">
                <svg className={`w-3 h-3 md:w-4 md:h-4 text-[#DCBC7C] ${isArabic ? 'ml-3' : 'mr-3'} flex-shrink-0`} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {t('appModal.locationSwap')}
              </div>
              <div className="flex items-center text-xs md:text-sm text-gray-700">
                <svg className={`w-3 h-3 md:w-4 md:h-4 text-[#DCBC7C] ${isArabic ? 'ml-3' : 'mr-3'} flex-shrink-0`} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {t('appModal.securePortfolio')}
              </div>
              <div className="flex items-center text-xs md:text-sm text-gray-700">
                <svg className={`w-3 h-3 md:w-4 md:h-4 text-[#DCBC7C] ${isArabic ? 'ml-3' : 'mr-3'} flex-shrink-0`} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {t('appModal.marketTracking')}
              </div>
            </div>

            {/* Download Buttons */}
            <div className={`flex items-center ${isArabic ? 'justify-end' : 'justify-start'} gap-3 md:gap-4`}>
              {/* TODO: Replace href="#" with actual App Store & Play links */}
              <span className="w-auto cursor-not-allowed opacity-70">
                <img
                  src={appStore}
                  alt="Download on App Store"
                  className="w-auto h-6 md:h-8 object-contain transition-opacity"
                  loading="lazy"
                  style={{ pointerEvents: 'none' }}
                />
              </span>
              <span className="w-auto cursor-not-allowed opacity-70">
                <img
                  src={googlePlay}
                  alt="Get it on Google Play"
                  className="w-auto h-6 md:h-8 object-contain transition-opacity"
                  loading="lazy"
                   style={{ pointerEvents: 'none' }}
                />
              </span>
            </div>

            {/* Footer */}
            <div className={`mt-4 md:mt-6 ${isArabic ? 'text-right' : 'text-left'}`}>
              <p className="text-xs text-gray-500">
                {t('appModal.availableDevices')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppPromoModal;
