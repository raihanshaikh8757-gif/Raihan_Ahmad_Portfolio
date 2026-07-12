'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { Mic2, X } from 'lucide-react';
import { useBodyScrollLock } from '@/hooks/use-body-scroll-lock';
import ModalPortal from '@/components/ui/modal-portal';

type GalleryItem = {
  id: number;
  img: string;
  title: string;
  subtitle?: string;
  description?: string;
  keyContributions?: string[];
  skills?: string[];
};

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    img: '/gallery/speaking-02.png',
    title: 'Model Mania 2026 – Event Host',
    subtitle: 'Sagar Exuberance 2026 | SISTec',
    description:
      'Had the privilege of hosting Model Mania, one of the flagship events of Sagar Exuberance 2026 at SISTec. This was one of the most memorable and rewarding experiences of my event-hosting journey, where I had the opportunity to lead the stage in front of a large audience comprising students, faculty members, participants, and distinguished guests. As the official host, I was responsible for maintaining the event\'s energy, ensuring smooth stage transitions, introducing participants, coordinating performances, and creating an engaging atmosphere throughout the program.\n\nBeyond hosting, I worked closely with the organizing team to ensure every segment of the event was executed seamlessly and according to schedule. My role required strong communication, quick decision-making, confidence under pressure, and the ability to connect with the audience while maintaining a professional stage presence. Successfully hosting one of the major events of Sagar Exuberance not only strengthened my confidence but also enhanced my leadership, public speaking, and event management capabilities. It remains one of the proudest milestones of my academic and professional journey.',
    keyContributions: [
      'Official Host of Model Mania during Sagar Exuberance 2026.',
      'Successfully managed stage flow, participant introductions, and audience interaction.',
      'Coordinated with organizers and volunteers to ensure smooth event execution.',
      'Maintained audience engagement with confident and energetic anchoring.',
      'Delivered a professional hosting experience while effectively managing live stage situations.',
    ],
    skills: [
      'Event Hosting',
      'Public Speaking',
      'Leadership',
      'Stage Management',
      'Audience Engagement',
      'Professional Communication',
      'Event Coordination',
      'Confidence Building',
    ],
  },
  {
    id: 2,
    img: '/gallery/speaking-09.png',
    title: 'Alumni Talk 2026 – Event Host',
    subtitle: 'SISTec | January 2026',
    description:
      'Had the honor of hosting the Alumni Talk 2026 session at SISTec, an inspiring event where accomplished alumni returned to share their professional journeys, industry experiences, and valuable career insights with current students. As the official event host, I was responsible for welcoming the audience, introducing the guest speakers, managing the overall stage flow, facilitating smooth transitions between sessions, and ensuring continuous audience engagement throughout the program.\n\nHosting this event required professionalism, confidence, and the ability to create a comfortable and interactive environment for both speakers and attendees. I worked closely with faculty members and the organizing team to ensure every session was conducted seamlessly while maintaining the event timeline and enhancing the overall experience for participants. The successful execution of the event earned me heartfelt appreciation from my Head of Department, who recognized my confidence, communication skills, and professional stage management. This experience further strengthened my public speaking abilities and reinforced my passion for event hosting and leadership.',
    keyContributions: [
      'Successfully hosted the complete Alumni Talk 2026 session.',
      'Introduced distinguished alumni and moderated the overall event flow.',
      'Coordinated with faculty members and organizers for seamless execution.',
      'Maintained audience engagement through confident and professional communication.',
      'Received appreciation from the Head of Department for exceptional hosting and stage management.',
    ],
    skills: [
      'Event Hosting',
      'Public Speaking',
      'Professional Communication',
      'Leadership',
      'Stage Management',
      'Audience Engagement',
      'Event Coordination',
      'Confidence Building',
      'Interpersonal Skills',
    ],
  },
  {
    id: 3,
    img: '/gallery/speaking-10.png',
    title: 'World Entrepreneurship Day 2024 – Event Host & Coordinator',
    subtitle: 'SISTec | November 2024',
    description:
      "Proudly hosted and managed the World Entrepreneurship Day 2024 celebration at SISTec alongside my co-host, Saloni Ma'am. From planning the stage flow and introducing distinguished speakers to engaging the audience and ensuring seamless coordination throughout the program, I played a key role in the successful execution of the event. The experience allowed me to demonstrate strong leadership, effective communication, and event management skills while creating an energetic and professional atmosphere for students, faculty members, and guests. It was a valuable opportunity to contribute to an inspiring event that celebrated innovation, entrepreneurship, and young business leaders.",
    keyContributions: [
      'Successfully hosted the complete event with confidence and professionalism.',
      'Coordinated stage operations, speaker transitions, and audience interaction.',
      'Collaborated with the organizing team to ensure smooth event execution.',
      'Maintained audience engagement and managed the event timeline effectively.',
      'Represented the organizing committee as the official stage host.',
    ],
    skills: [
      'Event Hosting',
      'Event Management',
      'Public Speaking',
      'Leadership',
      'Team Collaboration',
      'Stage Coordination',
      'Audience Engagement',
      'Professional Communication',
    ],
  },
  {
    id: 4,
    img: '/gallery/speaking-05.png',
    title: 'Young Munch 2026 – Event Host',
    subtitle: 'Sagar Exuberance 2026 | SISTec',
    description:
      'Had the opportunity to host Young Munch, one of the most energetic and entertaining events of Sagar Exuberance 2026 at SISTec. The event demanded a lively stage presence, spontaneous audience interaction, and a fun atmosphere, where I blended hosting with light humor and shayari to keep the audience engaged throughout the program. From introducing participants to maintaining the event\'s energy, I ensured a smooth and memorable experience for everyone involved.\n\nA memorable highlight of the event was receiving appreciation for my anchoring style from Prince Gaba, a well-known anchor from Bhopal, whose encouraging words further strengthened my confidence and motivated me to continue growing as a host and public speaker.',
    keyContributions: [
      'Hosted one of the flagship entertainment events of Sagar Exuberance 2026.',
      'Engaged the audience through interactive hosting, humor, and shayari.',
      'Managed stage flow, participant introductions, and event coordination.',
      'Maintained a vibrant and energetic atmosphere throughout the event.',
      'Received appreciation from renowned Bhopal anchor Prince Gaba for my stage presence and hosting.',
    ],
    skills: [
      'Event Hosting',
      'Public Speaking',
      'Audience Engagement',
      'Stage Management',
      'Communication',
      'Leadership',
      'Live Entertainment Hosting',
      'Confidence Building',
    ],
  },
  {
    id: 5,
    img: '/gallery/speaking-07.png',
    title: "BBA Freshers' Party 2025 – Event Host",
    subtitle: 'SISTec | 2025',
    description:
      "Had the privilege of hosting the BBA Freshers' Party 2025, a semi-formal event organized to welcome the new batch of students into the department. As the event host, I was responsible for creating a warm and engaging atmosphere, introducing performances, coordinating stage activities, and ensuring a smooth flow throughout the program. By maintaining the perfect balance between professionalism and entertainment, I helped make the event enjoyable and memorable for students, faculty members, and guests while fostering a welcoming environment for the incoming batch.",
    keyContributions: [
      "Hosted the complete Freshers' Party with confidence and professionalism.",
      'Managed stage flow, performances, and audience engagement.',
      'Coordinated with faculty, organizers, and participants for smooth execution.',
      'Created a welcoming and energetic atmosphere for the new students.',
      'Ensured seamless event transitions while maintaining audience interest.',
    ],
    skills: [
      'Event Hosting',
      'Public Speaking',
      'Audience Engagement',
      'Event Coordination',
      'Leadership',
      'Professional Communication',
      'Stage Management',
      'Team Collaboration',
    ],
  },
  {
    id: 6,
    img: '/gallery/speaking-03.png',
    title: 'Sagar Exuberance 2025 – Event Host',
    subtitle: 'SISTec | 2025',
    description:
      "Had the opportunity to host an event during Sagar Exuberance 2025, one of SISTec's flagship annual cultural and technical festivals. As the stage host, I managed the event flow, introduced participants and guests, coordinated stage activities, and kept the audience actively engaged throughout the program. This experience marked an important milestone in my journey as an event host, helping me strengthen my confidence, communication, and leadership skills while performing before a large audience.",
    keyContributions: [
      'Hosted an official event during Sagar Exuberance 2025.',
      'Managed stage operations and coordinated the overall event flow.',
      'Engaged the audience with confident and interactive anchoring.',
      'Worked closely with organizers to ensure smooth event execution.',
      'Enhanced the event experience through professional communication and stage presence.',
    ],
    skills: [
      'Event Hosting',
      'Public Speaking',
      'Stage Management',
      'Audience Engagement',
      'Leadership',
      'Event Coordination',
      'Professional Communication',
      'Team Collaboration',
    ],
  },
  {
    id: 7,
    img: '/gallery/speaking-01.png',
    title: 'Leadership Development Activity – Team Challenge',
    subtitle: 'SISTec | 2025',
    description:
      'Participated in an interactive Leadership Development Activity designed to assess teamwork, communication, problem-solving, and decision-making under pressure. As an active team member, I collaborated with peers, contributed strategic ideas, and helped guide the team toward achieving the objective. The activity enhanced my confidence, adaptability, leadership mindset, and ability to perform effectively in collaborative environments.',
    keyContributions: [
      'Demonstrated leadership and teamwork in a collaborative challenge.',
      'Contributed to strategic decision-making and problem-solving.',
      'Encouraged team coordination and effective communication.',
      'Adapted quickly to changing situations while maintaining focus on the goal.',
      'Strengthened interpersonal and leadership skills through practical learning.',
    ],
    skills: [
      'Leadership',
      'Teamwork',
      'Problem Solving',
      'Decision Making',
      'Communication',
      'Collaboration',
      'Adaptability',
      'Critical Thinking',
    ],
  },
  {
    id: 8,
    img: '/gallery/speaking-06.png',
    title: 'Business Plan Presentation – "My Mentor"',
    subtitle: 'SISTec | BBA Business Idea Pitch Competition',
    description:
      'Presented "My Mentor", an innovative business idea, during a business plan presentation event where participants pitched startup concepts through professional presentations. Along with my team, I developed the business model, market strategy, value proposition, and revenue approach, delivering the complete pitch with confidence. Our project was recognized as one of the best business plans of the event, making it a memorable milestone in my entrepreneurial journey.',
    keyContributions: [
      'Co-developed the complete business concept and strategy for "My Mentor."',
      'Delivered a professional business pitch supported by a structured PowerPoint presentation.',
      'Explained the business model, target audience, revenue strategy, and growth potential.',
      'Demonstrated confidence in presenting ideas and answering questions.',
      'Earned recognition for presenting one of the strongest business plans during the event.',
    ],
    skills: [
      'Business Strategy',
      'Entrepreneurship',
      'Public Speaking',
      'Business Presentation',
      'Startup Pitching',
      'Market Analysis',
      'Leadership',
      'Team Collaboration',
      'Communication',
      'Problem Solving',
    ],
  },
  {
    id: 9,
    img: '/gallery/speaking-04.png',
    title: 'Public Speaking Development Program',
    subtitle: 'SISTec | Communication & Leadership Enhancement Activity',
    description:
      'Participated in a dedicated Public Speaking Development Program designed to strengthen confidence, communication, leadership, and spontaneous thinking in front of an audience. The activity challenged participants to express ideas with clarity, engage listeners, and deliver impactful presentations under real-time conditions. It provided a practical platform to overcome stage fear, improve articulation, and develop the confidence required for professional speaking and leadership roles.\n\nThroughout the session, I actively participated in interactive speaking exercises, demonstrated confident stage presence, and effectively communicated my ideas while maintaining audience engagement. The experience significantly enhanced my ability to think critically, respond spontaneously, and present with professionalism. It became an important milestone in my journey toward becoming a confident speaker, event host, and future business professional.',
    keyContributions: [
      'Actively participated in communication and confidence-building activities.',
      'Delivered structured and engaging presentations before a live audience.',
      'Demonstrated spontaneous thinking and effective verbal communication.',
      'Improved audience interaction through confident body language and stage presence.',
      'Strengthened leadership qualities by expressing ideas with clarity and conviction.',
      'Enhanced professional presentation skills through practical speaking exercises.',
    ],
    skills: [
      'Public Speaking',
      'Leadership',
      'Professional Communication',
      'Presentation Skills',
      'Audience Engagement',
      'Critical Thinking',
      'Confidence Building',
      'Interpersonal Skills',
      'Stage Presence',
      'Team Collaboration',
    ],
  },
  {
    id: 10,
    img: '/gallery/speaking-08.png',
    title: 'Mind2Manifest 2026 – Event Host, Coordinator & Organizer',
    subtitle: 'Money Movers Club | SISTec | 2026',
    description:
      'Successfully hosted, coordinated, and managed Mind2Manifest 2026, a flagship event organized by Money Movers Club at SISTec. As one of the core coordinators and the official event host, I played a leading role in planning, organizing, and executing the entire event from start to finish. My responsibilities included coordinating with the organizing team, managing stage operations, ensuring smooth event flow, introducing participants, engaging the audience, and maintaining a professional yet energetic atmosphere throughout the program.\n\nThe event was designed to inspire creativity, innovation, and strategic thinking among participants while providing an engaging platform to showcase their ideas and talents. Working closely with my team, I ensured that every aspect of the event—from planning and logistics to stage execution and audience interaction—was managed efficiently. This experience further strengthened my leadership, communication, event management, and team coordination skills while demonstrating my ability to successfully lead and execute large-scale student events.',
    keyContributions: [
      'Served as the Official Host of Mind2Manifest 2026.',
      'Coordinated the complete event alongside the Money Movers Club organizing team.',
      'Planned and managed stage operations, event flow, and participant coordination.',
      'Engaged the audience with confident hosting and interactive communication.',
      'Collaborated with faculty members, volunteers, and organizers to ensure seamless execution.',
      'Successfully maintained the event timeline while delivering a professional and energetic stage presence.',
      'Contributed to creating an impactful and memorable experience for participants and attendees.',
    ],
    skills: [
      'Event Hosting',
      'Event Coordination',
      'Leadership',
      'Team Management',
      'Public Speaking',
      'Audience Engagement',
      'Stage Management',
      'Professional Communication',
      'Event Planning',
      'Problem Solving',
      'Collaboration',
      'Time Management',
    ],
  },
];

