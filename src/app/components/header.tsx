"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [text, setText] = useState("");
  const fullText = "ابق دائما مع ";
  const [index, setIndex] = useState(0);
  const [done, setDone] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // بعد أول تحميل للكلاينت
  }, []);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      }, 150);
      return () => clearTimeout(timeout);
    } else {
      setDone(true);
    }
  }, [index]);

  return (
    <header className="relative min-h-screen flex items-center justify-center text-white text-center overflow-hidden">
      {/* 🎥 خلفية الفيديو تظهر فقط في الكلاينت */}
      {isClient && (
        <>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
          >
          <source src="https://z7xwkp1sgbngnyzo.public.blob.vercel-storage.com/header-bg-W2EqTJUpXoQa5FSrwASxoEXGW0lkry.mp4" type="video/mp4" />
            متصفحك لا يدعم تشغيل الفيديو
          </video>

          {/* 🧊 طبقة تعتيم فوق الفيديو */}
          <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10" />
        </>
      )}

      {/* 📝 المحتوى */}
      <div className="relative z-20 p-6">
        <h1 dir="rtl" className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-widest mb-4">
          {text}
          {done && (
            <span className="text-teal-400 font-extrabold animate-pulse">SRVS</span>
          )}
          {!done && <span className="border-r-2 border-white animate-pulse ml-1"></span>}
        </h1>
        <p className="text-lg sm:text-xl text-gray-200 mb-6 max-w-md sm:max-w-xl mx-auto">
          نقدم خدمات تقنية متكاملة تشمل تصميم المواقع والجرافيك ديزاين بجودة واحترافية.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 transition-colors text-white px-6 py-3 rounded-2xl text-lg shadow-md">
          <a href="#about">
          ابدأ الآن
          </a>
        </button>
      </div>
    </header>
  );
}
