'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { FileDown, Mail, Phone, Linkedin } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col pt-6 pb-16 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-[#FDB515] rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
      
      {/* Decorative dots / patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(#1E1E1E_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.03]"></div>

      {/* Header */}
      <header className="container mx-auto px-6 relative z-20 mb-12 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-[#1E1E1E] flex items-center justify-center rounded-xl shadow-md">
            <span className="text-[#FDB515] font-black text-xl font-heading">R</span>
          </div>
          <span className="font-black tracking-tighter text-xl font-heading text-[#1E1E1E]">RAIHAN AHMAD</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-widest text-gray-500">
          <a href="#about" className="hover:text-[#FDB515] transition-colors">About</a>
          <a href="#work" className="hover:text-[#FDB515] transition-colors">Work</a>
          <a href="#contact" className="px-5 py-2.5 bg-[#1E1E1E] text-white rounded-full hover:bg-[#FDB515] hover:text-[#1E1E1E] transition-all shadow-sm">Contact Me</a>
        </nav>
      </header>

      <div className="container mx-auto px-6 relative z-10 flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6 lg:col-span-7"
          >
            <div className="inline-block bg-white/60 backdrop-blur-md text-[#1E1E1E] px-4 py-1.5 rounded-full font-heading font-bold text-xs tracking-widest uppercase border border-white/50 shadow-sm w-max">
              Creative Visual
            </div>
            
            <p className="text-2xl font-bold font-heading text-[#1E1E1E]">Hi, I&apos;m</p>

            <h1 className="text-6xl md:text-[7rem] font-heading font-black leading-[0.85] tracking-tighter text-[#1E1E1E]">
              RAIHAN<br/>
              <span className="text-transparent stroke-text" style={{ WebkitTextStroke: '2px #1E1E1E' }}>
                AHMAD
              </span>
            </h1>
            
            <div className="space-y-4 max-w-xl mt-6">
              <h3 className="text-lg text-[#FDB515] font-bold tracking-wide uppercase text-[12px]">Digital Marketer &bull; Vibe Coder &bull; Digital Sales Associate &bull; Social Media Manager</h3>
              <p className="text-gray-600 leading-relaxed text-lg font-bold">
                Create &bull; Connect &bull; Convert
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                I love creating visuals and digital experiences that don&apos;t just look good - they tell a story and drive results.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-6">
              <a href="/raihan-ahmad-resume.pdf" download="Raihan-Ahmad-Resume.pdf" className="group flex items-center justify-center gap-2 bg-[#FDB515] text-[#1E1E1E] px-8 py-4 rounded-full font-bold hover:bg-[#1E1E1E] hover:text-white transition-all duration-300 shadow-sm">
                <FileDown className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                Download Resume
              </a>
              <a href="https://www.linkedin.com/in/raihan--ahmad" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center gap-2 bg-[#1E1E1E] text-white px-8 py-4 rounded-full font-bold hover:bg-[#FDB515] hover:text-[#1E1E1E] transition-all duration-300 shadow-sm">
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                View LinkedIn
              </a>
            </div>

            {/* Quick Contact Info */}
            <div className="flex flex-wrap gap-4 mt-4">
              <a href="mailto:raihanahmad9693@gmail.com" className="flex items-center gap-3 text-sm font-medium bg-white/60 backdrop-blur-md px-4 py-2.5 rounded-full border border-white/50 shadow-sm hover:bg-white transition-colors cursor-pointer">
                <div className="w-8 h-8 rounded-full bg-[#1E1E1E] flex items-center justify-center">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                raihanahmad9693@gmail.com
              </a>
              <a href="tel:+919693794765" className="flex items-center gap-3 text-sm font-medium bg-white/60 backdrop-blur-md px-4 py-2.5 rounded-full border border-white/50 shadow-sm hover:bg-white transition-colors cursor-pointer">
                <div className="w-8 h-8 rounded-full bg-[#1E1E1E] flex items-center justify-center">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                +91 9693794765
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:col-span-5 w-full max-w-md mx-auto lg:max-w-none"
          >
            {/* Image decorative background */}
            <div className="absolute inset-0 bg-white/40 backdrop-blur-md border border-white/60 rounded-[40px] rotate-3 scale-105 transition-transform duration-500 hover:rotate-6 shadow-sm"></div>
            <div className="absolute inset-0 bg-[#FDB515]/20 backdrop-blur-md border border-white/50 rounded-[40px] -rotate-3 scale-105 transition-transform duration-500 hover:-rotate-6 z-0"></div>
            
            <div className="relative z-10 aspect-[4/5] rounded-[40px] overflow-hidden border border-white/60 shadow-xl bg-white/50 backdrop-blur-xl p-2 group">
              <div className="relative w-full h-full rounded-[32px] overflow-hidden">
                <Image 
                  src="/raihan-profile.png" 
                  alt="Raihan Ahmad" 
                  fill
                  className="object-cover object-top transition-all duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E1E]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              <div className="absolute bottom-6 left-6 right-6 p-5 backdrop-blur-md bg-white/80 rounded-3xl border border-white/60 shadow-sm translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                 <h4 className="text-xl font-black font-heading leading-none mb-1 text-[#1E1E1E]">RAIHAN AHMAD</h4>
                 <p className="text-[#FDB515] font-bold text-[10px] tracking-widest uppercase">Digital Marketer & Vibe Coder</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
