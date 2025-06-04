"use client";
import Logo from "./logo.png";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/10 backdrop-blur-md shadow-lg border-b border-white/10 text-white"
          : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image src={Logo} alt="SRVS Logo" width={100} height={100} className="rounded-full" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 text-white">
          {[
            { href: "#about", label: "About" },
            { href: "#services", label: "Services" },
            { href: "https://srvsstore.com/", label: "Store" },
            { href: "#prevworks", label: "Works" },
          ].map((link) => (
            <Link key={link.href} href={link.href} className="group relative inline-block px-1 text-sm font-bold transition-colors duration-200">
              <span className="relative z-10">{link.label}</span>
              <span className="absolute left-0 bottom-0 h-[2px] w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out bg-teal-500"></span>
            </Link>
          ))}



          <div className="relative group">
            <button className="group-hover:text-teal-400 transition-colors font-bold text-sm px-1 relative">
              <span className="relative z-10">MORE</span>
              <span className="absolute left-0 bottom-0 h-[2px] w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out bg-teal-500"></span>
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
            <a href="https://www.facebook.com/p/SRVS-100092562409213/" target="_blank" rel="noopener noreferrer" className="text-white hover:opacity-80 transition-opacity">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com/srvs_corporation" target="_blank" rel="noopener noreferrer" className="text-white hover:opacity-80 transition-opacity">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com/in/SRVS%20Corporation%20?fbclid=IwZXh0bgNhZW0CMTAAYnJpZBExT3VLdHY1VWpudXhjNHdsVQEeZPzIHRARINALk9DYK748ml7nYBibyObC4_8Jaxi-k6fgz1dsEfWa7Xk6Orc_aem_ztyDK_M59L2wHt3YFgLiCw" target="_blank" rel="noopener noreferrer" className="text-white hover:opacity-80 transition-opacity">
              <FaLinkedinIn />
            </a>
            <a href="https://x.com/SRVS373412" target="_blank" rel="noopener noreferrer" className="text-white hover:opacity-80 transition-opacity">
              <FaTwitter />
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
          <Link href="#about" className="block text-white hover:text-teal-400">About</Link>
          <Link href="#services" className="block text-white hover:text-teal-400">Services</Link>
          <Link href="/prevworks" className="block text-white hover:text-teal-400">Works</Link>
          <Link href="#store" className="block text-white hover:text-teal-400">Store</Link>
          <div>
            <span className="block font-semibold text-white">More</span>
            <Link href="#team" className="block ml-4 text-white hover:text-teal-400">Our Team</Link>
            <Link href="#careers" className="block ml-4 text-white hover:text-teal-400">Careers</Link>
          </div>

          {/* Social Icons in Mobile */}
          <div className="flex space-x-4 pt-2">
            <a href="https://www.facebook.com/p/SRVS-100092562409213/" target="_blank" rel="noopener noreferrer" className="text-white hover:opacity-80 transition-opacity">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com/srvs_corporation" target="_blank" rel="noopener noreferrer" className="text-white hover:opacity-80 transition-opacity">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com/in/SRVS%20Corporation%20?fbclid=IwZXh0bgNhZW0CMTAAYnJpZBExT3VLdHY1VWpudXhjNHdsVQEeZPzIHRARINALk9DYK748ml7nYBibyObC4_8Jaxi-k6fgz1dsEfWa7Xk6Orc_aem_ztyDK_M59L2wHt3YFgLiCw" target="_blank" rel="noopener noreferrer" className="text-white hover:opacity-80 transition-opacity">
              <FaLinkedinIn />
            </a>
            <a href="https://x.com/SRVS373412" target="_blank" rel="noopener noreferrer" className="text-white hover:opacity-80 transition-opacity">
              <FaTwitter />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
