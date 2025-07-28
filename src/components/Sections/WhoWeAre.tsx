import { motion } from 'framer-motion';
import React from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const WhoWeAre: React.FC = () => {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  });

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
      id="who-we-are"
      ref={elementRef}
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
      role="region"
      aria-labelledby="who-we-are-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isIntersecting ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            id="who-we-are-heading"
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Who We Are
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            We are a team of passionate innovators, technologists, and visionaries dedicated to
            transforming businesses and communities through cutting-edge digital solutions and
            sustainable practices.
          </motion.p>
        </motion.div>

        {/* Mission, Vision, Values */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isIntersecting ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To empower organizations with innovative digital solutions that drive sustainable
              growth, enhance efficiency, and create positive impact in the communities we serve.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="text-4xl mb-4">🔮</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To be the leading catalyst for digital transformation, creating a future where
              technology serves humanity and drives sustainable progress across all industries.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="text-4xl mb-4">⭐</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
            <p className="text-gray-600 leading-relaxed">
              Innovation, integrity, sustainability, and collaboration form the cornerstone of
              everything we do, ensuring ethical practices and meaningful outcomes.
            </p>
          </motion.div>
        </motion.div>


      </div>
    </section>
  );
};

export default WhoWeAre;