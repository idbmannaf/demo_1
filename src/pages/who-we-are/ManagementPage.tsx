import React from 'react';

const ManagementPage: React.FC = () => {
    return (
        <div className="pt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Management</h1>
                <div className="prose prose-lg max-w-none">
                    <p className="text-xl text-gray-600 mb-6">
                        Our management team leads RDRS Bangladesh with expertise, dedication, and a commitment to rural development.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Executive Leadership</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Executive Director</h3>
                            <p className="text-gray-600">Provides overall strategic leadership and direction for RDRS Bangladesh</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Deputy Executive Director</h3>
                            <p className="text-gray-600">Supports the Executive Director in strategic planning and program oversight</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Director of Programs</h3>
                            <p className="text-gray-600">Leads program development, implementation, and monitoring</p>
                        </div>
                    </div>

                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Program Directors</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Skills & Employment</h3>
                            <p className="text-gray-600">Oversees youth empowerment and skills development programs</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Social Empowerment</h3>
                            <p className="text-gray-600">Manages community-based organization strengthening initiatives</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Agriculture & Food Security</h3>
                            <p className="text-gray-600">Leads sustainable agriculture and climate resilience programs</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Microfinance</h3>
                            <p className="text-gray-600">Oversees financial inclusion and economic empowerment programs</p>
                        </div>
                    </div>

                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Support Functions</h2>
                    <p className="text-gray-600 mb-6">
                        Our management structure includes dedicated teams for Finance, Human Resources, Monitoring & Evaluation, Communications, and Administration, ensuring efficient operations and program delivery.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ManagementPage; 