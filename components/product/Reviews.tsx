"use client";

import { ProductProps, ReviewsProps } from "@/types";
import { UserCircle2 } from "lucide-react";
import { calculateDateDifference } from "@/lib/utils";
import React, { useState } from "react";
import RatingStars from "../RatingStars";
import ReviewsForm from "../forms/ReviewsForm";

const Reviews = ({ product }: { product: ProductProps }) => {
  const [reviews, setReviews] = useState<ReviewsProps[]>(product.reviews);

  return (
    <div>
      <ReviewsForm reviews={reviews} setReviews={setReviews} />
      {reviews.map((review, i) => (
        <div key={i} className="my-8">
          <div className="flex gap-2">
            <UserCircle2 size="30" />
            <div>
              <h2 className="text-sm">
                @{review.reviewerName}{" "}
                <span className="text-xs text-muted-foreground">
                  {calculateDateDifference(review.date)}
                </span>
              </h2>
              <h3 className="text-muted-foreground text-xs">
                {review.reviewerEmail}
              </h3>
              <div className="mt-2">
                <RatingStars rating={review.rating} />
                <p>{review.comment}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
