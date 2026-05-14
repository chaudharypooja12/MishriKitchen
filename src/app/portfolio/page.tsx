import type { Metadata } from "next";
import { PortfolioGallery } from "./PortfolioGallery";
import { pageMetadata } from "@/data/seo";

export const metadata: Metadata = pageMetadata("portfolio");

export default function PortfolioPage() {
  return <PortfolioGallery />;
}
