'use client';

import { motion } from 'motion/react';
import { GraduationCap, Briefcase } from 'lucide-react';

const highlights = [
  "BBA Student", "Digital Marketer", "Digital Sales Associate", 
  "Vibe Coder", "SEO Executive", "Social Media Manager", 
  "Public Speaker", "Event Host", "AI Enthusiast"
];

const education = [
  {
    primary: "SISTEC BHOPAL , MP",
    secondary: "Bachelor of Business Administration",
    detailPrefix: "Batch of ",
    year: "2024-27",
  },
  {
    primary: "BIHAR SCHOOL EXAMINATIONS BOARD",
    detailPrefix: "Passed Class 12th in ",
    year: "2023",
  },
  {
    primary: "Central Board of Secondary Education.",
    detailPrefix: "Passed Class 10th in ",
    year: "2021",
  },
];

const experience = [
  { role: "Process Associate", company: "IGT Solutions" },
  { role: "Digital Sales Associate", company: "EDUNEX Services" },
  { role: "Secretary", company: "Money Movers Club — SISTEC College" },
  { role: "Public Speaking", company: "Events & Workshops" },
];

export default function AboutSection() {
  return (
    <section id="about" className="pt-24 pb-10 relative overflow-hidden">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col md:flex-row items-baseline gap-4 mb-16">
          <h2 className="text-5xl md:text-7xl font-heading font-black text-[#1E1E1E]">ABOUT</h2>
          <div className="h-1 flex-1 bg-gray-100 hidden md:block rounded-full">
            <div className="h-full w-1/4 bg-[#FDB515] rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column: Intro & Highlights */}
          <div className="lg:col-span-5 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="prose prose-lg"
            >
              <h3 className="text-3xl font-heading font-bold mb-4 text-[#1E1E1E]">
                <span className="text-[#FDB515]">&quot;</span> Hello.
              </h3>
              <p className="text-gray-600 leading-relaxed">
                I believe great digital experiences are built where creativity meets strategy. As a digital marketer, SEO specialist, and creative problem solver, I enjoy transforming ideas into impactful brands, websites, and marketing campaigns.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                My work blends business thinking, technical skills, and creative storytelling to deliver results that matter. Whether I&apos;m improving search rankings, designing user-focused web experiences, or developing growth strategies, my goal is simple—create solutions that are innovative, effective, and memorable.
              </p>
            </motion.div>

            <div>
              <h4 className="text-sm font-bold tracking-widest text-gray-400 uppercase mb-4">Core Identities</h4>
              <div className="flex flex-wrap gap-2">
                {highlights.map((item, idx) => (
                  <motion.span 
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="px-4 py-2 bg-white/60 backdrop-blur-md rounded-full text-sm font-bold text-[#1E1E1E] border border-white/50 hover:bg-white hover:shadow-sm transition-all cursor-default"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Experience & Education */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Education — accent bar cards style */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FDB515] flex items-center justify-center text-[#1E1E1E] shadow-sm">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-heading text-[#1E1E1E]">Education</h3>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mt-0.5">Academic Background</p>
                </div>
              </div>

              <div className="space-y-4">
                {education.map((edu, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="group relative flex overflow-hidden rounded-[24px] bg-white/70 backdrop-blur-md border border-white/60 shadow-sm hover:shadow-[6px_6px_0px_#FDB515] hover:-translate-y-1 hover:bg-white transition-all duration-300"
                  >
                    <div className="w-2 shrink-0 bg-[#FDB515] group-hover:w-3 transition-all duration-300" />

                    <div className="flex-1 p-5 relative">
                      <GraduationCap className="absolute right-4 bottom-3 w-12 h-12 text-[#FDB515]/15 group-hover:text-[#FDB515]/30 group-hover:rotate-[-8deg] transition-all duration-300 pointer-events-none" />

                      <div className="font-bold text-[#1E1E1E] text-base md:text-lg leading-snug pr-10">
                        {edu.primary}
                      </div>
                      {edu.secondary && (
                        <div className="text-sm font-semibold text-[#1E1E1E]/75 mt-2">
                          {edu.secondary}
                        </div>
                      )}
                      <div className="text-sm font-medium text-gray-500 mt-1">
                        {edu.detailPrefix}
                        <span className="font-bold text-[#1E1E1E]">{edu.year}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Experience */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FDB515] flex items-center justify-center text-[#1E1E1E] shadow-sm">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-heading text-[#1E1E1E]">Experience</h3>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mt-0.5">Professional Journey</p>
                </div>
              </div>

              <div className="relative rounded-[32px] bg-[#FDB515]/10 backdrop-blur-md border border-[#FDB515]/25 p-4 md:p-5 space-y-3 shadow-sm">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#FDB515]/20 rounded-bl-[48px] rounded-tr-[32px] pointer-events-none" />

                {experience.map((exp, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + idx * 0.08 }}
                    className="group relative flex items-start gap-4 p-4 md:p-5 rounded-[24px] bg-white/80 backdrop-blur-md border border-white/70 hover:bg-white hover:border-[#FDB515]/40 hover:shadow-[4px_4px_0px_#FDB515] hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <div className="w-10 h-10 shrink-0 rounded-xl bg-[#FDB515] flex items-center justify-center font-heading font-black text-[#1E1E1E] text-sm shadow-sm group-hover:scale-105 transition-transform">
                      {String(idx + 1).padStart(2, '0')}
                    </div>

                    <div className="flex-1 min-w-0 pt-0.5">
                      <div className="font-bold text-[#1E1E1E] text-base md:text-lg leading-tight">{exp.role}</div>
                      <div className="text-sm font-semibold text-[#1E1E1E]/65 mt-1.5 flex items-center gap-2">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#FDB515] shrink-0" />
                        {exp.company}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
