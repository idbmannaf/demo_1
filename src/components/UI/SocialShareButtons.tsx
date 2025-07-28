import React from 'react';
import { motion } from 'framer-motion';

interface SocialShareButtonsProps {
  url: string;
  title: string;
  description?: string;
}

const SocialShareButtons: React.FC<SocialShareButtonsProps> = ({ url, title, description = '' }) => {
  const shareButtons = [
    {
      name: 'Facebook',
      icon: '📘',
      color: 'hover:bg-blue-600',
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    },
    {
      name: 'Twitter',
      icon: '🐦',
      color: 'hover:bg-blue-400',
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    },
    {
      name: 'LinkedIn',
      icon: '💼',
      color: 'hover:bg-blue-700',
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    },
  ];

  const handleShare = (shareUrl: string) => {
    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  return (
    <div className="flex items-center space-x-2">
      <span className="text-sm text-gray-600 mr-2">Share:</span>
      {shareButtons.map((button) => (
        <motion.button
          key={button.name}
          onClick={() => handleShare(button.url)}
          className={`p-2 rounded-full bg-gray-100 text-gray-600 ${button.color} hover:text-white transition-colors duration-300`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label={`Share on ${button.name}`}
        >
          <span className="text-lg">{button.icon}</span>
        </motion.button>
      ))}
    </div>
  );
};

export default SocialShareButtons;