import { motion } from 'framer-motion';
import React from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './components/Layout/Footer';
import Header from './components/Layout/Header';
import Contact from './components/Sections/Contact';
import Hero from './components/Sections/Hero';
import Publications from './components/Sections/Publications';
import WhatWeDo from './components/Sections/WhatWeDo';
import WhoWeAre from './components/Sections/WhoWeAre';
import StructuredData from './components/SEO/StructuredData';
import IntroModal from './components/UI/IntroModal';
import DonationPage from './pages/DonationPage';

// Schema.org structured data for SEO
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "RDRS Bangladesh",
  "description": "RDRS Bangladesh is a national development organization committed to the economic and social empowerment of the rural poor in Bangladesh.",
  "url": "https://www.rdrsbangladesh.org",
  "logo": "https://www.rdrsbangladesh.org/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+880-2-955-0123",
    "contactType": "customer service",
    "email": "info@rdrsbangladesh.org"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "House 43, Road 16",
    "addressLocality": "Dhaka",
    "addressRegion": "Dhaka",
    "postalCode": "1209",
    "addressCountry": "BD"
  },
  "sameAs": [
    "https://facebook.com/rdrsbangladesh",
    "https://twitter.com/rdrsbangladesh",
    "https://linkedin.com/company/rdrsbangladesh"
  ]
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "RDRS Bangladesh",
  "url": "https://www.rdrsbangladesh.org",
  "description": "RDRS Bangladesh - Empowering rural communities through sustainable development, education, healthcare, and economic opportunities.",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://www.rdrsbangladesh.org/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

// Layout component to wrap all pages
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="App">
      <StructuredData data={organizationSchema} />
      <StructuredData data={websiteSchema} />
      <Header />
      <main role="main">
        {children}
      </main>
      <Footer />
      <IntroModal />
    </div>
  );
};

