"use client";

import { Star } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

type RatingStarsProps = {
  rating?: number;
  showHoverCard?: boolean;
};

const RatingStars = ({
  rating = 0,
  showHoverCard = true,
}: RatingStarsProps) => {
  const filledStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  const renderStars = () => {
    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className={`${
              i < filledStars
                ? "fill-yellow-400 text-yellow-400"
                : i < filledStars + (hasHalfStar ? 1 : 0)
                ? "fill-yellow-400/50 text-yellow-400"
                : "fill-muted text-muted"
            }`}
          />
        ))}
      </div>
    );
  };

  if (!showHoverCard || !rating) {
    return renderStars();
  }

  return (
    <div>
      <HoverCard>
        <HoverCardTrigger asChild>
          <span className="cursor-pointer">{renderStars()}</span>
        </HoverCardTrigger>
        <HoverCardContent className="w-auto p-2">
          <p className="text-xs">Rating: {rating.toFixed(1)} out of 5</p>
        </HoverCardContent>
      </HoverCard>
    </div>
  );
};

export default RatingStars;
