'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { navLinks } from '@/lib/navigation';
import { useBodyScrollLock } from '@/hooks/use-body-scroll-lock';

export default function SiteNavbar() {
  const [open, setOpen] = useState(false);

  useBodyScrollLock(open);

  return (
    <div className="relative z-20 px-4 pt-4 md:px-6">
      <header className="container mx-auto flex items-center justify-between rounded-[24px] border border-white/60 bg-white/80 px-4 py-3 shadow-sm backdrop-blur-xl md:px-6">
        <a href="#" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1E1E1E] shadow-md">
            <span className="font-heading text-xl font-black text-[#FDB515]">R</span>
          </div>
          <span className="font-heading text-lg font-black tracking-tighter text-[#1E1E1E] md:text-xl">
            RAIHAN AHMAD
          </span>
        </a>

        <nav className="hidden items-center gap-8 text-xs font-bold uppercase tracking-widest text-gray-500 md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-[#FDB515]">
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-[#1E1E1E] px-5 py-2.5 text-white shadow-sm transition-all hover:bg-[#FDB515] hover:text-[#1E1E1E]"
          >
            Contact Me
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1E1E1E] text-white transition-colors hover:bg-[#FDB515] hover:text-[#1E1E1E] md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </header>

      <AnimatePresence>
        {open && (
          <>
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-[#1E1E1E]/50 backdrop-blur-sm md:hidden"
              aria-label="Close menu"
            />
            <motion.nav
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              className="absolute inset-x-0 top-full z-50 mt-3 rounded-[28px] border border-white/60 bg-white/95 p-5 shadow-2xl backdrop-blur-xl md:hidden"
            >
              <div className="flex flex-col gap-2">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => setOpen(false)}
                    className="rounded-2xl px-4 py-3 text-sm font-bold uppercase tracking-widest text-[#1E1E1E] transition-colors hover:bg-[#FDB515]/15 hover:text-[#FDB515]"
                  >
                    {link.label}
                  </motion.a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="mt-2 rounded-full bg-[#1E1E1E] px-5 py-3 text-center text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-[#FDB515] hover:text-[#1E1E1E]"
                >
                  Contact Me
                </a>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
