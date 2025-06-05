"use client";

import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Reveal from "./reveal";


const clients = [
  { name: "Client A", logo: "/parteneres/1.png" },
  { name: "Client B", logo: "/parteneres/2.jpg" },
  { name: "Client C", logo: "/parteneres/3.png" },
  { name: "Client D", logo: "/parteneres/4.png" },
  { name: "Client E", logo: "/parteneres/5.jpg" },
  { name: "Client F1", logo: "/parteneres/6.jpg" },
  { name: "Client F2", logo: "/parteneres/7.jpg" },
  { name: "Client F3", logo: "/parteneres/8.png" },
  { name: "Client F4", logo: "/parteneres/9.png" },
  { name: "Client F5", logo: "/parteneres/10.png" },
  { name: "Client F6", logo: "/parteneres/11.png" },
  { name: "Client F7", logo: "/parteneres/12.png" },
  { name: "Client F8", logo: "/parteneres/13.png" },
  { name: "Client F9", logo: "/parteneres/14.png" }
  // أضف المزيد حسب الحاجة
];

export default function PartnersSlider() {
  const settings = {
    infinite: true,
    speed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <>
    <section className="py-24 bg-gray-900 text-center">
      <div className="max-w-6xl mx-auto px-6">

        <Reveal>
        <h2 className="text-4xl font-extrabold mb-8 text-white">
          شركاء النجاح
        </h2>
        </Reveal>

        <Reveal>
        <Slider {...settings}>
          {clients.map((client, index) => (
            <div key={index} className="px-4">
              <div className="bg-gray-800 p-6 rounded-2xl shadow-md flex items-center justify-center h-40">
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={120}
                  height={120}
                  className="object-contain h-24"
                />
              </div>
            </div>
          ))}
        </Slider>
        </Reveal>
      </div>
    </section>
          </>
  );
}
