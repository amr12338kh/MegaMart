"use client";

import { useShoppingCart } from "@/context/ShoppingCartProvider";
import { Button } from "./ui/button";
import { ProductProps } from "@/types";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Loader2 } from "lucide-react";

interface Props {
  product: ProductProps;
}

const BuyButton = ({ product }: Props) => {
  const { id } = product;
  const [isClicked, setIsClicked] = useState(false);
  const router = useRouter();
  const { increaseCartQuantity, getItemQuantity } = useShoppingCart();
  const quantity = getItemQuantity(id);

  const handleBuyButton = () => {
    setIsClicked(true);
    if (quantity < 1) {
      increaseCartQuantity(id);
    }
    router.replace("/cart");
  };

  return isClicked ? (
    <Button variant="default" size="sm" disabled>
      <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Loading...
    </Button>
  ) : (
    <Button variant="default" size="sm" onClick={handleBuyButton}>
      Buy now
    </Button>
  );
};

export default BuyButton;
