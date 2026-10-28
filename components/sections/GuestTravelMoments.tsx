// components/sections/GuestTravelMoments.tsx
"use client";

import Image from "next/image";
import { Camera, MapPin } from "lucide-react";
import { guestMomentsData } from "@/data/guestMoments";

export function GuestTravelMoments() {
  // Duplicate array for seamless infinite looping
  const doubleMoments = [...guestMomentsData, ...guestMomentsData];

  return (
    <section className="py-16 bg-slate-900 text-white overflow-hidden my-12 rounded-3xl">
      <div className="container mx-auto px-4 mb-8 text-center max-w-3xl">
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-400 bg-teal-950/80 border border-teal-500/30 px-3.5 py-1.5 rounded-full uppercase tracking-widest mb-3">
          <Camera size={14} className="text-teal-400" /> Real Guest Photos
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-2">
          Guest Travel Moments
        </h2>
        <p className="text-slate-300 text-sm sm:text-base font-light">
          Real memories captured by our drivers during unforgettable journeys
          across Sri Lanka.
        </p>
      </div>

      {/* Infinite Scroll Wrapper */}
      <div className="infinite-scroll-container relative w-full overflow-hidden py-2">
        {/* Subtle gradient edges for smooth visual fading */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none" />

        <div className="animate-infinite-scroll flex gap-4 sm:gap-6">
          {doubleMoments.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="relative flex-shrink-0 w-64 sm:w-80 h-48 sm:h-60 rounded-2xl overflow-hidden group border border-slate-800 shadow-lg bg-slate-800/50"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 256px, 320px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />

              {/* Gradient overlay for caption text */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

              {/* Photo Location Badge */}
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <span className="flex items-center gap-1 text-[11px] font-semibold text-teal-300 uppercase tracking-wider mb-0.5">
                  <MapPin size={12} className="text-teal-400" /> {item.location}
                </span>
                {item.caption && (
                  <p className="text-xs font-medium text-slate-200 truncate">
                    {item.caption}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
