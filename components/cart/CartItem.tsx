"use client";

import { Plus, Minus, Trash2 } from "lucide-react";
import Image from "next/image";
import { useShoppingCart } from "@/context/ShoppingCartProvider";
import { ProductProps } from "@/types/index";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useToast } from "@/components/ui/use-toast";
import { Badge } from "@/components/ui/badge";
import { nameFormatter } from "@/lib/helpers";

interface Props {
  product: ProductProps;
}

const CartItem = ({ product }: Props) => {
  const { toast } = useToast();
  const { title, thumbnail, price, id, category, discountPercentage } = product;

  const discountedPrice = discountPercentage
    ? price - (price * discountPercentage) / 100
    : price;
  const hasDiscount = discountPercentage && discountPercentage > 0;

  const {
    getItemQuantity,
    removeFromCart,
    decreaseQuantity,
    increaseCartQuantity,
  } = useShoppingCart();

  const quantity = getItemQuantity(id);
  const itemTotal = hasDiscount ? discountedPrice * quantity : price * quantity;

  const handleRemoveFromCart = () => {
    removeFromCart(id);
    toast({
      title: "Item Removed Successfully",
    });
  };

  const formatPrice = (price: number) => price.toFixed(2);

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 w-full">
      <div className="flex flex-1 gap-4">
        <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border bg-background/40">
          <img
            src={thumbnail}
            alt={title}
            className="object-cover transition-transform hover:scale-105"
            sizes="80px"
          />
        </div>

        <div className="flex flex-col justify-between py-1">
          <div>
            <div className="flex items-center justify-between gap-2 flex-wrap">
              <Link href={`/product/${id}`} className="group">
                <h3 className="font-medium line-clamp-1 group-hover:text-primary transition-colors">
                  {title}
                </h3>
              </Link>

              {hasDiscount && (
                <Badge
                  variant="outline"
                  className="text-[10px] px-1.5 bg-primary/5 text-primary border-primary/20 hidden sm:block"
                >
                  {Math.round(discountPercentage) === 0
                    ? discountPercentage.toFixed(2)
                    : Math.round(discountPercentage)}
                  % OFF
                </Badge>
              )}
            </div>

            <Link
              href={`/category/${category}`}
              className="inline-block mt-0.5"
            >
              <p className="text-xs text-muted-foreground hover:text-foreground capitalize transition-colors">
                {nameFormatter(category)}
              </p>
            </Link>
          </div>

          <div className="flex items-baseline mt-1">
            <span className="font-medium mr-2">
              ${formatPrice(hasDiscount ? discountedPrice : price)}
            </span>
            {hasDiscount && (
              <span className="text-xs text-muted-foreground line-through">
                ${formatPrice(price)}
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="flex sm:flex-col items-center justify-between sm:justify-end gap-4 mt-3 sm:mt-0">
        <div className="flex items-center">
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 rounded-r-none border-r-0"
            onClick={() => decreaseQuantity(id)}
            disabled={quantity <= 1}
          >
            <Minus size={14} />
          </Button>
          <div className="flex items-center justify-center h-8 px-3 border min-w-[40px]">
            {quantity}
          </div>
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 rounded-l-none border-l-0"
            onClick={() => increaseCartQuantity(id)}
          >
            <Plus size={14} />
          </Button>
        </div>

        <div className="flex items-center gap-3">
          <span className="font-medium text-sm hidden sm:block">
            ${formatPrice(itemTotal)}
          </span>
          {hasDiscount && (
            <Badge
              variant="outline"
              className="text-[10px] px-1.5 bg-primary/5 text-primary border-primary/20 sm:hidden"
            >
              {Math.round(discountPercentage) === 0
                ? discountPercentage.toFixed(2)
                : Math.round(discountPercentage)}
              % OFF
            </Badge>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={handleRemoveFromCart}
            className="h-8 w-8 text-muted-foreground hover:text-destructive hover:bg-destructive/10"
          >
            <Trash2 size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
