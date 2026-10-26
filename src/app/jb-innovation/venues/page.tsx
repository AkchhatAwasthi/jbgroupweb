import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Users, Sparkles, ArrowRight, Check, MapPin, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionHeading from "@/components/SectionHeading";
import VenueCard from "@/components/VenueCard";
import EnquiryForm from "@/components/EnquiryForm";
import { innovationData } from "@/data/innovationData";

export const metadata = {
  title: "Banquets & Lawns | JB Innovation Lucknow",
  description:
    "Explore grand event spaces at JB Innovation: Crown Hall, Kanishk Hall, expansive green lawns, and open rooftop terrace for weddings and celebrations in Lucknow.",
};

export default function InnovationVenuesPage() {
  return (
    <div className="min-h-screen bg-[#F7F3EB] text-[#252522]">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-[#2D3025] text-[#F7F3EB] overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <Image
            src="/images/innovation/crown_hall.png"
            alt="JB Innovation Crown Hall"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "JB Innovation", href: "/jb-innovation" },
              { label: "Venues & Lawns" },
            ]}
            theme="charcoal"
          />

          <div className="max-w-3xl mt-6 space-y-4">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#C4A46B]">
              Landmark Event Spaces
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F7F3EB] leading-tight">
              Grand Halls, Verdant Lawns & Open Skies
            </h1>
            <p className="text-base sm:text-lg text-[#E7DFD1]/80 font-light leading-relaxed">
              Thoughtfully designed venues tailored for weddings, grand celebrations, corporate gatherings, and unforgettable occasions.
            </p>
          </div>
        </div>
      </section>

      {/* Individual Venues Showcase */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-24">
        {/* Venue 1: Crown Hall */}
        <div id="crown-hall" className="scroll-mt-28 space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 relative aspect-[16/10] rounded-sm overflow-hidden shadow-2xl">
              <Image
                src="/images/innovation/crown_hall.png"
                alt="JB Innovation Crown Hall Banquet"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="text-xs font-semibold px-3 py-1 bg-[#252522]/90 border border-[#C4A46B]/40 text-[#DFCA9B] rounded-sm">
                  Grand Indoor Banquet Hall
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-5">
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#73765B]">
                Ballroom 01
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#252522]">
                Crown Hall
              </h2>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#73765B]">
                Grandeur, Golden Illuminations & Regal Celebrations
              </p>
              <div className="h-0.5 w-16 bg-[#C4A46B]" />

              <p className="text-sm sm:text-base text-[#252522]/80 font-light leading-relaxed">
                The Crown Hall exudes grandeur with its well-lit interiors, where golden lights reflect off polished floors and rich drapery, while ornate chandeliers sparkle against intricately designed ceilings. A lavish buffet stretches elegantly along one side, featuring gleaming silverware, vibrant floral arrangements, and gourmet delicacies.
              </p>

              <div className="space-y-1.5 text-xs text-[#252522]/80 border-t border-black/10 pt-3">
                <span className="font-bold uppercase tracking-wider text-[#73765B] block mb-2">
                  Suitable Celebrations
                </span>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 bg-[#FAF7F2] border border-[#E7DFD1] rounded-sm">
                    Grand Wedding Receptions
                  </span>
                  <span className="px-2.5 py-1 bg-[#FAF7F2] border border-[#E7DFD1] rounded-sm">
                    Ring Ceremonies & Engagements
                  </span>
                  <span className="px-2.5 py-1 bg-[#FAF7F2] border border-[#E7DFD1] rounded-sm">
                    Corporate Galas
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="#enquire"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#252522] text-[#F7F3EB] rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-[#3D3D39] transition-all"
                >
                  <span>Enquire Crown Hall</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C4A46B]" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Venue 2: Kanishk Hall */}
        <div id="kanishk-hall" className="scroll-mt-28 space-y-8 border-t border-black/10 pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-5 order-2 lg:order-1">
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#73765B]">
                Ballroom 02
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#252522]">
                Kanishk Hall
              </h2>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#73765B]">
                Expansive Elegance & Mirrored Sophistication
              </p>
              <div className="h-0.5 w-16 bg-[#C4A46B]" />

              <p className="text-sm sm:text-base text-[#252522]/80 font-light leading-relaxed">
                The Kanishk Hall is expansive and opulent, illuminated by warm, well-lit interiors highlighting its grandeur. Sparkling chandeliers hang from intricately designed ceilings, while mirrored walls reflect the glow, enhancing the sense of space and elegance. Luxurious marble flooring stretches across the hall, complemented by a stylish bar setup for premium cocktail service.
              </p>

              <div className="space-y-1.5 text-xs text-[#252522]/80 border-t border-black/10 pt-3">
                <span className="font-bold uppercase tracking-wider text-[#73765B] block mb-2">
                  Suitable Celebrations
                </span>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 bg-[#FAF7F2] border border-[#E7DFD1] rounded-sm">
                    Weddings & Sangeet Evenings
                  </span>
                  <span className="px-2.5 py-1 bg-[#FAF7F2] border border-[#E7DFD1] rounded-sm">
                    Cocktail Dinners & Bar Mixers
                  </span>
                  <span className="px-2.5 py-1 bg-[#FAF7F2] border border-[#E7DFD1] rounded-sm">
                    Corporate Award Nights
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="#enquire"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#252522] text-[#F7F3EB] rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-[#3D3D39] transition-all"
                >
                  <span>Enquire Kanishk Hall</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C4A46B]" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 relative aspect-[16/10] rounded-sm overflow-hidden shadow-2xl order-1 lg:order-2">
              <Image
                src="/images/innovation/kanishk_hall.png"
                alt="JB Innovation Kanishk Hall with Bar"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="text-xs font-semibold px-3 py-1 bg-[#252522]/90 border border-[#C4A46B]/40 text-[#DFCA9B] rounded-sm">
                  Ballroom with Marble Flooring & Stylish Bar
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Venue 3: Lawns & Banquets */}
        <div id="lawns" className="scroll-mt-28 space-y-8 border-t border-black/10 pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 relative aspect-[16/10] rounded-sm overflow-hidden shadow-2xl">
              <Image
                src="/images/innovation/lawns_banquets.png"
                alt="JB Innovation Lawns and Banquets"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="text-xs font-semibold px-3 py-1 bg-[#252522]/90 border border-[#C4A46B]/40 text-[#DFCA9B] rounded-sm">
                  Expansive Landscaped Green Lawns
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-5">
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#73765B]">
                Outdoor & Indoor Synergy
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#252522]">
                Lawns & Banquets
              </h2>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#73765B]">
                Grandeur and Serenity in Nature&apos;s Embrace
              </p>
              <div className="h-0.5 w-16 bg-[#C4A46B]" />

              <p className="text-sm sm:text-base text-[#252522]/80 font-light leading-relaxed">
                Beyond indoor accommodation, we pride ourselves on offering an environment celebrating both grandeur and serenity. The lush lawns invite you to unwind in nature&apos;s embrace, while the adjoining banquet halls stand ready to host your most cherished occasions with elegance and flair.
              </p>

              <div className="space-y-1.5 text-xs text-[#252522]/80 border-t border-black/10 pt-3">
                <span className="font-bold uppercase tracking-wider text-[#73765B] block mb-2">
                  Suitable Celebrations
                </span>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 bg-[#FAF7F2] border border-[#E7DFD1] rounded-sm">
                    Open-Air Wedding Mandaps (Pheras)
                  </span>
                  <span className="px-2.5 py-1 bg-[#FAF7F2] border border-[#E7DFD1] rounded-sm">
                    Grand Evening Receptions
                  </span>
                  <span className="px-2.5 py-1 bg-[#FAF7F2] border border-[#E7DFD1] rounded-sm">
                    Cultural Melas & Exhibitions
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="#enquire"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#73765B] text-white rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-[#5C5F47] transition-all"
                >
                  <span>Enquire Lawns & Banquets</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#DFCA9B]" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Venue 4: Open Terrace */}
        <div id="terrace" className="scroll-mt-28 space-y-8 border-t border-black/10 pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-5 order-2 lg:order-1">
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#73765B]">
                Rooftop Venue
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#252522]">
                Open Terrace
              </h2>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#73765B]">
                Bespoke Pre-Wedding Ceremonies Under Open Skies
              </p>
              <div className="h-0.5 w-16 bg-[#C4A46B]" />

              <p className="text-sm sm:text-base text-[#252522]/80 font-light leading-relaxed">
                Elevate your celebrations at our premier open-air rooftop terrace. Whether planning a vibrant Mehndi, a joyful Haldi ceremony, an energetic Sangeet, or an intimate get-together, our terrace provides the perfect backdrop of open skies and panoramic views. Our team offers a completely customizable canvas (bohemian florals, traditional ethnic decor, or modern minimalist aesthetics).
              </p>

              <div className="space-y-1.5 text-xs text-[#252522]/80 border-t border-black/10 pt-3">
                <span className="font-bold uppercase tracking-wider text-[#73765B] block mb-2">
                  Suitable Celebrations
                </span>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 bg-[#FAF7F2] border border-[#E7DFD1] rounded-sm">
                    Mehndi & Haldi Ceremonies
                  </span>
                  <span className="px-2.5 py-1 bg-[#FAF7F2] border border-[#E7DFD1] rounded-sm">
                    Sangeet & Musical Evenings
                  </span>
                  <span className="px-2.5 py-1 bg-[#FAF7F2] border border-[#E7DFD1] rounded-sm">
                    Sundowner Gatherings
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="#enquire"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#252522] text-[#F7F3EB] rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-[#3D3D39] transition-all"
                >
                  <span>Enquire Open Terrace</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C4A46B]" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 relative aspect-[16/10] rounded-sm overflow-hidden shadow-2xl order-1 lg:order-2">
              <Image
                src="/images/innovation/open_terrace.png"
                alt="JB Innovation Open Terrace Rooftop"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="text-xs font-semibold px-3 py-1 bg-[#252522]/90 border border-[#C4A46B]/40 text-[#DFCA9B] rounded-sm">
                  Open-Air Rooftop Terrace
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section id="enquire" className="py-24 bg-[#FAF7F2] border-t border-[#E7DFD1] px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <EnquiryForm
          initialType="banquet"
          title="Reserve a Venue at JB Innovation"
          subtitle="Direct enquiry for Crown Hall, Kanishk Hall, celebration lawns, or open terrace. Call our coordinators directly at 7080888803 | 7080888847."
          defaultBusiness="innovation"
        />
      </section>

      <Footer />
    </div>
  );
}
