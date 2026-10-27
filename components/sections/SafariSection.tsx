import Image from "next/image";
import Link from "next/link";
import { Trees, ArrowRight } from "lucide-react";
export function SafariSection() {
  return (
    <section className="section section-muted">
      <div className="container split-section">
        <div className="split-copy">
          <span className="eyebrow">
            <Trees size={16} /> Wildlife & safaris
          </span>
          <h2>Meet the wild side of Sri Lanka.</h2>
          <p>
            Plan a safari outing in national parks such as Yala, Udawalawe,
            Minneriya, Kaudulla or Wilpattu. We can help coordinate transfers
            and discuss the arrangements for your chosen park.
          </p>
          <div className="park-grid">
            {[
              ["Yala", "Leopards and diverse wildlife"],
              ["Udawalawe", "Known for elephant sightings"],
              ["Minneriya & Kaudulla", "Seasonal elephant gatherings"],
              ["Wilpattu", "Forest and natural lakes"],
            ].map(([a, b]) => (
              <div className="park-tile" key={a}>
                <strong>{a}</strong>
                <span>{b}</span>
              </div>
            ))}
          </div>
          <Link
            className="button button-green"
            href="/booking?service=Wildlife%20Safari"
          >
            Plan a safari <ArrowRight size={17} />
          </Link>
        </div>
        <div className="split-image">
          <Image
            src="/images/yala.jpg"
            alt="Wild elephant in a green natural habitat"
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
