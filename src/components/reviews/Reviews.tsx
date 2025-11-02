import React from "react";

type Review = {
  id: string;
  text: string;
  name: string;
  avatar: string;
  rating: number;
};

type ReviewsProps = {
  title?: string;
  reviews?: Review[];
  reviewsCount?: number;
  currentPage?: number;
  totalPages?: number;
  onPrevious?: () => void;
  onNext?: () => void;
};

export default function Reviews({
  title = "Reviews",
  reviewsCount = 3,
  currentPage = 1,
  totalPages = 4,
  onPrevious,
  onNext,
}: ReviewsProps) {
  const reviews: Review[] =
    reviewsCount > 0
      ? Array.from({ length: reviewsCount }, (_, i) => ({
          id: `review-${i}`,
          text: "I have been extremely happy with the results of working with the creative agency, and I would highly recommend them to...",
          name: "Name Here",
          avatar: `https://i.pravatar.cc/48?img=${i + 10}`,
          rating: 5,
        }))
      : [];

  return (
    <div className="mt-6">
      <div className="mb-3 text-sm font-semibold text-neutral-700">{title}</div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {reviews.map((review) => (
          <div key={review.id} className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-black/5">
            <p className="text-sm text-neutral-600 leading-relaxed">
              <span className="text-2xl leading-none text-neutral-400">"</span>
              {review.text}
            </p>
            <div className="mt-4 flex items-start gap-3">
              <img
                src={review.avatar}
                alt={review.name}
                className="h-12 w-12 rounded-full flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <div className="text-sm font-semibold text-neutral-800">{review.name}</div>
                <div className="mt-1 text-xs text-amber-500">
                  {"★".repeat(review.rating)}
                </div>
              </div>
            </div>
            <div className="mt-4 flex justify-end">
              <button className="rounded-lg bg-neutral-100 px-4 py-2 text-xs font-medium text-neutral-700 hover:bg-neutral-200 transition-colors">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-sm text-neutral-600">
          We have <span className="font-bold text-blue-500">10+</span> Happy Brands
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm text-neutral-600">
            {currentPage}/{totalPages}
          </span>
          <button
            onClick={onPrevious}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-100 text-neutral-600 hover:bg-neutral-200 transition-colors"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={onNext}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-rose-500 text-white hover:bg-rose-600 transition-colors"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

