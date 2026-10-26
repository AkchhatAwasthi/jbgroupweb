import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Wifi,
  Tv,
  Coffee,
  Phone,
  PhoneCall,
  ShieldCheck,
  Clock,
  Check,
  ArrowRight,
  Sparkles,
  Car,
  BellRing,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionHeading from "@/components/SectionHeading";
import RoomCard from "@/components/RoomCard";
import EnquiryForm from "@/components/EnquiryForm";
import { skyhiltonData } from "@/data/skyhiltonData";

export const metadata = {
  title: "Rooms & Suites | JB Skyhilton LDA Colony, Lucknow",
  description:
    "Explore 27 boutique guest rooms at JB Skyhilton: Standard Room, Elite Room, Deluxe Room, and Suite. Equipped with high-speed internet, television, tea/coffee maker, and modern guest amenities.",
};

export default function SkyhiltonRoomsPage() {
  return (
    <div className="min-h-screen bg-[#F7F3EB] text-[#252522]">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-[#252522] text-[#F7F3EB] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/skyhilton/suite_retreat.png"
            alt="JB Skyhilton Inn Accommodation"
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
              { label: "Rooms & Suites" },
            ]}
            theme="charcoal"
          />

          <div className="max-w-3xl mt-6 space-y-4">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#C4A46B]">
              JB Skyhilton Inn • 27 Rooms
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F7F3EB] leading-tight">
              Boutique Comfort & Modern Amenities
            </h1>
            <p className="text-base sm:text-lg text-[#E7DFD1]/80 font-light leading-relaxed">
              We have 27 tastefully done up rooms of different categories equipped with direct dial telephones, high-speed internet access, television, tea and coffee making facilities, and all necessary guest amenities.
            </p>
          </div>
        </div>
      </section>

      {/* Hotel Policy and Tariff Advisory */}
      <section className="bg-[#FAF7F2] border-b border-[#E7DFD1] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-xs text-[#252522]">
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-[#C4A46B] shrink-0" />
              <div>
                <span className="font-bold block uppercase tracking-wider text-[#73765B]">
                  Check-in / Check-out
                </span>
                <span>Check-in: 14:00 hrs | Check-out: 12:00 hrs</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-[#C4A46B] shrink-0" />
              <div>
                <span className="font-bold block uppercase tracking-wider text-[#73765B]">
                  Express Check-in
                </span>
                <span>Available for busy business travelers</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-[#C4A46B] shrink-0" />
              <div>
                <span className="font-bold block uppercase tracking-wider text-[#73765B]">
                  Pet Policy
                </span>
                <span>Pets are not allowed on property</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-[#C4A46B] shrink-0" />
              <div>
                <span className="font-bold block uppercase tracking-wider text-[#73765B]">
                  Direct Room Bookings
                </span>
                <a href="tel:7080888807" className="font-bold text-[#252522] hover:text-[#C4A46B]">
                  7080888807
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Room Categories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
        <SectionHeading
          eyebrow="Accommodations"
          title="Explore Our Four Room Categories"
          description="Each category is curated with bespoke furnishings, soft atmospheric lighting, and high-speed Wi-Fi."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skyhiltonData.rooms.map((room) => (
            <RoomCard
              key={room.id}
              name={room.name}
              headline={room.headline}
              description={room.description}
              image={room.image}
              amenities={room.amenities}
              features={room.features}
              idealFor={room.idealFor}
              enquireHref="#enquire"
            />
          ))}
        </div>

        {/* Tariff Advisory Note */}
        <div className="p-6 bg-[#FAF7F2] border border-[#C4A46B]/40 rounded-sm text-xs text-[#73765B] max-w-3xl mx-auto text-center space-y-2">
          <span className="font-bold uppercase tracking-wider text-[#252522] block">
            Rate & Tariff Advisory Notice
          </span>
          <p className="leading-relaxed">
            Room tariffs vary based on seasonal occupancy, corporate booking agreements, and wedding calendar dates. In accordance with hospitality guidelines, dynamic rates are confirmed directly via our reservations desk to ensure guaranteed lowest direct rates.
          </p>
        </div>
      </section>

      {/* Guest Amenities Grid - Redesigned Luxury Showcase */}
      <section className="py-24 bg-gradient-to-b from-[#1C1C1A] via-[#242421] to-[#1C1C1A] text-[#F7F3EB] relative overflow-hidden border-t border-[#C4A46B]/20">
        {/* Soft Ambient Gold Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#C4A46B]/5 blur-[140px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C4A46B]/10 border border-[#C4A46B]/30 text-xs font-semibold uppercase tracking-[0.2em] text-[#DFCA9B] mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#C4A46B]" />
              <span>Guest Conveniences</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F7F3EB] tracking-tight">
              In-Room & Property Amenities
            </h2>
            <p className="text-sm sm:text-base text-[#E7DFD1]/75 font-light mt-3 leading-relaxed">
              Equipped with essential comforts and thoughtful details for effortless business and leisure stays in Lucknow.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: Wifi,
                title: "High-Speed Fiber Wi-Fi",
                description: "Complimentary high-speed internet across all 27 rooms, work desks, and public lounge areas.",
              },
              {
                icon: Tv,
                title: "Flat Screen Satellite TV",
                description: "HD television equipped with popular satellite entertainment channels and news broadcasts.",
              },
              {
                icon: Coffee,
                title: "Tea & Coffee Maker",
                description: "In-room electric kettle with complimentary artisanal tea bags and gourmet coffee replenishments.",
              },
              {
                icon: PhoneCall,
                title: "Direct Dial Room Phone",
                description: "One-touch direct line connection to reception desk, room dining, and guest concierge.",
              },
              {
                icon: BellRing,
                title: "24-Hour Room Service",
                description: "Round-the-clock in-room dining service, prompt room care, and attentive housekeeping.",
              },
              {
                icon: Clock,
                title: "Express Check-In / Out",
                description: "Priority expedited check-in and checkout facilities designed for busy corporate travelers.",
              },
              {
                icon: Sparkles,
                title: "Premium Toiletries",
                description: "Complimentary soothing bath toiletries, fresh sanitized kits, and plush clean towels.",
              },
              {
                icon: Car,
                title: "Valet & Dedicated Parking",
                description: "Secure on-premises vehicle parking with dedicated arrival valet assistance for guests.",
              },
            ].map((amenity, idx) => {
              const IconComponent = amenity.icon;
              const indexStr = `0${idx + 1}`;

              return (
                <div
                  key={idx}
                  className="group relative p-6 rounded-sm bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-white/10 hover:border-[#C4A46B]/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 flex flex-col justify-between"
                >
                  {/* Subtle top gold highlight line on hover */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C4A46B]/0 to-transparent group-hover:via-[#C4A46B] transition-all duration-500" />

                  <div>
                    {/* Header: Icon + Numeric Index */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-sm bg-[#C4A46B]/15 border border-[#C4A46B]/30 flex items-center justify-center group-hover:bg-[#C4A46B] group-hover:border-[#C4A46B] transition-all duration-300 shadow-sm">
                        <IconComponent className="w-5 h-5 text-[#C4A46B] group-hover:text-[#1C1C1A] transition-colors duration-300" />
                      </div>
                      <span className="text-xs font-mono text-white/20 group-hover:text-[#C4A46B]/70 transition-colors font-bold">
                        {indexStr}
                      </span>
                    </div>

                    {/* Content */}
                    <h3 className="text-base font-serif font-bold text-white group-hover:text-[#C4A46B] transition-colors mb-2">
                      {amenity.title}
                    </h3>
                    <p className="text-xs text-[#E7DFD1]/70 font-light leading-relaxed">
                      {amenity.description}
                    </p>
                  </div>

                  {/* Bottom Accent line */}
                  <div className="pt-4 mt-4 border-t border-white/5 flex items-center gap-1.5 text-[10px] font-semibold text-[#C4A46B] uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Check className="w-3 h-3 text-[#C4A46B]" />
                    <span>Included in Stay</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Booking Enquiry Form */}
      <section id="enquire" className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <EnquiryForm
          initialType="room"
          title="Reserve Your Stay at JB Skyhilton"
          subtitle="Direct booking enquiries ensure prioritized room category allocation, best available tariff quotations, and flexible check-in assistance."
          defaultBusiness="skyhilton"
        />
      </section>

      <Footer />
    </div>
  );
}
