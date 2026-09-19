import type { Metadata } from "next";

export type SeoKey =
  | "home"
  | "about"
  | "services"
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
      "Misri Kitchen offers modular kitchens, wardrobe designs & home interiors in Paschim Vihar, Delhi. 14+ years of experience, 100+ projects. Book a free consultation.",
  },
  about: {
    title: "About Us — Misri Kitchen & Home Interior Delhi",
    description:
      "Learn about Misri Kitchen's 14-year journey designing premium modular kitchens and home interiors across Delhi NCR.",
  },
  services: {
    title: "Modular Kitchen & Interior Design Services — Delhi",
    description:
      "Explore our modular kitchen, wardrobe, interior design, appliance & project management services in New Delhi — 14+ years of trusted execution.",
  },
  reviews: {
    title: "Customer Reviews — Misri Kitchen Delhi",
    description:
      "See what 100+ happy families say about Misri Kitchen & Home Interior's quality and service — 14+ years in Delhi NCR.",
  },
  contact: {
    title: "Contact Misri Kitchen — Paschim Vihar, New Delhi",
    description:
      "Visit or call Misri Kitchen at Shop No.14, Garg Plaza, Bhera Enclave, Paschim Vihar, New Delhi. 14+ years of modular kitchen & interior experience. Open all days of the week except Wednesday, 10AM–7PM.",
  },
  categories: {
    title: "Categories — Misri Kitchen Delhi",
    description:
      "Modular kitchens, home interiors, wardrobes, and kitchen appliances by Misri Kitchen — 14+ years across Delhi NCR.",
  },
  categoryModular: {
    title: "Modular Kitchen Designs — L-shape, U-shape, Island",
    description:
      "Premium modular kitchen designs in Delhi — 14+ years of installs. L-shaped, U-shaped, island, parallel & luxury kitchens. Custom quotes available.",
  },
  categoryInteriors: {
    title: "Home Interior Design — Misri Kitchen Delhi",
    description:
      "Living rooms, bedrooms, TV units, and full home interiors crafted for Delhi homes — 14+ years of Misri delivery.",
  },
  categoryWardrobes: {
    title: "Wardrobe Design — Sliding, Hinged, Walk-in",
    description:
      "Smart wardrobe solutions with premium finishes across Delhi NCR — 14+ years of fitted storage expertise.",
  },
  categoryAppliances: {
    title: "Kitchen Appliances — Misri Kitchen Delhi",
    description:
      "Chimneys, cooktops, microwaves, ovens — supply and professional installation from a team with 14+ years on site.",
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
