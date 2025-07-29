import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Contact from './components/Sections/Contact';
import DonationPage from './pages/DonationPage';
import HomePage from './pages/HomePage';

// Who We Are Pages
const WhoWeArePage: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Who We Are</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-6">
            RDRS Bangladesh is a national development organization committed to the economic and social empowerment of the rural poor in Bangladesh.
          </p>
          <p className="text-gray-600 mb-6">
            Founded in 1972, RDRS Bangladesh has been working for over 50 years to improve the lives of rural communities through sustainable development programs.
          </p>
          <p className="text-gray-600 mb-6">
            Our mission is to empower rural communities through education, healthcare, economic opportunities, and sustainable development initiatives.
          </p>
        </div>
      </div>
    </div>
  );
};

const RDRSInBriefPage: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">RDRS in Brief</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-6">
            RDRS Bangladesh is a national development organization committed to the economic and social empowerment of the rural poor in Bangladesh.
          </p>
          <p className="text-gray-600 mb-6">
            Founded in 1972, RDRS Bangladesh has been working for over 50 years to improve the lives of rural communities through sustainable development programs.
          </p>
          <p className="text-gray-600 mb-6">
            Our mission is to empower rural communities through education, healthcare, economic opportunities, and sustainable development initiatives.
          </p>
        </div>
      </div>
    </div>
  );
};

const FounderDirectorPage: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Dr Olav Hodne (Founder Director)</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-6">
            Dr Olav Hodne was the founder director of RDRS Bangladesh and played a crucial role in establishing the organization.
          </p>
          <p className="text-gray-600 mb-6">
            His vision and leadership helped shape RDRS Bangladesh into the organization it is today, committed to rural development and community empowerment.
          </p>
        </div>
      </div>
    </div>
  );
};

const BoardOfTrusteesPage: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Board of Trustees</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-6">
            Our Board of Trustees provides strategic guidance and oversight to ensure RDRS Bangladesh continues to fulfill its mission effectively.
          </p>
        </div>
      </div>
    </div>
  );
};

const GeneralBodyPage: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">General Body</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-6">
            The General Body of RDRS Bangladesh represents the broader community and stakeholders who support our mission.
          </p>
        </div>
      </div>
    </div>
  );
};

const FormerChairpersonPage: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Former Chairperson</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-6">
            Learn about the former chairpersons who have guided RDRS Bangladesh through its journey of rural development.
          </p>
        </div>
      </div>
    </div>
  );
};

const ManagementPage: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Management</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-6">
            Our management team leads RDRS Bangladesh with expertise, dedication, and a commitment to rural development.
          </p>
        </div>
      </div>
    </div>
  );
};

const WhereWeWorkPage: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Where We Work</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-6">
            RDRS Bangladesh operates across 64 districts in Bangladesh, reaching rural communities throughout the country.
          </p>
        </div>
      </div>
    </div>
  );
};

const AwardsRecognitionPage: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Awards & Recognition</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-6">
            RDRS Bangladesh has received numerous awards and recognition for our contributions to rural development and community empowerment.
          </p>
        </div>
      </div>
    </div>
  );
};

const WhatWeDoPage: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">What We Do</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-6">
            RDRS Bangladesh implements comprehensive development programs across multiple sectors to empower rural communities.
          </p>
        </div>
      </div>
    </div>
  );
};

const ProgrammesPage: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Our Programmes</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-6">
            Our comprehensive programmes address the diverse needs of rural communities through sustainable development initiatives.
          </p>
        </div>
      </div>
    </div>
  );
};

const SkillsEmploymentPage: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Skills, Employment, and Entrepreneurship</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-6">
            RDRS inclusively focus on the young generation, to have agency, rights, skills, tools, influence, and opportunities to pursue their life goals, live a decent life, support families, and contribute to the development of their communities and the country.
          </p>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Program Highlights</h2>
          <ul className="list-disc pl-6 text-gray-600 mb-6">
            <li>Youth skills development training</li>
            <li>Entrepreneurship support and mentoring</li>
            <li>Job placement assistance</li>
            <li>Career counseling and guidance</li>
          </ul>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Impact</h2>
          <p className="text-gray-600 mb-6">
            Our skills and employment programme has helped thousands of young people find meaningful employment and start their own businesses.
          </p>
        </div>
      </div>
    </div>
  );
};

