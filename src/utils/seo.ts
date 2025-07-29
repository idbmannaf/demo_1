export interface SEOData {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  canonical?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: Record<string, unknown>;
}

export const defaultSEO: SEOData = {
  title: "RDRS Bangladesh - Empowering Rural Communities",
  description:
    "RDRS Bangladesh is a national development organization committed to the economic and social empowerment of the rural poor in Bangladesh.",
  keywords:
    "RDRS Bangladesh, rural development, community empowerment, sustainable development, Bangladesh NGO",
  ogImage: "https://www.rdrsbangladesh.org/assets/front/rdrs_logo.png",
  canonical: "https://www.rdrsbangladesh.org",
  ogType: "website",
  twitterCard: "summary_large_image",
  structuredData: {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "RDRS Bangladesh",
    description:
      "RDRS Bangladesh is a national development organization committed to the economic and social empowerment of the rural poor in Bangladesh.",
    url: "https://www.rdrsbangladesh.org",
    logo: "https://www.rdrsbangladesh.org/assets/front/rdrs_logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+880-2-955-0123",
      contactType: "customer service",
      email: "info@rdrsbangladesh.org",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "House 43, Road 16",
      addressLocality: "Dhaka",
      addressRegion: "Dhaka",
      postalCode: "1209",
      addressCountry: "BD",
    },
    sameAs: [
      "https://facebook.com/rdrsbangladesh",
      "https://twitter.com/rdrsbangladesh",
      "https://linkedin.com/company/rdrsbangladesh",
    ],
  },
};

export const pageSEO: Record<string, SEOData> = {
  home: {
    title: "RDRS Bangladesh - Empowering Rural Communities",
    description:
      "RDRS Bangladesh is a national development organization committed to the economic and social empowerment of the rural poor in Bangladesh.",
    keywords:
      "RDRS Bangladesh, rural development, community empowerment, sustainable development, Bangladesh NGO",
    canonical: "https://www.rdrsbangladesh.org",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "RDRS Bangladesh",
      url: "https://www.rdrsbangladesh.org",
      description:
        "RDRS Bangladesh - Empowering rural communities through sustainable development, education, healthcare, and economic opportunities.",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://www.rdrsbangladesh.org/search?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
  },
  whoWeAre: {
    title: "Who We Are - RDRS Bangladesh",
    description:
      "Learn about RDRS Bangladesh, our mission, vision, values, and over 50 years of commitment to rural development and community empowerment.",
    keywords:
      "RDRS Bangladesh, who we are, mission, vision, values, rural development, Bangladesh NGO",
    canonical: "https://www.rdrsbangladesh.org/who-we-are",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "RDRS Bangladesh",
      description:
        "RDRS Bangladesh is a national development organization committed to the economic and social empowerment of the rural poor in Bangladesh.",
      url: "https://www.rdrsbangladesh.org",
      foundingDate: "1972",
      numberOfEmployees: "1000+",
      areaServed: "Bangladesh",
    },
  },
  programmes: {
    title: "Our Programmes - RDRS Bangladesh",
    description:
      "Discover our comprehensive programmes including skills development, social empowerment, agriculture, and microfinance initiatives across Bangladesh.",
    keywords:
      "RDRS programmes, skills development, social empowerment, agriculture, microfinance, Bangladesh development programmes",
    canonical: "https://www.rdrsbangladesh.org/programmes",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "RDRS Bangladesh Programmes",
      description:
        "Comprehensive development programmes for rural communities in Bangladesh",
      itemListElement: [
        {
          "@type": "Service",
          name: "Skills, Employment, and Entrepreneurship",
          description: "Youth empowerment and skills development programmes",
        },
        {
          "@type": "Service",
          name: "Social Empowerment",
          description:
            "Community-based organization strengthening and advocacy",
        },
        {
          "@type": "Service",
          name: "Agriculture, Food Security and Climate Change",
          description:
            "Sustainable agricultural practices and climate resilience",
        },
        {
          "@type": "Service",
          name: "Microfinance",
          description: "Financial inclusion and economic empowerment",
        },
      ],
    },
  },
  news: {
    title: "Latest News & Updates - RDRS Bangladesh",
    description:
      "Stay updated with the latest news, achievements, and community impact stories from RDRS Bangladesh.",
    keywords:
      "RDRS news, latest updates, community impact, rural development news, Bangladesh NGO news",
    canonical: "https://www.rdrsbangladesh.org/news",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "NewsMediaOrganization",
      name: "RDRS Bangladesh News",
      url: "https://www.rdrsbangladesh.org/news",
    },
  },
  contact: {
    title: "Contact Us - RDRS Bangladesh",
    description:
      "Get in touch with RDRS Bangladesh. Find our contact information, office locations, and ways to support our mission.",
    keywords:
      "contact RDRS Bangladesh, NGO contact, rural development contact, Bangladesh NGO contact",
    canonical: "https://www.rdrsbangladesh.org/contact",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      name: "Contact RDRS Bangladesh",
      description: "Contact information for RDRS Bangladesh",
      mainEntity: {
        "@type": "Organization",
        name: "RDRS Bangladesh",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+880-2-955-0123",
          contactType: "customer service",
          email: "info@rdrsbangladesh.org",
        },
      },
    },
  },
  donate: {
    title: "Donate - Support RDRS Bangladesh",
    description:
      "Support RDRS Bangladesh in our mission to empower rural communities. Your donation helps create sustainable development and lasting change.",
    keywords:
      "donate RDRS Bangladesh, support rural development, NGO donation, Bangladesh development support",
    canonical: "https://www.rdrsbangladesh.org/donate",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "DonationPage",
      name: "Donate to RDRS Bangladesh",
      description: "Support rural development in Bangladesh",
      mainEntity: {
        "@type": "Organization",
        name: "RDRS Bangladesh",
      },
    },
  },
};

export const getSEOData = (
  page: string,
  customData?: Partial<SEOData>
): SEOData => {
  const baseSEO = pageSEO[page] || defaultSEO;
  return { ...baseSEO, ...customData };
};

export const generateMetaTags = (seoData: SEOData) => {
  const tags = [
    { name: "title", content: seoData.title },
    { name: "description", content: seoData.description },
    { name: "keywords", content: seoData.keywords },
    { name: "robots", content: "index, follow" },
    { property: "og:title", content: seoData.title },
    { property: "og:description", content: seoData.description },
    { property: "og:image", content: seoData.ogImage },
    { property: "og:url", content: seoData.canonical },
    { property: "og:type", content: seoData.ogType || "website" },
    { property: "og:site_name", content: "RDRS Bangladesh" },
    {
      name: "twitter:card",
      content: seoData.twitterCard || "summary_large_image",
    },
    { name: "twitter:title", content: seoData.title },
    { name: "twitter:description", content: seoData.description },
    { name: "twitter:image", content: seoData.ogImage },
    { rel: "canonical", href: seoData.canonical },
  ];

  return tags.filter((tag) => tag.content || tag.href);
};
