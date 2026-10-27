export interface BusinessOverview {
  id: string;
  name: string;
  tagline: string;
  description: string;
  route: string;
  accentColor: string;
  brandTag: string;
  heroImage: string;
  features: string[];
  venuesOrRooms: string[];
  contactPhone: string;
  contactEmail?: string;
  address?: string;
}

export const groupOverview = {
  brandName: "JB Group",
  headline: "Hospitality, Thoughtfully Elevated.",
  subheadline:
    "Three distinctive experiences. One commitment to exceptional hospitality, memorable celebrations and meaningful moments.",
  story: {
    title: "The JB Group Story",
    paragraph1:
      "JB Group is a distinguished hospitality and celebration enterprise based in Lucknow, bringing together fine hotel stays, exquisite dining, artisanal confectionary, and landmark banquet destinations under one elevated umbrella.",
    paragraph2:
      "From the contemporary urban luxury of JB Skyhilton with its 27 boutique guest rooms, panoramic bar, and versatile halls, to the grand celebratory lawns and banquet spaces of JB Innovation, and the rich culinary craftsmanship of Urban Sweets & Bakers—every JB Group experience is crafted with timeless attention to detail, warm Indian hospitality, and authentic excellence.",
    paragraph3:
      "Whether welcoming business travelers, hosting multi-generational family milestones, or creating custom festive gift hampers, JB Group upholds a legacy of gracious warmth and flawless event execution.",
  },
  pillars: [
    {
      title: "Elevated Hospitality",
      description:
        "Thoughtfully designed guest rooms, personalized guest journeys, and responsive service that anticipate every need.",
    },
    {
      title: "Artisanal Gastronomy",
      description:
        "From authentic North Indian banquets and continental fine dining to handcrafted Indian sweets and delicate patisserie.",
    },
    {
      title: "Celebratory Landmark Venues",
      description:
        "Magnificent halls, lush manicured lawns, and panoramic open terraces engineered for weddings and grand functions.",
    },
    {
      title: "Impeccable Execution",
      description:
        "Dedicated event planning teams, modern audiovisual tech, and customized catering for occasions of every scale.",
    },
  ],
  businesses: [
    {
      id: "skyhilton",
      name: "JB Skyhilton",
      tagline: "Your Stay. Your Celebration. Your Skyhilton.",
      description:
        "A boutique hotel destination in LDA Colony, Lucknow featuring 27 rooms, a 70-guest fine dine restaurant, vibrant panoramic bar, cozy café, and versatile banquet venues.",
      route: "/skyhilton",
      accentColor: "#C4A46B",
      brandTag: "Hotel • Dining • Bar • Café • Banquets",
      heroImage: "/images/skyhilton/rooftop_terrace.png",
      features: [
        "27 Tasteful Guest Rooms & Suites",
        "Fine Dine Restaurant (70 PAX)",
        "Panoramic Sky Bar (70 PAX)",
        "Intimate Gourmet Café (20–25 PAX)",
        "Infinity Hall & Open Terrace",
      ],
      venuesOrRooms: [
        "Standard, Elite, Deluxe & Suite Rooms",
        "Infinity Hall (80–100 Guests)",
        "Open Terrace Event Space (50–70 Guests)",
        "VIP Hall (30–50 Guests)",
        "Upper Deck (60 Guests)",
      ],
      contactPhone: "7080888807",
      contactEmail: "reservations@skyhilton.co.in",
      address: "Sector B, Bargawan, LDA Colony, Lucknow – 226012, Uttar Pradesh",
    },
    {
      id: "urban-sweets",
      name: "Urban Sweets & Bakers",
      tagline: "Restaurant, Artisanal Sweets & Celebration Banquets.",
      description:
        "An artisanal culinary destination bringing together a vibrant multi-cuisine family restaurant, pure desi ghee handcrafted sweets, European-style bakery, bespoke gifting, and an intimate celebration banquet hall.",
      route: "/urban-sweets",
      accentColor: "#581825",
      brandTag: "Restaurant • Artisanal Sweets • Bakery • Banquets",
      heroImage: "/images/urban-sweets/sweet_shop_counter.png",
      features: [
        "Multi-Cuisine Family Restaurant & Tandoor",
        "Handcrafted Pure Desi Ghee Artisanal Sweets",
        "Dedicated Celebration Banquet Venue",
        "Gourmet Bakery, Breads & Celebration Cakes",
        "Luxury Corporate & Festive Gifting Hampers",
      ],
      venuesOrRooms: [
        "Family Dining Restaurant & Live Chaat",
        "Artisanal Mithai & Sweet Atelier",
        "Intimate Celebration Banquet Hall",
        "Bakery Studio & Bespoke Gift Hampers",
      ],
      contactPhone: "Enquiry via Form",
      contactEmail: "contact@jbgroup.co.in",
      address: "Lucknow, Uttar Pradesh",
    },
    {
      id: "innovation",
      name: "JB Innovation",
      tagline: "Where Every Celebration Finds Its Setting.",
      description:
        "A dedicated wedding and grand event destination in Lucknow offering expansive landscaped lawns, grand indoor banquet halls, luxury guest accommodation, and Carnations Restaurant.",
      route: "/jb-innovation",
      accentColor: "#73765B",
      brandTag: "Weddings • Lawns • Banquets • Accommodation",
      heroImage: "/images/innovation/grand_jali_entrance.png",
      features: [
        "Expansive Landscaped Celebration Lawns",
        "Crown Hall & Kanishk Grand Halls",
        "Deluxe (180 sq ft) & Executive (250 sq ft) Rooms",
        "Carnations Refined Restaurant",
        "Open-Air Rooftop Terrace for Ceremonies",
      ],
      venuesOrRooms: [
        "Crown Hall Grand Banquet",
        "Kanishk Hall Opulent Ballroom",
        "Expansive Celebratory Lawns",
        "Open Rooftop Terrace",
        "Carnations Restaurant",
      ],
      contactPhone: "7080888803",
      contactEmail: "contact@jbgroup.co.in",
      address: "Near CCS International Airport (5.3 km), Raibareli Rd (3.5 km), Lucknow",
    },
  ],
  experiences: [
    {
      title: "Luxury Stays",
      description:
        "Comfortable boutique accommodations at JB Skyhilton and JB Innovation with modern amenities and high-speed connectivity.",
      image: "/images/skyhilton/deluxe_bedroom.png",
      route: "/skyhilton/rooms",
      business: "JB Skyhilton & JB Innovation",
    },
    {
      title: "Fine Dining & Bars",
      description:
        "Epicurean journeys across Skyhilton's 70-guest fine dine, panoramic bar, and JB Innovation's Carnations Restaurant.",
      image: "/images/skyhilton/restaurant_botanical.png",
      route: "/skyhilton/dining",
      business: "JB Skyhilton",
    },
    {
      title: "Artisanal Sweets & Gifting",
      description:
        "Pure desi ghee delicacies, silver-dusted treats, and bespoke velvet gift boxes for festivals and corporate milestones.",
      image: "/images/urban-sweets/sweet_shop_interior_display.png",
      route: "/urban-sweets/sweets-and-bakery",
      business: "Urban Sweets & Bakers",
    },
    {
      title: "Weddings & Grand Receptions",
      description:
        "Enchanting indoor ballrooms, ornate chandelier halls, and verdant open-air lawns for unrepeatable wedding celebrations.",
      image: "/images/innovation/DSC_2803.jpg",
      route: "/jb-innovation/venues",
      business: "JB Innovation",
    },
    {
      title: "Banquets & Terrace Gatherings",
      description:
        "Versatile event venues with LED screens, open skies, and gourmet catering for birthdays, anniversaries, and Sangeets.",
      image: "/images/innovation/modern_rooftop_terrace.png",
      route: "/skyhilton/banquets",
      business: "JB Skyhilton & JB Innovation",
    },
    {
      title: "Corporate Functions & Galas",
      description:
        "Professional meeting spaces, executive VIP halls, state-of-the-art tech, and discrete hospitality for corporate leaders.",
      image: "/images/urban-sweets/banquet_hall_1.jpg",
      route: "/celebrations",
      business: "Across JB Group",
    },
  ],
};
