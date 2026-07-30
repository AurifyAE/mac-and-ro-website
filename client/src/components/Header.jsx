import logo from '../assets/homepage/logo.svg';
import langselector from '../assets/homepage/langselector.svg';
import useMarketData from '../hooks/useMarketData';
import { useCurrency } from '../context/CurrencyContext';
import { useTranslation } from 'react-i18next';
import { useState, useEffect, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    const { marketData } = useMarketData(["GOLD"]);
    const { selectedCurrency } = useCurrency();
    const { t, i18n } = useTranslation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSubmenu, setActiveSubmenu] = useState(null);
    const [activeNestedSubmenu, setActiveNestedSubmenu] = useState(null);
    const [previousPrice, setPreviousPrice] = useState(null);
    const [priceDirection, setPriceDirection] = useState(null); // 'up', 'down', or null
    const [isLanguageOpen, setIsLanguageOpen] = useState(false);
    const submenuRef = useRef(null);

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

    // Format price with locale-aware thousand separators
    const formatPrice = (value) => {
        if (value === null || value === undefined) return value;
        const numeric = Number(value);
        if (Number.isNaN(numeric)) return value;
        return numeric.toLocaleString('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
            useGrouping: true,
        });
    };

    const convertedPrice = convertPrice(marketData?.bid);

    // Track price changes and set direction
    useEffect(() => {
        if (convertedPrice && previousPrice !== null) {
            const current = parseFloat(convertedPrice);
            const previous = parseFloat(previousPrice);
            
            // Only update direction if there's a meaningful change (avoid floating point precision issues)
            if (Math.abs(current - previous) > 0.01) {
                if (current > previous) {
                    setPriceDirection('up');
                } else {
                    setPriceDirection('down');
                }
            }
            // Don't reset to null for equal prices - keep the previous direction
        } else if (convertedPrice && previousPrice === null) {
            // First price load - set initial direction to null
            setPriceDirection(null);
        }
        
        // Update previous price for next comparison
        if (convertedPrice) {
            setPreviousPrice(convertedPrice);
        }
    }, [convertedPrice]); // Remove previousPrice from dependencies to avoid circular updates

    // Close submenu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (submenuRef.current && !submenuRef.current.contains(event.target)) {
                setActiveSubmenu(null);
                setActiveNestedSubmenu(null);
                setIsLanguageOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const languages = [
        { code: 'en', name: t('languages.english') },
        { code: 'ar', name: t('languages.arabic') },
        { code: 'it', name: t('languages.italian') }
    ];

    const navItems = [
        {
            name: t('navigation.home'),
            path: '/',
            hasSubmenu: false
        },
        {
            name: t('navigation.whoWeAre'),
            path: '/who-we-are',
            hasSubmenu: false
        },
        {
            name: t('navigation.products'),
            path: '/products',
            hasSubmenu: true,
            submenuItems: [
                { 
                    name: t('products.metalAccounts'), 
                    path: '/metal-accounts',
                    hasSubmenu: true,
                    submenuItems: [
                        { name: t('products.deluxeMetalAccount'), path: '/metal-accounts/deluxe-metal-account' },
                        { name: t('products.macRoMetalAccount'), path: '/metal-accounts/mac-ro-metal-account' },
                        { name: t('products.endOfTreatmentPayment'), path: '/metal-accounts/end-of-treatment-payment-tfm' },
                        { name: t('products.keyManMetalAccount'), path: '/metal-accounts/key-man-metal-account' }
                    ]
                },
                { name: t('products.physicalGoldBullion'), path: '/products' }
            ]
        },
        {
            name: t('navigation.services'),
            path: '/services',
            hasSubmenu: false
        },
        {
            name: t('navigation.corporateGovernance'),
            path: '/corporate-governance',
            hasSubmenu: false
        },
        {
            name: t('navigation.news'),
            path: '/news',
            hasSubmenu: false
        },
        {
            name: t('navigation.faq'),
            path: '/faq',
            hasSubmenu: false
        },
        {
            name: t('navigation.contact'),
            path: '/contact',
            hasSubmenu: false
        }
    ];

    const handleNavigation = (item) => {
        if (item.hasSubmenu) {
            if (activeSubmenu === item.name) {
                setActiveSubmenu(null);
                setActiveNestedSubmenu(null);
            } else {
                setActiveSubmenu(item.name);
                setActiveNestedSubmenu(null);
            }
        } else {
            navigate(item.path);
            setIsMobileMenuOpen(false);
            setActiveSubmenu(null);
            setActiveNestedSubmenu(null);
        }
    };

    const handleSubmenuItemClick = (item) => {
        if (item.hasSubmenu) {
            if (activeNestedSubmenu === item.name) {
                setActiveNestedSubmenu(null);
            } else {
                setActiveNestedSubmenu(item.name);
            }
        } else {
            navigate(item.path);
            setIsMobileMenuOpen(false);
            setActiveSubmenu(null);
            setActiveNestedSubmenu(null);
        }
    };

    const handleNestedSubmenuItemClick = (path) => {
        navigate(path);
        setIsMobileMenuOpen(false);
        setActiveSubmenu(null);
        setActiveNestedSubmenu(null);
    };

    return (
        <div className="sticky top-0 z-50 bg-[#F1F0E8] shadow-sm border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20 relative">
                    {/* Left side - Mobile Toggle + Logo (Mobile) / Just Mobile Toggle (Desktop) */}
                    <div className="flex items-center space-x-4 lg:hidden">
                        {/* Mobile Toggle Button.
                            Was SVG-only, so screen readers announced it as just
                            "button" — the one failing element in the Lighthouse
                            "Buttons do not have an accessible name" audit.
                            text-gray-600 also failed contrast on the #F1F0E8
                            background; gray-700 clears 4.5:1. */}
                        <button
                            type="button"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label={isMobileMenuOpen ? t('header.closeMenu') : t('header.openMenu')}
                            aria-expanded={isMobileMenuOpen}
                            aria-controls="mobile-menu"
                            className="p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                        >
                            <svg className="h-6 w-6" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isMobileMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                        
                        {/* Logo - Mobile Only.
                            Was a <div onClick> with alt="" — not reachable by keyboard
                            and invisible to screen readers despite being the primary
                            route home. Now a real link. */}
                        <Link
                            to="/"
                            aria-label={t('header.homeLink')}
                            className="flex items-center justify-center cursor-pointer"
                        >
                            <img src={logo} alt="" width="96" height="56" className='w-24 h-auto max-h-14 object-contain' />
                        </Link>
                    </div>

                    {/* Center Logo - Desktop Only */}
                    <Link
                        to="/"
                        aria-label={t('header.homeLink')}
                        className="hidden lg:flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 cursor-pointer"
                    >
                        <img src={logo} alt="" width="128" height="64" className='w-32 h-auto max-h-16 object-contain' />
                    </Link>

                    {/* Right side - Gold Spot Price */}
                    <div className="flex items-center space-x-3 w-auto justify-end ml-auto">
                        {/* Also a <div onClick> previously — keyboard-inaccessible.
                            This element is what Lighthouse flagged as the CLS culprit
                            (div.relative.flex.items-center.space-x-3.cursor-pointer.group),
                            because the price text arrives asynchronously over the socket.
                            The fixed-width price <p> below reserves its space. */}
                        <Link
                        to="/live-rate"
                        aria-label={t('header.viewLiveRates')}
                        className="relative flex items-center space-x-3 cursor-pointer group"
                        >
                            {/* Desktop Layout */}
                            <div className="hidden md:flex items-center space-x-3">
                                <span className="text-xs font-medium text-gray-700 tracking-light">{t('header.goldSpotPrice')}</span>
                                <img
                                    src={`https://flagcdn.com/${currencyInfo.countryCode}.svg`}
                                    alt={`${selectedCurrency} flag`}
                                    width="28"
                                    height="16"
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
                                <div className="flex items-center space-x-2">
                                    {/* Price change indicator */}
                                    {priceDirection === 'up' && (
                                        <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                                        </svg>
                                    )}
                                    {priceDirection === 'down' && (
                                        <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    )}
                                    {priceDirection === null && (
                                        <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                                        </svg>
                                    )}
                                    <p className="w-20 text-sm font-semibold text-gray-900 tracking-wide">
                                        {convertedPrice ? `${currencyInfo.symbol} ${formatPrice(convertedPrice)}` : '--'}
                                    </p>
                                    <span className="text-sm font-medium text-gray-700 tracking-wide">{currencyInfo.unit}</span>
                                </div>

                                {/* Tooltip */}
                                <span className="absolute -top-6 -left-36 whitespace-nowrap text-xs bg-neutral-900 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-70 transition-opacity duration-200">
                                    Click to show live rates
                                <span className="absolute bottom-0 -right-0 w-2 h-2 bg-gray-900 rotate-90"></span>
                                </span>
                            </div>

                            {/* Mobile Layout */}
                            <div className="flex md:hidden flex-col items-end">
                                <div className="text-xs font-medium text-gray-700">{t('header.goldSpotPrice')}</div>
                                <div className="flex items-center space-x-1">
                                    <img
                                        src={`https://flagcdn.com/${currencyInfo.countryCode}.svg`}
                                        alt={`${selectedCurrency} flag`}
                                        width="20"
                                        height="12"
                                        className="w-5 h-3 rounded-sm object-cover"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            e.target.nextSibling.style.display = 'block';
                                        }}
                                    />
                                    <div 
                                        className="w-5 h-3 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-sm hidden"
                                        style={{ display: 'none' }}
                                    ></div>
                                    {priceDirection === 'up' && (
                                        <svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                                        </svg>
                                    )}
                                    {priceDirection === 'down' && (
                                        <svg className="w-3 h-3 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    )}
                                    {priceDirection === null && (
                                        <svg className="w-3 h-3 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                                        </svg>
                                    )}
                                    <p className="text-xs font-semibold text-gray-900">
                                        {convertedPrice ? `${currencyInfo.symbol} ${formatPrice(convertedPrice)}` : '--'}
                                    </p>
                                </div>
                                {/* text-gray-500 on #F1F0E8 measured ~4.3:1 — this was the
                                    failing element in the Lighthouse contrast audit.
                                    gray-700 clears the 4.5:1 minimum. */}
                                <div className="text-xs text-gray-700">{currencyInfo.unit}</div>
                            </div>
                        </Link>
                    </div>
                </div>

                {/* Mobile Navigation Menu - Absolute Positioned */}
                {isMobileMenuOpen && (
                    <div id="mobile-menu" className="lg:hidden absolute top-full left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navItems.map((item) => (
                                <div key={item.name}>
                                    <button
                                        onClick={() => handleNavigation(item)}
                                        className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                                    >
                                        {item.name}
                                        {item.hasSubmenu && (
                                            <svg 
                                                className={`w-4 h-4 transition-transform duration-200 ${
                                                    activeSubmenu === item.name ? 'rotate-180' : ''
                                                }`} 
                                                fill="none" 
                                                stroke="currentColor" 
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        )}
                                    </button>
                                    
                                    {/* Mobile Submenu */}
                                    {item.hasSubmenu && activeSubmenu === item.name && (
                                        <div className="ml-4 mt-1 space-y-1">
                                            {item.submenuItems.map((subItem) => (
                                                <div key={subItem.name}>
                                                    <button
                                                        onClick={() => handleSubmenuItemClick(subItem)}
                                                        className="flex items-center justify-between w-full px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                                                    >
                                                        {subItem.name}
                                                        {subItem.hasSubmenu && (
                                                            <svg 
                                                                className={`w-4 h-4 transition-transform duration-200 ${
                                                                    activeNestedSubmenu === subItem.name ? 'rotate-180' : ''
                                                                }`} 
                                                                fill="none" 
                                                                stroke="currentColor" 
                                                                viewBox="0 0 24 24"
                                                            >
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                            </svg>
                                                        )}
                                                    </button>
                                                    
                                                    {/* Mobile Nested Submenu */}
                                                    {subItem.hasSubmenu && activeNestedSubmenu === subItem.name && (
                                                        <div className="ml-4 mt-1 space-y-1">
                                                            {subItem.submenuItems.map((nestedItem) => (
                                                                <button
                                                                    key={nestedItem.name}
                                                                    onClick={() => handleNestedSubmenuItemClick(nestedItem.path)}
                                                                    className="block w-full text-left px-3 py-2 text-sm text-gray-500 hover:text-gray-700 hover:bg-gray-50 rounded-md"
                                                                >
                                                                    {nestedItem.name}
                                                                </button>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                            
                            {/* Mobile Sign In and Language Selector */}
                            <div className="border-t border-gray-200 pt-4 mt-4">
                                {/* Language Selector */}
                                <div className="px-3 py-2">
                                    <div className="relative">
                                        <button
                                            onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                                            className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                                        >
                                            <div className="flex items-center space-x-2">
                                                <img src={langselector} alt="" className='w-5 h-5' />
                                                <span>{t('header.language')}: {i18n.language.toUpperCase()}</span>
                                            </div>
                                            <svg 
                                                className={`w-4 h-4 transition-transform duration-200 ${
                                                    isLanguageOpen ? 'rotate-180' : ''
                                                }`} 
                                                fill="none" 
                                                stroke="currentColor" 
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </button>
                                        
                                        {/* Language Dropdown */}
                                        {isLanguageOpen && (
                                            <div className="ml-4 mt-1 space-y-1">
                                                {languages.map((language) => (
                                                    <button
                                                        key={language.code}
                                                        onClick={() => {
                                                            i18n.changeLanguage(language.code);
                                                            setIsLanguageOpen(false);
                                                        }}
                                                        className="block w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                                                    >
                                                        {language.name}
                                                    </button>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                                
                                {/* Sign In Button */}
                                <div className="px-3 py-2">
                                    <Link to="https://macandro.netlify.app/" target="_blank" rel="noopener noreferrer">
                                        <button 
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="w-full px-4 py-2 text-sm font-semibold text-white bg-black border border-transparent hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded-md transition duration-200 ease-in-out"
                                        >
                                            {t('header.signIn')}
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Header;
