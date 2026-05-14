import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { JsonLd } from "@/components/JsonLd";
import { AppShell } from "@/components/layout/AppShell";
import { SITE_URL } from "@/lib/constants";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
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
      className={`${playfair.variable} ${dmSans.variable} h-full scroll-smooth antialiased`}
    >
      <body className="font-body min-h-full bg-background text-text">
        <JsonLd />
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
