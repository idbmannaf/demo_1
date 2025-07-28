import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { 
  ExclamationTriangleIcon,
  InformationCircleIcon,
  BellIcon,
  CalendarIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';
import noticesData from '../../data/notices.json';
import { format } from 'date-fns';

const Notice: React.FC = () => {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [selectedNotice, setSelectedNotice] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { value: 'all', label: 'All Notices' },
    { value: 'General', label: 'General' },
    { value: 'Announcement', label: 'Announcements' },
    { value: 'Newsletter', label: 'Newsletter' },
  ];

  const filteredNotices = selectedCategory === 'all' 
    ? noticesData 
    : noticesData.filter(notice => notice.category === selectedCategory);

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'high':
        return <ExclamationTriangleIcon className="h-5 w-5" />;
      case 'medium':
        return <InformationCircleIcon className="h-5 w-5" />;
      default:
        return <BellIcon className="h-5 w-5" />;
    }
  };

  const getPriorityColors = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'medium':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      default:
        return 'bg-blue-100 text-blue-800 border-blue-200';
    }
  };

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
      id="notice" 
      ref={elementRef} 
      className="py-20 bg-white"
      role="region"
      aria-labelledby="notice-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isIntersecting ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            id="notice-heading"
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Important Notices
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Stay informed with our latest announcements, updates, and important information 
            that may affect our services and community.
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isIntersecting ? "visible" : "hidden"}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.value}
              variants={itemVariants}
              onClick={() => setSelectedCategory(category.value)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.value
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-600'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Notices List */}
        <motion.div
          key={selectedCategory}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          {filteredNotices.map((notice, index) => (
            <motion.article
              key={notice.id}
              variants={itemVariants}
              className={`bg-white rounded-2xl border-l-4 shadow-lg hover:shadow-xl transition-all duration-300 p-6 cursor-pointer ${
                notice.priority === 'high' ? 'border-red-500' :
                notice.priority === 'medium' ? 'border-orange-500' :
                'border-blue-500'
              }`}
              onClick={() => setSelectedNotice(selectedNotice === notice.id ? null : notice.id)}
              whileHover={{ x: 5 }}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4 flex-1">
                  <div className={`p-2 rounded-lg ${getPriorityColors(notice.priority)}`}>
                    {getPriorityIcon(notice.priority)}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors duration-300">
                        {notice.title}
                      </h3>
                      <div className="flex items-center space-x-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wide ${getPriorityColors(notice.priority)}`}>
                          {notice.priority} Priority
                        </span>
                        <div className="flex items-center text-sm text-gray-500">
                          <CalendarIcon className="h-4 w-4 mr-1" />
                          <time dateTime={notice.publishDate}>
                            {format(new Date(notice.publishDate), 'MMM d, yyyy')}
                          </time>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed">
                      {selectedNotice === notice.id ? notice.content : `${notice.content.substring(0, 150)}...`}
                    </p>
                    
                    <motion.button
                      className="mt-3 text-blue-600 hover:text-blue-800 font-medium text-sm"
                      whileHover={{ x: 5 }}
                    >
                      {selectedNotice === notice.id ? 'Show Less' : 'Read More'}
                    </motion.button>
                  </div>
                </div>
              </div>

              <AnimatePresence>
                {selectedNotice === notice.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 pt-4 border-t border-gray-200"
                  >
                    <div className="flex items-center justify-between">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        notice.category === 'General' ? 'bg-gray-100 text-gray-800' :
                        notice.category === 'Announcement' ? 'bg-green-100 text-green-800' :
                        'bg-purple-100 text-purple-800'
                      }`}>
                        {notice.category}
                      </span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedNotice(null);
                        }}
                        className="text-gray-400 hover:text-gray-600 transition-colors duration-300"
                        aria-label="Close notice details"
                      >
                        <XMarkIcon className="h-5 w-5" />
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.article>
          ))}
        </motion.div>

        {filteredNotices.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <BellIcon className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">No notices found for the selected category.</p>
          </motion.div>
        )}

        {/* Emergency Contact */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isIntersecting ? "visible" : "hidden"}
          className="mt-16"
        >
          <motion.div
            variants={itemVariants}
            className="bg-red-50 border border-red-200 rounded-2xl p-8 text-center"
          >
            <ExclamationTriangleIcon className="h-12 w-12 text-red-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-red-900 mb-4">Emergency Contact</h3>
            <p className="text-red-700 mb-6">
              For urgent matters or emergencies outside of business hours, please contact our emergency hotline.
            </p>
            <motion.a
              href="tel:+1234567890"
              className="inline-flex items-center bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors duration-300 font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              📞 Emergency Hotline: +1 (234) 567-8900
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Notice;