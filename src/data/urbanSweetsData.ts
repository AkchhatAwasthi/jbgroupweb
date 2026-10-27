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
  tagline: "Restaurant • Artisanal Sweets • Bakery • Banquets",
  subheadline:
    "A premier culinary destination in Lucknow featuring a multi-cuisine family restaurant, pure handcrafted artisanal sweets, European-style bakery creations, bespoke luxury gifting, and an intimate celebration banquet space.",
  heroImage: "/images/urban-sweets/sweet_shop_counter.png",
  restaurantImage: "/images/urban-sweets/restaurant_dining_1.jpg",
  theme: {
    maroon: "#581825",
    cream: "#FAF6F0",
    gold: "#C4A46B",
  },
  overview: {
    title: "About Urban Sweets & Bakers",
    paragraph1:
      "At Urban Sweets & Bakers, we believe that life's sweetest milestones and shared meals deserve extraordinary craftsmanship. Rooted in culinary tradition and elevated by contemporary pastry and culinary arts, our establishment serves as a complete destination for fine dining, traditional confections, and memorable private celebrations.",
    paragraph2:
      "From savory North Indian curries, tandoori delicacies, and vibrant street chaat in our family restaurant, to European-inspired artisanal bakery loaves, 100% pure desi ghee mithai, bespoke festive hampers, and an intimate banquet hall for milestone gatherings, every detail is crafted to leave a lasting impression.",
    complianceNote:
      "Detailed brochure specifications for Urban Sweets & Bakers are currently being curated. Detailed restaurant menus, seasonal sweets catalogs, and banquet capacities can be customized directly upon enquiry.",
  },
  offerings: [
    {
      id: "restaurant",
      title: "Multi-Cuisine Family Restaurant",
      headline: "Authentic North Indian Flavors, Tandoor & Live Chaat",
      description:
        "A warm, sophisticated dining ambiance serving rich North Indian curries, clay-oven tandoori breads and kebabs, authentic street chaat, and chef-curated family meals.",
      image: "/images/urban-sweets/restaurant_dining_1.jpg",
      route: "/urban-sweets#restaurant",
      highlights: [
        "Rich North Indian Curries & Tandoor",
        "Live Street Chaat & Snack Counter",
        "Family-Friendly Ambient Seating",
        "Fresh Chef-Curated Vegetarian Delights",
      ],
    },
    {
      id: "sweets",
      title: "Artisanal Sweets & Mithai",
      headline: "Traditional Craftsmanship, Refined for Today",
      description:
        "Crafted using time-tested recipes, 100% pure desi ghee, premium pistachios, saffron, and almonds. Each confection balances heritage flavor with delicate modern presentation.",
      image: "/images/urban-sweets/sweet_shop_interior_display.png",
      route: "/urban-sweets/sweets-and-bakery#sweets",
      highlights: [
        "Pure Desi Ghee Confections",
        "Kaju & Dry Fruit Specialities",
        "Saffron & Silver Vark Delicacies",
        "Customizable Sweet Platters",
      ],
    },
    {
      id: "banquets",
      title: "Celebration Banquet Venue",
      headline: "Intimate Occasions, Warm Atmosphere & Delightful Food",
      description:
        "A dedicated private banquet space tailored for family milestone celebrations, birthdays, anniversaries, roka ceremonies, and festive gatherings with live in-house catering.",
      image: "/images/urban-sweets/banquet_hall_1.jpg",
      route: "/urban-sweets/banquets",
      highlights: [
        "Intimate indoor celebration setting",
        "Live catering from in-house restaurant kitchen",
        "Warm celebratory lighting & regal decor",
        "Dedicated banquet team & audiovisual support",
      ],
    },
    {
      id: "bakery",
      title: "Gourmet Bakery & Gifting",
      headline: "Artisan Breads, Flaky Pastries & Luxury Hampers",
      description:
        "Freshly baked daily, our bakery blends French patisserie techniques with celebration cakes, viennoiserie, sourdough loaves, and bespoke velvet gifting hampers.",
      image: "/images/urban-sweets/luxury_gift_box_1.png",
      route: "/urban-sweets/sweets-and-bakery#bakery",
      highlights: [
        "Handcrafted Celebration Cakes",
        "French Butter Croissants & Breads",
        "Royal Velvet & Gold Gift Hampers",
        "Corporate & Festive Bulk Orders",
      ],
    },
  ],
  categories: [
    {
      id: "restaurant-menu",
      title: "Restaurant Dining & Gourmet Savories",
      subtitle: "North Indian Curries, Tandoor & Signature Chaat",
      description:
        "Prepared fresh in our hygienic kitchens using pure spices, cold-pressed oils, and farm-fresh ingredients for an unforgettable family meal.",
      image: "/images/urban-sweets/food_dish_1.jpg",
      isPlaceholderData: true,
      sampleItems: [
        {
          name: "Dal Makhani & Shahi Paneer Royal",
          description: "Slow-simmered black lentils cooked overnight with churned butter and cottage cheese in rich tomato-cashew gravy.",
          tag: "Chef Special",
          isCustomizable: true,
        },
        {
          name: "Urban Signature Live Chaat Platter",
          description: "Crispy spinach palak patta chaat, sweet tamarind drizzle, chilled spiced yogurt, and ruby pomegranate pearls.",
          tag: "House Favorite",
          isCustomizable: false,
        },
        {
          name: "Stuffed Amritsari Kulcha & Chole",
          description: "Tandoor-baked flaky leavened bread stuffed with spiced potatoes and herbs, served with authentic pindi chole.",
          tag: "Tandoor Fresh",
          isCustomizable: true,
        },
        {
          name: "Sizzling Veg Kebab Assortment",
          description: "Delicate melt-in-mouth dahi ke kebabs, hara bhara tikki, and char-grilled tandoori malai broccoli.",
          tag: "Signature Starter",
          isCustomizable: true,
        },
      ],
    },
    {
      id: "mithai",
      title: "Artisanal Indian Mithai",
      subtitle: "Pure Desi Ghee & Dry Fruit Delicacies",
      description:
        "Handcrafted in small batches using traditional techniques. Verified recipes and seasonal varieties are tailored for weddings and festive moments.",
      image: "/images/urban-sweets/sweet_shop_counter.png",
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
      image: "/images/urban-sweets/terrace_dining_spread.png",
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
      image: "/images/urban-sweets/luxury_gift_box_2.png",
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
    heroImage: "/images/urban-sweets/banquet_hall_2.jpg",
    galleryImages: [
      "/images/urban-sweets/banquet_hall_1.jpg",
      "/images/urban-sweets/banquet_hall_2.jpg",
      "/images/urban-sweets/banquet_hall_3.jpg",
      "/images/urban-sweets/banquet_hall_4.jpg",
      "/images/urban-sweets/banquet_setup_1.jpg",
      "/images/urban-sweets/banquet_hall_5.jpg",
      "/images/urban-sweets/banquet_hall_6.jpg",
    ],
  },
  contact: {
    notice:
      "Official phone numbers and street location for Urban Sweets & Bakers will be published shortly upon administrative verification. You can place direct enquiries via our online concierge form.",
    email: "contact@jbgroup.co.in",
  },
};
