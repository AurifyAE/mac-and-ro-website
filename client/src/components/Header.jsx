import logo from '../assets/homepage/logo.svg';
import useMarketData from '../hooks/useMarketData';
import { useCurrency } from '../context/CurrencyContext';
import { useState } from 'react';

const Header = () => {
    const { marketData } = useMarketData(["GOLD"]);
    const { selectedCurrency } = useCurrency();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Get the appropriate currency symbol, unit, exchange rate, and country code for flag
    const getCurrencyInfo = (currency) => {
        switch (currency) {
        case 'AED':
            return { symbol: '', unit: 'AED/oz', rate: 3.67, countryCode: 'ae' }; // UAE
        case 'EUR':
            return { symbol: '€', unit: 'EUR/oz', rate: 0.92, countryCode: 'it' }; // European Union
        case 'USD':
        default:
            return { symbol: '$', unit: 'USD/oz', rate: 1.0, countryCode: 'us' }; // United States
        }
    };

    const currencyInfo = getCurrencyInfo(selectedCurrency);

    // Convert USD price to selected currency
    const convertPrice = (usdPrice) => {
        if (!usdPrice) return null;
        const convertedPrice = parseFloat(usdPrice) * currencyInfo.rate;
        return convertedPrice.toFixed(2);
    };

    const convertedPrice = convertPrice(marketData?.bid);

    const navItems = [
        'Home',
        'Who We are',
        'Services',
        'Accreditations',
        'Corporate Governance',
        'News',
        'FAQ',
        'Contact'
    ];

    return (
        <div className="bg-[#F1F0E8] shadow-sm border-b border-gray-200 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Left side - Mobile Toggle + Logo */}
                    <div className="flex items-center space-x-4">
                        {/* Mobile Toggle Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isMobileMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                        
                        {/* Logo */}
                        <div className="flex items-center justify-center">
                            <img src={logo} alt="" className='w-30 h-15' />
                        </div>
                    </div>

                    {/* Right side - Gold Spot Price */}
                    <div className="flex items-center space-x-3 w-40 justify-end">
                        <div className="">
                            <div className="flex items-center space-x-3">
                                <img 
                                    src={`https://flagcdn.com/${currencyInfo.countryCode}.svg`}
                                    alt={`${selectedCurrency} flag`} 
                                    className="w-7 h-4 rounded-sm object-cover"
                                    onError={(e) => {
                                        // Fallback to a colored div if flag fails to load
                                        e.target.style.display = 'none';
                                        e.target.nextSibling.style.display = 'block';
                                    }}
                                />
                                <div 
                                    className="w-7 h-4 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-sm hidden"
                                    style={{ display: 'none' }}
                                ></div>
                                <span className="text-xs font-medium text-gray-600 tracking-light">Gold Spot Price</span>
                            </div>
                            <div className="flex items-center justify-around py-1">
                                <p className="text-sm font-semibold text-gray-900 tracking-wide">
                                {convertedPrice ? `${currencyInfo.symbol} ${convertedPrice}` : '--'}
                                </p>
                                <span className="text-sm font-medium text-gray-500 tracking-wide">{currencyInfo.unit}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation Menu - Absolute Positioned */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden absolute top-full left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navItems.map((item) => (
                                <a
                                    key={item}
                                    href="#"
                                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                                >
                                    {item}
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Header;
