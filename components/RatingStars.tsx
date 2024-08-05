import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";

const RatingStars = ({ rating }: { rating: number }) => {
  return (
    <HoverCard>
      <HoverCardTrigger>
        <span className="flex text-yellow-400 space-x-1">
          {Array.from({ length: 5 }).map((_, index) =>
            index < Math.round(rating) ? (
              <FaStar key={index} />
            ) : (
              <FaRegStar key={index} />
            )
          )}
        </span>
      </HoverCardTrigger>
      <HoverCardContent>Rating: {rating}</HoverCardContent>
    </HoverCard>
  );
};

export default RatingStars;
