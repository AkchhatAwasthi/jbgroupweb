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
      <section className="relative pt-32 pb-20 bg-[#252522] text-[#F7F3EB] overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <Image
            src="/images/skyhilton/events_hero.png"
            alt="JB Skyhilton Banquets and Celebrations"
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
              { label: "Banquets & Event Spaces" },
            ]}
            theme="charcoal"
          />

          <div className="max-w-3xl mt-6 space-y-4">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#C4A46B]">
              Celebrations & Banqueting
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F7F3EB] leading-tight">
              Four Distinct Event Destinations
            </h1>
            <p className="text-base sm:text-lg text-[#E7DFD1]/80 font-light leading-relaxed">
              JB Skyhilton is your premier destination for unforgettable events in Lucknow. Each venue possesses its own architectural personality, catering capabilities, and guest capacities.
            </p>
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
      <section id="enquire" className="py-24 bg-[#FAF7F2] border-t border-[#E7DFD1] px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
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
