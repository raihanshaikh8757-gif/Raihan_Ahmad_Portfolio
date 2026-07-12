'use client';

import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { X, Quote } from 'lucide-react';
import ModalPortal from '@/components/ui/modal-portal';

const coreExpertise = [
  'Digital Marketing Strategy',
  'Search Engine Optimization (SEO)',
  'Google Analytics',
  'Google Ads',
  'Google Search Console',
  'Meta Business Suite',
  'On-Page SEO',
  'Off-Page SEO',
  'Technical SEO',
  'Local SEO',
  'Keyword Research',
  'Content Strategy',
  'Blog Writing',
  'Email Marketing',
  'Lead Generation',
];

const tools = [
  { name: 'Google Analytics', color: 'bg-[#E37400]' },
  { name: 'Google Ads', color: 'bg-[#4285F4]' },
  { name: 'Google Search Console', color: 'bg-[#458CF5]' },
  { name: 'Google Keyword Planner', color: 'bg-[#34A853]' },
  { name: 'Meta Business Suite', color: 'bg-[#0668E1]' },
  { name: 'Semrush', color: 'bg-[#FF642D]' },
  { name: 'Ubersuggest', color: 'bg-[#F97316]' },
  { name: 'Looker Studio', color: 'bg-[#4285F4]' },
];

export default function DigitalMarketingModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <ModalPortal>
      <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#1E1E1E]/70 backdrop-blur-sm z-[100]"
          />
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.98 }}
            transition={{ type: 'spring', damping: 28, stiffness: 300 }}
            className="fixed inset-x-4 top-[4vh] bottom-[4vh] md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:w-full md:max-w-4xl z-[101] flex flex-col rounded-[32px] bg-white/95 backdrop-blur-xl border border-white/60 shadow-2xl overflow-hidden"
          >
            <div className="shrink-0 flex items-start justify-between gap-4 p-5 md:p-6 border-b border-gray-100 bg-[#1E1E1E]/90 text-white">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#FDB515] mb-1">Table of Content</p>
                <h3 className="text-xl md:text-2xl font-heading font-black">Digital Marketing</h3>
                <p className="text-sm text-white/70 mt-1">Turning Ideas into Digital Growth</p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="shrink-0 w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-[#FDB515] hover:text-[#1E1E1E] transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 min-h-0 overflow-y-auto overscroll-contain">
              <div className="relative w-full aspect-[21/9] min-h-[180px] md:min-h-[220px] bg-[#1E1E1E]">
                <Image
                  src="/digital-marketing-hero.jpg"
                  alt="Digital Marketing"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 896px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E1E]/80 via-[#1E1E1E]/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-8">
                  <h4 className="text-2xl md:text-4xl font-heading font-black text-white uppercase tracking-tight">
                    Digital Marketing
                  </h4>
                  <p className="text-[#FDB515] font-bold text-sm md:text-base mt-1">
                    Turning Ideas into Digital Growth
                  </p>
                </div>
              </div>

              <div className="p-5 md:p-8 space-y-8">
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Digital marketing is more than promoting products or services—it&apos;s about understanding customer
                    needs, creating meaningful online experiences, and helping businesses achieve measurable growth. I
                    combine creativity, strategy, SEO, and data-driven decision-making to build strong digital brands,
                    increase online visibility, and generate quality business opportunities.
                  </p>
                  <p>
                    My focus is on developing effective marketing strategies that improve search rankings, drive
                    targeted traffic, optimize conversions, and strengthen brand presence across digital platforms. By
                    combining marketing knowledge with AI-powered workflows and modern digital tools, I help transform
                    ideas into impactful digital solutions.
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-heading font-black text-[#FDB515] uppercase tracking-wide mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#FDB515] shrink-0" />
                    Professional Experience
                  </h4>
                  <div className="rounded-[24px] bg-[#1E1E1E] text-white p-5 md:p-6 space-y-3">
                    <div>
                      <h5 className="font-heading font-black text-lg md:text-xl">Digital Sales Associate</h5>
                      <p className="text-[#FDB515] text-sm font-bold mt-1">
                        Edunex Services (NTI THIB Consultancy Services LLP)
                      </p>
                    </div>
                    <p className="text-white/80 text-sm md:text-base leading-relaxed">
                      As a Digital Sales Associate, I work closely with businesses to understand their challenges and
                      recommend digital solutions that support long-term growth. My role combines Digital Marketing, SEO,
                      Client Consultation, and Business Development, enabling me to bridge the gap between technology
                      and business needs.
                    </p>
                    <p className="text-white/80 text-sm md:text-base leading-relaxed">
                      I actively communicate with clients, present websites, ERP systems, billing software, and digital
                      marketing solutions, while also contributing to SEO planning, keyword research, content
                      optimization, lead generation, and online growth strategies. My goal is not only to generate leads
                      but also to help businesses build a strong digital presence and increase customer engagement
                      through effective marketing solutions.
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-heading font-black text-[#FDB515] uppercase tracking-wide mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#FDB515] shrink-0" />
                    Core Expertise
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {coreExpertise.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-2 rounded-full text-xs md:text-sm font-bold bg-white border border-gray-200 text-[#1E1E1E] shadow-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-heading font-black text-[#FDB515] uppercase tracking-wide mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#FDB515] shrink-0" />
                    Tools &amp; Platforms
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                    {tools.map((tool) => (
                      <div
                        key={tool.name}
                        className={`rounded-[20px] ${tool.color} p-4 min-h-[88px] flex items-center justify-center text-center shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all border border-white/20`}
                      >
                        <p className="text-xs md:text-sm font-bold text-white leading-tight">{tool.name}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-heading font-black text-[#FDB515] uppercase tracking-wide mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#FDB515] shrink-0" />
                    My Approach
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    I believe successful digital marketing is built on strategy, creativity, analytics, and continuous
                    optimization. Every campaign begins with understanding business goals, identifying the right
                    audience, and creating solutions that deliver measurable results. Whether it&apos;s improving search
                    visibility, generating qualified leads, or increasing brand awareness, I focus on building marketing
                    strategies that create real business impact.
                  </p>
                </div>

                <div className="rounded-[24px] bg-[#FDB515]/10 border border-[#FDB515]/25 p-5 md:p-6">
                  <div className="flex gap-3">
                    <Quote className="w-6 h-6 text-[#FDB515] shrink-0 mt-0.5" />
                    <p className="text-[#1E1E1E] font-medium italic leading-relaxed">
                      &ldquo;Digital marketing is not just about reaching people—it&apos;s about reaching the right
                      people, at the right time, with the right strategy.&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="shrink-0 p-5 md:p-6 border-t border-gray-100 bg-white/80">
              <button
                type="button"
                onClick={onClose}
                className="w-full md:w-auto px-6 py-3 rounded-full font-bold border border-gray-200 text-[#1E1E1E] hover:bg-gray-50 transition-colors"
              >
                Close
              </button>
            </div>
          </motion.div>
        </>
      )}
      </AnimatePresence>
    </ModalPortal>
  );
}
