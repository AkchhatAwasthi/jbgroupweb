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
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#2D3025]">
        <div className="absolute inset-0">
          <Image
            src="/images/innovation/hero.png"
            alt="JB Innovation Grand Wedding & Event Destination"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#252522] via-[#2D3025]/60 to-black/40" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-[#F7F3EB] pt-24 pb-16">
          <Breadcrumbs
            items={[{ label: "JB Innovation" }]}
            theme="charcoal"
          />

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#C4A46B]/40 text-xs tracking-[0.25em] uppercase text-[#DFCA9B] font-medium mt-6 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#C4A46B]" />
            <span>Grand Wedding & Celebration Destination • Lucknow</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#F7F3EB] leading-[1.1] mb-6">
            Where Every Celebration <br className="hidden sm:inline" />
            <span className="italic font-normal font-serif text-[#C4A46B]">
              Finds Its Setting.
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-lg font-light text-[#E7DFD1] leading-relaxed mb-10">
            {innovationData.subheadline}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/jb-innovation/venues"
              className="w-full sm:w-auto px-8 py-3.5 bg-[#73765B] text-white rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-[#5C5F47] transition-all shadow-xl flex items-center justify-center gap-2"
            >
              <PartyPopper className="w-4 h-4" />
              <span>Explore Our Venues</span>
            </Link>

            <a
              href="#enquire"
              className="w-full sm:w-auto px-8 py-3.5 bg-white/10 hover:bg-white/20 text-[#F7F3EB] border border-[#C4A46B]/40 rounded-sm text-xs font-bold uppercase tracking-widest transition-all backdrop-blur-md flex items-center justify-center gap-2"
            >
              <span>Enquire About Your Event</span>
            </a>
          </div>
        </div>
      </section>

      {/* Overview & Tradition */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#73765B]">
              Destination Philosophy
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#252522] leading-tight">
              Where Elegance Meets Tradition & Comfort Blends with Luxury
            </h2>
            <div className="h-0.5 w-16 bg-[#C4A46B]" />

            <p className="text-base text-[#252522]/80 font-light leading-relaxed">
              {innovationData.overview.paragraph1}
            </p>
            <p className="text-base text-[#252522]/80 font-light leading-relaxed">
              {innovationData.overview.paragraph2}
            </p>
            <p className="text-base text-[#252522]/80 font-light leading-relaxed">
              {innovationData.overview.paragraph3}
            </p>

            <div className="pt-2">
              <Link
                href="/jb-innovation/venues"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#73765B] hover:text-[#5C5F47] transition-colors border-b border-[#73765B] pb-1"
              >
                <span>Discover All Halls & Lawns</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="relative aspect-[3/4] rounded-sm overflow-hidden shadow-xl">
              <Image
                src="/images/innovation/crown_hall.png"
                alt="Crown Hall Banquet"
                fill
                sizes="25vw"
                className="object-cover"
              />
            </div>
            <div className="space-y-4 pt-8">
              <div className="relative aspect-square rounded-sm overflow-hidden shadow-xl">
                <Image
                  src="/images/innovation/kanishk_hall.png"
                  alt="Kanishk Hall Marble Ballroom"
                  fill
                  sizes="25vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-sm overflow-hidden shadow-xl">
                <Image
                  src="/images/innovation/lawns_banquets.png"
                  alt="Lush Celebratory Lawns"
                  fill
                  sizes="25vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Venues Spotlight */}
      <section className="py-24 bg-[#252522] text-[#F7F3EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Celebration Venues"
            title="Four Majestic Settings"
            description="Crown Hall, Kanishk Hall, landscaped celebration lawns, and panoramic open rooftop terrace."
            theme="dark"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {innovationData.venues.map((venue) => (
              <VenueCard
                key={venue.id}
                name={venue.name}
                setting={venue.setting}
                headline={venue.headline}
                description={venue.description}
                features={venue.features}
                suitableEvents={venue.suitableEvents}
                image={venue.heroImage}
                enquireHref="#enquire"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Accommodation & Dining Quick Highlight */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Accommodation Card */}
          <div className="bg-white border border-[#E7DFD1] rounded-sm overflow-hidden shadow-md flex flex-col justify-between group">
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src="/images/innovation/room_deluxe.png"
                alt="JB Innovation Deluxe Room"
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
