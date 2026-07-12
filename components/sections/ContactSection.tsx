'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import {
  MapPin, Send,
  Linkedin, Facebook, Instagram, Youtube
} from 'lucide-react';

const WHATSAPP_NUMBER = '919693794765';
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

const socials = [
  { icon: Linkedin, name: "LinkedIn", link: "https://www.linkedin.com/in/raihan--ahmad", color: "hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5]" },
  { icon: Facebook, name: "Facebook", link: "https://www.facebook.com/profile.php?id=100026749425746", color: "hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2]" },
  { icon: Instagram, name: "Instagram", link: "https://www.instagram.com/real__raihan?igsh=MTRsc2NuNHBvYWdheg==", color: "hover:bg-[#E4405F] hover:text-white hover:border-[#E4405F]" },
  { icon: Youtube, name: "YouTube", link: "https://youtube.com/@raihan_writes?si=64xzrYfvP_AQJTLL", color: "hover:bg-[#FF0000] hover:text-white hover:border-[#FF0000]" },
];

export default function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const whatsappMessage = [
      'Hi Raihan,',
      '',
      `Name: ${name.trim()}`,
      `Email: ${email.trim()}`,
      `Subject: ${subject.trim()}`,
      '',
      'Message:',
      message.trim(),
    ].join('\n');

    const url = `${WHATSAPP_LINK}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-6xl font-heading font-black text-[#1E1E1E] uppercase tracking-tight mb-4">
            Let&apos;s <span className="text-[#FDB515]">Talk</span>
          </h2>
          <p className="text-gray-500 text-lg">
            Ready to bring your ideas to life or improve your digital presence? Drop a message and let&apos;s create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Info & Socials */}
          <div className="space-y-12">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <motion.a 
                href="mailto:raihanahmad9693@gmail.com"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="block bg-white/60 backdrop-blur-md px-6 py-4 rounded-[32px] border border-white/50 shadow-sm hover:bg-white hover:shadow-md transition-all cursor-pointer"
              >
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-2.5 border border-gray-100 shadow-sm">
                  <GmailIcon className="w-6 h-6" />
                </div>
                <span className="font-bold text-[#1E1E1E] hover:text-[#FDB515] transition-colors break-all">
                  raihanahmad9693@gmail.com
                </span>
              </motion.a>

              <motion.a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="block bg-white/60 backdrop-blur-md px-6 py-4 rounded-[32px] border border-white/50 shadow-sm hover:bg-white hover:shadow-md transition-all cursor-pointer"
              >
                <div className="w-12 h-12 bg-[#25D366] rounded-xl flex items-center justify-center mb-2.5 text-white">
                  <WhatsappIcon className="w-6 h-6" />
                </div>
                <span className="font-bold text-[#1E1E1E] hover:text-[#FDB515] transition-colors">
                  +91 9693794765
                </span>
              </motion.a>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-[#1E1E1E]/90 backdrop-blur-md border border-white/10 text-white p-6 rounded-[32px] sm:col-span-2 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left shadow-sm"
              >
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-[#FDB515]" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-400 text-sm mb-1 uppercase tracking-wider">Location</h4>
                  <p className="font-bold text-lg">Patna, Bihar, India</p>
                </div>
                <div className="sm:ml-auto">
                  <a href="#send-message" className="inline-flex items-center justify-center gap-2 bg-[#FDB515] text-[#1E1E1E] px-6 py-2.5 rounded-full font-bold hover:bg-white transition-colors">
                    Let&apos;s Talk
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Socials */}
            <div>
              <h3 className="text-xl font-heading font-bold mb-6 text-[#1E1E1E]">Connect Globally</h3>
              <div className="flex flex-wrap gap-4">
                {socials.map((social, idx) => (
                  <a 
                    key={idx} 
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-14 h-14 bg-white rounded-2xl flex items-center justify-center border-2 border-gray-200 text-[#1E1E1E] transition-all duration-300 ${social.color} hover:shadow-[4px_4px_0px_currentColor] hover:-translate-y-1`}
                    title={social.name}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Contact Form */}
          <motion.div 
            id="send-message"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/70 backdrop-blur-xl p-8 md:p-10 rounded-[40px] shadow-sm border border-white/60"
          >
            <h3 className="text-2xl font-heading font-bold mb-6 text-[#1E1E1E]">Send a Message</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="contact-name" className="text-sm font-bold text-gray-700">Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                    required
                    className="w-full px-4 py-3 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/50 focus:border-[#FDB515] focus:bg-white/80 outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="contact-email" className="text-sm font-bold text-gray-700">Email</label>
                  <input
                    id="contact-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="john@example.com"
                    required
                    className="w-full px-4 py-3 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/50 focus:border-[#FDB515] focus:bg-white/80 outline-none transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="contact-subject" className="text-sm font-bold text-gray-700">Subject</label>
                <input
                  id="contact-subject"
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Project Inquiry"
                  required
                  className="w-full px-4 py-3 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/50 focus:border-[#FDB515] focus:bg-white/80 outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="contact-message" className="text-sm font-bold text-gray-700">Message</label>
                <textarea
                  id="contact-message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about your project..."
                  required
                  className="w-full px-4 py-3 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/50 focus:border-[#FDB515] focus:bg-white/80 outline-none transition-all resize-none"
                />
              </div>
              <button type="submit" className="w-full bg-[#1E1E1E]/90 backdrop-blur-md border border-white/10 text-white py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-[#FDB515] hover:text-[#1E1E1E] transition-all group shadow-sm">
                Send Message
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
      
      {/* Simple Footer */}
      <div className="border-t border-gray-200 mt-24 pt-8 text-center text-sm font-medium text-gray-400">
        <p>© {new Date().getFullYear()} Raihan Ahmad. Designed with purpose.</p>
      </div>
    </section>
  );
}

function GmailIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" {...props}>
      <path fill="#4caf50" d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"/>
      <path fill="#1e88e5" d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"/>
      <polygon fill="#e53935" points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"/>
      <path fill="#c62828" d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"/>
      <path fill="#fbc02d" d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0C43.076,8,45,9.924,45,12.298z"/>
    </svg>
  )
}

// Custom Whatsapp SVG Icon since Lucide doesn't have it natively in some older versions or for styling specifics
function WhatsappIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
    </svg>
  )
}
