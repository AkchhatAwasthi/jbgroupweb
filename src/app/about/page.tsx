import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Sparkles, Building, Award, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionHeading from "@/components/SectionHeading";
import { groupOverview } from "@/data/groupData";

export const metadata = {
  title: "About JB Group | Hospitality, Thoughtfully Elevated",
  description:
    "Discover the story, philosophy, and hospitality legacy behind JB Group Lucknow—uniting JB Skyhilton, Urban Sweets & Bakers, and JB Innovation.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F7F3EB] text-[#252522]">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[52vh] sm:min-h-[60vh] flex flex-col justify-between overflow-hidden bg-[#1F2119] text-[#F7F3EB]">
        {/* Full Visibility Hero Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/group/hero.jpg"
            alt="JB Group Hospitality Architecture"
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
            items={[{ label: "About JB Group" }]}
            theme="charcoal"
          />
        </div>

        {/* Bottom: Minimal Punchy Title */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-8 sm:pb-10">
          <div className="space-y-2 max-w-2xl">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#DFCA9B] block">
              The Parent Brand Story • JB Group
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#F7F3EB] leading-tight drop-shadow-md">
              Hospitality Rooted in Craft, Warmth &amp; Precision
            </h1>
          </div>
        </div>
      </section>

      {/* Main Story Narrative */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#C4A46B]">
              Authentic Heritage
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#252522] leading-tight">
              A Culture of Genuine Hospitality and Celebratory Excellence
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
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="relative aspect-[3/4] rounded-sm overflow-hidden shadow-xl">
              <Image
                src="/images/skyhilton/rooftop_terrace.png"
                alt="JB Skyhilton Boutique Hotel"
                fill
                sizes="25vw"
                className="object-cover"
              />
            </div>
            <div className="space-y-4 pt-8">
              <div className="relative aspect-square rounded-sm overflow-hidden shadow-xl">
                <Image
                  src="/images/urban-sweets/sweet_shop_interior_display.png"
                  alt="Urban Sweets Artisanal Confectionery"
                  fill
                  sizes="25vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-sm overflow-hidden shadow-xl">
                <Image
                  src="/images/innovation/crown_hall.png"
                  alt="Crown Hall Banquet"
                  fill
                  sizes="25vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Four Pillars */}
      <section className="py-20 bg-[#FAF7F2] border-y border-[#E7DFD1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Commitments"
            title="The Four Pillars of JB Group"
            description="Our service culture is built on steadfast operational standards across hotel stays, banquets, and culinary production."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {groupOverview.pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#E7DFD1] p-6 sm:p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow space-y-3"
              >
                <span className="font-serif text-3xl font-bold text-[#C4A46B]">
                  0{idx + 1}
                </span>
                <h3 className="font-serif text-xl font-bold text-[#252522]">
                  {pillar.title}
                </h3>
                <p className="text-xs text-[#73765B] font-light leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our 3 Businesses Showcase */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Group Network"
          title="The Three JB Businesses"
          description="Each property is engineered with dedicated operational staff, chefs, and event planners to ensure bespoke attention."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {groupOverview.businesses.map((biz) => (
            <div
              key={biz.id}
              className="bg-white border border-[#E7DFD1] rounded-sm overflow-hidden shadow-md flex flex-col justify-between group"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={biz.heroImage}
                  alt={biz.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4">
                  <span className="text-[11px] font-bold text-[#DFCA9B] uppercase tracking-wider block">
                    {biz.brandTag}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-white">
                    {biz.name}
                  </h3>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <p className="text-xs text-[#73765B] font-light leading-relaxed">
                  {biz.description}
                </p>

                <div className="space-y-1 pt-2 border-t border-black/5 text-xs text-[#252522]">
                  {biz.features.slice(0, 3).map((feat, i) => (
                    <div key={i} className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-[#C4A46B] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <Link
                    href={biz.route}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#252522] hover:text-[#C4A46B] transition-colors"
                  >
                    <span>Explore Business</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
