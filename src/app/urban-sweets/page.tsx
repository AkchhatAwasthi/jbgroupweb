import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  ShieldAlert,
  Cake,
  Gift,
  PartyPopper,
  Check,
  Utensils,
  Flame,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionHeading from "@/components/SectionHeading";
import EnquiryForm from "@/components/EnquiryForm";
import { urbanSweetsData } from "@/data/urbanSweetsData";

export const metadata = {
  title: "Urban Sweets & Bakers | Restaurant, Artisanal Sweets & Celebration Banquets Lucknow",
  description:
    "Urban Sweets & Bakers by JB Group: A multi-cuisine family restaurant, pure handcrafted Indian sweets, French-inspired bakery, bespoke gifting, and an intimate celebration banquet in Lucknow.",
};

export default function UrbanSweetsHomePage() {
  return (
    <div className="min-h-screen bg-[#FAF6F0] text-[#252522]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[85vh] sm:min-h-[92vh] flex flex-col justify-between overflow-hidden bg-[#2D0A11]">
        {/* Full Visibility Hero Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/urban-sweets/sweet_shop_counter.png"
            alt="Urban Sweets & Bakers Counter & Artisanal Atelier"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center scale-105 animate-subtleZoom"
          />
          {/* Subtle Top & Bottom Vignettes Only - Center is 100% Clear & Radiant */}
          <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-black/70 via-black/20 to-transparent pointer-events-none" />
          <div className="absolute bottom-0 inset-x-0 h-72 sm:h-88 bg-gradient-to-t from-[#2D0A11] via-[#2D0A11]/70 to-transparent pointer-events-none" />
        </div>

        {/* Top: Clean Breadcrumb Bar */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32">
          <Breadcrumbs
            items={[{ label: "Urban Sweets & Bakers" }]}
            theme="maroon"
          />
        </div>

        {/* Bottom: Minimal, High-Impact Visual Anchor */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-10 sm:pb-14">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-4 max-w-2xl">
              <div className="flex items-center gap-3 animate-fadeIn">
                <Image
                  src="/images/logos/jb_urban_sweets_logo.png"
                  alt="Urban Sweets & Bakers Logo"
                  width={75}
                  height={48}
                  className="h-12 sm:h-14 w-auto object-contain drop-shadow-md"
                  priority
                />
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-[#DFCA9B]/40 text-[11px] tracking-[0.25em] uppercase text-[#DFCA9B] font-medium">
                  <Sparkles className="w-3.5 h-3.5 text-[#DFCA9B]" />
                  <span>Restaurant • Artisanal Sweets • Bakery • Banquets</span>
                </div>
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FAF6F0] leading-[1.15] drop-shadow-lg animate-fadeInUp">
                A Feast of Flavors &amp;{" "}
                <span className="italic font-normal font-serif text-[#DFCA9B]">
                  Sweet Moments.
                </span>
              </h1>
            </div>

            <div className="flex flex-wrap items-center gap-3 animate-fadeInUp delay-100">
              <a
                href="#restaurant"
                className="btn-shine px-6 sm:px-7 py-3.5 bg-[#DFCA9B] hover:bg-[#ebd9b2] text-[#3D0F18] rounded-sm text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-xl hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2"
              >
                <Utensils className="w-4 h-4 text-[#3D0F18]" />
                <span>Restaurant</span>
              </a>

              <Link
                href="/urban-sweets/sweets-and-bakery"
                className="px-6 sm:px-7 py-3.5 bg-black/50 hover:bg-black/70 text-[#FAF6F0] border border-[#DFCA9B]/50 rounded-sm text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] backdrop-blur-md flex items-center gap-2"
              >
                <Cake className="w-4 h-4 text-[#DFCA9B]" />
                <span>Sweets &amp; Bakery</span>
              </Link>

              <Link
                href="/urban-sweets/banquets"
                className="px-6 sm:px-7 py-3.5 bg-black/50 hover:bg-black/70 text-[#FAF6F0] border border-[#DFCA9B]/50 rounded-sm text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] backdrop-blur-md flex items-center gap-2"
              >
                <PartyPopper className="w-4 h-4 text-[#DFCA9B]" />
                <span>Banquets</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Integrity / Admin Notice */}
      <section className="bg-[#581825]/10 border-b border-[#581825]/20 py-4 px-4 text-xs text-[#581825] text-center">
        <div className="max-w-5xl mx-auto flex items-center justify-center gap-2">
          <ShieldAlert className="w-4 h-4 shrink-0" />
          <span>
            <strong>Brand Note:</strong> Urban Sweets &amp; Bakers brand structure is established below. Specific retail store addresses and phone numbers will be officially updated once finalized.
          </span>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6 reveal-left">
            <div className="flex items-center gap-3">
              <Image
                src="/images/logos/jb_urban_sweets_logo.png"
                alt="Urban Sweets &amp; Bakers Emblem"
                width={65}
                height={42}
                className="h-11 w-auto object-contain"
              />
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#581825]">
                Culinary Philosophy
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#252522] leading-tight">
              Honoring Authentic Flavors, Pure Mithai &amp; Memorable Dining
            </h2>
            <div className="h-0.5 w-16 bg-[#C4A46B]" />

            <p className="text-base text-[#252522]/80 font-light leading-relaxed">
              {urbanSweetsData.overview.paragraph1}
            </p>
            <p className="text-base text-[#252522]/80 font-light leading-relaxed">
              {urbanSweetsData.overview.paragraph2}
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#restaurant"
                className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#581825] hover:text-[#3D0F18] transition-colors border-b border-[#581825] pb-1"
              >
                <span>Discover Restaurant</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <Link
                href="/urban-sweets/sweets-and-bakery"
                className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#581825] hover:text-[#3D0F18] transition-colors border-b border-[#581825] pb-1"
              >
                <span>Artisanal Sweets</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/urban-sweets/banquets"
                className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#581825] hover:text-[#3D0F18] transition-colors border-b border-[#581825] pb-1"
              >
                <span>Banquet Hall</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4 reveal-right">
            <div className="relative aspect-[3/4] rounded-sm overflow-hidden shadow-xl hover-lift">
              <Image
                src="/images/urban-sweets/restaurant_dining_1.jpg"
                alt="Urban Sweets Multi-Cuisine Family Restaurant"
                fill
                sizes="25vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex items-end p-4">
                <span className="text-xs font-semibold text-white">Family Dining Room</span>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="relative aspect-square rounded-sm overflow-hidden shadow-xl hover-lift delay-150">
                <Image
                  src="/images/urban-sweets/sweet_shop_interior_display.png"
                  alt="Artisanal Pure Desi Ghee Sweets Display"
                  fill
                  sizes="25vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex items-end p-3">
                  <span className="text-[11px] font-semibold text-white">Artisanal Sweets Atelier</span>
                </div>
              </div>
              <div className="relative aspect-square rounded-sm overflow-hidden shadow-xl hover-lift delay-300">
                <Image
                  src="/images/urban-sweets/banquet_hall_1.jpg"
                  alt="Celebration Banquet Venue"
                  fill
                  sizes="25vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex items-end p-3">
                  <span className="text-[11px] font-semibold text-white">Celebration Banquet</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Restaurant Spotlight */}
      <section id="restaurant" className="py-20 bg-[#FAF6F0] border-y border-[#581825]/15 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-[#E7DFD1] rounded-sm overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12 reveal-up hover-lift transition-all duration-300">
            <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto min-h-[350px]">
              <Image
                src="/images/urban-sweets/restaurant_dining_2.jpg"
                alt="Urban Sweets & Bakers Multi-Cuisine Family Restaurant"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute top-4 left-4">
                <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-[#581825]/90 text-[#DFCA9B] rounded-sm border border-[#DFCA9B]/30">
                  Dine-In • North Indian • Tandoor • Chaat
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#581825]/10 text-[#581825] rounded-full text-xs font-semibold uppercase tracking-wider">
                  <Flame className="w-3.5 h-3.5 text-[#581825]" />
                  <span>The Restaurant Experience</span>
                </div>
                <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#252522]">
                  Multi-Cuisine Family Dining
                </h3>
                <p className="text-sm text-[#73765B] font-light leading-relaxed">
                  Step into our welcoming dining room with plush velvet banquette seating and ambient chandeliers. We serve slow-simmered Dal Makhani, Paneer curries, clay-oven tandoor rotis, and mouthwatering street chaat prepared fresh with utmost hygiene and authentic spice blends.
                </p>

                <div className="space-y-2 pt-2 border-t border-black/5 text-xs text-[#252522]/80">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#581825]" />
                    <span>Rich North Indian curries, paneer delicacies &amp; live gravies</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#581825]" />
                    <span>Tandoori breads, stuffed kulchas &amp; sizzling kebabs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#581825]" />
                    <span>Live Lucknowi chaat counter: Palak patta chaat &amp; dahi bhalla</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#581825]" />
                    <span>Spacious family tables &amp; dedicated hospitality staff</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  href="/urban-sweets/sweets-and-bakery#restaurant-menu"
                  className="btn-shine inline-flex items-center gap-2 px-6 py-3 bg-[#581825] text-white rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-[#3D0F18] transition-all shadow-md group"
                >
                  <span>View Dining Highlights</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#DFCA9B] transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/urban-sweets/banquets"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#581825] border border-[#581825]/40 rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-[#FAF6F0] transition-all"
                >
                  <span>Book Private Banquet</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Restaurant & Food Photography Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <div className="relative aspect-[4/3] rounded-sm overflow-hidden shadow-md group hover-lift reveal-up">
              <Image
                src="/images/urban-sweets/food_dish_1.jpg"
                alt="Signature Gravies & Curries"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-3">
                <span className="text-[11px] font-semibold text-white">Signature North Indian Gravies</span>
              </div>
            </div>

            <div className="relative aspect-[4/3] rounded-sm overflow-hidden shadow-md group hover-lift reveal-up delay-100">
              <Image
                src="/images/urban-sweets/restaurant_dining_3.jpg"
                alt="Warm Dining Room Seating"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-3">
                <span className="text-[11px] font-semibold text-white">Comfortable Dining Room</span>
              </div>
            </div>

            <div className="relative aspect-[4/3] rounded-sm overflow-hidden shadow-md group hover-lift reveal-up delay-200">
              <Image
                src="/images/urban-sweets/food_dish_2.jpg"
                alt="Chef Specialty Delicacies"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-3">
                <span className="text-[11px] font-semibold text-white">Authentic Handcrafted Flavors</span>
              </div>
            </div>

            <div className="relative aspect-[4/3] rounded-sm overflow-hidden shadow-md group hover-lift reveal-up delay-300">
              <Image
                src="/images/urban-sweets/terrace_dining_spread.png"
                alt="Grand Terrace Feast Spread"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-3">
                <span className="text-[11px] font-semibold text-white">Lavish Dining Spread</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Four Expressions of Craft */}
      <section className="py-24 bg-[#581825] text-[#FAF6F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Complete Hospitality"
            title="Four Expressions of Craft"
            description="From multi-cuisine restaurant feasts and pure desi ghee sweets to celebration banquet events and bakery hampers."
            theme="maroon"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {urbanSweetsData.offerings.map((offering, idx) => (
              <div
                key={offering.id}
                className={`bg-[#3D0F18] border border-[#DFCA9B]/30 rounded-sm overflow-hidden shadow-lg flex flex-col justify-between group hover:border-[#DFCA9B]/70 hover-lift reveal-up transition-all duration-300 ${
                  idx === 1 ? "delay-100" : idx === 2 ? "delay-200" : idx === 3 ? "delay-300" : ""
                }`}
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={offering.image}
                    alt={offering.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#FAF6F0] group-hover:text-[#DFCA9B] transition-colors">
                      {offering.title}
                    </h3>
                    <p className="text-xs text-[#E7DFD1]/80 mt-2 font-light leading-relaxed">
                      {offering.description}
                    </p>
                  </div>

                  <div className="space-y-1.5 pt-3 border-t border-white/10 text-xs text-[#E7DFD1]/70">
                    {offering.highlights.map((hl, i) => (
                      <div key={i} className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-[#DFCA9B] shrink-0" />
                        <span className="truncate">{hl}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2">
                    <Link
                      href={offering.route}
                      className="group/link inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#DFCA9B] hover:text-white transition-colors"
                    >
                      <span>Explore {offering.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Banquet Spotlight */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-white border border-[#E7DFD1] rounded-sm overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12 reveal-up hover-lift transition-all duration-300">
          <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto min-h-[360px]">
            <Image
              src="/images/urban-sweets/banquet_hall_2.jpg"
              alt="Urban Sweets Celebration Banquet"
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#581825]">
                Private Events
              </span>
              <h3 className="font-serif text-3xl font-bold text-[#252522]">
                Celebration Banquet Space
              </h3>
              <p className="text-sm text-[#73765B] font-light leading-relaxed">
                {urbanSweetsData.banquetVenue.description}
              </p>
              <div className="p-3 bg-[#FAF6F0] border border-[#581825]/20 rounded text-xs text-[#581825] italic">
                {urbanSweetsData.banquetVenue.noteOnCapacities}
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/urban-sweets/banquets"
                className="btn-shine inline-flex items-center gap-2 px-6 py-3 bg-[#581825] text-white rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-[#3D0F18] transition-all shadow-md group"
              >
                <span>View Banquet Venue Details</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#DFCA9B] transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* Banquet Venue Photo Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="relative aspect-[4/3] rounded-sm overflow-hidden shadow-md group hover-lift reveal-up">
            <Image
              src="/images/urban-sweets/banquet_hall_1.jpg"
              alt="Banquet Grand View"
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-3">
              <span className="text-[11px] font-semibold text-white">Grand Celebration Hall</span>
            </div>
          </div>
          <div className="relative aspect-[4/3] rounded-sm overflow-hidden shadow-md group hover-lift reveal-up delay-100">
            <Image
              src="/images/urban-sweets/banquet_setup_1.jpg"
              alt="Banquet Stage & Seating"
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-3">
              <span className="text-[11px] font-semibold text-white">Royal Seating Arrangements</span>
            </div>
          </div>
          <div className="relative aspect-[4/3] rounded-sm overflow-hidden shadow-md group hover-lift reveal-up delay-200">
            <Image
              src="/images/urban-sweets/banquet_hall_3.jpg"
              alt="Crystal Chandelier Ambience"
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-3">
              <span className="text-[11px] font-semibold text-white">Crystal Chandeliers</span>
            </div>
          </div>
          <div className="relative aspect-[4/3] rounded-sm overflow-hidden shadow-md group hover-lift reveal-up delay-300">
            <Image
              src="/images/urban-sweets/banquet_hall_4.jpg"
              alt="Intimate Dining Ambience"
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-3">
              <span className="text-[11px] font-semibold text-white">Milestone Gatherings</span>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Gifting Section */}
      <section className="py-20 bg-[#581825] text-[#FAF6F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Bespoke Confectionery"
            title="Luxury Gifting Collections"
            description="Royal velvet boxes, gold hot-stamped trunks, and personalized confections crafted for weddings and corporate milestones."
            theme="maroon"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-[#3D0F18] border border-[#DFCA9B]/30 rounded-sm overflow-hidden shadow-xl flex flex-col group hover:border-[#DFCA9B]/70 hover-lift reveal-up transition-all">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src="/images/urban-sweets/luxury_gift_box_1.png"
                  alt="Royal Heritage Velvet Gift Box"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-[#581825]/90 border border-[#DFCA9B]/40 text-[#DFCA9B] rounded-sm">
                    Wedding &amp; VIP
                  </span>
                </div>
              </div>
              <div className="p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#FAF6F0]">
                    The Royal Heritage Velvet Box
                  </h3>
                  <p className="text-sm text-[#E7DFD1]/80 mt-2 font-light leading-relaxed">
                    Upholstered in rich royal velvet with gold embossing, designed to house signature pure desi ghee confections, dried saffron fruits, and customized monogram notes.
                  </p>
                </div>
                <div className="pt-2">
                  <Link
                    href="/urban-sweets/sweets-and-bakery#hampers"
                    className="group/link inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#DFCA9B] hover:text-white transition-colors"
                  >
                    <span>View Gifting Details</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-[#3D0F18] border border-[#DFCA9B]/30 rounded-sm overflow-hidden shadow-xl flex flex-col group hover:border-[#DFCA9B]/70 hover-lift reveal-up delay-150 transition-all">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src="/images/urban-sweets/luxury_gift_box_2.png"
                  alt="Artisanal Sweets Presentation Hamper"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-[#581825]/90 border border-[#DFCA9B]/40 text-[#DFCA9B] rounded-sm">
                    Festive &amp; Corporate
                  </span>
                </div>
              </div>
              <div className="p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#FAF6F0]">
                    Festive Jewel Hamper Collection
                  </h3>
                  <p className="text-sm text-[#E7DFD1]/80 mt-2 font-light leading-relaxed">
                    Rigid drawer presentation featuring artisanal sweets assortments, gourmet bakery treats, and roasted nuts curated for festive greetings and corporate gifting.
                  </p>
                </div>
                <div className="pt-2">
                  <Link
                    href="/urban-sweets/sweets-and-bakery#hampers"
                    className="group/link inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#DFCA9B] hover:text-white transition-colors"
                  >
                    <span>Request Hamper Proposal</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Online Enquiry Form */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto reveal-up">
        <EnquiryForm
          title="Urban Sweets & Bakers Enquiries"
          subtitle="Place bulk gifting enquiries, custom celebration cake requests, restaurant reservations, or reserve our private celebration banquet hall."
          defaultBusiness="urban-sweets"
        />
      </section>

      <Footer />
    </div>
  );
}
