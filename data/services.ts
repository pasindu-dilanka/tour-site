import type { ServiceItem } from "@/types";
export const services: ServiceItem[] = [
  {
    id: "private-tours",
    slug: "private-chauffeur-tours",
    title: "Private Chauffeur Tours",
    badge: "Most Popular",
    image:
      "/images/private-tour.jpg",
    shortDescription:
      "Explore Sri Lanka at your own pace with a private vehicle and a friendly local chauffeur.",
    description:
      "Flexible private transportation for day trips and multi-day journeys across Sri Lanka.",
    features: [
      "Flexible itineraries",
      "Air-conditioned vehicle",
      "Hotel pickup and drop-off",
    ],
  },
  {
    id: "airport-transfers",
    slug: "airport-transfers",
    title: "Airport Transfers",
    badge: "Comfort",
    image:
      "/images/airport.jpg",
    shortDescription:
      "Reliable airport pickups and drop-offs between the airport, hotels and destinations island-wide.",
    description:
      "Arrange a comfortable transfer from Bandaranaike International Airport (CMB) or other agreed pickup points.",
    features: [
      "Meet-and-greet on request",
      "Flight details coordination",
      "Door-to-door transfers",
    ],
  },
  {
    id: "safaris",
    slug: "wildlife-safaris",
    title: "National Park Wildlife Safaris",
    badge: "Adventure",
    image:
      "/images/yala.jpg",
    shortDescription:
      "Discover Sri Lanka’s wildlife with safari experiences in parks such as Yala and Udawalawe.",
    description:
      "We can help coordinate transport and safari arrangements for selected national parks.",
    features: [
      "Morning and afternoon options",
      "Hotel transfers",
      "Safari planning assistance",
    ],
  },
  {
    id: "whales",
    slug: "whale-watching",
    title: "Whale & Dolphin Excursions",
    badge: "Coastal",
    image:
      "/images/whale.jpg",
    shortDescription:
      "Plan a coastal trip for seasonal whale and dolphin watching from suitable harbours.",
    description:
      "Coastal transfers and excursion coordination for whale watching in locations such as Mirissa and Trincomalee.",
    features: [
      "Seasonal harbour transfers",
      "Trip planning support",
      "Coastal experiences",
    ],
  },
  {
    id: "heritage",
    slug: "cultural-day-tours",
    title: "Cultural Heritage Day Tours",
    badge: "Day Tour",
    image:
      "/images/polonnaruwa.jpg",
    shortDescription:
      "Visit ancient cities, temples and cultural landmarks with a flexible private itinerary.",
    description:
      "Explore Sri Lanka’s cultural triangle and historic cities at a comfortable pace.",
    features: ["Custom day trips", "Private transport", "Flexible photo stops"],
  },
  {
    id: "city",
    slug: "city-tours",
    title: "City Tours",
    badge: "Explore",
    image:
      "/images/colombo.jpg",
    shortDescription:
      "Discover city highlights, local culture, food stops and historic landmarks.",
    description:
      "Private city sightseeing arranged around your interests and schedule.",
    features: ["Flexible stops", "Local highlights", "Private transport"],
  },
];
