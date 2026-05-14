export type Subcategory = {
  id: string;
  name: string;
  image: string;
  description: string;
  benefits: string[];
  materials: string[];
};

export type Category = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  heroImage: string;
  subcategories: Subcategory[];
};

const img = (id: string) =>
  `https://images.unsplash.com/${id}?w=1200&h=800&q=80&auto=format&fit=crop`;

export const categories: Category[] = [
  {
    slug: "modular-kitchen",
    title: "Modular Kitchens",
    tagline: "7 styles, endless possibilities",
    description:
      "From compact parallel kitchens to statement islands — engineered for Delhi homes with durable materials and refined detailing.",
    heroImage: img("photo-1556909114-f6e7ad7d3136"),
    subcategories: [
      {
        id: "l-shaped",
        name: "L-Shaped Kitchen",
        image: img("photo-1600566753190-17f0baa2a6c3"),
        description:
          "Classic L layouts maximise corner space while keeping the work triangle efficient for daily cooking.",
        benefits: [
          "Ideal for open plans",
          "Generous counter run",
          "Flexible tall unit placement",
        ],
        materials: ["BWR ply", "Anti-bacterial laminate", "Soft-close hardware"],
      },
      {
        id: "u-shaped",
        name: "U-Shaped Kitchen",
        image: img("photo-1600585154340-be6161a56a0c"),
        description:
          "Maximum storage and counter space on three sides — perfect for passionate home cooks.",
        benefits: [
          "Heavy storage capacity",
          "Defined cooking zones",
          "Optional breakfast ledge",
        ],
        materials: ["Marine ply options", "Quartz counters", "Premium handles"],
      },
      {
        id: "island",
        name: "Island Kitchen",
        image: img("photo-1600585154526-990dced4db0d"),
        description:
          "A sculptural island becomes the social heart — seating, prep, and storage in one statement piece.",
        benefits: [
          "Entertaining-friendly",
          "Extra prep surface",
          "Designer focal point",
        ],
        materials: ["Waterfall quartz", "Feature lighting", "Accent laminate"],
      },
      {
        id: "parallel",
        name: "Parallel Kitchen",
        image: img("photo-1556911220-e15b29be8c8f"),
        description:
          "Two sleek runs facing each other — the smart choice for narrow Delhi galley spaces.",
        benefits: [
          "Efficient circulation",
          "Budget-smart",
          "Fast installation cycles",
        ],
        materials: ["Compact laminates", "Space-saving hardware", "Tandem drawers"],
      },
      {
        id: "modern",
        name: "Modern Kitchen",
        image: img("photo-1600210492486-724fe5c67fb0"),
        description:
          "Handle-less profiles, crisp lines, and integrated appliances for a gallery-like kitchen.",
        benefits: ["Minimal visual noise", "Easy-clean surfaces", "Integrated appliances"],
        materials: ["Matte & super-matt finishes", "Gola profiles", "LED profiles"],
      },
      {
        id: "luxury",
        name: "Luxury Kitchen",
        image: img("photo-1600607687939-ce8a6c25118c"),
        description:
          "Rich veneers, stone accents, and bespoke details for homes that demand a showroom finish.",
        benefits: ["Bespoke detailing", "Premium appliances", "Statement materials"],
        materials: ["Natural veneers", "Imported hardware", "Stone cladding"],
      },
      {
        id: "compact",
        name: "Compact Kitchen",
        image: img("photo-1600566752355-35792bedcfea"),
        description:
          "Every inch planned — wall cabinets, carousel units, and slim profiles for compact flats.",
        benefits: ["Space-saving carousels", "Vertical storage", "Smart corners"],
        materials: ["High-gloss laminates", "Slim tandem boxes", "Pull-out pantry"],
      },
    ],
  },
  {
    slug: "interiors",
    title: "Home Interiors",
    tagline: "Every room, perfectly designed",
    description:
      "Living, dining, bedrooms, and studies — cohesive palettes, lighting layers, and crafted joinery.",
    heroImage: img("photo-1586023492125-27b2c045efd7"),
    subcategories: [
      {
        id: "living",
        name: "Living Room",
        image: img("photo-1618221195710-dd6b41faaea6"),
        description:
          "TV walls, display units, and seating layouts tuned for family life and entertaining.",
        benefits: ["Feature walls", "Concealed wiring", "Layered lighting"],
        materials: ["Veneer & laminate mix", "Profile lighting", "Soft furnishings"],
      },
      {
        id: "bedroom",
        name: "Bedroom",
        image: img("photo-1615529328331-f8917597711f"),
        description:
          "Bed back walls, wardrobes, and bedside niches for calm, clutter-free bedrooms.",
        benefits: ["Integrated storage", "Mood lighting", "Acoustic comfort"],
        materials: ["Textured laminates", "Upholstered panels", "Blackout blinds"],
      },
      {
        id: "tv-unit",
        name: "TV Unit",
        image: img("photo-1600585154363-67eb9e2e2099"),
        description:
          "Fluted, reeded, or flat-panel TV walls with display and closed storage balance.",
        benefits: ["Cable management", "Display + hide storage", "Custom proportions"],
        materials: ["Fluted MDF", "Glass shelves", "LED channels"],
      },
      {
        id: "study",
        name: "Study Room",
        image: img("photo-1497366216548-37526070297c"),
        description:
          "Focused work surfaces, book storage, and pin-up space for home offices.",
        benefits: ["Ergonomic desk height", "Task lighting", "Book walls"],
        materials: ["Matte laminates", "Pin-board panels", "Cable grommets"],
      },
      {
        id: "office",
        name: "Office",
        image: img("photo-1497366754035-f200968a6e72"),
        description:
          "Professional cabinetry for small business owners working from Delhi homes.",
        benefits: ["Storage-first", "Brand-neutral palette", "Durable tops"],
        materials: ["Commercial-grade laminate", "Metal legs", "Wire managers"],
      },
      {
        id: "dining",
        name: "Dining Room",
        image: img("photo-1600210491892-03d3c3494bfd"),
        description:
          "Crockery units, buffet counters, and ceiling treatments that frame shared meals.",
        benefits: ["Display crockery", "Serving counters", "Warm lighting"],
        materials: ["Glass shutters", "Stone tops", "PU paint accents"],
      },
    ],
  },
  {
    slug: "wardrobes",
    title: "Wardrobes",
    tagline: "Smart storage, elegant finish",
    description:
      "Sliding, hinged, walk-in, and glass wardrobes tailored to ceiling heights and habits.",
    heroImage: img("photo-1558618666-fcd25c85cd64"),
    subcategories: [
      {
        id: "sliding",
        name: "Sliding Wardrobes",
        image: img("photo-1600585154526-990dced4db0d"),
        description:
          "Smooth aluminium systems with soft-close and mirror options for tight bedrooms.",
        benefits: ["No swing clearance", "Mirror options", "Large door panels"],
        materials: ["Imported sliding systems", "Safety glass", "Anti-jump rollers"],
      },
      {
        id: "walk-in",
        name: "Walk-in Wardrobes",
        image: img("photo-1600566752355-35792bedcfea"),
        description:
          "Dressing islands, shoe walls, and open + closed storage for collector wardrobes.",
        benefits: ["Zoned storage", "Island dresser", "Accessory drawers"],
        materials: ["Leather handles", "Glass partitions", "Woodgrain laminates"],
      },
      {
        id: "hinged",
        name: "Hinged Wardrobes",
        image: img("photo-1616594039964-ae9021a400a0"),
        description:
          "Classic swing doors with internal fittings — ties, trays, and long-hang zones.",
        benefits: ["Full access opening", "Internal accessories", "Quiet hinges"],
        materials: ["Soft-close hinges", "Tandem interiors", "Edge-banded doors"],
      },
      {
        id: "glass-door",
        name: "Glass Door",
        image: img("photo-1600210492486-724fe5c67fb0"),
        description:
          "Tinted or clear glass fronts for display wardrobes in master suites.",
        benefits: ["Visual lightness", "Display mode", "Premium feel"],
        materials: ["Aluminium profiles", "Toughened glass", "LED profiles"],
      },
    ],
  },
  {
    slug: "appliances",
    title: "Kitchen Appliances",
    tagline: "Top brands, best prices",
    description:
      "Chimneys, cooktops, ovens, and microwaves — curated for Indian cooking with professional install.",
    heroImage: img("photo-1556912172-45b7abe8b7e1"),
    subcategories: [
      {
        id: "chimneys",
        name: "Chimneys",
        image: img("photo-1556910103-1c02745aae4d"),
        description:
          "High suction chimneys sized for open kitchens and heavy tadka cooking.",
        benefits: ["Auto-clean options", "Low noise", "Site-specific ducting"],
        materials: ["Branded motors", "Baffle filters", "Designer hoods"],
      },
      {
        id: "cooktops",
        name: "Cooktops",
        image: img("photo-1556911220-bff31c812dba"),
        description:
          "Brass burners, flame failure devices, and glass tops for daily durability.",
        benefits: ["Safety features", "Easy-clean glass", "Precise flame control"],
        materials: ["Hob & cooktop combos", "Built-in options", "LPG/PNG ready"],
      },
      {
        id: "microwaves",
        name: "Microwaves",
        image: img("photo-1585659722903-df900360a386"),
        description:
          "Solo, grill, and convection models with cavity sizing guidance for your tall unit.",
        benefits: ["Built-in & countertop", "Trim kit alignment", "Demo included"],
        materials: ["Oven-safe accessories", "Brand warranty", "Earthing checks"],
      },
      {
        id: "ovens",
        name: "Ovens",
        image: img("photo-1606787366850-de6330120b60"),
        description:
          "Built-in ovens for baking enthusiasts — placement within tower for ergonomic reach.",
        benefits: ["Tower integration", "Heat management", "Combo microwave-oven"],
        materials: ["SS cavity", "Telescopic rails", "Child lock"],
      },
    ],
  },
];
