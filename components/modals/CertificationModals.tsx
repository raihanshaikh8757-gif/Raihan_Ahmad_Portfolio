'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { X, FileText, ChevronRight, Award, ArrowLeft } from 'lucide-react';
import { certifications, type Certification } from '@/data/certifications';
import ModalPortal from '@/components/ui/modal-portal';

export default function CertificationsModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [selected, setSelected] = useState<Certification | null>(null);
  const listScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) setSelected(null);
  }, [open]);

  const handleBackdropClick = () => {
    if (selected) {
      setSelected(null);
      return;
    }
    onClose();
  };

  return (
    <ModalPortal>
      <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleBackdropClick}
            className="fixed inset-0 bg-[#1E1E1E]/70 backdrop-blur-sm z-[100]"
          />
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.98 }}
            transition={{ type: 'spring', damping: 28, stiffness: 300 }}
            className="fixed inset-x-3 top-[4vh] bottom-[4vh] md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:w-full md:max-w-4xl z-[101] flex flex-col rounded-[32px] bg-white/95 backdrop-blur-xl border border-white/60 shadow-2xl overflow-hidden"
          >
            {/* List view — stays mounted so scroll position is preserved */}
            <div
              className={`flex flex-col flex-1 min-h-0 ${
                selected ? 'invisible pointer-events-none' : ''
              }`}
              aria-hidden={!!selected}
            >
              <div className="shrink-0 flex items-start justify-between gap-4 p-5 md:p-6 border-b border-gray-100 bg-[#FDB515]/10">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#FDB515] mb-1">Certifications</p>
                  <h3 className="text-xl md:text-2xl font-heading font-black text-[#1E1E1E]">
                    Credentials & Achievements
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">Click any certification to view full details</p>
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  className="shrink-0 w-10 h-10 rounded-full bg-[#1E1E1E] text-white flex items-center justify-center hover:bg-[#FDB515] hover:text-[#1E1E1E] transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div ref={listScrollRef} className="flex-1 min-h-0 overflow-y-auto overscroll-contain p-5 md:p-6 space-y-4">
                {certifications.map((cert) => (
                  <button
                    key={cert.id}
                    type="button"
                    onClick={() => setSelected(cert)}
                    className="w-full text-left group flex flex-col sm:flex-row gap-4 p-4 rounded-[24px] bg-white border border-gray-100 hover:border-[#FDB515]/40 hover:shadow-md hover:bg-[#FDB515]/5 transition-all"
                  >
                    <div className="relative w-full sm:w-36 aspect-[4/3] rounded-2xl overflow-hidden bg-[#F5F5F5] border border-gray-100 shrink-0">
                      <Image
                        src={cert.img}
                        alt={cert.title}
                        fill
                        className="object-contain object-center p-1"
                        sizes="144px"
                      />
                    </div>
                    <div className="flex-1 min-w-0 flex flex-col justify-center">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#FDB515] mb-1">
                        {cert.category}
                      </span>
                      <h4 className="font-heading font-black text-[#1E1E1E] text-base md:text-lg leading-tight mb-1">
                        {cert.title}
                      </h4>
                      <p className="text-sm text-gray-500 line-clamp-2">{cert.overview}</p>
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-[#1E1E1E] mt-3 group-hover:text-[#FDB515] transition-colors">
                        <FileText className="w-3.5 h-3.5" />
                        View Full Details
                        <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Detail view — overlays list without unmounting it */}
            <AnimatePresence>
              {selected && (
                <motion.div
                  key={selected.id}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 24 }}
                  transition={{ type: 'spring', damping: 28, stiffness: 300 }}
                  className="absolute inset-0 z-10 flex flex-col bg-white/95 backdrop-blur-xl"
                >
                  <div className="shrink-0 flex items-start justify-between gap-4 p-5 md:p-6 border-b border-gray-100 bg-[#FDB515]/10">
                    <div className="flex items-start gap-3 min-w-0">
                      <button
                        type="button"
                        onClick={() => setSelected(null)}
                        className="shrink-0 w-10 h-10 rounded-full bg-[#1E1E1E] text-white flex items-center justify-center hover:bg-[#FDB515] hover:text-[#1E1E1E] transition-colors mt-0.5"
                        aria-label="Back to certifications list"
                      >
                        <ArrowLeft className="w-5 h-5" />
                      </button>
                      <div className="min-w-0">
                        <p className="text-xs font-bold uppercase tracking-widest text-[#FDB515] mb-1 flex items-center gap-1.5">
                          <Award className="w-3.5 h-3.5 shrink-0" />
                          {selected.category}
                        </p>
                        <h3 className="text-lg md:text-xl font-heading font-black text-[#1E1E1E] leading-tight">
                          {selected.title}
                        </h3>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => setSelected(null)}
                      className="shrink-0 w-10 h-10 rounded-full bg-[#1E1E1E] text-white flex items-center justify-center hover:bg-[#FDB515] hover:text-[#1E1E1E] transition-colors"
                      aria-label="Close certification details"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="flex-1 min-h-0 overflow-y-auto overscroll-contain">
                    <div className="relative w-full bg-[#F5F5F5] border-b border-gray-100 p-2 md:p-3">
                      <div className="relative w-full aspect-[4/3] md:aspect-[16/11]">
                        <Image
                          src={selected.img}
                          alt={selected.title}
                          fill
                          className="object-contain object-center"
                          sizes="(max-width: 768px) 100vw, 768px"
                          priority
                        />
                      </div>
                    </div>

                    <div className="p-5 md:p-8 space-y-8">
                      <div>
                        <h4 className="text-sm font-heading font-black text-[#FDB515] uppercase tracking-wide mb-3 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#FDB515] shrink-0" />
                          Overview
                        </h4>
                        <p className="text-gray-600 leading-relaxed">{selected.overview}</p>
                      </div>

                      <div>
                        <h4 className="text-sm font-heading font-black text-[#FDB515] uppercase tracking-wide mb-4 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#FDB515] shrink-0" />
                          {selected.detailsTitle}
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {selected.details.map((item) => (
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
                              <p className={`font-bold text-sm break-words ${item.fullWidth ? 'text-[#1E1E1E]' : ''}`}>
                                {item.value.startsWith('http') ? (
                                  <a
                                    href={item.value}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#FDB515] hover:underline"
                                  >
                                    {item.value}
                                  </a>
                                ) : (
                                  item.value
                                )}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-heading font-black text-[#FDB515] uppercase tracking-wide mb-4 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#FDB515] shrink-0" />
                          {selected.skillsTitle}
                        </h4>
                        <ul className="space-y-3">
                          {selected.skills.map((skill) => (
                            <li key={skill} className="flex items-start gap-2 text-gray-600 text-sm md:text-base">
                              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#1E1E1E] shrink-0" />
                              {skill}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="shrink-0 p-5 md:p-6 border-t border-gray-100 bg-white/80">
                    <button
                      type="button"
                      onClick={() => setSelected(null)}
                      className="w-full md:w-auto px-6 py-3 rounded-full font-bold border border-gray-200 text-[#1E1E1E] hover:bg-gray-50 transition-colors"
                    >
                      Back to List
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </>
      )}
      </AnimatePresence>
    </ModalPortal>
  );
}
