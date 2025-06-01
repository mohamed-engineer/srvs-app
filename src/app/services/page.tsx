"use client";

import React, { useState, useEffect } from "react";
import {
  FaWhatsapp,
  FaPaintBrush,
  FaGlobe,
  FaWordpressSimple,
  FaCode,
  FaBullhorn,
  FaServer,
  FaCloud,
} from "react-icons/fa";
import Navbar from "../components/navbar";

const services = [
  {
    name: "Graphic Design",
    icon: <FaPaintBrush className="text-3xl text-green-500 animate-bounce" />,
    options: ["شعار", "هوية بصرية", "تصميمات سوشيال ميديا"],
  },
  {
    name: "Domain",
    icon: <FaGlobe className="text-3xl text-green-500 animate-spin" />,
    options: [".com", ".net", ".org"],
  },
  {
    name: "Web Design (WordPress)",
    icon: <FaWordpressSimple className="text-3xl text-green-500 animate-pulse" />,
    options: ["موقع بسيط - 130 دولار", "موقع احترافي - 270 دولار"],
  },
  {
    name: "Web Design (Coding)",
    icon: <FaCode className="text-3xl text-green-500 animate-bounce" />,
    options: ["موقع بسيط - 150 دولار", "موقع احترافي - 350 دولار", "متجر إلكتروني - 650 دولار"],
  },
  {
    name: "Marketing",
    icon: <FaBullhorn className="text-3xl text-green-500 animate-pulse" />,
    options: ["إعلانات فيسبوك", "تحسين محركات البحث (SEO)", "إدارة حسابات"],
  },
  {
    name: "Web Hosting",
    icon: <FaServer className="text-3xl text-green-500 animate-spin" />,
    options: ["Basic", "Standard", "Premium"],
  },
  {
    name: "VPS Server",
    icon: <FaCloud className="text-3xl text-green-500 animate-bounce" />,
    options: ["1vCPU 2GB", "2vCPU 4GB", "4vCPU 8GB"],
  },
];

const packages = [
  {
    name: "باقة تصميم موقع بسيط WordPress",
    price: "130 دولار",
    details: "يشمل استضافة ودومين لمدة عام",
  },
  {
    name: "بـاقة تصميم موقع احترافي WordPress",
    price: "270 دولار",
    details: "يشمل استضافة ودومين لمدة عام",
  },
  {
    name: "بـاقة تصميم موقع بسيط Coding",
    price: "150 دولار",
    details: "بدون استضافة أو دومين",
  },
  {
    name: "بـاقة تصميم موقع احترافي Coding",
    price: "350 دولار",
    details: "يشمل جميع المميزات",
  },
  {
    name: "بـاقة تصميم متجر إلكتروني Coding",
    price: "650 دولار",
    details: "يشمل جميع المميزات",
  },
];

const whatsappNumber = "201118642272";

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [notes, setNotes] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  // مزامنة الوضع الليلي مع localStorage وclass على html
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
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

  const handleOptionChange = (option: string) => {
    setSelectedOptions((prev) =>
      prev.includes(option) ? prev.filter((o) => o !== option) : [...prev, option]
    );
  };

  const handleSend = () => {
    const message = `مرحباً srvs، أريد طلب منكم خدمة ${selectedService?.name}\n\nالخيارات: ${selectedOptions.join(
      ", "
    )}\n\nملاحظات: ${notes}`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <div className="min-h-screen bg-white dark:bg-gray-900 py-12 px-6 transition-colors duration-500">
        <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-10">
          الباقات
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-20">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className="bg-gray-100 dark:bg-gray-800 shadow-lg p-6 rounded-2xl border border-gray-200 dark:border-gray-700 transition hover:scale-105"
            >
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{pkg.name}</h2>
              <p className="text-green-500 font-bold mb-1">{pkg.price}</p>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">{pkg.details}</p>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                  `مرحباً srvs، أريد حجز الباقة التالية: ${pkg.name} - ${pkg.price} - ${pkg.details}`
                )}`}
                target="_blank"
                className="inline-flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="text-lg" /> حجز الباقة عبر واتساب
              </a>
            </div>
          ))}
        </div>

        <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-10">خدماتنا</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service) => (
            <div
              key={service.name}
              onClick={() => {
                setSelectedService(service);
                setSelectedOptions([]);
                setNotes("");
              }}
              className="bg-gray-100 dark:bg-gray-800 shadow-lg rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl cursor-pointer transition transform hover:scale-105"
            >
              <div className="mb-4">{service.icon}</div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{service.name}</h2>
            </div>
          ))}
        </div>

        {selectedService && (
          <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 w-full max-w-lg shadow-2xl border dark:border-gray-700">
              <h2 className="text-2xl font-bold text-center mb-4 text-gray-800 dark:text-white">{selectedService.name}</h2>
              <div className="space-y-3 mb-4">
                {selectedService.options.map((option: string) => (
                  <label key={option} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="form-checkbox h-5 w-5 text-green-500"
                      checked={selectedOptions.includes(option)}
                      onChange={() => handleOptionChange(option)}
                    />
                    <span className="text-gray-800 dark:text-gray-200">{option}</span>
                  </label>
                ))}
              </div>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-white mb-4"
                rows={3}
                placeholder="ملاحظات إضافية (اختياري)"
              ></textarea>
              <div className="flex justify-between gap-4">
                <button
                  onClick={() => setSelectedService(null)}
                  className="w-full py-2 rounded-lg bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-400 dark:hover:bg-gray-600 transition"
                >
                  إغلاق
                </button>
                <button
                  onClick={handleSend}
                  className="w-full py-2 rounded-lg bg-green-500 hover:bg-green-600 text-white transition flex items-center justify-center gap-2"
                >
                  <FaWhatsapp className="text-xl" /> إرسال الطلب
                </button>
              </div>
            </div>
          </div>

          
        )}
              <div className="flex justify-center mt-20 bg-white dark:bg-gray-900">
  <a
    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      "مرحباً SRVS، أريد حجز استشارة مجانية لعمل باكدج يناسبني"
    )}`}
    target="_blank"
    rel="noopener noreferrer"
    className="px-6 py-3 bg-gradient-to-r from-green-400 to-green-600 text-white font-semibold text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
  >
    💬 حجز الاستشارة المجانية
  </a>
</div>
      </div>


    </>
  );
}
