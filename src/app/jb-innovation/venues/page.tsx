import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Users, Sparkles, ArrowRight, Check, MapPin, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionHeading from "@/components/SectionHeading";
import VenueCard from "@/components/VenueCard";
import EnquiryForm from "@/components/EnquiryForm";
import { innovationData } from "@/data/innovationData";

export const metadata = {
  title: "Banquets & Lawns | JB Innovation Lucknow",
  description:
    "Explore grand event spaces at JB Innovation: Crown Hall, Kanishk Hall, expansive green lawns, and open rooftop terrace for weddings and celebrations in Lucknow.",
};

export default function InnovationVenuesPage() {
  return (
    <div className="min-h-screen bg-[#F7F3EB] text-[#252522]">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[52vh] sm:min-h-[60vh] flex flex-col justify-between overflow-hidden bg-[#1F2119] text-[#F7F3EB]">
        {/* Full Visibility Hero Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/innovation/DSC_2803.jpg"
            alt="JB Innovation Grand Crystal Ballroom & Venues"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center scale-105 animate-subtleZoom"
          />
          {/* Subtle Vignettes - Center is 100% Radiant */}
          <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-black/70 via-black/20 to-transparent pointer-events-none" />
          <div className="absolute bottom-0 inset-x-0 h-64 bg-gradient-to-t from-[#1F2119] via-[#1F2119]/75 to-transparent pointer-events-none" />
        </div>

        {/* Top: Breadcrumb */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32">
          <Breadcrumbs
            items={[
              { label: "JB Innovation", href: "/jb-innovation" },
              { label: "Venues & Lawns" },
            ]}
            theme="charcoal"
          />
        </div>

        {/* Bottom: Minimal Punchy Title & Venue Quick Links */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-8 sm:pb-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-5">
            <div className="space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#DFCA9B] block animate-fadeIn">
                Landmark Celebration Spaces
              </span>
              <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#F7F3EB] leading-tight drop-shadow-md animate-fadeInUp">
                Grand Halls, Verdant Lawns &amp; Open Skies
              </h1>
            </div>

            <div className="flex flex-wrap gap-2 text-xs animate-fadeInUp delay-100">
              <a href="#crown-hall" className="px-3.5 py-1.5 bg-black/50 hover:bg-black/70 border border-[#C4A46B]/40 rounded-sm text-[#DFCA9B] font-semibold backdrop-blur-md transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]">
                Crown Hall
              </a>
              <a href="#kanishk-hall" className="px-3.5 py-1.5 bg-black/50 hover:bg-black/70 border border-[#C4A46B]/40 rounded-sm text-[#DFCA9B] font-semibold backdrop-blur-md transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]">
                Kanishk Hall
              </a>
              <a href="#lawns" className="px-3.5 py-1.5 bg-black/50 hover:bg-black/70 border border-[#C4A46B]/40 rounded-sm text-[#DFCA9B] font-semibold backdrop-blur-md transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]">
                Lawns &amp; Banquets
              </a>
              <a href="#terrace" className="px-3.5 py-1.5 bg-black/50 hover:bg-black/70 border border-[#C4A46B]/40 rounded-sm text-[#DFCA9B] font-semibold backdrop-blur-md transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]">
                Open Terrace
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Individual Venues Showcase */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-24">
        {/* Venue 1: Crown Hall */}
        <div id="crown-hall" className="scroll-mt-28 space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-4 reveal-left">
              <div className="relative aspect-[16/10] rounded-sm overflow-hidden shadow-2xl hover-lift">
                <Image
                  src="/images/innovation/DSC_2803.jpg"
                  alt="JB Innovation Crown Hall Grand Crystal Ballroom"
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="text-xs font-semibold px-3 py-1 bg-[#252522]/90 border border-[#C4A46B]/40 text-[#DFCA9B] rounded-sm">
                    Grand Indoor Banquet Hall
                  </span>
                </div>
              </div>

              {/* Sub-gallery photo strip */}
              <div className="grid grid-cols-3 gap-3">
                <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-[#E7DFD1] shadow-sm group hover-lift transition-all duration-300">
                  <Image
                    src="/images/innovation/DSC_1975.jpg"
                    alt="Floral Entrance Arch"
                    fill
                    sizes="20vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-end p-2 opacity-90">
                    <span className="text-[10px] font-semibold text-white tracking-wider uppercase">
                      Floral Entrance
                    </span>
                  </div>
                </div>

                <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-[#E7DFD1] shadow-sm group hover-lift transition-all duration-300 delay-100">
                  <Image
                    src="/images/innovation/DSC_1847.jpg"
                    alt="Rose Wall Bridal Stage"
                    fill
                    sizes="20vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-end p-2 opacity-90">
                    <span className="text-[10px] font-semibold text-white tracking-wider uppercase">
                      Stage Backdrop
                    </span>
                  </div>
                </div>

                <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-[#E7DFD1] shadow-sm group hover-lift transition-all duration-300 delay-200">
                  <Image
                    src="/images/innovation/4th.jpg"
                    alt="Gourmet Buffet Display"
                    fill
                    sizes="20vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-end p-2 opacity-90">
                    <span className="text-[10px] font-semibold text-white tracking-wider uppercase">
                      Buffet Spread
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-5 reveal-right">
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#73765B]">
                Ballroom 01
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#252522]">
                Crown Hall
              </h2>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#73765B]">
                Grandeur, Golden Illuminations & Regal Celebrations
              </p>
              <div className="h-0.5 w-16 bg-[#C4A46B]" />

              <p className="text-sm sm:text-base text-[#252522]/80 font-light leading-relaxed">
                The Crown Hall exudes grandeur with its well-lit interiors, where golden lights reflect off polished floors and rich drapery, while ornate chandeliers sparkle against intricately designed ceilings. A lavish buffet stretches elegantly along one side, featuring gleaming silverware, vibrant floral arrangements, and gourmet delicacies.
              </p>

              <div className="space-y-1.5 text-xs text-[#252522]/80 border-t border-black/10 pt-3">
                <span className="font-bold uppercase tracking-wider text-[#73765B] block mb-2">
                  Suitable Celebrations
                </span>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 bg-[#FAF7F2] border border-[#E7DFD1] rounded-sm">
                    Grand Wedding Receptions
                  </span>
                  <span className="px-2.5 py-1 bg-[#FAF7F2] border border-[#E7DFD1] rounded-sm">
                    Ring Ceremonies & Engagements
                  </span>
                  <span className="px-2.5 py-1 bg-[#FAF7F2] border border-[#E7DFD1] rounded-sm">
                    Corporate Galas
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="#enquire"
                  className="btn-shine inline-flex items-center gap-2 px-6 py-3 bg-[#252522] text-[#F7F3EB] rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-[#3D3D39] transition-all group"
                >
                  <span>Enquire Crown Hall</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C4A46B] transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Venue 2: Kanishk Hall */}
        <div id="kanishk-hall" className="scroll-mt-28 space-y-8 border-t border-black/10 pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-5 order-2 lg:order-1 reveal-left">
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#73765B]">
                Ballroom 02
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#252522]">
                Kanishk Hall
              </h2>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#73765B]">
                Expansive Elegance & Mirrored Sophistication
              </p>
              <div className="h-0.5 w-16 bg-[#C4A46B]" />

              <p className="text-sm sm:text-base text-[#252522]/80 font-light leading-relaxed">
                The Kanishk Hall is expansive and opulent, illuminated by warm, well-lit interiors highlighting its grandeur. Sparkling chandeliers hang from intricately designed ceilings, while mirrored walls reflect the glow, enhancing the sense of space and elegance. Luxurious marble flooring stretches across the hall, complemented by a stylish bar setup for premium cocktail service.
              </p>

              <div className="space-y-1.5 text-xs text-[#252522]/80 border-t border-black/10 pt-3">
                <span className="font-bold uppercase tracking-wider text-[#73765B] block mb-2">
                  Suitable Celebrations
                </span>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 bg-[#FAF7F2] border border-[#E7DFD1] rounded-sm">
                    Weddings & Sangeet Evenings
                  </span>
                  <span className="px-2.5 py-1 bg-[#FAF7F2] border border-[#E7DFD1] rounded-sm">
                    Cocktail Dinners & Bar Mixers
                  </span>
                  <span className="px-2.5 py-1 bg-[#FAF7F2] border border-[#E7DFD1] rounded-sm">
                    Corporate Award Nights
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="#enquire"
                  className="btn-shine inline-flex items-center gap-2 px-6 py-3 bg-[#252522] text-[#F7F3EB] rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-[#3D3D39] transition-all group"
                >
                  <span>Enquire Kanishk Hall</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C4A46B] transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4 order-1 lg:order-2 reveal-right">
              <div className="relative aspect-[16/10] rounded-sm overflow-hidden shadow-2xl hover-lift">
                <Image
                  src="/images/innovation/DSC_1977.jpg"
                  alt="JB Innovation Kanishk Hall Triple Arch Royal Stage"
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="text-xs font-semibold px-3 py-1 bg-[#252522]/90 border border-[#C4A46B]/40 text-[#DFCA9B] rounded-sm">
                    Ballroom with Marble Flooring & Stylish Bar
                  </span>
                </div>
              </div>

              {/* Sub-gallery photo strip */}
              <div className="grid grid-cols-2 gap-3">
                <div className="relative aspect-[16/9] rounded-sm overflow-hidden border border-[#E7DFD1] shadow-sm group">
                  <Image
                    src="/images/innovation/DSC_1973.jpg"
                    alt="Pre-Function Entrance Portal"
                    fill
                    sizes="30vw"
                    className="object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-end p-2 opacity-90">
                    <span className="text-[10px] font-semibold text-white tracking-wider uppercase">
                      Pre-Function Foyer
                    </span>
                  </div>
                </div>

                <div className="relative aspect-[16/9] rounded-sm overflow-hidden border border-[#E7DFD1] shadow-sm group">
                  <Image
                    src="/images/innovation/1st.jpg"
                    alt="Banquet Dinner Table Setting"
                    fill
                    sizes="30vw"
                    className="object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-end p-2 opacity-90">
                    <span className="text-[10px] font-semibold text-white tracking-wider uppercase">
                      Banquet Seating
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Venue 3: Lawns & Banquets */}
        <div id="lawns" className="scroll-mt-28 space-y-8 border-t border-black/10 pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-4 reveal-left">
              <div className="relative aspect-[16/10] rounded-sm overflow-hidden shadow-2xl hover-lift">
                <Image
                  src="/images/innovation/DSC_1959.jpg"
                  alt="JB Innovation Lawns and Banquets VIP Canopy Lounge"
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="text-xs font-semibold px-3 py-1 bg-[#252522]/90 border border-[#C4A46B]/40 text-[#DFCA9B] rounded-sm">
                    Expansive Landscaped Green Lawns &amp; Adjoining Halls
                  </span>
                </div>
              </div>

              {/* Sub-gallery photo strip */}
              <div className="grid grid-cols-3 gap-3">
                <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-[#E7DFD1] shadow-sm group hover-lift transition-all duration-300">
                  <Image
                    src="/images/innovation/DSC_1980.jpg"
                    alt="Varmala Mandap Canopy"
                    fill
                    sizes="20vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-end p-2 opacity-90">
                    <span className="text-[10px] font-semibold text-white tracking-wider uppercase">
                      Mandap Canopy
                    </span>
                  </div>
                </div>

                <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-[#E7DFD1] shadow-sm group hover-lift transition-all duration-300 delay-100">
                  <Image
                    src="/images/innovation/DSC_2102.jpg"
                    alt="Night Lawn Gala"
                    fill
                    sizes="20vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-end p-2 opacity-90">
                    <span className="text-[10px] font-semibold text-white tracking-wider uppercase">
                      Evening Lawns
                    </span>
                  </div>
                </div>

                <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-[#E7DFD1] shadow-sm group hover-lift transition-all duration-300 delay-200">
                  <Image
                    src="/images/innovation/DSC_1963.jpg"
                    alt="Illuminated Garden Pathway"
                    fill
                    sizes="20vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-end p-2 opacity-90">
                    <span className="text-[10px] font-semibold text-white tracking-wider uppercase">
                      Garden Walkway
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-5 reveal-right">
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#73765B]">
                Outdoor & Indoor Synergy
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#252522]">
                Lawns & Banquets
              </h2>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#73765B]">
                Grandeur and Serenity in Nature&apos;s Embrace
              </p>
              <div className="h-0.5 w-16 bg-[#C4A46B]" />

              <p className="text-sm sm:text-base text-[#252522]/80 font-light leading-relaxed">
                Beyond indoor accommodation, we pride ourselves on offering an environment celebrating both grandeur and serenity. The lush lawns invite you to unwind in nature&apos;s embrace, while the adjoining banquet halls stand ready to host your most cherished occasions with elegance and flair.
              </p>

              <div className="space-y-1.5 text-xs text-[#252522]/80 border-t border-black/10 pt-3">
                <span className="font-bold uppercase tracking-wider text-[#73765B] block mb-2">
                  Suitable Celebrations
                </span>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 bg-[#FAF7F2] border border-[#E7DFD1] rounded-sm">
                    Open-Air Wedding Mandaps (Pheras)
                  </span>
                  <span className="px-2.5 py-1 bg-[#FAF7F2] border border-[#E7DFD1] rounded-sm">
                    Grand Evening Receptions
                  </span>
                  <span className="px-2.5 py-1 bg-[#FAF7F2] border border-[#E7DFD1] rounded-sm">
                    Cultural Melas & Exhibitions
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="#enquire"
                  className="btn-shine inline-flex items-center gap-2 px-6 py-3 bg-[#73765B] text-white rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-[#5C5F47] transition-all group"
                >
                  <span>Enquire Lawns & Banquets</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#DFCA9B] transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Venue 4: Open Terrace */}
        <div id="terrace" className="scroll-mt-28 space-y-8 border-t border-black/10 pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-5 order-2 lg:order-1 reveal-left">
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#73765B]">
                Rooftop Venue
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#252522]">
                Open Terrace
              </h2>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#73765B]">
                Bespoke Pre-Wedding Ceremonies Under Open Skies
              </p>
              <div className="h-0.5 w-16 bg-[#C4A46B]" />

              <p className="text-sm sm:text-base text-[#252522]/80 font-light leading-relaxed">
                Elevate your celebrations at our premier open-air rooftop terrace. Whether planning a vibrant Mehndi, a joyful Haldi ceremony, an energetic Sangeet, or an intimate get-together, our terrace provides the perfect backdrop of open skies and panoramic views. Our team offers a completely customizable canvas (bohemian florals, traditional ethnic decor, or modern minimalist aesthetics).
              </p>

              <div className="space-y-1.5 text-xs text-[#252522]/80 border-t border-black/10 pt-3">
                <span className="font-bold uppercase tracking-wider text-[#73765B] block mb-2">
                  Suitable Celebrations
                </span>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 bg-[#FAF7F2] border border-[#E7DFD1] rounded-sm">
                    Mehndi & Haldi Ceremonies
                  </span>
                  <span className="px-2.5 py-1 bg-[#FAF7F2] border border-[#E7DFD1] rounded-sm">
                    Sangeet & Musical Evenings
                  </span>
                  <span className="px-2.5 py-1 bg-[#FAF7F2] border border-[#E7DFD1] rounded-sm">
                    Sundowner Gatherings
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="#enquire"
                  className="btn-shine inline-flex items-center gap-2 px-6 py-3 bg-[#252522] text-[#F7F3EB] rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-[#3D3D39] transition-all group"
                >
                  <span>Enquire Open Terrace</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C4A46B] transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4 order-1 lg:order-2 reveal-right">
              <div className="relative aspect-[16/10] rounded-sm overflow-hidden shadow-2xl hover-lift">
                <Image
                  src="/images/innovation/modern_rooftop_terrace.png"
                  alt="JB Innovation Open Terrace Rooftop Celebration Deck"
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="text-xs font-semibold px-3 py-1 bg-[#252522]/90 border border-[#C4A46B]/40 text-[#DFCA9B] rounded-sm">
                    Open-Air Rooftop Terrace
                  </span>
                </div>
              </div>

              {/* Sub-gallery photo strip */}
              <div className="grid grid-cols-3 gap-3">
                <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-[#E7DFD1] shadow-sm group hover-lift transition-all duration-300">
                  <Image
                    src="/images/innovation/DSC_1955.jpg"
                    alt="Evening Terrace Ambiance"
                    fill
                    sizes="20vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-end p-2 opacity-90">
                    <span className="text-[10px] font-semibold text-white tracking-wider uppercase">
                      Evening Mood
                    </span>
                  </div>
                </div>

                <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-[#E7DFD1] shadow-sm group hover-lift transition-all duration-300 delay-100">
                  <Image
                    src="/images/innovation/DSC_1954.jpg"
                    alt="Terrace Lounge Detail"
                    fill
                    sizes="20vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-end p-2 opacity-90">
                    <span className="text-[10px] font-semibold text-white tracking-wider uppercase">
                      Lounge Detail
                    </span>
                  </div>
                </div>

                <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-[#E7DFD1] shadow-sm group hover-lift transition-all duration-300 delay-200">
                  <Image
                    src="/images/innovation/DSC_1953.jpg"
                    alt="Celebration Setup Detail"
                    fill
                    sizes="20vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-end p-2 opacity-90">
                    <span className="text-[10px] font-semibold text-white tracking-wider uppercase">
                      Decor Corner
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grand Mandap & Real Decor Showcase Section */}
      <section className="py-24 bg-[#252522] text-[#F7F3EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 reveal-up">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#C4A46B]">
              Ceremonial Setups & Decor Mastery
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#F7F3EB]">
              Real Stages, Mandaps & Royal Settings
            </h2>
            <div className="h-0.5 w-16 bg-[#C4A46B] mx-auto" />
            <p className="text-sm sm:text-base text-[#E7DFD1]/80 font-light leading-relaxed">
              Every detail is meticulously planned and executed — from lush floral arches and hanging crystal mandaps to velvet bridal stages and outdoor garden lounges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden shadow-xl border border-white/10 group hover-lift reveal-up">
              <Image
                src="/images/innovation/DSC_1980.jpg"
                alt="Varmala & Pheras Mandap Setup"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 space-y-1">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#C4A46B]">
                  Pheras & Varmala
                </span>
                <h3 className="font-serif text-xl font-bold text-[#F7F3EB]">
                  Hanging Floral Mandap Canopy
                </h3>
                <p className="text-xs text-[#E7DFD1]/80 font-light">
                  Elevated stage with cascading floral strands, warm pendants, and royal ceremonial chairs.
                </p>
              </div>
            </div>

            <div className="relative aspect-[4/5] rounded-sm overflow-hidden shadow-xl border border-white/10 group hover-lift reveal-up delay-150">
              <Image
                src="/images/innovation/DSC_1847.jpg"
                alt="Bridal Rose Wall & Velvet Chaise"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 space-y-1">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#C4A46B]">
                  Reception & Sangeet Stage
                </span>
                <h3 className="font-serif text-xl font-bold text-[#F7F3EB]">
                  Lush Rose Wall Bridal Stage
                </h3>
                <p className="text-xs text-[#E7DFD1]/80 font-light">
                  Dense blush and white rose backdrop with velvet chaise lounge and golden drapery.
                </p>
              </div>
            </div>

            <div className="relative aspect-[4/5] rounded-sm overflow-hidden shadow-xl border border-white/10 group hover-lift reveal-up delay-300">
              <Image
                src="/images/innovation/DSC_1975.jpg"
                alt="Grand Floral Welcoming Archway"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 space-y-1">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#C4A46B]">
                  Baraat & Welcome Portal
                </span>
                <h3 className="font-serif text-xl font-bold text-[#F7F3EB]">
                  Golden Filigree Entrance Arch
                </h3>
                <p className="text-xs text-[#E7DFD1]/80 font-light">
                  Illuminated entrance archway welcoming guests into Crown Hall banquets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section id="enquire" className="py-24 bg-[#FAF7F2] border-t border-[#E7DFD1] px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto reveal-up">
        <EnquiryForm
          initialType="banquet"
          title="Reserve a Venue at JB Innovation"
          subtitle="Direct enquiry for Crown Hall, Kanishk Hall, celebration lawns, or open terrace. Call our coordinators directly at 7080888803 | 7080888847."
          defaultBusiness="innovation"
        />
      </section>

      <Footer />
    </div>
  );
}
