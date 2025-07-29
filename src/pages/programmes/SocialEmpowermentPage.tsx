import React from 'react';

const SocialEmpowermentPage: React.FC = () => {
    return (
        <div className="pt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Social Empowerment</h1>
                <div className="prose prose-lg max-w-none">
                    <p className="text-xl text-gray-600 mb-6">
                        RDRS's Social Empowerment Programme support its programme participants by strengthening RDRS's unique CBOs, making these organisations increasingly autonomous, empowering them to advocate for their rightful access and that of the poor people in their communities to safety net provisions and basic services.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Program Overview</h2>
                    <p className="text-gray-600 mb-6">
                        Our Social Empowerment program focuses on building strong, autonomous community-based organizations (CBOs) that can effectively advocate for their rights and access to essential services. We believe that empowered communities are the foundation of sustainable development.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Key Components</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">CBO Strengthening</h3>
                            <ul className="list-disc pl-4 text-gray-600">
                                <li>Organizational capacity building</li>
                                <li>Leadership development</li>
                                <li>Governance training</li>
                                <li>Financial management skills</li>
                            </ul>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Advocacy & Rights</h3>
                            <ul className="list-disc pl-4 text-gray-600">
                                <li>Rights awareness training</li>
                                <li>Advocacy skill development</li>
                                <li>Policy engagement</li>
                                <li>Community mobilization</li>
                            </ul>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Safety Net Access</h3>
                            <ul className="list-disc pl-4 text-gray-600">
                                <li>Government program awareness</li>
                                <li>Application assistance</li>
                                <li>Benefit monitoring</li>
                                <li>Grievance redressal support</li>
                            </ul>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Basic Services</h3>
                            <ul className="list-disc pl-4 text-gray-600">
                                <li>Healthcare access support</li>
                                <li>Education service coordination</li>
                                <li>Water and sanitation advocacy</li>
                                <li>Infrastructure development</li>
                            </ul>
                        </div>
                    </div>

                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Community-Based Organizations</h2>
                    <p className="text-gray-600 mb-6">
                        RDRS has developed a unique model of community-based organizations that serve as platforms for community development, advocacy, and service delivery. These CBOs are:
                    </p>
                    <ul className="list-disc pl-6 text-gray-600 mb-6">
                        <li>Democratically elected and managed</li>
                        <li>Legally registered entities</li>
                        <li>Financially self-sustaining</li>
                        <li>Connected to local government structures</li>
                        <li>Focused on community priorities</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Impact</h2>
                    <p className="text-gray-600 mb-6">
                        Our social empowerment initiatives have strengthened hundreds of community organizations and improved access to essential services. Key achievements include:
                    </p>
                    <ul className="list-disc pl-6 text-gray-600 mb-6">
                        <li>500+ CBOs established and strengthened</li>
                        <li>50,000+ families accessing safety net programs</li>
                        <li>Improved access to healthcare and education</li>
                        <li>Enhanced community participation in local governance</li>
                        <li>Increased awareness of rights and entitlements</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Partnerships</h2>
                    <p className="text-gray-600 mb-6">
                        We work closely with local government institutions, civil society organizations, and government agencies to ensure effective service delivery and policy advocacy at the community level.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SocialEmpowermentPage; 