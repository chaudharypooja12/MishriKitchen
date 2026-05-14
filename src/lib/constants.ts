export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://mishrikitchen.in";

export const CONTACT = {
  phone1: "+919718499747",
  phone2: "+919650656670",
  phone1_display: "+91 97184 99747",
  phone2_display: "+91 96506 56670",
  tel1: "tel:+919718499747",
  tel2: "tel:+919650656670",
  whatsapp: "https://wa.me/919718499747",
  whatsappWithMessage:
    "https://wa.me/919718499747?text=Hi%2C%20I%20am%20interested%20in%20your%20services",
  maps: "https://maps.google.com/maps?q=Bhera+Enclave+Paschim+Vihar+New+Delhi",
  mapsDirections:
    "https://maps.google.com/maps?daddr=Bhera+Enclave+Paschim+Vihar+New+Delhi",
  mapsEmbed:
    "https://maps.google.com/maps?q=Bhera+Enclave+Paschim+Vihar+New+Delhi&output=embed",
  address: {
    line1: "Shop No.14, Garg Plaza",
    line2: "Bhera Enclave, Paschim Vihar",
    city: "New Delhi",
    pin: "110087",
  },
  factory: "Peeragarhi Industrial Area, New Delhi – 110087",
  hours: "Mon–Sat: 10:00 AM – 7:00 PM",
  brandName: "Mishri Kitchen & Home Interior",
  founder: "Sandeep Singh",
} as const;
