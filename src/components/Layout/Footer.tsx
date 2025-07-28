import {
  EnvelopeIcon,
  HeartIcon,
  MapPinIcon,
  PhoneIcon
} from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import React from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  });
  const iconMap = {
    Facebook,
    Twitter,
    Linkedin,
    Instagram
  };
  const socialLinks = [
    { "platform": "Facebook", "url": "https://facebook.com/techforward", "icon": "Facebook" },
    { "platform": "Twitter", "url": "https://twitter.com/techforward", "icon": "Twitter" },
    { "platform": "LinkedIn", "url": "https://linkedin.com/company/techforward", "icon": "Linkedin" },
    { "platform": "Instagram", "url": "https://instagram.com/techforward", "icon": "Instagram" }
  ]
  const quickLinks = [
    { name: 'About Us', href: '#who-we-are' },
    { name: 'Services', href: '#what-we-do' },
    { name: 'Publications', href: '#publications' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <footer className="bg-gray-900 text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">InnovateCorp</h3>
            <p className="text-gray-300 mb-4">
              Leading innovation and digital transformation initiatives to create a better future for businesses and communities worldwide.
            </p>

            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = iconMap[social.icon as keyof typeof iconMap];
                return (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 p-3 rounded-lg hover:bg-blue-600 transition-colors"
                    aria-label={`Visit our ${social.platform} page`}
                  >
                    <IconComponent className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>


          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPinIcon className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300">
                  123 Innovation Street<br />
                  Tech City, TC 12345
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <PhoneIcon className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <a
                  href="tel:+1234567890"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  +1 (234) 567-8900
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <EnvelopeIcon className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <a
                  href="mailto:info@innovatecorp.com"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  info@innovatecorp.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} InnovateCorp. All rights reserved.
          </p>
          <div className="flex items-center text-gray-400 text-sm">
            <span>Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="mx-1"
            >
              <HeartIcon className="h-4 w-4 text-red-500" />
            </motion.div>
            <span>for a better tomorrow</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;