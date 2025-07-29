import { Bars3Icon, ChevronRightIcon, HeartIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface MenuItem {
  name: string;
  href: string;
  submenu?: MenuItem[];
  external?: boolean;
}

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [expandedMobileItems, setExpandedMobileItems] = useState<string[]>([]);
  const location = useLocation();

  const navigationItems: MenuItem[] = [
    { name: 'Home', href: '/' },
    {
      name: 'Who we are',
      href: '/who-we-are',
      submenu: [
        { name: 'RDRS in Brief', href: '/rdrs-in-brief' },
        { name: 'Dr Olav Hodne (Founder Director)', href: '/founder-director' },
        { name: 'Board of Trustees', href: '/board-of-trustees' },
        { name: 'General Body', href: '/general-body' },
        { name: 'Former Chairperson of Board of Trustees', href: '/former-chairperson' },
        { name: 'Management', href: '/management' },
        { name: 'Where We Work', href: '/where-we-work' },
        { name: 'Award & Recognition', href: '/awards-recognition' },
      ]
    },
    {
      name: 'What we do',
      href: '/what-we-do',
      submenu: [
        {
          name: 'Our Programmes',
          href: '/programmes',
          submenu: [
            { name: 'Skills, Employment, And Entrepreneurship', href: '/programmes/skills-employment-entrepreneurship' },
            { name: 'Social Empowerment', href: '/programmes/social-empowerment' },
            { name: 'Agriculture, Food Security And Climate Change', href: '/programmes/agriculture-food-security-climate-change' },
            { name: 'Microfinance', href: '/programmes/microfinance' },
            {
              name: 'Emergency And Humanitarian Response',
              href: '/programmes/emergency-humanitarian-response',
              submenu: [
                { name: 'Emergency Response', href: '/programmes/emergency-response' },
                { name: 'Rohingya Response', href: '/programmes/rohingya-response' },
              ]
            },
            { name: 'Accomplised Project', href: '/accomplished-projects' },
          ]
        },
        {
          name: 'Radio Chilmari',
          href: '/radio-chilmari',
          submenu: [
            { name: 'About Radio Chilmari', href: '/radio-chilmari/about' },
            { name: 'Programme Schedule', href: '/radio-chilmari/schedule' },
            { name: 'Rate Chart', href: '/radio-chilmari/rate-chart' },
            { name: 'Photo Gallery', href: '/radio-chilmari/gallery' },
          ]
        },
        { name: 'Guest House', href: 'https://rdrsguest.org/', external: true },
        {
          name: 'Scholarship',
          href: '/scholarship',
          submenu: [
            { name: 'Scholarship Policy', href: '/scholarship/policy' },
            { name: 'Scholarship Application Form', href: '/scholarship/application' },
          ]
        },
        { name: 'Citizen charter', href: '/citizen-charter' },
        { name: 'Partners', href: '/partners' },
      ]
    },
    {
      name: 'Report & Publications',
      href: '/reports-publications',
      submenu: [
        { name: 'Flash News', href: '/flash-news' },
        { name: 'Newsletter', href: '/newsletter' },
        { name: 'Factsheet-Brochure-Booklet', href: '/factsheet-brochure-booklet' },
        { name: 'Study reports', href: '/study-reports' },
        { name: 'Feature Stories', href: '/feature-stories' },
        { name: 'Annual Reports', href: '/annual-reports' },
        { name: 'Good Practice', href: '/good-practice' },
        { name: 'Policy & Manuals', href: '/policy-manuals' },
        { name: 'Photo Gallery', href: '/gallery' },
      ]
    },
    {
      name: 'Work With us',
      href: '/work-with-us',
      submenu: [
        { name: 'Vacancy', href: '/vacancy' },
        { name: 'Internship', href: '/internship' },
        { name: 'Tender Notice', href: '/tender' },
        { name: 'Job Bank', href: '/job-bank' },
      ]
    },
    { name: 'Contact Us', href: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDonateClick = () => {
    window.location.href = '/donate';
  };

  const handleDropdownToggle = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  const handleMobileItemToggle = (itemName: string) => {
    setExpandedMobileItems(prev =>
      prev.includes(itemName)
        ? prev.filter(name => name !== itemName)
        : [...prev, itemName]
    );
  };

  const isPathActive = (href: string) => {
    return location.pathname === href || location.pathname.startsWith(href + '/');
  };

  const renderMenuItem = (item: MenuItem, level: number = 0) => {
    const hasSubmenu = item.submenu && item.submenu.length > 0;
    const isActive = activeDropdown === item.name;
    const isCurrentPath = isPathActive(item.href);

    const menuItemClasses = level === 0
      ? `px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-green-600/20 ${isScrolled ? 'text-gray-700 hover:text-green-600' : 'text-gray-700 hover:text-green-600'} ${isCurrentPath ? 'bg-green-600/20 text-green-600' : ''}`
      : `px-4 py-3 w-full text-left text-sm font-medium transition-all duration-300 hover:text-green-600 text-gray-700 whitespace-nowrap`;

    return (
      <motion.li
        key={item.name}
        className={`relative ${level === 0 ? 'inline-block' : 'block'}`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        onMouseEnter={() => level === 0 && hasSubmenu && setActiveDropdown(item.name)}
        onMouseLeave={() => level === 0 && setActiveDropdown(null)}
      >
        {hasSubmenu ? (
          <button
            onClick={() => handleDropdownToggle(item.name)}
            className={menuItemClasses}
          >
            {item.name}
          </button>
        ) : item.external ? (
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className={menuItemClasses}
          >
            {item.name}
          </a>
        ) : (
          <Link
            to={item.href}
            className={menuItemClasses}
            onClick={() => setActiveDropdown(null)}
          >
            {item.name}
          </Link>
        )}

        {hasSubmenu && (
          <AnimatePresence>
            {isActive && (
              <motion.ul
                className={`absolute left-0 mt-2 bg-white rounded-xl shadow-2xl border border-gray-200 min-w-80 z-50 ${level > 0 ? 'left-full top-0' : ''
                  }`}
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                {item.submenu?.map((subItem) => (
                  <li key={subItem.name} className="relative">
                    {renderMenuItem(subItem, level + 1)}
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        )}
      </motion.li>
    );
  };

  const renderMobileMenuItem = (item: MenuItem, level: number = 0) => {
    const hasSubmenu = item.submenu && item.submenu.length > 0;
    const isExpanded = expandedMobileItems.includes(item.name);
    const isCurrentPath = isPathActive(item.href);

    return (
      <div key={item.name} className={`${level > 0 ? 'ml-4' : ''}`}>
        <div className="flex items-center justify-between">
          {item.external ? (
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex-1 px-4 py-3 rounded-lg text-base font-medium transition-colors duration-300 ${isCurrentPath
                ? 'text-green-600 bg-green-50'
                : 'text-gray-700 hover:text-green-600 hover:bg-green-50'
                }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </a>
          ) : (
            <Link
              to={item.href}
              className={`flex-1 px-4 py-3 rounded-lg text-base font-medium transition-colors duration-300 ${isCurrentPath
                ? 'text-green-600 bg-green-50'
                : 'text-gray-700 hover:text-green-600 hover:bg-green-50'
                }`}
              onClick={() => {
                if (!hasSubmenu) {
                  setIsMobileMenuOpen(false);
                  setExpandedMobileItems([]);
                }
              }}
            >
              {item.name}
            </Link>
          )}

          {hasSubmenu && (
            <button
              onClick={() => handleMobileItemToggle(item.name)}
              className="p-2 text-gray-500 hover:text-green-600 transition-colors duration-300"
            >
              <motion.div
                animate={{ rotate: isExpanded ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronRightIcon className="h-5 w-5" />
              </motion.div>
            </button>
          )}
        </div>

        {hasSubmenu && (
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="py-2 space-y-1">
                  {item.submenu?.map((subItem) => (
                    <div key={subItem.name}>
                      {renderMobileMenuItem(subItem, level + 1)}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </div>
    );
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200'
        : 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200'
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" role="navigation" aria-label="Main navigation">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/"
              className="flex items-center space-x-3"
              aria-label="Company logo - Navigate to home"
            >
              <img
                src="https://www.rdrsbangladesh.org/assets/front/img/resources/rdrs_logo.png"
                alt="RDRS Bangladesh Logo"
                className="h-12 w-auto"
              />

            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <ul className="flex items-center space-x-2">
              {navigationItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {renderMenuItem(item)}
                </motion.div>
              ))}

              {/* Donate Button */}
              <motion.button
                onClick={handleDonateClick}
                className="ml-6 px-8 py-3 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <HeartIcon className="h-5 w-5" />
                <span>Donate</span>
              </motion.button>
            </ul>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-3 rounded-lg transition-colors duration-300 ${isScrolled ? 'text-gray-700 hover:text-green-600' : 'text-gray-700 hover:text-green-600'
                }`}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              id="mobile-menu"
              className="lg:hidden bg-white rounded-xl shadow-2xl mt-4 border border-gray-200"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              role="menu"
            >
              <div className="px-4 pt-4 pb-6 space-y-2">
                {navigationItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {renderMobileMenuItem(item)}
                  </motion.div>
                ))}

                {/* Mobile Donate Button */}
                <motion.button
                  onClick={handleDonateClick}
                  className="w-full mt-6 px-6 py-4 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <HeartIcon className="h-5 w-5" />
                  <span>Donate Now</span>
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;