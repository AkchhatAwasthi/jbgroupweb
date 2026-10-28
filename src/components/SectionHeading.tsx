import React from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center" | "right";
  theme?: "dark" | "light" | "maroon";
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  theme = "light",
}: SectionHeadingProps) {
  const isDark = theme === "dark" || theme === "maroon";
  const alignClass =
    align === "center"
      ? "text-center mx-auto"
      : align === "right"
      ? "text-right ml-auto"
      : "text-left";

  return (
    <div className={`max-w-3xl mb-12 sm:mb-16 reveal-up ${alignClass}`}>
      {eyebrow && (
        <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#C4A46B] block mb-3 animate-fadeIn">
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight ${
          isDark ? "text-[#F7F3EB]" : "text-[#252522]"
        }`}
      >
        {title}
      </h2>
      <div
        className={`h-0.5 w-16 bg-[#C4A46B] my-4 transition-all duration-700 ease-out ${
          align === "center" ? "mx-auto" : align === "right" ? "ml-auto" : ""
        }`}
      />
      {description && (
        <p
          className={`text-base sm:text-lg font-light leading-relaxed ${
            isDark ? "text-[#E7DFD1]/80" : "text-[#73765B]"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
