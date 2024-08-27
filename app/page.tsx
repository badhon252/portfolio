import About from '@/components/About/About';
import Contact from '@/components/Contact/Contact';
import Experience from '@/components/Experience/Experience';
import HeroSection from '@/components/Hero/HeroSection';
import Work from '@/components/Works/Works';

export default function Home() {
  return (
    <main className="mx-auto md:w-4/5 xl:w-3/6 w-3/4 sm:w-11/12">
      <HeroSection />
      <Experience />
      {/*
      <Work />
      <About />
      <Contact /> */}
    </main>
  );
}