const SocialEmpowermentPage: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Social Empowerment</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-6">
            RDRS's Social Empowerment Programme support its programme participants by strengthening RDRS's unique CBOs, making these organisations increasingly autonomous, empowering them to advocate for their rightful access and that of the poor people in their communities to safety net provisions and basic services.
          </p>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Program Highlights</h2>
          <ul className="list-disc pl-6 text-gray-600 mb-6">
            <li>Community-based organization strengthening</li>
            <li>Advocacy and rights awareness</li>
            <li>Social safety net access</li>
            <li>Community leadership development</li>
          </ul>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Impact</h2>
          <p className="text-gray-600 mb-6">
            Our social empowerment initiatives have strengthened hundreds of community organizations and improved access to essential services.
          </p>
        </div>
      </div>
    </div>
  );
};

const AgricultureFoodSecurityPage: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Agriculture, Food Security and Climate Change</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-6">
            RDRS' Agriculture, Food Security and Climate Change Programme work with farmer communities to increase agricultural productivity and profitability by adopting sustainable and climate-resilient agricultural practices. To achieve this, RDRS provides training to farming households to improve their technical skills in farming and confidence to access government services and resources.
          </p>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Program Highlights</h2>
          <ul className="list-disc pl-6 text-gray-600 mb-6">
            <li>Sustainable farming practices</li>
            <li>Climate-resilient agriculture</li>
            <li>Food security initiatives</li>
            <li>Farmer training and support</li>
          </ul>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Impact</h2>
          <p className="text-gray-600 mb-6">
            Our agriculture programme has improved food security for thousands of farming families and enhanced their resilience to climate change.
          </p>
        </div>
      </div>
    </div>
  );
};

const MicrofinancePage: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Microfinance</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-6">
            RDRS operates its Microfinance Programme in a client-centric approach. RDRS seeks to make poor people economically self-reliant, increase their household income and assets, and therefore focus on micro, small and medium enterprise development to create employment opportunities in formal and informal sectors.
          </p>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Program Highlights</h2>
          <ul className="list-disc pl-6 text-gray-600 mb-6">
            <li>Microcredit services</li>
            <li>Small business development</li>
            <li>Financial literacy training</li>
            <li>Enterprise support</li>
          </ul>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Impact</h2>
          <p className="text-gray-600 mb-6">
            Our microfinance programme has helped thousands of families achieve economic self-reliance and build sustainable livelihoods.
          </p>
        </div>
      </div>
    </div>
  );
};