// Home Page Component
const HomePage: React.FC = () => {

  return (
    <>
      <Hero />

      {/* Welcome Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Welcome to RDRS Bangladesh
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              RDRS was established as the Bangladesh field programme of the Geneva-based Lutheran World Federation/Department for World Service (LWF/DWS) in February 1972 to provide relief, rehabilitation, and development assistance to the war-affected people in northwest Bangladesh. In 1997, RDRS was localised and registered under the Trust Act as a national NGO in Bangladesh. The organisation is registered with NGO Affairs Bureau in Bangladesh and Microcredit Regulatory Authority, and is governed by a Board of Trustees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To empower rural communities in Bangladesh through sustainable development initiatives, education, healthcare, and economic opportunities.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">🔮</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                A Bangladesh where all rural communities have access to opportunities for sustainable development and improved quality of life.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
              <p className="text-gray-600 leading-relaxed">
                Community participation, sustainability, transparency, and respect for local culture guide our work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Programs Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Key Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We implement comprehensive development programs across multiple sectors to address the diverse needs of rural communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 relative overflow-hidden group"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="mb-4 flex justify-center">
                  <motion.img
                    src="/src/assets/44.png"
                    alt="Skills and Employment"
                    className="w-16 h-16 object-contain"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Skills, Employment, and Entrepreneurship</h3>
                <p className="leading-relaxed text-gray-600 mb-6">
                  RDRS inclusively focus on the young generation, to have agency, rights, skills, tools, influence, and opportunities to pursue their life goals, live a decent life, support families, and contribute to the development of their communities and the country.
                </p>
                <Link to="/skills-employment">
                  <motion.button
                    className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold text-sm transition-all duration-300 group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="mr-2">Read More</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.div>
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 relative overflow-hidden group"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="mb-4 flex justify-center">
                  <motion.img
                    src="/src/assets/11.png"
                    alt="Social Empowerment"
                    className="w-16 h-16 object-contain"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Social Empowerment</h3>
                <p className="leading-relaxed text-gray-600 mb-6">
                  RDRS's Social Empowerment Programme support its programme participants by strengthening RDRS's unique CBOs, making these organisations increasingly autonomous, empowering them to advocate for their rightful access and that of the poor people in their communities to safety net provisions and basic services.
                </p>
                <Link to="/social-empowerment">
                  <motion.button
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-sm transition-all duration-300 group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="mr-2">Read More</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.div>
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 relative overflow-hidden group"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="mb-4 flex justify-center">
                  <motion.img
                    src="/src/assets/11.png"
                    alt="Agriculture and Food Security"
                    className="w-16 h-16 object-contain"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Agriculture, Food Security and Climate Change</h3>
                <p className="leading-relaxed text-gray-600 mb-6">
                  RDRS' Agriculture, Food Security and Climate Change Programme work with farmer communities to increase agricultural productivity and profitability by adopting sustainable and climate-resilient agricultural practices. To achieve this, RDRS provides training to farming households to improve their technical skills in farming and confidence to access government services and resources.
                </p>
                <Link to="/agriculture-food-security">
                  <motion.button
                    className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold text-sm transition-all duration-300 group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="mr-2">Read More</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.div>
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 relative overflow-hidden group"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="mb-4 flex justify-center">
                  <motion.img
                    src="/src/assets/44.png"
                    alt="Microfinance"
                    className="w-16 h-16 object-contain"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Microfinance</h3>
                <p className="leading-relaxed text-gray-600 mb-6">
                  RDRS operates its Microfinance Programme in a client-centric approach. RDRS seeks to make poor people economically self-reliant, increase their household income and assets, and therefore focus on micro, small and medium enterprise development to create employment opportunities in formal and informal sectors.
                </p>
                <Link to="/microfinance">
                  <motion.button
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-sm transition-all duration-300 group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="mr-2">Read More</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.div>
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Statistics Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Impact
            </h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              Over 50 years of dedicated service to rural communities across Bangladesh.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">50+</div>
              <div className="text-green-100">Years of Service</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">100+</div>
              <div className="text-green-100">Districts Covered</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">1M+</div>
              <div className="text-green-100">Lives Impacted</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">500+</div>
              <div className="text-green-100">Villages Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News & Updates Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Latest News & Updates
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with our latest initiatives, achievements, and community impact stories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* News Card 1 */}
            <motion.div
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
              whileHover={{ scale: 1.02, y: -5 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="h-48 bg-gradient-to-br from-green-400 to-blue-500 group-hover:scale-105 transition-transform duration-300 relative overflow-hidden">
                <img
                  src="/src/assets/Azeecon.jpg"
                  alt="Education Initiative"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">Education</span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>March 15, 2024</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">
                  Adult Literacy Program Launched
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  RDRS has launched a comprehensive adult literacy program across 20 villages, providing basic education to over 500 participants who missed formal schooling opportunities.
                </p>

                <Link to="/news/adult-literacy-program">
                  <motion.button
                    className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold text-sm transition-all duration-300 group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="mr-2">View More</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.div>
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            {/* News Card 2 */}
            <motion.div
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
              whileHover={{ scale: 1.02, y: -5 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 group-hover:scale-105 transition-transform duration-300 relative overflow-hidden">
                <img
                  src="/src/assets/Faruque-Ahmed-821x1024.jpg"
                  alt="Healthcare Initiative"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold">Healthcare</span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>March 10, 2024</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  Maternal Health Program Success
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Our maternal health initiative has trained 200 community health workers and established 15 health centers, reducing infant mortality rates by 40% in target communities.
                </p>

                <Link to="/news/maternal-health-program">
                  <motion.button
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-sm transition-all duration-300 group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="mr-2">View More</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.div>
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            {/* News Card 3 */}
            <motion.div
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
              whileHover={{ scale: 1.02, y: -5 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="h-48 bg-gradient-to-br from-orange-400 to-red-500 group-hover:scale-105 transition-transform duration-300 relative overflow-hidden">
                <img
                  src="/src/assets/28-feb.jpg"
                  alt="Climate Initiative"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">Climate</span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>March 5, 2024</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                  Climate-Resilient Farming Project
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  RDRS has initiated a climate-resilient farming project benefiting 1,000+ farmers with sustainable agricultural practices and modern farming techniques.
                </p>

                <Link to="/news/climate-resilient-farming">
                  <motion.button
                    className="inline-flex items-center text-orange-600 hover:text-orange-700 font-semibold text-sm transition-all duration-300 group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="mr-2">View More</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.div>
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Partners
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We collaborate with various partners to implement development programs and create lasting impact.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-gray-100 rounded-xl p-6 flex items-center justify-center hover:bg-gray-200 transition-colors duration-300">
                <div className="text-2xl font-bold text-gray-400">Partner {i}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Join Us in Making a Difference
          </h2>
          <p className="text-xl text-green-100 max-w-3xl mx-auto mb-8 leading-relaxed">
            Support our mission to empower rural communities in Bangladesh. Your contribution helps create lasting positive change.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="px-8 py-4 bg-white text-green-600 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Donate Now
            </motion.button>
            <motion.button
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-green-600 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </div>
        </div>
      </section>

      {/* Publications Preview */}
      {/* <Publications /> */}

      {/* Notice Section */}
      {/* <Notice /> */}

      {/* Blog Section */}
      {/* <Blog /> */}

      {/* Contact Section */}
      {/* <Contact /> */}
    </>
  );
};

// Who We Are Pages
const WhoWeArePage: React.FC = () => {
  return (
    <div className="pt-20">
      <WhoWeAre />
    </div>
  );
};

const RDRSInBriefPage: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">RDRS in Brief</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-6">
            RDRS Bangladesh is a national development organization committed to the economic and social empowerment of the rural poor in Bangladesh.
          </p>
          <p className="text-gray-600 mb-6">
            Founded in 1972, RDRS Bangladesh has been working for over 50 years to improve the lives of rural communities through sustainable development programs.
          </p>
          <p className="text-gray-600 mb-6">
            Our mission is to empower rural communities through education, healthcare, economic opportunities, and sustainable development initiatives.
          </p>
        </div>
      </div>
    </div>
  );
};

const FounderDirectorPage: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Dr Olav Hodne (Founder Director)</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-6">
            Dr Olav Hodne was the founder director of RDRS Bangladesh and played a crucial role in establishing the organization.
          </p>
          <p className="text-gray-600 mb-6">
            His vision and leadership helped shape RDRS Bangladesh into the organization it is today, committed to rural development and community empowerment.
          </p>
        </div>
      </div>
    </div>
  );
};

const BoardOfTrusteesPage: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Board of Trustees</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-6">
            The Board of Trustees provides strategic guidance and oversight to RDRS Bangladesh.
          </p>
          <p className="text-gray-600 mb-6">
            Our board members bring diverse expertise and experience to help guide our mission and programs.
          </p>
        </div>
      </div>
    </div>
  );
};

