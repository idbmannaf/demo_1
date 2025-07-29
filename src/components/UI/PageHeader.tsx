import { ChevronRightIcon, HomeIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';

interface BreadcrumbItem {
    name: string;
    href?: string;
}

interface PageHeaderProps {
    title: string;
    breadcrumbs?: BreadcrumbItem[];
    subtitle?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({
    title,
    breadcrumbs = [],
    subtitle
}) => {
    return (
        <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 uppercase">{title}</h1>

                    {subtitle && (
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-xl text-green-100 mb-6 max-w-3xl mx-auto"
                        >
                            {subtitle}
                        </motion.p>
                    )}

                    {/* Breadcrumbs */}
                    {breadcrumbs.length > 0 && (
                        <motion.nav
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="flex items-center justify-center space-x-2 text-sm flex-wrap"
                        >
                            <Link to="/" className="flex items-center hover:text-green-200 transition-colors">
                                <HomeIcon className="w-4 h-4 mr-1" />
                                Home
                            </Link>

                            {breadcrumbs.map((item, index) => (
                                <React.Fragment key={index}>
                                    <ChevronRightIcon className="w-4 h-4" />
                                    {item.href ? (
                                        <Link
                                            to={item.href}
                                            className="hover:text-green-200 transition-colors"
                                        >
                                            {item.name}
                                        </Link>
                                    ) : (
                                        <span className="text-green-200">{item.name}</span>
                                    )}
                                </React.Fragment>
                            ))}
                        </motion.nav>
                    )}

                    {/* Decorative element */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="mt-6 flex justify-center"
                    >
                        <div className="w-24 h-1 bg-green-300 rounded-full"></div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default PageHeader; 