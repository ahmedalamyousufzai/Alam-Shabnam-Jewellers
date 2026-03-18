"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaDownload,
  FaTimes,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";

type Sample = {
  id: number;
  src: string;
  title: string;
  category: string;
};

export default function JewelleryCollection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

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

  const filteredSamples =
    activeCategory === "All"
      ? samples
      : samples.filter((item) => item.category === activeCategory);

    const displayedSamples =
    activeCategory === "All" && !showAll
      ? filteredSamples.slice(0, 6)
      : filteredSamples;

  const nextImage = () => {
    if (selectedIndex === null) return;
    setSelectedIndex(
  (selectedIndex - 1 + filteredSamples.length) % filteredSamples.length
);
  };

  const prevImage = () => {
    if (selectedIndex === null) return;
    setSelectedIndex(
      (selectedIndex - 1 + filteredSamples.length) %
        filteredSamples.length
    );
  };

  const downloadImage = (src: string) => {
    const link = document.createElement("a");
    link.href = src;
    link.download = src.split("/").pop() || "shabnam-jewellers.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  /* Keyboard Navigation */
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;

      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") setSelectedIndex(null);
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedIndex]);

  /* Mobile Swipe */
  let touchStartX = 0;
  let touchEndX = 0;

  const handleTouchStart = (e: any) => {
    touchStartX = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e: any) => {
    touchEndX = e.changedTouches[0].screenX;

    if (touchStartX - touchEndX > 50) nextImage();
    if (touchEndX - touchStartX > 50) prevImage();
  };

  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10 text-white">
        Our Jewellery Collection
      </h2>

      {/* Categories */}
<div className="flex overflow-x-auto whitespace-nowrap gap-4 mb-12 pb-2 justify-start md:justify-center scrollbar-hide">
  {categories.map((cat) => (
    <button
      key={cat}
      onClick={() => {
        setActiveCategory(cat);
        setShowAll(false);
      }}
      className={`px-6 py-2 rounded-full border transition-all duration-300 shrink-0 ${
        activeCategory === cat
          ? "bg-black text-white border-white"
          : "border-white text-white hover:bg-black hover:text-white"
      }`}
    >
      {cat}
    </button>
  ))}
</div>


      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {displayedSamples.map((item, index) => (
          <motion.div
            key={`${item.category}-${item.id}`}
            whileHover={{ scale: 1.05 }}
            className="relative group overflow-hidden rounded-2xl border border-yellow-400 cursor-pointer"
            onClick={() =>
             setSelectedIndex(filteredSamples.findIndex(i => i.src === item.src))
             }
          >
            <Image
  src={item.src}
  alt={item.title}
  width={350}
  height={350}
  loading="lazy"
  className="object-cover w-full h-56"
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

      {/* LIGHTBOX */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedIndex(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative"
            >
              {/* Close */}
              <button
                onClick={() => setSelectedIndex(null)}
                className="absolute -top-12 right-0 text-white text-3xl"
              >
                <FaTimes />
              </button>

              {/* Counter */}
              <div className="absolute -top-12 left-0 text-white text-sm">
                {selectedIndex + 1} / {filteredSamples.length}
              </div>

              {/* Left */}
              <button
                onClick={prevImage}
                className="absolute left-[-60px] top-1/2 -translate-y-1/2 text-white text-3xl"
              >
                <FaArrowLeft />
              </button>

              <Image
                src={filteredSamples[selectedIndex].src}
                alt="Zoomed"
                width={900}
                height={900}
                className="rounded-2xl object-contain max-h-[80vh]"
              />

              {/* Right */}
              <button
                onClick={nextImage}
                className="absolute right-[-60px] top-1/2 -translate-y-1/2 text-white text-3xl"
              >
                <FaArrowRight />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* See More */}
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
