import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Users, Utensils, GlassWater, Coffee, Sparkles, ArrowRight, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionHeading from "@/components/SectionHeading";
import EnquiryForm from "@/components/EnquiryForm";
import { skyhiltonData } from "@/data/skyhiltonData";

export const metadata = {
  title: "Dining, Bar & Café | JB Skyhilton LDA Colony, Lucknow",
  description:
    "Explore culinary excellence at JB Skyhilton: 70-guest Fine Dine Restaurant, 70-guest Panoramic Bar, and intimate 20–25 guest Café in Lucknow.",
};

export default function SkyhiltonDiningPage() {
  const restaurant = skyhiltonData.dining.find((d) => d.id === "fine-dine")!;
  const bar = skyhiltonData.dining.find((d) => d.id === "the-bar")!;
  const cafe = skyhiltonData.dining.find((d) => d.id === "cafe")!;

  return (
    <div className="min-h-screen bg-[#F7F3EB] text-[#252522]">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-[#252522] text-[#F7F3EB] overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/skyhilton/bar_wooden_lounge.png"
            alt="JB Skyhilton Dining & Rooftop Lounge"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "JB Skyhilton", href: "/skyhilton" },
              { label: "Dining, Bar & Café" },
            ]}
            theme="charcoal"
          />

          <div className="max-w-3xl mt-6 space-y-4">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#C4A46B]">
              Gastronomic Excellence
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F7F3EB] leading-tight">
              Culinary Artistry Across Three Distinct Settings
            </h1>
            <p className="text-base sm:text-lg text-[#E7DFD1]/80 font-light leading-relaxed">
              From our 70-guest Fine Dine Restaurant featuring authentic Indian and continental classics to our panoramic 70-guest Bar, open-air rooftop lounges, and intimate 20–25 guest Café.
            </p>
          </div>
        </div>
      </section>

      {/* Experience 1: Fine Dine Restaurant (70 PAX) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative aspect-[16/11] rounded-sm overflow-hidden shadow-2xl">
            <Image
              src="/images/skyhilton/restaurant_botanical.png"
              alt="JB Skyhilton Fine Dine Restaurant"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 bg-[#252522]/90 border border-[#C4A46B]/40 text-xs font-semibold text-[#DFCA9B] rounded-sm">
                Seating Capacity: 70 Guests (70 PAX)
              </span>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C4A46B]">
              <Utensils className="w-4 h-4 text-[#C4A46B]" />
              <span>Fine Dining Restaurant</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#252522] leading-tight">
              {restaurant.headline}
            </h2>

            <div className="h-0.5 w-16 bg-[#C4A46B]" />

            <p className="text-sm sm:text-base text-[#252522]/80 font-light leading-relaxed">
              {restaurant.description}
            </p>

            <div className="space-y-2 pt-2 border-t border-black/10 text-xs text-[#252522]/80">
              <span className="font-bold uppercase tracking-wider text-[#73765B] block mb-2">
                Culinary Highlights
              </span>
              {restaurant.cuisineOrHighlights.map((hl, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#C4A46B] shrink-0" />
                  <span>{hl}</span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <a
                href="#reserve"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#252522] text-[#F7F3EB] rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-[#3D3D39] transition-all"
              >
                <span>Reserve a Table (70 PAX)</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C4A46B]" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Experience 2: The Bar (70 PAX) */}
      <section className="py-24 bg-[#252522] text-[#F7F3EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#DFCA9B]">
                <GlassWater className="w-4 h-4 text-[#C4A46B]" />
                <span>The Bar • Panoramic Views</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#F7F3EB] leading-tight">
                {bar.headline}
              </h2>

              <div className="h-0.5 w-16 bg-[#C4A46B]" />

              <p className="text-sm sm:text-base text-[#E7DFD1]/80 font-light leading-relaxed">
                {bar.description}
              </p>

              <div className="space-y-2 pt-2 border-t border-white/10 text-xs text-[#E7DFD1]/80">
                <span className="font-bold uppercase tracking-wider text-[#C4A46B] block mb-2">
                  Atmosphere & Beverages
                </span>
                {bar.cuisineOrHighlights.map((hl, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#C4A46B] shrink-0" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <a
                  href="#reserve"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#C4A46B] text-[#252522] rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-[#DFCA9B] transition-all shadow-md"
                >
                  <span>Plan Private Gathering / Party</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 grid grid-cols-2 gap-4">
              <div className="relative aspect-[3/4] rounded-sm overflow-hidden shadow-2xl">
                <Image
                  src="/images/skyhilton/bar_wooden_lounge.png"
                  alt="Skyhilton Rooftop Lounge Bar"
                  fill
                  sizes="25vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[3/4] rounded-sm overflow-hidden shadow-2xl mt-8">
                <Image
                  src="/images/skyhilton/bar_dusk.png"
                  alt="Rooftop Bar at Dusk"
                  fill
                  sizes="25vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience 3: Elegant Café (20–25 PAX) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative aspect-[16/11] rounded-sm overflow-hidden shadow-2xl">
            <Image
              src="/images/skyhilton/cafe_velvet.png"
              alt="JB Skyhilton Elegant Café"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 bg-[#252522]/90 border border-[#C4A46B]/40 text-xs font-semibold text-[#DFCA9B] rounded-sm">
                Seating Capacity: 20 to 25 Guests
              </span>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C4A46B]">
              <Coffee className="w-4 h-4 text-[#C4A46B]" />
              <span>Boutique Café</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#252522] leading-tight">
              {cafe.headline}
            </h2>

            <div className="h-0.5 w-16 bg-[#C4A46B]" />

            <p className="text-sm sm:text-base text-[#252522]/80 font-light leading-relaxed">
              {cafe.description}
            </p>

            <div className="space-y-2 pt-2 border-t border-black/10 text-xs text-[#252522]/80">
              <span className="font-bold uppercase tracking-wider text-[#73765B] block mb-2">
                Café Highlights
              </span>
              {cafe.cuisineOrHighlights.map((hl, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#C4A46B] shrink-0" />
                  <span>{hl}</span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <a
                href="#reserve"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#252522] text-[#F7F3EB] rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-[#3D3D39] transition-all"
              >
                <span>Book Intimate Café Gathering</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C4A46B]" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Rooftop & Courtyard Open-Air Dining Showcase */}
      <section className="py-20 bg-[#1D1D1B] text-[#F7F3EB] border-t border-[#C4A46B]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#C4A46B]">
              Open-Air & Terrace Ambiances
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#F7F3EB] mt-2">
              Rooftop Lounges & Courtyard Dining
            </h2>
            <p className="text-sm text-[#E7DFD1]/70 font-light mt-3">
              Immerse in open-air dining under Lucknow skies, from sunlit terrace luncheons to vibrant neon evening sessions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="group relative aspect-[4/3] rounded-sm overflow-hidden shadow-xl border border-white/10 hover:border-[#C4A46B]/40 transition-all">
              <Image
                src="/images/skyhilton/rooftop_terrace.png"
                alt="Sunlit Skyhilton Rooftop Terrace"
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex items-end p-4">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#C4A46B] block">Rooftop Terrace</span>
                  <span className="text-xs font-semibold text-white leading-tight block mt-0.5">Sunlit Daytime Luncheons</span>
                </div>
              </div>
            </div>

            <div className="group relative aspect-[4/3] rounded-sm overflow-hidden shadow-xl border border-white/10 hover:border-[#C4A46B]/40 transition-all">
              <Image
                src="/images/skyhilton/courtyard_dining_atrium.png"
                alt="Modern Courtyard Dining Atrium"
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex items-end p-4">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#C4A46B] block">Courtyard Atrium</span>
                  <span className="text-xs font-semibold text-white leading-tight block mt-0.5">Atrium Dining Architecture</span>
                </div>
              </div>
            </div>

            <div className="group relative aspect-[4/3] rounded-sm overflow-hidden shadow-xl border border-white/10 hover:border-[#C4A46B]/40 transition-all">
              <Image
                src="/images/skyhilton/bar_rooftop_lounge.png"
                alt="Skyhilton Rooftop Lounge"
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex items-end p-4">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#C4A46B] block">Rooftop Lounge</span>
                  <span className="text-xs font-semibold text-white leading-tight block mt-0.5">Warm Wooden Panoramic Bar</span>
                </div>
              </div>
            </div>

            <div className="group relative aspect-[4/3] rounded-sm overflow-hidden shadow-xl border border-white/10 hover:border-[#C4A46B]/40 transition-all">
              <Image
                src="/images/skyhilton/bar_neon_lounge.png"
                alt="Skyhilton Neon Rooftop Lounge"
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex items-end p-4">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#C4A46B] block">Nightlife & Bar</span>
                  <span className="text-xs font-semibold text-white leading-tight block mt-0.5">Ambient Neon Evening Lounge</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reservation Form */}
      <section id="reserve" className="py-24 bg-[#FAF7F2] border-t border-[#E7DFD1] px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <EnquiryForm
          initialType="general"
          title="Reserve a Table or Private Gathering"
          subtitle="Enquire for table reservations at our 70-pax Fine Dine Restaurant, private party bookings at The Bar, or intimate gatherings at the Café."
          defaultBusiness="skyhilton"
        />
      </section>

      <Footer />
    </div>
  );
}