const GeneralBodyPage: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">General Body</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-6">
            The General Body represents the broader membership and stakeholders of RDRS Bangladesh.
          </p>
          <p className="text-gray-600 mb-6">
            Our general body includes representatives from various sectors and communities we serve.
          </p>
        </div>
      </div>
    </div>
  );
};

const FormerChairpersonPage: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Former Chairperson of Board of Trustees</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-6">
            We acknowledge the contributions of our former chairpersons who have guided RDRS Bangladesh through various phases of development.
          </p>
          <p className="text-gray-600 mb-6">
            Their leadership and vision have been instrumental in shaping our organization's growth and impact.
          </p>
        </div>
      </div>
    </div>
  );
};

const ManagementPage: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Management</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-6">
            Our management team provides strategic leadership and operational oversight to ensure effective program delivery.
          </p>
          <p className="text-gray-600 mb-6">
            The team brings together expertise in rural development, program management, and community engagement.
          </p>
        </div>
      </div>
    </div>
  );
};

const WhereWeWorkPage: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Where We Work</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-6">
            RDRS Bangladesh operates across multiple districts in Bangladesh, focusing on rural and underserved communities.
          </p>
          <p className="text-gray-600 mb-6">
            Our programs reach communities in various regions, addressing local needs and challenges.
          </p>
        </div>
      </div>
    </div>
  );
};

const AwardsRecognitionPage: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Award & Recognition</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-6">
            RDRS Bangladesh has received numerous awards and recognition for our contributions to rural development.
          </p>
          <p className="text-gray-600 mb-6">
            These awards acknowledge our commitment to community empowerment and sustainable development.
          </p>
        </div>
      </div>
    </div>
  );
};

// What We Do Pages
const WhatWeDoPage: React.FC = () => {
  return (
    <div className="pt-20">
      <WhatWeDo />
    </div>
  );
};

