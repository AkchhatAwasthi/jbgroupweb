import React from "react";
import Link from "next/link";
import { ArrowLeft, Home, Building2, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#F7F3EB] text-[#252522] flex flex-col justify-between">
      <Navbar />

      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-32 pb-24 text-center">
        <div className="max-w-xl mx-auto space-y-6">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#C4A46B]">
            404 • Destination Not Found
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#252522]">
            A Moment to Reorient
          </h1>
          <p className="text-sm sm:text-base text-[#73765B] font-light leading-relaxed">
            The page you are looking for has moved or does not exist. Allow our hospitality navigation to guide you back to our premier destinations.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 text-xs font-semibold">
            <Link
              href="/"
              className="p-3 bg-white border border-[#E7DFD1] rounded hover:border-[#C4A46B] transition-colors"
            >
              JB Group Home
            </Link>
            <Link
              href="/skyhilton"
              className="p-3 bg-white border border-[#E7DFD1] rounded hover:border-[#C4A46B] transition-colors"
            >
              JB Skyhilton
            </Link>
            <Link
              href="/jb-innovation"
              className="p-3 bg-white border border-[#E7DFD1] rounded hover:border-[#C4A46B] transition-colors"
            >
              JB Innovation
            </Link>
          </div>

          <div className="pt-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#252522] text-[#F7F3EB] rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-[#3D3D39] transition-all"
            >
              <Home className="w-3.5 h-3.5 text-[#C4A46B]" />
              <span>Return to Homepage</span>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
