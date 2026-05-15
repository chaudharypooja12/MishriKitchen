import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Syne } from "next/font/google";
import "./globals.css";
import { JsonLd } from "@/components/JsonLd";
import { AppShell } from "@/components/layout/AppShell";
import { SITE_URL } from "@/lib/constants";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Premium Modular Kitchen & Home Interiors in Delhi | Mishri Kitchen",
    template: "%s | Mishri Kitchen",
  },
  description:
    "Mishri Kitchen offers modular kitchens, wardrobe designs & home interiors in Paschim Vihar, Delhi. 10+ years experience, 100+ projects. Call now.",
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Mishri Kitchen & Home Interior",
    url: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${plusJakarta.variable} h-full scroll-smooth bg-background antialiased`}
    >
      <body className="font-body min-h-full text-text">
        <JsonLd />
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
