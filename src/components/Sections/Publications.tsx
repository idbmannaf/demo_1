import { ArrowDownTrayIcon, CalendarIcon } from '@heroicons/react/24/outline';
import { format } from 'date-fns';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import publicationsData from '../../data/publications.json';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import LazyImage from '../UI/LazyImage';

const Publications: React.FC = () => {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [selectedType, setSelectedType] = useState<string>('all');

  const types = [
    { value: 'all', label: 'All Publications' },
    { value: 'report', label: 'Reports' },
    { value: 'publication', label: 'Publications' },
    { value: 'whitepaper', label: 'Whitepapers' },
  ];

  const filteredPublications = selectedType === 'all'
    ? publicationsData
    : publicationsData.filter(pub => pub.type === selectedType);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
      id="publications"
      ref={elementRef}
      className="py-20 bg-gray-50"
      role="region"
      aria-labelledby="publications-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isIntersecting ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            id="publications-heading"
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Reports & Publications
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Explore our comprehensive collection of research reports, industry publications,
            and thought leadership content that drives innovation and insight.
          </motion.p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isIntersecting ? "visible" : "hidden"}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {types.map((type) => (
            <motion.button
              key={type.value}
              variants={itemVariants}
              onClick={() => setSelectedType(type.value)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${selectedType === type.value
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {type.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Publications Grid */}
        <motion.div
          key={selectedType}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredPublications.map((publication, index) => (
            <motion.article
              key={publication.id}
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              whileHover={{ y: -5 }}
            >
              <div className="relative h-48 overflow-hidden">
                <LazyImage
                  src={publication.image}
                  alt={publication.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wide ${publication.type === 'report' ? 'bg-blue-100 text-blue-800' :
                    publication.type === 'publication' ? 'bg-green-100 text-green-800' :
                      'bg-purple-100 text-purple-800'
                    }`}>
                    {publication.type}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {publication.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {publication.description}
                </p>

                <div className="flex items-center text-sm text-gray-500 mb-6">
                  <CalendarIcon className="h-4 w-4 mr-2" />
                  <time dateTime={publication.publishDate}>
                    {format(new Date(publication.publishDate), 'MMMM d, yyyy')}
                  </time>
                </div>

                <motion.a
                  href={publication.downloadUrl}
                  className="inline-flex items-center justify-center w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  download
                  aria-label={`Download ${publication.title}`}
                >
                  <ArrowDownTrayIcon className="h-5 w-5 mr-2" />
                  Download
                </motion.a>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {filteredPublications.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-500 text-lg">No publications found for the selected category.</p>
          </motion.div>
        )}

      </div>
    </section>
  );
};

export default Publications;