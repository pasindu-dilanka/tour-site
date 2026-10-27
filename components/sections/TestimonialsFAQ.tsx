import { testimonials } from "@/data/testimonials";
import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { SectionHeading } from "./SectionHeading";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
export function TestimonialsFAQ() {
  return (
    <section className="section section-muted">
      <div className="container">
        <SectionHeading
          eyebrow="Planning your trip"
          title="Useful answers before you go"
          description="A few things to know when arranging transportation and experiences in Sri Lanka."
        />
        <div className="faq-wrap">
          <FAQAccordion />
        </div>
        {process.env.NEXT_PUBLIC_SHOW_TESTIMONIAL_PLACEHOLDERS === "true" && (
          <div className="testimonial-grid">
            {testimonials.map((item, i) => (
              <TestimonialCard item={item} key={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
