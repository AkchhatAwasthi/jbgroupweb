export interface SkyhiltonRoom {
  id: string;
  name: string;
  headline: string;
  description: string;
  image: string;
  amenities: string[];
  features: string[];
  idealFor: string;
}

export interface SkyhiltonDiningVenue {
  id: string;
  name: string;
  capacity: string;
  type: string;
  headline: string;
  description: string;
  cuisineOrHighlights: string[];
  heroImage: string;
  galleryImages: string[];
}

export interface SkyhiltonBanquetVenue {
  id: string;
  name: string;
  capacity: string;
  capacityNote?: string;
  setting: string;
  headline: string;
  description: string;
  suitableEvents: string[];
  features: string[];
  heroImage: string;
  galleryImages: string[];
}

export const skyhiltonData = {
  brandName: "JB Skyhilton",
  tagline: "Your Stay. Your Celebration. Your Skyhilton.",
  subheadline:
    "A refined boutique hotel and premier culinary destination in LDA Colony, Lucknow.",
  heroImage: "/images/skyhilton/rooftop_terrace.png",
  overview: {
    title: "About JB Skyhilton",
    description:
      "The JB Skyhilton is a privately owned hotel taking deep pride in offering personal, efficient, and competitive services at all times. Whether your visit is for business or leisure, we offer reasonably priced Bed & Breakfast accommodation alongside an elegant upscale Bar, a 70-guest Fine Dine Restaurant, multiple Banquet spaces, and a welcoming Café.",
    stats: [
      { label: "Boutique Rooms", value: "27" },
      { label: "Fine Dine Capacity", value: "70 Guests" },
      { label: "Panoramic Bar", value: "70 Guests" },
      { label: "Banquets & Decks", value: "4 Distinct Venues" },
    ],
    hotelPolicies: {
      checkIn: "14:00 hrs (2:00 PM)",
      checkOut: "12:00 hrs (12:00 PM)",
      expressCheckIn: "Available on request",
      petPolicy: "Pets are not allowed on property premises",
      tariffNote:
        "Room tariffs vary seasonally and by event calendar. Please request a personalized booking quotation for current rates.",
    },
    amenities: [
      "High-Speed Wi-Fi Internet Access",
      "Direct Dial In-Room Telephones",
      "Flat Screen Satellite Television",
      "Tea & Coffee Making Facilities",
      "24-Hour Room Service & Housekeeping",
      "Express Check-In Facilities",
      "Complimentary Toiletries & Guest Amenities",
      "Valet & Private Parking Assistance",
    ],
  },
  rooms: [
    {
      id: "standard-room",
      name: "Standard Room",
      headline: "Essential Comfort & Modern Elegance",
      description:
        "Tastefully appointed for the discerning solo business traveler or couple seeking quiet sophistication and modern conveniences in Lucknow.",
      image: "/images/skyhilton/standard_room.png",
      amenities: [
        "High-Speed Wi-Fi",
        "Flat Screen TV",
        "Tea/Coffee Maker",
        "Direct Dial Telephone",
        "Air Conditioning",
      ],
      features: ["Tasteful modern interior", "Work desk", "Ensuite bathroom"],
      idealFor: "Business Travelers & Short Stays",
    },
    {
      id: "elite-room",
      name: "Elite Room",
      headline: "Elevated Ambiance with Bespoke Touches",
      description:
        "Crafted for travelers desiring extra comfort, featuring enhanced decor, premium bedding, and a peaceful ambiance for unwinding after a productive day.",
      image: "/images/skyhilton/elite_lounge.png",
      amenities: [
        "High-Speed Wi-Fi",
        "Smart TV",
        "Tea/Coffee Maker",
        "Direct Dial Telephone",
        "Premium Toiletries",
      ],
      features: ["Premium linens", "Comfortable lounge chair", "Quiet floor location"],
      idealFor: "Corporate Executives & Leisure Guests",
    },
    {
      id: "deluxe-room",
      name: "Deluxe Room",
      headline: "Generous Space & Luxurious Appointments",
      description:
        "Our Deluxe Rooms offer generous living proportions, rich upholstery, large windows with urban views, and thoughtful amenities designed for restful luxury.",
      image: "/images/skyhilton/deluxe_bedroom.png",
      amenities: [
        "High-Speed Wi-Fi",
        "Large LED TV",
        "Tea/Coffee Station",
        "Electronic Safe",
        "Plush Bathrobes",
      ],
      features: ["Spacious king/twin layout", "Seating nook", "Walk-in shower"],
      idealFor: "Couples, Families & Extended Stays",
    },
    {
      id: "suite",
      name: "Suite",
      headline: "The Pinnacle of Skyhilton Hospitality",
      description:
        "The most distinguished accommodation at JB Skyhilton, offering an expansive separate living lounge, luxurious master bedroom, and bespoke personalized service.",
      image: "/images/skyhilton/suite_retreat.png",
      amenities: [
        "High-Speed Wi-Fi",
        "Dual Large Smart TVs",
        "Nespresso/Gourmet Coffee",
        "Private Lounge",
        "Luxury Bathroom Amenities",
      ],
      features: ["Dedicated living room", "Panoramic views", "VIP check-in treatment"],
      idealFor: "VIP Dignitaries, Wedding Families & Celebrations",
    },
  ] as SkyhiltonRoom[],
  dining: [
    {
      id: "fine-dine",
      name: "Fine Dine Restaurant",
      capacity: "70 Guests (70 PAX)",
      type: "Fine Dining & Multi-Cuisine",
      headline: "An Exquisite Culinary Experience in an Elegant Ambiance",
      description:
        "Our premium fine dining restaurant offers an exquisite culinary experience with a seating capacity of 70 guests. The perfect setting for intimate gatherings, family dinners, and special celebrations. Our menu features a blend of authentic flavors crafted with the finest ingredients to ensure a delightful dining experience—featuring North Indian delicacies, continental delights, and chef's special creations.",
      cuisineOrHighlights: [
        "Authentic North Indian Delicacies & Rich Curries",
        "Continental Classics & Global Entrées",
        "Chef's Signature Gourmet Creations",
        "Family Dining & Private Table Reservations",
      ],
      heroImage: "/images/skyhilton/restaurant_botanical.png",
      galleryImages: [
        "/images/skyhilton/courtyard_dining.png",
        "/images/skyhilton/rooftop_terrace.png",
        "/images/skyhilton/restaurant_botanical.png",
      ],
    },
    {
      id: "the-bar",
      name: "The Bar",
      capacity: "70 Guests (70 PAX)",
      type: "Lounge Bar & Cocktails",
      headline: "Elevated Luxury with Panoramic Views",
      description:
        "The Bar offers an elegant and vibrant experience with panoramic views, ambient music, and an atmosphere that defines elevated luxury. Indulge in our signature premium beverages, handcrafted cocktails, and an upscale collection of spirits. Whether planning a private party, corporate event, or a casual evening with friends, we ensure top-notch service.",
      cuisineOrHighlights: [
        "Handcrafted Signature Cocktails & Mixology",
        "Upscale Spirits & Beverage Collection",
        "Panoramic Urban Sunset Views",
        "Private Parties & Corporate Evenings",
      ],
      heroImage: "/images/skyhilton/bar_rooftop_lounge.png",
      galleryImages: [
        "/images/skyhilton/bar_wooden_lounge.png",
        "/images/skyhilton/bar_dusk.png",
        "/images/skyhilton/bar_neon_lounge.png",
        "/images/skyhilton/bar_rooftop_lounge.png",
      ],
    },
    {
      id: "cafe",
      name: "Elegant Café",
      capacity: "20 to 25 Guests (20–25 PAX)",
      type: "Boutique Café & Casual Dining",
      headline: "Warm Moments, Artisan Coffee & Gourmet Fare",
      description:
        "Whether it is an intimate celebration, informal business meeting, or casual get-together, enjoy delicious gourmet food, refreshing beverages, and a warm ambiance. Our dedicated team ensures every detail is taken care of, making your moments truly special for intimate gatherings of 20–25 guests.",
      cuisineOrHighlights: [
        "Artisanal Brews & Gourmet Refreshments",
        "Boutique Light Bites & Savories",
        "Warm, Intimate Seating Setting",
        "Perfect for Quick Meets & Private Brunches",
      ],
      heroImage: "/images/skyhilton/cafe_velvet.png",
      galleryImages: [
        "/images/skyhilton/courtyard_dining.png",
        "/images/skyhilton/rooftop_terrace.png",
        "/images/skyhilton/cafe_velvet.png",
      ],
    },
  ] as SkyhiltonDiningVenue[],
  banquets: [
    {
      id: "infinity-hall",
      name: "Infinity Hall",
      capacity: "80–100 Guests",
      setting: "Indoor Air-Conditioned Banquet Hall",
      headline: "Sophisticated Banqueting with Authentic North Indian Cuisine",
      description:
        "Infinity Hall provides an immaculate indoor venue capable of accommodating 80 to 100 guests. Celebrated for lavish buffets featuring authentic North Indian cuisine—from rich curries to tandoori delights and signature biryanis—it turns every celebration, engagement, or corporate seminar into a memorable milestone.",
      suitableEvents: [
        "Engagement Ceremonies",
        "Anniversaries & Milestone Birthdays",
        "Corporate Seminars & Dinners",
        "Family Get-Togethers",
      ],
      features: [
        "Seating up to 100 guests comfortably",
        "Full buffet banquet setup",
        "Integrated audio system and stage options",
        "Customized tandoori & biryani banquet menus",
      ],
      heroImage: "/images/skyhilton/courtyard_dining_atrium.png",
      galleryImages: [
        "/images/skyhilton/courtyard_dining_atrium.png",
        "/images/skyhilton/courtyard_dining.png",
        "/images/skyhilton/restaurant_botanical.png",
      ],
    },
    {
      id: "open-terrace",
      name: "Open Terrace Event Space",
      capacity: "50–70 Guests (50–70 PAX)",
      setting: "Open-Air Terrace with Big LED Wall",
      headline: "Chic Rooftop Celebrations under Lucknow's Skies",
      description:
        "The perfect venue for your special occasions, offering a stylish and elegant banquet space with a Big LED wall. Accommodating 50 to 70 guests, it seamlessly hosts birthday parties, corporate gatherings, wedding celebrations, and cocktail receptions with top-notch catering and impeccable service.",
      suitableEvents: [
        "Cocktail & Sangeet Evenings",
        "High-Profile Birthday Celebrations",
        "Corporate Product Showcases & Screenings",
        "Festive Parties & Dandiya/New Year Celebrations",
      ],
      features: [
        "High-definition Big LED Wall for visual presentations & media",
        "Open-air rooftop ambiance with mood lighting",
        "50 to 70 PAX capacity layout",
        "Direct bar and cocktail catering service",
      ],
      heroImage: "/images/skyhilton/rooftop_terrace.png",
      galleryImages: [
        "/images/skyhilton/bar_dusk.png",
        "/images/skyhilton/rooftop_terrace.png",
        "/images/skyhilton/bar_wooden_lounge.png",
      ],
    },
    {
      id: "vip-hall",
      name: "VIP Hall",
      capacity: "30–50 Guests",
      capacityNote:
        "Flexible 30–50 guests configuration subject to seating arrangement.",
      setting: "Exclusive Private VIP Lounge & Dining",
      headline: "Discreet Luxury & Private VIP Dining",
      description:
        "JB Skyhilton offers an exclusive Private VIP Dining & Event Experience for 30 to 50 guests, perfect for elite gatherings, high-level corporate meets, and intimate celebrations. Enjoy luxurious ambiance, personalized service, and mixed cuisine in a private setting designed for comfort and elegance.",
      suitableEvents: [
        "Private VIP Dinners & Conclaves",
        "Board Meetings & Executive Dinners",
        "Intimate Family Milestone Celebrations",
        "Diplomatic & Elite Receptions",
      ],
      features: [
        "Dedicated discreet service personnel",
        "Customized chef-curated mixed cuisine menus",
        "Plush executive decor and acoustic privacy",
        "Configurable for sit-down dinner or lounge meeting",
      ],
      heroImage: "/images/skyhilton/bar_wooden_lounge.png",
      galleryImages: [
        "/images/skyhilton/bar_wooden_lounge.png",
        "/images/skyhilton/bar_neon_lounge.png",
        "/images/skyhilton/elite_lounge.png",
      ],
    },
    {
      id: "upper-deck",
      name: "Upper Deck",
      capacity: "60 Guests (60 PAX)",
      setting: "Premium Rooftop Venue with City Views",
      headline: "Celebrate in Style with Panoramic City Skylines",
      description:
        "JB Skyhilton's Upper Deck is a premium rooftop venue designed for exclusive gatherings of up to 60 guests. Whether hosting a birthday party, anniversary, corporate evening, or private celebration, its elegant ambiance and open-air setting create an unforgettable backdrop paired with gourmet cuisine.",
      suitableEvents: [
        "Sunset Cocktail Parties",
        "Anniversary Celebrations",
        "Corporate Mixers & Networking",
        "Private Evening Functions",
      ],
      features: [
        "Up to 60 guests capacity",
        "Stunning panoramic city views",
        "Open-air breeze with designer shade structures",
        "Specialty gourmet cocktail catering",
      ],
      heroImage: "/images/skyhilton/bar_rooftop_lounge.png",
      galleryImages: [
        "/images/skyhilton/bar_rooftop_lounge.png",
        "/images/skyhilton/bar_wooden_lounge.png",
        "/images/skyhilton/rooftop_terrace.png",
      ],
    },
  ] as SkyhiltonBanquetVenue[],
  contact: {
    roomBookings: "7080888807",
    partyBookings: "7080888838",
    email: "reservations@skyhilton.co.in",
    address: "Sector B, Bargawan, LDA Colony, Lucknow – 226012, Uttar Pradesh",
    googleMapsQuery:
      "JB+Skyhilton+Sector+B+Bargawan+LDA+Colony+Lucknow+226012",
  },
};
