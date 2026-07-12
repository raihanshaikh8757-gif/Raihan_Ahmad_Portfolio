'use client';

import { Linkedin, Facebook, Instagram, Youtube, Mail, Phone, ArrowUp } from 'lucide-react';
import { siteConfig } from '@/lib/site-config';
import { navLinks } from '@/lib/navigation';

const socials = [
  { icon: Linkedin, name: 'LinkedIn', link: siteConfig.social.linkedin },
  { icon: Facebook, name: 'Facebook', link: 'https://www.facebook.com/profile.php?id=100026749425746' },
  { icon: Instagram, name: 'Instagram', link: siteConfig.social.instagram },
  { icon: Youtube, name: 'YouTube', link: siteConfig.social.youtube },
];

export default function FooterSection() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#1E1E1E] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#FDB515_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.04]" />

      <div className="container relative z-10 mx-auto px-5 py-8 md:px-6 md:py-10">
        <div className="grid grid-cols-2 gap-x-3 gap-y-5 md:grid-cols-4 md:gap-x-4 md:gap-y-6">
          <div className="col-span-2 md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#FDB515] shadow-md">
                <span className="font-heading text-lg font-black text-[#1E1E1E]">R</span>
              </div>
              <span className="font-heading text-lg font-black tracking-tighter md:text-xl">RAIHAN AHMAD</span>
            </div>
          </div>

          <div>
            <h3 className="mb-1.5 text-[10px] font-bold uppercase tracking-widest text-[#FDB515] md:text-xs">
              Quick Links
            </h3>
            <ul className="grid w-max grid-cols-2 gap-x-2 gap-y-0.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-[11px] text-white/70 transition-colors hover:text-[#FDB515] md:text-xs">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-1.5 text-[10px] font-bold uppercase tracking-widest text-[#FDB515] md:text-xs">
              Contact
            </h3>
            <div className="space-y-1.5 text-xs text-white/70 md:text-sm">
              <a
                href={`mailto:${siteConfig.author.email}`}
                className="flex items-center gap-1.5 transition-colors hover:text-[#FDB515]"
              >
                <Mail className="h-3.5 w-3.5 shrink-0 text-[#FDB515]" />
                <span className="truncate">{siteConfig.author.email}</span>
              </a>
              <a href="tel:+919693794765" className="flex items-center gap-1.5 transition-colors hover:text-[#FDB515]">
                <Phone className="h-3.5 w-3.5 shrink-0 text-[#FDB515]" />
                +91 9693794765
              </a>
            </div>

            <div className="mt-2 flex flex-wrap gap-1.5 md:mt-3">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all hover:border-[#FDB515] hover:bg-[#FDB515] hover:text-[#1E1E1E] md:h-9 md:w-9"
                >
                  <social.icon className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-4 flex flex-col items-center justify-between gap-2 border-t border-white/10 pt-3 md:mt-5 md:flex-row md:pt-4">
          <p className="font-heading text-sm font-black uppercase tracking-[0.2em] text-[#FDB515] md:text-base">
            THANKYOU
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white/70 transition-all hover:border-[#FDB515] hover:text-[#FDB515] md:px-4 md:py-2 md:text-xs"
          >
            <ArrowUp className="h-3.5 w-3.5" />
            Back to Top
          </a>
        </div>
      </div>
    </footer>
  );
}
