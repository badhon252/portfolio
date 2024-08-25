import Contact from '@/components/Contact/Contact';
import Experience from '@/components/Experience/Experience';
import HeroSection from '@/components/Hero/HeroSection';
import Navbar from '@/components/Nav/Navbar';
import Work from '@/components/Works/Works';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <Navbar />
      <HeroSection />
      <Experience />
      <Work />
      <Contact />
    </main>
  );
}
