"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollAnimator() {
  const pathname = usePathname();

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    // Select explicit reveal elements
    const explicitElements = Array.from(
      document.querySelectorAll<HTMLElement>(
        ".reveal, .reveal-up, .reveal-fade, .reveal-left, .reveal-right, .reveal-scale"
      )
    );

    // Auto-discover key sections, headings and card grids to make the entire site naturally animated
    const autoElements = Array.from(
      document.querySelectorAll<HTMLElement>(
        "section:not(.no-auto-reveal) > div:not(.reveal):not(.is-visible), " +
        ".auto-reveal, " +
        "main > section:not(:first-child)"
      )
    );

    const allTargets = Array.from(new Set([...explicitElements, ...autoElements]));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            entry.target.classList.add("is-revealed");
            // Stop observing once animated so it doesn't re-trigger and cause layout jitter
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    allTargets.forEach((el) => {
      // If element is already in the viewport upon mount (e.g. hero), reveal immediately
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add("is-visible");
        el.classList.add("is-revealed");
      } else {
        observer.observe(el);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
