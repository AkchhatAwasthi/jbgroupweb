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
      <section className="relative pt-32 pb-20 bg-[#3D0F18] text-[#FAF6F0] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/urban-sweets/banquet.jpg"
            alt="Urban Sweets Celebration Banquet"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Urban Sweets & Bakers", href: "/urban-sweets" },
              { label: "Celebration Banquet" },
            ]}
            theme="maroon"
          />

          <div className="max-w-3xl mt-6 space-y-4">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#DFCA9B]">
              Private Celebrations Venue
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FAF6F0] leading-tight">
              An Intimate Banquet for Life&apos;s Cherished Milestones
            </h1>
            <p className="text-base sm:text-lg text-[#E7DFD1]/80 font-light leading-relaxed">
              Warm celebratory lighting, royal maroon drapery, and artisanal culinary catering from both our sweets and bakery ateliers.
            </p>
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
              src="/images/urban-sweets/banquet.jpg"
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
