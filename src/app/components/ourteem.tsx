"use client";
import Reveal from "./reveal";
import Image from "next/image";
const teamMembers = [
  {
    name: "Khaled Rashad",
    position: "Founder & CEO",
    image: "/team/khaled.jpg",
    FacebookHref: "",
    TwitterHref: "",
    LinkedinHref: "",
  },
  {
    name: "Mohamed Hossam",
    position: "Software Manager",
    image: "/team/Mohamed.jpg",
    FacebookHref: "https://www.facebook.com/mohamed.hossam.167143",
    TwitterHref: "",
    LinkedinHref: "",
  },
  {
    name: "Malak Mohamed",
    position: "The Executive Assistant",
    image: "/team/Malak.jpg",
    FacebookHref: "",
    TwitterHref: "",
    LinkedinHref: "",
  },
];

export default function OurTeam() {
  return (
    <section
      id="team"
      className="py-24 bg-gray-900 text-center transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>

        <h2 className="text-4xl font-extrabold mb-3 text-white">
          فريق إدارتنا
        </h2>
        <p className="text-gray-300 mb-12">
          تعرف على الأشخاص وراء نجاحنا
        </p>
        </Reveal>

        <Reveal>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {teamMembers.map((member, idx) => (
            <div
            key={idx}
            className="group relative bg-gray-800 rounded-3xl overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* صورة العضو */}
              <Image
              width={400}
              height={400}
                src={member.image}
                alt={member.name}
                className="w-full h-80 object-cover"
              />

              {/* طبقة تظهر عند الـ hover */}
              
              {/* تفاصيل العضو */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-white">
                  {member.name}
                </h3>
                <p className="text-gray-300">
                  {member.position}
                </p>
              </div>
            </div>
          ))}
        </div>
          </Reveal>
      </div>
    </section>
  );
}
