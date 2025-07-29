import { motion } from 'framer-motion';
import React from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import LazyImage from '../UI/LazyImage';

const WhatWeDo: React.FC = () => {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  });

  const services = [
    {
      id: 1,
      title: 'Education & Literacy',
      description: 'Comprehensive education programs that improve literacy rates, provide vocational training, and support children\'s education in rural communities.',
      features: ['Adult Literacy Programs', 'Children\'s Education Support', 'Vocational Training', 'Teacher Development'],
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: '📚',
    },
    {
      id: 2,
      title: 'Healthcare & Nutrition',
      description: 'Community health programs that improve access to healthcare, promote maternal and child health, and address malnutrition in rural areas.',
      features: ['Maternal & Child Health', 'Nutrition Programs', 'Health Awareness', 'Medical Camps'],
      image: 'https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: '🏥',
    },
    {
      id: 3,
      title: 'Economic Empowerment',
      description: 'Programs that create economic opportunities through microfinance, skills training, and support for small-scale entrepreneurs and farmers.',
      features: ['Microfinance Services', 'Skills Training', 'Market Access', 'Entrepreneurship Support'],
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: '💰',
    },
    {
      id: 4,
      title: 'Agriculture & Food Security',
      description: 'Sustainable agriculture programs that improve food security, promote climate-smart farming practices, and support farmer livelihoods.',
      features: ['Sustainable Farming', 'Climate Adaptation', 'Food Security', 'Farmer Training'],
      image: 'https://images.pexels.com/photos/4226122/pexels-photo-4226122.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: '🌾',
    },
    {
      id: 5,
      title: 'Water & Sanitation',
      description: 'Programs that improve access to clean water, promote sanitation practices, and build community infrastructure for better health outcomes.',
      features: ['Clean Water Access', 'Sanitation Facilities', 'Hygiene Education', 'Infrastructure Development'],
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: '💧',
    },
    {
      id: 6,
      title: 'Climate Change Adaptation',
      description: 'Programs that help communities adapt to climate change impacts, build resilience, and implement sustainable environmental practices.',
      features: ['Climate Resilience', 'Disaster Preparedness', 'Environmental Conservation', 'Community Adaptation'],
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: '🌍',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="what-we-do"
      ref={elementRef}
      className="py-20 bg-white"
      role="region"
      aria-labelledby="what-we-do-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isIntersecting ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            id="what-we-do-heading"
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            What We Do
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            We provide comprehensive development programs that address the key challenges facing rural
            communities in Bangladesh, focusing on education, healthcare, economic empowerment, and
            environmental sustainability.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isIntersecting ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              whileHover={{ y: -8 }}
            >
              <div className="relative h-48 overflow-hidden">
                <LazyImage
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-4 left-4 text-4xl bg-white/90 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center">
                  {service.icon}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-gray-800 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <motion.button
                  className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Process Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isIntersecting ? "visible" : "hidden"}
          className="mt-20"
        >
          <motion.h3
            variants={itemVariants}
            className="text-3xl font-bold text-gray-900 text-center mb-12"
          >
            Our Process
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Assessment', description: 'Understanding community needs and local context' },
              { step: '02', title: 'Planning', description: 'Developing community-led development strategies' },
              { step: '03', title: 'Implementation', description: 'Executing programs with community participation' },
              { step: '04', title: 'Monitoring', description: 'Continuous evaluation and program improvement' },
            ].map((process, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center relative"
              >
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto">
                    {process.step}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{process.title}</h4>
                  <p className="text-gray-600">{process.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-blue-200 -z-10" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeDo;