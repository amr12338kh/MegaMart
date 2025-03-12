"use client";

import { ReviewsProps } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "../ui/form";
import { Textarea } from "../ui/textarea";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  comment: z
    .string()
    .min(4, { message: "Review must be at least 4 characters long" }),
});

const RatingInput = ({
  value,
  onChange,
}: {
  value: number;
  onChange: (rating: number) => void;
}) => {
  return (
    <div className="flex items-center space-x-1">
      {[1, 2, 3, 4, 5].map((rating) => (
        <button
          key={rating}
          type="button"
          aria-label={`${rating} star rating`}
          className={cn(
            "transition-colors duration-200 ease-in-out",
            rating <= value
              ? "text-yellow-500 hover:text-yellow-600"
              : "text-muted-foreground hover:text-yellow-400",
            "focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-opacity-50",
            "rounded-full p-1"
          )}
          onClick={() => onChange(rating)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.007z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      ))}
    </div>
  );
};

const ReviewsForm = ({
  reviews,
  setReviews,
}: {
  reviews: ReviewsProps[];
  setReviews: React.Dispatch<React.SetStateAction<ReviewsProps[]>>;
}) => {
  const [newReview, setNewReview] = useState<ReviewsProps>({
    reviewerName: "Anonymous User",
    reviewerEmail: "anonymous@gmail.com",
    comment: "",
    date: new Date().toISOString(),
    rating: 0,
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      comment: "",
    },
  });

  const handleRating = (rating: number) => {
    setNewReview({ ...newReview, rating });
  };

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    if (newReview.rating === 0) {
      form.setError("comment", {
        type: "manual",
        message: "Please select a rating before submitting",
      });
      return;
    }

    const updatedReview = { ...newReview, comment: values.comment };
    setReviews([...reviews, updatedReview]);

    setNewReview({
      reviewerName: "Anonymous User",
      reviewerEmail: "anonymous@gmail.com",
      comment: "",
      date: new Date().toISOString(),
      rating: 0,
    });
    form.reset();
  };

  return (
    <div className="bg-background rounded-lg p-6 ">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="flex flex-col space-y-2">
            <label className="text-sm font-medium text-primary">
              Your Rating
            </label>
            <RatingInput value={newReview.rating} onChange={handleRating} />
          </div>

          <FormField
            control={form.control}
            name="comment"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder="Write your review here (minimum 4 characters)"
                    className="resize-none"
                    rows={4}
                    {...field}
                  />
                </FormControl>
                <FormMessage>{fieldState.error?.message}</FormMessage>
              </FormItem>
            )}
          />

          <div className="flex justify-end">
            <Button
              type="submit"
              className="bg-primary hover:bg-primary/90 transition-colors"
              disabled={
                newReview.rating === 0 || form.watch("comment").length < 4
              }
            >
              Submit Review
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ReviewsForm;
