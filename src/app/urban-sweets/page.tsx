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
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionHeading from "@/components/SectionHeading";
import EnquiryForm from "@/components/EnquiryForm";
import { urbanSweetsData } from "@/data/urbanSweetsData";

export const metadata = {
  title: "Urban Sweets & Bakers | Artisanal Sweets, Bakery & Banquet Lucknow",
  description:
    "Urban Sweets & Bakers by JB Group: Handcrafted Indian sweets, European-style patisserie, bespoke festive gifting, and an intimate celebration banquet in Lucknow.",
};

export default function UrbanSweetsHomePage() {
  return (
    <div className="min-h-screen bg-[#FAF6F0] text-[#252522]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#3D0F18]">
        <div className="absolute inset-0">
          <Image
            src="/images/urban-sweets/mithai.jpg"
            alt="Urban Sweets & Bakers Luxury Artisanal Mithai"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#3D0F18] via-[#3D0F18]/60 to-black/40" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-[#FAF6F0] pt-24 pb-16">
          <Breadcrumbs
            items={[{ label: "Urban Sweets & Bakers" }]}
            theme="maroon"
          />

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#DFCA9B]/40 text-xs tracking-[0.25em] uppercase text-[#DFCA9B] font-medium mt-6 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#DFCA9B]" />
            <span>Artisanal Confectionery • Bakery • Banquet • Lucknow</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#FAF6F0] leading-[1.1] mb-6">
            Made for <br className="hidden sm:inline" />
            <span className="italic font-normal font-serif text-[#DFCA9B]">
              Sweet Moments.
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-lg font-light text-[#E7DFD1] leading-relaxed mb-10">
            A celebration of handcrafted Indian mithai, European-inspired artisanal bakery loaves, delicate patisserie, bespoke festive hampers, and an intimate celebration banquet venue.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/urban-sweets/sweets-and-bakery"
              className="w-full sm:w-auto px-7 py-3.5 bg-[#581825] border border-[#DFCA9B] text-[#FAF6F0] rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-[#3D0F18] transition-all shadow-xl flex items-center justify-center gap-2"
            >
              <Cake className="w-4 h-4 text-[#DFCA9B]" />
              <span>Explore Sweets & Bakery</span>
            </Link>

            <Link
              href="/urban-sweets/sweets-and-bakery#gifting"
              className="w-full sm:w-auto px-7 py-3.5 bg-white/10 hover:bg-white/20 text-[#FAF6F0] border border-[#DFCA9B]/40 rounded-sm text-xs font-bold uppercase tracking-widest transition-all backdrop-blur-md flex items-center justify-center gap-2"
            >
              <Gift className="w-4 h-4 text-[#DFCA9B]" />
              <span>Festive & Corporate Gifting</span>
            </Link>

            <Link
              href="/urban-sweets/banquets"
              className="w-full sm:w-auto px-7 py-3.5 bg-white/10 hover:bg-white/20 text-[#FAF6F0] border border-[#DFCA9B]/40 rounded-sm text-xs font-bold uppercase tracking-widest transition-all backdrop-blur-md flex items-center justify-center gap-2"
            >
              <PartyPopper className="w-4 h-4 text-[#DFCA9B]" />
              <span>Celebration Banquet</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Brand Integrity / Admin Notice */}
      <section className="bg-[#581825]/10 border-b border-[#581825]/20 py-4 px-4 text-xs text-[#581825] text-center">
        <div className="max-w-5xl mx-auto flex items-center justify-center gap-2">
          <ShieldAlert className="w-4 h-4 shrink-0" />
          <span>
            <strong>Brand Note:</strong> Urban Sweets & Bakers brand structure is established below. Specific retail store addresses and phone numbers will be officially updated once finalized.
          </span>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#581825]">
              Artisanal Philosophy
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#252522] leading-tight">
              Honoring Heritage Recipes with Contemporary Patisserie Artistry
            </h2>
            <div className="h-0.5 w-16 bg-[#C4A46B]" />

            <p className="text-base text-[#252522]/80 font-light leading-relaxed">
              {urbanSweetsData.overview.paragraph1}
            </p>
            <p className="text-base text-[#252522]/80 font-light leading-relaxed">
              {urbanSweetsData.overview.paragraph2}
            </p>

            <div className="pt-2">
              <Link
                href="/urban-sweets/sweets-and-bakery"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#581825] hover:text-[#3D0F18] transition-colors border-b border-[#581825] pb-1"
              >
                <span>View Product Collections</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="relative aspect-[3/4] rounded-sm overflow-hidden shadow-xl">
              <Image
                src="/images/urban-sweets/mithai.jpg"
                alt="Artisan Sweets"
                fill
                sizes="25vw"
                className="object-cover"
              />
            </div>
            <div className="space-y-4 pt-8">
              <div className="relative aspect-square rounded-sm overflow-hidden shadow-xl">
                <Image
                  src="/images/urban-sweets/bakery.jpg"
                  alt="Gourmet Bakery Studio"
                  fill
                  sizes="25vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-sm overflow-hidden shadow-xl">
                <Image
                  src="/images/urban-sweets/gifting.jpg"
                  alt="Luxury Gift Hampers"
                  fill
                  sizes="25vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Four Distinct Offerings */}
      <section className="py-24 bg-[#581825] text-[#FAF6F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Offerings"
            title="Four Expressions of Craft"
            description="From daily morning baked viennoiserie to royal wedding hamper collections and intimate banquet dinners."
            theme="maroon"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {urbanSweetsData.offerings.map((offering) => (
              <div
                key={offering.id}
                className="bg-[#3D0F18] border border-[#DFCA9B]/30 rounded-sm overflow-hidden shadow-lg flex flex-col justify-between group"
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
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#DFCA9B] hover:text-white transition-colors"
                    >
                      <span>Explore {offering.title}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
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
        <div className="bg-white border border-[#E7DFD1] rounded-sm overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto">
            <Image
              src="/images/urban-sweets/banquet.jpg"
              alt="Urban Sweets Celebration Banquet"
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover"
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
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#581825] text-white rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-[#3D0F18] transition-all shadow-md"
              >
                <span>View Banquet Venue Details</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#DFCA9B]" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Online Enquiry Form */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <EnquiryForm
          title="Urban Sweets & Bakers Enquiries"
          subtitle="Place bulk gifting enquiries, custom celebration cake requests, or reserve our private banquet hall."
          defaultBusiness="urban-sweets"
        />
      </section>

      <Footer />
    </div>
  );
}
