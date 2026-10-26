import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, ShieldCheck, ArrowRight, Sparkles, Phone, Lock, Droplet, Coffee } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionHeading from "@/components/SectionHeading";
import RoomCard from "@/components/RoomCard";
import EnquiryForm from "@/components/EnquiryForm";
import { innovationData } from "@/data/innovationData";

export const metadata = {
  title: "Accommodation | JB Innovation Lucknow",
  description:
    "Luxury guest accommodation at JB Innovation Lucknow. Deluxe Room (180 sq ft) and Executive Room (250 sq ft with lounge area) featuring real room photography and listed amenities.",
};

export default function InnovationAccommodationPage() {
  const { accommodation } = innovationData;

  return (
    <div className="min-h-screen bg-[#F7F3EB] text-[#252522]">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-[#2D3025] text-[#F7F3EB] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/innovation/rooms_hero.png"
            alt="JB Innovation Luxury Guest Accommodation"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "JB Innovation", href: "/jb-innovation" },
              { label: "Accommodation" },
            ]}
            theme="charcoal"
          />

          <div className="max-w-3xl mt-6 space-y-4">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#C4A46B]">
              Guest Rooms & Suites
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F7F3EB] leading-tight">
              Experience Luxury & Comfort
            </h1>
            <p className="text-base sm:text-lg text-[#E7DFD1]/80 font-light leading-relaxed">
              Our premium rooms are a sanctuary of sophistication, combining modern amenities with timeless charm. Curated for wedding hosts, families, and discerning guests.
            </p>
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#73765B]">
              Refined Sanctuaries
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#252522] leading-tight">
              Harmonious Contemporary Design with Ethnic Vibes
            </h2>
            <div className="h-0.5 w-16 bg-[#C4A46B]" />

            <p className="text-base text-[#252522]/80 font-light leading-relaxed">
              {accommodation.description}
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-white border border-[#E7DFD1] rounded-sm">
                <span className="font-serif text-2xl font-bold text-[#73765B]">
                  180 Sq. Ft.
                </span>
                <span className="text-xs font-semibold text-[#252522] block mt-1">
                  Deluxe Room
                </span>
                <span className="text-[11px] text-[#73765B] block mt-0.5">
                  Carpet size with grooming essentials
                </span>
              </div>

              <div className="p-4 bg-white border border-[#E7DFD1] rounded-sm">
                <span className="font-serif text-2xl font-bold text-[#73765B]">
                  250 Sq. Ft.
                </span>
                <span className="text-xs font-semibold text-[#252522] block mt-1">
                  Executive Room
                </span>
                <span className="text-[11px] text-[#73765B] block mt-0.5">
                  Carpet size with lounge area
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative aspect-[16/11] rounded-sm overflow-hidden shadow-2xl">
            <Image
              src="/images/innovation/room_executive.png"
              alt="JB Innovation Executive Room with Lounge"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Two Verified Room Categories */}
      <section className="py-20 bg-[#FAF7F2] border-y border-[#E7DFD1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <SectionHeading
            eyebrow="Room Categories"
            title="Deluxe & Executive Accommodations"
            description="Verified specifications and authentic room photography as documented in our property brochure."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {accommodation.rooms.map((room) => (
              <RoomCard
                key={room.id}
                name={room.name}
                carpetArea={room.carpetArea}
                headline={room.headline}
                description={room.description}
                image={room.image}
                amenities={room.amenities}
                features={room.features}
                enquireHref="#enquire"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Standard Amenities Listed in Brochure */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Verified Standards"
          title="Amenities Included with Every Room"
          description="Every guest room at JB Innovation is equipped with premium essentials to ensure effortless comfort."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
          <div className="bg-white border border-[#E7DFD1] p-5 rounded-sm space-y-2">
            <Coffee className="w-5 h-5 text-[#73765B] mx-auto" />
            <span className="text-xs font-semibold text-[#252522] block">Electric Kettle</span>
            <span className="text-[10px] text-[#73765B] block">Tea & Coffee maker</span>
          </div>

          <div className="bg-white border border-[#E7DFD1] p-5 rounded-sm space-y-2">
            <Droplet className="w-5 h-5 text-[#73765B] mx-auto" />
            <span className="text-xs font-semibold text-[#252522] block">Water Bottles</span>
            <span className="text-[10px] text-[#73765B] block">Complimentary daily</span>
          </div>

          <div className="bg-white border border-[#E7DFD1] p-5 rounded-sm space-y-2">
            <Sparkles className="w-5 h-5 text-[#73765B] mx-auto" />
            <span className="text-xs font-semibold text-[#252522] block">Soaps & Body Wash</span>
            <span className="text-[10px] text-[#73765B] block">Luxury bath essentials</span>
          </div>

          <div className="bg-white border border-[#E7DFD1] p-5 rounded-sm space-y-2">
            <Check className="w-5 h-5 text-[#73765B] mx-auto" />
            <span className="text-xs font-semibold text-[#252522] block">Grooming Kit</span>
            <span className="text-[10px] text-[#73765B] block">Personal guest essentials</span>
          </div>

          <div className="bg-white border border-[#E7DFD1] p-5 rounded-sm space-y-2">
            <Lock className="w-5 h-5 text-[#73765B] mx-auto" />
            <span className="text-xs font-semibold text-[#252522] block">Safety Locker</span>
            <span className="text-[10px] text-[#73765B] block">Secure in-room safe</span>
          </div>

          <div className="bg-white border border-[#E7DFD1] p-5 rounded-sm space-y-2">
            <ShieldCheck className="w-5 h-5 text-[#73765B] mx-auto" />
            <span className="text-xs font-semibold text-[#252522] block">Plush Interior</span>
            <span className="text-[10px] text-[#73765B] block">Ethnic & modern design</span>
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section id="enquire" className="py-24 bg-[#FAF7F2] border-t border-[#E7DFD1] px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <EnquiryForm
          initialType="room"
          title="Reserve Rooms at JB Innovation"
          subtitle="Wedding room block bookings and individual guest accommodation. Call our reservations desk directly at 7080888803 | 7080888847."
          defaultBusiness="innovation"
        />
      </section>

      <Footer />
    </div>
  );
}
