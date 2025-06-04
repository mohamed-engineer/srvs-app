"use client";
import Image from "next/image";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const projects = [
  {
    title: "مشروع 1 - موقع إلكتروني",
    category: "website",
    images: ["/prevworks/websites/first/img1.jpg", "/prevworks/websites/first/img2.jpg", "/prevworks/websites/first/img3.jpg", "/prevworks/websites/first/img4.jpg", "/prevworks/websites/first/img5.jpg", "/prevworks/websites/first/img6.jpg"],
  },
  {
    title: "مشروع 2 - موقع إلكتروني",
    category: "website",
    images: ["/prevworks/websites/second/1.jpg", "/prevworks/websites/second/2.jpg", "/prevworks/websites/second/3.jpg", "/prevworks/websites/second/4.jpg", "/prevworks/websites/second/5.jpg", "/prevworks/websites/second/6.jpg"],
  },
  {
    title: "مشروع 3 - موقع إلكتروني",
    category: "website",
    images: ["/prevworks/websites/third/1.jpg", "/prevworks/websites/third/2.jpg", "/prevworks/websites/first/3.jpg"],
  },
  {
    title: "مشروع 4 - موقع إلكتروني",
    category: "website",
    images: ["/prevworks/websites/four/1.jpg", "/prevworks/websites/four/2.jpg"],
  },
  {
    title: "مشروع 5 - موقع إلكتروني",
    category: "website",
    images: ["/prevworks/websites/five/1.jpg", "/prevworks/websites/five/2.jpg"],
  },
  {
    title: "مشروع 6 - موقع إلكتروني",
    category: "website",
    images: ["/prevworks/websites/six/1.jpg","/prevworks/websites/six/1.jpg"],
  },
  {
    title: "Brand kit",
    category: "brand kit",
    images: ["/prevworks/brandkit/first/1.jpg", "/prevworks/brandkit/first/2.jpg", "/prevworks/brandkit/first/3.jpg", "/prevworks/brandkit/first/4.jpg", "/prevworks/brandkit/first/5.jpg", "/prevworks/brandkit/first/6.jpg"],
  },
  {
    title: "تصميم جرافيك (Brand Kit)",
    category: "Graphic design",
    images: ["/prevworks/brandkit/second/1.jpg", "/prevworks/brandkit/second/2.jpg", "/prevworks/brandkit/second/3.jpg", "/prevworks/brandkit/second/4.jpg", "/prevworks/brandkit/second/5.jpg", "/prevworks/brandkit/second/6.jpg", "/prevworks/brandkit/second/7.jpg", "/prevworks/brandkit/second/8.jpg"],
  },
  {
    title: "طباعة الملابس",
    category: "Printed T-shirts",
    images: ["/prevworks/brandkit/third/1.jpg", "/prevworks/brandkit/third/2.jpg", "/prevworks/brandkit/third/3.jpg", "/prevworks/brandkit/third/4.jpg", "/prevworks/brandkit/third/5.jpg"],
  },
];

const filters = [
  { key: "website", label: "مواقع إلكترونية" },
  { key: "brand kit", label: "Brand Kit" },
  { key: "Graphic design", label: "الجرافيك ديزاين" },
  { key: "Printed T-shirts", label: "طباعة الملابس" },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,
  appendDots: (dots: React.ReactNode) => (
    <div style={{ bottom: "-30px" }}>
      <ul style={{ margin: 0 }}>{dots}</ul>
    </div>
  ),
  customPaging: () => (
    <div
      style={{
        width: "12px",
        height: "12px",
        borderRadius: "50%",
        backgroundColor: "#cbd5e1",
        display: "inline-block",
        margin: "0 6px",
        cursor: "pointer",
      }}
    />
  ),
};

export default function PrevWorksPage() {
  const [filter, setFilter] = useState("website");
  const [visibleCount, setVisibleCount] = useState(2);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredProjects = projects.filter(project => project.category === filter);

  return (
    <>
      <section id="prevworks" className="py-24 px-6 bg-gradient-to-br from-white via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-white min-h-screen">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-extrabold text-center mb-12 tracking-wide">الأعمال السابقة</h1>

          <div className="flex justify-center gap-6 mb-16 flex-wrap">
            {filters.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => {
                  setFilter(key);
                  setVisibleCount(2);
                }}
                className={`px-5 py-2 rounded-full border-2 transition-colors duration-300 font-semibold ${
                  filter === key
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-transparent text-gray-700 dark:text-gray-300 border-gray-400 hover:bg-blue-100 hover:text-blue-700 dark:hover:bg-blue-700 dark:hover:text-white"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {filteredProjects.length === 0 ? (
            <p className="text-center text-lg mt-10">لا توجد مشاريع في هذا القسم.</p>
          ) : (
            filteredProjects.slice(0, visibleCount).map((project, idx) => (
              <div key={idx} className="mb-24">
                <h2 className="text-3xl font-semibold mb-6 border-b-4 border-blue-500 inline-block pb-2">{project.title}</h2>
                <Slider {...sliderSettings}>
                  {project.images.map((img, i) => (
                    <div key={i} className="px-4">
                      <Image
                        width={50}
                        height={50}
                        src={img}
                        alt={`${project.title} - صورة ${i + 1}`}
                        className="w-full h-[450px] md:h-[500px] object-contain rounded-xl shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl cursor-pointer bg-white"
                        loading="lazy"
                        onClick={() => setSelectedImage(img)}
                      />
                    </div>
                  ))}
                </Slider>
              </div>
            ))
          )}

          {filteredProjects.length > visibleCount && (
            <div className="text-center mt-10">
              <button
                onClick={() => setVisibleCount(filteredProjects.length)}
                className="px-6 py-2 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition"
              >
                عرض المزيد
              </button>
            </div>
          )}
        </div>
      </section>


      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <Image width={1000} height={1000} src={selectedImage} alt="عرض كامل" className="max-w-[95%] max-h-[90%] rounded-lg shadow-2xl" />
        </div>
      )}
    </>
  );
}
