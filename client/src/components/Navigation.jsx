import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState('Home');
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [openTimeout, setOpenTimeout] = useState(null);
  const [closeTimeout, setCloseTimeout] = useState(null);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Who We Are', path: '/who-we-are' },
    { name: 'Products', 
      path: '/products',
      hasDropdown: true,
      submenu: [
        { 
          name: 'Metal Accounts', 
          path: '/metal-accounts',
          hasSubSubmenu: true,
          subSubmenu: [
            { name: 'Deluxe Metal Account', path: '/metal-accounts/deluxe-metal-account' },
            { name: 'Mac & Ro Metal Account', path: '/metal-accounts/mac-ro-metal-account' },
            { name: 'End Of Treatment Payment (EOT)', path: '/metal-accounts/end-of-treatment-payment-tfm' },
            { name: 'Key Man Metal Account', path: '/metal-accounts/key-man-metal-account' }
          ]
        },
        { name: 'Purchase of Physical Investment Gold (Bullion)', path: '/products' }
      ]
    },
    { name: 'Services', path: '/services' },
    { name: 'Corporate Governance', path: '/corporate-governance' },
    { name: 'News', path: '/news' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' }
  ];

  // Update active item when location changes
  useEffect(() => {
    const currentItem = navItems.find(item => item.path === location.pathname);
    if (currentItem) {
      setActiveItem(currentItem.name);
    }
  }, [location.pathname]);

  const handleMouseEnter = () => {
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      setCloseTimeout(null);
    }
    setOpenTimeout(setTimeout(() => setIsServicesOpen(true), 150));
  };

  const handleMouseLeave = () => {
    if (openTimeout) {
      clearTimeout(openTimeout);
      setOpenTimeout(null);
    }
    setCloseTimeout(setTimeout(() => setIsServicesOpen(false), 200));
  };

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      if (openTimeout) clearTimeout(openTimeout);
      if (closeTimeout) clearTimeout(closeTimeout);
    };
  }, [openTimeout, closeTimeout]);

  return (
    <div className="sticky top-20 z-50 bg-black/80 w-full hidden lg:block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-center items-center h-12">
          <ul className="flex items-center space-x-16">
            {navItems.map((item) => (
              <li key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      className={`text-sm font-medium transition-colors duration-200 ease-in-out tracking-wide flex items-center space-x-1 ${
                        activeItem === item.name
                          ? 'text-white border-b-2 border-white pb-1'
                          : 'text-gray-300 hover:text-white hover:border-b-2 hover:border-gray-400 pb-1'
                      }`}
                    >
                      <span>{item.name}</span>
                      <svg 
                        className={`w-3 h-3 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    {/* Dropdown Menu */}
                    {isServicesOpen && (
                      <div 
                        className="absolute top-full left-0 mt-3 w-64 bg-black rounded-lg shadow-lg border border-gray-700 z-50"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        <div className="py-2">
                          {item.submenu.map((subItem) => (
                            <div key={subItem.name} className="relative">
                              {subItem.hasSubSubmenu ? (
                                <div className="group">
                                  <div className="flex items-center justify-between px-4 py-3 text-sm text-gray-300 hover:bg-gray-800 hover:text-[#DCBC7C] transition-colors duration-200">
                                    <Link to={subItem.path} className="flex-1">
                                      {subItem.name}
                                    </Link>
                                    <svg 
                                      className="w-3 h-3 ml-2" 
                                      fill="none" 
                                      stroke="currentColor" 
                                      viewBox="0 0 24 24"
                                    >
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                  </div>
                                  
                                  {/* Sub-submenu */}
                                  <div className="absolute left-full top-0 ml-1 w-56 bg-black rounded-lg shadow-lg border border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                                    <div className="py-2">
                                      {subItem.subSubmenu.map((subSubItem) => (
                                        <Link
                                          key={subSubItem.name}
                                          to={subSubItem.path}
                                          className="block px-4 py-3 text-sm text-gray-300 hover:bg-gray-800 hover:text-[#DCBC7C] transition-colors duration-200"
                                        >
                                          {subSubItem.name}
                                        </Link>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              ) : (
                                <Link
                                  to={subItem.path}
                                  className="block px-4 py-3 text-sm text-gray-300 hover:bg-gray-800 hover:text-[#DCBC7C] transition-colors duration-200"
                                >
                                  {subItem.name}
                                </Link>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    onClick={() => setActiveItem(item.name)}
                    className={`text-sm font-medium transition-colors duration-200 ease-in-out tracking-wide ${
                      activeItem === item.name
                        ? 'text-white border-b-2 border-white pb-1'
                        : 'text-gray-300 hover:text-white hover:border-b-2 hover:border-gray-400 pb-1'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
