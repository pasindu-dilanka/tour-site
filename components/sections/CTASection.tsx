import Link from "next/link";
import { ArrowRight } from "lucide-react";
export function CTASection() {
  return (
    <section className="cta-section">
      <div className="container cta-inner">
        <div>
          <span className="eyebrow">Your island adventure starts here</span>
          <h2>Let’s plan a Sri Lanka journey you’ll remember.</h2>
          <p>
            Tell us what you have in mind. We’ll help you shape the route around
            your trip.
          </p>
        </div>
        <Link className="button button-light button-large" href="/booking">
          Plan your trip <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}
