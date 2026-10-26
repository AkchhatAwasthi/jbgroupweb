import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Building2,
  Sparkles,
  Phone,
  Mail,
  ChevronDown,
  Calendar,
  Users,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import EnquiryForm from "@/components/EnquiryForm";
import { groupOverview } from "@/data/groupData";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#F7F3EB] text-[#252522]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#252522]">
        {/* Cinematic Backdrop Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/group/hero.jpg"
            alt="JB Group Luxury Hospitality Architecture"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center scale-105 animate-subtleZoom"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#252522] via-[#252522]/60 to-black/40" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-[#F7F3EB] pt-24 pb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#C4A46B]/40 text-xs tracking-[0.25em] uppercase text-[#DFCA9B] font-medium mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#C4A46B]" />
            <span>Hospitality & Celebrations Group • Lucknow</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#F7F3EB] leading-[1.1] mb-6">
            Hospitality, <br className="hidden sm:inline" />
            <span className="italic font-normal font-serif text-[#C4A46B]">
              Thoughtfully Elevated.
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-xl font-light text-[#E7DFD1] leading-relaxed mb-10">
            {groupOverview.subheadline}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#businesses"
              className="w-full sm:w-auto px-8 py-4 bg-[#C4A46B] text-[#252522] rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-[#DFCA9B] transition-all shadow-xl flex items-center justify-center gap-2 group"
            >
              <span>Explore Our Businesses</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#celebrations-form"
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-[#F7F3EB] border border-[#C4A46B]/40 rounded-sm text-xs font-bold uppercase tracking-widest transition-all backdrop-blur-md flex items-center justify-center gap-2"
            >
              <span>Plan Your Celebration</span>
            </a>
          </div>

          {/* Key Quick Counters */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mt-16 pt-10 border-t border-white/10 text-left">
            <div>
              <span className="font-serif text-2xl sm:text-3xl font-bold text-[#C4A46B]">3</span>
              <p className="text-xs text-[#E7DFD1]/70 uppercase tracking-wider mt-1">
                Distinct Businesses
              </p>
            </div>
            <div>
              <span className="font-serif text-2xl sm:text-3xl font-bold text-[#C4A46B]">27+</span>
              <p className="text-xs text-[#E7DFD1]/70 uppercase tracking-wider mt-1">
                Boutique Rooms
              </p>
            </div>
            <div>
              <span className="font-serif text-2xl sm:text-3xl font-bold text-[#C4A46B]">6+</span>
              <p className="text-xs text-[#E7DFD1]/70 uppercase tracking-wider mt-1">
                Halls, Lawns & Decks
              </p>
            </div>
            <div>
              <span className="font-serif text-2xl sm:text-3xl font-bold text-[#C4A46B]">100%</span>
              <p className="text-xs text-[#E7DFD1]/70 uppercase tracking-wider mt-1">
                Dedicated Concierge
              </p>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-white/40 animate-bounce">
          <ChevronDown className="w-5 h-5 text-[#C4A46B]" />
        </div>
      </section>

      {/* Section 2: The JB Group Story */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Asymmetric Image Collage */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden shadow-2xl">
              <Image
                src="/images/skyhilton/hotel_hero.png"
                alt="JB Skyhilton Hotel Exterior & Entrance"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-4 sm:-right-8 w-3/5 aspect-[4/3] rounded-sm overflow-hidden shadow-2xl border-4 border-[#F7F3EB] hidden sm:block">
              <Image
                src="/images/innovation/crown_hall.png"
                alt="Crown Hall Banquet Interior"
                fill
                sizes="30vw"
                className="object-cover"
              />
            </div>
            <div className="absolute top-6 -left-4 sm:-left-6 bg-[#252522] text-[#F7F3EB] p-4 rounded-sm border border-[#C4A46B]/40 shadow-xl max-w-[200px]">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#C4A46B] block">
                Hospitality
              </span>
              <p className="text-xs text-[#E7DFD1] mt-1 font-light">
                Tailored stays & celebrations rooted in Lucknow.
              </p>
            </div>
          </div>

          {/* Story Text */}
          <div className="lg:col-span-6 space-y-6 sm:pl-4">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#C4A46B]">
              The Parent Brand
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#252522] leading-tight">
              A Cohesive Vision of Warmth, Gastronomy & Landmark Venues
            </h2>
            <div className="h-0.5 w-16 bg-[#C4A46B]" />
            <p className="text-base text-[#252522]/80 font-light leading-relaxed">
              {groupOverview.story.paragraph1}
            </p>
            <p className="text-base text-[#252522]/80 font-light leading-relaxed">
              {groupOverview.story.paragraph2}
            </p>
            <p className="text-base text-[#252522]/80 font-light leading-relaxed">
              {groupOverview.story.paragraph3}
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
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

      {/* Section 3: Explore Our Businesses (Asymmetric Editorial Showcase) */}
      <section id="businesses" className="py-24 bg-[#252522] text-[#F7F3EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Portfolio"
            title="Three Distinctive Hospitality Experiences"
            description="Explore our three specialized verticals, each maintaining its own dedicated identity, atmosphere, and booking journey."
            theme="dark"
          />

          <div className="space-y-20 mt-16">
            {/* Business 1: JB Skyhilton */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
              <div className="lg:col-span-7 relative aspect-[16/10] rounded-sm overflow-hidden shadow-2xl group">
                <Image
                  src="/images/skyhilton/hotel_hero.png"
                  alt="JB Skyhilton Hotel"
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-[#252522]/90 border border-[#C4A46B]/40 text-[#DFCA9B] rounded-sm">
                    Hotel • Restaurant • Bar • Banquets
                  </span>
                </div>
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                  <div>
                    <span className="text-xs text-[#E7DFD1]/80 block">LDA Colony, Lucknow</span>
                    <span className="font-serif text-2xl sm:text-3xl font-bold text-[#F7F3EB]">
                      JB Skyhilton
                    </span>
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 bg-[#C4A46B] text-[#252522] rounded-sm hidden sm:inline-block">
                    27 Rooms
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5 space-y-5">
                <span className="text-xs font-serif italic text-[#C4A46B] text-lg">
                  “Your Stay. Your Celebration. Your Skyhilton.”
                </span>
                <p className="text-sm sm:text-base text-[#E7DFD1]/80 font-light leading-relaxed">
                  A boutique hotel destination in Sector B, Bargawan, LDA Colony offering 27 tastefully furnished guest rooms, a 70-pax Fine Dine Restaurant, panoramic Bar, cozy Café, and versatile banquets including Infinity Hall and rooftop Upper Deck.
                </p>
                <div className="space-y-2 text-xs text-[#E7DFD1]/70 border-y border-white/10 py-4">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C4A46B]" />
                    <span>27 Rooms: Standard, Elite, Deluxe & Suite categories</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C4A46B]" />
                    <span>Fine Dine Restaurant (70 PAX) & Panoramic Sky Bar (70 PAX)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C4A46B]" />
                    <span>Infinity Hall (80–100 PAX) & Open Terrace LED Space (50–70 PAX)</span>
                  </div>
                </div>
                <div>
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
              <div className="lg:col-span-5 space-y-5 order-2 lg:order-1">
                <span className="text-xs font-serif italic text-[#DFCA9B] text-lg">
                  “Made for Sweet Moments.”
                </span>
                <p className="text-sm sm:text-base text-[#E7DFD1]/80 font-light leading-relaxed">
                  An ode to culinary craftsmanship, bringing together pure desi ghee artisanal Indian sweets, European-style patisserie, bespoke velvet gifting hampers, and an intimate banquet hall for family celebrations.
                </p>
                <div className="space-y-2 text-xs text-[#E7DFD1]/70 border-y border-white/10 py-4">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DFCA9B]" />
                    <span>Handcrafted Artisan Mithai with pure saffron & silver vark</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DFCA9B]" />
                    <span>Gourmet Bakery Studio: Artisan sourdough, tarts & custom cakes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DFCA9B]" />
                    <span>Intimate Celebration Banquet for birthdays, anniversaries & dinners</span>
                  </div>
                </div>
                <div>
                  <Link
                    href="/urban-sweets"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#581825] border border-[#DFCA9B] text-[#FAF6F0] rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-[#3D0F18] transition-all shadow-md group"
                  >
                    <span>Explore Urban Sweets & Bakers</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-7 relative aspect-[16/10] rounded-sm overflow-hidden shadow-2xl group order-1 lg:order-2">
                <Image
                  src="/images/urban-sweets/mithai.jpg"
                  alt="Urban Sweets & Bakers Artisan Mithai"
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-[#581825]/90 border border-[#DFCA9B]/40 text-[#FAF6F0] rounded-sm">
                    Sweets • Bakery • Gifting • Banquet
                  </span>
                </div>
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                  <div>
                    <span className="text-xs text-[#E7DFD1]/80 block">Lucknow, UP</span>
                    <span className="font-serif text-2xl sm:text-3xl font-bold text-[#F7F3EB]">
                      Urban Sweets & Bakers
                    </span>
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 bg-[#581825] border border-[#DFCA9B]/50 text-[#FAF6F0] rounded-sm hidden sm:inline-block">
                    Artisanal Atelier
                  </span>
                </div>
              </div>
            </div>

            {/* Business 3: JB Innovation */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
              <div className="lg:col-span-7 relative aspect-[16/10] rounded-sm overflow-hidden shadow-2xl group">
                <Image
                  src="/images/innovation/crown_hall.png"
                  alt="JB Innovation Crown Hall"
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-[#252522]/90 border border-[#C4A46B]/40 text-[#DFCA9B] rounded-sm">
                    Weddings • Banquets • Lawns • Accommodation
                  </span>
                </div>
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
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

              <div className="lg:col-span-5 space-y-5">
                <span className="text-xs font-serif italic text-[#C4A46B] text-lg">
                  “Where Every Celebration Finds Its Setting.”
                </span>
                <p className="text-sm sm:text-base text-[#E7DFD1]/80 font-light leading-relaxed">
                  A dedicated destination offering grand banquet halls, expansive green lawns, rooftop celebration terrace, luxury guest accommodation (Deluxe 180 sq ft & Executive 250 sq ft), and Carnations Restaurant.
                </p>
                <div className="space-y-2 text-xs text-[#E7DFD1]/70 border-y border-white/10 py-4">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C4A46B]" />
                    <span>Crown Hall (Golden illuminations, chandeliers & stage)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C4A46B]" />
                    <span>Kanishk Hall (Marble flooring & integrated stylish bar)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C4A46B]" />
                    <span>Open Terrace rooftop & Expansive Landscaped Lawns</span>
                  </div>
                </div>
                <div>
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

      {/* Section 4: Experiences Across the Group */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Signature Journeys"
          title="Experiences Across the Group"
          description="From boutique accommodations and high-altitude rooftop mixology to grand wedding pheras on manicured lawns."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {groupOverview.experiences.map((exp, idx) => (
            <Link
              key={idx}
              href={exp.route}
              className="bg-white border border-[#E7DFD1] rounded-sm overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#252522]">
                <Image
                  src={exp.image}
                  alt={exp.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 bg-[#252522]/90 text-[#DFCA9B] rounded-sm border border-[#C4A46B]/30">
                    {exp.business}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#252522] group-hover:text-[#C4A46B] transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-xs text-[#73765B] mt-2 font-light leading-relaxed">
                    {exp.description}
                  </p>
                </div>

                <div className="pt-2 flex items-center gap-1.5 text-xs font-semibold text-[#252522] group-hover:text-[#C4A46B] transition-colors">
                  <span>Explore Offering</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Section 5 & 6: Celebrations & Brand Showcase Hero */}
      <section className="relative py-28 bg-[#252522] text-[#F7F3EB] overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <Image
            src="/images/group/celebrations.jpg"
            alt="Celebrations across JB Group"
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
          <p className="text-base sm:text-lg text-[#E7DFD1]/80 max-w-2xl mx-auto font-light leading-relaxed">
            Whether planning an intimate 25-guest family milestone dinner, a 70-guest corporate cocktail mixer, or a grand wedding celebration with lawns and ballrooms, our event concierges match your occasion to the perfect setting.
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

      {/* Section 7: Central Reservations & Enquiry Hub */}
      <section id="celebrations-form" className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <EnquiryForm
          title="Direct Group Reservations & Event Concierge"
          subtitle="Submit your details below. Our central reservations team connects you directly with the dedicated event and room managers across JB Skyhilton, Urban Sweets & Bakers, and JB Innovation."
          defaultBusiness="all"
        />
      </section>

      <Footer />
    </div>
  );
}
