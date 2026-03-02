"use client";

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

          {/* HERO */}
          <section className="relative h-80 flex items-center justify-center text-center">
            <div className="absolute top-3 left-3">
              <Image
  src="/images/logo.png"
  alt="Shabnam Jewellers Logo"
  width={60}       
  height={60}     
  className="object-contain drop-shadow-[0_0_08px_gold] md:w-15 md:h-15"
  priority
/>
            </div>
<div>
             <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-yellow-500 via-yellow-500 to-yellow-700 bg-clip-text text-transparent">
  SHABNAM JEWELLERS
</h1>

<p className="mt-1 md:mt-2 text-lg md:text-2xl text-gray-300">
  Premium Gold Jewellery Since 1975
</p>
            
            </div>
          </section>

          {/* FOUNDER */}
          <section className="py-08 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Founder</h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-10">
              <Image
                src={founder.img}
                alt={founder.name}
                width={280}
                height={280}
                className="rounded-xl object-cover border border-black"
              />
              <div>
                <h3 className="text-2xl font-bold text-white">{founder.name}</h3>
                <p className="text-gray-300">{founder.role}</p>
                <p className="text-gray-400 mt-4 max-w-md">{founder.intro}</p>
              </div>
            </div>
          </section>
          
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