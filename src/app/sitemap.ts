import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://jbgroup.co.in";

  const routes = [
    // Main Group Corporate
    "",
    "/about",
    "/celebrations",
    "/contact",

    // JB Skyhilton
    "/skyhilton",
    "/skyhilton/rooms",
    "/skyhilton/dining",
    "/skyhilton/banquets",
    "/skyhilton/contact",

    // Urban Sweets & Bakers
    "/urban-sweets",
    "/urban-sweets/sweets-and-bakery",
    "/urban-sweets/banquets",
    "/urban-sweets/contact",

    // JB Innovation
    "/jb-innovation",
    "/jb-innovation/venues",
    "/jb-innovation/accommodation",
    "/jb-innovation/dining",
    "/jb-innovation/contact",
  ];

  const lastModified = "2026-10-22T00:00:00.000Z";

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : route.split("/").length === 2 ? 0.9 : 0.8,
  }));
}