function GalleryModal({
  item,
  open,
  onClose,
}: {
  item: GalleryItem | null;
  open: boolean;
  onClose: () => void;
}) {
  return (
    <ModalPortal>
      <AnimatePresence>
      {open && item && (
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
            <div className="shrink-0 flex items-start justify-between gap-4 p-5 md:p-6 border-b border-gray-100 bg-[#FDB515]/10">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#FDB515] mb-1">
                  Public Speaking • {String(item.id).padStart(2, '0')}
                </p>
                <h3 className="text-xl md:text-2xl font-heading font-black text-[#1E1E1E]">{item.title}</h3>
                {item.subtitle && (
                  <p className="text-sm font-semibold text-gray-500 mt-1">{item.subtitle}</p>
                )}
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

            <div className="flex-1 min-h-0 overflow-y-auto overscroll-contain p-5 md:p-6 space-y-6">
              <div className="relative w-full min-h-[40vh] md:min-h-[45vh] rounded-2xl overflow-hidden bg-[#F5F5F5] border border-gray-100">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-contain object-center"
                  sizes="(max-width: 768px) 100vw, 896px"
                  priority
                />
              </div>

              {item.description ? (
                <div className="space-y-3">
                  {item.description.split('\n\n').map((paragraph) => (
                    <p key={paragraph.slice(0, 40)} className="text-gray-600 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              ) : (
                <p className="text-gray-400 text-sm italic">Description coming soon...</p>
              )}

              {item.keyContributions && item.keyContributions.length > 0 && (
                <div>
                  <h4 className="text-sm font-heading font-black text-[#FDB515] uppercase tracking-wide mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#FDB515] shrink-0" />
                    Key Contributions
                  </h4>
                  <ul className="space-y-2">
                    {item.keyContributions.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-gray-600 text-sm md:text-base">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#1E1E1E] shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {item.skills && item.skills.length > 0 && (
                <div>
                  <h4 className="text-sm font-heading font-black text-[#FDB515] uppercase tracking-wide mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#FDB515] shrink-0" />
                    Skills Demonstrated
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 rounded-full text-xs font-bold bg-[#FDB515]/15 text-[#1E1E1E] border border-[#FDB515]/25"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
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

export default function GallerySection() {
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  useBodyScrollLock(!!activeItem);

  return (
    <section id="gallery" className="py-24 bg-[#1E1E1E]/95 backdrop-blur-xl text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#FDB515]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FDB515]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-[#FDB515]/15 border border-[#FDB515]/30 text-[#FDB515] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              <Mic2 className="w-3.5 h-3.5" />
              Public Speaking Experience
            </div>
            <h2 className="text-4xl md:text-6xl font-heading font-black uppercase tracking-tight">
              Life In <span className="text-[#FDB515]">Frames</span>
            </h2>
            <p className="text-gray-400 mt-4 text-lg leading-relaxed">
              Real moments from seminars, workshops, campus events, and stage presentations — capturing confidence, communication, and leadership in action.
            </p>
          </div>

          <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-5 py-4">
            <div className="w-12 h-12 rounded-xl bg-[#FDB515] flex items-center justify-center text-[#1E1E1E] font-heading font-black text-xl">
              10+
            </div>
            <div>
              <p className="font-bold text-white">Speaking Engagements</p>
              <p className="text-sm text-gray-400">Events & Workshops</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-5 w-full">
          {galleryItems.map((item, idx) => (
            <motion.button
              key={item.id}
              type="button"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.04 }}
              onClick={() => setActiveItem(item)}
              className="group text-left w-full cursor-pointer"
            >
              <div className="bg-white p-2.5 pb-4 rounded-sm shadow-[4px_4px_0px_#FDB515] hover:shadow-[8px_8px_0px_#FDB515] hover:-translate-y-1 transition-all duration-300">
                <div className="relative w-full h-40 sm:h-48 md:h-52 lg:h-60 overflow-hidden bg-[#F5F5F5]">
                  <Image
                    src={item.img}
                    alt={`Public speaking - ${item.title}`}
                    fill
                    className="object-contain object-center group-hover:scale-[1.03] transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, 20vw"
                  />
                </div>

                <div className="mt-2.5 px-0.5 flex items-center justify-between gap-2">
                  <p className="text-[#1E1E1E] font-heading font-bold text-xs md:text-sm leading-tight line-clamp-2">
                    {item.title}
                  </p>
                  <span className="shrink-0 text-[10px] font-bold text-[#FDB515]">
                    {String(item.id).padStart(2, '0')}
                  </span>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <GalleryModal item={activeItem} open={!!activeItem} onClose={() => setActiveItem(null)} />
    </section>
  );
}
