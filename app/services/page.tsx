import type { Metadata } from "next";
import { services } from "@/data/services";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { CTASection } from "@/components/sections/CTASection";
import { pageMetadata } from "@/lib/seo";
export const metadata: Metadata = pageMetadata(
  "Sri Lanka Travel Services",
  "Private chauffeur tours, airport transfers, wildlife safaris, whale watching, cultural tours and city trips.",
  "/services",
);
export default function ServicesPage() {
  return (
    <>
      <header className="page-hero">
        <div className="container">
          <span className="eyebrow">Travel your way</span>
          <h1>Transportation & tour services</h1>
          <p>
            Flexible travel services for exploring Sri Lanka, from a single
            airport transfer to a custom island itinerary.
          </p>
        </div>
      </header>
      <section className="page-content">
        <div className="container card-grid">
          {services.map((s) => (
            <ServiceCard key={s.id} service={s} />
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}
