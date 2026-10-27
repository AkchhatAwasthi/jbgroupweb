import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Check,
  Phone,
  Mail,
  MapPin,
  Clock,
  Bed,
  Utensils,
  PartyPopper,
  Trees,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionHeading from "@/components/SectionHeading";
import VenueCard from "@/components/VenueCard";
import RoomCard from "@/components/RoomCard";
import EnquiryForm from "@/components/EnquiryForm";
import InnovationGallery from "@/components/InnovationGallery";
import InnovationVenuesSlider from "@/components/InnovationVenuesSlider";
import VideoShowcase from "@/components/VideoShowcase";
import { innovationData } from "@/data/innovationData";

export const metadata = {
  title: "JB Innovation | Wedding & Event Destination Lucknow",
  description:
    "Where every celebration finds its setting. JB Innovation in Lucknow offers Crown Hall, Kanishk Hall, expansive celebration lawns, open rooftop terrace, luxury accommodation, and Carnations Restaurant.",
};

export default function InnovationHomePage() {
  return (
    <div className="min-h-screen bg-[#F7F3EB] text-[#252522]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[85vh] sm:min-h-[92vh] flex flex-col justify-between overflow-hidden bg-[#1F2119]">
        {/* Full Visibility Hero Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/innovation/grand_jali_entrance.png"
            alt="JB Innovation Grand Jali Palace Facade"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Subtle Top & Bottom Vignettes Only - Center is 100% Clear & Brilliant */}
          <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-black/70 via-black/20 to-transparent pointer-events-none" />
          <div className="absolute bottom-0 inset-x-0 h-72 sm:h-88 bg-gradient-to-t from-[#1F2119] via-[#1F2119]/70 to-transparent pointer-events-none" />
        </div>

        {/* Top: Clean Breadcrumb Bar */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32">
          <Breadcrumbs
            items={[{ label: "JB Innovation" }]}
            theme="charcoal"
          />
        </div>

        {/* Bottom: Minimal, High-Impact Visual Anchor */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-10 sm:pb-14">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-[#C4A46B]/40 text-[11px] tracking-[0.25em] uppercase text-[#DFCA9B] font-medium">
                <Sparkles className="w-3 h-3 text-[#C4A46B]" />
                <span>Grand Wedding & Celebration Destination • Lucknow</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F7F3EB] leading-[1.15] drop-shadow-lg">
                Where Every Celebration{" "}
                <span className="italic font-normal font-serif text-[#DFCA9B]">
                  Finds Its Setting.
                </span>
              </h1>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/jb-innovation/venues"
                className="px-6 sm:px-8 py-3.5 bg-[#73765B] hover:bg-[#5C5F47] text-white rounded-sm text-xs font-bold uppercase tracking-widest transition-all shadow-xl flex items-center gap-2"
              >
                <PartyPopper className="w-4 h-4" />
                <span>Explore Venues</span>
              </Link>

              <a
                href="#enquire"
                className="px-6 sm:px-8 py-3.5 bg-black/50 hover:bg-black/70 text-[#F7F3EB] border border-[#C4A46B]/50 rounded-sm text-xs font-bold uppercase tracking-widest transition-all backdrop-blur-md flex items-center gap-2"
              >
                <span>Enquire Now</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Overview & Philosophy - Clean, Elegant Luxury Layout */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Refined Editorial & Minimal Highlights */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="w-6 h-[1.5px] bg-[#C4A46B]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#73765B]">
                Destination Philosophy
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#252522] leading-[1.15]">
              Where Elegance Meets Tradition &amp; Comfort Blends with Luxury
            </h2>

            <p className="text-sm sm:text-base text-[#252522]/80 font-light leading-relaxed">
              Nestled amidst expansive green celebration lawns and adorned with regal banquet halls, JB Innovation is Lucknow’s premier destination for weddings, galas, and life’s most cherished celebrations.
            </p>

            {/* Clean Minimal Stat Strip (Zero Clunky Card Boxes) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-[#E7DFD1]">
              <div>
                <span className="font-serif text-2xl sm:text-3xl font-bold text-[#73765B] block">4</span>
                <span className="text-xs font-semibold text-[#252522] block mt-0.5">Venues</span>
                <span className="text-[10px] text-[#73765B]">Halls &amp; Lawns</span>
              </div>
              <div>
                <span className="font-serif text-2xl sm:text-3xl font-bold text-[#73765B] block">2</span>
                <span className="text-xs font-semibold text-[#252522] block mt-0.5">Room Types</span>
                <span className="text-[10px] text-[#73765B]">Deluxe &amp; Executive</span>
              </div>
              <div>
                <span className="font-serif text-2xl sm:text-3xl font-bold text-[#73765B] block">Dining</span>
                <span className="text-xs font-semibold text-[#252522] block mt-0.5">Carnations</span>
                <span className="text-[10px] text-[#73765B]">Refined Restaurant</span>
              </div>
              <div>
                <span className="font-serif text-2xl sm:text-3xl font-bold text-[#73765B] block">5.3 km</span>
                <span className="text-xs font-semibold text-[#252522] block mt-0.5">Airport</span>
                <span className="text-[10px] text-[#73765B]">CCS Airport Transit</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/jb-innovation/venues"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#73765B] hover:bg-[#5C5F47] text-white rounded-sm text-xs font-bold uppercase tracking-widest transition-all shadow-md group"
              >
                <span>Discover All Halls &amp; Lawns</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Column: Balanced 2-Photo Luxury Duet (Equal Height, No Clutter) */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4 sm:gap-6">
            <div className="relative aspect-[3/4] rounded-sm overflow-hidden shadow-xl border border-[#E7DFD1] group">
              <Image
                src="/images/innovation/DSC_2803.jpg"
                alt="Crown Hall Grand Crystal Chandelier Banquet"
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex items-end p-4">
                <span className="text-xs uppercase tracking-wider text-[#DFCA9B] font-semibold">
                  Crown Hall Ballroom
                </span>
              </div>
            </div>

            <div className="relative aspect-[3/4] rounded-sm overflow-hidden shadow-xl border border-[#E7DFD1] group">
              <Image
                src="/images/innovation/DSC_1977.jpg"
                alt="Triple Arch Royal Wedding Stage"
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex items-end p-4">
                <span className="text-xs uppercase tracking-wider text-[#DFCA9B] font-semibold">
                  Royal Wedding Stage
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Venues Spotlight - All 4 Banquets in One Line with Slider */}
      <InnovationVenuesSlider />

      {/* Real Photography & Wedding Showcase */}
      <InnovationGallery />

      {/* Dedicated Video Showcase - Property Reels */}
      <VideoShowcase
        eyebrow="Cinematic Experience"
        title="Celebrations in Motion"
        description="Step inside our fairytale lawns, grand banquet halls, and celebrations captured live at JB Innovation."
        theme="light"
        showLinkToVenues={true}
      />

      {/* Accommodation & Dining Quick Highlight */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Accommodation Card */}
          <div className="bg-white border border-[#E7DFD1] rounded-sm overflow-hidden shadow-md flex flex-col justify-between group">
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src="/images/innovation/DSC_0747.jpg"
                alt="JB Innovation Executive Suite with Lounge Area"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4">
                <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-[#252522]/90 border border-[#C4A46B]/40 text-[#DFCA9B] rounded-sm">
                  Deluxe (180 Sq Ft) & Executive (250 Sq Ft)
                </span>
              </div>
            </div>

            <div className="p-8 space-y-4">
              <h3 className="font-serif text-2xl font-bold text-[#252522]">
                Guest Accommodation
              </h3>
              <p className="text-sm text-[#73765B] font-light leading-relaxed">
                Combining modern conveniences with ethnic charm. Ideal for wedding host families, out-of-town guests, and bridal prep.
              </p>
              <div className="pt-2">
                <Link
                  href="/jb-innovation/accommodation"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#73765B] hover:text-[#252522] transition-colors"
                >
                  <span>View Rooms & Amenities</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Dining Card */}
          <div className="bg-white border border-[#E7DFD1] rounded-sm overflow-hidden shadow-md flex flex-col justify-between group">
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src="/images/innovation/carnations_restaurant.png"
                alt="Carnations Restaurant at JB Innovation"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4">
                <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-[#252522]/90 border border-[#C4A46B]/40 text-[#DFCA9B] rounded-sm">
                  Refined Dining
                </span>
              </div>
            </div>

            <div className="p-8 space-y-4">
              <h3 className="font-serif text-2xl font-bold text-[#252522]">
                Carnations Restaurant
              </h3>
              <p className="text-sm text-[#73765B] font-light leading-relaxed">
                A refined dining and social gathering space bathed in soft ambient lighting, high-end styling, and contemporary comfort.
              </p>
              <div className="pt-2">
                <Link
                  href="/jb-innovation/dining"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#73765B] hover:text-[#252522] transition-colors"
                >
                  <span>Explore Carnations Dining</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Connectivity Banner */}
      <section className="py-16 bg-[#FAF7F2] border-y border-[#E7DFD1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#73765B]">
              Location & Access
            </span>
            <h3 className="font-serif text-2xl font-bold text-[#252522] mt-1">
              Prime Connectivity Across Lucknow
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {innovationData.connectivity.map((item, idx) => (
              <div key={idx} className="bg-white border border-[#E7DFD1] p-5 rounded-sm shadow-sm space-y-1">
                <span className="font-serif text-3xl font-bold text-[#73765B] block">
                  {item.distance}
                </span>
                <span className="text-xs font-bold text-[#252522] block">
                  {item.landmark}
                </span>
                <span className="text-[10px] text-[#73765B] block">
                  {item.time} drive
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Enquiry Form */}
      <section id="enquire" className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <EnquiryForm
          initialType="banquet"
          title="Plan Your Event at JB Innovation"
          subtitle="Speak with our wedding coordinators at 7080888803 or 7080888847, or submit your preferred dates below for a detailed venue walkthrough."
          defaultBusiness="innovation"
        />
      </section>

      <Footer />
    </div>
  );
}
