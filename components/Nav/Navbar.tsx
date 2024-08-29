import Image from 'next/image';
import './navbar.css';
import logo from '@/public/Assets/khb-logo-zip-file (1)/svg/logo-black.svg';
import Link from 'next/link';
export default function Navbar() {
  return (
    <header className="flex justify-between items-center py-3">
      <div className="logo font-extrabold text-2xl ">
        <Image src={logo} alt="KHB" className="w-24 font-black"></Image>
      </div>
      <ul className="nav flex flex-wrap justify-evenly">
        <li className="nav-link text-xl sm:mx-6 mx-2">
          <Link href="#experience">Experience</Link>
        </li>
        <li className="nav-link text-xl sm:mx-6 mx-2">
          <Link href="/works">Work</Link>
        </li>
        <li className="nav-link text-xl sm:mx-6 mx-2">
          <Link href="#about">About</Link>
        </li>
        <li className="nav-link text-xl sm:mx-6 mx-2">
          <Link href="#contact">Contact</Link>
        </li>
        <li className="nav-link text-xl sm:mx-6 mx-2  border border-slate-900 hover:text-white rounded px-2 py-1">
          <a href="#">Resume</a>
        </li>
      </ul>
    </header>
  );
}
