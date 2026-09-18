export type PortfolioFilter =
  | "All"
  | "Kitchens"
  | "Living Rooms"
  | "Bedrooms"
  | "Wardrobes"
  | "TV Units"
  | "Mandir"
  | "Washrooms"
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

const local = (name: string) => `/images/${name}`;

export const portfolioItems: PortfolioItem[] = [
  {
    id: "p1",
    title: "Modern L-kitchen",
    location: "Paschim Vihar",
    type: "Modular Kitchen",
    filter: "Kitchens",
    image: local("Kitchen_1.jpeg"),
    description: "Streamlined L-layout with layered task and ambient lighting.",
    span: "tall",
  },
  {
    id: "p2",
    title: "Glossy U-shaped kitchen",
    location: "Janakpuri",
    type: "Modular Kitchen",
    filter: "Kitchens",
    image: local("Kitchen_2.jpeg"),
    description: "High-gloss shutters, dry-storage drawers, and a deep U-run for daily cooking.",
    span: "tall",
  },
  {
    id: "p3",
    title: "Living lounge refresh",
    location: "Punjabi Bagh",
    type: "Living Room",
    filter: "Living Rooms",
    image: u("photo-1586023492125-27b2c045efd7"),
    description: "Panelled TV wall, soft lighting, and oak accents.",
    span: "tall",
  },
  {
    id: "p4",
    title: "Master bedroom suite",
    location: "Rohini",
    type: "Bedroom",
    filter: "Bedrooms",
    image: local("Bedroom_1.jpeg"),
    description: "Calm palette with integrated bedside and wardrobe storage.",
    span: "tall",
  },
  {
    id: "p5",
    title: "Hinged wardrobe with drawer stack",
    location: "Shalimar Bagh",
    type: "Wardrobe",
    filter: "Wardrobes",
    image: local("Wardrobe_1.jpeg"),
    description: "Open-door view of internal drawers, hanging space, and loft storage.",
    span: "tall",
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
    title: "U-shaped kitchen with glass cabinets",
    location: "Vasant Kunj",
    type: "Modular Kitchen",
    filter: "Kitchens",
    image: local("Kitchen_3.jpeg"),
    description: "Marble-look backsplash, cove lighting, and glass-front upper storage.",
    span: "tall",
  },
  {
    id: "p8",
    title: "Champagne-gold luxury kitchen",
    location: "Pitampura",
    type: "Modular Kitchen",
    filter: "Kitchens",
    image: local("Kitchen_4.jpeg"),
    description: "Gold handle rails, marble backsplash, and lit crockery towers.",
    span: "tall",
  },
  {
    id: "p9",
    title: "Home mandir unit",
    location: "Rajouri Garden",
    type: "Mandir",
    filter: "Mandir",
    image: local("Mandir.jpeg"),
    description: "CNC-cut jaali mandir panel — cut and finished to site dimensions.",
    span: "tall",
  },
  {
    id: "p11",
    title: "Open kitchen-dining",
    location: "Janakpuri",
    type: "Living Room",
    filter: "Living Rooms",
    image: u("photo-1586023492125-27b2c045efd7"),
    description: "Seamless flow between cooking and dining zones.",
  },
  {
    id: "p12",
    title: "Full-wall hinged wardrobe",
    location: "Greater Kailash",
    type: "Wardrobe",
    filter: "Wardrobes",
    image: local("Wardrobe_2.jpeg"),
    description: "Floor-to-ceiling beige shutters with slim brass handles.",
    span: "tall",
  },
  {
    id: "p13",
    title: "Full-height wardrobe with loft",
    location: "Model Town",
    type: "Wardrobe",
    filter: "Wardrobes",
    image: local("Wardrobe_3.jpeg"),
    description: "Full-width shutters with an integrated loft band above.",
    span: "tall",
  },
  {
    id: "p14",
    title: "White wardrobe with loft",
    location: "Kirti Nagar",
    type: "Wardrobe",
    filter: "Wardrobes",
    image: local("Wardrobe_4.jpeg"),
    description: "Clean white shutters matched with loft cabinets and brass pulls.",
    span: "tall",
  },
  {
    id: "p15",
    title: "Vanity washroom",
    location: "Punjabi Bagh",
    type: "Washroom",
    filter: "Washrooms",
    image: local("Washroom_2.jpeg"),
    description: "Vanity storage with backlit mirror and easy-clean surfaces.",
    span: "tall",
  },
  {
    id: "p16",
    title: "Shower washroom",
    location: "Ashok Vihar",
    type: "Washroom",
    filter: "Washrooms",
    image: local("Washroom_1.jpeg"),
    description: "Anti-skid tiling with glass shower partition.",
    span: "tall",
  },
  {
    id: "p17",
    title: "Study & library wall",
    location: "Rajouri Garden",
    type: "Office Interiors",
    filter: "Office Interiors",
    image: u("photo-1497366216548-37526070297c"),
    description: "Floor-to-ceiling storage with reading nook.",
  },
  {
    id: "p18",
    title: "Parallel galley kitchen",
    location: "Vikaspuri",
    type: "Modular Kitchen",
    filter: "Kitchens",
    image: local("Kitchen_5.jpeg"),
    description: "Two runs facing each other with a tall appliance column and cove lighting.",
    span: "tall",
  },
  {
    id: "p19",
    title: "Dining crockery unit",
    location: "Naraina",
    type: "Crockery Unit",
    filter: "Living Rooms",
    image: local("Kitchen_6.jpeg"),
    description: "Fluted back panel with lit glass shutters and a serving counter.",
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
  "Mandir",
  "Washrooms",
  "Office Interiors",
];

export const featuredProjects = portfolioItems.slice(0, 6);
