"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, Maximize2, X, ChevronLeft, ChevronRight, Check } from "lucide-react";

interface GalleryItem {
  src: string;
  title: string;
  category: "Ballroom" | "Stage" | "Mandap" | "Lawns" | "Terrace" | "Entrance" | "Stay";
  caption: string;
  tag?: string;
}

const galleryItems: GalleryItem[] = [
  {
    src: "/images/innovation/grand_jali_entrance.png",
    title: "Grand Jali Palace Facade",
    category: "Entrance",
    caption: "Carved architectural Jali facade illuminated for regal wedding arrivals",
    tag: "Iconic Facade",
  },
  {
    src: "/images/innovation/DSC_2803.jpg",
    title: "Crown Hall Grand Ballroom",
    category: "Ballroom",
    caption: "Gleaming crystal chandeliers, polished banquet floors and round-table seating",
    tag: "Grand Ballroom",
  },
  {
    src: "/images/innovation/DSC_1975.jpg",
    title: "Floral Grand Entrance Portal",
    category: "Entrance",
    caption: "Golden filigree double doors surrounded by cascading fresh floral archways",
    tag: "Welcome Arch",
  },
  {
    src: "/images/innovation/DSC_1977.jpg",
    title: "Triple Arch Royal Stage",
    category: "Stage",
    caption: "Regal floral arches with warm crystal pendants and red velvet aisle runner",
    tag: "Stage Decor",
  },
  {
    src: "/images/innovation/DSC_1847.jpg",
    title: "Bridal Chaise & Rose Wall",
    category: "Stage",
    caption: "Lush pink and white rose wall with royal velvet chaise lounge and gold drapes",
    tag: "Bridal Stage",
  },
  {
    src: "/images/innovation/DSC_1980.jpg",
    title: "Varmala Mandap Canopy",
    category: "Mandap",
    caption: "Ceremonial mandap canopy with hanging floral strands and royal seating",
    tag: "Mandap Pheras",
  },
  {
    src: "/images/innovation/DSC_1959.jpg",
    title: "VIP Lawns Canopy Lounge",
    category: "Lawns",
    caption: "Curved velvet sofas, patio heaters, and an intimate outdoor evening celebration setting",
    tag: "VIP Lawn Lounge",
  },
  {
    src: "/images/innovation/DSC_2102.jpg",
    title: "Celebration Lawns Night Gala",
    category: "Lawns",
    caption: "Illuminated nighttime gala on expansive manicured lawns with gourmet buffet lines",
    tag: "Open-Air Gala",
  },
  {
    src: "/images/innovation/DSC_1973.jpg",
    title: "Pre-Function Welcome Foyer",
    category: "Entrance",
    caption: "Warmly lit reception foyer with decorative floral pillars welcoming guests",
    tag: "Pre-Function",
  },
  {
    src: "/images/innovation/modern_rooftop_terrace.png",
    title: "Open Rooftop Celebration Deck",
    category: "Terrace",
    caption: "Panoramic open-air terrace for Haldi, Mehndi, and musical sundowner celebrations",
    tag: "Skyline Terrace",
  },
  {
    src: "/images/innovation/DSC_1963.jpg",
    title: "Festive Garden Walkway",
    category: "Lawns",
    caption: "Night-illuminated garden walkway connecting celebration lawns to banquet halls",
    tag: "Lawns Pathway",
  },
  {
    src: "/images/innovation/DSC_0747.jpg",
    title: "Executive Suite Living Lounge",
    category: "Stay",
    caption: "250 sq ft executive suite with integrated L-shaped leather sofa lounge and TV",
    tag: "250 Sq Ft Suite",
  },
  {
    src: "/images/innovation/DSC_0739.jpg",
    title: "Deluxe Guest Room",
    category: "Stay",
    caption: "180 sq ft sanctuary with bespoke wooden panelling, plush bed and modern amenities",
    tag: "Deluxe Stay",
  },
  {
    src: "/images/innovation/DSC_9767.jpg",
    title: "Luxury King Bed Chamber",
    category: "Stay",
    caption: "Tufted leather headboard, designer ambient sconce lighting and premium comfort",
    tag: "Bridal Prep",
  },
  {
    src: "/images/innovation/4th.jpg",
    title: "Gourmet Banquet Catering",
    category: "Ballroom",
    caption: "Lavish multi-cuisine buffet spreads with gleaming silverware and floral setups",
    tag: "Banquet Dining",
  },
  {
    src: "/images/innovation/1st.jpg",
    title: "Regal Banquet Atmosphere",
    category: "Ballroom",
    caption: "Fine dining banquet setups prepared for milestone family celebrations",
    tag: "Banquets",
  },
];

