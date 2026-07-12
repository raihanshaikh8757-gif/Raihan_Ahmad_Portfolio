import SiteNavbar from '@/components/layout/SiteNavbar';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import TableOfContentSection from '@/components/sections/TableOfContentSection';
import SkillsSection from '@/components/sections/SkillsSection';
import GallerySection from '@/components/sections/GallerySection';
import WorkSection from '@/components/sections/WorkSection';
import ContactSection from '@/components/sections/ContactSection';
import FooterSection from '@/components/sections/FooterSection';

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col">
        <SiteNavbar />
        <HeroSection />
        <AboutSection />
        <TableOfContentSection />
        <SkillsSection />
        <GallerySection />
        <WorkSection />
        <ContactSection />
      </main>
      <FooterSection />
    </>
  );
}
