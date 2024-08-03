"use client";

import { Button } from "./ui/button";
import { useShopingCart } from "@/context/ShopingCartProvider";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "./ui/toast";
import { FaPlus, FaMinus } from "react-icons/fa";
import Link from "next/link";
import { AddToCartButtonProps } from "@/types";
import { FaRegTrashCan } from "react-icons/fa6";
import { Input } from "./ui/input";

const AddToCartButton = ({
  size,
  style,
  variant,
  product,
}: AddToCartButtonProps) => {
  const { toast } = useToast();

  const {
    increaseCartQuantity,
    decreaseQuantity,
    getItemQuantity,
    removeFromCart,
  } = useShopingCart();

  const handleAddToCart = () => {
    increaseCartQuantity(product.id);
    toast({
      title: "Added To Cart Successfully",
      action: (
        <Link href="/cart">
          <ToastAction altText="Cart">Cart</ToastAction>
        </Link>
      ),
    });
  };

  const handelRemoveFromCart = () => {
    removeFromCart(product.id);
    toast({
      title: "Item Removed Successfully",
    });
  };

  const quantity = getItemQuantity(product.id);

  const handelDecreaseQuantity = () => {
    decreaseQuantity(product.id);
    if (quantity === 1) {
      return toast({
        title: "Item Removed Successfully",
      });
    }
  };

  return quantity < 1 ? (
    <Button
      aria-label="Add to cart"
      size="sm"
      className={style}
      variant={variant || "default"}
      onClick={handleAddToCart}
    >
      Add to card
    </Button>
  ) : (
    <div className="flex justify-between items-center gap-1 sm:gap-2">
      <div className="flex items-center">
        <Button
          variant="outline"
          size="sm"
          className="rounded-r-none"
          onClick={() => increaseCartQuantity(product.id)}
        >
          <FaPlus size={8} />
        </Button>
        <Input
          type="number"
          className="w-[40px] h-9 border-x-0 shadow-none rounded-none focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
          defaultValue={getItemQuantity(product.id)}
        />
        <Button
          variant="outline"
          size="sm"
          className="rounded-l-none"
          onClick={handelDecreaseQuantity}
        >
          <FaMinus size={8} />
        </Button>
      </div>
      <div>
        {quantity > 1 && (
          <Button variant="outline" size="sm" onClick={handelRemoveFromCart}>
            <FaRegTrashCan size={13} />
          </Button>
        )}
      </div>
    </div>
  );
};

export default AddToCartButton;
