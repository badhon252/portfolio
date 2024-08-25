import HeroSection from '@/components/Hero/HeroSection';
import Navbar from '@/components/Nav/Navbar';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-24">
      <Navbar />
      <HeroSection />
    </main>
  );
}
