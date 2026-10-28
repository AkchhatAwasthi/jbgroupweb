"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
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
  let brandLogoSrc = "/images/logos/jb_group_logo.png";
  let brandLogoAlt = "JB Group Official Emblem";
  let brandLogoClass = "h-8 sm:h-9 w-auto";
  let navLinks: { label: string; href: string }[] = [];
  let directCallNumber = "";
  let buttonClass = "bg-[#C4A46B] text-[#252522] hover:bg-[#B3935A]";

  if (isSkyhilton) {
    brandName = "JB SKYHILTON";
    brandSub = "HOTEL • DINING • BANQUETS";
    brandLogoLink = "/skyhilton";
    brandLogoSrc = "/images/logos/jb_skyhilton_logo.png";
    brandLogoAlt = "JB Skyhilton Official Logo";
    brandLogoClass = "h-8 sm:h-9 w-auto";
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
    brandLogoSrc = "/images/logos/jb_urban_sweets_logo.png";
    brandLogoAlt = "Urban Sweets & Bakers Official Logo";
    brandLogoClass = "h-7 sm:h-8 w-auto";
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
    brandLogoSrc = "/images/logos/jb_innovations_logo.png";
    brandLogoAlt = "JB Innovation Official Logo";
    brandLogoClass = "h-8 sm:h-9 w-auto";
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
      className="sticky top-0 w-full z-50 bg-[#1D1D1B]/95 backdrop-blur-md border-b border-[#C4A46B]/25 py-2 sm:py-2.5 shadow-md font-navbar transition-all duration-300"
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
            className="group flex items-center gap-2.5 sm:gap-3 focus:outline-none shrink-0 transition-transform duration-300 hover:scale-[1.01]"
            aria-label={`${brandName} Home`}
          >
            <div className="relative flex items-center justify-center shrink-0">
              <Image
                src={brandLogoSrc}
                alt={brandLogoAlt}
                width={80}
                height={80}
                className={`${brandLogoClass} object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-sm`}
                priority
              />
            </div>
            <div className="flex flex-col tracking-wider">
              <div className="flex items-center gap-1.5 whitespace-nowrap">
                <span className="text-[14px] sm:text-[16px] font-bold tracking-[0.14em] text-[#F7F3EB] group-hover:text-[#C4A46B] transition-colors uppercase">
                  {brandName}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#C4A46B] group-hover:scale-125 transition-transform hidden sm:inline-block" />
              </div>
              <span className="text-[7.5px] sm:text-[8.5px] tracking-[0.22em] text-[#C4A46B] uppercase font-semibold whitespace-nowrap">
                {brandSub}
              </span>
            </div>
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
                className="flex items-center gap-1.5 text-xs text-[#E7DFD1]/70 hover:text-[#C4A46B] transition-colors border-r border-white/15 pr-5 whitespace-nowrap group"
                title="Return to JB Group Parent"
              >
                <Image
                  src="/images/logos/jb_group_logo.png"
                  alt="JB Group Parent"
                  width={20}
                  height={28}
                  className="h-4 w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                />
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
                    className={`w-3.5 h-3.5 transition-transform duration-300 ${
                      businessesDropdownOpen ? "rotate-180 text-[#C4A46B]" : ""
                    }`}
                  />
                </button>

                {businessesDropdownOpen && (
                  <div className="absolute top-full left-0 mt-1.5 w-84 bg-[#1D1D1B]/98 backdrop-blur-lg border border-[#C4A46B]/30 shadow-2xl rounded-sm p-3 space-y-1.5 animate-fadeInDown z-50">
                    <Link
                      href="/skyhilton"
                      className="flex items-start gap-3 p-2.5 rounded hover:bg-white/5 transition-all duration-200 group"
                    >
                      <div className="w-8 h-8 rounded bg-black/40 border border-[#C4A46B]/20 flex items-center justify-center shrink-0 mt-0.5 p-1">
                        <Image
                          src="/images/logos/jb_skyhilton_logo.png"
                          alt="JB Skyhilton Logo"
                          width={32}
                          height={42}
                          className="h-full w-auto object-contain"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold uppercase tracking-wider text-[#F7F3EB] group-hover:text-[#C4A46B] transition-colors">
                            JB Skyhilton
                          </span>
                          <ArrowRight className="w-3.5 h-3.5 text-[#C4A46B] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                        </div>
                        <p className="text-[11px] text-[#E7DFD1]/70 mt-0.5 leading-snug">
                          Hotel Stays, Fine Dine, Panoramic Bar, Café & Banquets
                        </p>
                      </div>
                    </Link>

                    <Link
                      href="/urban-sweets"
                      className="flex items-start gap-3 p-2.5 rounded hover:bg-white/5 transition-all duration-200 group"
                    >
                      <div className="w-8 h-8 rounded bg-black/40 border border-[#DFCA9B]/20 flex items-center justify-center shrink-0 mt-0.5 p-1">
                        <Image
                          src="/images/logos/jb_urban_sweets_logo.png"
                          alt="Urban Sweets Logo"
                          width={36}
                          height={24}
                          className="w-full h-auto object-contain"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold uppercase tracking-wider text-[#F7F3EB] group-hover:text-[#DFCA9B] transition-colors">
                            Urban Sweets &amp; Bakers
                          </span>
                          <ArrowRight className="w-3.5 h-3.5 text-[#DFCA9B] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                        </div>
                        <p className="text-[11px] text-[#E7DFD1]/70 mt-0.5 leading-snug">
                          Restaurant, Artisanal Sweets, Bakery &amp; Celebration Banquet
                        </p>
                      </div>
                    </Link>

                    <Link
                      href="/jb-innovation"
                      className="flex items-start gap-3 p-2.5 rounded hover:bg-white/5 transition-all duration-200 group"
                    >
                      <div className="w-8 h-8 rounded bg-black/40 border border-[#C4A46B]/20 flex items-center justify-center shrink-0 mt-0.5 p-1">
                        <Image
                          src="/images/logos/jb_innovations_logo.png"
                          alt="JB Innovation Logo"
                          width={32}
                          height={42}
                          className="h-full w-auto object-contain"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold uppercase tracking-wider text-[#F7F3EB] group-hover:text-[#C4A46B] transition-colors">
                            JB Innovation
                          </span>
                          <ArrowRight className="w-3.5 h-3.5 text-[#C4A46B] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                        </div>
                        <p className="text-[11px] text-[#E7DFD1]/70 mt-0.5 leading-snug">
                          Weddings, Grand Banquet Halls, Landscaped Lawns & Rooms
                        </p>
                      </div>
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
                className="flex items-center gap-1.5 text-xs font-semibold text-[#F7F3EB] hover:text-[#C4A46B] transition-all duration-300 py-1.5 px-3 border border-white/20 hover:border-[#C4A46B]/60 hover:shadow-[0_0_15px_rgba(196,164,107,0.15)] rounded-sm whitespace-nowrap group"
              >
                <Phone className="w-3.5 h-3.5 text-[#C4A46B] group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300" />
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
              className={`btn-shine px-4 py-1.5 text-xs font-bold uppercase tracking-[0.12em] rounded-sm transition-all duration-300 shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap ${buttonClass}`}
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
                className={`p-2 rounded border flex items-center justify-center gap-2 ${
                  !isSkyhilton && !isUrbanSweets && !isInnovation
                    ? "bg-[#C4A46B] text-[#252522] font-bold border-[#C4A46B]"
                    : "text-[#F7F3EB] border-white/10 hover:border-[#C4A46B]"
                }`}
              >
                <Image
                  src="/images/logos/jb_group_logo.png"
                  alt="JB Group"
                  width={16}
                  height={22}
                  className="h-4 w-auto object-contain"
                />
                <span>JB Group</span>
              </Link>
              <Link
                href="/skyhilton"
                className={`p-2 rounded border flex items-center justify-center gap-2 ${
                  isSkyhilton
                    ? "bg-[#C4A46B] text-[#252522] font-bold border-[#C4A46B]"
                    : "text-[#F7F3EB] border-white/10 hover:border-[#C4A46B]"
                }`}
              >
                <Image
                  src="/images/logos/jb_skyhilton_logo.png"
                  alt="Skyhilton"
                  width={16}
                  height={21}
                  className="h-4 w-auto object-contain"
                />
                <span>Skyhilton</span>
              </Link>
              <Link
                href="/urban-sweets"
                className={`p-2 rounded border flex items-center justify-center gap-2 ${
                  isUrbanSweets
                    ? "bg-[#581825] text-[#FAF6F0] font-bold border-[#C4A46B]"
                    : "text-[#F7F3EB] border-white/10 hover:border-[#C4A46B]"
                }`}
              >
                <Image
                  src="/images/logos/jb_urban_sweets_logo.png"
                  alt="Urban Sweets"
                  width={22}
                  height={14}
                  className="h-3.5 w-auto object-contain"
                />
                <span>Urban Sweets</span>
              </Link>
              <Link
                href="/jb-innovation"
                className={`p-2 rounded border flex items-center justify-center gap-2 ${
                  isInnovation
                    ? "bg-[#73765B] text-white font-bold border-[#C4A46B]"
                    : "text-[#F7F3EB] border-white/10 hover:border-[#C4A46B]"
                }`}
              >
                <Image
                  src="/images/logos/jb_innovations_logo.png"
                  alt="JB Innovation"
                  width={16}
                  height={20}
                  className="h-4 w-auto object-contain"
                />
                <span>Innovation</span>
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
