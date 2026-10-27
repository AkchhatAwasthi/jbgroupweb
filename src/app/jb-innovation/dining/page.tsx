import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Utensils, Sparkles, ArrowRight, Check, Phone, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionHeading from "@/components/SectionHeading";
import EnquiryForm from "@/components/EnquiryForm";
import { innovationData } from "@/data/innovationData";

export const metadata = {
  title: "Carnations Restaurant | JB Innovation Lucknow",
  description:
    "Carnations Restaurant at JB Innovation: Refined dining and social gatherings in Lucknow. Bathed in soft ambient lighting, high-end styling, and contemporary comfort.",
};

export default function InnovationDiningPage() {
  const { dining } = innovationData;

  return (
    <div className="min-h-screen bg-[#F7F3EB] text-[#252522]">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[52vh] sm:min-h-[60vh] flex flex-col justify-between overflow-hidden bg-[#1F2119] text-[#F7F3EB]">
        {/* Full Visibility Hero Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/innovation/carnations_restaurant.png"
            alt="Carnations Restaurant at JB Innovation"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
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
              { label: "Carnations Restaurant" },
            ]}
            theme="charcoal"
          />
        </div>

        {/* Bottom: Minimal Punchy Title */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-8 sm:pb-10">
          <div className="space-y-2 max-w-2xl">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#DFCA9B] block">
              Refined Dining Destination • JB Innovation
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#F7F3EB] leading-tight drop-shadow-md">
              Carnations Restaurant
            </h1>
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 relative aspect-[16/10] rounded-sm overflow-hidden shadow-2xl">
            <Image
              src="/images/innovation/carnations_restaurant.png"
              alt="Carnations Restaurant Interior Ambience"
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover"
            />
          </div>

          <div className="lg:col-span-5 space-y-6">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#73765B]">
              The Ambiance
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#252522] leading-tight">
              Flattering Ambient Lighting & High-End Styling
            </h2>
            <div className="h-0.5 w-16 bg-[#C4A46B]" />

            <p className="text-base text-[#252522]/80 font-light leading-relaxed">
              {dining.description}
            </p>

            <div className="space-y-2 pt-2 border-t border-black/10 text-xs text-[#252522]/80">
              <span className="font-bold uppercase tracking-wider text-[#73765B] block mb-2">
                Atmosphere & Setting Highlights
              </span>
              {dining.highlights.map((hl, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#73765B] shrink-0" />
                  <span>{hl}</span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <a
                href="#enquire"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#73765B] text-white rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-[#5C5F47] transition-all shadow-md"
              >
                <span>Book Social Gathering / Feast</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#DFCA9B]" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Visual Details */}
      <section className="py-20 bg-[#FAF7F2] border-y border-[#E7DFD1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Dining Architecture"
            title="Designed for Memorable Social Evenings"
            description="Whether celebrating family milestones, hosting wedding guest luncheons, or organizing corporate banquets."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white border border-[#E7DFD1] p-8 rounded-sm space-y-4">
              <h3 className="font-serif text-2xl font-bold text-[#252522]">
                Social Banquets & Feasts
              </h3>
              <p className="text-xs text-[#73765B] font-light leading-relaxed">
                Carnations Restaurant acts as an anchor for social dining during grand weddings and functions hosted at JB Innovation, providing a bright, airy, and luxurious space that ensures guests feel celebrated.
              </p>
              <div className="text-xs text-[#252522] font-semibold">
                Direct Enquiries: 7080888803 | 7080888847
              </div>
            </div>

            <div className="bg-white border border-[#E7DFD1] p-8 rounded-sm space-y-4">
              <h3 className="font-serif text-2xl font-bold text-[#252522]">
                Culinary Integrity
              </h3>
              <p className="text-xs text-[#73765B] font-light leading-relaxed">
                In strict adherence to hospitality transparency, menus, specific course offerings, and prices are customized to your gathering&apos;s culinary vision rather than generic pre-set lists.
              </p>
              <div className="text-xs text-[#252522] font-semibold">
                Email: contact@jbgroup.co.in
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section id="enquire" className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <EnquiryForm
          initialType="general"
          title="Reserve at Carnations Restaurant"
          subtitle="Enquire for family dining, private social gatherings, or banquet dining arrangements at JB Innovation."
          defaultBusiness="innovation"
        />
      </section>

      <Footer />
    </div>
  );
}
