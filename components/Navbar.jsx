"use client"
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import LogoOne from '@/public/images/logoOne.png';

const Navbar = ({ links }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
    setIsClosing(false);
  };

  const closeMobileMenu = () => {
    setIsClosing(true);
    setTimeout(() => {
      setMobileMenuOpen(false);
    }, 300); // Adjust the timeout to match your animation duration
  };

  return (
    <nav className="bg-blue-100 p-4">
      <div className="flex justify-between items-center">
        <div className="text-white text-xl font-bold px-5">
          <Link href="/">
            {/* <Image src={LogoOne} alt="Logo" className="w-[10rem] h-25 md:w-auto md:h-16" /> */}
            <Image src={LogoOne} alt="Logo" className="max-w-[150px] min-w-[25%] " />
          </Link>
        </div>
        <div className="hidden md:flex space-x-4 px-0 min-[788px]:px-5 items-center">
          {links.map((link) => (
            <Link key={link.hash} href={link.hash}>
              <p className="text-primary font-m-sans">{link.name}</p>
            </Link>
          ))}
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-primary focus:outline-none text-2xl"
          >
            <FaBars />
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div
          className={`md:hidden fixed top-0 right-0 bottom-0 bg-secondary p-4 z-50 ${
            isClosing ? 'animate-slideOutRight' : 'animate-slideInRight'
          } w-[100%]`}
        >
          <button
            onClick={closeMobileMenu}
            className="text-accent text-2xl focus:outline-none absolute top-4 sm:top-6 right-4"
          >
            <FaTimes />
          </button>
          {links.map((link) => (
            <Link key={link.hash} href={link.hash}>
              <p
                onClick={closeMobileMenu}
                className="block text-accent text-2xl py-3 sm:py-1"
              >
                {link.name}
              </p>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;