import Image from "next/image";
import Link from "next/link";
import { Waves, ArrowRight } from "lucide-react";
export function WhaleWatchingSection() {
  return (
    <section className="section">
      <div className="container split-section split-reverse">
        <div className="split-image">
          <Image
            src="/images/whale.jpg"
            alt="Whale surfacing in the ocean"
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
          />
        </div>
        <div className="split-copy">
          <span className="eyebrow">
            <Waves size={16} /> Coastal expeditions
          </span>
          <h2>Set out for a blue-water adventure.</h2>
          <p>
            Explore seasonal whale and dolphin watching options from Sri Lanka’s
            southern and eastern coasts. We can help plan transfers to suitable
            harbours and coordinate your wider itinerary.
          </p>
          <ul className="check-list">
            <li>Mirissa and the southern coast</li>
            <li>Trincomalee and the eastern coast</li>
            <li>Coastal transfers and trip planning</li>
          </ul>
          <Link
            className="button button-primary"
            href="/booking?service=Whale%20Watching"
          >
            Enquire about whale watching <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}
