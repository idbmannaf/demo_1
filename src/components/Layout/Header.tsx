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

  // Check if current page is home
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const isPathActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleNavigationClick = () => {
    // Close mobile menu
    setIsMobileMenuOpen(false);
    setExpandedMobileItems([]);
    setActiveDropdown(null);

    // Scroll to top
    scrollToTop();
  };

  const navigationItems: MenuItem[] = [
    {
      name: 'Home',
      href: '/',

    },
    {
      name: 'Who We Are',
      href: '/who-we-are',
      submenu: [
        { name: 'RDRS in Brief', href: '/rdrs-in-brief' },
        { name: 'Dr Olav Hodne (Founder Director)', href: '/founder-director' },
        { name: 'Board of Trustees', href: '/board-of-trustees' },
        { name: 'General Body', href: '/general-body' },
        { name: 'Former Chairperson', href: '/former-chairperson' },
        { name: 'Management', href: '/management' },
        { name: 'Where We Work', href: '/where-we-work' },
        { name: 'Awards & Recognition', href: '/awards-recognition' }
      ]
    },
    {
      name: 'What We Do',
      href: '/what-we-do',
      submenu: [
        { name: 'Programmes', href: '/programmes' },
        { name: 'Skills, Employment, and Entrepreneurship', href: '/programmes/skills-employment-entrepreneurship' },
        { name: 'Social Empowerment', href: '/programmes/social-empowerment' },
        { name: 'Agriculture, Food Security and Climate Change', href: '/programmes/agriculture-food-security-climate-change' },
        { name: 'Microfinance', href: '/programmes/microfinance' }
      ]
    },
    {
      name: 'Reports & Publications',
      href: '/reports-publications',
      submenu: [
        { name: 'Flash News', href: '/flash-news' },
        { name: 'Newsletter', href: '/newsletter' },
        { name: 'Factsheet-Brochure-Booklet', href: '/factsheet-brochure-booklet' },
        { name: 'Study Reports', href: '/study-reports' },
        { name: 'Feature Stories', href: '/feature-stories' },
        { name: 'Annual Reports', href: '/annual-reports' },
        { name: 'Good Practice', href: '/good-practice' },
        { name: 'Policy & Manuals', href: '/policy-manuals' },
        { name: 'Photo Gallery', href: '/gallery' }
      ]
    },
    {
      name: 'Work With Us',
      href: '/work-with-us',
      submenu: [
        { name: 'Vacancy', href: '/vacancy' },
        { name: 'Internship', href: '/internship' },
        { name: 'Tender Notice', href: '/tender' },
        { name: 'Job Bank', href: '/job-bank' }
      ]
    },


    {
      name: 'Contact',
      href: '/contact'
    },

  ];

  const renderMenuItem = (item: MenuItem) => {
    const hasSubmenu = item.submenu && item.submenu.length > 0;
    const isActive = activeDropdown === item.name;
    const isCurrentPath = isPathActive(item.href);

    const menuItemClasses = `focus:outline-none  px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-green-600/20 ${isHomePage && !isScrolled
      ? 'text-white hover:text-green-200'
      : 'text-gray-700 hover:text-green-600'
      } ${isCurrentPath ? 'bg-green-600/20 text-green-600' : ''}`;

    return (
      <motion.li
        key={item.name}
        className="relative inline-block"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        onMouseEnter={() => hasSubmenu && setActiveDropdown(item.name)}
        onMouseLeave={() => setActiveDropdown(null)}
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
            onClick={handleNavigationClick}
          >
            {item.name}
          </Link>
        )}

        {hasSubmenu && (
          <AnimatePresence>
            {isActive && (
              <motion.ul
                className="absolute left-0 mt-2 bg-white/95 backdrop-blur-md rounded-xl shadow-2xl border border-gray-200 min-w-80 z-50"
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                {item.submenu?.map((subItem) => (
                  <li key={subItem.name} className="relative">
                    <Link
                      to={subItem.href}
                      className="px-4 py-3 focus:outline-none w-full text-left text-sm font-medium transition-all duration-300 hover:text-green-600 text-gray-700 whitespace-nowrap"
                      onClick={handleNavigationClick}
                    >
                      {subItem.name}
                    </Link>
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        )}
      </motion.li>
    );
  };

  const renderMobileMenuItem = (item: MenuItem) => {
    const hasSubmenu = item.submenu && item.submenu.length > 0;
    const isExpanded = expandedMobileItems.includes(item.name);
    const isCurrentPath = isPathActive(item.href);

    return (
      <li key={item.name} className="border-b border-gray-200 last:border-b-0">
        {hasSubmenu ? (
          <>
            <button
              onClick={() => handleMobileItemToggle(item.name)}
              className={`w-full px-4 py-3 text-left flex items-center justify-between text-sm font-medium transition-colors duration-200 ${isCurrentPath ? 'text-green-600 bg-green-50' : 'text-gray-700 hover:text-green-600'
                }`}
            >
              <span>{item.name}</span>
              <motion.div
                animate={{ rotate: isExpanded ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronRightIcon className="w-4 h-4" />
              </motion.div>
            </button>
            <AnimatePresence>
              {isExpanded && (
                <motion.ul
                  className="ml-4 border-l border-gray-200"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.submenu?.map((subItem) => (
                    <li key={subItem.name}>
                      <Link
                        to={subItem.href}
                        className={`block px-4 py-2 focus:outline-none text-sm transition-colors duration-200 ${isPathActive(subItem.href) ? 'text-green-600 bg-green-50' : 'text-gray-600 hover:text-green-600'
                          }`}
                        onClick={handleNavigationClick}
                      >
                        {subItem.name}
                      </Link>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </>
        ) : (
          <Link
            to={item.href}
            className={`block px-4 py-3 focus:outline-none  text-sm font-medium transition-colors duration-200 ${isCurrentPath ? 'text-green-600 bg-green-50' : 'text-gray-700 hover:text-green-600'
              }`}
            onClick={handleNavigationClick}
          >
            {item.name}
          </Link>
        )}
      </li>
    );
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isHomePage && !isScrolled
        ? 'bg-transparent'
        : 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200'
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center cursor-pointer focus:outline-none" onClick={scrollToTop}>
            <img
              src="https://www.rdrsbangladesh.org/assets/front/img/resources/rdrs_logo.png"
              alt="RDRS Bangladesh"
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            <ul className="flex items-center space-x-2">
              {navigationItems.map((item) => renderMenuItem(item))}
            </ul>
          </nav>

          {/* Donate Button */}
          <div className="hidden lg:block">
            <Link to="/donate" onClick={scrollToTop}>
              <motion.button
                className="px-6 py-3 focus:outline-none bg-gradient-to-r  from-red-500 to-pink-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <HeartIcon className="w-5 h-5" />
                <span>Donate</span>
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg transition-colors duration-200 hover:bg-gray-100"
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden bg-white border-t border-gray-200"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-6 space-y-4">
              <ul className="space-y-0">
                {navigationItems.map((item) => renderMobileMenuItem(item))}
              </ul>
              <div className="pt-4 border-t border-gray-200">
                <Link to="/donate" onClick={scrollToTop}>
                  <motion.button
                    className="w-full px-6 py-3 focus:outline-none bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <HeartIcon className="w-5 h-5" />
                    <span>Donate</span>
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;