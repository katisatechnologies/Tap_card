"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

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
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 -right-32 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"></div>

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

      <div className="relative max-w-7xl mx-auto z-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side - Content */}
          <div className="text-center lg:text-left">
            {/* Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight">
              Share Your Contact <br />
              <span className="bg-gradient-to-r from-indigo-400 to-blue-200 bg-clip-text text-transparent">
                In One Tap
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-300 mb-12">
              A smart NFC Tap Card to instantly share your profile, socials, and contact details —
              no apps, no typing.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#pricing"
                className="bg-gradient-to-r from-[#00193e] to-[#008cffdb] text-white px-10 py-4 rounded-full text-lg font-semibold shadow-xl hover:scale-105 transition text-center"
              >
                Get Your IDORA Card
              </a>

              <a
                href="#how-it-works"
                className="border border-white/20 text-white px-10 py-4 rounded-full text-lg font-semibold backdrop-blur hover:bg-white/10 transition text-center"
              >
                See How It Works
              </a>
            </div>
          </div>

          {/* Right Side - Card & Stage Image */}
          <div className="flex flex-col items-center gap-8 lg:gap-8">
            {/* Actual Card Image */}
            <div className="relative w-80 h-48 perspective-1000">
              <div className="absolute inset-0 animate-rotate-slow preserve-3d">
                <Image
                  src="/images/idora-card.png"
                  alt="IDORA NFC Card"
                  width={320}
                  height={192}
                  className="w-full h-full object-contain rounded-2xl"
                  priority
                />
              </div>
            </div>

            {/* Stage Image */}
            <div className="flex justify-center">
              <Image
                src="/images/hore.png"
                alt="Tap Card Preview"
                width={260}
                height={120}
                className="rounded-xl"
                priority
              />
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .preserve-3d {
          transform-style: preserve-3d;
        }
        
        @keyframes rotate-slow {
          0% {
            transform: rotateY(0deg);
          }
          100% {
            transform: rotateY(360deg);
          }
        }
        
        .animate-rotate-slow {
          animation: rotate-slow 8s linear infinite;
        }
      `}</style>
    </section>
  );
}