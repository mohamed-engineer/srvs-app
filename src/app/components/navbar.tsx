"use client";
import Logo from "./logo.png";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { HiMenu, HiX, HiMoon, HiSun } from "react-icons/hi";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const pathname = usePathname();
  const isWorksPage = pathname === "/prevworks";

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    const isDark = !darkMode;
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const navLinkClass = () =>
    "group relative inline-block px-1 text-sm font-bold transition-colors duration-200";

  const underlineClass = () =>
    `absolute left-0 bottom-0 h-[2px] w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out ${
      darkMode ? "bg-teal-400" : "bg-teal-600"
    }`;

  const textClass = () =>
    `relative z-10 ${
      darkMode
        ? "text-white group-hover:text-teal-400"
        : "text-gray-900 group-hover:text-teal-600"
    }`;

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? darkMode
            ? "bg-gray-900/95 text-white shadow-lg backdrop-blur"
            : "bg-white/95 text-gray-900 shadow-lg backdrop-blur"
          : darkMode
          ? "bg-transparent text-white"
          : "bg-transparent text-gray-900"
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
        <div className="hidden md:flex items-center space-x-6">
          <Link href="#about" className={navLinkClass()}>
            <span className={textClass()}>About</span>
            <span className={underlineClass()}></span>
          </Link>
          <Link href="services" className={navLinkClass()}>
            <span className={textClass()}>Services</span>
            <span className={underlineClass()}></span>
          </Link>
          <Link
            href="/prevworks"
            className={`group relative inline-block px-1 text-sm font-bold transition-colors duration-200 ${
              isWorksPage ? "text-teal-500 animate-pulse" : ""
            }`}
          >
            <span className={textClass()}>Works</span>
            <span
              className={`absolute left-0 bottom-0 h-[2px] w-full origin-left transition-transform duration-300 ease-in-out ${
                darkMode ? "bg-teal-400" : "bg-teal-600"
              } ${isWorksPage ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
            ></span>
          </Link>
          <Link href="#store" className={navLinkClass()}>
            <span className={textClass()}>Store</span>
            <span className={underlineClass()}></span>
          </Link>

          <div className="relative group">
            <button className={navLinkClass()}>
              <span className={textClass()}>MORE</span>
              <span className={underlineClass()}></span>
            </button>
            <div
              className={`absolute hidden group-hover:flex flex-col left-0 mt-2 ${
                darkMode ? "bg-gray-800/90" : "bg-gray-100/90"
              } rounded shadow-lg w-40 z-50 transition-opacity duration-300`}
            >
              <Link
                href="#team"
                className={`px-4 py-2 hover:${
                  darkMode ? "bg-gray-700" : "bg-gray-200"
                } rounded`}
              >
                Our Team
              </Link>
              <Link
                href="#careers"
                className={`px-4 py-2 hover:${
                  darkMode ? "bg-gray-700" : "bg-gray-200"
                } rounded`}
              >
                Careers
              </Link>
            </div>
          </div>

          <div className="flex items-center space-x-4 ml-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className={darkMode ? "hover:text-blue-500" : "hover:text-blue-700"}
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className={darkMode ? "hover:text-blue-400" : "hover:text-blue-600"}
            >
              <FaTwitter />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className={darkMode ? "hover:text-blue-300" : "hover:text-blue-500"}
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className={darkMode ? "hover:text-gray-400" : "hover:text-gray-700"}
            >
              <FaGithub />
            </a>
            <button
              onClick={toggleDarkMode}
              className={`transition ${
                darkMode ? "hover:text-yellow-400" : "hover:text-yellow-600"
              }`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <HiSun size={20} /> : <HiMoon size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
            className="focus:outline-none"
          >
            {darkMode ? <HiSun size={22} /> : <HiMoon size={22} />}
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="relative w-8 h-8 flex items-center justify-center transition-transform duration-300 focus:outline-none"
            aria-label="Toggle menu"
          >
            <div
              className={`transition-all duration-300 ${
                isMobileMenuOpen ? "rotate-90 scale-90 opacity-0" : "opacity-100"
              }`}
            >
              <HiMenu size={28} />
            </div>
            <div
              className={`absolute transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
              }`}
            >
              <HiX size={28} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className={`md:hidden px-4 pb-4 space-y-4 rounded-b-lg shadow-inner transition-colors duration-300 ${
            darkMode ? "bg-gray-900/90" : "bg-white/90"
          }`}
        >
          <Link
            href="#about"
            className={`block transition-colors duration-200 hover:text-teal-400 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            About
          </Link>
          <Link
            href="#services"
            className={`block transition-colors duration-200 hover:text-teal-400 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Services
          </Link>
          <Link
            href="/prevworks"
            className={`block transition-colors duration-200 hover:text-teal-400 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Works
          </Link>
          <Link
            href="#store"
            className={`block transition-colors duration-200 hover:text-teal-400 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Store
          </Link>
          <div>
            <span className={`block font-semibold ${darkMode ? "text-white" : "text-gray-900"}`}>
              More
            </span>
            <Link
              href="#team"
              className={`block ml-4 transition-colors duration-200 hover:text-teal-400 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Our Team
            </Link>
            <Link
              href="#careers"
              className={`block ml-4 transition-colors duration-200 hover:text-teal-400 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Careers
            </Link>
          </div>
          <div className="flex space-x-4 pt-2">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              <FaTwitter />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
