"use client";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import LogoOne from "@/public/images/logoOne.png";

const Navbartwo = ({ links }) => {
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
    <nav className="main-nav h-full">
      <div className="flex justify-between items-center h-full">
        <div className="text-white text-xl font-bold px-5 md:px-0">
          <Link href="/">
            {/* <Image src={LogoOne} alt="Logo" className="w-[10rem] h-25 md:w-auto md:h-16" /> */}
            <Image
              src={LogoOne}
              alt="Logo"
              className="max-w-[150px] min-w-[25%] p-4"
            />
          </Link>
        </div>

        {/* Navbar desktop */}
        <div className=" h-full hidden w-full md:flex px-3 justify-end items-center space-x-7 min-[788px]:mx-5 min-[788px]:items-center">
          {links.map((link) => (
            <Link key={link.hash} href={link.hash}>
              <p className="text-primary font-msans whitespace-nowrap">
                {link.name}
              </p>
            </Link>
          ))}
        </div>

        <div className="md:hidden pr-5">
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
            isClosing ? "animate-slideOutRight" : "animate-slideInRight"
          } w-[100%]`}
        >
          <button
            onClick={closeMobileMenu}
            className="text-accent text-2xl focus:outline-none absolute top-4 sm:top-6 right-4"
          >
            <FaTimes className="text-[#fff]" />
          </button>
          <div className="flex flex-col justify-evenly items-start pl-5 w-full h-full">
            {links.map((link) => (
              <Link
                key={link.hash}
                href={link.hash}
                className="w-full hover:bg-primary/45 hover:border-0 hover:rounded-sm transition-all"
              >
                <p
                  onClick={closeMobileMenu}
                  className="block text-[#fff] font-semibold text-2xl py-3 sm:py-1"
                >
                  {link.name}
                </p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbartwo;
