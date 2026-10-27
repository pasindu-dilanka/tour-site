// data/reviews.ts
import type { Review } from "@/types";

export const defaultReviews: Review[] = [
  {
    id: "1",
    name: "Sarah Jenkins",
    country: "United Kingdom",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
    rating: 5,
    date: "October 2026",
    tourName: "7-Day Heritage & Tea Country",
    comment:
      "Our chauffeur driver was exceptional! Punctual, informative, and made our family feel completely safe navigating Nuwara Eliya and Ella.",
  },
  {
    id: "2",
    name: "Marco Rossi",
    country: "Italy",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
    rating: 5,
    date: "September 2026",
    tourName: "Private Chauffeur & Airport Transfer",
    comment:
      "Seamless transfer from CMB Airport to Mirissa. Clean vehicle, great air conditioning, and peaceful drive after a long flight.",
  },
  {
    id: "3",
    name: "Elena Rostova",
    country: "Germany",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
    rating: 5,
    date: "August 2026",
    tourName: "5-Day Wildlife Expedition",
    comment:
      "Spotted leopards in Yala and elephants in Udawalawe! Incredible experience tailored to our exact schedule.",
  },
];