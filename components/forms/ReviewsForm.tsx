"use client";

import { ReviewsProps } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaStar, FaRegStar } from "react-icons/fa";
import { z } from "zod";
import { Button } from "../ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

const formSchema = z.object({
  comment: z.string().min(2, { message: "Please enter your review" }),
});

const ReviewsForm = ({
  reviews,
  setReviews,
}: {
  reviews: ReviewsProps[];
  setReviews: React.Dispatch<React.SetStateAction<ReviewsProps[]>>;
}) => {
  const [newReview, setNewReview] = useState<ReviewsProps>({
    reviewerName: "user",
    reviewerEmail: "user32@gmail.com",
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
    const updatedReview = { ...newReview, comment: values.comment };
    setReviews([...reviews, updatedReview]);
    setNewReview({
      reviewerName: "user",
      reviewerEmail: "user32@gmail.com",
      comment: "",
      date: new Date().toISOString(),
      rating: 0,
    });
    form.reset();
  };

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex gap-x-2 mb-4"
        >
          <FormField
            control={form.control}
            name="comment"
            render={({ field, fieldState }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input placeholder="Add a review" {...field} />
                </FormControl>
                <FormMessage>{fieldState.error?.message}</FormMessage>
              </FormItem>
            )}
          />
          <Button type="submit">Add</Button>
        </form>
      </Form>
      <div className="flex space-x-1 text-yellow-400 cursor-pointer mb-4">
        {Array.from({ length: 5 }).map((_, index) => (
          <span key={index} onClick={() => handleRating(index + 1)}>
            {index < newReview.rating ? <FaStar /> : <FaRegStar />}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ReviewsForm;
