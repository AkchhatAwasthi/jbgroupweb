"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

interface VenueSetting {
  id: string;
  name: string;
  setting: string;
  description: string;
  image: string;
  features: string[];
  link: string;
}

const venuesList: VenueSetting[] = [
  {
    id: "crown-hall",
    name: "Crown Hall",
    setting: "Grand Indoor Banquet Hall",
    description:
      "Golden illuminations, sparkling crystal chandeliers, polished banquet floors, and lavish buffet presentation.",
    image: "/images/innovation/DSC_2803.jpg",
    features: ["Crystal Chandeliers", "Lavish Buffet", "Decorated Stage"],
    link: "/jb-innovation/venues#crown-hall",
  },
  {
    id: "kanishk-hall",
    name: "Kanishk Hall",
    setting: "Opulent Ballroom & Bar",
    description:
      "Luxurious imported marble flooring, mirrored depth walls, and an integrated stylish bar setup for cocktail receptions.",
    image: "/images/innovation/DSC_1977.jpg",
    features: ["Marble Flooring", "Integrated Bar", "Mirrored Depth"],
    link: "/jb-innovation/venues#kanishk-hall",
  },
  {
    id: "lawns",
    name: "Lawns & Banquets",
    setting: "Expansive Green Lawns",
    description:
      "Manicured open celebration turf seamlessly connected to indoor halls, featuring illuminated garden lounges and grand mandap staging.",
    image: "/images/innovation/DSC_1959.jpg",
    features: ["Celebration Turf", "Mandap Staging", "Canopy Lounge"],
    link: "/jb-innovation/venues#lawns",
  },
  {
    id: "terrace",
    name: "Open Terrace",
    setting: "Open-Air Rooftop Deck",
    description:
      "Panoramic skyline views under open skies, completely customizable for Haldi, Mehndi, energetic sangeets, and private sundowners.",
    image: "/images/innovation/modern_rooftop_terrace.png",
    features: ["Skyline Panorama", "Haldi & Mehndi Deck", "Custom Themes"],
    link: "/jb-innovation/venues#terrace",
  },
];

export default function InnovationVenuesSlider() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 bg-[#1E2018] text-[#F7F3EB] border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Title & Slider Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 pb-6 border-b border-white/10 reveal-up">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#C4A46B] block mb-2">
              Celebration Venues
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F7F3EB]">
              Four Majestic Settings
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/jb-innovation/venues"
              className="group inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#DFCA9B] hover:text-white transition-colors"
            >
              <span>Compare All Venues</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            {/* Slider Navigation Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={scrollLeft}
                aria-label="Previous Venue"
                className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:border-[#C4A46B]/60 text-[#DFCA9B] hover:text-white transition-all shadow-md active:scale-95 hover:bg-[#C4A46B]/10"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={scrollRight}
                aria-label="Next Venue"
                className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:border-[#C4A46B]/60 text-[#DFCA9B] hover:text-white transition-all shadow-md active:scale-95 hover:bg-[#C4A46B]/10"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* 4 Venues in One Line (Responsive Grid on Large Screens + Smooth Horizontal Snap Slider on Mobile/Tablet) */}
        <div
          ref={scrollContainerRef}
          className="flex lg:grid lg:grid-cols-4 gap-5 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 scroll-smooth snap-x snap-mandatory scrollbar-none"
        >
          {venuesList.map((venue, idx) => (
            <div
              key={venue.id}
              className={`w-[85vw] sm:w-[48vw] lg:w-auto shrink-0 snap-start bg-[#262820] border border-white/10 hover:border-[#C4A46B]/60 rounded-sm overflow-hidden shadow-xl transition-all duration-300 flex flex-col justify-between group hover-lift reveal-up ${
                idx === 1 ? "delay-100" : idx === 2 ? "delay-200" : idx === 3 ? "delay-300" : ""
              }`}
            >
              {/* Image Frame */}
              <div className="relative aspect-[16/11] overflow-hidden bg-black/40">
                <Image
                  src={venue.image}
                  alt={venue.name}
                  fill
                  sizes="(max-width: 640px) 85vw, (max-width: 1024px) 48vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 bg-black/75 backdrop-blur-md border border-[#C4A46B]/40 text-[#DFCA9B] rounded-sm block">
                    {venue.setting}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 space-y-3.5 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#F7F3EB] group-hover:text-[#DFCA9B] transition-colors">
                    {venue.name}
                  </h3>
                  <p className="text-xs text-[#E7DFD1]/80 font-light leading-relaxed line-clamp-2">
                    {venue.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {venue.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 bg-white/5 border border-white/10 text-[10px] text-[#DFCA9B] rounded-sm transition-colors hover:border-[#DFCA9B]/50"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Strip */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                  <Link
                    href={venue.link}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#DFCA9B] hover:text-white transition-colors group/link"
                  >
                    <span>Details</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/link:translate-x-1" />
                  </Link>
                  <a
                    href="#enquire"
                    className="text-xs text-[#E7DFD1]/70 hover:text-[#DFCA9B] transition-colors"
                  >
                    Enquire Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
