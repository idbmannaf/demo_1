import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';
import LazyImage from '../UI/LazyImage';

const NewsSection: React.FC = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Latest News & Updates
                    </motion.h2>
                    <motion.p
                        className="text-xl text-gray-600 max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Stay updated with our latest initiatives, achievements, and community impact stories.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* News Card 1 */}
                    <motion.div
                        className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
                        whileHover={{ scale: 1.02, y: -5 }}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="h-48 bg-gradient-to-br from-green-400 to-blue-500 group-hover:scale-105 transition-transform duration-300 relative overflow-hidden">
                            <LazyImage
                                src="https://rdrsbangladesh.org/storage/photos/1/Azeecon.jpg"
                                alt="Education Initiative"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300"></div>
                            <div className="absolute top-4 left-4">
                                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">Education</span>
                            </div>
                        </div>

                        <div className="p-6">
                            <div className="flex items-center text-sm text-gray-500 mb-3">
                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <span>October 22, 2024</span>
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">
                                RDRS Hosts AZEECON Summit in Rangpur
                            </h3>
                            <p className="text-gray-600 mb-4 leading-relaxed">
                                Rangpur, 22 October, 2024. The 25th Asian Zone Emergency and Environment Cooperation Network (AZEECON) Summit began this morning at the Begum Rokeya Auditorium, RDRS Office, Rangpur. The five-day event, running from October 21-25, is hosted by RDRS Bangladesh, a leading NGO with over 53 years of development work in Northern Bangladesh.</p>

                            <Link to="/news/adult-literacy-program">
                                <motion.button
                                    className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold text-sm transition-all duration-300 group"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <span className="mr-2">View More</span>
                                    <motion.div
                                        animate={{ x: [0, 5, 0] }}
                                        transition={{ duration: 1, repeat: Infinity }}
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </motion.div>
                                </motion.button>
                            </Link>
                        </div>
                    </motion.div>

                    {/* News Card 2 */}
                    <motion.div
                        className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
                        whileHover={{ scale: 1.02, y: -5 }}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 group-hover:scale-105 transition-transform duration-300 relative overflow-hidden">
                            <LazyImage
                                src="https://rdrsbangladesh.org/storage/photos/1/General%20Body/Faruque-Ahmed-821x1024.jpg"
                                alt="Healthcare Initiative"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300"></div>
                            <div className="absolute top-4 left-4">
                                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold">Healthcare</span>
                            </div>
                        </div>

                        <div className="p-6">
                            <div className="flex items-center text-sm text-gray-500 mb-3">
                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <span>April 27, 2024</span>
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                                Mr. Faruque Ahmed Elected as the Chairperson of RDRS Board of Trustees
                            </h3>
                            <p className="text-gray-600 mb-4 leading-relaxed">
                                Dhaka, April 26, 2024: RDRS Bangladesh, a pioneering organization in development and humanitarian efforts for over 52 years, proudly announces the election of Mr. Faruque Ahmed as the new chairperson of its esteemed Board of Trustees </p>

                            <Link to="/news/maternal-health-program">
                                <motion.button
                                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-sm transition-all duration-300 group"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <span className="mr-2">View More</span>
                                    <motion.div
                                        animate={{ x: [0, 5, 0] }}
                                        transition={{ duration: 1, repeat: Infinity }}
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </motion.div>
                                </motion.button>
                            </Link>
                        </div>
                    </motion.div>

                    {/* News Card 3 */}
                    <motion.div
                        className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
                        whileHover={{ scale: 1.02, y: -5 }}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="h-48 bg-gradient-to-br from-orange-400 to-red-500 group-hover:scale-105 transition-transform duration-300 relative overflow-hidden">
                            <LazyImage
                                src="https://rdrsbangladesh.org/storage/photos/1/Event/28-feb.jpg"
                                alt="Climate Initiative"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300"></div>
                            <div className="absolute top-4 left-4">
                                <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">Climate</span>
                            </div>
                        </div>

                        <div className="p-6">
                            <div className="flex items-center text-sm text-gray-500 mb-3">
                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <span>February 28, 2024</span>
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                                Lutheran World Federation Delegates Commend RDRS Education Projects in Moulvibazar
                            </h3>
                            <p className="text-gray-600 mb-4 leading-relaxed">
                                A two-member delegation from the Lutheran World Federation (LWF) recently visited RDRS’s education projects in Moulvibazar, Bangladesh. The team, led by Mr. Robert Wilson Waddell,...</p>

                            <Link to="/news/climate-resilient-farming">
                                <motion.button
                                    className="inline-flex items-center text-orange-600 hover:text-orange-700 font-semibold text-sm transition-all duration-300 group"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <span className="mr-2">View More</span>
                                    <motion.div
                                        animate={{ x: [0, 5, 0] }}
                                        transition={{ duration: 1, repeat: Infinity }}
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </motion.div>
                                </motion.button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default NewsSection; 