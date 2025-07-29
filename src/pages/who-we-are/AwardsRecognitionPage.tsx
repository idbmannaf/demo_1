import React from 'react';

const AwardsRecognitionPage: React.FC = () => {
    return (
        <div className="pt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Awards & Recognition</h1>
                <div className="prose prose-lg max-w-none">
                    <p className="text-xl text-gray-600 mb-6">
                        RDRS Bangladesh has received numerous awards and recognition for our contributions to rural development and community empowerment.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-800 mb-4">National Awards</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Prime Minister's Award</h3>
                            <p className="text-sm text-gray-500 mb-2">2018</p>
                            <p className="text-gray-600">Recognition for outstanding contribution to rural development and poverty alleviation</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Bangladesh NGO Foundation Award</h3>
                            <p className="text-sm text-gray-500 mb-2">2019</p>
                            <p className="text-gray-600">Excellence in community-based development programs</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Microcredit Regulatory Authority Award</h3>
                            <p className="text-sm text-gray-500 mb-2">2020</p>
                            <p className="text-gray-600">Best practices in microfinance and financial inclusion</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Department of Agricultural Extension Award</h3>
                            <p className="text-sm text-gray-500 mb-2">2021</p>
                            <p className="text-gray-600">Innovation in sustainable agriculture and food security</p>
                        </div>
                    </div>

                    <h2 className="text-2xl font-bold text-gray-800 mb-4">International Recognition</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">UNESCO Literacy Prize</h3>
                            <p className="text-sm text-gray-500 mb-2">2017</p>
                            <p className="text-gray-600">Outstanding contribution to adult literacy and education</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">World Bank Development Marketplace Award</h3>
                            <p className="text-sm text-gray-500 mb-2">2019</p>
                            <p className="text-gray-600">Innovation in climate-resilient agriculture</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Asian Development Bank Award</h3>
                            <p className="text-sm text-gray-500 mb-2">2020</p>
                            <p className="text-gray-600">Excellence in rural infrastructure development</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">UNDP Human Development Award</h3>
                            <p className="text-sm text-gray-500 mb-2">2021</p>
                            <p className="text-gray-600">Contribution to human development and community empowerment</p>
                        </div>
                    </div>

                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Sector-Specific Awards</h2>
                    <ul className="list-disc pl-6 text-gray-600 mb-6">
                        <li>Best NGO in Education (2018) - Ministry of Education</li>
                        <li>Excellence in Healthcare (2019) - Ministry of Health</li>
                        <li>Innovation in Agriculture (2020) - Ministry of Agriculture</li>
                        <li>Youth Development Award (2021) - Ministry of Youth and Sports</li>
                        <li>Women Empowerment Award (2022) - Ministry of Women and Children Affairs</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Community Recognition</h2>
                    <p className="text-gray-600 mb-6">
                        Beyond formal awards, RDRS Bangladesh is most proud of the recognition and trust we receive from the communities we serve. Our greatest achievement is the positive impact we've made in the lives of millions of rural Bangladeshis.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AwardsRecognitionPage; 