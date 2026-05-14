export type Service = {
  id: string;
  icon: string;
  title: string;
  shortDesc: string;
  description: string;
  features: string[];
};

export const services: Service[] = [
  {
    id: "modular-kitchen",
    icon: "ChefHat",
    title: "Modular Kitchen Design",
    shortDesc: "Custom L/U/Island/Parallel layouts",
    description:
      "Tailored modular kitchens designed around your cooking habits, storage needs, and space — from compact apartments to expansive villas.",
    features: [
      "Custom layouts (L, U, parallel, island)",
      "Premium branded hardware & soft-close",
      "Ergonomic workflow & maximised storage",
      "3D visualisation before execution",
    ],
  },
  {
    id: "home-interior",
    icon: "Sofa",
    title: "Home Interior Design",
    shortDesc: "Living rooms, bedrooms, dining & more",
    description:
      "Complete interior transformations for living, dining, bedrooms, and more — cohesive palettes, lighting, and finishes.",
    features: [
      "Room-wise concept to execution",
      "False ceiling & lighting design",
      "Furniture layout & sourcing support",
      "Quality supervision on site",
    ],
  },
  {
    id: "wardrobe",
    icon: "DoorClosed",
    title: "Wardrobe Design",
    shortDesc: "Sliding, hinged, walk-in solutions",
    description:
      "Wardrobes engineered for Delhi homes — sliding, hinged, walk-in, mirror finishes, and smart internal fittings.",
    features: [
      "Sliding & hinged systems",
      "Walk-in & glass door options",
      "Internal accessories & organisers",
      "Durable hardware for daily use",
    ],
  },
  {
    id: "appliances",
    icon: "Flame",
    title: "Kitchen Appliances",
    shortDesc: "Chimneys, cooktops, microwaves, ovens",
    description:
      "Curated appliances with supply and professional installation — chimneys, hobs, ovens, and more.",
    features: [
      "Trusted brands",
      "Site measurement & placement",
      "Installation & demo",
      "After-sales coordination",
    ],
  },
  {
    id: "space-planning",
    icon: "Ruler",
    title: "Space Planning",
    shortDesc: "Maximize every sq ft intelligently",
    description:
      "Intelligent layouts that balance circulation, storage, and daylight — especially for compact Delhi flats.",
    features: [
      "Detailed site survey",
      "Zoning & circulation planning",
      "Storage mapping",
      "Iterative layout options",
    ],
  },
  {
    id: "materials",
    icon: "Layers",
    title: "Material Selection",
    shortDesc: "Premium laminates, hardware & finishes",
    description:
      "Guided selection of ISI-grade ply, laminates, edge bands, handles, and finishes that age gracefully.",
    features: [
      "Ply grade consultation",
      "Laminate & colour curation",
      "Hardware durability checks",
      "Budget-transparent options",
    ],
  },
  {
    id: "project-management",
    icon: "ClipboardList",
    title: "Project Management",
    shortDesc: "End-to-end execution, on time",
    description:
      "Single point of coordination from design freeze to handover — timelines, procurement, and quality checks.",
    features: [
      "Milestone-based timelines",
      "Site supervision",
      "Vendor coordination",
      "Snag-free handover",
    ],
  },
];
