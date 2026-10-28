"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  ShieldCheck,
  Clock,
} from "lucide-react";
import { InstagramIcon } from "@/components/Icons";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-[#1D1D1B] text-[#F7F3EB] border-t border-[#C4A46B]/30 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Group Branding Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 border-b border-white/10">
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/images/logos/jb_group_logo.png"
                alt="JB Group Logo"
                width={48}
                height={69}
                className="h-12 w-auto object-contain shrink-0"
              />
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-serif text-2xl font-bold tracking-widest text-[#F7F3EB]">
                    JB GROUP
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#C4A46B]" />
                </div>
                <span className="text-[9px] uppercase tracking-[0.2em] text-[#C4A46B] font-semibold block">
                  Hospitality &amp; Celebrations
                </span>
              </div>
            </div>
            <p className="text-sm text-[#E7DFD1]/80 max-w-md font-light leading-relaxed">
              Hospitality, thoughtfully elevated. Connecting luxury boutique stays, authentic gastronomy, artisanal confectionery, and grand celebratory banquet spaces across Lucknow.
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#C4A46B] font-semibold">
                <ShieldCheck className="w-4 h-4 text-[#C4A46B]" />
                Three Experiences • One Standard of Excellence
              </span>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {/* Quick Explore - Skyhilton */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Image
                  src="/images/logos/jb_skyhilton_logo.png"
                  alt="JB Skyhilton Logo"
                  width={24}
                  height={31}
                  className="h-7 w-auto object-contain shrink-0"
                />
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#C4A46B]">
                  JB Skyhilton
                </h4>
              </div>
              <ul className="space-y-2 text-xs text-[#E7DFD1]/70">
                <li>
                  <Link href="/skyhilton" className="hover:text-[#C4A46B] transition-colors">
                    Hotel Overview
                  </Link>
                </li>
                <li>
                  <Link href="/skyhilton/rooms" className="hover:text-[#C4A46B] transition-colors">
                    27 Rooms & Suites
                  </Link>
                </li>
                <li>
                  <Link href="/skyhilton/dining" className="hover:text-[#C4A46B] transition-colors">
                    Fine Dine & The Bar
                  </Link>
                </li>
                <li>
                  <Link href="/skyhilton/banquets" className="hover:text-[#C4A46B] transition-colors">
                    Infinity Hall & Decks
                  </Link>
                </li>
                <li>
                  <Link href="/skyhilton/contact" className="hover:text-[#C4A46B] transition-colors">
                    Location & Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Quick Explore - Urban Sweets */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Image
                  src="/images/logos/jb_urban_sweets_logo.png"
                  alt="Urban Sweets Logo"
                  width={34}
                  height={22}
                  className="h-5.5 w-auto object-contain shrink-0"
                />
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#DFCA9B]">
                  Urban Sweets
                </h4>
              </div>
              <ul className="space-y-2 text-xs text-[#E7DFD1]/70">
                <li>
                  <Link href="/urban-sweets" className="hover:text-[#DFCA9B] transition-colors">
                    Brand Overview
                  </Link>
                </li>
                <li>
                  <Link href="/urban-sweets/sweets-and-bakery" className="hover:text-[#DFCA9B] transition-colors">
                    Artisan Mithai Catalog
                  </Link>
                </li>
                <li>
                  <Link href="/urban-sweets/sweets-and-bakery#bakery" className="hover:text-[#DFCA9B] transition-colors">
                    Gourmet Bakery Studio
                  </Link>
                </li>
                <li>
                  <Link href="/urban-sweets/sweets-and-bakery#gifting" className="hover:text-[#DFCA9B] transition-colors">
                    Festive & Corporate Hampers
                  </Link>
                </li>
                <li>
                  <Link href="/urban-sweets/banquets" className="hover:text-[#DFCA9B] transition-colors">
                    Celebration Banquet Hall
                  </Link>
                </li>
              </ul>
            </div>

            {/* Quick Explore - JB Innovation */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Image
                  src="/images/logos/jb_innovations_logo.png"
                  alt="JB Innovation Logo"
                  width={24}
                  height={30}
                  className="h-7 w-auto object-contain shrink-0"
                />
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#C4A46B]">
                  JB Innovation
                </h4>
              </div>
              <ul className="space-y-2 text-xs text-[#E7DFD1]/70">
                <li>
                  <Link href="/jb-innovation" className="hover:text-[#C4A46B] transition-colors">
                    Destination Overview
                  </Link>
                </li>
                <li>
                  <Link href="/jb-innovation/venues" className="hover:text-[#C4A46B] transition-colors">
                    Crown & Kanishk Halls
                  </Link>
                </li>
                <li>
                  <Link href="/jb-innovation/venues#lawns" className="hover:text-[#C4A46B] transition-colors">
                    Lush Celebration Lawns
                  </Link>
                </li>
                <li>
                  <Link href="/jb-innovation/accommodation" className="hover:text-[#C4A46B] transition-colors">
                    Deluxe & Executive Rooms
                  </Link>
                </li>
                <li>
                  <Link href="/jb-innovation/dining" className="hover:text-[#C4A46B] transition-colors">
                    Carnations Restaurant
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Verified Contact Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10 border-b border-white/10 text-xs text-[#E7DFD1]/80">
          {/* Skyhilton Verified Contacts */}
          <div className="space-y-2.5">
            <span className="font-semibold text-sm text-[#F7F3EB] block">
              JB Skyhilton Property
            </span>
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-[#C4A46B] shrink-0 mt-0.5" />
              <span>Sector B, Bargawan, LDA Colony, Lucknow – 226012, UP</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#C4A46B] shrink-0" />
              <span>
                Room:{" "}
                <a href="tel:7080888807" className="hover:text-[#C4A46B] underline">
                  7080888807
                </a>{" "}
                | Party:{" "}
                <a href="tel:7080888838" className="hover:text-[#C4A46B] underline">
                  7080888838
                </a>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#C4A46B] shrink-0" />
              <a
                href="mailto:reservations@skyhilton.co.in"
                className="hover:text-[#C4A46B] underline"
              >
                reservations@skyhilton.co.in
              </a>
            </div>
            <div className="flex items-center gap-2 text-[#E7DFD1]/60">
              <Clock className="w-4 h-4 text-[#C4A46B] shrink-0" />
              <span>Check-in: 14:00 hrs • Check-out: 12:00 hrs</span>
            </div>
          </div>

          {/* JB Innovation Verified Contacts */}
          <div className="space-y-2.5">
            <span className="font-semibold text-sm text-[#F7F3EB] block">
              JB Innovation Destination
            </span>
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-[#C4A46B] shrink-0 mt-0.5" />
              <span>
                Near CCS International Airport (5.3 km), Raibareli Rd (3.5 km), Lucknow
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#C4A46B] shrink-0" />
              <span>
                Enquiries:{" "}
                <a href="tel:7080888803" className="hover:text-[#C4A46B] underline">
                  7080888803
                </a>{" "}
                |{" "}
                <a href="tel:7080888847" className="hover:text-[#C4A46B] underline">
                  7080888847
                </a>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <InstagramIcon className="w-4 h-4 text-[#C4A46B] shrink-0" />
              <span className="text-[#E7DFD1]/60">Join our Instagram Family</span>
            </div>
          </div>

          {/* Central Concierge & Urban Sweets */}
          <div className="space-y-2.5">
            <span className="font-semibold text-sm text-[#F7F3EB] block">
              Central Group Concierge & Gifting
            </span>
            <p className="text-[#E7DFD1]/60 leading-relaxed">
              For corporate hospitality agreements, festive bulk gifting, or multi-venue bookings across Lucknow:
            </p>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#C4A46B] shrink-0" />
              <a
                href="mailto:contact@jbgroup.co.in"
                className="hover:text-[#C4A46B] underline"
              >
                contact@jbgroup.co.in
              </a>
            </div>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-[#C4A46B] hover:text-[#DFCA9B] font-semibold transition-colors"
              >
                <span>Access Online Hospitality Concierge</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Disclaimers & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#E7DFD1]/50 gap-4">
          <p>© {currentYear} JB Group. All rights reserved. Hospitality, Thoughtfully Elevated.</p>
          <div className="flex items-center space-x-6">
            <span>Verified Source-Backed Data</span>
            <span>•</span>
            <Link href="/about" className="hover:text-[#C4A46B] transition-colors">
              About Parent Group
            </Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-[#C4A46B] transition-colors">
              Reservations Desk
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
