export type PortfolioFilter =
  | "All"
  | "Kitchens"
  | "Living Rooms"
  | "Bedrooms"
  | "Wardrobes"
  | "TV Units"
  | "Office Interiors";

export type PortfolioItem = {
  id: string;
  title: string;
  location: string;
  type: string;
  filter: Exclude<PortfolioFilter, "All">;
  image: string;
  description: string;
  span?: "normal" | "wide" | "tall";
};

const u = (id: string, w = 800, h = 600) =>
  `https://images.unsplash.com/${id}?w=${w}&h=${h}&q=80&auto=format&fit=crop`;

export const portfolioItems: PortfolioItem[] = [
  {
    id: "p1",
    title: "Warm L-shaped kitchen",
    location: "Paschim Vihar",
    type: "Modular Kitchen",
    filter: "Kitchens",
    image: u("photo-1604707761979-a52407f527b7"),
    description: "Two-tone laminate with quartz counter and tall storage wall.",
    span: "wide",
  },
  {
    id: "p2",
    title: "Minimal parallel kitchen",
    location: "Janakpuri",
    type: "Modular Kitchen",
    filter: "Kitchens",
    image: u("photo-1556911220-e15b29be8c8f"),
    description: "Compact parallel layout with integrated appliances.",
  },
  {
    id: "p3",
    title: "Living lounge refresh",
    location: "Punjabi Bagh",
    type: "Living Room",
    filter: "Living Rooms",
    image: u("photo-1600210491892-03d3c3494bfd"),
    description: "Panelled TV wall, soft lighting, and oak accents.",
    span: "tall",
  },
  {
    id: "p4",
    title: "Master bedroom suite",
    location: "Rohini",
    type: "Bedroom",
    filter: "Bedrooms",
    image: u("photo-1616594039964-ae9021a400a0"),
    description: "Upholstered bed wall with integrated bedside storage.",
  },
  {
    id: "p5",
    title: "Sliding wardrobe wall",
    location: "Shalimar Bagh",
    type: "Wardrobe",
    filter: "Wardrobes",
    image: u("photo-1584622650110-044b00024cad"),
    description: "Floor-to-ceiling sliding doors with mirror insert.",
  },
  {
    id: "p6",
    title: "TV unit & display",
    location: "Dwarka",
    type: "TV Unit",
    filter: "TV Units",
    image: u("photo-1618221195710-dd6b41faaea6"),
    description: "Fluted panels, concealed wiring, and display niches.",
  },
  {
    id: "p7",
    title: "Island kitchen",
    location: "Vasant Kunj",
    type: "Modular Kitchen",
    filter: "Kitchens",
    image: u("photo-1600585154340-be6161a56a0c"),
    description: "Island seating with waterfall counter edge.",
    span: "wide",
  },
  {
    id: "p8",
    title: "Compact U-kitchen",
    location: "Pitampura",
    type: "Modular Kitchen",
    filter: "Kitchens",
    image: u("photo-1600566753190-17f0baa2a6c3"),
    description: "High-gloss cabinets with open shelving corner.",
  },
  {
    id: "p9",
    title: "Study & library wall",
    location: "Rajouri Garden",
    type: "Office Interiors",
    filter: "Office Interiors",
    image: u("photo-1560448204-e02f11c3d0e2"),
    description: "Floor-to-ceiling storage with reading nook.",
  },
  {
    id: "p10",
    title: "Guest bedroom",
    location: "Paschim Vihar",
    type: "Bedroom",
    filter: "Bedrooms",
    image: u("photo-1615529328331-f8917597711f"),
    description: "Wardrobe + study desk combo for compact room.",
  },
  {
    id: "p11",
    title: "Open kitchen-dining",
    location: "Janakpuri",
    type: "Living Room",
    filter: "Living Rooms",
    image: u("photo-1581578731548-c64695cc6952"),
    description: "Seamless flow between cooking and dining zones.",
  },
  {
    id: "p12",
    title: "Walk-in wardrobe",
    location: "Greater Kailash",
    type: "Wardrobe",
    filter: "Wardrobes",
    image: u("photo-1600585154526-990dced4db0d"),
    description: "Glass partitions, island dresser, and shoe wall.",
    span: "tall",
  },
];

export const portfolioFilters: PortfolioFilter[] = [
  "All",
  "Kitchens",
  "Living Rooms",
  "Bedrooms",
  "Wardrobes",
  "TV Units",
  "Office Interiors",
];

export const featuredProjects = portfolioItems.slice(0, 6);