const ProgrammesPage: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Our Programmes</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-6">
            RDRS Bangladesh implements comprehensive development programs across multiple sectors.
          </p>
          <p className="text-gray-600 mb-6">
            Our programs are designed to address the diverse needs of rural communities and promote sustainable development.
          </p>
        </div>
      </div>
    </div>
  );
};

// Skills Employment Page
const SkillsEmploymentPage: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Skills, Employment, and Entrepreneurship</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            RDRS inclusively focus on the young generation, to have agency, rights, skills, tools, influence, and opportunities to pursue their life goals, live a decent life, support families, and contribute to the development of their communities and the country.
          </p>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Key Programs</h2>
          <ul className="list-disc pl-6 text-gray-600 mb-6">
            <li>Vocational skills development</li>
            <li>Entrepreneurship training</li>
            <li>Digital literacy programs</li>
            <li>Small business support</li>
          </ul>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Impact</h2>
          <p className="text-gray-600">25,000+ young people trained and employed</p>
        </div>
      </div>
    </div>
  );
};

// Social Empowerment Page
const SocialEmpowermentPage: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Social Empowerment</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            RDRS's Social Empowerment Programme support its programme participants by strengthening RDRS's unique CBOs, making these organisations increasingly autonomous, empowering them to advocate for their rightful access and that of the poor people in their communities to safety net provisions and basic services.
          </p>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Community Programs</h2>
          <ul className="list-disc pl-6 text-gray-600 mb-6">
            <li>Community-based organizations (CBOs)</li>
            <li>Advocacy and rights awareness</li>
            <li>Safety net access support</li>
            <li>Basic services coordination</li>
          </ul>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Impact</h2>
          <p className="text-gray-600">500+ CBOs strengthened across communities</p>
        </div>
      </div>
    </div>
  );
};

// Agriculture Food Security Page
const AgricultureFoodSecurityPage: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Agriculture, Food Security and Climate Change</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            RDRS' Agriculture, Food Security and Climate Change Programme work with farmer communities to increase agricultural productivity and profitability by adopting sustainable and climate-resilient agricultural practices. To achieve this, RDRS provides training to farming households to improve their technical skills in farming and confidence to access government services and resources.
          </p>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Key Features</h2>
          <ul className="list-disc pl-6 text-gray-600 mb-6">
            <li>Climate-smart agriculture training</li>
            <li>Sustainable farming practices</li>
            <li>Government service access</li>
            <li>Technical skills development</li>
          </ul>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Impact</h2>
          <p className="text-gray-600">50,000+ farming families supported</p>
        </div>
      </div>
    </div>
  );
};

// Microfinance Page
const MicrofinancePage: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Microfinance</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            RDRS operates its Microfinance Programme in a client-centric approach. RDRS seeks to make poor people economically self-reliant, increase their household income and assets, and therefore focus on micro, small and medium enterprise development to create employment opportunities in formal and informal sectors.
          </p>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Services</h2>
          <ul className="list-disc pl-6 text-gray-600 mb-6">
            <li>Small business loans</li>
            <li>Savings programs</li>
            <li>Financial literacy training</li>
            <li>Enterprise development</li>
          </ul>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Impact</h2>
          <p className="text-gray-600">75,000+ micro-entrepreneurs supported</p>
        </div>
      </div>
    </div>
  );
};

const EmergencyHumanitarianResponsePage: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Emergency And Humanitarian Response</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-6">
            RDRS Bangladesh provides emergency response and humanitarian assistance to communities affected by disasters.
          </p>
          <p className="text-gray-600 mb-6">
            Our emergency programs focus on immediate relief and long-term recovery support.
          </p>
        </div>
      </div>
    </div>
  );
};

const EmergencyResponsePage: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Emergency Response</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-6">
            Our emergency response programs provide immediate assistance to communities affected by natural disasters and crises.
          </p>
          <p className="text-gray-600 mb-6">
            We coordinate with local authorities and communities to ensure effective response and recovery.
          </p>
        </div>
      </div>
    </div>
  );
};

const RohingyaResponsePage: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Rohingya Response</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-6">
            RDRS Bangladesh provides humanitarian assistance and support to Rohingya communities in Bangladesh.
          </p>
          <p className="text-gray-600 mb-6">
            Our programs focus on meeting basic needs and supporting long-term solutions for displaced communities.
          </p>
        </div>
      </div>
    </div>
  );
};

