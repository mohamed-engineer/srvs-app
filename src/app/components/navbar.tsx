"use client";
import Logo from "./logo.png";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const pathname = usePathname();
  const isWorksPage = pathname === "/prevworks";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkClass = () =>
    "group relative inline-block px-1 text-sm font-bold transition-colors duration-200";

  const underlineClass = () =>
    `absolute left-0 bottom-0 h-[2px] w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out bg-teal-600`;

  const textClass = () => `relative z-10 text-gray-900 group-hover:text-teal-600`;

  return (
<nav
  className={`fixed w-full z-50 transition-all duration-300 ${
    isScrolled
      ? "bg-gray-900 text-white shadow-lg backdrop-blur"
      : "bg-transparent text-white"
  }`}
>
  <div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between">
    <Link href="/" className="flex items-center space-x-2">
      <Image
        src={Logo}
        alt="SRVS Logo"
        width={100}
        height={100}
        className="rounded-full"
      />
    </Link>

    {/* Desktop Menu */}
    <div className="hidden md:flex items-center space-x-6 text-white">
      <Link href="#about" className="hover:text-teal-400 transition-colors">
        <span className="text-white">About</span>
      </Link>
      <Link href="#services" className="hover:text-teal-400 transition-colors">
        <span className="text-white">Services</span>
      </Link>
      <Link
        href="/prevworks"
        className={`group relative inline-block px-1 text-sm font-bold transition-colors duration-200 ${
          isWorksPage ? "text-teal-500 animate-pulse" : "text-white"
        }`}
      >
        <span>Works</span>
        <span
          className={`absolute left-0 bottom-0 h-[2px] w-full origin-left transition-transform duration-300 ease-in-out bg-teal-600 ${
            isWorksPage ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
          }`}
        ></span>
      </Link>
      <Link href="#store" className="hover:text-teal-400 transition-colors">
        <span className="text-white">Store</span>
      </Link>

      <div className="relative group">
        <button className="hover:text-teal-400 transition-colors">
          <span className="text-white">MORE</span>
        </button>
        <div className="absolute hidden group-hover:flex flex-col left-0 mt-2 bg-gray-800/90 rounded shadow-lg w-40 z-50 transition-opacity duration-300">
          <Link href="#team" className="px-4 py-2 text-white hover:bg-gray-700 rounded">
            Our Team
          </Link>
          <Link href="#careers" className="px-4 py-2 text-white hover:bg-gray-700 rounded">
            Careers
          </Link>
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex items-center space-x-4 ml-4">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:opacity-80 transition-opacity">
          <FaFacebookF />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:opacity-80 transition-opacity">
          <FaTwitter />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:opacity-80 transition-opacity">
          <FaLinkedinIn />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white hover:opacity-80 transition-opacity">
          <FaGithub />
        </a>
      </div>
    </div>

    {/* Mobile menu toggle */}
    <div className="md:hidden flex items-center">
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="relative w-8 h-8 flex items-center justify-center transition-transform duration-300 focus:outline-none"
        aria-label="Toggle menu"
      >
        <div className={`transition-all duration-300 ${isMobileMenuOpen ? "rotate-90 scale-90 opacity-0" : "opacity-100"}`}>
          <HiMenu size={28} className="text-white" />
        </div>
        <div className={`absolute transition-all duration-300 ${isMobileMenuOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"}`}>
          <HiX size={28} className="text-white" />
        </div>
      </button>
    </div>
  </div>

  {/* Mobile Menu */}
  {isMobileMenuOpen && (
    <div className="md:hidden px-4 pb-4 space-y-4 rounded-b-lg shadow-inner transition-colors duration-300 bg-gray-900/95 text-white">
      <Link href="#about" className="block text-white hover:text-teal-400">
        About
      </Link>
      <Link href="#services" className="block text-white hover:text-teal-400">
        Services
      </Link>
      <Link href="/prevworks" className="block text-white hover:text-teal-400">
        Works
      </Link>
      <Link href="#store" className="block text-white hover:text-teal-400">
        Store
      </Link>
      <div>
        <span className="block font-semibold text-white">More</span>
        <Link href="#team" className="block ml-4 text-white hover:text-teal-400">
          Our Team
        </Link>
        <Link href="#careers" className="block ml-4 text-white hover:text-teal-400">
          Careers
        </Link>
      </div>

      {/* Social Icons in Mobile */}
      <div className="flex space-x-4 pt-2">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:opacity-80 transition-opacity">
          <FaFacebookF />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:opacity-80 transition-opacity">
          <FaTwitter />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:opacity-80 transition-opacity">
          <FaLinkedinIn />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white hover:opacity-80 transition-opacity">
          <FaGithub />
        </a>
      </div>
    </div>
  )}
</nav>



  );
};

export default Navbar;
