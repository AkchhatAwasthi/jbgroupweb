import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  Building2,
  Utensils,
  PartyPopper,
  Bed,
  CheckCircle2,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import EnquiryForm from "@/components/EnquiryForm";
import VideoShowcase from "@/components/VideoShowcase";
import { groupOverview } from "@/data/groupData";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#F7F3EB] text-[#252522]">
      <Navbar />

      {/* Hero Section - 100% Real Grand Architecture Visual */}
      <section className="relative min-h-[90vh] sm:min-h-[96vh] flex flex-col justify-end overflow-hidden bg-[#1F2119]">
        {/* Real Architectural Facade */}
        <div className="absolute inset-0">
          <Image
            src="/images/innovation/grand_jali_entrance.png"
            alt="JB Group Luxury Hospitality Architecture"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center scale-105 animate-subtleZoom"
          />
          {/* Top vignette for navbar readability */}
          <div className="absolute top-0 inset-x-0 h-36 bg-gradient-to-b from-black/80 via-black/25 to-transparent pointer-events-none" />
          {/* Soft Left-Bottom Gradient for Pristine Text Contrast */}
          <div className="absolute inset-0 bg-gradient-to-tr from-black/85 via-black/40 to-transparent pointer-events-none" />
          <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
        </div>

        {/* Hero Content - Classy Left-Bottom Only */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 pt-32">
          <div className="max-w-xl space-y-3.5">
            <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.25em] text-[#DFCA9B] block drop-shadow-sm">
              Celebrations &amp; Hospitality Crafted Beautifully
            </span>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F7F3EB] leading-[1.12] drop-shadow-md">
              Your Perfect <br />
              <span className="italic font-normal font-serif text-[#DFCA9B]">
                Event Awaits
              </span>
            </h1>

            <p className="text-[10px] sm:text-[11px] font-medium tracking-[0.2em] uppercase text-[#E7DFD1]/90 drop-shadow">
              Luxury Venues &nbsp;|&nbsp; Exquisite Dining &nbsp;|&nbsp; Memorable Experiences
            </p>

            {/* Buttons Directly Below Text - Compact & Refined */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#businesses"
                className="px-5 sm:px-6 py-2.5 sm:py-3 bg-[#A37E45] hover:bg-[#8D6B35] text-white rounded-none text-[11px] font-bold uppercase tracking-widest transition-all shadow-md inline-flex items-center gap-2 group"
              >
                <span>Explore Our Venues</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#celebrations-form"
                className="px-5 sm:px-6 py-2.5 sm:py-3 bg-black/40 hover:bg-black/60 text-[#F7F3EB] border border-[#C4A46B]/40 rounded-none text-[11px] font-bold uppercase tracking-widest transition-all backdrop-blur-md inline-flex items-center gap-2"
              >
                <span>Plan Your Celebration</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: The Parent Brand Story (Clean, Concise & Balanced) */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Visual Showcase - Real Photography Trio */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden shadow-xl border border-[#E7DFD1] group">
              <Image
                src="/images/skyhilton/rooftop_terrace.png"
                alt="JB Skyhilton Boutique Hotel & Rooftops"
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex items-end p-3">
                <span className="text-[11px] uppercase tracking-wider text-[#DFCA9B] font-semibold">
                  JB Skyhilton Hotel
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="relative aspect-[16/10] rounded-sm overflow-hidden shadow-xl border border-[#E7DFD1] group">
                <Image
                  src="/images/urban-sweets/sweet_shop_interior_display.png"
                  alt="Urban Sweets Artisanal Mithai Atelier"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex items-end p-2.5">
                  <span className="text-[10px] uppercase tracking-wider text-[#DFCA9B] font-semibold">
                    Urban Sweets &amp; Bakers
                  </span>
                </div>
              </div>

              <div className="relative aspect-[16/10] rounded-sm overflow-hidden shadow-xl border border-[#E7DFD1] group">
                <Image
                  src="/images/innovation/DSC_2803.jpg"
                  alt="JB Innovation Crown Hall Grand Ballroom"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex items-end p-2.5">
                  <span className="text-[10px] uppercase tracking-wider text-[#DFCA9B] font-semibold">
                    JB Innovation Venues
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Story Text - Concise & Meaningful */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="w-6 h-[1.5px] bg-[#C4A46B]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#C4A46B]">
                The Parent Brand
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#252522] leading-tight">
              A Cohesive Vision of Warmth, Gastronomy &amp; Landmark Venues
            </h2>

            <p className="text-sm sm:text-base text-[#252522]/80 font-light leading-relaxed">
              Headquartered in Lucknow, JB Group unites boutique hotel stays at JB Skyhilton, pure artisanal confectionery and dining at Urban Sweets &amp; Bakers, and grand celebration venues at JB Innovation—delivering warm Indian hospitality and flawless event execution.
            </p>

            {/* 3 Core Highlight Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3 bg-white border border-[#E7DFD1] rounded-sm shadow-sm">
                <span className="font-serif text-lg font-bold text-[#252522] block">Boutique Stays</span>
                <span className="text-[11px] text-[#73765B] block mt-0.5">27 Keys &amp; Sky Bar</span>
              </div>
              <div className="p-3 bg-white border border-[#E7DFD1] rounded-sm shadow-sm">
                <span className="font-serif text-lg font-bold text-[#252522] block">Gastronomy</span>
                <span className="text-[11px] text-[#73765B] block mt-0.5">Pure Desi Ghee &amp; Bakery</span>
              </div>
              <div className="p-3 bg-white border border-[#E7DFD1] rounded-sm shadow-sm">
                <span className="font-serif text-lg font-bold text-[#252522] block">Celebrations</span>
                <span className="text-[11px] text-[#73765B] block mt-0.5">Halls, Lawns &amp; Terrace</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#252522] hover:text-[#C4A46B] transition-colors border-b border-[#252522] hover:border-[#C4A46B] pb-1"
              >
                <span>Read Full Parent Story</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Three Distinctive Hospitality Experiences */}
      <section id="businesses" className="py-20 sm:py-24 bg-[#1E2018] text-[#F7F3EB] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Portfolio"
            title="Three Distinctive Hospitality Experiences"
            description="Explore our three specialized verticals, each maintaining its own dedicated identity, atmosphere, and authentic excellence."
            theme="dark"
          />

          <div className="space-y-16 mt-14">
            {/* Business 1: JB Skyhilton */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
              <div className="lg:col-span-7 relative aspect-[16/10] rounded-sm overflow-hidden shadow-2xl group border border-white/10">
                <Image
                  src="/images/skyhilton/rooftop_terrace.png"
                  alt="JB Skyhilton Boutique Hotel"
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-[#252522]/90 border border-[#C4A46B]/40 text-[#DFCA9B] rounded-sm">
                    Hotel • Restaurant • Bar • Banquets
                  </span>
                </div>
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                  <div>
                    <span className="text-xs text-[#E7DFD1]/80 block">Sector B, LDA Colony, Lucknow</span>
                    <span className="font-serif text-2xl sm:text-3xl font-bold text-[#F7F3EB]">
                      JB Skyhilton
                    </span>
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 bg-[#C4A46B] text-[#252522] rounded-sm hidden sm:inline-block">
                    27 Boutique Rooms
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5 space-y-4">
                <span className="text-xs font-serif italic text-[#C4A46B] text-lg block">
                  “Your Stay. Your Celebration. Your Skyhilton.”
                </span>
                <p className="text-xs sm:text-sm text-[#E7DFD1]/80 font-light leading-relaxed">
                  A boutique hotel destination offering 27 tastefully furnished guest rooms, a 70-guest fine dine restaurant, panoramic bar, cozy café, and versatile banquets including Infinity Hall and rooftop Upper Deck.
                </p>

                {/* 3 Clean Tag Pills */}
                <div className="flex flex-wrap gap-1.5 py-2">
                  <span className="px-2.5 py-1 bg-white/5 border border-white/10 text-xs text-[#DFCA9B] rounded-sm">
                    27 Guest Rooms &amp; Suites
                  </span>
                  <span className="px-2.5 py-1 bg-white/5 border border-white/10 text-xs text-[#DFCA9B] rounded-sm">
                    70-PAX Fine Dine &amp; Sky Bar
                  </span>
                  <span className="px-2.5 py-1 bg-white/5 border border-white/10 text-xs text-[#DFCA9B] rounded-sm">
                    Infinity Hall &amp; Upper Deck
                  </span>
                </div>

                <div className="pt-2">
                  <Link
                    href="/skyhilton"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#C4A46B] text-[#252522] rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-[#DFCA9B] transition-all shadow-md group"
                  >
                    <span>Explore JB Skyhilton</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Business 2: Urban Sweets & Bakers (Inverted Layout) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
              <div className="lg:col-span-5 space-y-4 order-2 lg:order-1">
                <span className="text-xs font-serif italic text-[#DFCA9B] text-lg block">
                  “Restaurant, Artisanal Sweets &amp; Celebration Banquets.”
                </span>
                <p className="text-xs sm:text-sm text-[#E7DFD1]/80 font-light leading-relaxed">
                  A multi-faceted culinary haven bringing together a multi-cuisine family restaurant, pure 100% desi ghee artisanal mithai, French patisserie studio, and an intimate celebration banquet hall.
                </p>

                {/* 3 Clean Tag Pills */}
                <div className="flex flex-wrap gap-1.5 py-2">
                  <span className="px-2.5 py-1 bg-white/5 border border-white/10 text-xs text-[#DFCA9B] rounded-sm">
                    Multi-Cuisine Family Restaurant
                  </span>
                  <span className="px-2.5 py-1 bg-white/5 border border-white/10 text-xs text-[#DFCA9B] rounded-sm">
                    100% Pure Desi Ghee Mithai
                  </span>
                  <span className="px-2.5 py-1 bg-white/5 border border-white/10 text-xs text-[#DFCA9B] rounded-sm">
                    Celebration Banquet Hall
                  </span>
                </div>

                <div className="pt-2">
                  <Link
                    href="/urban-sweets"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#581825] border border-[#DFCA9B] text-[#FAF6F0] rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-[#3D0F18] transition-all shadow-md group"
                  >
                    <span>Explore Urban Sweets &amp; Bakers</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-7 relative aspect-[16/10] rounded-sm overflow-hidden shadow-2xl group order-1 lg:order-2 border border-white/10">
                <Image
                  src="/images/urban-sweets/restaurant_dining_1.jpg"
                  alt="Urban Sweets &amp; Bakers Family Restaurant"
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-[#581825]/90 border border-[#DFCA9B]/40 text-[#FAF6F0] rounded-sm">
                    Restaurant • Sweets • Bakery • Banquets
                  </span>
                </div>
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                  <div>
                    <span className="text-xs text-[#E7DFD1]/80 block">Lucknow, UP</span>
                    <span className="font-serif text-2xl sm:text-3xl font-bold text-[#F7F3EB]">
                      Urban Sweets &amp; Bakers
                    </span>
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 bg-[#581825] border border-[#DFCA9B]/50 text-[#FAF6F0] rounded-sm hidden sm:inline-block">
                    Restaurant &amp; Banquets
                  </span>
                </div>
              </div>
            </div>

            {/* Business 3: JB Innovation */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
              <div className="lg:col-span-7 relative aspect-[16/10] rounded-sm overflow-hidden shadow-2xl group border border-white/10">
                <Image
                  src="/images/innovation/grand_jali_entrance.png"
                  alt="JB Innovation Grand Jali Palace Facade"
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-[#252522]/90 border border-[#C4A46B]/40 text-[#DFCA9B] rounded-sm">
                    Weddings • Banquets • Lawns • Suites
                  </span>
                </div>
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                  <div>
                    <span className="text-xs text-[#E7DFD1]/80 block">
                      Near CCS Airport (5.3 km), Lucknow
                    </span>
                    <span className="font-serif text-2xl sm:text-3xl font-bold text-[#F7F3EB]">
                      JB Innovation
                    </span>
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 bg-[#73765B] text-white rounded-sm hidden sm:inline-block">
                    Grand Event Destination
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5 space-y-4">
                <span className="text-xs font-serif italic text-[#C4A46B] text-lg block">
                  “Where Every Celebration Finds Its Setting.”
                </span>
                <p className="text-xs sm:text-sm text-[#E7DFD1]/80 font-light leading-relaxed">
                  Lucknow’s premier wedding and grand event destination featuring Crown Hall, Kanishk Hall, expansive green celebration lawns, open rooftop terrace, Carnations Restaurant, and luxury suites.
                </p>

                {/* 3 Clean Tag Pills */}
                <div className="flex flex-wrap gap-1.5 py-2">
                  <span className="px-2.5 py-1 bg-white/5 border border-white/10 text-xs text-[#DFCA9B] rounded-sm">
                    Crown &amp; Kanishk Grand Halls
                  </span>
                  <span className="px-2.5 py-1 bg-white/5 border border-white/10 text-xs text-[#DFCA9B] rounded-sm">
                    Expansive Celebration Lawns
                  </span>
                  <span className="px-2.5 py-1 bg-white/5 border border-white/10 text-xs text-[#DFCA9B] rounded-sm">
                    Open Rooftop Deck &amp; Suites
                  </span>
                </div>

                <div className="pt-2">
                  <Link
                    href="/jb-innovation"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#73765B] text-white rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-[#5C5F47] transition-all shadow-md group"
                  >
                    <span>Explore JB Innovation</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Experiences Across the Group (Equal-Height, Well-Aligned Grid) */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Signature Journeys"
          title="Experiences Across the Group"
          description="From boutique accommodations and high-altitude rooftop mixology to grand wedding pheras on manicured lawns."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {groupOverview.experiences.map((exp, idx) => (
            <Link
              key={idx}
              href={exp.route}
              className="bg-white border border-[#E7DFD1] hover:border-[#C4A46B]/60 rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#252522]">
                <Image
                  src={exp.image}
                  alt={exp.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 bg-[#252522]/90 text-[#DFCA9B] rounded-sm border border-[#C4A46B]/30">
                    {exp.business}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#252522] group-hover:text-[#C4A46B] transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-xs text-[#73765B] mt-2 font-light leading-relaxed line-clamp-2">
                    {exp.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#E7DFD1] flex items-center justify-between text-xs font-semibold text-[#252522] group-hover:text-[#C4A46B] transition-colors">
                  <span>Explore Offering</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Dedicated Video Showcase - Real Event Reels */}
      <VideoShowcase
        eyebrow="Celebrations in Motion"
        title="Experience the Atmosphere"
        description="Take an exclusive video tour of our illuminated celebration lawns, grand halls, and milestone occasions."
        theme="dark"
        showLinkToVenues={true}
      />

      {/* Section 5: Celebrations Banner - Real Night Gala Lawn Visual */}
      <section className="relative py-24 sm:py-28 bg-[#1E2018] text-[#F7F3EB] overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 opacity-25">
          <Image
            src="/images/innovation/DSC_2102.jpg"
            alt="Real Celebration Lawns Night Gala at JB Group"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#C4A46B]">
            Weddings • Milestones • Corporate
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#F7F3EB] leading-tight">
            Find Your Perfect Venue Across JB Group
          </h2>
          <p className="text-sm sm:text-base text-[#E7DFD1]/80 max-w-2xl mx-auto font-light leading-relaxed">
            From intimate family dinners and corporate cocktail mixers to grand wedding receptions with lawns and ballrooms, our event concierges match your occasion to the ideal setting.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/celebrations"
              className="px-8 py-3.5 bg-[#C4A46B] text-[#252522] text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-[#DFCA9B] transition-all shadow-xl"
            >
              View Venue Directory
            </Link>
            <a
              href="#celebrations-form"
              className="px-8 py-3.5 bg-white/10 border border-[#C4A46B]/40 text-[#F7F3EB] text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-white/20 transition-all backdrop-blur-sm"
            >
              Request Proposal
            </a>
          </div>
        </div>
      </section>

      {/* Section 6: Central Reservations & Enquiry Hub */}
      <section id="celebrations-form" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <EnquiryForm
          title="Direct Group Reservations &amp; Event Concierge"
          subtitle="Submit your details below. Our central reservations team connects you directly with the dedicated event and room managers across JB Skyhilton, Urban Sweets &amp; Bakers, and JB Innovation."
          defaultBusiness="all"
        />
      </section>

      <Footer />
    </div>
  );
}

