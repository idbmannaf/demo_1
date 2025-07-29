import { motion } from 'framer-motion';
import React from 'react';

const WelcomeSection: React.FC = () => {
    return (
        <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Welcome to RDRS Bangladesh
                    </motion.h2>
                    <motion.p
                        className="text-xl text-gray-600 text-justify mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        RDRS was established as the Bangladesh field programme of the Geneva-based Lutheran World Federation/Department for World Service (LWF/DWS) in February 1972 to provide relief, rehabilitation, and development assistance to the war-affected people in northwest Bangladesh. In 1997, RDRS was localised and registered under the Trust Act as a national NGO in Bangladesh. The organisation is registered with NGO Affairs Bureau in Bangladesh and Microcredit Regulatory Authority, and is governed by a Board of Trustees.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <motion.div
                        className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        whileHover={{ scale: 1.02 }}
                    >
                        <div className="text-4xl mb-4">🎯</div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                        <p className="text-gray-600 leading-relaxed">
                            To empower rural communities through sustainable development, education, and economic opportunities, creating lasting positive change in Bangladesh.
                        </p>
                    </motion.div>

                    <motion.div
                        className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        whileHover={{ scale: 1.02 }}
                    >
                        <div className="text-4xl mb-4">👁️</div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                        <p className="text-gray-600 leading-relaxed">
                            A Bangladesh where every rural community has access to opportunities for growth, education, and sustainable livelihoods.
                        </p>
                    </motion.div>

                    <motion.div
                        className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        whileHover={{ scale: 1.02 }}
                    >
                        <div className="text-4xl mb-4">💎</div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Integrity, transparency, community participation, and sustainable development guide everything we do.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default WelcomeSection; 