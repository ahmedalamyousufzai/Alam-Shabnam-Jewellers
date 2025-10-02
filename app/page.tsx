"use client";

import { useState } from "react";
import Image from "next/image";
import { FaWhatsapp, FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

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

export default function Home() {
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);

  const founder: Person = {
    id: 0,
    name: "M.Alam Khan",
    role: "CEO",
    img: "/images/ceo-1.jpg",
    whatsapp: "https://wa.me/923003361510",
    facebook: "https://www.facebook.com/alam.khan.394180/",
    instagram: "https://instagram.com/alamkhanzargar",
    tiktok: "https://tiktok.com/@alamkhanzargar1",
    address:
      "Shabnam Jewellers, Banaras Main Sarafa Bazar Near Malang Hotel, Karachi West",
    intro:
      "Muhammad Alam Khan is the visionary Founder & CEO of Shabnam Jewellers, with 40+ years of experience in gold jewellery.",
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-80">
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4 bg-white">
          <h1 className="text-4xl md:text-6xl font-bold text-black leading-tight">
          WELCOME TO
         <br />
         <span className="text-yellow-400">SHABNAM JEWELLERS</span>
         </h1>

          <p className="mt-4 text-lg md:text-2xl text-black max-w-2xl">
            Premium Gold Jewellery Since 1975
          </p>
        </div>
      </section>

      {/* Founder Section */}
<section className="py-12 bg-gray-100">
  {/* Founder Title in Boundary */}
  <div className="max-w-xs mx-auto border-2 border-black bg-blue-800 rounded-xl shadow-md p-3 text-center mb-8">
    <h2 className="text-2xl font-semibold text-white">Founder</h2>
  </div>

  {/* Image & Basic Info */}
<div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-6">
  
  {/* Left Side - Image with Border */}
  <div className="border-4 border-black rounded-xl shadow-lg bg-white p-2">
    <Image
      src={founder.img}
      alt={founder.name}
      width={260}
      height={260}
      className="rounded-lg object-cover"
    />
  </div>

 {/* Right Side - Name + Role */}
<div className="p-4 text-left">
  <h3 className="text-3xl font-extrabold text-gray-900">{founder.name}</h3>
  <h4 className="text-lg text-yellow-600 font-semibold">{founder.role}</h4>


  </div>
</div>


  {/* Intro Box */}
  <div className="max-w-3xl mx-auto mt-6 border-2 border-black rounded-xl bg-white shadow-md p-6 text-center">
    <h3 className="text-lg font-semibold mb-2">About the Founder</h3>
    <p className="text-gray-700">{founder.intro}</p>
  </div>

  {/* Address Box */}
  <div className="max-w-3xl mx-auto mt-6 border-2 border-black rounded-xl bg-white shadow-md p-6 text-center">
    <h3 className="text-lg font-semibold mb-2">📍 Address</h3>
    <p className="text-gray-600">{founder.address}</p>
  </div>

  {/* Social Links Box */}
  <div className="max-w-3xl mx-auto mt-6 border-2 border-black rounded-xl bg-white shadow-md p-6 text-center">
    <h3 className="text-lg font-semibold mb-4">Connect With Me</h3>
    <div className="flex justify-center gap-6 text-3xl">
      <a
        href={founder.whatsapp}
        target="_blank"
        className="text-green-600 hover:scale-110 transition"
      >
        <FaWhatsapp />
      </a>
      <a
        href={founder.facebook}
        target="_blank"
        className="text-blue-600 hover:scale-110 transition"
      >
        <FaFacebook />
      </a>
      <a
        href={founder.instagram}
        target="_blank"
        className="text-pink-500 hover:scale-110 transition"
      >
        <FaInstagram />
      </a>
      <a
        href={founder.tiktok}
        target="_blank"
        className="text-black hover:scale-110 transition"
      >
        <FaTiktok />
      </a>
    </div>
  </div>
</section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-6 mt-0">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Column 1 */}
          <div>
            <h3 className="text-lg font-bold text-white">Shabnam Jewellers</h3>
            <p className="mt-2 text-sm">Premium Gold Jewellery Since 1975</p>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-lg font-bold text-white">Visit Us</h3>
            <p className="mt-2 text-sm">
              Banaras Main Sarafa Bazar Near Malang Hotel, Karachi West
            </p>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-lg font-bold text-white">Contact</h3>
            <a
              href="https://wa.me/923003361510"
              target="_blank"
              className="block mt-2 text-sm text-green-400 hover:underline"
            >
              WhatsApp Us
            </a>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-6 pt-4 px-6 flex justify-between items-center text-sm text-gray-400">
          <span>
            © {new Date().getFullYear()} Shabnam Jewellers. All Rights Reserved.
          </span>
          <a
            href="https://avrx-tech-main.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition"
          >
            Created By <span className="font-semibold">Avrx Tech</span>
          </a>
        </div>
      </footer>
    </main>
  );
}

