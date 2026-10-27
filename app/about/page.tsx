import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { CTASection } from "@/components/sections/CTASection";
import { AboutReviews } from "@/components/sections/ReviewSection";
export const metadata: Metadata = pageMetadata(
  "About Lanka Explorer",
  "Learn about Lanka Explorer’s approach to private transportation and personalized travel in Sri Lanka.",
  "/about",
);
export default function AboutPage() {
  return (
    <>
      <header className="page-hero">
        <div className="container">
          <span className="eyebrow">A more personal way to travel</span>
          <h1>Discover Sri Lanka with confidence</h1>
          <p>
            Lanka Explorer helps travelers plan private transportation and
            tailor-made experiences across the island.
          </p>
        </div>
      </header>
      <section className="page-content">
        <div className="container prose-content">
          <h2>Travel built around you</h2>
          <p>
            Whether you need an airport transfer, a day tour, a wildlife safari
            or a multi-day journey, our goal is to make planning clear and
            comfortable. Share the places you want to visit and the pace you
            prefer, and we can discuss a route that fits your trip.
          </p>
          <h3>Our approach</h3>
          <p>
            We value clear communication, flexible planning and confirming the
            details that matter before travel. Service inclusions, prices,
            vehicle arrangements and activity availability should always be
            confirmed in your individual quote.
          </p>
          <p>
            <strong>Before publishing:</strong> Replace this introductory copy
            with your real business history, team details, verified licences and
            any credentials you want to feature.
          </p>
        </div>
      </section>
      <WhyChooseUs />
      <HowItWorks />
      <CTASection />
      <AboutReviews />
    </>
  );
}
