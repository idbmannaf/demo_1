import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './components/Layout/Footer';
import Header from './components/Layout/Header';
import Blog from './components/Sections/Blog';
import Contact from './components/Sections/Contact';
import Hero from './components/Sections/Hero';
import Notice from './components/Sections/Notice';
import Publications from './components/Sections/Publications';
import WhatWeDo from './components/Sections/WhatWeDo';
import WhoWeAre from './components/Sections/WhoWeAre';
import StructuredData from './components/SEO/StructuredData';
import IntroModal from './components/UI/IntroModal';
import DonationPage from './pages/DonationPage';

const HomePage: React.FC = () => {
  // Schema.org structured data for SEO
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "InnovateCorp",
    "description": "Leading digital transformation with cutting-edge solutions and sustainable practices.",
    "url": "https://innovatecorp.com",
    "logo": "https://innovatecorp.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-234-567-8900",
      "contactType": "customer service",
      "email": "info@innovatecorp.com"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Innovation Street",
      "addressLocality": "Tech City",
      "addressRegion": "TC",
      "postalCode": "12345",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://facebook.com/innovatecorp",
      "https://twitter.com/innovatecorp",
      "https://linkedin.com/company/innovatecorp"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "InnovateCorp",
    "url": "https://innovatecorp.com",
    "description": "Professional digital transformation services, sustainability consulting, and innovation strategy.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://innovatecorp.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <div className="App">
      <StructuredData data={organizationSchema} />
      <StructuredData data={websiteSchema} />

      <Header />
      <main role="main">
        <Hero />
        <WhoWeAre />
        <WhatWeDo />
        <Publications />
        <Notice />
        <Blog />
        <Contact />
      </main>
      <Footer />
      <IntroModal />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/donate" element={<DonationPage />} />
      </Routes>
    </Router>
  );
};

export default App;