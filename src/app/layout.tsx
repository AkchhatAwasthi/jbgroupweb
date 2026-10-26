import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jbgroup.co.in"),
  title: {
    default: "JB Group | Hospitality, Thoughtfully Elevated",
    template: "%s | JB Group",
  },
  description:
    "JB Group is a premier hospitality and celebrations group featuring JB Skyhilton hotel, dining & banquets, Urban Sweets & Bakers, and JB Innovation banquet destination.",
  keywords: [
    "JB Group",
    "JB Skyhilton",
    "JB Innovation",
    "Urban Sweets & Bakers",
    "Lucknow luxury hotel",
    "banquet halls Lucknow",
    "wedding venues Lucknow",
    "fine dining Lucknow",
  ],
  authors: [{ name: "JB Group" }],
  creator: "JB Group",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://jbgroup.co.in",
    siteName: "JB Group Hospitality",
    title: "JB Group | Hospitality, Thoughtfully Elevated",
    description:
      "Three distinctive experiences. One commitment to exceptional hospitality, memorable celebrations and meaningful moments.",
    images: [
      {
        url: "/images/group/hero.jpg",
        width: 1920,
        height: 1080,
        alt: "JB Group Luxury Hospitality",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JB Group | Hospitality, Thoughtfully Elevated",
    description:
      "Three distinctive experiences. One commitment to exceptional hospitality, memorable celebrations and meaningful moments.",
    images: ["/images/group/hero.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#252522",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#F7F3EB] text-[#252522]">
        {children}
      </body>
    </html>
  );
}
