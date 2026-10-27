import type { Metadata } from "next";
import { destinations } from "@/data/destinations";
import { DestinationCard } from "@/components/cards/DestinationCard";
import { CTASection } from "@/components/sections/CTASection";
import { pageMetadata } from "@/lib/seo";
export const metadata: Metadata = pageMetadata(
  "Sri Lanka Destinations",
  "Explore Sri Lanka destinations including Sigiriya, Ella, Yala, Galle, Mirissa, Trincomalee and Kandy.",
  "/destinations",
);
export default function DestinationsPage() {
  return (
    <>
      <header className="page-hero">
        <div className="container">
          <span className="eyebrow">Find your next stop</span>
          <h1>Explore Sri Lanka</h1>
          <p>
            Discover the island’s cultural sites, highlands, wildlife parks and
            beautiful coastlines.
          </p>
        </div>
      </header>
      <section className="page-content">
        <div className="container destination-grid">
          {destinations.map((d) => (
            <DestinationCard key={d.id} destination={d} />
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}
