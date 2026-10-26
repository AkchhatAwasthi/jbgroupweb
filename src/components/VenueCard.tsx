import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Users, Sparkles, ArrowRight, Check } from "lucide-react";

interface VenueCardProps {
  name: string;
  capacity?: string;
  capacityNote?: string;
  setting?: string;
  headline?: string;
  description: string;
  features?: string[];
  suitableEvents?: string[];
  image: string;
  enquireHref: string;
  accentColor?: string;
}

export default function VenueCard({
  name,
  capacity,
  capacityNote,
  setting,
  headline,
  description,
  features,
  suitableEvents,
  image,
  enquireHref,
  accentColor = "#C4A46B",
}: VenueCardProps) {
  return (
    <div className="bg-white border border-[#E7DFD1] rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col group">
      {/* Visual Image with subtle hover zoom */}
      <div className="relative aspect-[16/10] overflow-hidden bg-[#252522]">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

        {/* Capacity / Setting Badges */}
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
          {capacity && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#252522]/90 backdrop-blur-sm border border-[#C4A46B]/40 text-xs font-semibold rounded-sm text-[#F7F3EB]">
              <Users className="w-3.5 h-3.5 text-[#C4A46B]" />
              <span>{capacity}</span>
            </span>
          )}
          {setting && (
            <span className="text-[11px] font-medium text-[#E7DFD1]/90 uppercase tracking-wider bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-sm">
              {setting}
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="font-serif text-2xl font-bold text-[#252522] tracking-tight group-hover:text-[#C4A46B] transition-colors">
              {name}
            </h3>
          </div>

          {headline && (
            <p className="text-xs font-bold uppercase tracking-widest text-[#73765B]">
              {headline}
            </p>
          )}

          <p className="text-sm text-[#252522]/80 font-light leading-relaxed">
            {description}
          </p>

          {capacityNote && (
            <div className="p-2.5 bg-[#FAF7F2] border border-[#C4A46B]/30 rounded text-[11px] text-[#73765B] italic">
              {capacityNote}
            </div>
          )}

          {/* Key Features */}
          {features && features.length > 0 && (
            <div className="pt-2 border-t border-black/5 space-y-1.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#73765B]">
                Key Highlights
              </span>
              <ul className="space-y-1 text-xs text-[#252522]/80">
                {features.slice(0, 3).map((feat, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#C4A46B] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="pt-4 border-t border-black/5 flex items-center justify-between">
          <Link
            href={enquireHref}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#252522] hover:text-[#C4A46B] transition-colors"
          >
            <span>Enquire Venue</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <span className="text-[11px] text-[#73765B]">Verified Setting</span>
        </div>
      </div>
    </div>
  );
}
