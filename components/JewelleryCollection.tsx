"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaDownload, FaTimes } from "react-icons/fa";

type Sample = {
  id: number;
  src: string;
  title: string;
  category: string;
};

export default function JewelleryCollection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
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

  const generateItems = (category: string, folder: string) =>
  Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    src: `/${folder}/${folder}${i + 1}.jpeg`,
    title: `${category} ${i + 1}`,
    category,
  }));

const samples: Sample[] = [
  ...generateItems("Rings", "ring"),
  ...generateItems("Necklace", "necklace"),
  ...generateItems("Bracelet", "bracelet"),
  ...generateItems("Chain", "chain"),
  ...generateItems("Earrings", "earrings"),
  ...generateItems("Bangle", "bangle"),
  ...generateItems("Nose Ring", "nosering"),
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
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10 text-white">
        Our Jewellery Collection
      </h2>

      {/* Categories */}
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
                ? "bg-black text-white border-yellow-400"
                : "border-yellow-400 text-white-300 hover:bg-black hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

     {/* Grid */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  {displayedSamples.map((item) => (
    <motion.div
      key={`${item.category}-${item.id}`}
      whileHover={{ scale: 1.05 }}
      className="relative group overflow-hidden rounded-2xl border border-yellow-400"
      onClick={() => setSelectedImage(item.src)} // <-- Zoom ke liye
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
          e.stopPropagation(); // <-- Zoom block karne ke liye
          downloadImage(item.src); // <-- Download
        }}
        className="absolute top-3 right-3 bg-black/70 p-2 rounded-full opacity-0 group-hover:opacity-100 transition"
      >
        <FaDownload />
      </button>
    </motion.div>
  ))}
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

      {activeCategory === "All" && filteredSamples.length > 6 && (
        <div className="text-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-3 bg-black text-white rounded-full font-semibold"
          >
            {showAll ? "See Less" : "See More"}
          </button>
        </div>
      )}
    </section>
  );
}