const AccomplishedProjectsPage: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Accomplished Projects</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-6">
            RDRS Bangladesh has successfully completed numerous projects across various sectors.
          </p>
          <p className="text-gray-600 mb-6">
            Our accomplished projects demonstrate our commitment to sustainable development and community impact.
          </p>
        </div>
      </div>
    </div>
  );
};

// Radio Chilmari Pages
const RadioChilmariPage: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Radio Chilmari</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-6">
            Radio Chilmari is a community radio station operated by RDRS Bangladesh.
          </p>
          <p className="text-gray-600 mb-6">
            The station serves as a platform for community communication and development information.
          </p>
        </div>
      </div>
    </div>
  );
};

const AboutRadioChilmariPage: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">About Radio Chilmari</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-6">
            Radio Chilmari is a community radio station that serves the local community with information and entertainment.
          </p>
          <p className="text-gray-600 mb-6">
            The station broadcasts programs on various topics including education, health, agriculture, and community development.
          </p>
        </div>
      </div>
    </div>
  );
};

const ProgrammeSchedulePage: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Programme Schedule</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-6">
            Radio Chilmari broadcasts a variety of programs throughout the day.
          </p>
          <p className="text-gray-600 mb-6">
            Our schedule includes educational programs, health awareness, agricultural information, and community news.
          </p>
        </div>
      </div>
    </div>
  );
};

const RateChartPage: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Rate Chart</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-6">
            Radio Chilmari offers advertising and sponsorship opportunities for local businesses and organizations.
          </p>
          <p className="text-gray-600 mb-6">
            Our rate chart provides information on advertising rates and sponsorship packages.
          </p>
        </div>
      </div>
    </div>
  );
};

const PhotoGalleryPage: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Photo Gallery</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-6">
            View photos from Radio Chilmari's activities and events.
          </p>
          <p className="text-gray-600 mb-6">
            Our photo gallery showcases the station's community engagement and development work.
          </p>
        </div>
      </div>
    </div>
  );
};

// Scholarship Pages
const ScholarshipPage: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Scholarship</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-6">
            RDRS Bangladesh provides scholarships to support education for deserving students from rural communities.
          </p>
          <p className="text-gray-600 mb-6">
            Our scholarship programs help students access quality education and build better futures.
          </p>
        </div>
      </div>
    </div>
  );
};

const ScholarshipPolicyPage: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Scholarship Policy</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-6">
            Our scholarship policy outlines the criteria and procedures for scholarship applications.
          </p>
          <p className="text-gray-600 mb-6">
            The policy ensures fair and transparent selection of scholarship recipients.
          </p>
        </div>
      </div>
    </div>
  );
};

const ScholarshipApplicationPage: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Scholarship Application Form</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-6">
            Download and submit the scholarship application form to apply for RDRS Bangladesh scholarships.
          </p>
          <p className="text-gray-600 mb-6">
            Please ensure all required documents are included with your application.
          </p>
        </div>
      </div>
    </div>
  );
};

// Other What We Do Pages
const CitizenCharterPage: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Citizen Charter</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-6">
            Our citizen charter outlines the services we provide and our commitment to transparency and accountability.
          </p>
          <p className="text-gray-600 mb-6">
            We are committed to serving communities with integrity and professionalism.
          </p>
        </div>
      </div>
    </div>
  );
};

const PartnersPage: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Partners</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-6">
            RDRS Bangladesh collaborates with various partners to implement development programs.
          </p>
          <p className="text-gray-600 mb-6">
            Our partnerships include government agencies, international organizations, and local communities.
          </p>
        </div>
      </div>
    </div>
  );
};

// Reports & Publications Pages
const ReportsPublicationsPage: React.FC = () => {
  return (
    <div className="pt-20">
      <Publications />
    </div>
  );
};

const FlashNewsPage: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Flash News</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-6">
            Stay updated with the latest news and updates from RDRS Bangladesh.
          </p>
          <p className="text-gray-600 mb-6">
            Our flash news section provides timely information about our programs and activities.
          </p>
        </div>
      </div>
    </div>
  );
};

