import React from 'react';
import CallToActionSection from '../components/Sections/CallToActionSection';
import Hero from '../components/Sections/Hero';
import ImpactStatsSection from '../components/Sections/ImpactStatsSection';
import KeyProgramsSection from '../components/Sections/KeyProgramsSection';
import NewsSection from '../components/Sections/NewsSection';
import WelcomeSection from '../components/Sections/WelcomeSection';

const HomePage: React.FC = () => {
    return (
        <>
            <Hero />
            <WelcomeSection />
            <KeyProgramsSection />
            <ImpactStatsSection />
            <NewsSection />
            <CallToActionSection />
        </>
    );
};

export default HomePage; 