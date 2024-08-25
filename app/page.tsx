import HeroSection from '@/components/Hero/HeroSection';
import Navbar from '@/components/Nav/Navbar';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <Navbar />
      <HeroSection />
    </main>
  );
}
