import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import React from 'react';

const TopMenu: React.FC = () => {
    const socialLinks = [
        {
            name: 'Facebook',
            url: 'https://facebook.com/rdrsbangladesh',
            icon: (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
            ),
            color: 'hover:bg-blue-600'
        },
        {
            name: 'X (Twitter)',
            url: 'https://twitter.com/rdrsbangladesh',
            icon: (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
            ),
            color: 'hover:bg-black'
        },
        {
            name: 'YouTube',
            url: 'https://youtube.com/@rdrsbangladesh',
            icon: (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
            ),
            color: 'hover:bg-red-600'
        }
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-green-800 to-green-700 text-white py-2 px-4"
        >
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">
                {/* Contact Information */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm"
                >
                    {/* Support Us */}
                    <div className="flex items-center space-x-2">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center space-x-1"
                        >
                            <EnvelopeIcon className="w-4 h-4 text-green-200" />
                            <span className="text-green-100 font-medium">Support Us:</span>
                            <a
                                href="mailto:rdrs@rdrsbangladesh.org"
                                className="text-green-50 hover:text-white transition-colors duration-200 underline decoration-green-300 hover:decoration-white"
                            >
                                rdrs@rdrsbangladesh.org
                            </a>
                        </motion.div>
                    </div>

                    {/* Divider */}
                    <div className="hidden sm:block w-px h-4 bg-green-600"></div>

                    {/* Phone Us */}
                    <div className="flex items-center space-x-2">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center space-x-1"
                        >
                            <PhoneIcon className="w-4 h-4 text-green-200" />
                            <span className="text-green-100 font-medium">Phone Us:</span>
                            <a
                                href="tel:+880258957071"
                                className="text-green-50 hover:text-white transition-colors duration-200"
                            >
                                +88 02 58957071, 58954673, 58951802
                            </a>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Social Media Icons */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex items-center space-x-1"
                >
                    {socialLinks.map((social, index) => (
                        <motion.a
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                            whileHover={{
                                scale: 1.1,
                                y: -2,
                                transition: { duration: 0.2 }
                            }}
                            whileTap={{ scale: 0.95 }}
                            className={`w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white border border-white/20 ${social.color} transition-all duration-300 hover:shadow-lg hover:border-white/40`}
                        >
                            {social.icon}
                        </motion.a>
                    ))}
                </motion.div>
            </div>
        </motion.div>
    );
};

export default TopMenu; 