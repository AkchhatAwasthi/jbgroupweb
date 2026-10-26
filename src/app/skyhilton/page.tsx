import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Check,
  Phone,
  Mail,
  MapPin,
  Clock,
  Sparkles,
  Bed,
  Utensils,
  PartyPopper,
  Users,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionHeading from "@/components/SectionHeading";
import RoomCard from "@/components/RoomCard";
import VenueCard from "@/components/VenueCard";
import EnquiryForm from "@/components/EnquiryForm";
import { skyhiltonData } from "@/data/skyhiltonData";

export const metadata = {
  title: "JB Skyhilton | Boutique Hotel, Dining & Banquets, LDA Colony, Lucknow",
  description:
    "Discover JB Skyhilton in Sector B, Bargawan, LDA Colony, Lucknow. Featuring 27 boutique guest rooms, a 70-guest fine dine restaurant, panoramic bar, café, and versatile banquet spaces.",
};

export default function SkyhiltonHomePage() {
  return (
    <div className="min-h-screen bg-[#FAF7F5] text-[#2A141D]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#241119]">
        <div className="absolute inset-0">
          <Image
            src="/images/skyhilton/rooftop_terrace.png"
            alt="JB Skyhilton Sunlit Rooftop Terrace"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#241119] via-[#241119]/55 to-black/45" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-[#FAF7F5] pt-24 pb-16">
          <Breadcrumbs
            items={[{ label: "JB Skyhilton" }]}
            theme="charcoal"
          />

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#CCA08A]/40 text-xs tracking-[0.25em] uppercase text-[#E5BEA9] font-medium mt-6 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#CCA08A]" />
            <span>LDA Colony, Lucknow • Boutique Hotel & Culinary Haven</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#FAF7F5] leading-[1.1] mb-6">
            Your Stay. Your Celebration. <br className="hidden sm:inline" />
            <span className="italic font-normal font-serif text-[#CCA08A]">
              Your Skyhilton.
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-lg font-light text-[#EBDED8] leading-relaxed mb-10">
            A privately owned boutique hotel offering 27 tastefully done up rooms, an upscale Bar, a 70-guest Fine Dine Restaurant, multiple banquet halls, and an intimate café.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/skyhilton/rooms"
              className="w-full sm:w-auto px-7 py-3.5 bg-[#CCA08A] text-[#241119] rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-[#DEB5A0] transition-all shadow-xl flex items-center justify-center gap-2"
            >
              <Bed className="w-4 h-4" />
              <span>Book a Room</span>
            </Link>

            <Link
              href="/skyhilton/dining"
              className="w-full sm:w-auto px-7 py-3.5 bg-white/10 hover:bg-white/20 text-[#FAF7F5] border border-[#CCA08A]/40 rounded-sm text-xs font-bold uppercase tracking-widest transition-all backdrop-blur-md flex items-center justify-center gap-2"
            >
              <Utensils className="w-4 h-4 text-[#CCA08A]" />
              <span>Explore Dining & Bar</span>
            </Link>

            <Link
              href="/skyhilton/banquets"
              className="w-full sm:w-auto px-7 py-3.5 bg-white/10 hover:bg-white/20 text-[#FAF7F5] border border-[#CCA08A]/40 rounded-sm text-xs font-bold uppercase tracking-widest transition-all backdrop-blur-md flex items-center justify-center gap-2"
            >
              <PartyPopper className="w-4 h-4 text-[#CCA08A]" />
              <span>Plan an Event</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Property Overview */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Refined Story & Key Pillars */}
          <div className="lg:col-span-6 space-y-7">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#CCA08A]/15 border border-[#CCA08A]/35 text-xs font-semibold uppercase tracking-[0.2em] text-[#9E5E48]">
                <Sparkles className="w-3.5 h-3.5 text-[#CCA08A]" />
                <span>Boutique Hotel • Sector B, Bargawan</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2A141D] leading-[1.15] tracking-tight">
                A Refined Hospitality Experience, <br />
                <span className="italic font-normal text-[#CCA08A]">Tailored to You.</span>
              </h2>
            </div>

            <p className="text-base text-[#2A141D]/80 font-light leading-relaxed">
              {skyhiltonData.overview.description}
            </p>

            {/* Sleek 3-Pillar Highlight Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-4 rounded-sm bg-[#F6EFEA] border border-[#EADBD5] hover:border-[#CCA08A]/50 transition-colors">
                <span className="text-2xl font-serif font-bold text-[#2A141D] block">27</span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#A3624D] block mt-0.5">Boutique Rooms</span>
                <p className="text-[11px] text-[#6E565F] mt-1 leading-snug">Bed & breakfast comfort with express check-in</p>
              </div>

              <div className="p-4 rounded-sm bg-[#F6EFEA] border border-[#EADBD5] hover:border-[#CCA08A]/50 transition-colors">
                <span className="text-2xl font-serif font-bold text-[#2A141D] block">70</span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#A3624D] block mt-0.5">Fine Dine (PAX)</span>
                <p className="text-[11px] text-[#6E565F] mt-1 leading-snug">Multi-cuisine delights & private dining tables</p>
              </div>

              <div className="p-4 rounded-sm bg-[#F6EFEA] border border-[#EADBD5] hover:border-[#CCA08A]/50 transition-colors">
                <span className="text-2xl font-serif font-bold text-[#2A141D] block">70</span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#A3624D] block mt-0.5">Rooftop Bar</span>
                <p className="text-[11px] text-[#6E565F] mt-1 leading-snug">Panoramic views, cocktails & ambient nightlife</p>
              </div>
            </div>

            {/* Sleek Policy Strip */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 py-3 px-4 rounded-sm bg-white border border-[#EADBD5] text-xs text-[#2A141D]/80">
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#CCA08A]" />
                <span>Check-in: <strong className="font-semibold text-[#2A141D]">14:00</strong> | Check-out: <strong className="font-semibold text-[#2A141D]">12:00</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#CCA08A]" />
                <span>Express Check-in Available</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <Link
                href="/skyhilton/rooms"
                className="px-6 py-3 bg-[#241119] text-[#FAF7F5] hover:bg-[#CCA08A] hover:text-[#241119] transition-all rounded-sm text-xs font-bold uppercase tracking-widest flex items-center gap-2 shadow-sm"
              >
                <span>View All 27 Rooms</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/skyhilton/dining"
                className="px-6 py-3 bg-transparent text-[#2A141D] border border-[#2A141D]/30 hover:border-[#CCA08A] hover:text-[#A3624D] transition-all rounded-sm text-xs font-bold uppercase tracking-widest flex items-center gap-2"
              >
                <Utensils className="w-3.5 h-3.5 text-[#CCA08A]" />
                <span>Dining & Bar</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Sleek, High-End Bento Image Grid */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-12 gap-4">
              {/* Main Feature: Rooftop Lounge / Bar */}
              <div className="col-span-12 relative aspect-[16/9] rounded-sm overflow-hidden shadow-xl group border border-[#EADBD5]">
                <Image
                  src="/images/skyhilton/bar_rooftop_lounge.png"
                  alt="Skyhilton Rooftop Lounge Bar"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-5">
                  <div className="flex items-center justify-between w-full">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#E5BEA9] block">Nightlife & Cocktails</span>
                      <span className="text-base font-serif font-bold text-white">Skyhilton Rooftop Lounge</span>
                    </div>
                    <span className="text-xs px-2.5 py-1 rounded bg-white/20 backdrop-blur-md text-white font-medium border border-white/30">70 PAX</span>
                  </div>
                </div>
              </div>

              {/* Sub-Card 1: Deluxe King Suite */}
              <div className="col-span-6 relative aspect-[4/3] rounded-sm overflow-hidden shadow-lg group border border-[#EADBD5]">
                <Image
                  src="/images/skyhilton/suite_retreat.png"
                  alt="Skyhilton Modern Suite Retreat"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-4">
                  <div>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-[#E5BEA9] block">Stay</span>
                    <span className="text-xs font-semibold text-white">Modern Suites & Rooms</span>
                  </div>
                </div>
              </div>

              {/* Sub-Card 2: Botanical Fine Dine */}
              <div className="col-span-6 relative aspect-[4/3] rounded-sm overflow-hidden shadow-lg group border border-[#EADBD5]">
                <Image
                  src="/images/skyhilton/restaurant_botanical.png"
                  alt="Skyhilton Fine Dine Restaurant"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-4">
                  <div>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-[#E5BEA9] block">Dining</span>
                    <span className="text-xs font-semibold text-white">Fine Dine Restaurant</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Rooms Showcase - Edge-to-Edge Sleek Redesign */}
      <section className="py-20 bg-[#1A0A11] text-[#FAF7F5] border-y border-[#CCA08A]/25 w-full overflow-hidden">
        {/* Top Header */}
        <div className="w-full px-4 sm:px-8 lg:px-12 mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#CCA08A]">
              <Bed className="w-3.5 h-3.5 text-[#CCA08A]" />
              <span>Boutique Accommodation</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-1.5 tracking-tight">
              27 Tastefully Done Up Rooms
            </h2>
          </div>
          <Link
            href="/skyhilton/rooms"
            className="text-xs font-bold uppercase tracking-[0.16em] text-[#EBDED8] hover:text-[#CCA08A] inline-flex items-center gap-2 transition-colors border-b border-[#CCA08A]/40 hover:border-[#CCA08A] pb-1 shrink-0"
          >
            <span>View All Categories &amp; Enquire Tariff</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#CCA08A]" />
          </Link>
        </div>

        {/* Edge-to-Edge 4-Column Room Showcase */}
        <div className="w-full px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {skyhiltonData.rooms.map((room, idx) => {
              const categoryNumber = `0${idx + 1}`;
              const quickFeatures = idx === 0 
                ? ["Work Desk", "Ensuite Bath", "High-Speed Wi-Fi"]
                : idx === 1
                ? ["Smart TV", "Plush Linens", "Quiet Floor"]
                : idx === 2
                ? ["King Layout", "Seating Nook", "Urban View"]
                : ["Private Lounge", "Dual TV", "VIP Concierge"];

              return (
                <div
                  key={room.id}
                  className="group relative aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4] rounded-sm overflow-hidden shadow-2xl border border-white/10 hover:border-[#CCA08A]/60 transition-all duration-500 bg-[#28131C] flex flex-col justify-between p-6"
                >
                  {/* Background Photo */}
                  <Image
                    src={room.image}
                    alt={room.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/20 group-hover:via-black/30 transition-all duration-500" />

                  {/* Top Bar: Category Number & Subtle Badge */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#CCA08A] tracking-widest px-2.5 py-1 rounded bg-black/60 backdrop-blur-md border border-white/10">
                      {categoryNumber}
                    </span>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#EBDED8]/85 px-2.5 py-1 rounded bg-black/50 backdrop-blur-md border border-white/10">
                      Lucknow
                    </span>
                  </div>

                  {/* Bottom Content: Clean & Concise */}
                  <div className="relative z-10 space-y-3">
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-white group-hover:text-[#CCA08A] transition-colors leading-tight">
                        {room.name}
                      </h3>
                      <p className="text-xs text-[#EBDED8]/75 font-light line-clamp-1 mt-1">
                        {room.headline}
                      </p>
                    </div>

                    {/* Quick Features Pill Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {quickFeatures.map((feat, fIdx) => (
                        <span
                          key={fIdx}
                          className="text-[10px] px-2 py-0.5 rounded bg-white/10 backdrop-blur-sm text-[#FAF7F5]/90 font-medium border border-white/10"
                        >
                          {feat}
                        </span>
                      ))}
                    </div>

                    {/* Clean Action Button */}
                    <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                      <span className="text-[11px] font-semibold text-[#CCA08A]">
                        Best Direct Tariff
                      </span>
                      <Link
                        href={`/skyhilton/rooms#enquire`}
                        className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white hover:text-[#CCA08A] transition-colors group/btn"
                      >
                        <span>Reserve</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#CCA08A] group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Culinary & Nightlife Showcase */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-3xl mb-12 sm:mb-16 text-center mx-auto">
          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#A3624D] block mb-3">
            Epicurean Experiences
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight text-[#2A141D]">
            Fine Dining, Panoramic Bar &amp; Café
          </h2>
          <div className="h-0.5 w-16 bg-[#CCA08A] my-4 mx-auto" />
          <p className="text-base sm:text-lg font-light leading-relaxed text-[#6E565F]">
            Three curated culinary settings under one roof at LDA Colony, Lucknow.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skyhiltonData.dining.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-[#EADBD5] hover:border-[#CCA08A]/50 rounded-sm overflow-hidden shadow-md flex flex-col justify-between group transition-all duration-300"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={item.heroImage}
                  alt={item.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 bg-[#241119]/90 text-[#E5BEA9] rounded-sm border border-[#CCA08A]/30">
                    {item.capacity}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#2A141D] group-hover:text-[#CCA08A] transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs text-[#6E565F] mt-2 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-black/5">
                  <Link
                    href="/skyhilton/dining"
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#2A141D] hover:text-[#CCA08A] transition-colors"
                  >
                    <span>Explore Experience</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Banquet Spaces Spotlight */}
      <section className="py-20 bg-[#220E17] text-[#FAF7F5] border-t border-[#3B1C28]">
        <div className="w-full px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#CCA08A]/15 border border-[#CCA08A]/30 rounded-full mb-3">
                <PartyPopper className="w-3.5 h-3.5 text-[#CCA08A]" />
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#CCA08A]">
                  Celebration Venues &amp; Events
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-white">
                Banqueting, Terraces &amp; Rooftop Decks
              </h2>
              <p className="mt-3 text-sm sm:text-base text-[#EBDED8] font-light max-w-2xl">
                Versatile event spaces configured for 30 to 100 guests — featuring authentic North Indian banquet buffets, integrated sound &amp; Big LED screen, and starlit open-air decks.
              </p>
            </div>
            <div className="shrink-0">
              <Link
                href="/skyhilton/banquets"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-5 py-3 bg-[#CCA08A] text-[#241119] hover:bg-[#DEB5A0] transition-all rounded-sm shadow-md hover:shadow-lg font-semibold"
              >
                <span>View Event Packages</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skyhiltonData.banquets.map((venue) => (
              <div
                key={venue.id}
                className="group flex flex-col bg-[#2B141E] border border-white/10 hover:border-[#CCA08A]/60 rounded-sm overflow-hidden transition-all duration-300 hover:shadow-[0_16px_36px_rgba(0,0,0,0.5)] hover:-translate-y-1"
              >
                {/* Visual Image */}
                <div className="relative aspect-[16/11] overflow-hidden bg-[#180A10]">
                  <Image
                    src={venue.heroImage}
                    alt={venue.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-black/75 backdrop-blur-md border border-white/15 text-[11px] font-semibold rounded-sm text-white shadow-sm">
                      <Users className="w-3 h-3 text-[#CCA08A]" />
                      <span>{venue.capacity}</span>
                    </span>
                    <span className="text-[10px] font-semibold text-[#EBDED8] uppercase tracking-wider bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded-sm border border-white/10">
                      {venue.id === "infinity-hall"
                        ? "Indoor AC"
                        : venue.id === "open-terrace"
                        ? "Open-Air Terrace"
                        : venue.id === "vip-hall"
                        ? "Private VIP"
                        : "Rooftop Deck"}
                    </span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2.5">
                    <h3 className="font-serif text-xl font-bold text-white tracking-tight group-hover:text-[#CCA08A] transition-colors line-clamp-1">
                      {venue.name}
                    </h3>
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-[#CCA08A]">
                      {venue.id === "infinity-hall"
                        ? "North Indian Buffets & Milestones"
                        : venue.id === "open-terrace"
                        ? "Big LED Wall & Starlit Skyline"
                        : venue.id === "vip-hall"
                        ? "Discreet Luxury & Executive Meets"
                        : "Sunset Cocktails & Panoramic Views"}
                    </p>
                    <p className="text-xs text-[#EBDED8]/80 font-light leading-relaxed line-clamp-2">
                      {venue.description}
                    </p>

                    {/* Compact Feature Pills */}
                    <div className="pt-2 border-t border-white/10 flex flex-wrap gap-1.5">
                      {venue.features.slice(0, 2).map((feat, i) => (
                        <span
                          key={i}
                          className="text-[10px] text-[#EBDED8]/80 bg-white/[0.04] border border-white/10 px-2 py-0.5 rounded-sm"
                        >
                          {feat}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Footer */}
                  <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                    <Link
                      href="/skyhilton/banquets#enquire"
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#CCA08A] group-hover:text-white transition-colors"
                    >
                      <span>Enquire Venue</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <span className="text-[10px] text-white/40 uppercase tracking-widest">
                      LDA Colony
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Perks Strip */}
          <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="p-3 bg-white/[0.02] border border-white/5 rounded-sm">
              <p className="font-serif text-lg sm:text-xl font-bold text-[#CCA08A]">30 to 100</p>
              <p className="text-[11px] uppercase tracking-wider text-[#EBDED8] mt-0.5">Flexible PAX Capacity</p>
            </div>
            <div className="p-3 bg-white/[0.02] border border-white/5 rounded-sm">
              <p className="font-serif text-lg sm:text-xl font-bold text-[#CCA08A]">Big LED Wall</p>
              <p className="text-[11px] uppercase tracking-wider text-[#EBDED8] mt-0.5">AV &amp; Media Integration</p>
            </div>
            <div className="p-3 bg-white/[0.02] border border-white/5 rounded-sm">
              <p className="font-serif text-lg sm:text-xl font-bold text-[#CCA08A]">Live Tandoor</p>
              <p className="text-[11px] uppercase tracking-wider text-[#EBDED8] mt-0.5">Gourmet Banquet Buffets</p>
            </div>
            <div className="p-3 bg-white/[0.02] border border-white/5 rounded-sm">
              <p className="font-serif text-lg sm:text-xl font-bold text-[#CCA08A]">Event Concierge</p>
              <p className="text-[11px] uppercase tracking-wider text-[#EBDED8] mt-0.5">End-to-End Planning</p>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <EnquiryForm
          title="Reserve at JB Skyhilton"
          subtitle="Direct reservations desk for rooms, restaurant tables, and banquet venues at Sector B, Bargawan, LDA Colony, Lucknow."
          defaultBusiness="skyhilton"
        />
      </section>

      <Footer />
    </div>
  );
}
