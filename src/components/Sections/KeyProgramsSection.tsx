import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';
import LazyImage from '../UI/LazyImage';

const KeyProgramsSection: React.FC = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Our Services
                    </motion.h2>
                    <motion.p
                        className="text-xl text-gray-600 max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Mainstream Programs and Priorities
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    <motion.div
                        className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 relative overflow-hidden group"
                        whileHover={{ scale: 1.02 }}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative z-10">
                            <div className="mb-4 flex justify-center">
                                <LazyImage
                                    src="https://www.rdrsbangladesh.org/assets/front/22.png"
                                    alt="Skills and Employment"
                                    className="w-16 h-16 object-contain"
                                />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-gray-800">Skills, Employment, and Entrepreneurship</h3>
                            <p className="leading-relaxed text-gray-600 mb-6">
                                RDRS inclusively focus on the young generation, to have agency, rights, skills, tools, influence, and opportunities to pursue their life goals, live a decent life, support families, and contribute to the development of their communities and the country.
                            </p>
                            <Link to="/skills-employment">
                                <motion.button
                                    className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold text-sm transition-all duration-300 group"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <span className="mr-2">Read More</span>
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

                    <motion.div
                        className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 relative overflow-hidden group"
                        whileHover={{ scale: 1.02 }}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative z-10">
                            <div className="mb-4 flex justify-center">
                                <LazyImage
                                    src="https://www.rdrsbangladesh.org/assets/front/44.png"
                                    alt="Social Empowerment"
                                    className="w-16 h-16 object-contain"
                                />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-gray-800">Social Empowerment</h3>
                            <p className="leading-relaxed text-gray-600 mb-6">
                                RDRS's Social Empowerment Programme support its programme participants by strengthening RDRS's unique CBOs, making these organisations increasingly autonomous, empowering them to advocate for their rightful access and that of the poor people in their communities to safety net provisions and basic services.
                            </p>
                            <Link to="/social-empowerment">
                                <motion.button
                                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-sm transition-all duration-300 group"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <span className="mr-2">Read More</span>
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

                    <motion.div
                        className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 relative overflow-hidden group"
                        whileHover={{ scale: 1.02 }}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative z-10">
                            <div className="mb-4 flex justify-center">
                                <LazyImage
                                    src="https://www.rdrsbangladesh.org/assets/front/11.png"
                                    alt="Agriculture and Food Security"
                                    className="w-16 h-16 object-contain"
                                />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-gray-800">Agriculture, Food Security and Climate Change</h3>
                            <p className="leading-relaxed text-gray-600 mb-6">
                                RDRS' Agriculture, Food Security and Climate Change Programme work with farmer communities to increase agricultural productivity and profitability by adopting sustainable and climate-resilient agricultural practices. To achieve this, RDRS provides training to farming households to improve their technical skills in farming and confidence to access government services and resources.
                            </p>
                            <Link to="/agriculture-food-security">
                                <motion.button
                                    className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold text-sm transition-all duration-300 group"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <span className="mr-2">Read More</span>
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

                    <motion.div
                        className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 relative overflow-hidden group"
                        whileHover={{ scale: 1.02 }}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative z-10">
                            <div className="mb-4 flex justify-center">
                                <LazyImage
                                    src="https://www.rdrsbangladesh.org/assets/front/33.png"
                                    alt="Microfinance"
                                    className="w-16 h-16 object-contain"
                                />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-gray-800">Microfinance</h3>
                            <p className="leading-relaxed text-gray-600 mb-6">
                                RDRS operates its Microfinance Programme in a client-centric approach. RDRS seeks to make poor people economically self-reliant, increase their household income and assets, and therefore focus on micro, small and medium enterprise development to create employment opportunities in formal and informal sectors.
                            </p>
                            <Link to="/microfinance">
                                <motion.button
                                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-sm transition-all duration-300 group"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <span className="mr-2">Read More</span>
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

export default KeyProgramsSection; 