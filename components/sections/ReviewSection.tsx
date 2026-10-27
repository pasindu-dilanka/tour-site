"use client";

import { useState } from "react";
import { MessageSquarePlus, CheckCircle2, X, Star } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ReviewCard } from "@/components/cards/ReviewCard";
import { defaultReviews } from "@/data/reviews";
import type { Review, AboutReviewsProps } from "@/types";

// Zod Schema for form validation
const reviewSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  country: z.string().min(2, "Please enter your country"),
  tourName: z.string().min(2, "Please enter the tour or service title"),
  rating: z.number().min(1).max(5),
  comment: z.string().min(10, "Review must be at least 10 characters"),
});

type ReviewFormData = z.infer<typeof reviewSchema>;

export function AboutReviews({
  initialReviews = defaultReviews,
}: AboutReviewsProps) {
  const [reviews, setReviews] = useState<Review[]>(initialReviews);
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ReviewFormData>({
    resolver: zodResolver(reviewSchema),
    defaultValues: { rating: 5 },
  });

  const selectedRating = watch("rating");

  const onSubmit = async (data: ReviewFormData) => {
    // Construct new review object
    const newReview: Review = {
      id: Date.now().toString(),
      name: data.name,
      country: data.country,
      rating: data.rating,
      date: "Just now",
      tourName: data.tourName,
      comment: data.comment,
    };

    // Prepend new review to the active state list
    setReviews([newReview, ...reviews]);
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setIsOpen(false);
      reset();
    }, 2000);
  };

  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-900/50 rounded-3xl my-12 px-6 sm:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Header with Title & Add Review Button */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-teal-600 dark:text-teal-400 font-semibold text-sm tracking-wider uppercase">
              Traveler Experiences
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-1">
              What Our Guests Say
            </h2>
          </div>

          {/* 1. Add Review Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="inline-flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-3 rounded-xl transition shadow-md hover:shadow-lg"
          >
            <MessageSquarePlus className="w-5 h-5" />
            Write a Review
          </button>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((item) => (
            <ReviewCard key={item.id} review={item} />
          ))}
        </div>
      </div>

      {/* 2. Review Form Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 backdrop-blur-sm p-4">
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 max-w-lg w-full p-6 sm:p-8 shadow-2xl relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="text-center py-8">
                <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto mb-3 animate-bounce" />
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Thank You for Your Review!
                </h3>
                <p className="text-slate-500 text-sm mt-1">
                  Your review has been added to the list.
                </p>
              </div>
            ) : (
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
                  Share Your Experience
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">
                  Tell us about your trip with LankaSafe Tours.
                </p>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  {/* Rating Selector */}
                  <div>
                    <label className="block text-xs font-semibold uppercase text-slate-500 mb-2">
                      Overall Rating
                    </label>
                    <div className="flex items-center gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setValue("rating", star)}
                          className="p-1 focus:outline-none"
                        >
                          <Star
                            className={`w-7 h-7 transition ${
                              star <= selectedRating
                                ? "text-amber-400 fill-amber-400 scale-110"
                                : "text-slate-300 dark:text-slate-600"
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        {...register("name")}
                        placeholder="Your Name"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-transparent text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                      />
                      {errors.name && (
                        <p className="text-xs text-rose-500 mt-1">
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <input
                        {...register("country")}
                        placeholder="Country (e.g. UK)"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-transparent text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                      />
                      {errors.country && (
                        <p className="text-xs text-rose-500 mt-1">
                          {errors.country.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <input
                      {...register("tourName")}
                      placeholder="Tour Name or Service (e.g. Airport Transfer)"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-transparent text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                    {errors.tourName && (
                      <p className="text-xs text-rose-500 mt-1">
                        {errors.tourName.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <textarea
                      {...register("comment")}
                      rows={4}
                      placeholder="Write your review here..."
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-transparent text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                    {errors.comment && (
                      <p className="text-xs text-rose-500 mt-1">
                        {errors.comment.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 rounded-xl transition shadow-md disabled:opacity-50"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Review"}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
