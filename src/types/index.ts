export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: string;
  category: string;
  tags: string[];
  image: string;
  readTime: number;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  category: string;
  image: string;
  featured: boolean;
}

export interface Publication {
  id: string;
  title: string;
  description: string;
  publishDate: string;
  type: 'report' | 'publication' | 'whitepaper';
  downloadUrl: string;
  image: string;
}

export interface Notice {
  id: string;
  title: string;
  content: string;
  publishDate: string;
  priority: 'high' | 'medium' | 'low';
  category: string;
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  bio: string;
  image: string;
  social: {
    linkedin?: string;
    twitter?: string;
    email: string;
  };
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface NewsletterForm {
  email: string;
}