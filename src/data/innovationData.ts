export interface InnovationVenue {
  id: string;
  name: string;
  setting: string;
  headline: string;
  description: string;
  suitableEvents: string[];
  features: string[];
  heroImage: string;
  galleryImages: string[];
}

export interface InnovationRoom {
  id: string;
  name: string;
  carpetArea: string;
  headline: string;
  description: string;
  amenities: string[];
  features: string[];
  image: string;
}

export const innovationData = {
  brandName: "JB Innovation",
  tagline: "Where Every Celebration Finds Its Setting.",
  subheadline:
    "Thoughtfully designed spaces for weddings, grand celebrations, corporate gatherings and unforgettable occasions.",
  heroImage: "/images/innovation/grand_jali_entrance.png",
  overview: {
    title: "About JB Innovation",
    paragraph1:
      "Where elegance meets tradition, and comfort blends seamlessly with luxury. Thoughtfully designed to offer guests an experience that is both indulgent and culturally enriching.",
    paragraph2:
      "Nestled amidst expansive green lawns and adorned with beautifully crafted banquet halls, we provide the perfect setting for celebrations, gatherings, and memorable events. Whether it's a grand wedding, a corporate function, or an intimate family occasion, our versatile spaces are tailored to create unforgettable moments.",
    paragraph3:
      "At JB Innovation, luxury is not just about opulence—it is about creating a holistic experience where tradition and modernity coexist beautifully. Whether you are here to celebrate, relax, or simply escape the ordinary, we promise an ambiance that is refined, welcoming, and deeply rooted in cultural richness.",
  },
  venues: [
    {
      id: "crown-hall",
      name: "Crown Hall",
      setting: "Grand Indoor Banquet Hall",
      headline: "Grandeur, Golden Illuminations & Regal Celebrations",
      description:
        "The Crown Hall exudes grandeur with its well-lit interiors, where golden lights reflect off polished floors and rich drapery, while ornate chandeliers sparkle against intricately designed ceilings. A lavish buffet stretches elegantly along one side, featuring gleaming silverware, vibrant floral arrangements, and gourmet delicacies that entice the senses. At the far end, the stage stands adorned with velvet backdrops, cascading flowers, and subtle spotlighting, creating a perfect setting for weddings, galas, or corporate celebrations.",
      suitableEvents: [
        "Grand Wedding Receptions",
        "Engagement & Ring Ceremonies",
        "High-Profile Corporate Galas & Award Nights",
        "Large Family Celebrations",
      ],
      features: [
        "Polished floors reflecting warm golden chandeliers",
        "Lavish buffet counters with premium silverware presentation",
        "Decorated stage with velvet backdrops & floral installations",
        "Acoustically balanced interior architecture",
      ],
      heroImage: "/images/innovation/DSC_2803.jpg",
      galleryImages: [
        "/images/innovation/DSC_2803.jpg",
        "/images/innovation/DSC_1975.jpg",
        "/images/innovation/DSC_1977.jpg",
        "/images/innovation/DSC_1847.jpg",
      ],
    },
    {
      id: "kanishk-hall",
      name: "Kanishk Hall",
      setting: "Opulent Ballroom with Marble Flooring & Stylish Bar",
      headline: "Expansive Elegance & Mirrored Sophistication",
      description:
        "The Kanishk Hall is expansive and opulent, illuminated by warm, well-lit interiors that highlight its grandeur. Sparkling chandeliers hang from intricately designed ceilings, while mirrored walls reflect the glow, enhancing the sense of space and elegance. Luxurious marble flooring stretches across the hall, complementing lavish buffet setups adorned with silverware and floral accents. A stylish bar setup adds sophistication, offering guests a refined space to unwind.",
      suitableEvents: [
        "Weddings & Sangeet Evenings",
        "Cocktail Dinners & Corporate Mixers",
        "Milestone Anniversaries & Receptions",
        "Annual Corporate Conclaves",
      ],
      features: [
        "Luxurious imported marble flooring",
        "Mirrored walls accentuating expansive visual depth",
        "Integrated stylish bar setup for premium cocktail service",
        "Ornate chandeliers and custom stage lighting",
      ],
      heroImage: "/images/innovation/DSC_1977.jpg",
      galleryImages: [
        "/images/innovation/DSC_1977.jpg",
        "/images/innovation/DSC_1973.jpg",
        "/images/innovation/4th.jpg",
        "/images/innovation/1st.jpg",
      ],
    },
    {
      id: "lawns-and-banquets",
      name: "Lawns & Banquets",
      setting: "Expansive Landscaped Green Lawns & Adjoining Halls",
      headline: "Grandeur and Serenity in Nature's Embrace",
      description:
        "Beyond indoor accommodation, we pride ourselves on offering an environment that celebrates both grandeur and serenity. The lush lawns invite you to unwind in nature's embrace, while the adjoining banquet halls stand ready to host your most cherished occasions with elegance and flair. Our commitment to excellence is reflected in personalized service, attention to detail, and a dedication to making every guest feel valued.",
      suitableEvents: [
        "Open-Air Wedding Ceremonies (Varmala & Pheras)",
        "Grand Evening Receptions under the Stars",
        "Large-Scale Cultural Festivals & Melas",
        "Corporate Lawn Meets & Exhibitions",
      ],
      features: [
        "Manicured green celebration turf",
        "Seamless connectivity between outdoor lawns and indoor halls",
        "Grand illuminated entrance pathways",
        "Ample staging space for grand thematic sets and Mandap design",
      ],
      heroImage: "/images/innovation/DSC_1959.jpg",
      galleryImages: [
        "/images/innovation/DSC_1959.jpg",
        "/images/innovation/DSC_1980.jpg",
        "/images/innovation/DSC_2102.jpg",
        "/images/innovation/DSC_1963.jpg",
        "/images/innovation/1.jpg",
      ],
    },
    {
      id: "open-terrace",
      name: "Open Terrace",
      setting: "Rooftop Open-Air Venue with Skyline Backdrop",
      headline: "Bespoke Ceremonies Under Open Skies",
      description:
        "Elevate your celebrations at our premier open-air rooftop terrace, the ultimate venue for unforgettable gatherings. Whether you are planning a vibrant Mehndi, a joyful Haldi ceremony, an energetic Sangeet, or an intimate get-together, our terrace provides the perfect backdrop of open skies and panoramic views. Our team offers a completely customizable canvas, allowing you to bring your dream theme to life—whether bohemian florals, traditional ethnic decor, or modern minimalist aesthetics.",
      suitableEvents: [
        "Vibrant Haldi & Mehndi Functions",
        "Energetic Sangeet & Musical Nights",
        "Intimate Family Brunches & Dinners",
        "Private Sundowner Celebrations",
      ],
      features: [
        "Panoramic city skyline backdrop",
        "Completely customizable canvas (boho, ethnic, minimalist)",
        "Airy, spacious open-air setting",
        "Dedicated bridal party & family celebration zone",
      ],
      heroImage: "/images/innovation/modern_rooftop_terrace.png",
      galleryImages: [
        "/images/innovation/modern_rooftop_terrace.png",
        "/images/innovation/DSC_1965.jpg",
        "/images/innovation/DSC_1955.jpg",
        "/images/innovation/DSC_1954.jpg",
        "/images/innovation/DSC_1953.jpg",
      ],
    },
  ] as InnovationVenue[],
  accommodation: {
    headline: "Experience Luxury & Comfort",
    description:
      "Our premium rooms are a sanctuary of sophistication, combining modern amenities with timeless charm. Each room is curated to deliver the highest level of comfort, ensuring that every guest feels pampered and at ease. The interiors reflect a harmonious balance of contemporary design and ethnic vibes, creating an atmosphere that resonates with warmth and authenticity.",
    rooms: [
      {
        id: "deluxe-room",
        name: "Deluxe Room",
        carpetArea: "180 Sq. Ft.",
        headline: "Thoughtfully Curated Sanctuaries for Wedding & Leisure Guests",
        description:
          "Tastefully designed 180 sq. ft. room blending contemporary amenities with ethnic warmth, offering an ideal haven for wedding guests, families, and travelers.",
        amenities: [
          "Electric Kettle & Tea/Coffee Selection",
          "Complimentary Water Bottles",
          "Luxury Soaps & Body Wash",
          "Grooming Essentials Kit",
          "Safety Locker",
          "Luxurious Interior & Custom Furnishing",
        ],
        features: [
          "180 Sq. Ft. carpet area",
          "Air conditioning with climate control",
          "High-speed Wi-Fi",
          "Ensuite bathroom with premium fittings",
        ],
        image: "/images/innovation/DSC_0739.jpg",
      },
      {
        id: "executive-room",
        name: "Executive Room",
        carpetArea: "250 Sq. Ft. with Dedicated Lounge Area",
        headline: "Expansive Space, Private Lounge & Enhanced Luxury",
        description:
          "Spanning 250 sq. ft., our Executive Rooms feature an integrated private lounge area, upgraded furnishings, and extra space tailored for bridal preparations and executive VIPs.",
        amenities: [
          "Dedicated Lounge Area with Comfortable Seating",
          "Electric Kettle & Tea/Coffee Station",
          "Complimentary Bottled Spring Water",
          "Luxury Soaps & Body Wash",
          "Grooming Essentials Kit",
          "In-Room Safety Locker",
          "Luxurious Ethnic-Contemporary Furnishings",
        ],
        features: [
          "250 Sq. Ft. expansive carpet layout",
          "Private sitting / lounge area",
          "Ideal for bridal prep and VIP host families",
          "High-speed Wi-Fi and premium entertainment",
        ],
        image: "/images/innovation/DSC_0747.jpg",
      },
    ] as InnovationRoom[],
  },
  dining: {
    name: "Carnations Restaurant",
    headline: "Refined Dining & Sophisticated Social Gatherings",
    description:
      "Experience an atmosphere of refined elegance and warmth at Carnations, the destination for sophisticated social gatherings and delightful dining. Designed with a meticulous eye for detail, our restaurant features premium, high-end styling combined with tasteful, contemporary décor that creates an inviting backdrop for every occasion. Bathed in soft, flattering, and expertly designed ambient lighting, Carnations offers a bright, airy, and luxurious space that ensures you feel both comfortable and celebrated from the moment you step through our doors.",
    highlights: [
      "Soft, Flattering Ambient Lighting Architecture",
      "Tasteful Contemporary Décor with Ethnic Flair",
      "Spacious Seating for Social Banquets & Family Feasts",
      "Master Chef Curated Indian & Global Menus",
    ],
    heroImage: "/images/innovation/carnations_restaurant.png",
    galleryImages: [
      "/images/innovation/carnations_restaurant.png",
      "/images/innovation/carnations_hero.png",
    ],
  },
  connectivity: [
    {
      landmark: "Chaudhary Charan Singh International Airport, Amausi, Lucknow",
      distance: "5.3 km",
      time: "~12 mins",
      note: "Prompt transit for out-of-town wedding guests and VIP attendees",
    },
    {
      landmark: "Raibareli Road",
      distance: "3.5 km",
      time: "~8 mins",
      note: "Direct arterial connectivity to Lucknow city corridors",
    },
    {
      landmark: "Ashiyana",
      distance: "3.0 km",
      time: "~7 mins",
      note: "Immediate proximity to leading residential & commercial hubs",
    },
    {
      landmark: "Krishnanagar Metro Station",
      distance: "6.0 km",
      time: "~15 mins",
      note: "Rapid rapid-transit connection across Lucknow",
    },
  ],
  contact: {
    phones: ["7080888803", "7080888847"],
    email: "contact@jbgroup.co.in",
    social: {
      instagram: "https://instagram.com",
    },
  },
  weddingGallery: [
    {
      src: "/images/innovation/DSC_2803.jpg",
      title: "Crown Hall Crystal Ballroom",
      category: "Ballroom",
      caption: "Grand crystal ceiling chandeliers and lavish banquet table seating",
    },
    {
      src: "/images/innovation/DSC_1975.jpg",
      title: "Grand Floral Entrance Arch",
      category: "Entrance",
      caption: "Golden filigree archway adorned with fresh cascading floral installations",
    },
    {
      src: "/images/innovation/DSC_1977.jpg",
      title: "Triple Arch Royal Stage",
      category: "Stage",
      caption: "Regal floral arches with warm crystal chandeliers and red runner",
    },
    {
      src: "/images/innovation/DSC_1847.jpg",
      title: "Bridal Chaise & Rose Wall",
      category: "Stage",
      caption: "Lush rose floral wall backdrop with velvet chaise lounge and gold drapes",
    },
    {
      src: "/images/innovation/DSC_1980.jpg",
      title: "Varmala Mandap Canopy",
      category: "Mandap",
      caption: "Hanging floral strings, crystal pendants and royal ceremonial chairs",
    },
    {
      src: "/images/innovation/DSC_1959.jpg",
      title: "VIP Lawns Canopy Lounge",
      category: "Lawns",
      caption: "Curved velvet sofas, patio heaters, and intimate outdoor celebration setting",
    },
    {
      src: "/images/innovation/DSC_2102.jpg",
      title: "Evening Celebration Lawns",
      category: "Lawns",
      caption: "Illuminated nighttime gala on manicured celebration lawns with gourmet buffet",
    },
    {
      src: "/images/innovation/DSC_1973.jpg",
      title: "Pre-Function Welcome Foyer",
      category: "Entrance",
      caption: "Illuminated entryway and floral welcome portal to banquet halls",
    },
    {
      src: "/images/innovation/DSC_1965.jpg",
      title: "Open Rooftop Celebration Deck",
      category: "Terrace",
      caption: "Panoramic open-air venue ideal for Haldi, Mehndi, and musical sundowners",
    },
    {
      src: "/images/innovation/DSC_1963.jpg",
      title: "Garden Walkway & Evening Lounge",
      category: "Lawns",
      caption: "Festive celebration pathway flanked by illuminated lawn lounges",
    },
    {
      src: "/images/innovation/DSC_0747.jpg",
      title: "Executive Suite Private Lounge",
      category: "Stay",
      caption: "250 sq ft suite featuring dedicated leather sofa lounge & entertainment center",
    },
    {
      src: "/images/innovation/DSC_0739.jpg",
      title: "Deluxe Guest Room",
      category: "Stay",
      caption: "180 sq ft modern sanctuary with warm ethnic wood accents and king bed",
    },
    {
      src: "/images/innovation/DSC_9767.jpg",
      title: "Luxury Tufted Guest Suite",
      category: "Stay",
      caption: "Plush tufted headboard, warm sconce lighting and premium amenities",
    },
    {
      src: "/images/innovation/4th.jpg",
      title: "Gourmet Banquet Buffet",
      category: "Ballroom",
      caption: "Lavish silverware spread and multi-cuisine culinary presentation",
    },
  ],
};
