"use client";

import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ProductProps } from "@/types";
import ProductDialog from "./ProductDialog";
import AddToCartButton from "../AddToCartButton";
import { Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import RatingStars from "../RatingStars";
import { Button } from "../ui/button";
import { getDiscountedPrice, nameFormatter } from "@/lib/helpers";

interface Props {
  product: ProductProps;
}

const ProductCard = ({ product }: Props) => {
  const { id, title, thumbnail, price, rating, category, discountPercentage } =
    product;
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const hasDiscount = discountPercentage && discountPercentage > 0;

  return (
    <Card
      className="h-full w-full overflow-hidden rounded-xl border border-muted shadow-sm transition-all duration-200 hover:shadow-md"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardHeader className="relative p-0">
        {category && (
          <div className="absolute z-10 left-3 top-3">
            <Link href={`/category/${category}`}>
              <Badge
                variant="secondary"
                className="capitalize text-xs font-medium bg-secondary/80"
              >
                {nameFormatter(category)}
              </Badge>
            </Link>
          </div>
        )}

        <Link
          href={`/product/${id}`}
          aria-label={`View ${title} details`}
          className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
        >
          <AspectRatio
            ratio={4 / 3}
            className="bg-primary-foreground overflow-hidden"
          >
            <div className="relative w-full h-full">
              <img
                src={thumbnail}
                alt={title}
                className={`absolute inset-0 w-full h-full object-cover transition-transform duration-300 ${
                  isHovered ? "scale-105" : "scale-100"
                }`}
                loading="lazy"
              />
            </div>
          </AspectRatio>
        </Link>

        {hasDiscount && (
          <Badge variant="destructive" className="absolute right-3 top-3">
            {Math.round(discountPercentage) === 0
              ? discountPercentage.toFixed(2)
              : Math.round(discountPercentage)}
            % OFF
          </Badge>
        )}
      </CardHeader>

      <Link
        href={`/product/${id}`}
        aria-label={`View ${title} details`}
        className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
      >
        <CardContent className="space-y-3 p-4">
          <div className="flex items-center gap-1">
            <RatingStars rating={rating} showHoverCard={false} />
            {rating && (
              <span className="ml-1 text-xs text-muted-foreground">
                ({rating})
              </span>
            )}
          </div>

          <CardTitle className="line-clamp-1 text-base font-medium text-primary">
            {title}
          </CardTitle>

          <div className="flex items-baseline gap-2">
            <CardDescription className="text-lg font-bold text-primary">
              ${getDiscountedPrice(price, discountPercentage)}
            </CardDescription>
            {hasDiscount && (
              <span className="text-sm text-muted-foreground line-through">
                ${price.toFixed(2)}
              </span>
            )}
          </div>
        </CardContent>
      </Link>

      <CardFooter className="grid grid-cols-[1fr,auto] gap-2 border-t border-muted bg-primary-foreground p-4">
        <AddToCartButton product={product} style="w-full" />
        <div className="flex gap-2">
          <Button
            onClick={() => setIsFavorite(!isFavorite)}
            className="h-9 w-9"
            size="icon"
            variant="secondary"
            aria-label={
              isFavorite ? "Remove from favorites" : "Add to favorites"
            }
          >
            <Heart
              size={18}
              className={
                isFavorite
                  ? "fill-red-500 text-red-500"
                  : "text-muted-foreground"
              }
            />
          </Button>
          <ProductDialog product={product} />
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