const NewsletterPage: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Newsletter</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-6">
            Our newsletters provide comprehensive updates on RDRS Bangladesh activities and achievements.
          </p>
          <p className="text-gray-600 mb-6">
            Subscribe to our newsletter to stay informed about our development work.
          </p>
        </div>
      </div>
    </div>
  );
};

const FactsheetBrochureBookletPage: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Factsheet-Brochure-Booklet</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-6">
            Download our factsheets, brochures, and booklets for detailed information about our programs.
          </p>
          <p className="text-gray-600 mb-6">
            These publications provide comprehensive information about our work and impact.
          </p>
        </div>
      </div>
    </div>
  );
};

const StudyReportsPage: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Study Reports</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-6">
            Our study reports provide research-based insights into rural development issues and solutions.
          </p>
          <p className="text-gray-600 mb-6">
            These reports contribute to knowledge sharing and evidence-based development practice.
          </p>
        </div>
      </div>
    </div>
  );
};

const FeatureStoriesPage: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Feature Stories</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-6">
            Read inspiring stories from the communities we serve and the impact of our programs.
          </p>
          <p className="text-gray-600 mb-6">
            Our feature stories highlight the human side of development work and community transformation.
          </p>
        </div>
      </div>
    </div>
  );
};

const AnnualReportsPage: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Annual Reports</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-6">
            Our annual reports provide comprehensive overviews of our work, achievements, and financial performance.
          </p>
          <p className="text-gray-600 mb-6">
            These reports demonstrate our commitment to transparency and accountability.
          </p>
        </div>
      </div>
    </div>
  );
};

const GoodPracticePage: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Good Practice</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-6">
            Our good practice documents share successful approaches and methodologies from our programs.
          </p>
          <p className="text-gray-600 mb-6">
            These resources help other organizations and practitioners learn from our experiences.
          </p>
        </div>
      </div>
    </div>
  );
};

const PolicyManualsPage: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Policy & Manuals</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-6">
            Our policy documents and manuals guide our organizational practices and program implementation.
          </p>
          <p className="text-gray-600 mb-6">
            These documents ensure consistency and quality in our development work.
          </p>
        </div>
      </div>
    </div>
  );
};

const GalleryPage: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Photo Gallery</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-6">
            Browse our photo gallery to see images from our programs and community activities.
          </p>
          <p className="text-gray-600 mb-6">
            Our photos capture the impact of our work and the communities we serve.
          </p>
        </div>
      </div>
    </div>
  );
};

// Work With Us Pages
const WorkWithUsPage: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Work With Us</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-6">
            Join our team and contribute to rural development in Bangladesh.
          </p>
          <p className="text-gray-600 mb-6">
            We offer various opportunities for professionals, interns, and partners to work with us.
          </p>
        </div>
      </div>
    </div>
  );
};

const VacancyPage: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Vacancy</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-6">
            View current job openings at RDRS Bangladesh.
          </p>
          <p className="text-gray-600 mb-6">
            We offer competitive opportunities for professionals committed to rural development.
          </p>
        </div>
      </div>
    </div>
  );
};

const InternshipPage: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Internship</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-6">
            Apply for internship opportunities at RDRS Bangladesh.
          </p>
          <p className="text-gray-600 mb-6">
            Our internship program provides valuable learning experiences in rural development.
          </p>
        </div>
      </div>
    </div>
  );
};

const TenderPage: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Tender Notice</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-6">
            View current tender notices and procurement opportunities.
          </p>
          <p className="text-gray-600 mb-6">
            We invite qualified vendors and service providers to participate in our procurement processes.
          </p>
        </div>
      </div>
    </div>
  );
};

const JobBankPage: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Job Bank</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-6">
            Access our job bank for employment opportunities in the development sector.
          </p>
          <p className="text-gray-600 mb-6">
            We connect qualified professionals with organizations working in rural development.
          </p>
        </div>
      </div>
    </div>
  );
};

// Contact Page
const ContactPage: React.FC = () => {
  return (
    <div className="pt-20">
      <Contact />
    </div>
  );
};

