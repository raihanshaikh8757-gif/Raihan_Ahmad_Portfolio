export const siteConfig = {
  name: 'Raihan Ahmad',
  title: 'Raihan Ahmad | Digital Marketer & Vibe Coder',
  description:
    'Portfolio of Raihan Ahmad — Digital Marketer, Vibe Coder, Digital Sales Associate & Social Media Manager. Explore projects, certifications, and digital marketing expertise.',
  shortDescription:
    'Digital Marketer & Vibe Coder creating visuals and digital experiences that tell stories and drive results.',
  url: getSiteUrl(),
  ogImage: '/opengraph-image',
  locale: 'en_IN',
  keywords: [
    'Raihan Ahmad',
    'Digital Marketer',
    'Vibe Coder',
    'SEO',
    'Social Media Manager',
    'Digital Marketing Portfolio',
    'Web Development',
    'AI Tools',
    'Graphic Design',
    'Video Editing',
    'Bhopal',
    'India',
  ],
  author: {
    name: 'Raihan Ahmad',
    email: 'raihanahmad9693@gmail.com',
    linkedin: 'https://www.linkedin.com/in/raihan--ahmad',
  },
  social: {
    twitter: '@raihan_writes',
    linkedin: 'https://www.linkedin.com/in/raihan--ahmad',
    instagram: 'https://www.instagram.com/real__raihan',
    youtube: 'https://youtube.com/@raihan_writes',
  },
};

function getSiteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, '');
  }

  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  return 'https://raihan-ahmad-portfolio.vercel.app';
}
