import type { Metadata } from "next";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { CategoryCards } from "@/components/sections/CategoryCards";
import { CTABanner } from "@/components/sections/CTABanner";
import { GoogleMapSection } from "@/components/sections/GoogleMapSection";
import { Hero } from "@/components/sections/Hero";
import { ProjectsCarousel } from "@/components/sections/ProjectsCarousel";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { Testimonials } from "@/components/sections/Testimonials";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { pageMetadata } from "@/data/seo";

export const metadata: Metadata = pageMetadata("home");

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ServicesGrid />
      <CategoryCards />
      <ProjectsCarousel />
      <WhyChooseUs />
      <Testimonials />
      <GoogleMapSection />
      <CTABanner />
    </>
  );
}
