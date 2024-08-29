/* eslint-disable react/no-unescaped-entities */
import Navbar from '../Nav/Navbar';
import '../../app/globals.css';
import '../style.css';
import Image from 'next/image';
import hero from '@/public/Assets/image/badhon252.png';
import Button from '../Button/Button';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="min-h-screen relative flex flex-col  justify-between">
      <Navbar />
      <div id="hero" className="text-center">
        <p className="text-2xl font-bold py-4">Hello 👋</p>
        <h1 className="text-4xl md:text-7xl font-black name ">
          I'm Khalid Hossain.
        </h1>
        <h1 className="sm:text-6xl text-4xl md:text-8xl font-black  title px-6 my-4">
          Frontend Engineer
        </h1>
        {/* Hero image  */}
        <div className="flex justify-center items-center ">
          <p className="slogan text-2xl font-medium ">
            "Turning Ideas into Interactive Reality.💡"
          </p>
          <Image
            src={hero}
            alt="Khalid Hossain - Image"
            className="hover:z-100 hero-img w-full"
          ></Image>
          <p className="slogan text-2xl font-medium ">
            {/* "Turning Passion into Excellence – Your Web Solution Specialist." */}
            "Determined to Deliver, Passionate to Innovate <br /> – Expert in
            Next.js."🚀🚀
          </p>
        </div>
        <div className=" w-full  call-to-action md:absolute md:bottom-20">
          <Button text="You need a Developer" value="out-line" />
          <div className="inline-block primary m-4 px-4 py-2 hover:px-8 hover:me-3 border rounded border-green-900 text-lg font-semibold shadow-2xl hover:shadow-lime-500/20">
            <Link href="#work" className="primary">
              View Works
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
