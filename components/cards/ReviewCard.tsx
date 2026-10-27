// components/cards/ReviewCard.tsx
import { Star } from "lucide-react";
import type { ReviewCardProps } from "@/types";

export function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200/80 dark:border-slate-700/60 shadow-sm flex flex-col justify-between">
      <div>
        {/* Rating Stars */}
        <div className="flex items-center gap-1 text-amber-400 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < review.rating
                  ? "fill-amber-400"
                  : "text-slate-300 dark:text-slate-600"
              }`}
            />
          ))}
        </div>

        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6 italic">
          "{review.comment}"
        </p>
      </div>

      <div className="border-t border-slate-100 dark:border-slate-700/50 pt-4 flex items-center justify-between">
        <div>
          <h4 className="font-semibold text-slate-900 dark:text-white text-sm">
            {review.name}
          </h4>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            {review.country} •{" "}
            <span className="text-teal-600 dark:text-teal-400">
              {review.tourName}
            </span>
          </p>
        </div>
        <span className="text-xs text-slate-400">{review.date}</span>
      </div>
    </div>
  );
}
