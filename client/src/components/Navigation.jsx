import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState('Home');

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Who We Are', path: '/who-we-are' },
    { name: 'Services', path: '/services' },
    { name: 'Accreditations', path: '/accreditations' },
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

  return (
    <div className="bg-black/80 w-full hidden lg:block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-center items-center h-12">
          <ul className="flex items-center space-x-16">
            {navItems.map((item) => (
              <li key={item.name}>
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
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
