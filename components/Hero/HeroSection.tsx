/* eslint-disable react/no-unescaped-entities */
import Navbar from '../Nav/Navbar';
import '../../app/globals.css';
import '../style.css';
import Image from 'next/image';
import hero from '@/public/Assets/image/badhon-bg.png';
import Button from '../Button/Button';

export default function HeroSection() {
  return (
    <section className="min-h-screen relative flex flex-col ">
      <Navbar />
      <div id="hero" className="text-center">
        <p className="text-2xl font-bold py-4">Hello 👋</p>
        <h1 className="text-4xl md:text-7xl font-black name ">
          I'm Khalid Hossain.
        </h1>
        <h1 className="sm:text-6xl text-4xl md:text-8xl font-black title px-6 my-4">
          Frontend Engineer
        </h1>
        {/* Hero image  */}
        <div className="flex justify-center items-center">
          <p className="slogan text-2xl font-semibold">
            "Turning Ideas into Interactive Reality.💡"
          </p>
          <Image
            src={hero}
            alt="Khalid Hossain - Image"
            className="w-11/12 mx-auto hover:z-100 hero-img"
          ></Image>
          <p className="slogan text-2xl font-semibold">
            "Empowering Digital Success with Precision Code."
          </p>
        </div>
        <div className=" w-full  call-to-action md:absolute md:bottom-20">
          <Button text="You need a Developer" value="out-line" />
          <Button value="primary" text="View projects" />
        </div>
      </div>
    </section>
  );
}
