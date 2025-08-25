import { useState, useEffect, useRef } from 'react';
import langselector from '../assets/homepage/langselector.svg';
import appStore from '../assets/homepage/appStore.png';
import googlePlay from '../assets/homepage/googlePlay.png';
import { useCurrency } from '../context/CurrencyContext';

const Banner = () => {
  const { selectedCurrency, updateCurrency } = useCurrency();
  const [selectedLanguage, setSelectedLanguage] = useState('EN');
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  
  const dropdownsRef = useRef(null);

  const currencies = [
    { code: 'AED', name: 'UAE Dirham' },
    { code: 'USD', name: 'US Dollar' },
    { code: 'EUR', name: 'Euro' }
  ];

  const languages = [
    { code: 'EN', name: 'English' },
    { code: 'AR', name: 'العربية' },
    { code: 'IT', name: 'Italiano' }
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
    <div className="bg-black shadow-sm border-b border-gray-800 z-60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12">
          {/* Left side - Download App */}
          <div className="flex items-center space-x-3">
            <span className="text-white text-sm font-medium">Download App</span>
            <div className="flex items-center space-x-2">
              <a href="https://play.google.com/store/apps" target="_blank" rel="noopener noreferrer">
                <img src={googlePlay} alt="Google Play" className="h-6 w-auto cursor-pointer hover:opacity-80 transition-opacity" />
              </a>
              <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
                <img src={appStore} alt="App Store" className="h-6 w-auto cursor-pointer hover:opacity-80 transition-opacity" />
              </a>
            </div>
          </div>

          {/* Right side - Controls */}
          <div className="flex items-center space-x-4 z-60" ref={dropdownsRef}>
            {/* Currency Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsCurrencyOpen(!isCurrencyOpen)}
                className="flex items-center space-x-2 px-3 py-1 text-sm font-semibold text-white bg-black rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 transition duration-200 ease-in-out tracking-wide"
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
                className="flex items-center space-x-2 px-3 py-1 text-sm font-semibold text-white bg-black rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 transition duration-200 ease-in-out tracking-wide"
              >
                <img src={langselector} alt="" className='w-5 h-5' />
                <span>{selectedLanguage}</span>
              </button>

              {isLanguageOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-black z-10">
                  <div className="py-1">
                    {languages.map((language) => (
                      <button
                        key={language.code}
                        onClick={() => {
                          setSelectedLanguage(language.code);
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
            <button className="px-4 py-1 text-sm font-semibold text-black bg-white border border-transparent hover:bg-[#f1f0e8ea] hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 tracking-wide">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
