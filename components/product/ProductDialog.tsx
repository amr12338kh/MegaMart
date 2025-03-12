"use client";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { buttonVariants } from "../ui/button";
import { FaEye, FaExpand } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { ProductProps } from "@/types";
import Link from "next/link";
import { AspectRatio } from "../ui/aspect-ratio";
import RatingStars from "../RatingStars";
import { getDiscountedPrice, nameFormatter } from "@/lib/helpers";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import AddToCartButton from "../AddToCartButton";
import { Heart } from "lucide-react";
import { useState } from "react";

interface Props {
  product: ProductProps;
  defaultOpen?: boolean;
}

const ProductDialog = ({ product, defaultOpen = false }: Props) => {
  const {
    id,
    title,
    description,
    rating,
    thumbnail,
    price,
    stock,
    discountPercentage,
    category,
  } = product;
  const [isFavorite, setIsFavorite] = useState(false);
  const hasDiscount = discountPercentage && discountPercentage > 0;
  const isLowStock = stock <= 5;

  return (
    <Dialog>
      <DialogTrigger>
        <div
          className={cn(
            buttonVariants({
              variant: "secondary",
              size: "icon",
              className: "h-9 w-9 shrink-0",
            })
          )}
        >
          <FaEye className="text-lg" />
        </div>
      </DialogTrigger>
      <DialogContent className="p-0 rounded-lg overflow-hidden w-11/12 sm:w-4/5 lg:w-3/4 xl:w-2/3 max-w-4xl shadow-xl">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-2/5 bg-gray-50 flex items-center">
            <AspectRatio ratio={1} className="w-full">
              <div className="relative w-full h-full group">
                <img
                  src={thumbnail}
                  alt={title}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                {hasDiscount && (
                  <Badge className="absolute -top-4 left-4 bg-red-500 hover:bg-red-600">
                    {Math.round(discountPercentage) === 0
                      ? discountPercentage.toFixed(2)
                      : Math.round(discountPercentage)}
                    % OFF
                  </Badge>
                )}
              </div>
            </AspectRatio>
          </div>

          <div className="w-full md:w-3/5 flex flex-col p-6 md:p-8">
            <div className="mb-2">
              {category && (
                <Link href={`/category/${category}`}>
                  <Badge
                    variant="outline"
                    className="mb-2 text-xs font-normal capitalize"
                  >
                    {nameFormatter(category)}
                  </Badge>
                </Link>
              )}
              <DialogTitle className="text-xl md:text-2xl font-bold mb-2">
                {title}
              </DialogTitle>

              <div className="flex items-center gap-2 mb-1">
                <RatingStars rating={rating} />
                <span className="text-sm text-muted-foreground">
                  ({rating})
                </span>
              </div>

              <div className="flex items-baseline mb-4">
                {hasDiscount ? (
                  <>
                    <span className="text-2xl font-bold text-primary">
                      ${getDiscountedPrice(price, discountPercentage)}
                    </span>
                    <span className="ml-2 text-sm text-muted-foreground line-through">
                      ${price.toFixed(2)}
                    </span>
                  </>
                ) : (
                  <span className="text-2xl font-bold text-primary">
                    ${price.toFixed(2)}
                  </span>
                )}
              </div>
            </div>

            <div className="flex-grow">
              <p className="text-base text-muted-foreground mb-6">
                {description}
              </p>

              <div className="flex items-center mb-6">
                <div
                  className={`w-3 h-3 rounded-full mr-2 ${
                    isLowStock ? "bg-amber-500" : "bg-green-500"
                  }`}
                ></div>
                <p
                  className={`text-sm ${
                    isLowStock
                      ? "text-amber-600 font-medium"
                      : "text-muted-foreground"
                  }`}
                >
                  {isLowStock
                    ? `Only ${stock} left in stock!`
                    : `${stock} in stock`}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3 mt-auto">
              <div className="flex gap-2">
                <AddToCartButton product={product} style="w-full" />
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
              </div>

              <Link
                href={`/product/${id}`}
                className="text-center py-2 text-sm text-primary hover:underline"
              >
                <span className="flex items-center justify-center gap-1">
                  View Full Details <FaExpand className="text-xs" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDialog;
