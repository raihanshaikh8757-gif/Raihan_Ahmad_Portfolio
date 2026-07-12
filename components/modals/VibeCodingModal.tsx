'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { X, FileText, ChevronRight } from 'lucide-react';
import { CaseStudyPanel, displayProjects, type Project } from '@/components/sections/WorkSection';
import ModalPortal from '@/components/ui/modal-portal';

export default function VibeCodingModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [selected, setSelected] = useState<Project | null>(null);
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
            className="fixed inset-x-4 top-[8vh] bottom-[8vh] md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:w-full md:max-w-3xl z-[101] flex flex-col rounded-[32px] bg-white/95 backdrop-blur-xl border border-white/60 shadow-2xl overflow-hidden"
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
                  <p className="text-xs font-bold uppercase tracking-widest text-[#FDB515] mb-1">Vibe Coding</p>
                  <h3 className="text-xl md:text-2xl font-heading font-black text-[#1E1E1E]">Featured Projects</h3>
                  <p className="text-sm text-gray-500 mt-1">Click any project to open the full case study</p>
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
                {displayProjects.map((project) => (
                  <button
                    key={project.id}
                    type="button"
                    onClick={() => setSelected(project)}
                    className="w-full text-left group flex flex-col sm:flex-row gap-4 p-4 rounded-[24px] bg-white border border-gray-100 hover:border-[#FDB515]/40 hover:shadow-md hover:bg-[#FDB515]/5 transition-all"
                  >
                    <div className="relative w-full sm:w-40 aspect-[16/10] rounded-2xl overflow-hidden bg-[#F5F5F5] border border-gray-100 shrink-0">
                      <Image
                        src={project.img}
                        alt={project.caseStudyTitle}
                        fill
                        className="object-contain object-center"
                        sizes="160px"
                      />
                    </div>
                    <div className="flex-1 min-w-0 flex flex-col justify-center">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#FDB515] mb-1">
                        {project.category}
                      </span>
                      <h4 className="font-heading font-black text-[#1E1E1E] text-base md:text-lg leading-tight mb-1">
                        {project.caseStudyTitle}
                      </h4>
                      <p className="text-sm text-gray-500 line-clamp-2">{project.description}</p>
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-[#1E1E1E] mt-3 group-hover:text-[#FDB515] transition-colors">
                        <FileText className="w-3.5 h-3.5" />
                        Open Case Study
                        <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Case study — overlays list without unmounting it */}
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
                  <CaseStudyPanel
                    project={selected}
                    onClose={onClose}
                    onBack={() => setSelected(null)}
                  />
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
