"use client"
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/public/images/logo.svg';

const Navbar = ({ links }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">
          <Link href="/">
          
              <Image src={Logo} alt="Logo" className="w-[10rem] h-25 md:w-16 md:h-16" />
           
          </Link>
        </div>
        <div className="hidden md:flex space-x-4">
          {links.map((link) => (
            <Link key={link.hash} href={link.hash}>
              <p className="text-white">{link.name}</p>
            </Link>
          ))}
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-primary focus:outline-none text-4xl"
          >
           <FaBars />
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-0 right-0 bottom-0 bg-secondary p-4 z-50 animate-slideInRight w-[15rem]">
          <button
            onClick={closeMobileMenu}
            className="text-accent text-4xl focus:outline-none absolute top-4 right-4"
          >
            <FaTimes />
          </button>
          {links.map((link) => (
            <Link key={link.hash} href={link.hash}>
              <p
                onClick={closeMobileMenu}
                className="block text-accent text-2xl py-3"
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


