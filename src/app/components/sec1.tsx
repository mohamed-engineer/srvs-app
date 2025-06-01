"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "./reveal";
import { FaProjectDiagram, FaUsers, FaClock } from "react-icons/fa";
import { useCountUp } from "./countup";

export default function AboutUs() {
  const stats = [
    { label: "عدد المشاريع", value: 150, icon: <FaProjectDiagram /> },
    { label: "عدد العملاء", value: 2000, icon: <FaUsers /> },
    { label: "سنوات الخبرة", value: 8, icon: <FaClock /> },
  ];

  const [startCount, setStartCount] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setStartCount(entry.isIntersecting),
      { threshold: 0.5 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    const dark = document.documentElement.classList.contains("dark");
    setIsDark(dark);
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className={`py-24 text-center transition-colors duration-500 ${
        isDark ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <h2 className="text-4xl font-extrabold mb-3 relative inline-block">
            من نحن
            <span
              className={`block mt-2 mx-auto h-1 w-24 rounded ${
                isDark ? "bg-teal-400" : "bg-teal-500"
              }`}
            ></span>
          </h2>
        </Reveal>

        <Reveal>
          <p
            className={`max-w-3xl mx-auto mb-16 text-lg sm:text-xl font-light leading-relaxed ${
              isDark ? "text-gray-300" : "text-gray-700"
            }`}
          >
            نحن في SRVS نقدم حلولاً تقنية متكاملة تشمل تصميم المواقع، تطوير البرمجيات، وخدمات
            الجرافيك ديزاين، لنساعد شركتك على النجاح والتميز في العالم الرقمي.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {stats.map(({ label, value, icon }, idx) => {
            const count = useCountUp(value, startCount);
            const isComplete = count === value;
            return (
              <Reveal key={idx}>
                <div
                  className={`relative rounded-3xl p-8 shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer before:absolute before:-top-5 before:left-1/2 before:-translate-x-1/2 before:w-14 before:h-1 before:rounded-full flex flex-col items-center ${
                    isDark
                      ? "bg-gray-800 before:bg-teal-400 text-teal-400"
                      : "bg-gray-100 before:bg-teal-500 text-teal-600"
                  }`}
                >
                  <div className="mb-4 text-6xl">{icon}</div>
                  <div
                    className={`mb-4 text-5xl font-extrabold transition-all duration-300 ${
                      isComplete ? "animate-bounce text-green-500" : ""
                    }`}
                  >
                    {label.includes("سنوات") ? `${count} سنوات` : `${count}+`}
                  </div>
                  <div className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    {label}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
