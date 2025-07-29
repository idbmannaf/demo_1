import { motion } from 'framer-motion';
import React from 'react';

const ImpactStatsSection: React.FC = () => {
    return (
        <section className="py-20 bg-gradient-to-r from-green-500 to-blue-500 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        className="text-4xl md:text-5xl font-bold text-white mb-6"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Our Impact
                    </motion.h2>
                    <motion.p
                        className="text-xl text-green-100 max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Over 50 years of dedicated service to rural communities across Bangladesh
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <div className="text-4xl md:text-5xl font-bold text-white mb-2">50+</div>
                        <div className="text-green-100 font-medium">Years of Service</div>
                    </motion.div>

                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <div className="text-4xl md:text-5xl font-bold text-white mb-2">64</div>
                        <div className="text-green-100 font-medium">Districts Covered</div>
                    </motion.div>

                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        <div className="text-4xl md:text-5xl font-bold text-white mb-2">2M+</div>
                        <div className="text-green-100 font-medium">Lives Impacted</div>
                    </motion.div>

                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <div className="text-4xl md:text-5xl font-bold text-white mb-2">15,000+</div>
                        <div className="text-green-100 font-medium">Villages Served</div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ImpactStatsSection; 