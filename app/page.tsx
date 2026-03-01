"use client";

import { useState } from "react";
import Image from "next/image";
import {
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaTimes,
  FaDownload,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

type Sample = {
  id: number;
  src: string;
  title: string;
  category: string;
};

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const founder = {
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

  const categories = [
    "All",
    "Rings",
    "Necklace",
    "Bracelet",
    "Chain",
    "Earrings",
    "Bangle",
    "Nose Ring",
  ];

  const samples: Sample[] = [
    { id: 1, src: "/images/rings/ring1.jpg", title: "Luxury Ring", category: "Rings" },
    { id: 2, src: "/images/rings/ring2.jpg", title: "Diamond Ring", category: "Rings" },
    { id: 3, src: "/images/necklace/necklace1.jpg", title: "Gold Necklace", category: "Necklace" },
    { id: 4, src: "/images/bracelet/bracelet1.jpg", title: "Elegant Bracelet", category: "Bracelet" },
    { id: 5, src: "/images/chain/chain1.jpg", title: "Gold Chain", category: "Chain" },
    { id: 6, src: "/images/earrings/earring1.jpg", title: "Stud Earrings", category: "Earrings" },
    { id: 7, src: "/images/bangle/bangle1.jpg", title: "Bangle Set", category: "Bangle" },
    { id: 8, src: "/images/nosering/nosering1.jpg", title: "Nose Ring", category: "Nose Ring" },
  ];

  const downloadImage = (src: string) => {
    const link = document.createElement("a");
    link.href = src;
    link.download = src.split("/").pop() || "shabnam-jewellers.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredSamples =
    activeCategory === "All"
      ? samples
      : samples.filter((item) => item.category === activeCategory);

  const displayedSamples =
    activeCategory === "All" && !showAll
      ? filteredSamples.slice(0, 6)
      : filteredSamples;

  return (
    <main className="min-h-screen flex flex-col bg-black text-white">
      <div
        className="flex-1 bg-cover bg-center bg-no-repeat bg-fixed relative"
        style={{ backgroundImage: "url('/images/background.png')" }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10">

          {/* HERO */}
          <section className="relative h-80 flex items-center justify-center text-center">
            <div className="absolute top-6 left-6">
              <Image
  src="/images/logo.png"
  alt="Shabnam Jewellers Logo"
  width={70}       
  height={70}     
  className="object-contain drop-shadow-[0_0_10px_gold] md:w-20 md:h-20"
  priority
/>
            </div>
<div>
             <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent">
  SHABNAM JEWELLERS
</h1>

<p className="mt-1 md:mt-2 text-lg md:text-2xl text-gray-300">
  Premium Gold Jewellery Since 1975
</p>
            
            </div>
          </section>

          {/* FOUNDER */}
          <section className="py-08 text-center">
            <h2 className="text-3xl font-bold text-yellow-400 mb-6">Founder</h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-10">
              <Image
                src={founder.img}
                alt={founder.name}
                width={280}
                height={280}
                className="rounded-xl object-cover border border-yellow-400"
              />
              <div>
                <h3 className="text-2xl font-bold text-yellow-300">{founder.name}</h3>
                <p className="text-gray-300">{founder.role}</p>
                <p className="text-gray-400 mt-4 max-w-md">{founder.intro}</p>
              </div>
            </div>
          </section>

          {/* COLLECTION */}
          <section className="py-16 px-4 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10 text-yellow-400">
              Our Jewellery Collection
            </h2>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setShowAll(false);
                  }}
                  className={`px-6 py-2 rounded-full border transition-all duration-300 ${
                    activeCategory === cat
                      ? "bg-yellow-400 text-black border-yellow-400"
                      : "border-yellow-400 text-yellow-300 hover:bg-yellow-400 hover:text-black"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {displayedSamples.map((item) => (
                <motion.div
                  key={item.id}
                  whileHover={{ scale: 1.05 }}
                  className="relative group overflow-hidden rounded-2xl border border-yellow-400"
                  onClick={() => setSelectedImage(item.src)}
                >
                  <Image
                    src={item.src}
                    alt={item.title}
                    width={400}
                    height={400}
                    className="object-cover h-64 w-full"
                  />
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      downloadImage(item.src);
                    }}
                    className="absolute top-3 right-3 bg-black/70 p-2 rounded-full opacity-0 group-hover:opacity-100 transition"
                  >
                    <FaDownload />
                  </button>
                </motion.div>
              ))}
            </div>

            {activeCategory === "All" && filteredSamples.length > 6 && (
              <div className="text-center mt-10">
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="px-8 py-3 bg-yellow-400 text-black rounded-full font-semibold"
                >
                  {showAll ? "See Less" : "See More"}
                </button>
              </div>
            )}
          </section>

          {/* ADDRESS */}
          <section className="text-center mb-10">
            <a
              href="https://www.google.com/maps/place/shabnam+jewellers,+Karachi/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-400 hover:underline"
            >
              📍 {founder.address}
            </a>
          </section>

          {/* FLOATING WHATSAPP */}
<a
  href="https://wa.me/923003361510"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 z-50 p-4 bg-green-500 rounded-full shadow-lg text-white text-3xl
             transition-transform duration-300 hover:scale-125 hover:shadow-2xl"
>
  <FaWhatsapp />
</a>

          {/* CONNECT */}
<section className="max-w-3xl mx-auto mt-10 border border-yellow-400 rounded-2xl bg-white/10 backdrop-blur-md p-8 text-center">
  <h3 className="text-xl font-semibold text-yellow-300 mb-6">
    Connect With Us
  </h3>

  <div className="flex justify-center gap-8 text-3xl">

    {/* WhatsApp */}
    <a
      href={founder.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="p-4 rounded-full transition-all duration-300 
                 hover:scale-125 hover:bg-green-500/20 hover:shadow-lg"
    >
      <FaWhatsapp className="text-green-400" />
    </a>

    {/* Facebook */}
    <a
      href={founder.facebook}
      target="_blank"
      rel="noopener noreferrer"
      className="p-4 rounded-full transition-all duration-300 
                 hover:scale-125 hover:bg-blue-500/20 hover:shadow-lg"
    >
      <FaFacebook className="text-blue-400" />
    </a>

    {/* Instagram */}
    <a
      href={founder.instagram}
      target="_blank"
      rel="noopener noreferrer"
      className="p-4 rounded-full transition-all duration-300 
                 hover:scale-125 hover:bg-pink-500/20 hover:shadow-lg"
    >
      <FaInstagram className="text-pink-400" />
    </a>

    {/* TikTok */}
    <a
      href={founder.tiktok}
      target="_blank"
      rel="noopener noreferrer"
      className="p-4 rounded-full transition-all duration-300 
                 hover:scale-125 hover:bg-white/20 hover:shadow-lg"
    >
      <FaTiktok className="text-white" />
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
            onClick={() => setSelectedImage(null)}
          >
            <motion.div onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setSelectedImage(null)}
                className="text-white text-3xl mb-4"
              >
                <FaTimes />
              </button>
              <Image
                src={selectedImage}
                alt="Zoomed"
                width={800}
                height={800}
                className="rounded-2xl object-contain max-h-[80vh]"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FOOTER */}
      <footer className="bg-black border-t border-yellow-400 text-gray-400 py-4">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm gap-2">
          <a href="https://avrx-tech.vercel.app/" target="_blank">
            Created By <span className="font-semibold">Avrx Tech</span>
          </a>
          <span>© 2020 Shabnam Jewellers. All Rights Reserved.</span>
          <a href="https://www.google.com/maps/place/shabnam+jewellers,+Karachi/" target="_blank">
            Visit Us
          </a>
        </div>
      </footer>
    </main>
  );
}