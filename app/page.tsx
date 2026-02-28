"use client";

import { useState } from "react";
import Image from "next/image";
import {
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaTimes,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

type Person = {
  id: number;
  name: string;
  role: string;
  img: string;
  whatsapp: string;
  facebook: string;
  instagram: string;
  tiktok: string;
  address: string;
  intro: string;
};

type Sample = { id: number; src: string; title: string };

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);

  const founder: Person = {
    id: 0,
    name: "M.Alam Khan",
    role: "CEO",
    img: "/images/ceo-1.jpg",
    whatsapp: "https://wa.me/923003361510",
    facebook: "https://www.facebook.com/alam.khan.394180/",
    instagram: "https://instagram.com/shabnamjewelry",
    tiktok: "https://tiktok.com/@shabnamjewellery",
    address:
      "Shabnam Jewellers, Banaras Main Sarafa Bazar Near Malang Hotel, Karachi West",
    intro:
      "Muhammad Alam Khan is the visionary Founder & CEO of Shabnam Jewellers, with 40+ years of experience in gold jewellery.",
  };

  const samples: Sample[] = [
    { id: 1, src: "/images/jewelry1.jpg", title: "Gold Necklace" },
    { id: 2, src: "/images/jewelry2.jpg", title: "Traditional Bangles" },
    { id: 3, src: "/images/jewelry3.jpg", title: "Elegant Rings" },
    { id: 4, src: "/images/jewelry4.jpg", title: "Golden Earrings" },
    { id: 5, src: "/images/jewelry5.jpg", title: "Diamond Ring" },
    { id: 6, src: "/images/jewelry6.jpg", title: "Bracelet Set" },
    { id: 7, src: "/images/jewelry7.jpg", title: "Gold Pendant" },
    { id: 8, src: "/images/jewelry8.jpg", title: "Bangle Set" },
    { id: 9, src: "/images/jewelry9.jpg", title: "Stud Earrings" },
    { id: 10, src: "/images/jewelry10.jpg", title: "Gold Ring" },
    { id: 11, src: "/images/jewelry11.jpg", title: "Necklace Set" },
    { id: 12, src: "/images/jewelry12.jpg", title: "Elegant Bracelet" },
    { id: 13, src: "/images/jewelry13.jpg", title: "Traditional Necklace" },
    { id: 14, src: "/images/jewelry14.jpg", title: "Gold Earrings Set" },
    { id: 15, src: "/images/jewelry15.jpg", title: "Luxury Ring" },
  ];

  return (
    <main className="min-h-screen flex flex-col bg-black text-white">
      <div
        className="flex-1 bg-cover bg-center bg-no-repeat bg-fixed relative"
        style={{ backgroundImage: "url('/images/background.png')" }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10">
          {/* HERO */}
          <section className="h-80 flex items-center justify-center text-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent">
                SHABNAM JEWELLERS
              </h1>
              <p className="mt-4 text-lg md:text-2xl text-gray-300">
                Premium Gold Jewellery Since 1975
              </p>
            </div>
          </section>

          {/* FOUNDER SECTION */}
          <section className="py-10 text-center">
            <div className="inline-block mb-8 bg-white/10 backdrop-blur-md px-8 py-3 rounded-2xl border border-yellow-400 shadow-xl">
              <h2 className="text-3xl font-bold text-yellow-400">Founder</h2>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-10">
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-yellow-400">
                <Image
                  src={founder.img}
                  alt={founder.name}
                  width={280}
                  height={280}
                  className="rounded-xl object-cover"
                />
              </div>

              <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-yellow-400">
                <h3 className="text-2xl font-bold text-yellow-300">
                  {founder.name}
                </h3>
                <p className="text-gray-300">{founder.role}</p>
              </div>
            </div>
          </section>

          {/* ABOUT */}
          <section className="max-w-3xl mx-auto border border-yellow-400 rounded-2xl bg-white/10 backdrop-blur-md p-8 text-center">
            <h3 className="text-xl font-semibold text-yellow-300 mb-3">
              About the Founder
            </h3>
            <p className="text-gray-300">{founder.intro}</p>
          </section>

        <section className="py-16 px-4 max-w-6xl mx-auto">
  <h2 className="text-3xl font-bold text-center mb-10 text-yellow-400">
    Our Jewellery Collection
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {samples
      .slice(0, showAll ? samples.length : 6) // ✅ Show 6 items when collapsed
      .map((item) => (
        <motion.div
          key={item.id}
          whileHover={{ scale: 1.05 }}
          className="cursor-pointer overflow-hidden rounded-2xl border border-yellow-400 bg-white/10 backdrop-blur-md"
          onClick={() => setSelectedImage(item.src)}
        >
          <Image
            src={item.src}
            alt={item.title}
            width={400}
            height={400}
            className="object-cover h-64 w-full"
          />
        </motion.div>
      ))}
  </div>

  <div className="flex justify-center mt-6">
    <button
      onClick={() => setShowAll(!showAll)}
      className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-full shadow-lg hover:scale-105 transition"
    >
      {showAll ? "See Less" : "See More"}
    </button>
  </div>
</section>

          {/* FLOATING WHATSAPP BUTTON */}
         <a
         href={founder.whatsapp}
         target="_blank"
         rel="noopener noreferrer"
         className="fixed bottom-8 right-8 z-50 bg-green-500 hover:bg-green-600 p-4 rounded-full shadow-lg transition-all duration-300"
         >
         <FaWhatsapp className="text-white text-2xl" />
         </a>

          {/* ADDRESS */}
          <section className="max-w-3xl mx-auto border border-yellow-400 rounded-2xl bg-white/10 backdrop-blur-md p-8 text-center">
            <h3 className="text-xl font-semibold text-yellow-300 mb-3">
              📍 Address
            </h3>
            <p className="text-gray-300">{founder.address}</p>
          </section>

          {/* CONNECT */}
          <section className="max-w-3xl mx-auto mt-10 border border-yellow-400 rounded-2xl bg-white/10 backdrop-blur-md p-8 text-center">
            <h3 className="text-xl font-semibold text-yellow-300 mb-6">
              Connect With Us
            </h3>
            <div className="flex justify-center gap-8 text-3xl">
              <a
                href={founder.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="text-green-400 hover:scale-110 transition" />
              </a>
              <a
                href={founder.facebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="text-blue-400 hover:scale-110 transition" />
              </a>
              <a
                href={founder.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-pink-400 hover:scale-110 transition" />
              </a>
              <a
                href={founder.tiktok}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTiktok className="text-white hover:scale-110 transition" />
              </a>
            </div>
          </section>
        </div>
      </div>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-[90%] max-h-[90%]"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-[-2rem] right-0 text-white text-3xl md:text-4xl hover:text-yellow-400 transition"
              >
                <FaTimes />
              </button>

              <Image
                src={selectedImage}
                alt="Zoomed"
                width={800}
                height={800}
                className="rounded-2xl object-contain max-h-[80vh] max-w-full"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FOOTER */}
      <footer className="bg-black border-t border-yellow-400 text-gray-400 py-4">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm gap-2">
          <a
            href="https://avrx-tech.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition"
          >
            Created By <span className="font-semibold">Avrx Tech</span>
          </a>

          <span>© 2020 Shabnam Jewellers. All Rights Reserved.</span>

          <a
            href="https://www.google.com/maps/place/shabnam+jewellers,+Karachi/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition"
          >
            Visit Us
          </a>
        </div>
      </footer>
    </main>
  );
}