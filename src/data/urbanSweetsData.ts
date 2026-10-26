export interface SweetsCategory {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  isPlaceholderData: boolean;
  sampleItems: {
    name: string;
    description: string;
    tag: string;
    isCustomizable: boolean;
  }[];
}

export const urbanSweetsData = {
  brandName: "Urban Sweets & Bakers",
  tagline: "Made for Sweet Moments.",
  subheadline:
    "An artisanal destination celebrating pure handcrafted sweets, gourmet bakery creations, bespoke gifting, and an intimate celebration banquet space.",
  heroImage: "/images/urban-sweets/mithai.jpg",
  theme: {
    maroon: "#581825",
    cream: "#FAF6F0",
    gold: "#C4A46B",
  },
  overview: {
    title: "About Urban Sweets & Bakers",
    paragraph1:
      "At Urban Sweets & Bakers, we believe that life's sweetest milestones deserve extraordinary craftsmanship. Rooted in culinary tradition and elevated by contemporary pastry artistry, our creations bring joy to family tables and grand celebrations alike.",
    paragraph2:
      "From time-honored Indian mithai made with pure ingredients to European-inspired artisanal bakery loaves, delicate patisserie, bespoke festive hampers, and an intimate banquet hall for family gatherings, every detail is crafted to leave a lasting impression.",
    complianceNote:
      "Detailed brochure specifications for Urban Sweets & Bakers are currently being curated. Detailed menus, product catalogs, and banquet capacities can be customized directly upon enquiry.",
  },
  offerings: [
    {
      id: "sweets",
      title: "Artisanal Sweets & Mithai",
      headline: "Traditional Craftsmanship, Refined for Today",
      description:
        "Crafted using time-tested recipes, pure desi ghee, premium pistachios, saffron, and almonds. Each confection balances heritage flavor with delicate modern presentation.",
      image: "/images/urban-sweets/mithai.jpg",
      route: "/urban-sweets/sweets-and-bakery#sweets",
      highlights: [
        "Pure Desi Ghee Confections",
        "Kaju & Dry Fruit Specialities",
        "Saffron & Silver Vark Delicacies",
        "Customizable Sweet Platters",
      ],
    },
    {
      id: "bakery",
      title: "Gourmet Bakery & Patisserie",
      headline: "Artisan Breads, Flaky Pastries & Signature Cakes",
      description:
        "Freshly baked daily, our bakery blends French patisserie techniques with crowd-pleasing flavors. From flaky croissants and artisan sourdough to celebration cakes.",
      image: "/images/urban-sweets/bakery.jpg",
      route: "/urban-sweets/sweets-and-bakery#bakery",
      highlights: [
        "Handcrafted Celebration Cakes",
        "French Butter Croissants & Danishes",
        "Artisan Sourdough & Specialty Loaves",
        "Tea Cakes, Tarts & Gourmet Cookies",
      ],
    },
    {
      id: "gifting",
      title: "Festive & Corporate Gifting",
      headline: "Bespoke Hampers in Velvet & Gold",
      description:
        "Make your festive greetings and corporate appreciation memorable. Our custom gift hampers feature royal maroon velvet boxes, gold foil monograms, and curated combinations.",
      image: "/images/urban-sweets/gifting.jpg",
      route: "/urban-sweets/sweets-and-bakery#gifting",
      highlights: [
        "Royal Velvet & Silk Keepsake Packaging",
        "Custom Corporate Branding & Monograms",
        "Curated Mithai, Roasted Nuts & Fine Teas",
        "Nationwide Bulk Delivery Coordination",
      ],
    },
    {
      id: "banquets",
      title: "Celebration Banquet Venue",
      headline: "Intimate Occasions, Warm Atmosphere & Delightful Food",
      description:
        "Urban Sweets & Bakers houses a dedicated banquet venue perfect for family milestone dinners, birthday celebrations, baby showers, and intimate festive gatherings.",
      image: "/images/urban-sweets/banquet.jpg",
      route: "/urban-sweets/banquets",
      highlights: [
        "Intimate indoor celebration setting",
        "Warm celebratory lighting and elegant drapery",
        "In-house live sweets & gourmet catering",
        "Audio and celebration setup assistance",
      ],
    },
  ],
  categories: [
    {
      id: "mithai",
      title: "Artisanal Indian Mithai",
      subtitle: "Pure Desi Ghee & Dry Fruit Delicacies",
      description:
        "Handcrafted in small batches using traditional techniques. Verified recipes and seasonal varieties are tailored for weddings and festive moments.",
      image: "/images/urban-sweets/mithai.jpg",
      isPlaceholderData: true,
      sampleItems: [
        {
          name: "Saffron Pistachio Peda",
          description: "Infused with pure Kashmiri saffron and studded with hand-shelled Iranian pistachios.",
          tag: "Signature",
          isCustomizable: true,
        },
        {
          name: "Silver Leaf Kaju Katli",
          description: "Made from select Goan cashews with genuine silver leaf finish, melt-in-mouth texture.",
          tag: "Classic Favorite",
          isCustomizable: true,
        },
        {
          name: "Dry Fruit Anjeer Barfi",
          description: "Naturally sweetened wild figs, roasted almonds, cashews, and walnuts without added sugar.",
          tag: "Guilt-Free",
          isCustomizable: true,
        },
        {
          name: "Motichoor Motichoor Laddu",
          description: "Fine gram flour beads fried in pure desi ghee, lightly flavored with cardamom.",
          tag: "Auspicious",
          isCustomizable: true,
        },
      ],
    },
    {
      id: "patisserie",
      title: "Gourmet Bakery & Desserts",
      subtitle: "European Techniques, Decadent Flavors",
      description:
        "Our baking studio crafts celebratory centerpieces, fresh viennoiserie, and savory tarts each morning using farm butter and natural ingredients.",
      image: "/images/urban-sweets/bakery.jpg",
      isPlaceholderData: true,
      sampleItems: [
        {
          name: "Signature Belgian Truffle Cake",
          description: "Layers of 54% dark chocolate mousse, chocolate sponge, and velvety ganache glaze.",
          tag: "Celebration Special",
          isCustomizable: true,
        },
        {
          name: "Almond Frangipane Croissant",
          description: "Twice-baked buttery viennoiserie filled with rich almond cream and toasted flakes.",
          tag: "Morning Fresh",
          isCustomizable: false,
        },
        {
          name: "Seasonal Fruit Tartlet",
          description: "Crisp vanilla shortcrust with Madagascar vanilla bean diplomat cream and fresh berries.",
          tag: "Patisserie Classic",
          isCustomizable: true,
        },
        {
          name: "Artisan Sourdough Loaf",
          description: "Naturally fermented for 24 hours, boasting an open airy crumb and blistering crust.",
          tag: "Daily Bread",
          isCustomizable: false,
        },
      ],
    },
    {
      id: "hampers",
      title: "Luxury Gifting Collections",
      subtitle: "For Diwali, Weddings & Corporate Milestones",
      description:
        "Present your greetings with unhurried distinction. Custom hamper boxes are available in royal maroon velvet, linen, and brushed gold metallic finishes.",
      image: "/images/urban-sweets/gifting.jpg",
      isPlaceholderData: true,
      sampleItems: [
        {
          name: "The Royal Heritage Trunk",
          description: "Handcrafted velvet trunk with 4 curated jars of artisanal sweets, salted nuts, and luxury candle.",
          tag: "Premium Corporate",
          isCustomizable: true,
        },
        {
          name: "The Festive Jewel Box",
          description: "Gold hot-stamped rigid drawer box containing assortment of 16 signature dry fruit confections.",
          tag: "Diwali Special",
          isCustomizable: true,
        },
        {
          name: "The Bespoke Wedding Memento",
          description: "Customized wedding invitation hamper with personalized monogram tag and gourmet delights.",
          tag: "Wedding Gifting",
          isCustomizable: true,
        },
      ],
    },
  ] as SweetsCategory[],
  banquetVenue: {
    headline: "An Intimate Setting for Life's Sweetest Celebrations",
    description:
      "The Banquet at Urban Sweets & Bakers is an elegant, warm-toned private venue suited for intimate gatherings, birthday celebrations, engagement functions, and milestone family dinners. Featuring rich drapery, ambient crystal chandeliers, and customized live catering from both our sweets and bakery ateliers.",
    noteOnCapacities:
      "Exact seating capacities and floor plans for the banquet venue are available on request based on table arrangements (cocktail reception vs. formal banquet seating).",
    suitableEvents: [
      "Birthday & Milestone Anniversaries",
      "Engagement Parties & Roka Ceremonies",
      "Baby Showers & Godh Bharai",
      "Intimate Corporate Celebrations & Dinners",
      "Festive Family Get-Togethers",
    ],
    features: [
      "Integrated live bakery & sweets counter options",
      "Warm ambient lighting with regal maroon and gold accents",
      "Customizable dining menu (savory dishes, live chaat & sweets)",
      "Dedicated banquet host and service personnel",
    ],
    heroImage: "/images/urban-sweets/banquet.jpg",
  },
  contact: {
    notice:
      "Official phone numbers and street location for Urban Sweets & Bakers will be published shortly upon administrative verification. You can place direct enquiries via our online concierge form.",
    email: "contact@jbgroup.co.in",
  },
};
