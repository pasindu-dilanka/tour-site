import { ShieldCheck, MapPinned, HeartHandshake, Route } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
const items = [
  {
    icon: ShieldCheck,
    title: "Travel with confidence",
    text: "Clear communication and trip details confirmed before you travel.",
  },
  {
    icon: MapPinned,
    title: "Local knowledge",
    text: "Plan routes and stops with help from people who know the island.",
  },
  {
    icon: HeartHandshake,
    title: "Personal service",
    text: "Trips shaped around your schedule, interests and travel pace.",
  },
  {
    icon: Route,
    title: "Flexible journeys",
    text: "From a single transfer to a multi-day island itinerary.",
  },
];
export function WhyChooseUs() {
  return (
    <section className="section section-muted">
      <div className="container">
        <SectionHeading
          eyebrow="The Lanka Explorer difference"
          title="A smoother way to explore the island"
          description="Thoughtful planning, comfortable transportation and experiences built around you."
        />
        <div className="feature-grid">
          {items.map((item, i) => (
            <AnimatedSection
              key={item.title}
              delay={i * 0.08}
              className="feature-item"
            >
              <span className="feature-icon">
                <item.icon size={25} />
              </span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
