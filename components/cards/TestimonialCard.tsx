import { Quote } from "lucide-react";
import type { TestimonialItem } from "@/types";
export function TestimonialCard({ item }: { item: TestimonialItem }) {
  return (
    <article className="testimonial-card">
      <Quote className="quote-icon" />
      <p>{item.quote}</p>
      <div className="review-person">
        <strong>{item.name}</strong>
        <span>
          {item.country} · {item.tour}
        </span>
      </div>
    </article>
  );
}
