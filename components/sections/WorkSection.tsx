'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { ExternalLink, X, FileText, ArrowLeft } from 'lucide-react';

export type CaseStudySection = {
  title: string;
  content?: string;
  sub?: string;
  list?: string[];
  groups?: { label: string; items: string[] }[];
  info?: { label: string; value: string; fullWidth?: boolean }[];
};

export type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  tech: string[];
  img: string;
  liveUrl: string;
  color: 'yellow' | 'dark';
  caseStudyTitle: string;
  caseStudySections: CaseStudySection[];
};

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Website',
    category: 'E-Commerce Website',
    description:
      'Designed and developed a modern e-commerce website for an eyewear brand with responsive UI, seamless navigation, product categories, and an enhanced shopping experience.',
    tech: ['Vibe Coding', 'Cursor AI', 'Figma', 'Canva', 'Vercel'],
    img: '/chashmewala-project.png',
    liveUrl: 'https://chashme-wala.vercel.app/',
    color: 'yellow',
    caseStudyTitle: 'ChashmeWala – E-commerce Website',
    caseStudySections: [
      {
        title: 'Project Overview',
        content:
          "ChashmeWala is a modern e-commerce website developed for an eyewear brand with the goal of creating a seamless, engaging, and conversion-focused online shopping experience. The platform combines a clean user interface, intuitive navigation, and strategic product presentation to strengthen the brand's digital presence and encourage customer purchases.",
      },
      {
        title: 'Project Objective',
        content:
          'The objective was to build a visually appealing, responsive, and user-friendly e-commerce platform that not only showcases products professionally but also improves customer engagement, builds trust, and supports lead generation and online sales.',
      },
      {
        title: 'My Role',
        content: 'UI/UX Designer • Vibe Coder • Digital Sales & Marketing Associate',
        sub: "Led the complete project from planning to execution by understanding the client's business goals and target audience. Designed an intuitive user experience, leveraged AI-powered vibe coding to rapidly develop the website, and applied digital sales strategies to create a conversion-focused shopping journey. The project emphasized customer engagement, brand credibility, and business growth while delivering a modern and responsive digital experience.",
      },
      {
        title: 'Key Features',
        list: [
          'Modern Responsive E-commerce Website',
          'Clean & Premium UI/UX',
          'Product Categories & Collections',
          'Smart Search Functionality',
          'Promotional Banner Section',
          'Featured Products Showcase',
          'Mobile-First Responsive Design',
          'Fast & Smooth User Experience',
          'Conversion-Focused Layout',
          'Professional Brand Presentation',
        ],
      },
      {
        title: 'Design Approach',
        content:
          'The website was designed with simplicity, usability, and business goals in mind. Every section was carefully structured to improve product visibility, simplify navigation, and create a premium shopping experience. The layout encourages users to explore products naturally while maintaining a modern and trustworthy brand identity.',
      },
      {
        title: 'AI Workflow & Tools Used',
        groups: [
          { label: 'AI Development', items: ['Cursor AI', 'Antigravity', 'Google Firebase Studio'] },
          { label: 'AI Assistants', items: ['ChatGPT', 'Google Gemini', 'Claude AI', 'Perplexity AI'] },
          { label: 'Design & Creative', items: ['Figma AI', 'Canva'] },
          { label: 'Development & Deployment', items: ['GitHub', 'Vercel'] },
        ],
      },
      {
        title: 'Challenges',
        content:
          "The primary challenge was creating an e-commerce experience that balanced aesthetics with functionality while maintaining a smooth user journey across desktop and mobile devices. Another key challenge was designing a website that not only looked premium but also aligned with the client's business objectives and encouraged customer conversions.",
      },
      {
        title: 'Solution',
        content:
          'A clean navigation system, well-organized product structure, responsive layouts, and strategically placed promotional sections were implemented to enhance user engagement. AI-powered development accelerated the workflow, while business-focused design decisions helped create a shopping experience that supports higher conversions and long-term brand growth.',
      },
      {
        title: 'Results',
        list: [
          'Successfully delivered a modern and fully responsive e-commerce website.',
          'Improved overall user experience through intuitive navigation and clean interface design.',
          'Built a conversion-focused shopping journey to increase customer engagement and support online sales.',
          "Strengthened the brand's digital presence with a professional, scalable, and business-oriented website.",
        ],
      },
      {
        title: 'Skills Demonstrated',
        list: [
          'UI/UX Design',
          'Vibe Coding',
          'AI-Assisted Website Development',
          'Digital Sales Strategy',
          'Digital Marketing',
          'E-commerce Development',
          'Conversion Rate Optimization (CRO)',
          'Customer Journey Optimization',
          'Business Communication',
          'Brand Positioning',
          'Responsive Design',
          'Problem Solving',
        ],
      },
      {
        title: 'Project Information',
        info: [
          { label: 'Project Name', value: 'ChashmeWala' },
          { label: 'Project Type', value: 'E-commerce Website' },
          { label: 'Industry', value: 'Eyewear & Retail' },
          { label: 'Role', value: 'UI/UX Designer • Vibe Coder • Digital Sales & Marketing Associate' },
          { label: 'Status', value: 'Completed', fullWidth: true },
        ],
      },
    ],
  },
  {
    id: 2,
    title: 'Q-Commerce Grocery Platform',
    category: 'Quick Commerce',
    description:
      'Designed and developed a modern Quick Commerce (Q-Commerce) grocery platform inspired by Blinkit and Instamart, offering a fast, intuitive, and mobile-friendly shopping experience for daily essentials.',
    tech: ['Vibe Coding', 'Q-Commerce', 'SEO', 'Cursor AI', 'Vercel'],
    img: '/rajdhani-store-project.png',
    liveUrl: 'https://rajdhani-kirana-store.vercel.app/',
    color: 'yellow',
    caseStudyTitle: 'Rajdhani Store – Quick Commerce Grocery Platform',
    caseStudySections: [
      {
        title: 'Project Overview',
        content:
          'Rajdhani Store is a modern online grocery shopping platform built to simplify the purchase of daily essentials through a clean, responsive, and user-friendly interface. Inspired by leading quick-commerce platforms, the project prioritizes convenience, speed, and customer satisfaction while creating a scalable digital shopping experience.',
      },
      {
        title: 'Project Objective',
        content:
          'The objective was to create a high-performance grocery shopping platform that enables customers to browse products quickly, discover offers effortlessly, and complete purchases with a smooth checkout experience. The platform also supports business growth through conversion-focused design and digital marketing strategies.',
      },
      {
        title: 'My Role',
        content: 'UI/UX Designer • Vibe Coder • Digital Sales & Marketing Associate • SEO Strategist',
        sub: 'Led the complete project lifecycle from planning and user research to execution. Designed an intuitive shopping experience, leveraged AI-powered vibe coding to accelerate development, and aligned the platform with business objectives. Applied digital sales strategies, SEO best practices, and conversion-focused design to improve customer engagement, increase product visibility, and encourage repeat purchases.',
      },
      {
        title: 'Key Features',
        list: [
          'Quick Commerce Grocery Platform',
          'Smart Product Search',
          'Category-Based Navigation',
          'Featured Offers & Discounts',
          'Shopping Cart & Checkout Flow',
          'Mobile-First Responsive Design',
          'Clean & Modern UI/UX',
          'Fast Product Discovery',
          'Conversion-Focused Layout',
          'Promotional Banner Sections',
        ],
      },
      {
        title: 'Design Approach',
        content:
          'Focused on speed, simplicity, and accessibility. The interface was designed to minimize user effort, helping customers find products faster while promoting special offers through clear visual hierarchy and strategic call-to-action buttons. Every element was optimized to improve the shopping journey and maximize conversions.',
      },
      {
        title: 'AI Workflow & Tools Used',
        groups: [
          { label: 'AI Development', items: ['Cursor AI', 'Antigravity', 'Google Firebase Studio'] },
          { label: 'AI Assistants', items: ['ChatGPT', 'Google Gemini', 'Claude AI', 'Perplexity AI'] },
          { label: 'Design & Creative', items: ['Figma AI', 'Canva'] },
          { label: 'SEO & Marketing', items: ['Google Search Console', 'Google Analytics 4', 'Google Keyword Planner', 'SEMrush'] },
          { label: 'Development & Deployment', items: ['GitHub', 'Vercel'] },
        ],
      },
      {
        title: 'SEO Strategy',
        list: [
          'Keyword Research',
          'On-Page SEO',
          'Technical SEO',
          'Local SEO Optimization',
          'Google Search Console Setup',
          'Google Analytics Integration',
          'Performance Optimization',
          'Mobile SEO',
          'Internal Linking Strategy',
        ],
      },
      {
        title: 'Challenges',
        content:
          'The primary challenge was creating a grocery shopping experience that feels fast and effortless while handling multiple product categories, promotional campaigns, and responsive layouts. Another focus was designing a user journey that encourages repeat purchases and improves customer retention.',
      },
      {
        title: 'Solution',
        content:
          'Developed a streamlined shopping experience with intuitive navigation, optimized product organization, AI-assisted development, and conversion-focused UI elements. Combined SEO strategies with digital marketing principles to improve discoverability, customer engagement, and overall business performance.',
      },
      {
        title: 'Results',
        list: [
          'Delivered a responsive quick-commerce grocery platform.',
          'Improved product discovery and navigation.',
          'Built a conversion-focused shopping experience.',
          'Created a scalable foundation for online grocery sales.',
          'Enhanced digital brand visibility and customer engagement.',
        ],
      },
      {
        title: 'Skills Demonstrated',
        list: [
          'UI/UX Design',
          'Vibe Coding',
          'AI-Assisted Development',
          'Digital Sales Strategy',
          'Digital Marketing',
          'SEO Optimization',
          'Quick Commerce (Q-Commerce)',
          'E-commerce Development',
          'Customer Journey Optimization',
          'Conversion Rate Optimization (CRO)',
          'Responsive Web Design',
          'Business Communication',
        ],
      },
      {
        title: 'Project Information',
        info: [
          { label: 'Project Name', value: 'Rajdhani Store' },
          { label: 'Project Type', value: 'Quick Commerce (Q-Commerce) Grocery Platform' },
          { label: 'Industry', value: 'Grocery & Retail' },
          { label: 'Role', value: 'UI/UX Designer • Vibe Coder • Digital Sales & Marketing Associate • SEO Strategist' },
          { label: 'Status', value: 'Completed' },
          {
            label: 'Focus Areas',
            value: 'UI/UX • Quick Commerce • SEO • Digital Sales • Customer Experience • Business Growth • Lead Generation • Conversion Optimization',
            fullWidth: true,
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: 'College Website',
    category: 'Educational Website',
    description:
      'Designed and developed a modern educational website for California Public University with a focus on improving the digital admission experience, showcasing academic programs, and building trust through a professional online presence.',
    tech: ['Vibe Coding', 'SEO', 'Cursor AI', 'Figma', 'Vercel'],
    img: '/cpu-project.png',
    liveUrl: 'https://california-public-university.vercel.app/',
    color: 'dark',
    caseStudyTitle: 'California Public University – Educational Website',
    caseStudySections: [
      {
        title: 'Project Overview',
        content:
          'California Public University is a modern university website created to provide prospective students with an intuitive platform to explore academic programs, certifications, partnerships, and admission information. The project focused on delivering a professional digital experience while supporting student inquiries and online enrollment.',
      },
      {
        title: 'Project Objective',
        content:
          "The objective was to build a responsive, conversion-focused university website that enhances the institution's online presence, simplifies student navigation, improves accessibility to academic information, and supports digital admissions through an engaging user journey.",
      },
      {
        title: 'My Role',
        content: 'UI/UX Designer • Vibe Coder • Digital Sales & Marketing Associate • SEO Strategist',
        sub: "Led the project from planning to deployment by understanding the institution's objectives and target audience. Designed a clean and accessible interface, used AI-assisted vibe coding to accelerate development, implemented SEO best practices for better search visibility, and applied digital marketing strategies to optimize student engagement, inquiry generation, and online application conversions.",
      },
      {
        title: 'Key Features',
        list: [
          'Responsive Educational Website',
          'Online Admission & Application Flow',
          'Academic Programs Showcase',
          'Certification & Library Sections',
          'University Partner Showcase',
          'Contact & Inquiry Forms',
          'Mobile-First Responsive Design',
          'Professional & Trust-Building UI',
          'Fast Loading & User-Friendly Navigation',
        ],
      },
      {
        title: 'Design Approach',
        content:
          "Focused on creating a clean, modern, and trustworthy interface that reflects the university's credibility. Information was structured for easy navigation, allowing students to quickly explore programs, certifications, and admission details while maintaining a professional and accessible user experience.",
      },
      {
        title: 'AI Workflow & Tools Used',
        groups: [
          { label: 'AI Development', items: ['Cursor AI', 'Antigravity', 'Google Firebase Studio'] },
          { label: 'AI Assistants', items: ['ChatGPT', 'Google Gemini', 'Claude AI', 'Perplexity AI'] },
          { label: 'Design & Creative', items: ['Figma AI', 'Canva'] },
          { label: 'SEO & Marketing', items: ['Google Search Console', 'Google Analytics 4', 'Google Keyword Planner', 'SEMrush'] },
          { label: 'Development & Deployment', items: ['GitHub', 'Vercel'] },
        ],
      },
      {
        title: 'SEO Strategy',
        list: [
          'Keyword Research & Planning',
          'On-Page SEO Optimization',
          'Technical SEO Best Practices',
          'Optimized Page Structure',
          'Meta Title & Description Optimization',
          'Internal Linking Strategy',
          'Mobile & Performance Optimization',
          'Search Console Integration',
          'Analytics Tracking Setup',
        ],
      },
      {
        title: 'Challenges',
        content:
          'The challenge was to organize large amounts of academic information into a simple and intuitive interface while ensuring fast performance, strong SEO foundations, and a user journey that encourages prospective students to submit inquiries and complete online applications.',
      },
      {
        title: 'Solution',
        content:
          'Designed a structured navigation system, optimized content hierarchy, implemented SEO-friendly architecture, and created clear calls-to-action for admissions and inquiries. AI-assisted development streamlined the workflow while maintaining a professional and scalable solution.',
      },
      {
        title: 'Results',
        list: [
          'Delivered a modern, fully responsive university website.',
          'Improved navigation and accessibility for prospective students.',
          'Built an SEO-ready foundation for better online visibility.',
          'Enhanced digital branding and credibility.',
          'Created a conversion-focused experience supporting student inquiries and online admissions.',
        ],
      },
      {
        title: 'Skills Demonstrated',
        list: [
          'UI/UX Design',
          'Vibe Coding',
          'AI-Assisted Development',
          'Digital Marketing',
          'Digital Sales Strategy',
          'SEO Optimization',
          'Lead Generation',
          'Conversion Optimization',
          'Educational Website Development',
          'Responsive Design',
          'Business Communication',
          'Brand Positioning',
        ],
      },
      {
        title: 'Project Information',
        info: [
          { label: 'Project Name', value: 'California Public University' },
          { label: 'Project Type', value: 'Educational / University Website' },
          { label: 'Industry', value: 'Education' },
          { label: 'Role', value: 'UI/UX Designer • Vibe Coder • Digital Sales & Marketing Associate • SEO Strategist' },
          { label: 'Status', value: 'Completed' },
          {
            label: 'Focus Areas',
            value: 'Website Design • SEO • Lead Generation • Student Admissions • User Experience • Digital Branding',
            fullWidth: true,
          },
        ],
      },
    ],
  },
];

export const displayProjects = [projects[0], projects[1], projects[2]];

export function CaseStudyPanel({
  project,
  onClose,
  onBack,
}: {
  project: Project;
  onClose: () => void;
  onBack?: () => void;
}) {
  const handleDismiss = onBack ?? onClose;

  return (
    <>
      <div className="shrink-0 flex items-start justify-between gap-4 p-6 md:p-8 border-b border-gray-100 bg-[#FDB515]/10">
        <div className="flex items-start gap-3 min-w-0">
          {onBack && (
            <button
              type="button"
              onClick={onBack}
              className="shrink-0 w-10 h-10 rounded-full bg-[#1E1E1E] text-white flex items-center justify-center hover:bg-[#FDB515] hover:text-[#1E1E1E] transition-colors mt-0.5"
              aria-label="Back to projects list"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
          )}
          <div className="min-w-0">
            <p className="text-xs font-bold uppercase tracking-widest text-[#FDB515] mb-1">Case Study</p>
            <h3 className="text-xl md:text-2xl font-heading font-black text-[#1E1E1E] leading-tight">
              {project.caseStudyTitle}
            </h3>
          </div>
        </div>
        <button
          type="button"
          onClick={handleDismiss}
          className="shrink-0 w-10 h-10 rounded-full bg-[#1E1E1E] text-white flex items-center justify-center hover:bg-[#FDB515] hover:text-[#1E1E1E] transition-colors"
          aria-label={onBack ? 'Close case study' : 'Close case study'}
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="flex-1 min-h-0 overflow-y-auto overscroll-contain p-6 md:p-8 space-y-8">
        {project.caseStudySections.map((section) => (
          <div key={section.title}>
            <h4 className="text-lg font-heading font-black text-[#FDB515] uppercase tracking-wide mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FDB515] shrink-0" />
              {section.title}
            </h4>
            {section.content && <p className="text-gray-600 leading-relaxed">{section.content}</p>}
            {section.sub && <p className="text-gray-500 text-sm leading-relaxed mt-2">{section.sub}</p>}
            {section.list && (
              <ul className="mt-2 space-y-2">
                {section.list.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-gray-600 text-sm md:text-base">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#1E1E1E] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            )}
            {section.groups && (
              <div className="mt-2 space-y-4">
                {section.groups.map((group) => (
                  <div key={group.label}>
                    <p className="text-sm font-bold text-[#1E1E1E] mb-2">{group.label}</p>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1.5 rounded-full text-xs font-bold bg-[#FDB515]/15 text-[#1E1E1E] border border-[#FDB515]/25"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
            {section.info && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                {section.info.map((item) => (
                  <div
                    key={item.label}
                    className={`p-4 rounded-2xl ${
                      item.fullWidth
                        ? 'bg-[#FDB515]/20 border border-[#FDB515]/30 sm:col-span-2'
                        : 'bg-[#1E1E1E] text-white'
                    }`}
                  >
                    <p
                      className={`text-xs font-bold uppercase tracking-widest mb-1 ${
                        item.fullWidth ? 'text-[#1E1E1E]/60' : 'text-[#FDB515]'
                      }`}
                    >
                      {item.label}
                    </p>
                    <p className={`font-bold text-sm ${item.fullWidth ? 'text-[#1E1E1E]' : ''}`}>
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="shrink-0 p-6 md:p-8 border-t border-gray-100 flex flex-wrap gap-3 bg-white/80">
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-[#1E1E1E] text-white px-6 py-3 rounded-full font-bold hover:bg-[#FDB515] hover:text-[#1E1E1E] transition-all"
        >
          <ExternalLink className="w-4 h-4" />
          Visit Live Site
        </a>
        <button
          type="button"
          onClick={handleDismiss}
          className="px-6 py-3 rounded-full font-bold border border-gray-200 text-[#1E1E1E] hover:bg-gray-50 transition-colors"
        >
          {onBack ? 'Back to List' : 'Close'}
        </button>
      </div>
    </>
  );
}

export function CaseStudyModal({
  project,
  open,
  onClose,
}: {
  project: Project | null;
  open: boolean;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {open && project && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#1E1E1E]/60 backdrop-blur-sm z-[100]"
          />
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.98 }}
            transition={{ type: 'spring', damping: 28, stiffness: 300 }}
            className="fixed inset-x-4 top-[5vh] bottom-[5vh] md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:w-full md:max-w-3xl z-[101] flex flex-col rounded-[32px] bg-white/95 backdrop-blur-xl border border-white/60 shadow-2xl overflow-hidden"
          >
            <CaseStudyPanel project={project} onClose={onClose} />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default function WorkSection() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section id="work" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-heading font-black text-[#1E1E1E] uppercase tracking-tight">
            Featured <span className="text-transparent stroke-text bg-clip-text bg-[#FDB515]">Work</span>
          </h2>
        </div>

        <div className="space-y-12 md:space-y-24">
          {displayProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              className={`flex flex-col ${idx % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-16`}
            >
              <div className="w-full md:w-1/2 relative group">
                <div
                  className={`absolute inset-0 translate-x-4 translate-y-4 rounded-[40px] backdrop-blur-xl border border-white/50 transition-transform group-hover:translate-x-6 group-hover:translate-y-6 duration-300 ${
                    project.color === 'dark' ? 'bg-[#1E1E1E]/10' : 'bg-[#FDB515]/20'
                  }`}
                />
                <div className="relative aspect-[16/10] rounded-[40px] overflow-hidden border border-white/60 bg-white/60 backdrop-blur-md shadow-sm z-10 p-2">
                  <div className="relative w-full h-full rounded-[32px] overflow-hidden bg-[#F5F5F5]">
                    <Image
                      src={project.img}
                      alt={project.caseStudyTitle}
                      fill
                      className="object-contain object-center group-hover:scale-[1.02] transition-transform duration-700"
                      priority={idx === 0}
                    />
                  </div>
                  <div className="absolute top-6 left-6 bg-white/60 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-[#1E1E1E] border border-white/40 shadow-sm">
                    {project.category}
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/2 space-y-6">
                <h3 className="text-3xl md:text-5xl font-heading font-bold text-[#1E1E1E] leading-tight">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-4 py-2 bg-white/60 backdrop-blur-md rounded-full text-sm font-bold text-[#1E1E1E] border border-white/50 shadow-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-[#1E1E1E]/90 backdrop-blur-md text-white px-6 py-3 rounded-full font-bold hover:bg-[#FDB515] hover:text-[#1E1E1E] transition-all border border-white/10 shadow-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Visit Live
                  </a>
                  <button
                    type="button"
                    onClick={() => setActiveProject(project)}
                    className="flex items-center justify-center gap-2 bg-white/60 backdrop-blur-md text-[#1E1E1E] border border-white/50 px-6 py-3 rounded-full font-bold hover:bg-[#FDB515]/20 hover:border-[#FDB515]/40 transition-all shadow-sm"
                  >
                    <FileText className="w-4 h-4" />
                    Case Study
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <CaseStudyModal
        project={activeProject}
        open={!!activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
}
