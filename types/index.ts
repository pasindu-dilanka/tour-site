export type ServiceItem = {
  id: string;
  title: string;
  badge: string;
  image: string;
  shortDescription: string;
  description: string;
  features: string[];
  slug: string;
};
export type TourItem = {
  id: string;
  category: "culture" | "wildlife" | "coastal";
  title: string;
  slug: string;
  duration: string;
  image: string;
  summary: string;
  highlights: string[];
  itinerary: string[];
};
export type DestinationItem = {
  id: string;
  name: string;
  slug: string;
  region: string;
  description: string;
  image: string;
};
export type TestimonialItem = {
  name: string;
  country: string;
  tour: string;
  quote: string;
};
// types/review.ts
export interface Review {
  id: string;
  name: string;
  country: string;
  avatar?: string;
  rating: number; // 1 to 5
  date: string;
  tourName: string;
  comment: string;
}

// Interface for individual card component props
export interface ReviewCardProps {
  review: Review;
}

// Interface for the section component props (if fetching reviews from parent/server)
export interface AboutReviewsProps {
  initialReviews?: Review[];
}