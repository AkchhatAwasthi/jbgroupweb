"use client";

import React, { useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX, Sparkles, Film, ArrowRight } from "lucide-react";

export interface VideoItem {
  id: string;
  title: string;
  category: string;
  description: string;
  url: string;
  poster?: string;
  tag?: string;
}

export const propertyVideos: VideoItem[] = [
  {
    id: "weddings-walkthrough",
    title: "Grand Celebrations & Ceremonies",
    category: "Weddings & Receptions",
    tag: "Celebration Venue",
    description:
      "A perfect venue for weddings, ring ceremonies, haldi, grand receptions, birthdays, and corporate galas.",
    url: "https://res.cloudinary.com/dmj0smemf/video/upload/v1793119679/A_perfect_venue_for_weddings_ring_ceremonies_haldi_receptions_birthdays_corporate_events_o3ekbc.mp4",
    poster: "/images/innovation/DSC_2803.jpg",
  },
  {
    id: "innovation-atmosphere",
    title: "The Innovation Experience",
    category: "Ambiance & Hospitality",
    tag: "Curated Moments",
    description:
      "Step inside the vibrant celebration spaces, sophisticated architectural details, and atmosphere at JB Innovation.",
    url: "https://res.cloudinary.com/dmj0smemf/video/upload/v1793119602/Innovation_X_espresso_update_sf5x17.mp4",
    poster: "/images/innovation/DSC_1977.jpg",
  },
  {
    id: "milestone-gatherings",
    title: "Joyous Milestone Evenings",
    category: "Private Galas & Birthdays",
    tag: "Milestone Occasions",
    description:
      "Bespoke birthday celebrations, intimate family gatherings, and unforgettable evenings brought to life.",
    url: "https://res.cloudinary.com/dmj0smemf/video/upload/v1793119593/Innovation_August_birthday_1_wjvpuh.mp4",
    poster: "/images/innovation/DSC_2102.jpg",
  },
];

interface VideoShowcaseProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  theme?: "light" | "dark";
  showLinkToVenues?: boolean;
}

function VideoCard({
  video,
  theme,
}: {
  video: VideoItem;
  theme: "light" | "dark";
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div
      className={`rounded-sm overflow-hidden flex flex-col justify-between transition-all duration-300 group shadow-md hover:shadow-2xl ${
        theme === "dark"
          ? "bg-[#1E2018] border border-white/10 hover:border-[#C4A46B]/60"
          : "bg-white border border-[#E7DFD1] hover:border-[#C4A46B]/60"
      }`}
    >
      {/* Video Container (aspect-[9/16] with max height for sleek reel viewing) */}
      <div className="relative aspect-[9/16] max-h-[540px] bg-black overflow-hidden flex items-center justify-center">
        <video
          ref={videoRef}
          src={video.url}
          poster={video.poster}
          playsInline
          controls
          preload="metadata"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          className="w-full h-full object-cover"
        />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none z-10">
          <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 bg-black/70 backdrop-blur-md text-[#DFCA9B] rounded-sm border border-[#C4A46B]/30">
            {video.tag}
          </span>
          <span className="p-1.5 rounded-full bg-black/60 backdrop-blur-md text-[#DFCA9B]">
            <Film className="w-3 h-3" />
          </span>
        </div>

        {/* Play Overlay if video is paused */}
        {!isPlaying && (
          <button
            onClick={togglePlay}
            aria-label={`Play ${video.title}`}
            className="absolute inset-0 m-auto w-14 h-14 rounded-full bg-black/60 hover:bg-[#C4A46B] text-white hover:text-[#252522] border border-white/30 hover:border-[#C4A46B] flex items-center justify-center transition-all duration-300 backdrop-blur-sm group-hover:scale-110 shadow-xl z-10"
          >
            <Play className="w-6 h-6 fill-current ml-0.5" />
          </button>
        )}
      </div>

      {/* Video Information */}
      <div className="p-5 sm:p-6 space-y-2.5 flex-1 flex flex-col justify-between">
        <div className="space-y-1.5">
          <span
            className={`text-[10px] font-bold uppercase tracking-widest block ${
              theme === "dark" ? "text-[#C4A46B]" : "text-[#73765B]"
            }`}
          >
            {video.category}
          </span>
          <h3
            className={`font-serif text-lg font-bold leading-snug group-hover:text-[#C4A46B] transition-colors ${
              theme === "dark" ? "text-[#F7F3EB]" : "text-[#252522]"
            }`}
          >
            {video.title}
          </h3>
          <p
            className={`text-xs font-light leading-relaxed line-clamp-2 ${
              theme === "dark" ? "text-[#E7DFD1]/75" : "text-[#73765B]"
            }`}
          >
            {video.description}
          </p>
        </div>

        <div className="pt-3 border-t border-black/5 dark:border-white/10 flex items-center justify-between">
          <button
            onClick={togglePlay}
            className={`text-[11px] font-bold uppercase tracking-widest inline-flex items-center gap-1.5 transition-colors ${
              theme === "dark"
                ? "text-[#DFCA9B] hover:text-white"
                : "text-[#252522] hover:text-[#C4A46B]"
            }`}
          >
            <span>{isPlaying ? "Pause Video" : "Watch Video"}</span>
            <Play className="w-3 h-3 fill-current" />
          </button>
          <span
            className={`text-[10px] ${
              theme === "dark" ? "text-white/40" : "text-black/40"
            }`}
          >
            Property Tour
          </span>
        </div>
      </div>
    </div>
  );
}

export default function VideoShowcase({
  eyebrow = "Celebrations in Motion",
  title = "Experience the Atmosphere",
  description = "Take an exclusive walkthrough of our illuminated lawns, grand banquet halls, and unforgettable celebratory milestones.",
  theme = "light",
  showLinkToVenues = true,
}: VideoShowcaseProps) {
  return (
    <section
      className={`py-20 sm:py-24 px-4 sm:px-6 lg:px-8 border-t ${
        theme === "dark"
          ? "bg-[#141510] text-[#F7F3EB] border-white/5"
          : "bg-[#FAF7F2] text-[#252522] border-[#E7DFD1]"
      }`}
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#C4A46B]" />
              <span
                className={`text-[11px] font-bold uppercase tracking-[0.25em] ${
                  theme === "dark" ? "text-[#DFCA9B]" : "text-[#73765B]"
                }`}
              >
                {eyebrow}
              </span>
            </div>
            <h2
              className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight ${
                theme === "dark" ? "text-[#F7F3EB]" : "text-[#252522]"
              }`}
            >
              {title}
            </h2>
            <p
              className={`text-sm sm:text-base font-light leading-relaxed max-w-xl ${
                theme === "dark" ? "text-[#E7DFD1]/80" : "text-[#73765B]"
              }`}
            >
              {description}
            </p>
          </div>

          {showLinkToVenues && (
            <div className="shrink-0">
              <a
                href="/jb-innovation/venues"
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-sm text-xs font-bold uppercase tracking-widest transition-all shadow-md ${
                  theme === "dark"
                    ? "bg-[#C4A46B] text-[#252522] hover:bg-[#DFCA9B]"
                    : "bg-[#73765B] text-white hover:bg-[#5C5F47]"
                }`}
              >
                <span>Explore Venues &amp; Halls</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          )}
        </div>

        {/* 3-Video Reel Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {propertyVideos.map((video) => (
            <VideoCard key={video.id} video={video} theme={theme} />
          ))}
        </div>
      </div>
    </section>
  );
}