const categories = [
  { id: "all", label: "All Moments" },
  { id: "Stage", label: "Stages & Mandap" },
  { id: "Ballroom", label: "Grand Banquets" },
  { id: "Lawns", label: "Lush Lawns" },
  { id: "Entrance", label: "Grand Entrances" },
  { id: "Stay", label: "Suites & Stay" },
  { id: "Terrace", label: "Rooftop Terrace" },
] as const;

export default function InnovationGallery() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState<boolean>(false);

  const filteredItems = galleryItems.filter((item) => {
    if (activeCategory === "all") return true;
    if (activeCategory === "Stage") {
      return item.category === "Stage" || item.category === "Mandap";
    }
    return item.category === activeCategory;
  });

  const displayedItems = showAll ? filteredItems : filteredItems.slice(0, 6);

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % filteredItems.length);
    }
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-[#1A1C15] text-[#F7F3EB] relative overflow-hidden border-t border-white/5">
      {/* Background accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C4A46B]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#73765B]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Compact Header & Filter Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-white/10 reveal-up">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-[#C4A46B]/30 text-[10px] font-semibold text-[#DFCA9B] tracking-[0.2em] uppercase mb-2">
              <Sparkles className="w-3 h-3 text-[#C4A46B]" />
              <span>Real Property Gallery</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#F7F3EB]">
              Moments Crafted in Luxury
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setShowAll(false);
                }}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 ${
                  activeCategory === cat.id
                    ? "bg-[#C4A46B] text-[#252522] shadow-md font-bold scale-105"
                    : "bg-white/5 text-[#E7DFD1]/70 hover:bg-white/10 hover:text-white border border-white/10"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Visual-First Gallery Grid without Clunky Bottom Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {displayedItems.map((item, index) => (
            <div
              key={item.src + index}
              onClick={() => openLightbox(index)}
              className="group relative aspect-[16/11] rounded-sm overflow-hidden bg-black/40 border border-white/10 shadow-lg cursor-pointer hover:border-[#C4A46B]/60 transition-all duration-500 hover-lift reveal-up"
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
              />

              {/* Permanent Bottom Gradient with Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent transition-opacity" />

              {item.tag && (
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 bg-black/60 backdrop-blur-md border border-[#C4A46B]/40 text-[#DFCA9B] rounded-sm">
                    {item.tag}
                  </span>
                </div>
              )}

              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-105 bg-black/60 backdrop-blur-md p-2 rounded-sm text-white">
                <Maximize2 className="w-3.5 h-3.5 text-[#DFCA9B]" />
              </div>

              <div className="absolute bottom-3.5 left-4 right-4">
                <span className="text-[10px] uppercase tracking-widest text-[#C4A46B] font-semibold block mb-0.5">
                  {item.category}
                </span>
                <h3 className="font-serif text-base sm:text-lg font-bold text-[#F7F3EB] group-hover:text-[#DFCA9B] transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-[11px] text-[#E7DFD1]/70 font-light line-clamp-1 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Toggle Button */}
        {filteredItems.length > 6 && (
          <div className="text-center mt-10 reveal-up">
            <button
              onClick={() => setShowAll(!showAll)}
              className="btn-shine px-6 py-2.5 rounded-sm bg-white/5 hover:bg-white/10 border border-[#C4A46B]/40 text-xs font-bold uppercase tracking-widest text-[#DFCA9B] hover:text-white transition-all backdrop-blur-sm shadow-md"
            >
              {showAll ? "Show Less Photos" : `View All Photos (${filteredItems.length})`}
            </button>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && filteredItems[selectedImageIndex] && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-all z-50 hover:scale-110 active:scale-95"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-4 sm:left-8 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all z-50 hover:scale-110 active:scale-95"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 sm:right-8 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all z-50 hover:scale-110 active:scale-95"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div
            className="max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center animate-fadeInUp"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[65vh] sm:h-[72vh] rounded-sm overflow-hidden shadow-2xl">
              <Image
                src={filteredItems[selectedImageIndex].src}
                alt={filteredItems[selectedImageIndex].title}
                fill
                sizes="90vw"
                className="object-contain"
                priority
              />
            </div>

            <div className="mt-4 text-center max-w-2xl px-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#C4A46B]">
                {filteredItems[selectedImageIndex].category} • {selectedImageIndex + 1} of{" "}
                {filteredItems.length}
              </span>
              <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#F7F3EB] mt-1">
                {filteredItems[selectedImageIndex].title}
              </h4>
              <p className="text-xs sm:text-sm text-[#E7DFD1]/80 mt-1 font-light">
                {filteredItems[selectedImageIndex].caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
