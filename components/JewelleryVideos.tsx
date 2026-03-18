"use client";

import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function JewelleryVideoGallery() {

  const videos = Array.from({ length: 24 }, (_, i) => `/videos/video${i + 1}.mp4`);

  const [current, setCurrent] = useState<number | null>(null);

  const next = () => {
    if (current !== null) {
      setCurrent((current + 1) % videos.length);
    }
  };

  const prev = () => {
    if (current !== null) {
      setCurrent((current - 1 + videos.length) % videos.length);
    }
  };

  

  // keyboard arrows
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {

      if (current !== null) {
        if (e.key === "ArrowRight") next();
        if (e.key === "ArrowLeft") prev();
        if (e.key === "Escape") setCurrent(null);
      }

    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);

  }, [current]);

  return (
    <>
      {/* VIDEO STRIP */}

      <section className="w-full overflow-x-auto py-6">

        <div className="flex gap-4 px-4">

          {videos.map((video, i) => (

            <video
              key={i}
              src={video}
              muted
              autoPlay
              loop
              playsInline
              onClick={() => setCurrent(i)}
              className="cursor-pointer w-[300px] h-[420px] object-cover rounded-xl flex-shrink-0"
            />

          ))}

        </div>

      </section>

      {/* FULLSCREEN VIEW */}

      {current !== null && (

        <div className="fixed inset-0 bg-black/95 flex items-center justify-center z-50">

          {/* LEFT */}
          <button
            onClick={prev}
            className="absolute left-6 text-white text-3xl"
          >
            <FaArrowLeft />
          </button>

          {/* VIDEO */}

          <div className="relative">

            <video
              src={videos[current]}
              autoPlay
              muted
              loop
              controls
              className="max-h-[90vh] max-w-[100vw] rounded-lg"
            />

            {/* COUNTER */}

            <div className="absolute bottom-4 right-4 text-white text-sm bg-black/60 px-3 py-1 rounded">
              {current + 1} / {videos.length}
            </div>

          </div>

          {/* RIGHT */}

          <button
            onClick={next}
            className="absolute right-6 text-white text-3xl"
          >
            <FaArrowRight />
          </button>

          {/* CLOSE */}

          <button
            onClick={() => setCurrent(null)}
            className="absolute top-6 right-6 text-white text-2xl"
          >
            ✕
          </button>
        </div>

      )}

    </>
  );
}



