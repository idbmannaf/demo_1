import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { useLocalStorage } from '../../hooks/useLocalStorage';

const IntroModal: React.FC = () => {
  const [hasVisited, setHasVisited] = useLocalStorage('hasVisitedBefore', false);
  const [showModal, setShowModal] = React.useState(false);

  useEffect(() => {
    if (!hasVisited) {
      const timer = setTimeout(() => {
        setShowModal(true);
      }, 2000); // Show modal after 2 seconds

      return () => clearTimeout(timer);
    }
  }, [hasVisited]);

  const handleClose = () => {
    setShowModal(false);
    setHasVisited(true);
  };

  const handleExplore = () => {
    setShowModal(false);
    setHasVisited(true);
    document.querySelector('#what-we-do')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {showModal && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          />

          {/* Modal Content */}
          <motion.div
            className="relative bg-white rounded-3xl shadow-2xl max-w-lg w-full mx-4 overflow-hidden"
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
          >
            {/* Header with gradient */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white text-center relative">
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/20 transition-colors duration-300"
                aria-label="Close welcome modal"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
              
              <motion.div
                className="text-6xl mb-4"
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3
                }}
              >
                👋
              </motion.div>
              
              <h2 id="modal-title" className="text-3xl font-bold mb-2">
                Welcome to InnovateCorp!
              </h2>
              <p className="text-blue-100">
                Your Partner in Digital Transformation
              </p>
            </div>

            {/* Content */}
            <div className="p-8">
              <p id="modal-description" className="text-gray-600 text-lg leading-relaxed mb-6">
                We're excited to have you here! Discover how our innovative solutions and 
                expert team can help transform your business for the digital age.
              </p>

              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center">
                  <div className="text-3xl mb-2">🚀</div>
                  <p className="text-sm text-gray-600">Innovation</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🌱</div>
                  <p className="text-sm text-gray-600">Sustainability</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🤝</div>
                  <p className="text-sm text-gray-600">Partnership</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <motion.button
                  onClick={handleExplore}
                  className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Explore Our Services
                </motion.button>
                <motion.button
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) || handleClose()}
                  className="flex-1 border-2 border-blue-600 text-blue-600 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get In Touch
                </motion.button>
              </div>

              <motion.p 
                className="text-center text-sm text-gray-500 mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                This message won't show again on your future visits
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroModal;