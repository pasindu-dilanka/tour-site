import { services } from "@/data/services";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { SectionHeading } from "./SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import Link from "next/link";
export function ServicesSection() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Premium travel solutions"
          title="Transportation & tours, tailored to you"
          description="From airport pickups to wildlife and coastal adventures, make your Sri Lanka travel plans your own."
        />
        <div className="card-grid">
          {services.slice(0, 3).map((service, i) => (
            <AnimatedSection key={service.id} delay={i * 0.08}>
              <ServiceCard service={service} />
            </AnimatedSection>
          ))}
        </div>
        <div className="section-bottom-link">
          <Link className="text-link" href="/services">
            View all services →
          </Link>
        </div>
      </div>
    </section>
  );
}
