import { motion } from 'framer-motion';
import React from 'react';
import PageHeader from '../../components/UI/PageHeader';

const FounderDirectorPage: React.FC = () => {
    return (
        <div className="pt-20">
            <PageHeader
                title="Dr Olav Hodne"
                subtitle="Founder Director"
                breadcrumbs={[
                    { name: 'Founder Director' }
                ]}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Image Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-1"
                    >
                        <div className="sticky top-24">
                            <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl border border-green-100">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                    className="relative"
                                >
                                    <img
                                        src="https://www.rdrsbangladesh.org/assets/img/Dr-Olav-Hodne-818x1024.jpg"
                                        alt="Dr Olav Hodne - Founder Director"
                                        className="w-full h-auto rounded-xl shadow-2xl"
                                    />

                                    {/* Decorative overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-green-600/20 to-transparent rounded-xl"></div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                    className="mt-6 text-center"
                                >
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Dr Olav Hodne</h3>
                                    <p className="text-green-600 font-semibold">Founder Director</p>
                                    <div className="mt-4 w-16 h-1 bg-green-500 rounded-full mx-auto"></div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Content Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="lg:col-span-2"
                    >
                        <div className="prose prose-lg max-w-none">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                                className="mb-8"
                            >
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <div className="w-8 h-1 bg-green-500 rounded-full mr-4"></div>
                                    Early Life & Background
                                </h2>
                                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                    The founder director of RDRS Bangladesh Dr Olav Hodne was born in 1921 in Norway. But he spent most of his adult life living and working in India. He came with his family in 1948 to Cooch Behar, then in north-east India, to work with the Santal tribal people. With his advanced ideas of social work, he determined to do what he could to improve the lives of the poor and disposed, still much affected by the political division of the sub-continent after Independence from Britain in 1947.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                                className="mb-8"
                            >
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <div className="w-8 h-1 bg-green-500 rounded-full mr-4"></div>
                                    War of Independence & Humanitarian Work
                                </h2>
                                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                    His strength, administrative skills and political acumen were much tested during and after Bangladesh's War of Independence in 1971 when millions of war-affected people struggled into India. It was the devastation resulting from that divisive and destructive battle that persuaded Dr Hodne to cross into the new nation of Bangladesh to provide support – or relief and rehabilitation to the returning Bangladeshi refugees in north-west region of the new born country.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.7 }}
                                className="mb-8"
                            >
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <div className="w-8 h-1 bg-green-500 rounded-full mr-4"></div>
                                    Grassroots Leadership
                                </h2>
                                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                    Wherever he went, Olav worked tirelessly for 50 years among refugees, tribal communities, beggars, the landless, poor farmers and destitute women, regardless of caste or creed. Comfortable at grassroots, he encouraged thousands of villagers to access local resources and decision-making process to ultimately secure control over the direction and progress of their own communities. He was also extremely successful in arguing the case internationally for resources and support to be given to Cooch Behar Refugee Service (CBRS) and RDRS Bangladesh, even after he had formally retired and returned home to Norway. Dr Hodne carried out his duty as the Director of RDRS upto 1974.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.8 }}
                                className="mb-8"
                            >
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <div className="w-8 h-1 bg-green-500 rounded-full mr-4"></div>
                                    Recognition & Awards
                                </h2>
                                <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl border border-green-100">
                                    <p className="text-lg text-gray-600 leading-relaxed mb-4">
                                        In 1967 he wrote down the story of the Lutheran Santal Mission in India in his book "The Seeds Bore Fruit". In recognition of his dedicated services he was awarded the Nansen Prize in 1976 by the United Nations. In 1980, he received the highest award of the Norwegian Red Cross and in 2005 accepted the Wittenberg Award from the Luther Institute in the United States.
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.9 }}
                                className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl"
                            >
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">Legacy</h2>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    Dr Olav Hodne passed away on 29 October 2009 in his homeland Norway. His legacy continues to inspire RDRS Bangladesh's work today, as we carry forward his vision of empowering rural communities and improving the lives of the disadvantaged.
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default FounderDirectorPage; 