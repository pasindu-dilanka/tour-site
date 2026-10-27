import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock3 } from "lucide-react";
import type { TourItem } from "@/types";
export function TourCard({ tour }: { tour: TourItem }) {
  return (
    <article className="content-card">
      <div className="card-image">
        <Image
          src={tour.image}
          alt={tour.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="card-body">
        <span className="duration">
          <Clock3 size={15} />
          {tour.duration}
        </span>
        <h3>{tour.title}</h3>
        <p>{tour.summary}</p>
        <Link className="text-link" href={`/tours/${tour.slug}`}>
          Explore tour <ArrowRight size={16} />
        </Link>
      </div>
    </article>
  );
}
