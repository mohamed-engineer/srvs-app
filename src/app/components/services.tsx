"use client";

import { FaWordpress, FaPaintBrush, FaServer, FaFacebook, FaTools, FaGlobe } from "react-icons/fa";
import Reveal from "./reveal";
import { useEffect, useState } from "react";

export default function Services() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const dark = document.documentElement.classList.contains("dark");
    setIsDark(dark);

    const observer = new MutationObserver(() => {
      const darkMode = document.documentElement.classList.contains("dark");
      setIsDark(darkMode);
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const services = [
    { title: "Website Building", description: "WordPress, Coding", icon: <FaWordpress /> },
    { title: "Graphic Design", description: "UI/UX, Branding", icon: <FaPaintBrush /> },
    { title: "Web Hosting", description: "Stable & Secure", icon: <FaServer /> },
    { title: "Social Media Management", description: "Marketing & Ads", icon: <FaFacebook /> },
    { title: "Web Management", description: "Maintenance & Updates", icon: <FaTools /> },
    { title: "Domain", description: "Registration & Renewal", icon: <FaGlobe /> },
  ];

  return (
    <section
      id="services"
      className={"py-24 transition-colors duration-500 bg-gray-900 text-white"
      }
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <Reveal>
          <h2 className="text-4xl font-extrabold mb-3 relative inline-block">
            خدماتنا
            <span
              className={`block mt-2 mx-auto h-1 w-24 rounded ${
                isDark ? "bg-teal-400" : "bg-teal-500"
              }`}
            ></span>
          </h2>
        </Reveal>

        <Reveal>
          <p className="max-w-2xl mx-auto mb-12 text-lg sm:text-xl font-light leading-relaxed text-white">
            نقدم مجموعة متكاملة من الخدمات الرقمية تساعد أعمالك على النمو والتميز.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {services.map((service, idx) => (
            <Reveal key={idx}>
              <div
                className={"group rounded-3xl p-8 shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2 border bg-gray-800 border-gray-700 text-white"}
              >
                <div
                  className={`text-5xl mb-4 text-teal-500 group-hover:scale-110 transition-transform`}
                >
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-base">{service.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
