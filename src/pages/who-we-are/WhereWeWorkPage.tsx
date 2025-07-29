import React from 'react';

const WhereWeWorkPage: React.FC = () => {
    return (
        <div className="pt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Where We Work</h1>
                <div className="prose prose-lg max-w-none">
                    <p className="text-xl text-gray-600 mb-6">
                        RDRS Bangladesh operates across 64 districts in Bangladesh, reaching rural communities throughout the country.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Geographic Coverage</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Northwest Region</h3>
                            <p className="text-gray-600">Rangpur, Dinajpur, Kurigram, Gaibandha, Nilphamari, Panchagarh, Thakurgaon, Joypurhat</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Central Region</h3>
                            <p className="text-gray-600">Dhaka, Tangail, Gazipur, Mymensingh, Jamalpur, Sherpur, Netrokona, Kishoreganj</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Northeast Region</h3>
                            <p className="text-gray-600">Sylhet, Sunamganj, Habiganj, Moulvibazar, Brahmanbaria, Comilla, Chandpur</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Southeast Region</h3>
                            <p className="text-gray-600">Chittagong, Cox's Bazar, Feni, Noakhali, Lakshmipur, Chandpur</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Southwest Region</h3>
                            <p className="text-gray-600">Khulna, Bagerhat, Satkhira, Jessore, Magura, Narail, Faridpur</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">North Central Region</h3>
                            <p className="text-gray-600">Bogura, Sirajganj, Pabna, Natore, Rajshahi, Naogaon, Chapainawabganj</p>
                        </div>
                    </div>

                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Program Areas</h2>
                    <p className="text-gray-600 mb-6">
                        Our programs are strategically designed to address the specific needs and challenges of each region, taking into account local contexts, cultural practices, and development priorities.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Community Reach</h2>
                    <ul className="list-disc pl-6 text-gray-600 mb-6">
                        <li>15,000+ villages served</li>
                        <li>2 million+ lives impacted</li>
                        <li>500+ community-based organizations supported</li>
                        <li>1,000+ staff members across regions</li>
                        <li>Partnerships with local government and communities</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default WhereWeWorkPage; 