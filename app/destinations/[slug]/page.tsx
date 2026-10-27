import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { destinations } from "@/data/destinations";
import { pageMetadata } from "@/lib/seo";
import { CTASection } from "@/components/sections/CTASection";
export function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const d = destinations.find((x) => x.slug === slug);
  return d
    ? pageMetadata(d.name, d.description, `/destinations/${d.slug}`)
    : { title: "Destination not found" };
}
export default async function DestinationDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const d = destinations.find((x) => x.slug === slug);
  if (!d) notFound();
  return (
    <>
      <header className="page-hero">
        <div className="container">
          <span className="eyebrow">{d.region}</span>
          <h1>{d.name}</h1>
          <p>{d.description}</p>
        </div>
      </header>
      <section className="page-content">
        <div className="container detail-layout">
          <div className="detail-image">
            <Image
              src={d.image}
              alt={d.name}
              fill
              sizes="(max-width: 800px) 100vw, 65vw"
            />
          </div>
          <div className="detail-panel">
            <h2>Plan a visit</h2>
            <p>
              {d.description} Share your preferred travel dates and interests so
              a route can be planned around your trip.
            </p>
            <Link
              className="button button-primary"
              href={`/booking?destination=${encodeURIComponent(d.name)}`}
            >
              Plan this destination
            </Link>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