// News Detail Pages
const AdultLiteracyProgramPage: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Link to="/" className="text-green-600 hover:text-green-700 font-semibold mb-4 inline-flex items-center">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">Education</span>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Adult Literacy Program Launched</h1>
            <div className="flex items-center text-sm text-gray-500 mb-6">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>March 15, 2024</span>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6 leading-relaxed">
                RDRS has launched a comprehensive adult literacy program across 20 villages, providing basic education to over 500 participants who missed formal schooling opportunities. This initiative addresses the critical need for adult education in rural communities.
              </p>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Program Highlights</h2>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>Basic literacy and numeracy skills</li>
                <li>Life skills and practical knowledge</li>
                <li>Digital literacy introduction</li>
                <li>Community-based learning centers</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Impact</h2>
              <p className="text-gray-600 mb-6">
                The program has already enrolled over 500 participants across 20 villages, with plans to expand to 50 villages by the end of the year. Participants report improved confidence and better opportunities for employment and community participation.
              </p>
            </div>
          </div>

          <div className="lg:pl-8">
            <img
              src="/src/assets/Azeecon.jpg"
              alt="Adult Literacy Program"
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const MaternalHealthProgramPage: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Link to="/" className="text-blue-600 hover:text-blue-700 font-semibold mb-4 inline-flex items-center">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">Healthcare</span>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Maternal Health Program Success</h1>
            <div className="flex items-center text-sm text-gray-500 mb-6">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>March 10, 2024</span>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our maternal health initiative has trained 200 community health workers and established 15 health centers, reducing infant mortality rates by 40% in target communities. This comprehensive program addresses critical maternal and child health needs.
              </p>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Program Services</h2>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>Prenatal care and monitoring</li>
                <li>Safe delivery services</li>
                <li>Postnatal support and care</li>
                <li>Nutrition and health education</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Impact</h2>
              <p className="text-gray-600 mb-6">
                The program has successfully reduced infant mortality rates by 40% in target communities. Over 10,000 families have benefited from improved maternal and child health services, with plans to expand coverage to additional districts.
              </p>
            </div>
          </div>

          <div className="lg:pl-8">
            <img
              src="/src/assets/Faruque-Ahmed-821x1024.jpg"
              alt="Maternal Health Program"
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const ClimateResilientFarmingPage: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Link to="/" className="text-orange-600 hover:text-orange-700 font-semibold mb-4 inline-flex items-center">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">Climate</span>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Climate-Resilient Farming Project</h1>
            <div className="flex items-center text-sm text-gray-500 mb-6">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>March 5, 2024</span>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6 leading-relaxed">
                RDRS has initiated a climate-resilient farming project benefiting 1,000+ farmers with sustainable agricultural practices and modern farming techniques. This initiative helps farmers adapt to changing climate conditions while improving productivity.
              </p>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Key Features</h2>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>Drought-resistant crop varieties</li>
                <li>Efficient irrigation systems</li>
                <li>Sustainable farming practices</li>
                <li>Climate-smart agriculture training</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Impact</h2>
              <p className="text-gray-600 mb-6">
                Over 1,000 farmers have been trained in climate-resilient techniques, resulting in a 30% increase in crop yields despite changing weather patterns. The project has improved food security and economic stability for farming communities.
              </p>
            </div>
          </div>

          <div className="lg:pl-8">
            <img
              src="/src/assets/28-feb.jpg"
              alt="Climate-Resilient Farming"
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Home */}
        <Route path="/" element={<Layout><HomePage /></Layout>} />

        {/* Who We Are Routes */}
        <Route path="/who-we-are" element={<Layout><WhoWeArePage /></Layout>} />
        <Route path="/rdrs-in-brief" element={<Layout><RDRSInBriefPage /></Layout>} />
        <Route path="/founder-director" element={<Layout><FounderDirectorPage /></Layout>} />
        <Route path="/board-of-trustees" element={<Layout><BoardOfTrusteesPage /></Layout>} />
        <Route path="/general-body" element={<Layout><GeneralBodyPage /></Layout>} />
        <Route path="/former-chairperson" element={<Layout><FormerChairpersonPage /></Layout>} />
        <Route path="/management" element={<Layout><ManagementPage /></Layout>} />
        <Route path="/where-we-work" element={<Layout><WhereWeWorkPage /></Layout>} />
        <Route path="/awards-recognition" element={<Layout><AwardsRecognitionPage /></Layout>} />

        {/* What We Do Routes */}
        <Route path="/what-we-do" element={<Layout><WhatWeDoPage /></Layout>} />
        <Route path="/programmes" element={<Layout><ProgrammesPage /></Layout>} />
        <Route path="/programmes/skills-employment-entrepreneurship" element={<Layout><SkillsEmploymentPage /></Layout>} />
        <Route path="/programmes/social-empowerment" element={<Layout><SocialEmpowermentPage /></Layout>} />
        <Route path="/programmes/agriculture-food-security-climate-change" element={<Layout><AgricultureFoodSecurityPage /></Layout>} />
        <Route path="/programmes/microfinance" element={<Layout><MicrofinancePage /></Layout>} />
        <Route path="/programmes/emergency-humanitarian-response" element={<Layout><EmergencyHumanitarianResponsePage /></Layout>} />
        <Route path="/programmes/emergency-response" element={<Layout><EmergencyResponsePage /></Layout>} />
        <Route path="/programmes/rohingya-response" element={<Layout><RohingyaResponsePage /></Layout>} />
        <Route path="/accomplished-projects" element={<Layout><AccomplishedProjectsPage /></Layout>} />

        {/* Radio Chilmari Routes */}
        <Route path="/radio-chilmari" element={<Layout><RadioChilmariPage /></Layout>} />
        <Route path="/radio-chilmari/about" element={<Layout><AboutRadioChilmariPage /></Layout>} />
        <Route path="/radio-chilmari/schedule" element={<Layout><ProgrammeSchedulePage /></Layout>} />
        <Route path="/radio-chilmari/rate-chart" element={<Layout><RateChartPage /></Layout>} />
        <Route path="/radio-chilmari/gallery" element={<Layout><PhotoGalleryPage /></Layout>} />

        {/* Scholarship Routes */}
        <Route path="/scholarship" element={<Layout><ScholarshipPage /></Layout>} />
        <Route path="/scholarship/policy" element={<Layout><ScholarshipPolicyPage /></Layout>} />
        <Route path="/scholarship/application" element={<Layout><ScholarshipApplicationPage /></Layout>} />

        {/* Other What We Do Routes */}
        <Route path="/citizen-charter" element={<Layout><CitizenCharterPage /></Layout>} />
        <Route path="/partners" element={<Layout><PartnersPage /></Layout>} />

        {/* Reports & Publications Routes */}
        <Route path="/reports-publications" element={<Layout><ReportsPublicationsPage /></Layout>} />
        <Route path="/flash-news" element={<Layout><FlashNewsPage /></Layout>} />
        <Route path="/newsletter" element={<Layout><NewsletterPage /></Layout>} />
        <Route path="/factsheet-brochure-booklet" element={<Layout><FactsheetBrochureBookletPage /></Layout>} />
        <Route path="/study-reports" element={<Layout><StudyReportsPage /></Layout>} />
        <Route path="/feature-stories" element={<Layout><FeatureStoriesPage /></Layout>} />
        <Route path="/annual-reports" element={<Layout><AnnualReportsPage /></Layout>} />
        <Route path="/good-practice" element={<Layout><GoodPracticePage /></Layout>} />
        <Route path="/policy-manuals" element={<Layout><PolicyManualsPage /></Layout>} />
        <Route path="/gallery" element={<Layout><GalleryPage /></Layout>} />

        {/* Work With Us Routes */}
        <Route path="/work-with-us" element={<Layout><WorkWithUsPage /></Layout>} />
        <Route path="/vacancy" element={<Layout><VacancyPage /></Layout>} />
        <Route path="/internship" element={<Layout><InternshipPage /></Layout>} />
        <Route path="/tender" element={<Layout><TenderPage /></Layout>} />
        <Route path="/job-bank" element={<Layout><JobBankPage /></Layout>} />

        {/* Contact */}
        <Route path="/contact" element={<Layout><ContactPage /></Layout>} />

        {/* Donate */}
        <Route path="/donate" element={<DonationPage />} />

        {/* News Detail Pages */}
        <Route path="/news/adult-literacy-program" element={<Layout><AdultLiteracyProgramPage /></Layout>} />
        <Route path="/news/maternal-health-program" element={<Layout><MaternalHealthProgramPage /></Layout>} />
        <Route path="/news/climate-resilient-farming" element={<Layout><ClimateResilientFarmingPage /></Layout>} />
      </Routes>
    </Router>
  );
};

export default App;