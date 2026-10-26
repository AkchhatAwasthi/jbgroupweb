import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Users, Sparkles, ArrowRight, Check, Calendar, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionHeading from "@/components/SectionHeading";
import VenueCard from "@/components/VenueCard";
import EnquiryForm from "@/components/EnquiryForm";
import { skyhiltonData } from "@/data/skyhiltonData";
import { innovationData } from "@/data/innovationData";
import { urbanSweetsData } from "@/data/urbanSweetsData";

export const metadata = {
  title: "Celebrations & Banquets | JB Group Lucknow",
  description:
    "Explore premier wedding venues, grand banquet halls, landscaped celebration lawns, and intimate rooftop decks across JB Group properties in Lucknow.",
};

export default function CelebrationsPage() {
  return (
    <div className="min-h-screen bg-[#F7F3EB] text-[#252522]">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-24 bg-[#252522] text-[#F7F3EB] overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <Image
            src="/images/group/celebrations.jpg"
            alt="JB Group Celebrations"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[{ label: "Celebrations & Banquets" }]}
            theme="charcoal"
          />

          <div className="max-w-3xl mt-6 space-y-4">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#C4A46B]">
              Celebrations & Landmark Occasions
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F7F3EB] leading-tight">
              Where Every Occasion Finds Its Perfect Stage
            </h1>
            <p className="text-base sm:text-lg text-[#E7DFD1]/80 font-light leading-relaxed">
              From grand wedding pheras on expansive lawns to intimate rooftop sunset cocktail mixers with LED walls and silver-service banquets, discover Lucknow&apos;s most versatile celebration destinations.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <a
                href="#all-venues"
                className="px-6 py-3 bg-[#C4A46B] text-[#252522] rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-[#DFCA9B] transition-all shadow-md"
              >
                Browse All Venues
              </a>
              <a
                href="#enquire"
                className="px-6 py-3 bg-white/10 border border-[#C4A46B]/40 text-[#F7F3EB] rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-white/20 transition-all backdrop-blur-sm"
              >
                Check Date Availability
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Event Types Directory */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Curated Occasions"
          title="Celebrations We Bring to Life"
          description="Dedicated event directors, customized catering, and turnkey audiovisual setups for occasions of every scale."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white border border-[#E7DFD1] p-6 rounded-sm shadow-sm space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C4A46B]">
              Weddings & Receptions
            </span>
            <h3 className="font-serif text-xl font-bold text-[#252522]">
              Grand Matrimonials
            </h3>
            <p className="text-xs text-[#73765B] font-light leading-relaxed">
              Expansive green lawns, grand ballrooms with chandeliers, dedicated guest accommodations, and Mandap architecture.
            </p>
            <span className="text-[11px] text-[#252522] font-semibold block pt-2">
              Recommended: JB Innovation (Crown / Kanishk / Lawns)
            </span>
          </div>

          <div className="bg-white border border-[#E7DFD1] p-6 rounded-sm shadow-sm space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C4A46B]">
              Pre-Wedding Rituals
            </span>
            <h3 className="font-serif text-xl font-bold text-[#252522]">
              Mehndi, Haldi & Sangeet
            </h3>
            <p className="text-xs text-[#73765B] font-light leading-relaxed">
              Open rooftop terraces with panoramic skyline views, customizable boho/ethnic floral canopies, and energetic sound stages.
            </p>
            <span className="text-[11px] text-[#252522] font-semibold block pt-2">
              Recommended: Open Terraces at Skyhilton & Innovation
            </span>
          </div>

          <div className="bg-white border border-[#E7DFD1] p-6 rounded-sm shadow-sm space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C4A46B]">
              Corporate & Conclaves
            </span>
            <h3 className="font-serif text-xl font-bold text-[#252522]">
              Conferences & Galas
            </h3>
            <p className="text-xs text-[#73765B] font-light leading-relaxed">
              Integrated Big LED walls, professional acoustics, discrete VIP meeting dining, and executive accommodation blocks.
            </p>
            <span className="text-[11px] text-[#252522] font-semibold block pt-2">
              Recommended: JB Skyhilton (Infinity & VIP) & Innovation
            </span>
          </div>

          <div className="bg-white border border-[#E7DFD1] p-6 rounded-sm shadow-sm space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C4A46B]">
              Family Milestones
            </span>
            <h3 className="font-serif text-xl font-bold text-[#252522]">
              Birthdays & Anniversaries
            </h3>
            <p className="text-xs text-[#73765B] font-light leading-relaxed">
              Intimate celebratory settings with signature North Indian cuisine, live chaat and artisanal desserts by Urban Sweets.
            </p>
            <span className="text-[11px] text-[#252522] font-semibold block pt-2">
              Recommended: Urban Sweets Banquet & Skyhilton Upper Deck
            </span>
          </div>
        </div>
      </section>

      {/* Venues Directory */}
      <section id="all-venues" className="py-20 bg-[#FAF7F2] border-y border-[#E7DFD1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <SectionHeading
            eyebrow="Venue Directory"
            title="Explore Every Setting Across the Group"
            description="Verified capacity guidelines, architectural features, and photography from authentic property archives."
          />

          {/* Section A: JB Innovation Venues */}
          <div className="space-y-8">
            <div className="flex items-center justify-between border-b border-[#252522]/15 pb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#73765B]">
                  Grand Destination
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#252522]">
                  JB Innovation Venues
                </h3>
              </div>
              <Link
                href="/jb-innovation/venues"
                className="text-xs font-bold uppercase tracking-widest text-[#73765B] hover:text-[#252522] inline-flex items-center gap-1.5"
              >
                <span>View Innovation Site</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

          {/* Section B: JB Skyhilton Venues */}
          <div className="space-y-8 pt-8">
            <div className="flex items-center justify-between border-b border-[#252522]/15 pb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#C4A46B]">
                  Boutique Hotel & Rooftops
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#252522]">
                  JB Skyhilton Venues
                </h3>
              </div>
              <Link
                href="/skyhilton/banquets"
                className="text-xs font-bold uppercase tracking-widest text-[#C4A46B] hover:text-[#252522] inline-flex items-center gap-1.5"
              >
                <span>View Skyhilton Banquets</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

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
          </div>

          {/* Section C: Urban Sweets Banquet */}
          <div className="space-y-8 pt-8">
            <div className="flex items-center justify-between border-b border-[#252522]/15 pb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#581825]">
                  Artisanal & Intimate
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#252522]">
                  Urban Sweets Celebration Banquet
                </h3>
              </div>
              <Link
                href="/urban-sweets/banquets"
                className="text-xs font-bold uppercase tracking-widest text-[#581825] hover:text-[#C4A46B] inline-flex items-center gap-1.5"
              >
                <span>View Urban Sweets Banquet</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <VenueCard
                name="Urban Sweets Celebration Banquet"
                setting="Intimate Indoor Hall with Live Confectionery Catering"
                headline={urbanSweetsData.banquetVenue.headline}
                description={urbanSweetsData.banquetVenue.description}
                capacityNote={urbanSweetsData.banquetVenue.noteOnCapacities}
                features={urbanSweetsData.banquetVenue.features}
                suitableEvents={urbanSweetsData.banquetVenue.suitableEvents}
                image={urbanSweetsData.banquetVenue.heroImage}
                enquireHref="#enquire"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Section */}
      <section id="enquire" className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <EnquiryForm
          initialType="banquet"
          title="Reserve or Inquire About a Venue"
          subtitle="Our central event concierge connects you directly with the dedicated banquet directors to schedule on-site walkthroughs, menu tastings, and bespoke quotations."
        />
      </section>

      <Footer />
    </div>
  );
}
