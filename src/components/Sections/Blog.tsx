import { CalendarIcon, ClockIcon, UserIcon } from '@heroicons/react/24/outline';
import { format } from 'date-fns';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import blogData from '../../data/blog.json';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import LazyImage from '../UI/LazyImage';

const Blog: React.FC = () => {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const categories = [
    { value: 'all', label: 'All Posts' },
    { value: 'Technology', label: 'Technology' },
    { value: 'Sustainability', label: 'Sustainability' },
    { value: 'Workplace', label: 'Workplace' },
  ];

  const filteredPosts = blogData.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

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
      id="blog"
      ref={elementRef}
      className="py-20 bg-gray-50"
      role="region"
      aria-labelledby="blog-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isIntersecting ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            id="blog-heading"
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Latest Insights & News
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Discover the latest trends, insights, and thought leadership from our team of experts
            across technology, sustainability, and innovation.
          </motion.p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isIntersecting ? "visible" : "hidden"}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <motion.div variants={itemVariants} className="flex-1 max-w-md">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                aria-label="Search blog articles"
              />
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => setSelectedCategory(category.value)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${selectedCategory === category.value
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                    }`}
                >
                  {category.label}
                </button>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Featured Post */}
        {filteredPosts.length > 0 && (
          <motion.article
            variants={containerVariants}
            initial="hidden"
            animate={isIntersecting ? "visible" : "hidden"}
            className="mb-16"
          >
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-3xl shadow-xl overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto">
                  <LazyImage
                    src={filteredPosts[0].image}
                    alt={filteredPosts[0].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                </div>

                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4 hover:text-blue-600 transition-colors duration-300">
                    {filteredPosts[0].title}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                    {filteredPosts[0].excerpt}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-500">
                    <div className="flex items-center">
                      <UserIcon className="h-4 w-4 mr-1" />
                      {filteredPosts[0].author}
                    </div>
                    <div className="flex items-center">
                      <CalendarIcon className="h-4 w-4 mr-1" />
                      {format(new Date(filteredPosts[0].publishDate), 'MMM d, yyyy')}
                    </div>
                    <div className="flex items-center">
                      <ClockIcon className="h-4 w-4 mr-1" />
                      {filteredPosts[0].readTime} min read
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {filteredPosts[0].tags.slice(0, 3).map((tag, idx) => (
                      <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <motion.button
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium w-fit"
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Read Full Article
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.article>
        )}

        {/* Blog Posts Grid */}
        <motion.div
          key={`${selectedCategory}-${searchTerm}`}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredPosts.slice(1).map((post, index) => (
            <motion.article
              key={post.id}
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              whileHover={{ y: -5 }}
            >
              <div className="relative h-48 overflow-hidden">
                <LazyImage
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <UserIcon className="h-4 w-4 mr-1" />
                    {post.author}
                  </div>
                  <div className="flex items-center">
                    <ClockIcon className="h-4 w-4 mr-1" />
                    {post.readTime} min
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {post.tags.slice(0, 2).map((tag, idx) => (
                    <span key={idx} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <time className="text-sm text-gray-500" dateTime={post.publishDate}>
                    {format(new Date(post.publishDate), 'MMM d, yyyy')}
                  </time>
                  <motion.button
                    className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                    whileHover={{ x: 5 }}
                  >
                    Read More →
                  </motion.button>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {filteredPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-500 text-lg">No articles found matching your criteria.</p>
            <motion.button
              onClick={() => {
                setSelectedCategory('all');
                setSearchTerm('');
              }}
              className="mt-4 text-blue-600 hover:text-blue-800 font-medium"
              whileHover={{ scale: 1.05 }}
            >
              Clear filters
            </motion.button>
          </motion.div>
        )}


      </div>
    </section>
  );
};

export default Blog;