import Project from './Project';
// product page images
import p01 from '@/public/Prisma-store/p01.png';
//icons
import ireact from '@/public/Assets/image/react.svg';
import inext from '@/public/Assets/image/Nextjs.svg';
import itypescript from '@/public/Assets/image/typescript.svg';
import igit from '@/public/Assets/image/git.svg';
import iprisma from '@/public/Assets/image/prisma.svg';

export default function Work() {
  const icons = [ireact, inext, itypescript, igit, iprisma];
  return (
    <section className="min-h-screen" id="work">
      <div className="work-title my-16">
        <h1 className="text-8xl font-black">Works</h1>
        <h3 className="font-medium">Project | Collaboration | Exploration</h3>
      </div>
      <Project
        img={p01}
        title="Prisma-Store"
        desc="Prisma Store eCommerce Store & Web Content management Application (CMA). Complete integreted Stripe payment system. Prisma Store eCommerce Store & Web Content management Application (CMA). Complete integreted Stripe payment system."
        icon={icons}
      />
    </section>
  );
}
