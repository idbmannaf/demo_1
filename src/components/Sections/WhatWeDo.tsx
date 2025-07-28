import React from 'react';
import { motion } from 'framer-motion';
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
      title: 'Digital Transformation',
      description: 'Comprehensive digital transformation services to modernize your business processes, enhance customer experiences, and drive operational efficiency.',
      features: ['Cloud Migration', 'Process Automation', 'Data Analytics', 'AI Integration'],
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: '🚀',
    },
    {
      id: 2,
      title: 'Sustainability Consulting',
      description: 'Expert guidance on implementing sustainable business practices that reduce environmental impact while improving operational efficiency and brand reputation.',
      features: ['Environmental Impact Assessment', 'Green Technology Solutions', 'Sustainability Reporting', 'Carbon Footprint Reduction'],
      image: 'https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: '🌱',
    },
    {
      id: 3,
      title: 'Innovation Strategy',
      description: 'Strategic planning and implementation of innovation initiatives to help organizations stay competitive and adapt to rapidly changing market conditions.',
      features: ['Innovation Workshops', 'Technology Roadmapping', 'Market Research', 'Competitive Analysis'],
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: '💡',
    },
    {
      id: 4,
      title: 'Custom Software Development',
      description: 'Tailored software solutions designed to meet your specific business needs, from web applications to mobile apps and enterprise systems.',
      features: ['Web Applications', 'Mobile Apps', 'API Development', 'System Integration'],
      image: 'https://images.pexels.com/photos/4226122/pexels-photo-4226122.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: '💻',
    },
    {
      id: 5,
      title: 'Data & Analytics',
      description: 'Transform your data into actionable insights with our comprehensive analytics solutions, including business intelligence, predictive analytics, and data visualization.',
      features: ['Business Intelligence', 'Predictive Analytics', 'Data Visualization', 'Machine Learning'],
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: '📊',
    },
    {
      id: 6,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive cybersecurity services to protect your organization from evolving threats while ensuring compliance with industry standards and regulations.',
      features: ['Security Audits', 'Threat Detection', 'Compliance Management', 'Security Training'],
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: '🔒',
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
            We provide comprehensive solutions that drive digital transformation, promote sustainability, 
            and foster innovation across diverse industries and business sectors.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isIntersecting ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
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
              { step: '01', title: 'Discovery', description: 'Understanding your business needs and challenges' },
              { step: '02', title: 'Strategy', description: 'Developing tailored solutions and roadmaps' },
              { step: '03', title: 'Implementation', description: 'Executing solutions with precision and care' },
              { step: '04', title: 'Optimization', description: 'Continuous improvement and support' },
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