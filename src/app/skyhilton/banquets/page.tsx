import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Users, PartyPopper, ArrowRight, Check, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionHeading from "@/components/SectionHeading";
import VenueCard from "@/components/VenueCard";
import EnquiryForm from "@/components/EnquiryForm";
import { skyhiltonData } from "@/data/skyhiltonData";

export const metadata = {
  title: "Banquets & Decks | JB Skyhilton LDA Colony, Lucknow",
  description:
    "Explore banquet spaces at JB Skyhilton: Infinity Hall (80–100 guests), Open Terrace with Big LED wall (50–70 guests), VIP Hall (30–50 guests), and Upper Deck (60 guests).",
};

export default function SkyhiltonBanquetsPage() {
  return (
    <div className="min-h-screen bg-[#F7F3EB] text-[#252522]">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[52vh] sm:min-h-[60vh] flex flex-col justify-between overflow-hidden bg-[#241119] text-[#F7F3EB]">
        {/* Full Visibility Hero Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/skyhilton/rooftop_terrace.png"
            alt="JB Skyhilton Banquets and Celebrations"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center scale-105 animate-subtleZoom"
          />
          {/* Subtle Vignettes - Center is 100% Radiant */}
          <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-black/70 via-black/20 to-transparent pointer-events-none" />
          <div className="absolute bottom-0 inset-x-0 h-64 bg-gradient-to-t from-[#241119] via-[#241119]/75 to-transparent pointer-events-none" />
        </div>

        {/* Top: Breadcrumb */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32">
          <Breadcrumbs
            items={[
              { label: "JB Skyhilton", href: "/skyhilton" },
              { label: "Banquets & Event Spaces" },
            ]}
            theme="charcoal"
          />
        </div>

        {/* Bottom: Minimal Punchy Title */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-8 sm:pb-10">
          <div className="space-y-2 max-w-2xl">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#CCA08A] block animate-fadeIn">
              Celebrations &amp; Banqueting • JB Skyhilton
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#FAF7F5] leading-tight drop-shadow-md animate-fadeInUp">
              Four Distinct Event Destinations
            </h1>
          </div>
        </div>
      </section>

      {/* Venue Showcase */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
        <SectionHeading
          eyebrow="Venue Directory"
          title="Explore Our Four Individual Venues"
          description="Every space is supported by dedicated catering, professional sound systems, and dedicated banquet concierges."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skyhiltonData.banquets.map((venue) => (
            <VenueCard
              key={venue.id}
              name={venue.name}
              capacity={venue.capacity}
              capacityNote={venue.capacityNote}
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
      </section>

      {/* Booking Enquiry Section */}
      <section id="enquire" className="py-24 bg-[#FAF7F2] border-t border-[#E7DFD1] px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto reveal-up">
        <EnquiryForm
          initialType="banquet"
          title="Check Venue Availability at JB Skyhilton"
          subtitle="Speak with our banquet manager (Direct Party Booking: 7080888838) or submit your event requirements below for customized quotes."
          defaultBusiness="skyhilton"
        />
      </section>

      <Footer />
    </div>
  );
}
