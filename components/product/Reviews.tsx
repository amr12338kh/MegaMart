"use client";

import { ProductProps, ReviewsProps } from "@/types";
import { UserCircle2, Star } from "lucide-react";
import { calculateDateDifference } from "@/lib/utils";
import React, { useState } from "react";
import RatingStars from "../RatingStars";
import ReviewsForm from "../forms/ReviewsForm";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { calculateAverageRating } from "@/lib/helpers";

const Reviews = ({ product }: { product: ProductProps }) => {
  const [reviews, setReviews] = useState<ReviewsProps[]>(product.reviews);

  return (
    <div className="space-y-6">
      <div className="bg-primary-foreground rounded-lg p-6 flex flex-col gap-y-6">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Star className="w-8 h-8 text-yellow-500 fill-yellow-500" />
            <span className="text-3xl font-bold">
              {calculateAverageRating(reviews)}
            </span>
          </div>
          <div>
            <h2 className="text-lg font-semibold">Customer Reviews</h2>
            <p className="text-muted-foreground">
              {reviews.length} {reviews.length === 1 ? "review" : "reviews"}
            </p>
          </div>
        </div>
        <ReviewsForm reviews={reviews} setReviews={setReviews} />
      </div>

      <div className="space-y-6">
        {reviews.length === 0 ? (
          <div className="text-center text-muted-foreground py-8">
            No reviews yet. Be the first to leave a review!
          </div>
        ) : (
          reviews.map(
            ({ date, reviewerName, reviewerEmail, comment, rating }, i) => (
              <Card key={i} className="hover:shadow-sm transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <UserCircle2
                      size="40"
                      className="text-muted-foreground shrink-0 mt-1"
                    />
                    <div className="flex-grow">
                      <div className="flex justify-between items-center mb-2">
                        <div>
                          <div className="flex items-center gap-2">
                            <h2 className="font-semibold">{reviewerName}</h2>
                          </div>
                          <p className="text-xs text-muted-foreground">
                            {reviewerEmail}
                          </p>
                        </div>
                        <span className="text-xs text-muted-foreground">
                          {calculateDateDifference(date)}
                        </span>
                      </div>

                      <RatingStars rating={rating} />

                      <p className="mt-3 text-sm text-foreground/80">
                        {comment}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          )
        )}
      </div>
    </div>
  );
};

export default Reviews;
