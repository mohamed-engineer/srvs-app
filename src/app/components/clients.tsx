"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Reveal from "./reveal";

const clients = [
  { name: "Client A", logo: "/clients/client-a.jpg" },
  { name: "Client B", logo: "/clients/client-b.png" },
  { name: "Client C", logo: "/clients/client-c.png" },
  { name: "Client D", logo: "/clients/client-d.png" },
  { name: "Client E", logo: "/clients/client-e.jpg" },
  { name: "Client F", logo: "/clients/client-f.png" },
  { name: "Client F", logo: "/clients/client-7.png" },
  { name: "Client F", logo: "/clients/client-8.png" },
  { name: "Client F", logo: "/clients/client-9.png" },
  { name: "Client F", logo: "/clients/client-10.png" },
  { name: "Client F", logo: "/clients/client-11.png" },
  { name: "Client F", logo: "/clients/client-12.png" },
  // يمكنك إضافة المزيد
];

export default function ClientsSection() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
      <section className="py-24 bg-white dark:bg-gray-900 text-center">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
        <h2 className="text-4xl font-extrabold mb-8 text-gray-900 dark:text-white">
          عـــملاؤنــا
        </h2>
</Reveal>
        <Reveal>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {clients.map((client, idx) => (
              <motion.div
              key={idx}
              className="relative bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl shadow hover:shadow-lg transition-all duration-300 cursor-pointer"
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={100}
                height={100}
                className="mx-auto object-contain h-24"
              />

              {hovered === idx && (
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-sm px-3 py-1 rounded shadow-lg z-10">
                  {client.name}
                </div>
              )}
            </motion.div>
          ))}
        </div>
          </Reveal>
      </div>
    </section>
  );
}
