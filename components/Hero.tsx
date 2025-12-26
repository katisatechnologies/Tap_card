"use client";
import { useState, useEffect } from "react";

export default function Hero() {
  const totalRings = 3; // total number of rings
  const [visibleRings, setVisibleRings] = useState(0);

  useEffect(() => {
    let step = 0; // 0 means all invisible
    const interval = setInterval(() => {
      step = (step + 1) % (totalRings + 1); // cycle: 0 → 1 → 2 → 3 → 0 → ...
      setVisibleRings(step);
    }, 800); // change speed here

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-[#0B0F1A] overflow-visible">
      
      {/* Background glows */} 
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl">
      </div> <div className="absolute top-1/3 -right-32 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>

      {/* Top-left rings */}
      <div className="absolute -top-24 -left-32 w-80 h-80 overflow-visible z-10">
        {visibleRings >= 1 && <div className="absolute inset-0 m-auto w-16 h-16 border-2 border-white/10 rounded-full animate-pulse"></div>}
        {visibleRings >= 2 && <div className="absolute inset-0 m-auto w-32 h-32 border-2 border-white/10 rounded-full animate-pulse"></div>}
        {visibleRings >= 3 && <div className="absolute inset-0 m-auto w-52 h-52 border-2 border-white/10 rounded-full animate-pulse"></div>}
      </div>

      {/* Bottom-right rings */}
      <div className="absolute top-1/3 -right-40 w-80 h-80 overflow-visible z-10">
        {visibleRings >= 1 && <div className="absolute inset-0 m-auto w-11 h-11 border-2 border-white/10 rounded-full animate-pulse"></div>}
        {visibleRings >= 2 && <div className="absolute inset-0 m-auto w-28 h-28 border-2 border-white/10 rounded-full animate-pulse"></div>}
        {visibleRings >= 3 && <div className="absolute inset-0 m-auto w-52 h-52 border-2 border-white/10 rounded-full animate-pulse"></div>}
      </div>

      <div className="relative max-w-7xl mx-auto text-center z-20">
        {/* Heading */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight">
          Share Your Contact <br />
          <span className="bg-gradient-to-r from-indigo-400 to-blue-200 bg-clip-text text-transparent">
            In One Tap
          </span>
        </h1>

        <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
          A smart NFC Tap Card to instantly share your profile, socials, and contact details —
          no apps, no typing.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
          <a
            href="#pricing"
            className="bg-gradient-to-r from-[#00193e] to-[#008cffdb] text-white px-10 py-4 rounded-full text-lg font-semibold shadow-xl hover:scale-105 transition"
          >
            Get Your TapCard
          </a>

          <a
            href="#how-it-works"
            className="border border-white/20 text-white px-10 py-4 rounded-full text-lg font-semibold backdrop-blur hover:bg-white/10 transition"
          >
            See How It Works
          </a>
        </div>
      </div>
    </section>
  );
}
