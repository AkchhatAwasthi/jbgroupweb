import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, ArrowRight, ShieldAlert, Check, Gift, Cake, Coffee, Info } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionHeading from "@/components/SectionHeading";
import EnquiryForm from "@/components/EnquiryForm";
import { urbanSweetsData } from "@/data/urbanSweetsData";

export const metadata = {
  title: "Restaurant Dining, Artisanal Sweets & Bakery | Urban Sweets & Bakers",
  description:
    "Explore the culinary catalogue of Urban Sweets & Bakers: Multi-cuisine restaurant dining, authentic Lucknowi chaat, handcrafted pure desi ghee mithai, and festive gift hampers.",
};

export default function SweetsAndBakeryPage() {
  return (
    <div className="min-h-screen bg-[#FAF6F0] text-[#252522]">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[52vh] sm:min-h-[60vh] flex flex-col justify-between overflow-hidden bg-[#2D0A11] text-[#FAF6F0]">
        {/* Full Visibility Hero Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/urban-sweets/sweet_shop_counter.png"
            alt="Urban Sweets Counter & Culinary Studio"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Subtle Vignettes - Center is 100% Radiant */}
          <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-black/70 via-black/20 to-transparent pointer-events-none" />
          <div className="absolute bottom-0 inset-x-0 h-64 bg-gradient-to-t from-[#2D0A11] via-[#2D0A11]/75 to-transparent pointer-events-none" />
        </div>

        {/* Top: Breadcrumb */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32">
          <Breadcrumbs
            items={[
              { label: "Urban Sweets & Bakers", href: "/urban-sweets" },
              { label: "Restaurant, Sweets & Bakery" },
            ]}
            theme="maroon"
          />
        </div>

        {/* Bottom: Minimal Punchy Title */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-8 sm:pb-10">
          <div className="space-y-2 max-w-2xl">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#DFCA9B] block">
              Culinary &amp; Artisanal Atelier • Lucknow
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#FAF6F0] leading-tight drop-shadow-md">
              Restaurant Dining, Artisanal Sweets &amp; Bakery
            </h1>
          </div>
        </div>
      </section>

      {/* Content Integrity / Placeholder Notice */}
      <section className="bg-amber-50 border-b border-amber-200 py-4 px-4 text-xs text-amber-900">
        <div className="max-w-5xl mx-auto flex items-start sm:items-center gap-3">
          <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5 sm:mt-0" />
          <p className="leading-relaxed">
            <strong>Administrator Catalog Placeholder:</strong> The product items and gift concepts listed below represent the editorial design framework. Actual seasonal menus, pricing, and live inventory will be dynamically connected once officially published by management.
          </p>
        </div>
      </section>

      {/* Categories Showcase */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-24">
        {urbanSweetsData.categories.map((category, catIdx) => (
          <div
            key={category.id}
            id={category.id}
            className="scroll-mt-28 space-y-10"
          >
            {/* Category Header */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-b border-black/10 pb-8">
              <div className="lg:col-span-7 space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#581825]">
                  Collection 0{catIdx + 1}
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#252522]">
                  {category.title}
                </h2>
                <p className="text-xs font-semibold uppercase tracking-widest text-[#73765B]">
                  {category.subtitle}
                </p>
                <p className="text-sm text-[#252522]/80 font-light leading-relaxed max-w-2xl">
                  {category.description}
                </p>
              </div>

              <div className="lg:col-span-5 relative aspect-[16/9] rounded-sm overflow-hidden shadow-lg">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Items Grid with Placeholder tags */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {category.sampleItems.map((item, itemIdx) => (
                <div
                  key={itemIdx}
                  className="bg-white border border-[#E7DFD1] p-6 rounded-sm shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-[#FAF6F0] text-[#581825] border border-[#581825]/20 rounded-sm">
                        {item.tag}
                      </span>
                      {category.isPlaceholderData && (
                        <span className="text-[9px] text-[#73765B] uppercase font-mono">
                          [Catalog Sample]
                        </span>
                      )}
                    </div>
                    <h3 className="font-serif text-lg font-bold text-[#252522]">
                      {item.name}
                    </h3>
                    <p className="text-xs text-[#73765B] font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-black/5 flex items-center justify-between">
                    <span className="text-[11px] text-[#73765B]">
                      {item.isCustomizable ? "Custom Orders Available" : "Daily Fresh Batch"}
                    </span>
                    <a
                      href="#enquire"
                      className="text-xs font-bold text-[#581825] hover:text-[#3D0F18] inline-flex items-center gap-1"
                    >
                      <span>Enquire</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Bespoke Gifting & Bulk Orders Callout */}
      <section className="py-20 bg-[#581825] text-[#FAF6F0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#DFCA9B]">
            Corporate & Wedding Gifting
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold">
            Tailored Hampers for Dignitaries, Guests & Celebrations
          </h2>
          <p className="text-sm sm:text-base text-[#E7DFD1]/80 max-w-2xl mx-auto font-light leading-relaxed">
            Personalize your gifting with royal maroon velvet boxes, bespoke engraved monograms, customized assortment selections, and coordinated delivery.
          </p>
          {/* Luxury Gifting Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 text-left">
            <div className="bg-[#3D0F18] border border-[#DFCA9B]/30 rounded-sm overflow-hidden shadow-xl group">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src="/images/urban-sweets/luxury_gift_box_1.png"
                  alt="Royal Velvet Heritage Box"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#DFCA9B]">Wedding &amp; VIP Special</span>
                <h3 className="font-serif text-lg font-bold text-white mt-1">The Royal Heritage Velvet Box</h3>
                <p className="text-xs text-[#E7DFD1]/80 mt-1 font-light leading-relaxed">
                  Lined in maroon velvet with gold foil monograms, housing handcrafted artisanal sweets and exotic nuts.
                </p>
              </div>
            </div>

            <div className="bg-[#3D0F18] border border-[#DFCA9B]/30 rounded-sm overflow-hidden shadow-xl group">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src="/images/urban-sweets/luxury_gift_box_2.png"
                  alt="Festive Jewel Drawer Hamper"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#DFCA9B]">Festive &amp; Corporate</span>
                <h3 className="font-serif text-lg font-bold text-white mt-1">The Festive Jewel Drawer Trunk</h3>
                <p className="text-xs text-[#E7DFD1]/80 mt-1 font-light leading-relaxed">
                  Structured multi-tiered presentation with dry fruit confections, premium dates, and gourmet cookies.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <a
              href="#enquire"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#DFCA9B] text-[#3D0F18] rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-white transition-all shadow-xl"
            >
              <span>Request Gifting Catalogue & Proposal</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section id="enquire" className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <EnquiryForm
          initialType="general"
          title="Place a Confectionery or Gifting Enquiry"
          subtitle="Our culinary concierge will get back to you with custom hamper options, bulk order pricing, and sample delivery options."
          defaultBusiness="urban-sweets"
        />
      </section>

      <Footer />
    </div>
  );
}
