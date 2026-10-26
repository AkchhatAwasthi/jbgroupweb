import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight, ShieldCheck, Wifi, Tv, Coffee } from "lucide-react";

interface RoomCardProps {
  name: string;
  carpetArea?: string;
  headline?: string;
  description: string;
  image: string;
  amenities: string[];
  features?: string[];
  idealFor?: string;
  enquireHref: string;
}

export default function RoomCard({
  name,
  carpetArea,
  headline,
  description,
  image,
  amenities,
  features,
  idealFor,
  enquireHref,
}: RoomCardProps) {
  return (
    <div className="bg-white border border-[#E7DFD1] rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col group">
      {/* Visual Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-[#252522]">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
          <span className="text-xs font-semibold px-3 py-1 bg-[#252522]/90 backdrop-blur-sm border border-[#C4A46B]/40 rounded-sm">
            {name}
          </span>
          {carpetArea && (
            <span className="text-xs font-medium bg-[#C4A46B] text-[#252522] px-2.5 py-0.5 rounded-sm font-mono font-bold">
              {carpetArea}
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
        <div className="space-y-3">
          <h3 className="font-serif text-2xl font-bold text-[#252522] tracking-tight group-hover:text-[#C4A46B] transition-colors">
            {name}
          </h3>

          {headline && (
            <p className="text-xs font-semibold uppercase tracking-widest text-[#73765B]">
              {headline}
            </p>
          )}

          <p className="text-sm text-[#252522]/80 font-light leading-relaxed">
            {description}
          </p>

          {idealFor && (
            <div className="text-xs text-[#73765B]">
              <span className="font-semibold text-[#252522]">Ideal For: </span>
              {idealFor}
            </div>
          )}

          {/* Amenities grid */}
          <div className="pt-3 border-t border-black/5">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#73765B] block mb-2">
              In-Room Amenities
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#252522]/80">
              {amenities.map((item, idx) => (
                <div key={idx} className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#C4A46B] shrink-0" />
                  <span className="truncate">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Action */}
        <div className="pt-4 border-t border-black/5 flex items-center justify-between">
          <Link
            href={enquireHref}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest bg-[#252522] text-[#F7F3EB] px-4 py-2.5 rounded-sm hover:bg-[#3D3D39] transition-colors"
          >
            <span>Book / Enquire Tariff</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#C4A46B]" />
          </Link>
          <span className="text-[11px] text-[#73765B]">Best Rate Direct</span>
        </div>
      </div>
    </div>
  );
}
