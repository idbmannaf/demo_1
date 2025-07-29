import { motion } from 'framer-motion';
import React from 'react';
import PageHeader from '../../components/UI/PageHeader';

const SkillsEmploymentPage: React.FC = () => {
    return (
        <div className="pt-20">
            <PageHeader
                title="Skills, Employment, and Entrepreneurship"
                breadcrumbs={[
                    { name: 'Home', href: '/' },
                    { name: 'What We Do', href: '/what-we-do' },
                    { name: 'Skills, Employment, and Entrepreneurship' }
                ]}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="prose prose-lg max-w-none">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-xl text-gray-600 mb-6"
                    >
                        RDRS inclusively focus on the young generation, to have agency, rights, skills, tools, influence, and opportunities to pursue their life goals, live a decent life, support families, and contribute to the development of their communities and the country.
                    </motion.p>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-2xl font-bold text-gray-800 mb-4"
                    >
                        Program Overview
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-gray-600 mb-6"
                    >
                        Our Skills, Employment, and Entrepreneurship program is designed to address the critical need for youth empowerment and economic opportunities in rural Bangladesh. We focus on equipping young people with the skills, knowledge, and resources they need to succeed in the modern economy.
                    </motion.p>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-2xl font-bold text-gray-800 mb-4"
                    >
                        Key Components
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
                    >
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Skills Development</h3>
                            <ul className="list-disc pl-4 text-gray-600">
                                <li>Technical skills training</li>
                                <li>Digital literacy programs</li>
                                <li>Soft skills development</li>
                                <li>Industry-specific training</li>
                            </ul>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Employment Support</h3>
                            <ul className="list-disc pl-4 text-gray-600">
                                <li>Job placement assistance</li>
                                <li>Career counseling</li>
                                <li>Resume building workshops</li>
                                <li>Interview preparation</li>
                            </ul>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Entrepreneurship</h3>
                            <ul className="list-disc pl-4 text-gray-600">
                                <li>Business plan development</li>
                                <li>Financial literacy training</li>
                                <li>Market analysis skills</li>
                                <li>Startup support services</li>
                            </ul>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Youth Empowerment</h3>
                            <ul className="list-disc pl-4 text-gray-600">
                                <li>Leadership development</li>
                                <li>Community engagement</li>
                                <li>Advocacy training</li>
                                <li>Peer mentoring programs</li>
                            </ul>
                        </div>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="text-2xl font-bold text-gray-800 mb-4"
                    >
                        Target Groups
                    </motion.h2>
                    <motion.ul
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="list-disc pl-6 text-gray-600 mb-6"
                    >
                        <li>Rural youth (18-35 years)</li>
                        <li>Unemployed graduates</li>
                        <li>School dropouts</li>
                        <li>Women seeking economic independence</li>
                        <li>Disadvantaged youth from marginalized communities</li>
                    </motion.ul>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                        className="text-2xl font-bold text-gray-800 mb-4"
                    >
                        Impact
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="text-gray-600 mb-6"
                    >
                        Our skills and employment programme has helped thousands of young people find meaningful employment and start their own businesses. We have achieved:
                    </motion.p>
                    <motion.ul
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.9 }}
                        className="list-disc pl-6 text-gray-600 mb-6"
                    >
                        <li>25,000+ youth trained in various skills</li>
                        <li>15,000+ successful job placements</li>
                        <li>5,000+ new businesses established</li>
                        <li>80% employment rate among program graduates</li>
                        <li>Significant increase in household incomes</li>
                    </motion.ul>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.0 }}
                        className="text-2xl font-bold text-gray-800 mb-4"
                    >
                        Partnerships
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.1 }}
                        className="text-gray-600 mb-6"
                    >
                        We collaborate with various partners including government agencies, private sector companies, educational institutions, and international organizations to ensure comprehensive support for our youth participants.
                    </motion.p>
                </div>
            </div>
        </div>
    );
};

export default SkillsEmploymentPage; 