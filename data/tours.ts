import type { TourItem } from "@/types";
export const tours: TourItem[] = [
  {
    id: "heritage-7",
    slug: "7-day-heritage-tea-country",
    category: "culture",
    title: "7-Day Essence of Sri Lanka: Heritage & Tea Country",
    duration: "7 Days / 6 Nights",
    image:
      "/images/tea.jpg",
    summary:
      "A sample route covering Sigiriya, Kandy, the tea country, Ella and a wildlife safari.",
    highlights: [
      "Sigiriya",
      "Temple of the Tooth area",
      "Tea country",
      "Ella",
      "Safari option",
    ],
    itinerary: [
      "Arrival and transfer to the Cultural Triangle.",
      "Explore Sigiriya and Dambulla, depending on your interests.",
      "Travel to Kandy and explore the city.",
      "Continue to the Nuwara Eliya tea country.",
      "Explore Ella and scenic viewpoints.",
      "Arrange a wildlife safari en route to the south.",
      "Transfer to your selected beach resort or airport.",
    ],
  },
  {
    id: "wildlife-5",
    slug: "5-day-wildlife-expedition",
    category: "wildlife",
    title: "5-Day Sri Lanka Wildlife Expedition",
    duration: "5 Days / 4 Nights",
    image:
      "/images/wild.jpg",
    summary:
      "A wildlife-focused sample trip with national parks and time on the southern coast.",
    highlights: ["Udawalawe", "Yala", "Southern coast", "Galle Fort"],
    itinerary: [
      "Travel to Udawalawe and arrange a safari.",
      "Transfer toward Yala with optional stops.",
      "Enjoy a planned safari experience.",
      "Continue to the southern coast.",
      "Optional whale watching in season, then transfer to your next destination.",
    ],
  },
  {
    id: "island-10",
    slug: "10-day-island-circuit",
    category: "coastal",
    title: "10-Day Island Circuit & Beach Escape",
    duration: "10 Days / 9 Nights",
    image:
      "/images/kalkuda.jpg",
    summary:
      "A flexible sample itinerary combining cultural sites, hills, wildlife and beaches.",
    highlights: [
      "Cultural Triangle",
      "Hill Country",
      "Wildlife",
      "Southern beaches",
    ],
    itinerary: [
      "Arrive and settle in Colombo or Negombo.",
      "Visit Dambulla and Sigiriya.",
      "Explore an ancient city or enjoy a safari.",
      "Travel to Kandy.",
      "Continue through the hill country.",
      "Explore Ella and nearby viewpoints.",
      "Travel toward a national park.",
      "Continue to the southern coast.",
      "Visit Galle and nearby beaches.",
      "Transfer to Colombo or the airport.",
    ],
  },
];
