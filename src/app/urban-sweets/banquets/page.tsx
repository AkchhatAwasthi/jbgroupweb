import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, ArrowRight, ShieldAlert, Check, Calendar, Users, Info } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionHeading from "@/components/SectionHeading";
import EnquiryForm from "@/components/EnquiryForm";
import { urbanSweetsData } from "@/data/urbanSweetsData";

export const metadata = {
  title: "Celebration Banquet Hall | Urban Sweets & Bakers Lucknow",
  description:
    "An intimate banquet hall venue in Lucknow by Urban Sweets & Bakers. Ideal for milestone family dinners, birthdays, baby showers, and celebrations with in-house artisanal catering.",
};

export default function UrbanSweetsBanquetsPage() {
  const { banquetVenue } = urbanSweetsData;

  return (
    <div className="min-h-screen bg-[#FAF6F0] text-[#252522]">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[52vh] sm:min-h-[60vh] flex flex-col justify-between overflow-hidden bg-[#2D0A11] text-[#FAF6F0]">
        {/* Full Visibility Hero Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/urban-sweets/banquet_hall_2.jpg"
            alt="Urban Sweets Celebration Banquet"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Subtle Vignettes - Center is 100% Radiant */}
          <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-black/70 via-black/20 to-transparent pointer-events-none" />
          <div className="absolute bottom-0 inset-x-0 h-64 bg-gradient-to-t from-[#2D0A11] via-[#2D0A11]/75 to-transparent pointer-events-none" />
        </div>

        {/* Top: Breadcrumb */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32">
          <Breadcrumbs
            items={[
              { label: "Urban Sweets & Bakers", href: "/urban-sweets" },
              { label: "Celebration Banquet" },
            ]}
            theme="maroon"
          />
        </div>

        {/* Bottom: Minimal Punchy Title */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-8 sm:pb-10">
          <div className="space-y-2 max-w-2xl">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#DFCA9B] block">
              Private Celebrations Venue • Urban Sweets
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#FAF6F0] leading-tight drop-shadow-md">
              An Intimate Banquet for Life&apos;s Cherished Milestones
            </h1>
          </div>
        </div>
      </section>

      {/* Verification Notice */}
      <section className="bg-amber-50 border-b border-amber-200 py-4 px-4 text-xs text-amber-900">
        <div className="max-w-5xl mx-auto flex items-start sm:items-center gap-3">
          <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5 sm:mt-0" />
          <p className="leading-relaxed">
            <strong>Capacity Advisory:</strong> In adherence to verified documentation standards, exact guest capacities, floor plans, and operating schedules remain customizable upon direct enquiry with our banquet coordinator based on your seating arrangement.
          </p>
        </div>
      </section>

      {/* Venue Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 relative aspect-[16/10] rounded-sm overflow-hidden shadow-2xl">
            <Image
              src="/images/urban-sweets/banquet_hall_1.jpg"
              alt="Urban Sweets Banquet Hall Setting"
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover"
            />
          </div>

          <div className="lg:col-span-5 space-y-6">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#581825]">
              Atmosphere & Setting
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#252522] leading-tight">
              {banquetVenue.headline}
            </h2>
            <div className="h-0.5 w-16 bg-[#C4A46B]" />

            <p className="text-base text-[#252522]/80 font-light leading-relaxed">
              {banquetVenue.description}
            </p>

            <div className="space-y-2 pt-2 border-t border-black/10 text-xs text-[#252522]/80">
              <span className="font-bold uppercase tracking-wider text-[#73765B] block mb-2">
                Venue Features
              </span>
              {banquetVenue.features.map((feat, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#581825] shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <a
                href="#enquire"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#581825] text-white rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-[#3D0F18] transition-all shadow-md"
              >
                <span>Check Date Availability</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#DFCA9B]" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Suitable Event Categories */}
      <section className="py-20 bg-white border-y border-[#E7DFD1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Occasions"
            title="Ideal Celebrations at Urban Sweets Banquet"
            description="Our private banquet is custom-styled for family gatherings that require warmth, discretion, and exceptional food."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {banquetVenue.suitableEvents.map((evt, idx) => (
              <div
                key={idx}
                className="p-6 bg-[#FAF6F0] border border-[#581825]/20 rounded-sm hover:border-[#581825] transition-colors space-y-2"
              >
                <div className="w-8 h-8 rounded-full bg-[#581825]/10 flex items-center justify-center text-[#581825]">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#252522]">
                  {evt}
                </h3>
                <p className="text-xs text-[#73765B] font-light leading-relaxed">
                  Tailored banquet menus with live culinary counters, desserts display, and personalized decor setup.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Banquet Photo Gallery Showcase */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Hall & Atmosphere"
          title="Inside Urban Sweets Banquet"
          description="Explore our grand banquet setting, illuminated by crystal chandeliers, regal seating layouts, and festive decor."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          <div className="relative aspect-[4/3] rounded-sm overflow-hidden shadow-md group">
            <Image
              src="/images/urban-sweets/banquet_hall_1.jpg"
              alt="Grand Banquet Hall Setting"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4">
              <span className="text-xs font-semibold text-white">Grand Celebration Hall</span>
            </div>
          </div>

          <div className="relative aspect-[4/3] rounded-sm overflow-hidden shadow-md group">
            <Image
              src="/images/urban-sweets/banquet_hall_2.jpg"
              alt="Celebration Setup with Crystal Chandeliers"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4">
              <span className="text-xs font-semibold text-white">Ambient Chandelier Illumination</span>
            </div>
          </div>

          <div className="relative aspect-[4/3] rounded-sm overflow-hidden shadow-md group">
            <Image
              src="/images/urban-sweets/banquet_setup_1.jpg"
              alt="Stage Backdrop and Banquet Seating"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4">
              <span className="text-xs font-semibold text-white">Custom Stage &amp; Seating Layout</span>
            </div>
          </div>

          <div className="relative aspect-[4/3] rounded-sm overflow-hidden shadow-md group">
            <Image
              src="/images/urban-sweets/banquet_hall_3.jpg"
              alt="Intimate Dining View"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4">
              <span className="text-xs font-semibold text-white">Velvet Drapery &amp; Dining</span>
            </div>
          </div>

          <div className="relative aspect-[4/3] rounded-sm overflow-hidden shadow-md group">
            <Image
              src="/images/urban-sweets/banquet_hall_4.jpg"
              alt="Full Hall Perspective"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4">
              <span className="text-xs font-semibold text-white">Warm Celebration Space</span>
            </div>
          </div>

          <div className="relative aspect-[4/3] rounded-sm overflow-hidden shadow-md group">
            <Image
              src="/images/urban-sweets/banquet_hall_5.jpg"
              alt="Reception and Event Setting"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4">
              <span className="text-xs font-semibold text-white">Gathering &amp; Dining Hall</span>
            </div>
          </div>
        </div>
      </section>

      {/* Banquet Enquiry Form */}
      <section id="enquire" className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <EnquiryForm
          initialType="banquet"
          title="Plan Your Celebration at Urban Sweets Banquet"
          subtitle="Our event coordinator will guide you through custom catering menus, decor arrangements, and date bookings."
          defaultBusiness="urban-sweets"
        />
      </section>

      <Footer />
    </div>
  );
}
