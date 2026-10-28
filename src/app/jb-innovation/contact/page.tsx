import React from "react";
import Image from "next/image";
import { Phone, Mail, MapPin, ExternalLink, Compass, CheckCircle2 } from "lucide-react";
import { InstagramIcon } from "@/components/Icons";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionHeading from "@/components/SectionHeading";
import EnquiryForm from "@/components/EnquiryForm";
import { innovationData } from "@/data/innovationData";

export const metadata = {
  title: "Contact & Route | JB Innovation Lucknow",
  description:
    "Contact JB Innovation wedding destination: 7080888803 | 7080888847. Verified proximity to Chaudhary Charan Singh International Airport (5.3 km), Raibareli Rd (3.5 km), Ashiyana (3 km), Krishnanagar Metro (6 km).",
};

export default function InnovationContactPage() {
  const { contact, connectivity } = innovationData;

  return (
    <div className="min-h-screen bg-[#F7F3EB] text-[#252522]">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#2D3025] text-[#F7F3EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-fadeIn">
            <Breadcrumbs
              items={[
                { label: "JB Innovation", href: "/jb-innovation" },
                { label: "Contact & Location" },
              ]}
              theme="charcoal"
            />
          </div>

          <div className="max-w-3xl mt-6 space-y-4 animate-fadeInUp">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#C4A46B]">
              Wedding & Event Desks
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F7F3EB] leading-tight">
              Connect with JB Innovation
            </h1>
            <p className="text-base sm:text-lg text-[#E7DFD1]/80 font-light leading-relaxed">
              Plan your wedding walkthrough, check dates for Crown Hall and our lush lawns, or connect with our event concierges directly.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Verified Details & Map */}
          <div className="lg:col-span-5 space-y-8 reveal-left">
            <div className="bg-white border border-[#E7DFD1] p-8 rounded-sm shadow-md space-y-6 hover-lift transition-all duration-300 hover:border-[#C4A46B]">
              <h3 className="font-serif text-2xl font-bold text-[#252522] border-b border-black/10 pb-4">
                Verified Contact Details
              </h3>

              <div className="space-y-5 text-sm text-[#252522]">
                {/* Click-to-call Telephones */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#FAF7F2] border border-[#73765B]/40 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-[#73765B]" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#73765B] block">
                      Direct Event Helplines
                    </span>
                    <div className="flex flex-col sm:flex-row sm:gap-3 text-lg font-bold text-[#252522] mt-0.5">
                      <a
                        href={`tel:${contact.phones[0]}`}
                        className="hover:text-[#73765B] transition-colors"
                      >
                        {contact.phones[0]}
                      </a>
                      <span className="hidden sm:inline text-black/20">|</span>
                      <a
                        href={`tel:${contact.phones[1]}`}
                        className="hover:text-[#73765B] transition-colors"
                      >
                        {contact.phones[1]}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#FAF7F2] border border-[#73765B]/40 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-[#73765B]" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#73765B] block">
                      Direct Email Enquiries
                    </span>
                    <a
                      href={`mailto:${contact.email}`}
                      className="font-medium text-[#252522] hover:text-[#73765B] transition-colors underline"
                    >
                      {contact.email}
                    </a>
                  </div>
                </div>

                {/* Social Community */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#FAF7F2] border border-[#73765B]/40 flex items-center justify-center shrink-0">
                    <InstagramIcon className="w-4 h-4 text-[#73765B]" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#73765B] block">
                      Social Community
                    </span>
                    <span className="text-xs text-[#252522]">
                      Join our Instagram Family for real-time celebration reels & decor setups
                    </span>
                  </div>
                </div>

                {/* Proximity / Location Data */}
                <div className="pt-4 border-t border-black/10 space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#73765B] block">
                    Verified Proximity Distances
                  </span>
                  <div className="space-y-2 text-xs text-[#252522]/80">
                    {connectivity.map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between py-1 border-b border-black/5">
                        <span className="font-medium text-[#252522]">{item.landmark}</span>
                        <span className="font-mono font-bold text-[#73765B] bg-[#FAF7F2] px-2 py-0.5 rounded">
                          {item.distance}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Authentic Map Graphic from Brochure */}
            <div className="bg-white border border-[#E7DFD1] p-4 rounded-sm shadow-md space-y-2 hover-lift transition-all duration-300">
              <span className="text-xs font-bold uppercase tracking-wider text-[#73765B] block px-2 pt-1">
                Property Route Map (from Brochure)
              </span>
              <div className="relative aspect-[16/10] rounded overflow-hidden border border-[#E7DFD1] group">
                <Image
                  src="/images/innovation/location_map.png"
                  alt="JB Innovation Map & Distances from brochure"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>

            {/* WhatsApp Direct Chat */}
            <div className="p-6 bg-[#25D366]/10 border border-[#25D366]/40 rounded-sm space-y-2 hover-lift transition-all duration-300">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1e964b] block">
                Instant WhatsApp Concierge
              </span>
              <p className="text-xs text-[#252522]/80 leading-relaxed">
                Connect directly with our event director on WhatsApp to receive real wedding photos, floor plans, and date availability.
              </p>
              <div className="pt-2">
                <a
                  href={`https://wa.me/917080888803?text=${encodeURIComponent(
                    "Hello JB Innovation Concierge, I would like to enquire about wedding venues and lawns."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-shine inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] text-white rounded text-xs font-bold uppercase tracking-wider hover:bg-[#20ba59] transition-colors shadow-sm"
                >
                  <span>Chat on WhatsApp (+91 7080888803)</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Enquiry Form */}
          <div className="lg:col-span-7 reveal-right">
            <EnquiryForm
              title="Plan Your Celebration at JB Innovation"
              subtitle="Submit your requirements below for wedding dates, lawn setup quotes, room accommodation blocks, or Carnations dining reservations."
              defaultBusiness="innovation"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
