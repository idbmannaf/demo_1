import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getSEOData, SEOData } from '../../utils/seo';
import StructuredData from '../SEO/StructuredData';
import BackToTop from '../UI/BackToTop';
import IntroModal from '../UI/IntroModal';
import Footer from './Footer';
import Header from './Header';

interface LayoutProps {
    children: React.ReactNode;
    seoData?: Partial<SEOData>;
    pageKey?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, seoData, pageKey = 'home' }) => {
    const location = useLocation();

    const finalSeoData = getSEOData(pageKey, seoData);

    useEffect(() => {
        document.title = finalSeoData.title;

        const updateMetaTag = (name: string, content: string, property = false) => {
            const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
            let meta = document.querySelector(selector) as HTMLMetaElement;

            if (!meta) {
                meta = document.createElement('meta');
                if (property) {
                    meta.setAttribute('property', name);
                } else {
                    meta.setAttribute('name', name);
                }
                document.head.appendChild(meta);
            }

            meta.setAttribute('content', content);
        };

        updateMetaTag('description', finalSeoData.description);
        updateMetaTag('keywords', finalSeoData.keywords || '');
        updateMetaTag('robots', 'index, follow');

        updateMetaTag('og:title', finalSeoData.title, true);
        updateMetaTag('og:description', finalSeoData.description, true);
        updateMetaTag('og:image', finalSeoData.ogImage || '', true);
        updateMetaTag('og:url', finalSeoData.canonical || '', true);
        updateMetaTag('og:type', finalSeoData.ogType || 'website', true);
        updateMetaTag('og:site_name', 'RDRS Bangladesh', true);

        updateMetaTag('twitter:card', finalSeoData.twitterCard || 'summary_large_image');
        updateMetaTag('twitter:title', finalSeoData.title);
        updateMetaTag('twitter:description', finalSeoData.description);
        updateMetaTag('twitter:image', finalSeoData.ogImage || '');

        let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
        if (!canonical) {
            canonical = document.createElement('link');
            canonical.setAttribute('rel', 'canonical');
            document.head.appendChild(canonical);
        }
        canonical.setAttribute('href', finalSeoData.canonical || '');

        const essentialMetaTags = [
            { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
            { name: 'author', content: 'RDRS Bangladesh' },
            { name: 'language', content: 'English' },
            { name: 'geo.region', content: 'BD' },
            { name: 'geo.placename', content: 'Dhaka, Bangladesh' }
        ];

        essentialMetaTags.forEach(({ name, content }) => {
            updateMetaTag(name, content);
        });

    }, [finalSeoData, location.pathname]);

    return (
        <div className="App">
            <StructuredData data={finalSeoData.structuredData || {}} />
            <Header />
            <main role="main">
                {children}
            </main>
            <Footer />
            <IntroModal />
            <BackToTop />
        </div>
    );
};

export default Layout; 