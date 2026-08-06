"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Hero() {
  const totalRings = 3;
  const [visibleRings, setVisibleRings] = useState(0);

  useEffect(() => {
    let step = 0;
    const interval = setInterval(() => {
      step = (step + 1) % (totalRings + 1);
      setVisibleRings(step);
    }, 900);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-[#0B0F1A] overflow-visible">
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 -right-32 w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl"></div>

      <div className="absolute -top-24 -left-32 w-80 h-80 overflow-visible z-10">
        {visibleRings >= 1 && <div className="absolute inset-0 m-auto w-16 h-16 border-2 border-white/10 rounded-full animate-pulse"></div>}
        {visibleRings >= 2 && <div className="absolute inset-0 m-auto w-32 h-32 border-2 border-white/10 rounded-full animate-pulse"></div>}
        {visibleRings >= 3 && <div className="absolute inset-0 m-auto w-52 h-52 border-2 border-white/10 rounded-full animate-pulse"></div>}
      </div>

      <div className="absolute top-1/3 -right-40 w-80 h-80 overflow-visible z-10">
        {visibleRings >= 1 && <div className="absolute inset-0 m-auto w-11 h-11 border-2 border-white/10 rounded-full animate-pulse"></div>}
        {visibleRings >= 2 && <div className="absolute inset-0 m-auto w-28 h-28 border-2 border-white/10 rounded-full animate-pulse"></div>}
        {visibleRings >= 3 && <div className="absolute inset-0 m-auto w-52 h-52 border-2 border-white/10 rounded-full animate-pulse"></div>}
      </div>

      <div className="relative max-w-7xl mx-auto z-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side - Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-cyan-200 font-semibold px-4 py-2 rounded-full mb-6">
              Sri Lanka's digital identity platform
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight">
              The last business card <br />
              <span className="bg-gradient-to-r from-cyan-300 to-emerald-300 bg-clip-text text-transparent">
                you will ever need
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-200 mb-8">
              IDORA helps professionals share contact details, social links, and business actions in one tap, then track real results from every interaction.
            </p>

            <div className="grid sm:grid-cols-3 gap-3 mb-10 text-left">
              <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                <p className="text-sm text-gray-300">More saved contacts</p>
                <p className="text-white font-semibold">Prospects keep your details the moment you meet</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                <p className="text-sm text-gray-300">Faster follow-up</p>
                <p className="text-white font-semibold">Lead capture starts while interest is still high</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                <p className="text-sm text-gray-300">Premium first impression</p>
                <p className="text-white font-semibold">One modern profile for contact, socials, and actions</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#pricing"
                className="bg-gradient-to-r from-cyan-500 to-emerald-500 text-black px-10 py-4 rounded-full text-lg font-bold shadow-xl hover:scale-105 transition text-center"
              >
                Get Your IDORA Card
              </a>

              <a
                href="#how-it-works"
                className="border border-white/20 text-white px-10 py-4 rounded-full text-lg font-semibold backdrop-blur hover:bg-white/10 transition text-center"
              >
                Watch 10-Second Demo
              </a>
            </div>
          </div>

          {/* Right Side - Card & Stage Image */}
          <div className="flex flex-col items-center gap-8 lg:gap-8">
            <div className="relative w-80 h-48 perspective-1000">
              <div className="absolute inset-0 flip-rotate-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <Image
                      src="/images/front-card.png"
                      alt="IDORA Card Front"
                      width={320}
                      height={192}
                      className="w-full h-full object-contain rounded-2xl"
                      priority
                    />
                  </div>
                  <div className="flip-card-back">
                    <Image
                      src="/images/idora-card.png"
                      alt="IDORA Card Back"
                      width={320}
                      height={192}
                      className="w-full h-full object-contain rounded-2xl"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full max-w-md bg-white/5 border border-white/15 rounded-2xl p-5">
              <p className="text-cyan-200 font-semibold mb-3">10-second product story</p>
              <div className="space-y-2 text-sm sm:text-base">
                {[
                  "Tap card",
                  "Profile opens",
                  "Contact saved",
                  "Lead captured",
                  "Follow-up starts"
                ].map((item, index) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-cyan-500 text-black font-bold text-xs flex items-center justify-center">{index + 1}</span>
                    <span className="text-gray-100">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center">
              <Image
                src="/images/hore.png"
                alt="Tap Card Preview"
                width={260}
                height={120}
                className="rounded-xl border border-white/15"
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
        .flip-rotate-card {
          width: 100%;
          height: 100%;
          perspective: 1000px;
        }
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          animation: flip-rotate 10s linear infinite;
        }
        .flip-card-front, .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
        }
        .flip-card-front {
          z-index: 2;
        }
        .flip-card-back {
          transform: rotateY(180deg);
          z-index: 1;
        }
        @keyframes flip-rotate {
          0% {
            transform: rotateY(0deg);
          }
          50% {
            transform: rotateY(180deg);
          }
          100% {
            transform: rotateY(360deg);
          }
        }
      `}</style>
    </section>
  );
}