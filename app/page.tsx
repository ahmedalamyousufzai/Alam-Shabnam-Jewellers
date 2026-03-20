"use client";

import JewelleryVideos from "@/components/JewelleryVideos";
import JewelleryCollection from "@/components/JewelleryCollection";
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


  const founder = {
    whatsapp: "https://wa.me/923003361510",
    facebook: "https://www.facebook.com/alam.khan.394180/",
    instagram: "https://instagram.com/shabnamjewelry",
    tiktok: "https://tiktok.com/@shabnamjewellery",
    address:
      "Shabnam Jewellers, Banaras Main Sarafa Bazar Near Malang Hotel, Karachi West",
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

  

  const downloadImage = (src: string) => {
    const link = document.createElement("a");
    link.href = src;
    link.download = src.split("/").pop() || "shabnam-jewellers.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main className="min-h-screen flex flex-col bg-black text-white">
      <div
        className="flex-1 bg-cover bg-center bg-no-repeat bg-fixed relative"
        style={{ backgroundImage: "url('/images/background.png')" }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10">

        {/* HERO SECTION */}
<section
 className="relative h-72 md:h-[550px] flex items-center justify-center text-center overflow-hidden bg-contain md:bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: "url('/images/banner.jpg')" }}
>
  <div className="absolute inset-0 bg-black/20 z-10"></div>

  {/* لوگو */}
  <div className="absolute top-3 left-3 z-20">
    <Image
      src="/images/logo.png"
      alt="Shabnam Jewellers Logo"
      width={60}
      height={60}
      className="object-contain drop-shadow-[0_0_08px_gold] md:w-15 md:h-15"
      priority
    />
  </div>
</section>


          
          <JewelleryVideos />
          <JewelleryCollection />

          {/* ADDRESS */}
          <section className="text-center mb-10">
            <a
              href="https://www.google.com/maps/place/shabnam+jewellers,+Karachi/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline"
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
<section className="max-w-1xl mx-auto mt-10 border border-black rounded-2xl bg-white/10 backdrop-blur-md p-8 text-center">
  <h3 className="text-xl font-semibold text-white mb-6">
    Connect With Us
  </h3>

  <div className="flex justify-center gap-7 text-3xl">

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

      {/* FOOTER */}
      <footer className="bg-black border-t border-black text-gray-400 py-4">
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