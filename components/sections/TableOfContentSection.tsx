'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import {
  Code2, Megaphone, Search, PenTool, Video,
  Bot, Share2, Award,
} from 'lucide-react';
import VibeCodingModal from '@/components/modals/VibeCodingModal';
import DigitalMarketingModal from '@/components/modals/DigitalMarketingModal';
import SeoModal from '@/components/modals/SeoModal';
import GraphicDesignModal from '@/components/modals/GraphicDesignModal';
import VideoEditingModal from '@/components/modals/VideoEditingModal';
import AiToolsModal from '@/components/modals/AiToolsModal';
import SocialMediaModal from '@/components/modals/SocialMediaModal';
import CertificationsModal from '@/components/modals/CertificationModals';
import { useBodyScrollLock } from '@/hooks/use-body-scroll-lock';

type ContentAction = 'vibe-coding' | 'digital-marketing' | 'seo' | 'graphic-design' | 'video-editing' | 'ai-tools' | 'social-media' | 'certifications';

const contents: {
  title: string;
  icon: typeof Code2;
  color: string;
  text: string;
  action?: ContentAction;
}[] = [
  { title: 'Vibe Coding', icon: Code2, color: 'bg-[#FDB515]/90', text: 'text-[#1E1E1E]', action: 'vibe-coding' },
  { title: 'Digital Marketing', icon: Megaphone, color: 'bg-[#1E1E1E]/90', text: 'text-white', action: 'digital-marketing' },
  { title: 'SEO', icon: Search, color: 'bg-white/60', text: 'text-[#1E1E1E]', action: 'seo' },
  { title: 'Graphic Design', icon: PenTool, color: 'bg-white/40', text: 'text-[#1E1E1E]', action: 'graphic-design' },
  { title: 'Video Editing', icon: Video, color: 'bg-[#FDB515]/90', text: 'text-[#1E1E1E]', action: 'video-editing' },
  { title: 'AI Tools', icon: Bot, color: 'bg-[#1E1E1E]/90', text: 'text-white', action: 'ai-tools' },
  { title: 'Social Media', icon: Share2, color: 'bg-white/60', text: 'text-[#1E1E1E]', action: 'social-media' },
  { title: 'Certifications', icon: Award, color: 'bg-[#FDB515]/90', text: 'text-[#1E1E1E]', action: 'certifications' },
];

export default function TableOfContentSection() {
  const [vibeCodingOpen, setVibeCodingOpen] = useState(false);
  const [digitalMarketingOpen, setDigitalMarketingOpen] = useState(false);
  const [seoOpen, setSeoOpen] = useState(false);
  const [graphicDesignOpen, setGraphicDesignOpen] = useState(false);
  const [videoEditingOpen, setVideoEditingOpen] = useState(false);
  const [aiToolsOpen, setAiToolsOpen] = useState(false);
  const [socialMediaOpen, setSocialMediaOpen] = useState(false);
  const [certificationsOpen, setCertificationsOpen] = useState(false);

  useBodyScrollLock(
    vibeCodingOpen ||
      digitalMarketingOpen ||
      seoOpen ||
      graphicDesignOpen ||
      videoEditingOpen ||
      aiToolsOpen ||
      socialMediaOpen ||
      certificationsOpen
  );

  return (
    <section className="pt-10 pb-24 overflow-hidden relative">
      <div className="container mx-auto px-6">

        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-6"
          >
            <span className="font-heading font-black text-2xl text-[#1E1E1E]">∞</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-heading font-black text-[#1E1E1E] uppercase tracking-tight">
            Table of <span className="text-transparent stroke-text bg-clip-text bg-[#FDB515]">Content</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {contents.map((item, idx) => (
            <motion.button
              key={item.title}
              type="button"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ y: -5, scale: 1.02 }}
              onClick={() => {
                if (item.action === 'vibe-coding') setVibeCodingOpen(true);
                if (item.action === 'digital-marketing') setDigitalMarketingOpen(true);
                if (item.action === 'seo') setSeoOpen(true);
                if (item.action === 'graphic-design') setGraphicDesignOpen(true);
                if (item.action === 'video-editing') setVideoEditingOpen(true);
                if (item.action === 'ai-tools') setAiToolsOpen(true);
                if (item.action === 'social-media') setSocialMediaOpen(true);
                if (item.action === 'certifications') setCertificationsOpen(true);
              }}
              className={`group relative p-6 md:p-8 rounded-[32px] ${item.color} ${item.text} backdrop-blur-md border border-white/50 hover:shadow-md transition-all duration-300 flex flex-col items-center justify-center text-center gap-4 cursor-pointer hover:-translate-y-1`}
            >
              <item.icon className="w-10 h-10 md:w-12 md:h-12 opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-300" />
              <h3 className="font-bold font-heading text-sm md:text-base leading-tight">
                {item.title}
              </h3>
            </motion.button>
          ))}
        </div>

      </div>

      <VibeCodingModal
        open={vibeCodingOpen}
        onClose={() => setVibeCodingOpen(false)}
      />

      <DigitalMarketingModal
        open={digitalMarketingOpen}
        onClose={() => setDigitalMarketingOpen(false)}
      />

      <SeoModal
        open={seoOpen}
        onClose={() => setSeoOpen(false)}
      />

      <GraphicDesignModal
        open={graphicDesignOpen}
        onClose={() => setGraphicDesignOpen(false)}
      />

      <VideoEditingModal
        open={videoEditingOpen}
        onClose={() => setVideoEditingOpen(false)}
      />

      <AiToolsModal
        open={aiToolsOpen}
        onClose={() => setAiToolsOpen(false)}
      />

      <SocialMediaModal
        open={socialMediaOpen}
        onClose={() => setSocialMediaOpen(false)}
      />

      <CertificationsModal
        open={certificationsOpen}
        onClose={() => setCertificationsOpen(false)}
      />
    </section>
  );
}
