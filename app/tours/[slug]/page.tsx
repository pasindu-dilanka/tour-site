import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { tours } from "@/data/tours";
import { pageMetadata } from "@/lib/seo";
import { CTASection } from "@/components/sections/CTASection";
export function generateStaticParams() {
  return tours.map((t) => ({ slug: t.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const t = tours.find((x) => x.slug === slug);
  return t
    ? pageMetadata(t.title, t.summary, `/tours/${t.slug}`)
    : { title: "Tour not found" };
}
export default async function TourDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tour = tours.find((t) => t.slug === slug);
  if (!tour) notFound();
  return (
    <>
      <header className="page-hero">
        <div className="container">
          <span className="eyebrow">{tour.duration}</span>
          <h1>{tour.title}</h1>
          <p>{tour.summary}</p>
        </div>
      </header>
      <section className="page-content">
        <div className="container detail-layout">
          <div>
            <div className="detail-image">
              <Image
                src={tour.image}
                alt={tour.title}
                fill
                sizes="(max-width: 800px) 100vw, 65vw"
              />
            </div>
            <h2>Sample itinerary</h2>
            <ol className="itinerary">
              {tour.itinerary.map((day, i) => (
                <li key={day}>
                  <strong>Day {i + 1}:</strong> {day}
                </li>
              ))}
            </ol>
            <p className="form-note">
              This is a sample itinerary, not a confirmed booking or fixed-price
              package. Stops and timing can be discussed.
            </p>
          </div>
          <aside className="detail-panel">
            <h2>Tour highlights</h2>
            <ul>
              {tour.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
            <Link
              className="button button-primary"
              href={`/booking?service=${encodeURIComponent(tour.title)}`}
            >
              Enquire about this tour
            </Link>
          </aside>
        </div>
      </section>
      <CTASection />
    </>
  );
}
