'use client';

import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { X, Quote } from 'lucide-react';
import ModalPortal from '@/components/ui/modal-portal';

const coreExpertise = [
  'Social Media Strategy',
  'Content Planning',
  'Content Calendar Management',
  'Brand Management',
  'Instagram Marketing',
  'Facebook Marketing',
  'LinkedIn Marketing',
  'Social Media Campaigns',
  'Audience Engagement',
  'Community Management',
  'Performance Analytics',
  'Creative Content Design',
];

const tools = [
  { name: 'Meta Business Suite', color: 'bg-[#0668E1]' },
  { name: 'Instagram', color: 'bg-[#E4405F]' },
  { name: 'Facebook', color: 'bg-[#1877F2]' },
  { name: 'LinkedIn', color: 'bg-[#0A66C2]' },
  { name: 'Canva', color: 'bg-[#00C4CC]' },
];

export default function SocialMediaModal({
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
                <h3 className="text-xl md:text-2xl font-heading font-black">Social Media Management</h3>
                <p className="text-sm text-white/70 mt-1">Building Brands Through Strategic Social Media</p>
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
              <div className="relative w-full aspect-[21/9] min-h-[180px] md:min-h-[240px] bg-[#1E1E1E]">
                <Image
                  src="/social-media-hero.jpg"
                  alt="Social Media Management"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 896px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E1E]/80 via-[#1E1E1E]/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-8">
                  <h4 className="text-2xl md:text-4xl font-heading font-black text-white uppercase tracking-tight">
                    Social Media Management
                  </h4>
                  <p className="text-[#FDB515] font-bold text-sm md:text-base mt-1">
                    Building Brands Through Strategic Social Media
                  </p>
                </div>
              </div>

              <div className="p-5 md:p-8 space-y-8">
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Social media is more than posting content—it&apos;s about creating meaningful connections,
                    strengthening brand identity, and engaging the right audience. I focus on developing content
                    strategies that increase visibility, improve engagement, and support business growth across multiple
                    social media platforms.
                  </p>
                  <p>
                    From content planning and creative design to campaign management, audience engagement, and
                    performance tracking, I help businesses establish a strong digital presence while maintaining
                    consistent brand communication.
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-heading font-black text-[#FDB515] uppercase tracking-wide mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#FDB515] shrink-0" />
                    Professional Experience
                  </h4>
                  <div className="rounded-[24px] bg-[#1E1E1E] text-white p-5 md:p-6 space-y-3">
                    <div>
                      <h5 className="font-heading font-black text-lg md:text-xl">Social Media Management</h5>
                      <p className="text-[#FDB515] text-sm font-bold mt-1">
                        Edunex Services (NTI THIB Consultancy Services LLP)
                      </p>
                    </div>
                    <p className="text-white/80 text-sm md:text-base leading-relaxed">
                      At Edunex Services, I contribute to managing the company&apos;s social media presence by creating
                      engaging content, designing promotional creatives, planning campaigns, and maintaining consistent
                      branding across digital platforms. I also assist in audience engagement, campaign optimization, and
                      performance analysis to improve reach, visibility, and business growth.
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
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
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
                    I believe successful social media management is built on consistency, creativity, and audience
                    understanding. Every campaign starts with a clear objective, followed by engaging content,
                    strategic execution, and continuous performance analysis to strengthen brand presence and build
                    lasting customer relationships.
                  </p>
                </div>

                <div className="rounded-[24px] bg-[#FDB515]/10 border border-[#FDB515]/25 p-5 md:p-6">
                  <div className="flex gap-3">
                    <Quote className="w-6 h-6 text-[#FDB515] shrink-0 mt-0.5" />
                    <p className="text-[#1E1E1E] font-medium italic leading-relaxed">
                      &ldquo;Social media is where brands earn attention, build trust, and create lasting
                      relationships.&rdquo;
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
