import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ServiceItem } from "@/types";
export function ServiceCard({ service }: { service: ServiceItem }) {
  return (
    <article className="content-card service-card">
      <div className="card-image">
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="card-body">
        <span className="card-badge">{service.badge}</span>
        <h3>{service.title}</h3>
        <p>{service.shortDescription}</p>
        <Link
          className="text-link"
          href={`/booking?service=${encodeURIComponent(service.title)}`}
        >
          Inquire Service <ArrowRight size={16} />
        </Link>
      </div>
    </article>
  );
}
