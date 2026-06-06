import { useState, useEffect, useRef } from 'react';
import langselector from '../assets/homepage/langselector.svg';
import appStore from '../assets/homepage/appStore.png';
import appleMobile from '../assets/homepage/apple-png.png';
import googleMobile from '../assets/homepage/gplay.webp';
import googlePlay from '../assets/homepage/googlePlay.png';
import { useCurrency } from '../context/CurrencyContext';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Banner = () => {
  const { selectedCurrency, updateCurrency } = useCurrency();
  const { t, i18n } = useTranslation();
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  
  const dropdownsRef = useRef(null);

  const currencies = [
    { code: 'AED', name: 'UAE Dirham' },
    { code: 'USD', name: 'US Dollar' },
    { code: 'EUR', name: 'Euro' }
  ];

  const languages = [
    { code: 'en', name: t('languages.english') },
    { code: 'ar', name: t('languages.arabic') },
    { code: 'it', name: t('languages.italian') }
  ];

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownsRef.current && !dropdownsRef.current.contains(event.target)) {
        setIsCurrencyOpen(false);
        setIsLanguageOpen(false);
      }
    };

    // Add event listener
    document.addEventListener('mousedown', handleClickOutside);
    
    // Cleanup event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-black shadow-sm border-b border-gray-800 z-60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12">
          {/* Left side - Download App */}
          <div className="flex items-center space-x-0 md:space-x-3">
            <span className="text-white text-xs md:text-sm font-medium">{t('banner.downloadApp')}</span>
            <div className="hidden md:flex items-center space-x-2">
            <div className="group">
            <Link 
              to="https://play.google.com/store/apps/details?id=com.orovivo.app"
              className="block"
              target='_blank'
            >
              <img src={googlePlay} alt="Google Play" className="h-6 w-auto cursor-pointer hover:opacity-80 transition-opacity" />
            </Link>
            </div>
            <div className="group">
            <Link
              to="https://apps.apple.com/us/app/orovivo/id6759100030"
              className="block"
              target="_blank"
            >
              <img src={appStore} alt="App Store" className="h-6 w-auto cursor-pointer hover:opacity-80 transition-opacity" />
            </Link>
            </div>
            </div>
            <div className="flex md:hidden items-center space-x-0">
              <div>
              <Link 
                to="https://play.google.com/store/apps/details?id=com.orovivo.app"
                className="block"
                target='_blank'
              >
                <img src={googleMobile} alt="Google Play" className="h-6 w-auto cursor-pointer hover:opacity-80 transition-opacity" />
              </Link>

              </div>
              <div className="">
                <Link
                  to="https://apps.apple.com/us/app/orovivo/id6759100030"
                  className="block"
                  aria-label="App Store"
                  target="_blank"
                >
                  <img src={appleMobile} alt="App Store" className="h-6 w-auto cursor-pointer hover:opacity-80 transition-opacity" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right side - Controls */}
          <div className="flex items-center md:space-x-4 z-60" ref={dropdownsRef}>
            {/* Currency Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsCurrencyOpen(!isCurrencyOpen)}
                className="flex items-center space-x-2 px-1 md:px-3 py-1 text-sm font-semibold text-white bg-black rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 transition duration-200 ease-in-out tracking-wide"
              >
                <span>{selectedCurrency}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isCurrencyOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-black z-10">
                  <div className="py-1">
                    {currencies.map((currency) => (
                      <button
                        key={currency.code}
                        onClick={() => {
                          updateCurrency(currency.code);
                          setIsCurrencyOpen(false);
                        }}
                        className="block w-full text-left px-4 py-2 text-sm font-medium text-white hover:text-black hover:bg-[#f1f0e8ea] focus:outline-none focus:bg-[#f1f0e8ea] transition duration-200 ease-in-out tracking-wide"
                      >
                        <div className="flex justify-between items-center">
                          <span className="font-semibold">{currency.code}</span>
                          <span className="text-xs font-normal">{currency.name}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="hidden md:flex items-center space-x-2 px-3 py-1 text-sm font-semibold text-white bg-black rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 transition duration-200 ease-in-out tracking-wide"
              >
                <img src={langselector} alt="" className='w-5 h-5' />
                <span>{i18n.language.toUpperCase()}</span>
              </button>

              {isLanguageOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-black z-10">
                  <div className="py-1">
                    {languages.map((language) => (
                      <button
                        key={language.code}
                        onClick={() => {
                          i18n.changeLanguage(language.code);
                          setIsLanguageOpen(false);
                        }}
                        className="block w-full text-left px-4 py-2 text-sm font-medium text-white hover:text-black hover:bg-[#f1f0e8ea] focus:outline-none focus:bg-[#f1f0e8ea] transition duration-200 ease-in-out tracking-wide"
                      >
                        
                        {language.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sign In Button */}
            <Link to="https://orovivo.mac-ro-capital.com" target="_blank" rel="noopener noreferrer">
            <button className="hidden md:flex px-4 py-1 text-sm font-semibold text-black bg-white border border-transparent hover:bg-[#f1f0e8ea] hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 tracking-wide">
              {t('header.signIn')}
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
