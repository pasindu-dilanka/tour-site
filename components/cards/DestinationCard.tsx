import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { DestinationItem } from "@/types";
export function DestinationCard({
  destination,
}: {
  destination: DestinationItem;
}) {
  return (
    <Link
      href={`/destinations/${destination.slug}`}
      className="destination-card"
    >
      <Image
        src={destination.image}
        alt={destination.name}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
      />
      <span className="destination-shade" />
      <span className="destination-copy">
        <small>{destination.region}</small>
        <strong>{destination.name}</strong>
        <span>{destination.description}</span>
        <b>
          Discover <ArrowUpRight size={16} />
        </b>
      </span>
    </Link>
  );
}
