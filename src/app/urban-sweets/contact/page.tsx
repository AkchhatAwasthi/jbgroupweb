import React from "react";
import Link from "next/link";
import { Mail, MapPin, Clock, ArrowRight, ShieldAlert, Sparkles, Building2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionHeading from "@/components/SectionHeading";
import EnquiryForm from "@/components/EnquiryForm";
import { urbanSweetsData } from "@/data/urbanSweetsData";

export const metadata = {
  title: "Contact & Enquiries | Urban Sweets & Bakers Lucknow",
  description:
    "Connect with Urban Sweets & Bakers by JB Group for custom gifting hampers, confectionery orders, and private banquet reservations in Lucknow.",
};

export default function UrbanSweetsContactPage() {
  return (
    <div className="min-h-screen bg-[#FAF6F0] text-[#252522]">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#3D0F18] text-[#FAF6F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Urban Sweets & Bakers", href: "/urban-sweets" },
              { label: "Contact & Enquiries" },
            ]}
            theme="maroon"
          />

          <div className="max-w-3xl mt-6 space-y-4">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#DFCA9B]">
              Artisanal Concierge
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FAF6F0] leading-tight">
              Connect with Our Culinary Team
            </h1>
            <p className="text-base sm:text-lg text-[#E7DFD1]/80 font-light leading-relaxed">
              We welcome your enquiries for bespoke wedding sweet boxes, corporate festive gifting trunks, daily bakery curations, and private banquet celebrations.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Official Notice & Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white border border-[#E7DFD1] p-8 rounded-sm shadow-md space-y-6">
              <h3 className="font-serif text-2xl font-bold text-[#252522] border-b border-black/10 pb-4">
                Atelier Communications
              </h3>

              <div className="space-y-4 text-xs text-[#252522]/80 leading-relaxed">
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#581825] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold uppercase tracking-wider text-[#73765B] block">
                      Enquiries Email
                    </span>
                    <a
                      href="mailto:contact@jbgroup.co.in"
                      className="text-sm font-semibold text-[#581825] hover:underline"
                    >
                      contact@jbgroup.co.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#581825] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold uppercase tracking-wider text-[#73765B] block">
                      Location
                    </span>
                    <span>Lucknow, Uttar Pradesh, India</span>
                  </div>
                </div>

                <div className="p-4 bg-[#FAF6F0] border border-[#581825]/20 rounded text-xs text-[#581825] leading-relaxed">
                  <div className="flex items-center gap-1.5 font-bold mb-1">
                    <ShieldAlert className="w-4 h-4 text-[#581825]" />
                    <span>Store Publication Notice</span>
                  </div>
                  {urbanSweetsData.contact.notice}
                </div>
              </div>

              <div className="pt-4 border-t border-black/10">
                <span className="text-xs text-[#73765B] block mb-2 font-light">
                  Need hotel stays or grand event lawns instead?
                </span>
                <div className="flex flex-col gap-2 text-xs">
                  <Link
                    href="/skyhilton/contact"
                    className="text-[#581825] hover:text-[#3D0F18] font-bold inline-flex items-center gap-1"
                  >
                    <span>JB Skyhilton Concierge</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                  <Link
                    href="/jb-innovation/contact"
                    className="text-[#73765B] hover:text-[#252522] font-bold inline-flex items-center gap-1"
                  >
                    <span>JB Innovation Destination Concierge</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7">
            <EnquiryForm
              title="Send an Enquiry to Urban Sweets & Bakers"
              subtitle="Fill in your details for custom wedding sweet platters, festive gift hamper catalog requests, or banquet reservations."
              defaultBusiness="urban-sweets"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
