import type { Metadata } from "next";

export type SeoKey =
  | "home"
  | "about"
  | "services"
  | "portfolio"
  | "reviews"
  | "contact"
  | "categories"
  | "categoryModular"
  | "categoryInteriors"
  | "categoryWardrobes"
  | "categoryAppliances";

const entries: Record<SeoKey, { title: string; description: string }> = {
  home: {
    title: "Premium Modular Kitchen & Home Interiors in Delhi",
    description:
      "Mishri Kitchen offers modular kitchens, wardrobe designs & home interiors in Paschim Vihar, Delhi. 10+ years experience, 100+ projects. Call now.",
  },
  about: {
    title: "About Us — Mishri Kitchen & Home Interior Delhi",
    description:
      "Learn about Mishri Kitchen's 10-year journey designing premium modular kitchens and home interiors across Delhi NCR.",
  },
  services: {
    title: "Modular Kitchen & Interior Design Services — Delhi",
    description:
      "Explore our modular kitchen, wardrobe, interior design, appliance & project management services in New Delhi.",
  },
  portfolio: {
    title: "Kitchen & Interior Portfolio — Mishri Kitchen Delhi",
    description:
      "Browse our completed modular kitchen and home interior projects across Delhi NCR.",
  },
  reviews: {
    title: "Customer Reviews — Mishri Kitchen Delhi",
    description:
      "See what 100+ happy families say about Mishri Kitchen & Home Interior's quality and service.",
  },
  contact: {
    title: "Contact Mishri Kitchen — Paschim Vihar, New Delhi",
    description:
      "Visit or call Mishri Kitchen at Shop No.14, Garg Plaza, Bhera Enclave, Paschim Vihar, New Delhi. Mon–Sat 10AM–7PM.",
  },
  categories: {
    title: "Categories — Mishri Kitchen Delhi",
    description:
      "Modular kitchens, home interiors, wardrobes, and kitchen appliances by Mishri Kitchen.",
  },
  categoryModular: {
    title: "Modular Kitchen Designs — L-shape, U-shape, Island",
    description:
      "Premium modular kitchen designs in Delhi. L-shaped, U-shaped, island, parallel & luxury kitchens. Custom quotes available.",
  },
  categoryInteriors: {
    title: "Home Interior Design — Mishri Kitchen Delhi",
    description:
      "Living rooms, bedrooms, TV units, and full home interiors crafted for Delhi homes.",
  },
  categoryWardrobes: {
    title: "Wardrobe Design — Sliding, Hinged, Walk-in",
    description:
      "Smart wardrobe solutions with premium finishes across Delhi NCR.",
  },
  categoryAppliances: {
    title: "Kitchen Appliances — Mishri Kitchen Delhi",
    description:
      "Chimneys, cooktops, microwaves, ovens — supply and professional installation.",
  },
};

export function pageMetadata(key: SeoKey): Metadata {
  const { title, description } = entries[key];
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
