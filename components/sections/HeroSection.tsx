import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, CarFront, Clock3 } from "lucide-react";

export function HeroSection() {
  return (
    <section className="hero">
      <Image
        src="/images/background.webp"
        alt="Scenic view of Sigiriya Rock Fortress in Sri Lanka"
        fill
        priority
        sizes="100vw"
        className="hero-image object-cover"
      />
      <div className="hero-overlay" />
      <div className="container hero-content">
        <span className="hero-kicker">✦ The Pearl of the Indian Ocean</span>
        <h1>
          Experience Sri Lanka
          <br />
          <em>your way.</em>
        </h1>
        <p>
          Tailor-made island tours, private chauffeur travel, wildlife safaris,
          whale watching and seamless airport transfers.
        </p>
        <div className="hero-actions">
          <Link className="button button-primary button-large" href="/tours">
            Explore our tours <ArrowRight size={18} />
          </Link>
          <Link className="button button-glass button-large" href="/booking">
            Plan your trip
          </Link>
        </div>
        <div className="hero-trust">
          <span>
            <ShieldCheck />
            Personalized service
          </span>
          <span>
            <CarFront />
            Comfortable private travel
          </span>
          <span>
            <Clock3 />
            Flexible itineraries
          </span>
        </div>
      </div>
    </section>
  );
}