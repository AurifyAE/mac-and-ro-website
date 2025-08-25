import logo from '../assets/homepage/logo.svg';
import useMarketData from '../hooks/useMarketData';
import { useCurrency } from '../context/CurrencyContext';
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    const { marketData } = useMarketData(["GOLD"]);
    const { selectedCurrency } = useCurrency();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSubmenu, setActiveSubmenu] = useState(null);
    const [activeNestedSubmenu, setActiveNestedSubmenu] = useState(null);
    const [previousPrice, setPreviousPrice] = useState(null);
    const [priceDirection, setPriceDirection] = useState(null); // 'up', 'down', or null
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
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const navItems = [
        {
            name: 'Home',
            path: '/',
            hasSubmenu: false
        },
        {
            name: 'Who We are',
            path: '/who-we-are',
            hasSubmenu: false
        },
        {
            name: 'Products',
            path: '/products',
            hasSubmenu: true,
            submenuItems: [
                { 
                    name: 'Metal Accounts', 
                    path: '/metal-accounts',
                    hasSubmenu: true,
                    submenuItems: [
                        { name: 'Deluxe Metal Account', path: '/metal-accounts/deluxe-metal-account' },
                        { name: 'Mac & Ro Metal Account', path: '/metal-accounts/mac-ro-metal-account' },
                        { name: 'End Of Treatment Payment (TFM)', path: '/metal-accounts/end-of-treatment-payment-tfm' },
                        { name: 'Key Man Metal Account', path: '/metal-accounts/key-man-metal-account' }
                    ]
                },
                { name: 'Purchase of Physical Investment Gold (Bullion)', path: '/products' }
            ]
        },
        {
            name: 'Services',
            path: '/services',
            hasSubmenu: false
        },
        {
            name: 'Accreditations',
            path: '/accreditations',
            hasSubmenu: false
        },
        {
            name: 'Corporate Governance',
            path: '/corporate-governance',
            hasSubmenu: false
        },
        {
            name: 'News',
            path: '/news',
            hasSubmenu: false
        },
        {
            name: 'FAQ',
            path: '/faq',
            hasSubmenu: false
        },
        {
            name: 'Contact',
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
                        {/* Mobile Toggle Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isMobileMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                        
                        {/* Logo - Mobile Only */}
                        <div 
                        onClick={() => {
                            navigate('/');
                        }}
                        className="flex items-center justify-center">
                            <img src={logo} alt="" className='w-30 h-15' />
                        </div>
                    </div>

                    {/* Center Logo - Desktop Only */}
                    <div className="hidden lg:flex items-center justify-center absolute left-1/2 transform -translate-x-1/2">
                        <img src={logo} alt="" className='w-30 h-15' />
                    </div>

                    {/* Right side - Gold Spot Price */}
                    <div className="flex items-center space-x-3 w-auto justify-end ml-auto">
                        <div className="flex items-center space-x-3">
                            <span className="text-xs font-medium text-gray-600 tracking-light">Gold Spot Price</span>
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
                            <div className="flex items-center space-x-2">
                                {/* Price change indicator - you can add logic to determine if price went up or down */}
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
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Header;