// News Detail Pages
const AdultLiteracyProgramPage: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-8">
          <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">Education</span>
          <div className="flex items-center text-sm text-gray-500 mt-2">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>March 15, 2024</span>
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Adult Literacy Program Launched</h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-6">
            RDRS has launched a comprehensive adult literacy program across 20 villages, providing basic education to over 500 participants who missed formal schooling opportunities.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mb-4">Program Overview</h2>
          <p className="text-gray-600 mb-6">
            The adult literacy program is designed to address the educational needs of adults who were unable to access formal education during their childhood. The program focuses on basic reading, writing, and numeracy skills, along with practical knowledge that can be applied in daily life.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mb-4">Key Features</h2>
          <ul className="list-disc pl-6 text-gray-600 mb-6">
            <li>Basic literacy and numeracy skills</li>
            <li>Practical life skills education</li>
            <li>Flexible learning schedules</li>
            <li>Community-based learning centers</li>
            <li>Certification upon completion</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-800 mb-4">Impact</h2>
          <p className="text-gray-600 mb-6">
            This initiative has already shown promising results, with participants reporting improved confidence, better communication skills, and enhanced opportunities for employment and community participation.
          </p>

          <div className="mt-8">
            <a href="/" className="text-green-600 hover:text-green-700 font-semibold">
              ← Back to Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const MaternalHealthProgramPage: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-8">
          <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">Healthcare</span>
          <div className="flex items-center text-sm text-gray-500 mt-2">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>March 10, 2024</span>
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Maternal Health Program Success</h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-6">
            Our maternal health initiative has trained 200 community health workers and established 15 health centers, reducing infant mortality rates by 40% in target communities.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mb-4">Program Overview</h2>
          <p className="text-gray-600 mb-6">
            The maternal health program focuses on improving healthcare access for pregnant women and new mothers in rural communities. Through comprehensive training and community engagement, we've created a sustainable healthcare network that serves thousands of families.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mb-4">Key Achievements</h2>
          <ul className="list-disc pl-6 text-gray-600 mb-6">
            <li>Trained 200 community health workers</li>
            <li>Established 15 health centers</li>
            <li>40% reduction in infant mortality</li>
            <li>Improved prenatal care access</li>
            <li>Enhanced maternal nutrition programs</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-800 mb-4">Community Impact</h2>
          <p className="text-gray-600 mb-6">
            The program has significantly improved maternal and child health outcomes, with communities reporting better healthcare access and reduced maternal complications.
          </p>

          <div className="mt-8">
            <a href="/" className="text-blue-600 hover:text-blue-700 font-semibold">
              ← Back to Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const ClimateResilientFarmingPage: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-8">
          <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">Climate</span>
          <div className="flex items-center text-sm text-gray-500 mt-2">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>March 5, 2024</span>
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Climate-Resilient Farming Project</h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-6">
            RDRS has initiated a climate-resilient farming project benefiting 1,000+ farmers with sustainable agricultural practices and modern farming techniques.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mb-4">Project Overview</h2>
          <p className="text-gray-600 mb-6">
            The climate-resilient farming project addresses the challenges of climate change by introducing sustainable agricultural practices that help farmers adapt to changing weather patterns and improve their crop yields.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mb-4">Key Features</h2>
          <ul className="list-disc pl-6 text-gray-600 mb-6">
            <li>Sustainable farming techniques</li>
            <li>Climate-adaptive crop varieties</li>
            <li>Water conservation methods</li>
            <li>Soil health improvement</li>
            <li>Farmer training and support</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-800 mb-4">Impact</h2>
          <p className="text-gray-600 mb-6">
            The project has helped farmers increase their crop yields by 30% while reducing water usage and improving soil health. Farmers are now better equipped to handle climate variability.
          </p>

          <div className="mt-8">
            <a href="/" className="text-orange-600 hover:text-orange-700 font-semibold">
              ← Back to Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main App Component
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Home */}
        <Route path="/" element={<Layout pageKey="home"><HomePage /></Layout>} />

        {/* Who We Are */}
        <Route path="/who-we-are" element={<Layout pageKey="whoWeAre"><WhoWeArePage /></Layout>} />
        <Route path="/rdrs-in-brief" element={<Layout pageKey="whoWeAre"><RDRSInBriefPage /></Layout>} />
        <Route path="/founder-director" element={<Layout pageKey="whoWeAre"><FounderDirectorPage /></Layout>} />
        <Route path="/board-of-trustees" element={<Layout pageKey="whoWeAre"><BoardOfTrusteesPage /></Layout>} />
        <Route path="/general-body" element={<Layout pageKey="whoWeAre"><GeneralBodyPage /></Layout>} />
        <Route path="/former-chairperson" element={<Layout pageKey="whoWeAre"><FormerChairpersonPage /></Layout>} />
        <Route path="/management" element={<Layout pageKey="whoWeAre"><ManagementPage /></Layout>} />
        <Route path="/where-we-work" element={<Layout pageKey="whoWeAre"><WhereWeWorkPage /></Layout>} />
        <Route path="/awards-recognition" element={<Layout pageKey="whoWeAre"><AwardsRecognitionPage /></Layout>} />

        {/* What We Do */}
        <Route path="/what-we-do" element={<Layout pageKey="programmes"><WhatWeDoPage /></Layout>} />
        <Route path="/programmes" element={<Layout pageKey="programmes"><ProgrammesPage /></Layout>} />

        {/* Programmes */}
        <Route path="/programmes/skills-employment-entrepreneurship" element={<Layout pageKey="programmes"><SkillsEmploymentPage /></Layout>} />
        <Route path="/programmes/social-empowerment" element={<Layout pageKey="programmes"><SocialEmpowermentPage /></Layout>} />
        <Route path="/programmes/agriculture-food-security-climate-change" element={<Layout pageKey="programmes"><AgricultureFoodSecurityPage /></Layout>} />
        <Route path="/programmes/microfinance" element={<Layout pageKey="programmes"><MicrofinancePage /></Layout>} />

        {/* News */}
        <Route path="/news/adult-literacy-program" element={<Layout pageKey="news"><AdultLiteracyProgramPage /></Layout>} />
        <Route path="/news/maternal-health-program" element={<Layout pageKey="news"><MaternalHealthProgramPage /></Layout>} />
        <Route path="/news/climate-resilient-farming" element={<Layout pageKey="news"><ClimateResilientFarmingPage /></Layout>} />

        {/* Donate */}
        <Route path="/donate" element={<Layout pageKey="donate"><DonationPage /></Layout>} />

        {/* Contact */}
        <Route path="/contact" element={<Layout pageKey="contact"><Contact /></Layout>} />
      </Routes>
    </Router>
  );
};

export default App;