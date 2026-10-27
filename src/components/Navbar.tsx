"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Phone,
  ChevronDown,
  Building2,
  Sparkles,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [businessesDropdownOpen, setBusinessesDropdownOpen] = useState(false);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setBusinessesDropdownOpen(false);
  }, [pathname]);

  const isSkyhilton = pathname.startsWith("/skyhilton");
  const isUrbanSweets = pathname.startsWith("/urban-sweets");
  const isInnovation = pathname.startsWith("/jb-innovation");

  // Determine current brand styling & navigation
  let brandName = "JB GROUP";
  let brandSub = "HOSPITALITY & CELEBRATIONS";
  let brandLogoLink = "/";
  let navLinks: { label: string; href: string }[] = [];
  let directCallNumber = "";
  let buttonClass = "bg-[#C4A46B] text-[#252522] hover:bg-[#B3935A]";

  if (isSkyhilton) {
    brandName = "JB SKYHILTON";
    brandSub = "HOTEL • DINING • BANQUETS";
    brandLogoLink = "/skyhilton";
    buttonClass = "bg-[#C4A46B] text-[#252522] hover:bg-[#B3935A]";
    directCallNumber = "7080888807";
    // Streamlined, concise links without redundant Overview
    navLinks = [
      { label: "Rooms", href: "/skyhilton/rooms" },
      { label: "Dining", href: "/skyhilton/dining" },
      { label: "Banquets", href: "/skyhilton/banquets" },
      { label: "Contact", href: "/skyhilton/contact" },
    ];
  } else if (isUrbanSweets) {
    brandName = "URBAN SWEETS & BAKERS";
    brandSub = "RESTAURANT • ARTISANAL SWEETS • BANQUET";
    brandLogoLink = "/urban-sweets";
    buttonClass = "bg-[#581825] text-[#FAF6F0] border border-[#C4A46B] hover:bg-[#43121C]";
    directCallNumber = "";
    navLinks = [
      { label: "Restaurant & Sweets", href: "/urban-sweets/sweets-and-bakery" },
      { label: "Banquets", href: "/urban-sweets/banquets" },
      { label: "Contact", href: "/urban-sweets/contact" },
    ];
  } else if (isInnovation) {
    brandName = "JB INNOVATION";
    brandSub = "WEDDINGS • BANQUETS • LAWNS";
    brandLogoLink = "/jb-innovation";
    buttonClass = "bg-[#73765B] text-white hover:bg-[#5C5F47]";
    directCallNumber = "7080888803";
    // Streamlined, concise links without redundant Overview
    navLinks = [
      { label: "Venues", href: "/jb-innovation/venues" },
      { label: "Stay", href: "/jb-innovation/accommodation" },
      { label: "Dining", href: "/jb-innovation/dining" },
      { label: "Contact", href: "/jb-innovation/contact" },
    ];
  } else {
    // Corporate Parent JB Group
    navLinks = [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Celebrations", href: "/celebrations" },
      { label: "Contact", href: "/contact" },
    ];
  }

  return (
    <header
      className="relative w-full z-40 bg-[#1D1D1B] border-b border-[#C4A46B]/25 py-2.5 shadow-sm font-navbar"
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Arial, sans-serif',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Brand Logo & Tagline */}
          <Link
            href={brandLogoLink}
            className="group flex flex-col tracking-wider focus:outline-none shrink-0"
            aria-label={`${brandName} Home`}
          >
            <div className="flex items-center gap-1.5 whitespace-nowrap">
              <span className="text-[15px] sm:text-[17px] font-bold tracking-[0.14em] text-[#F7F3EB] group-hover:text-[#C4A46B] transition-colors uppercase">
                {brandName}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#C4A46B]" />
            </div>
            <span className="text-[8px] sm:text-[8.5px] tracking-[0.22em] text-[#C4A46B] uppercase font-semibold whitespace-nowrap">
              {brandSub}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center space-x-6 xl:space-x-7"
            aria-label="Main Navigation"
          >
            {/* If on child brand, show compact Parent Return badge */}
            {(isSkyhilton || isUrbanSweets || isInnovation) && (
              <Link
                href="/"
                className="flex items-center gap-1.5 text-xs text-[#E7DFD1]/70 hover:text-[#C4A46B] transition-colors border-r border-white/15 pr-5 whitespace-nowrap"
                title="Return to JB Group Parent"
              >
                <Building2 className="w-3.5 h-3.5 text-[#C4A46B]" />
                <span>JB Group</span>
              </Link>
            )}

            {/* If on Parent site, show "Our Businesses" Dropdown */}
            {!isSkyhilton && !isUrbanSweets && !isInnovation && (
              <div
                className="relative"
                onMouseEnter={() => setBusinessesDropdownOpen(true)}
                onMouseLeave={() => setBusinessesDropdownOpen(false)}
              >
                <button
                  type="button"
                  className="flex items-center gap-1.5 text-xs sm:text-[13px] font-semibold tracking-wider text-[#F7F3EB] hover:text-[#C4A46B] transition-colors py-1.5 focus:outline-none whitespace-nowrap"
                  aria-expanded={businessesDropdownOpen}
                >
                  <span>Our Businesses</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      businessesDropdownOpen ? "rotate-180 text-[#C4A46B]" : ""
                    }`}
                  />
                </button>

                {businessesDropdownOpen && (
                  <div className="absolute top-full left-0 mt-1.5 w-80 bg-[#1D1D1B] border border-[#C4A46B]/30 shadow-2xl rounded-sm p-3 space-y-1 animate-fadeIn z-50">
                    <Link
                      href="/skyhilton"
                      className="block p-2.5 rounded hover:bg-white/5 transition-colors group"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#F7F3EB] group-hover:text-[#C4A46B]">
                          JB Skyhilton
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#C4A46B] opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <p className="text-[11px] text-[#E7DFD1]/70 mt-0.5 leading-snug">
                        Hotel Stays, Fine Dine, Panoramic Bar, Café & Banquets
                      </p>
                    </Link>

                    <Link
                      href="/urban-sweets"
                      className="block p-2.5 rounded hover:bg-white/5 transition-colors group"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#F7F3EB] group-hover:text-[#DFCA9B]">
                          Urban Sweets & Bakers
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#DFCA9B] opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <p className="text-[11px] text-[#E7DFD1]/70 mt-0.5 leading-snug">
                        Restaurant, Artisanal Sweets, Bakery &amp; Celebration Banquet
                      </p>
                    </Link>

                    <Link
                      href="/jb-innovation"
                      className="block p-2.5 rounded hover:bg-white/5 transition-colors group"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#F7F3EB] group-hover:text-[#C4A46B]">
                          JB Innovation
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#C4A46B] opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <p className="text-[11px] text-[#E7DFD1]/70 mt-0.5 leading-snug">
                        Weddings, Grand Banquet Halls, Landscaped Lawns & Rooms
                      </p>
                    </Link>
                  </div>
                )}
              </div>
            )}

            {/* Standard Nav Links */}
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xs sm:text-[13px] tracking-wider font-semibold transition-colors relative py-1 whitespace-nowrap ${
                    isActive
                      ? "text-[#C4A46B]"
                      : "text-[#F7F3EB]/90 hover:text-[#C4A46B]"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C4A46B] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden lg:flex items-center space-x-3 shrink-0">
            {directCallNumber ? (
              <a
                href={`tel:${directCallNumber}`}
                className="flex items-center gap-1.5 text-xs font-semibold text-[#F7F3EB] hover:text-[#C4A46B] transition-colors py-1.5 px-3 border border-white/20 hover:border-[#C4A46B]/40 rounded-sm whitespace-nowrap"
              >
                <Phone className="w-3.5 h-3.5 text-[#C4A46B]" />
                <span>Call {directCallNumber}</span>
              </a>
            ) : null}

            <Link
              href={
                isSkyhilton
                  ? "/skyhilton/contact"
                  : isUrbanSweets
                  ? "/urban-sweets/contact"
                  : isInnovation
                  ? "/jb-innovation/contact"
                  : "/contact"
              }
              className={`px-4 py-1.5 text-xs font-bold uppercase tracking-[0.12em] rounded-sm transition-all shadow-sm whitespace-nowrap ${buttonClass}`}
            >
              Enquire Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            {directCallNumber && (
              <a
                href={`tel:${directCallNumber}`}
                className="p-1.5 text-[#C4A46B] border border-[#C4A46B]/40 rounded-sm"
                aria-label={`Call ${directCallNumber}`}
              >
                <Phone className="w-4 h-4" />
              </a>
            )}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-[#F7F3EB] hover:text-[#C4A46B] focus:outline-none"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#1D1D1B] border-t border-[#C4A46B]/20 px-6 py-5 space-y-4 animate-slideDown">
          {/* Brand Switcher in Mobile Drawer */}
          <div className="bg-[#252522] p-3 rounded border border-white/10 space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#C4A46B]">
              Switch Business Experience
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <Link
                href="/"
                className={`p-2 rounded border text-center ${
                  !isSkyhilton && !isUrbanSweets && !isInnovation
                    ? "bg-[#C4A46B] text-[#252522] font-bold border-[#C4A46B]"
                    : "text-[#F7F3EB] border-white/10 hover:border-[#C4A46B]"
                }`}
              >
                JB Group Main
              </Link>
              <Link
                href="/skyhilton"
                className={`p-2 rounded border text-center ${
                  isSkyhilton
                    ? "bg-[#C4A46B] text-[#252522] font-bold border-[#C4A46B]"
                    : "text-[#F7F3EB] border-white/10 hover:border-[#C4A46B]"
                }`}
              >
                JB Skyhilton
              </Link>
              <Link
                href="/urban-sweets"
                className={`p-2 rounded border text-center ${
                  isUrbanSweets
                    ? "bg-[#581825] text-[#FAF6F0] font-bold border-[#C4A46B]"
                    : "text-[#F7F3EB] border-white/10 hover:border-[#C4A46B]"
                }`}
              >
                Urban Sweets
              </Link>
              <Link
                href="/jb-innovation"
                className={`p-2 rounded border text-center ${
                  isInnovation
                    ? "bg-[#73765B] text-white font-bold border-[#C4A46B]"
                    : "text-[#F7F3EB] border-white/10 hover:border-[#C4A46B]"
                }`}
              >
                JB Innovation
              </Link>
            </div>
          </div>

          {/* Current Brand Navigation Links */}
          <div className="space-y-2 pt-1">
            <div className="text-[10px] font-semibold tracking-widest uppercase text-[#E7DFD1]/60">
              {brandName} Menu
            </div>
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block py-1.5 text-sm font-medium border-b border-white/5 ${
                    isActive
                      ? "text-[#C4A46B] font-semibold"
                      : "text-[#F7F3EB] hover:text-[#C4A46B]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile CTAs */}
          <div className="pt-2 space-y-2">
            {directCallNumber && (
              <a
                href={`tel:${directCallNumber}`}
                className="w-full flex items-center justify-center gap-2 py-2.5 bg-[#252522] text-[#F7F3EB] border border-[#C4A46B]/40 rounded text-xs font-semibold"
              >
                <Phone className="w-3.5 h-3.5 text-[#C4A46B]" />
                <span>Call {directCallNumber}</span>
              </a>
            )}

            <Link
              href={
                isSkyhilton
                  ? "/skyhilton/contact"
                  : isUrbanSweets
                  ? "/urban-sweets/contact"
                  : isInnovation
                  ? "/jb-innovation/contact"
                  : "/contact"
              }
              className={`w-full block text-center py-2.5 text-xs font-bold uppercase tracking-widest rounded shadow-sm ${buttonClass}`}
            >
              Plan Your Celebration
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
