'use client';

import { motion } from 'motion/react';
import { 
  Megaphone, Bot, PenTool, Code2, Search, FileText, Share2
} from 'lucide-react';

const skillCategories = [
  {
    title: "Digital Marketing",
    icon: Megaphone,
    skills: ["SEO", "On Page SEO", "Off Page SEO", "Technical SEO", "Local SEO", "Keyword Research", "Content Strategy", "Blog Writing", "Email Marketing", "Lead Generation"],
    logos: [
      { name: "Google Analytics", color: "bg-[#E37400]" },
      { name: "Google Ads", color: "bg-[#4285F4]" },
      { name: "Google Search Console", color: "bg-[#458CF5]" },
      { name: "Meta Suite", color: "bg-[#0668E1]" }
    ]
  },
  {
    title: "AI Tools",
    icon: Bot,
    skills: ["Prompt Engineering", "AI Content Creation", "Automations", "AI Image Generation", "Workflow Optimization"],
    logos: [
      { name: "ChatGPT", color: "bg-[#10A37F]" },
      { name: "Gemini", color: "bg-[#8E75B2]" },
      { name: "Claude", color: "bg-[#D97757]" },
      { name: "Perplexity", color: "bg-[#22B8CD]" },
      { name: "Gamma", color: "bg-[#5B4FE9]" },
      { name: "Microsoft Copilot", color: "bg-[#0078D4]" },
      { name: "Grok AI", color: "bg-[#1E1E1E]" }
    ]
  },
  {
    title: "Vibe Coding",
    icon: Code2,
    skills: ["AI-Assisted Development", "Rapid Prototyping", "Frontend Building", "UI Implementation", "Deployment & Version Control"],
    logos: [
      { name: "Google AI Studio", color: "bg-[#4285F4]" },
      { name: "Figma AI", color: "bg-[#F24E1E]" },
      { name: "GPT", color: "bg-[#10A37F]" },
      { name: "Claude", color: "bg-[#D97757]" },
      { name: "Antigravity", color: "bg-[#6366F1]" },
      { name: "Cursor", color: "bg-[#1E1E1E]" },
      { name: "GitHub", color: "bg-[#24292F]" },
      { name: "Vercel", color: "bg-black" }
    ]
  },
  {
    title: "Design & Media",
    icon: PenTool,
    skills: ["Social Media Graphics", "Video Editing", "Brand Identity", "Presentations", "UI Mockups", "Short-Form Content"],
    logos: [
      { name: "Canva", color: "bg-[#00C4CC]" },
      { name: "Figma", color: "bg-[#F24E1E]" },
      { name: "VN", color: "bg-[#FF6B35]" },
      { name: "InShot", color: "bg-[#FF4081]" },
      { name: "Photo Editor", color: "bg-[#4A90D9]" },
      { name: "CapCut", color: "bg-[#00C1D4]" },
      { name: "Gemini AI", color: "bg-[#8E75B2]" }
    ]
  },
  {
    title: "SEO Tools",
    icon: Search,
    skills: ["Site Auditing", "Competitor Analysis", "Rank Tracking", "Backlink Analysis", "Keyword Planning"],
    logos: [
      { name: "SEMrush", color: "bg-[#FF642D]" },
      { name: "Google Keyword Planner", color: "bg-[#34A853]" },
      { name: "Google Search Console", color: "bg-[#4285F4]" },
      { name: "Ubersuggest", color: "bg-[#F97316]" }
    ]
  },
  {
    title: "Social Media Platforms",
    icon: Share2,
    skills: ["Content Management", "Community Building", "Platform Strategy", "Engagement Growth", "Brand Presence"],
    logos: [
      { name: "Facebook", color: "bg-[#1877F2]" },
      { name: "Instagram", color: "bg-[#E4405F]" },
      { name: "LinkedIn", color: "bg-[#0A66C2]" },
      { name: "X (Twitter)", color: "bg-[#1E1E1E]" },
      { name: "YouTube", color: "bg-[#FF0000]" },
      { name: "Pinterest", color: "bg-[#E60023]" },
      { name: "Threads", color: "bg-[#000000]" }
    ]
  },
  {
    title: "Office Tools",
    icon: FileText,
    skills: ["Data Analysis", "Reporting", "Presentations", "Documentation"],
    logos: [
      { name: "Word", color: "bg-[#2B579A]" },
      { name: "Excel", color: "bg-[#217346]" },
      { name: "PowerPoint", color: "bg-[#B7472A]" }
    ]
  }
];

function SkillCard({ category, idx }: { category: (typeof skillCategories)[number]; idx: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.1 }}
      className="bg-white/40 backdrop-blur-md rounded-[32px] p-6 border border-white/60 hover:bg-white/60 hover:shadow-sm transition-all group"
    >
      <div className="w-14 h-14 bg-white/60 backdrop-blur-md border border-white/80 rounded-2xl flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform group-hover:bg-[#FDB515] group-hover:border-[#FDB515]">
        <category.icon className="w-7 h-7 text-[#1E1E1E]" />
      </div>

      <h3 className="text-2xl font-heading font-bold text-[#1E1E1E] mb-4">
        {category.title}
      </h3>

      <div className="flex flex-wrap gap-2 mb-4">
        {category.logos.map((logo, lIdx) => (
          <span
            key={lIdx}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold ${logo.color} text-white shadow-sm`}
          >
            {logo.name}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill, sIdx) => (
          <span
            key={sIdx}
            className="text-sm font-medium text-gray-600 bg-white px-3 py-1 rounded-full border border-gray-200"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-heading font-black text-[#1E1E1E] uppercase tracking-tight">
            Professional <span className="text-[#FDB515]">Arsenal</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl text-lg">
            A comprehensive toolkit of skills, software, and platforms I use to create, connect, and convert.
          </p>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
            {skillCategories.slice(0, 4).map((category, idx) => (
              <SkillCard key={category.title} category={category} idx={idx} />
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:max-w-[75%] lg:mx-auto lg:w-full items-start">
            {skillCategories.slice(4).map((category, idx) => (
              <SkillCard key={category.title} category={category} idx={idx + 4} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
