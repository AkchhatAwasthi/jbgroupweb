import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ArrowRight, ShieldCheck, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionHeading from "@/components/SectionHeading";
import EnquiryForm from "@/components/EnquiryForm";
import { skyhiltonData } from "@/data/skyhiltonData";

export const metadata = {
  title: "Contact & Location | JB Skyhilton LDA Colony, Lucknow",
  description:
    "Contact JB Skyhilton in Sector B, Bargawan, LDA Colony, Lucknow – 226012. Room Bookings: 7080888807, Party Bookings: 7080888838, Email: reservations@skyhilton.co.in.",
};

export default function SkyhiltonContactPage() {
  const { contact, overview } = skyhiltonData;

  return (
    <div className="min-h-screen bg-[#F7F3EB] text-[#252522]">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#252522] text-[#F7F3EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "JB Skyhilton", href: "/skyhilton" },
              { label: "Contact & Location" },
            ]}
            theme="charcoal"
          />

          <div className="max-w-3xl mt-6 space-y-4">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#C4A46B]">
              JB Skyhilton Reservations
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F7F3EB] leading-tight">
              Get in Touch with Our Team
            </h1>
            <p className="text-base sm:text-lg text-[#E7DFD1]/80 font-light leading-relaxed">
              We look forward to welcoming you to Sector B, Bargawan, LDA Colony, Lucknow. Call directly for immediate room availability or party arrangements.
            </p>
          </div>
        </div>
      </section>

      {/* Verified Contact Directory */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Details Card */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white border border-[#E7DFD1] p-8 rounded-sm shadow-md space-y-6">
              <h3 className="font-serif text-2xl font-bold text-[#252522] border-b border-black/10 pb-4">
                Verified Contact Information
              </h3>

              <div className="space-y-5 text-sm text-[#252522]">
                {/* Room Bookings */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#FAF7F2] border border-[#C4A46B]/40 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-[#C4A46B]" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#73765B] block">
                      Room Bookings (Direct)
                    </span>
                    <a
                      href={`tel:${contact.roomBookings}`}
                      className="text-lg font-bold text-[#252522] hover:text-[#C4A46B] transition-colors"
                    >
                      {contact.roomBookings}
                    </a>
                  </div>
                </div>

                {/* Party Bookings */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#FAF7F2] border border-[#C4A46B]/40 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-[#C4A46B]" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#73765B] block">
                      Party & Banquet Bookings
                    </span>
                    <a
                      href={`tel:${contact.partyBookings}`}
                      className="text-lg font-bold text-[#252522] hover:text-[#C4A46B] transition-colors"
                    >
                      {contact.partyBookings}
                    </a>
                  </div>
                </div>

                {/* Reservations Email */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#FAF7F2] border border-[#C4A46B]/40 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-[#C4A46B]" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#73765B] block">
                      Official Reservations Email
                    </span>
                    <a
                      href={`mailto:${contact.email}`}
                      className="font-medium text-[#252522] hover:text-[#C4A46B] transition-colors underline"
                    >
                      {contact.email}
                    </a>
                  </div>
                </div>

                {/* Property Address */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#FAF7F2] border border-[#C4A46B]/40 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-[#C4A46B]" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#73765B] block">
                      Property Address
                    </span>
                    <p className="font-light leading-relaxed">
                      {contact.address}
                    </p>
                    <a
                      href={`https://maps.google.com/?q=${contact.googleMapsQuery}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C4A46B] hover:text-[#9F804A] mt-2"
                    >
                      <span>Open in Google Maps</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Timings */}
                <div className="flex items-start gap-3 pt-4 border-t border-black/10">
                  <div className="w-9 h-9 rounded-full bg-[#FAF7F2] border border-[#C4A46B]/40 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4 text-[#C4A46B]" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#73765B] block">
                      Check-in & Check-out Policy
                    </span>
                    <p className="text-xs text-[#252522]">
                      Check-in: {overview.hotelPolicies.checkIn} <br />
                      Check-out: {overview.hotelPolicies.checkOut}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Callout */}
            <div className="p-6 bg-[#25D366]/10 border border-[#25D366]/40 rounded-sm space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1e964b] block">
                Instant Messaging Concierge
              </span>
              <p className="text-xs text-[#252522]/80 leading-relaxed">
                Connect directly with our on-duty reservations executive on WhatsApp for real-time room availability, photographs, and banquet quotes.
              </p>
              <div className="pt-2">
                <a
                  href={`https://wa.me/917080888807?text=${encodeURIComponent(
                    "Hello JB Skyhilton Concierge, I would like to enquire about room bookings and dining."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] text-white rounded text-xs font-bold uppercase tracking-wider hover:bg-[#20ba59] transition-colors"
                >
                  <span>Chat on WhatsApp (+91 7080888807)</span>
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <EnquiryForm
              title="Skyhilton Enquiry & Reservations"
              subtitle="Submit your requirements below. Our team handles requests for room stays, dining tables, party hall bookings, or corporate event quotes."
              defaultBusiness="skyhilton"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
