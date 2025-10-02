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
    tiktok: "https://tiktok.com/@shabnamjewellers.1",
    address:
      "Shabnam Jewellers, Banaras Main Sarafa Bazar Near Malang Hotel, Karachi West",
    intro:
      "Muhammad Alam Khan is the visionary Founder & CEO of Shabnam Jewellers, with 40+ years of experience in gold jewellery.",
  };

  return (
    <>
      <main className="min-h-screen flex flex-col">
        {/* Wrapper with Background (Footer ke alawa) */}
        <div
          className="flex-1"
          style={{
            backgroundImage: "url('/images/background.png')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          {/* Hero Section */}
          <section className="relative w-full h-80">
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                WELCOME TO
                <br />
                <span className="text-yellow-400">SHABNAM JEWELLERS</span>
              </h1>
              <p className="mt-4 text-lg md:text-2xl text-gray-100 max-w-2xl">
                Premium Gold Jewellery Since 1975
              </p>
            </div>
          </section>

          {/* Founder Section */}
          <section className="py-12">
            {/* Founder Title Box */}
            <div className="max-w-md mx-auto mb-10">
              <div className="border-4 border-black bg-gradient-to-r from-black rounded-2xl shadow-xl p-4 text-center">
                <h2 className="text-3xl font-extrabold tracking-wide text-white uppercase">
                  Founder
                </h2>
                <div className="mt-2 w-16 h-1 bg-black mx-auto rounded"></div>
              </div>
            </div>

            {/* Image & Info Wrapper */}
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
              {/* Left - Image */}
              <div className="border-4 border-black rounded-xl shadow-xl bg-white p-3">
                <Image
                  src={founder.img}
                  alt={founder.name}
                  width={280}
                  height={280}
                  className="rounded-lg object-cover"
                />
              </div>

              {/* Right - Name + Role */}
              <div className="border-2 border-black rounded-xl bg-gradient-to-r from-white shadow-md p-6 text-center md:text-left flex-1">
                <h3 className="text-3xl font-extrabold text-gray-900">{founder.name}</h3>
                <h4 className="text-lg text-black font-semibold">{founder.role}</h4>
              </div>
            </div>
          </section>

          {/* About Founder */}
          <section className="max-w-3xl mx-auto mt-6 border-2 border-black rounded-xl bg-gradient-to-r from-white shadow-md p-6 text-center">
            <h3 className="text-lg font-semibold mb-2">About the Founder</h3>
            <p className="text-black">{founder.intro}</p>
          </section>

          {/* Address */}
          <section className="max-w-3xl mx-auto mt-6 border-2 border-black rounded-xl bg-gradient-to-r from-white shadow-md p-6 text-center">
            <h3 className="text-lg font-semibold mb-2">📍 Address</h3>
            <p className="text-black">{founder.address}</p>
          </section>

          {/* Social Links */}
          <section className="max-w-3xl mx-auto mt-6 border-2 border-black rounded-xl bg-gradient-to-r from-gray shadow-md p-6 text-center">
            <h3 className="text-lg font-semibold mb-4">Connect With Me</h3>
            <div className="flex justify-center gap-6 text-3xl">
              <a href={founder.whatsapp} target="_blank" className="text-green-600 hover:scale-110 transition">
                <FaWhatsapp />
              </a>
              <a href={founder.facebook} target="_blank" className="text-blue-600 hover:scale-110 transition">
                <FaFacebook />
              </a>
              <a href={founder.instagram} target="_blank" className="text-pink-500 hover:scale-110 transition">
                <FaInstagram />
              </a>
              <a href={founder.tiktok} target="_blank" className="text-black hover:scale-110 transition">
                <FaTiktok />
              </a>
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-300 py-4 mt-0">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-2">
            {/* Left - Created By */}
            <a
              href="https://avrx-tech-main.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition"
            >
              Created By <span className="font-semibold">Avrx Tech</span>
            </a>

            {/* Center - Copyright */}
            <span>© {new Date().getFullYear()} Shabnam Jewellers. All Rights Reserved.</span>

            {/* Right - Visit Us */}
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
    </>
  );
}


