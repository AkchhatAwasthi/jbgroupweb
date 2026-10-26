import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ArrowRight, ShieldCheck } from "lucide-react";
import { InstagramIcon } from "@/components/Icons";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionHeading from "@/components/SectionHeading";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata = {
  title: "Contact Concierge | JB Group Lucknow",
  description:
    "Direct contact details, telephone numbers, reservations desks, and verified location maps for JB Skyhilton, JB Innovation, and Urban Sweets & Bakers in Lucknow.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#F7F3EB] text-[#252522]">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#252522] text-[#F7F3EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Contact & Reservations" }]} theme="charcoal" />

          <div className="max-w-3xl mt-6 space-y-4">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#C4A46B]">
              Hospitality Concierge
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F7F3EB] leading-tight">
              Connect with Our Reservation Teams
            </h1>
            <p className="text-base sm:text-lg text-[#E7DFD1]/80 font-light leading-relaxed">
              We look forward to welcoming you. Access verified telephone booking numbers, direct property emails, and location guides across Lucknow below.
            </p>
          </div>
        </div>
      </section>

      {/* Verified Contact Directory */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Verified Directories"
          title="Direct Property Desks"
          description="Speak directly with on-site duty managers, party reservationists, and event planners."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* JB Skyhilton */}
          <div className="bg-white border border-[#E7DFD1] p-8 rounded-sm shadow-md flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-black/10 pb-4">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#C4A46B]">
                    Hotel & Banquets
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#252522]">
                    JB Skyhilton
                  </h3>
                </div>
                <span className="w-2.5 h-2.5 rounded-full bg-[#C4A46B]" />
              </div>

              <div className="space-y-3 text-xs text-[#252522]/80">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#C4A46B] shrink-0 mt-0.5" />
                  <span>
                    Sector B, Bargawan, LDA Colony, Lucknow – 226012, Uttar Pradesh
                  </span>
                </div>

                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#C4A46B] shrink-0" />
                  <div>
                    <span className="block font-semibold">
                      Room Bookings:{" "}
                      <a href="tel:7080888807" className="hover:text-[#C4A46B] underline">
                        7080888807
                      </a>
                    </span>
                    <span className="block font-semibold mt-1">
                      Party Bookings:{" "}
                      <a href="tel:7080888838" className="hover:text-[#C4A46B] underline">
                        7080888838
                      </a>
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#C4A46B] shrink-0" />
                  <a
                    href="mailto:reservations@skyhilton.co.in"
                    className="hover:text-[#C4A46B] underline"
                  >
                    reservations@skyhilton.co.in
                  </a>
                </div>

                <div className="flex items-center gap-2.5 text-[#73765B] pt-2 border-t border-black/5">
                  <Clock className="w-4 h-4 text-[#C4A46B] shrink-0" />
                  <span>Check-in: 14:00 hrs | Check-out: 12:00 hrs</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-black/5">
              <Link
                href="/skyhilton/contact"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#252522] hover:text-[#C4A46B] transition-colors"
              >
                <span>Skyhilton Contact Page</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* JB Innovation */}
          <div className="bg-white border border-[#E7DFD1] p-8 rounded-sm shadow-md flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-black/10 pb-4">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#73765B]">
                    Weddings & Grand Events
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#252522]">
                    JB Innovation
                  </h3>
                </div>
                <span className="w-2.5 h-2.5 rounded-full bg-[#73765B]" />
              </div>

              <div className="space-y-3 text-xs text-[#252522]/80">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#73765B] shrink-0 mt-0.5" />
                  <span>
                    Near Chaudhary Charan Singh Airport (5.3 km), Raibareli Rd (3.5 km), Ashiyana (3 km), Lucknow
                  </span>
                </div>

                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#73765B] shrink-0" />
                  <div className="font-semibold">
                    <a href="tel:7080888803" className="hover:text-[#73765B] underline">
                      7080888803
                    </a>{" "}
                    |{" "}
                    <a href="tel:7080888847" className="hover:text-[#73765B] underline">
                      7080888847
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#73765B] shrink-0" />
                  <a
                    href="mailto:contact@jbgroup.co.in"
                    className="hover:text-[#73765B] underline"
                  >
                    contact@jbgroup.co.in
                  </a>
                </div>

                <div className="flex items-center gap-2.5 text-[#73765B] pt-2 border-t border-black/5">
                  <InstagramIcon className="w-4 h-4 text-[#73765B] shrink-0" />
                  <span>Join our Instagram Family</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-black/5">
              <Link
                href="/jb-innovation/contact"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#252522] hover:text-[#73765B] transition-colors"
              >
                <span>Innovation Contact Page</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Urban Sweets & Bakers */}
          <div className="bg-white border border-[#E7DFD1] p-8 rounded-sm shadow-md flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-black/10 pb-4">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#581825]">
                    Sweets, Bakery & Banquet
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#252522]">
                    Urban Sweets & Bakers
                  </h3>
                </div>
                <span className="w-2.5 h-2.5 rounded-full bg-[#581825]" />
              </div>

              <div className="space-y-3 text-xs text-[#252522]/80">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#581825] shrink-0 mt-0.5" />
                  <span>
                    Lucknow, Uttar Pradesh (Exact store address pending administrative publication)
                  </span>
                </div>

                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#581825] shrink-0" />
                  <a
                    href="mailto:contact@jbgroup.co.in"
                    className="hover:text-[#581825] underline"
                  >
                    contact@jbgroup.co.in
                  </a>
                </div>

                <div className="p-3 bg-[#FAF7F2] border border-[#581825]/20 rounded text-[11px] text-[#73765B] leading-relaxed">
                  Dedicated telephone numbers and boutique store address will be published once officially confirmed. Use the form below for orders and banquet bookings.
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-black/5">
              <Link
                href="/urban-sweets/contact"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#252522] hover:text-[#581825] transition-colors"
              >
                <span>Urban Sweets Contact</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Online Concierge Form */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <EnquiryForm
          initialType="general"
          title="Online Group Reservations & Inquiries"
          subtitle="Complete the form below. A senior reservation executive will reply promptly with answers, availability, or formal documentation."
        />
      </section>

      <Footer />
    </div>
  );
}
