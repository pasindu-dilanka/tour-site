import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { SafariSection } from "@/components/sections/SafariSection";
import { WhaleWatchingSection } from "@/components/sections/WhaleWatchingSection";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { CTASection } from "@/components/sections/CTASection";
import { TestimonialsFAQ } from "@/components/sections/TestimonialsFAQ";
import { destinations } from "@/data/destinations";
import { DestinationCard } from "@/components/cards/DestinationCard";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
export const metadata: Metadata = pageMetadata(
  "Sri Lanka Tours, Safaris & Private Transportation",
  "Discover Sri Lanka with private tours, airport transfers, wildlife safaris, whale watching and customized island journeys.",
  "",
);
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <SafariSection />
      <WhaleWatchingSection />
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Explore the island"
            title="Discover Sri Lanka’s many sides"
            description="From ancient landmarks and misty hills to wildlife parks and palm-fringed beaches."
          />
          <div className="destination-grid">
            {destinations.slice(0, 3).map((d, i) => (
              <AnimatedSection key={d.id} delay={i * 0.07}>
                <DestinationCard destination={d} />
              </AnimatedSection>
            ))}
          </div>
          <div className="section-bottom-link">
            <Link className="text-link" href="/destinations">
              Explore all destinations →
            </Link>
          </div>
        </div>
      </section>
      <WhyChooseUs />
      <HowItWorks />
      <TestimonialsFAQ />
      <CTASection />
    </>
  );
}
