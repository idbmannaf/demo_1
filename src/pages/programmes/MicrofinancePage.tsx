import React from 'react';

const MicrofinancePage: React.FC = () => {
    return (
        <div className="pt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Microfinance</h1>
                <div className="prose prose-lg max-w-none">
                    <p className="text-xl text-gray-600 mb-6">
                        RDRS operates its Microfinance Programme in a client-centric approach. RDRS seeks to make poor people economically self-reliant, increase their household income and assets, and therefore focus on micro, small and medium enterprise development to create employment opportunities in formal and informal sectors.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Program Overview</h2>
                    <p className="text-gray-600 mb-6">
                        Our Microfinance program provides financial services to rural communities, enabling them to start and expand small businesses, improve their livelihoods, and achieve economic self-reliance. We focus on inclusive financial services that reach the most vulnerable populations.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Key Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Microcredit</h3>
                            <ul className="list-disc pl-4 text-gray-600">
                                <li>Small business loans</li>
                                <li>Agricultural credit</li>
                                <li>Livestock financing</li>
                                <li>Equipment loans</li>
                            </ul>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Savings Programs</h3>
                            <ul className="list-disc pl-4 text-gray-600">
                                <li>Regular savings accounts</li>
                                <li>Emergency savings</li>
                                <li>Education savings</li>
                                <li>Housing savings</li>
                            </ul>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Enterprise Development</h3>
                            <ul className="list-disc pl-4 text-gray-600">
                                <li>Business plan development</li>
                                <li>Market linkage support</li>
                                <li>Technical training</li>
                                <li>Mentoring services</li>
                            </ul>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Financial Education</h3>
                            <ul className="list-disc pl-4 text-gray-600">
                                <li>Financial literacy training</li>
                                <li>Budgeting skills</li>
                                <li>Investment planning</li>
                                <li>Risk management</li>
                            </ul>
                        </div>
                    </div>

                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Target Groups</h2>
                    <ul className="list-disc pl-6 text-gray-600 mb-6">
                        <li>Rural women entrepreneurs</li>
                        <li>Small-scale farmers</li>
                        <li>Micro-entrepreneurs</li>
                        <li>Vulnerable households</li>
                        <li>Youth entrepreneurs</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Impact</h2>
                    <p className="text-gray-600 mb-6">
                        Our microfinance programme has helped thousands of families achieve economic self-reliance and build sustainable livelihoods. Key achievements include:
                    </p>
                    <ul className="list-disc pl-6 text-gray-600 mb-6">
                        <li>75,000+ micro-entrepreneurs supported</li>
                        <li>500,000+ active borrowers</li>
                        <li>98% loan repayment rate</li>
                        <li>Average 40% increase in household income</li>
                        <li>15,000+ new businesses established</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Regulatory Compliance</h2>
                    <p className="text-gray-600 mb-6">
                        RDRS Microfinance operates under the supervision of the Microcredit Regulatory Authority (MRA) of Bangladesh, ensuring compliance with all regulatory requirements and maintaining the highest standards of transparency and accountability.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Partnerships</h2>
                    <p className="text-gray-600 mb-6">
                        We collaborate with banks, insurance companies, and other financial institutions to provide comprehensive financial services to our clients, ensuring they have access to the full range of financial products they need.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MicrofinancePage; 