import { motion } from 'framer-motion';
import React from 'react';
import PageHeader from '../../components/UI/PageHeader';

const RDRSInBriefPage: React.FC = () => {
    const coverageData = [
        { category: 'Divisions', value: '07' },
        { category: 'Districts', value: '31' },
        { category: 'Upazilas', value: '175' },
        { category: 'Unions', value: '1,296' },
        { category: 'Municipalities', value: '88' },
        { category: 'City Corporations', value: '05' },
        { category: 'Programme Participants', value: '16,958,498' },
        { category: 'Federations', value: '406' },
        { category: 'Registered Federations', value: '248' },
        { category: 'Federation Members', value: '3,61,414 (Female 71.9%)' },
        { category: 'Branches', value: '284' },
        { category: 'Areas', value: '61' },
        { category: 'Regions', value: '16' },
        { category: 'MF Clients', value: '4,41,217 (Female 92.68%)' }
    ];

    const coreValues = [
        {
            title: 'Compassion',
            description: 'We essentially feel and are motivated to relieve the suffering of our beneficiaries, and thus design and implement actions accordingly, in all our actions to our disadvantaged and marginalized beneficiaries, particularly the women, youth and minorities.'
        },
        {
            title: 'Commitment',
            description: 'We promise to design and implement our program actions equitably, professionally and efficiently'
        },
        {
            title: 'Innovation',
            description: 'We develop and implement innovative approaches and technology, relevant to local context and culture, to apply in boosting the people\'s livelihoods and coping methods'
        },
        {
            title: 'Adaptability',
            description: 'We continuously learn and adapt our approaches and intervention as relevant to the emerging trends and needs to ensure our program objectives and organization\'s mission are effectively achieved.'
        },
        {
            title: 'Accountability',
            description: 'Core to our integrity, we ensure transparent operations and feedback mechanisms, and are answerable for all our actions to the people we seek to serve, our donors and society'
        }
    ];

    const programs = [
        'Skills, Employment and Entrepreneurship',
        'Social Empowerment',
        'Agriculture, Food Security and Climate Change',
        'Microfinance',
        'Emergency and Humanitarian Response'
    ];

    return (
        <div className="pt-20">
            <PageHeader
                title="RDRS in Brief"
                breadcrumbs={[
                    { name: 'RDRS in Brief' }
                ]}
            />

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Left Column - Main Content */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* About RDRS */}
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                <div className="w-8 h-1 bg-green-500 rounded-full mr-4"></div>
                                About RDRS
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                RDRS was established as the Bangladesh field programme of the Geneva-based Lutheran World Federation/Department for World Service (LWF/DWS) in February 1972 to provide relief, rehabilitation, and development assistance to the war-affected people in northwest Bangladesh. In 1997, RDRS was localised and registered under the Trust Act as a national NGO in Bangladesh. The organisation is registered with NGO Affairs Bureau in Bangladesh and Microcredit Regulatory Authority, and is governed by a Board of Trustees.
                            </p>
                        </motion.section>

                        {/* Vision & Mission */}
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="grid grid-cols-1 md:grid-cols-2 gap-8"
                        >
                            <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl border border-green-100">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Vision</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    A just and peaceful society where citizens live in dignity, free from poverty, distress, and ignorance in a sustainable environment.
                                </p>
                            </div>

                            <div className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-2xl border border-blue-100">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Mission</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    RDRS works with disadvantaged and marginalized communities and their organizations to empower them, make them resilient, and ensure sustainable improvements in their lives with dignity.
                                </p>
                            </div>
                        </motion.section>

                        {/* Core Values */}
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                                <div className="w-8 h-1 bg-green-500 rounded-full mr-4"></div>
                                Core Values
                            </h2>
                            <div className="space-y-6">
                                {coreValues.map((value, index) => (
                                    <motion.div
                                        key={value.title}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                                        className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-500 hover:shadow-xl transition-shadow"
                                    >
                                        <h4 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h4>
                                        <p className="text-gray-600 leading-relaxed">{value.description}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.section>

                        {/* Programs */}
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                                <div className="w-8 h-1 bg-green-500 rounded-full mr-4"></div>
                                Programme
                            </h2>
                            <p className="text-lg text-gray-600 mb-6">
                                RDRS strategy is operationalised through five thematic focuses to achieve its overall programme goal. The five thematic focuses are:
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {programs.map((program, index) => (
                                    <motion.div
                                        key={program}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                                        className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-4 rounded-lg text-center font-medium hover:shadow-lg transition-shadow"
                                    >
                                        {program}
                                    </motion.div>
                                ))}
                            </div>
                        </motion.section>
                    </div>

                    {/* Right Column - Coverage Data */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="lg:col-span-1"
                    >
                        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 sticky top-24">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">RDRS Programme Coverage</h3>

                            <div className="space-y-4">
                                {coverageData.map((item, index) => (
                                    <motion.div
                                        key={item.category}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.6 + index * 0.05 }}
                                        className="flex justify-between items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                                    >
                                        <span className="text-gray-700 font-medium">{item.category}</span>
                                        <span className="text-green-600 font-bold text-lg">{item.value}</span>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="mt-8 p-4 bg-green-50 rounded-lg border border-green-200">
                                <p className="text-sm text-gray-600 text-center">
                                    <span className="font-semibold text-green-700">Total Impact:</span> Over 16 million people reached across Bangladesh
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default RDRSInBriefPage; 