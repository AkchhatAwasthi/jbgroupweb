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
      <section className="relative min-h-[55vh] sm:min-h-[64vh] flex flex-col justify-between overflow-hidden bg-[#1F2119] text-[#F7F3EB]">
        {/* Full Visibility Hero Image - Genuine Cloudinary Celebration Grounds */}
        <div className="absolute inset-0">
          <Image
            src="/images/innovation/DSC_2102.jpg"
            alt="JB Group Celebrations & Landmark Occasions"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Subtle Vignettes - Center is 100% Radiant */}
          <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-black/80 via-black/30 to-transparent pointer-events-none" />
          <div className="absolute bottom-0 inset-x-0 h-64 bg-gradient-to-t from-[#1F2119] via-[#1F2119]/80 to-transparent pointer-events-none" />
        </div>

        {/* Top: Breadcrumb */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32">
          <Breadcrumbs
            items={[{ label: "Celebrations & Banquets" }]}
            theme="charcoal"
          />
        </div>

        {/* Bottom: Minimal Punchy Title & Action Buttons */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-8 sm:pb-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#DFCA9B] block">
                Celebrations &amp; Landmark Occasions • JB Group
              </span>
              <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#F7F3EB] leading-tight drop-shadow-md">
                Where Every Occasion Finds Its Perfect Stage
              </h1>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="#all-venues"
                className="px-6 py-3 bg-[#C4A46B] text-[#252522] rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-[#DFCA9B] transition-all shadow-md"
              >
                Browse All Venues
              </a>
              <a
                href="#enquire"
                className="px-6 py-3 bg-black/50 border border-[#C4A46B]/40 text-[#F7F3EB] rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-black/70 transition-all backdrop-blur-sm"
              >
                Plan Your Event
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
          <div className="bg-white border border-[#E7DFD1] p-6 sm:p-7 rounded-sm shadow-sm hover:shadow-md hover:border-[#C4A46B]/60 transition-all duration-300 space-y-4 group">
            <div className="w-10 h-10 rounded-full bg-[#FAF7F2] border border-[#C4A46B]/30 flex items-center justify-center text-[#C4A46B] group-hover:bg-[#C4A46B] group-hover:text-white transition-colors">
              <Sparkles className="w-4 h-4" />
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#C4A46B] block">
                Weddings &amp; Receptions
              </span>
              <h3 className="font-serif text-xl font-bold text-[#252522]">
                Grand Matrimonials
              </h3>
            </div>
            <p className="text-xs text-[#73765B] font-light leading-relaxed">
              Expansive green lawns, grand ballrooms with chandeliers, dedicated bridal accommodations, and architectural Mandap staging.
            </p>
            <div className="pt-3 border-t border-[#E7DFD1]/60">
              <span className="text-[11px] text-[#252522] font-semibold block">
                Venue: JB Innovation
              </span>
              <span className="text-[10px] text-[#73765B]">Crown • Kanishk • Celebration Lawns</span>
            </div>
          </div>

          <div className="bg-white border border-[#E7DFD1] p-6 sm:p-7 rounded-sm shadow-sm hover:shadow-md hover:border-[#C4A46B]/60 transition-all duration-300 space-y-4 group">
            <div className="w-10 h-10 rounded-full bg-[#FAF7F2] border border-[#C4A46B]/30 flex items-center justify-center text-[#C4A46B] group-hover:bg-[#C4A46B] group-hover:text-white transition-colors">
              <Calendar className="w-4 h-4" />
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#C4A46B] block">
                Pre-Wedding Rituals
              </span>
              <h3 className="font-serif text-xl font-bold text-[#252522]">
                Mehndi, Haldi &amp; Sangeet
              </h3>
            </div>
            <p className="text-xs text-[#73765B] font-light leading-relaxed">
              Open rooftop terraces with panoramic skyline views, customizable ethnic floral canopies, and energetic sound stages.
            </p>
            <div className="pt-3 border-t border-[#E7DFD1]/60">
              <span className="text-[11px] text-[#252522] font-semibold block">
                Venue: Open Terraces
              </span>
              <span className="text-[10px] text-[#73765B]">Skyhilton Terrace • Innovation Rooftop</span>
            </div>
          </div>

          <div className="bg-white border border-[#E7DFD1] p-6 sm:p-7 rounded-sm shadow-sm hover:shadow-md hover:border-[#C4A46B]/60 transition-all duration-300 space-y-4 group">
            <div className="w-10 h-10 rounded-full bg-[#FAF7F2] border border-[#C4A46B]/30 flex items-center justify-center text-[#C4A46B] group-hover:bg-[#C4A46B] group-hover:text-white transition-colors">
              <Users className="w-4 h-4" />
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#C4A46B] block">
                Corporate &amp; Conclaves
              </span>
              <h3 className="font-serif text-xl font-bold text-[#252522]">
                Conferences &amp; Galas
              </h3>
            </div>
            <p className="text-xs text-[#73765B] font-light leading-relaxed">
              Integrated Big LED walls, professional acoustics, discreet VIP dining chambers, and executive guest accommodation.
            </p>
            <div className="pt-3 border-t border-[#E7DFD1]/60">
              <span className="text-[11px] text-[#252522] font-semibold block">
                Venue: JB Skyhilton &amp; Innovation
              </span>
              <span className="text-[10px] text-[#73765B]">Infinity Hall • VIP Hall • Crown Hall</span>
            </div>
          </div>

          <div className="bg-white border border-[#E7DFD1] p-6 sm:p-7 rounded-sm shadow-sm hover:shadow-md hover:border-[#C4A46B]/60 transition-all duration-300 space-y-4 group">
            <div className="w-10 h-10 rounded-full bg-[#FAF7F2] border border-[#C4A46B]/30 flex items-center justify-center text-[#C4A46B] group-hover:bg-[#C4A46B] group-hover:text-white transition-colors">
              <MapPin className="w-4 h-4" />
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#C4A46B] block">
                Family Milestones
              </span>
              <h3 className="font-serif text-xl font-bold text-[#252522]">
                Birthdays &amp; Anniversaries
              </h3>
            </div>
            <p className="text-xs text-[#73765B] font-light leading-relaxed">
              Intimate celebratory settings with signature North Indian cuisine, live chaat atelier, and artisanal desserts by Urban Sweets.
            </p>
            <div className="pt-3 border-t border-[#E7DFD1]/60">
              <span className="text-[11px] text-[#252522] font-semibold block">
                Venue: Urban Sweets &amp; Skyhilton
              </span>
              <span className="text-[10px] text-[#73765B]">Celebration Banquet • Upper Deck</span>
            </div>
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
                setting="Intimate Indoor Hall & Artisanal Catering"
                headline={urbanSweetsData.banquetVenue.headline}
                description={urbanSweetsData.banquetVenue.description}
                capacityNote={urbanSweetsData.banquetVenue.noteOnCapacities}
                features={urbanSweetsData.banquetVenue.features}
                suitableEvents={urbanSweetsData.banquetVenue.suitableEvents}
                image={urbanSweetsData.banquetVenue.heroImage}
                enquireHref="#enquire"
              />
              <VenueCard
                name="Urban Sweets Terrace & Dining"
                setting="Open Terrace Dining & Live Chaat Atelier"
                headline="Freshly Crafted Delights for Family Milestones"
                description="A vibrant setting pairing open-air terrace seating with interactive live chaat counters, pure desi ghee delicacies, tandoori specialties, and gourmet celebration cakes."
                features={[
                  "Open-air terrace dining presentation",
                  "Interactive live chaat & tandoor live counters",
                  "Pure desi ghee mithai & European patisserie",
                  "Customized family celebratory dining setups",
                ]}
                suitableEvents={[
                  "Family Milestone Celebrations",
                  "Festive Gatherings & Sundowners",
                  "Roka & Ring Ceremonies",
                  "Corporate Team Milestone Dinners",
                ]}
                image="/images/urban-sweets/terrace_dining_spread.png"
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
