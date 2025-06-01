"use client";
import Image from "next/image";
import { useEffect, useRef, useState, useMemo } from "react";

export default function VisionSection() {
  const fullText = useMemo(
    () =>
      `At SRVS, our vision is to be more than just a digital services company—we aim to partner with our clients to build sustainable and impactful successes. 
We believe every project holds the potential to become a success story, and every idea can transform into reality with strategic planning and genuine passion. 
Our mission is to deliver exceptional experiences that empower our clients and position them as leaders in their markets. 
“Your success is our success.” This principle drives us daily. We see our clients as partners, and together, we turn visions into results. 
From website design to social media management and marketing strategies, we innovate and execute with excellence. 
With SRVS, we don’t follow the market—we create it. Let’s turn the impossible into reality, together.`,
    []
  );

  const totalDuration = 5000; // 5 ثواني
  const intervalTime = useMemo(() => totalDuration / fullText.length, [fullText]);

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [startTyping, setStartTyping] = useState(false);
  const sectionRef = useRef(null);

  // ✨ مراقبة الظهور
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartTyping(true);
          observer.disconnect(); // لا نحتاج مراقبة بعد البدء
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  // ⌨️ كتابة النص
  useEffect(() => {
    if (startTyping && index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      }, intervalTime);
      return () => clearTimeout(timeout);
    }
  }, [index, startTyping, fullText, intervalTime]);

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-white dark:bg-gray-900 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        {/* صورة المؤسس */}
        <div className="flex flex-col items-center gap-4">
          <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-teal-500 shadow-md">
            <Image
              src="/team/khaled.jpg"
              alt="Founder - Khaled Rashad"
              width={224}
              height={224}
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white text-center">
            Khaled Rashad
            <br />
            <span className="text-teal-500">Founder & CEO</span>
          </h3>
        </div>

        {/* صندوق النص */}
        <div className="flex-1 bg-gray-100 dark:bg-gray-800 p-6 md:p-10 rounded-3xl shadow-md text-gray-900 dark:text-white font-medium text-lg leading-relaxed relative">
          <div className="whitespace-pre-wrap">{text}</div>
          {index < fullText.length && startTyping && (
            <span className="absolute bottom-4 right-4 w-1 h-6 bg-teal-500 animate-pulse"></span>
          )}
        </div>
      </div>
    </section>
  );
}
