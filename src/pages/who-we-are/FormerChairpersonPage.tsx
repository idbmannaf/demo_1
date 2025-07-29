import React from 'react';

const FormerChairpersonPage: React.FC = () => {
    return (
        <div className="pt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Former Chairperson</h1>
                <div className="prose prose-lg max-w-none">
                    <p className="text-xl text-gray-600 mb-6">
                        Learn about the former chairpersons who have guided RDRS Bangladesh through its journey of rural development.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Leadership Legacy</h2>
                    <p className="text-gray-600 mb-6">
                        Over the years, RDRS Bangladesh has been fortunate to have visionary leaders who have served as chairpersons of our Board of Trustees. Each former chairperson has contributed significantly to the organization's growth and impact.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Notable Former Chairpersons</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Dr. [Name]</h3>
                            <p className="text-sm text-gray-500 mb-2">2000-2005</p>
                            <p className="text-gray-600">Led RDRS during a period of significant expansion and program diversification.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Prof. [Name]</h3>
                            <p className="text-sm text-gray-500 mb-2">2005-2010</p>
                            <p className="text-gray-600">Focused on strengthening community-based organizations and local governance.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Mr. [Name]</h3>
                            <p className="text-sm text-gray-500 mb-2">2010-2015</p>
                            <p className="text-gray-600">Emphasized sustainable development and climate resilience in rural communities.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Dr. [Name]</h3>
                            <p className="text-sm text-gray-500 mb-2">2015-2020</p>
                            <p className="text-gray-600">Led initiatives for youth empowerment and skills development programs.</p>
                        </div>
                    </div>

                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Contributions</h2>
                    <p className="text-gray-600 mb-6">
                        Each former chairperson has left an indelible mark on RDRS Bangladesh, contributing to our organizational development, program innovation, and community impact. Their leadership has helped shape RDRS into the respected development organization it is today.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default FormerChairpersonPage; 