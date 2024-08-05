"use client";

import { useShopingCart } from "@/context/ShopingCartProvider";
import { ProductProps } from "@/types";
import { FiShoppingCart } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import CartItem from "./CartItem";
import { Separator } from "@/components/ui/separator";

interface Props {
  products: ProductProps[];
}

const Crat = ({ products }: Props) => {
  const { cartItems, calculateTotalPrice } = useShopingCart();

  const subtotal: number = calculateTotalPrice(products);
  const shipping: number = 10;
  const Tax: number = Math.round(subtotal * 0.005);

  const formatPrice = (price: number) => price.toFixed(2);

  return cartItems.length > 0 ? (
    <>
      {cartItems.map((item) =>
        products.map(
          (product) =>
            product.id === item.id && (
              <>
                <CartItem key={product.id} product={product} />
                <Separator />
              </>
            )
        )
      )}
      <div className=" text-center">
        <Link href="/products" className="mt-8">
          <Button variant="link" className="text-sm">
            Continue Shopping
          </Button>
        </Link>
      </div>
      <Separator className="my-4" />
      <div className="w-full">
        <div className="flex justify-between text-muted-foreground">
          <p>Subtotal:</p>
          <p>${formatPrice(subtotal)}</p>
        </div>
        <div className="flex justify-between text-muted-foreground">
          <p>Shipping:</p>
          <p>${formatPrice(shipping)}</p>
        </div>
        <div className="flex justify-between text-muted-foreground">
          <p>Tax:</p>
          <p>${formatPrice(Tax)}</p>
        </div>
        <Separator className="my-4" />
        <div className="flex justify-between">
          <p className="scroll-m-20 font-semibold tracking-tight">Total:</p>
          <p className="scroll-m-20 font-semibold tracking-tight">
            ${formatPrice(subtotal + shipping + Tax)}
          </p>
        </div>
      </div>
    </>
  ) : (
    <div className="flex flex-col items-center justify-center pt-16">
      <div className="p-6 rounded-full bg-primary-foreground">
        <FiShoppingCart size={50} />
      </div>
      <h2 className="scroll-m-20 text-2xl sm:text-3xl font-semibold tracking-tight my-3">
        Your cart is empty
      </h2>
      <p className="text-xs text-muted-foreground">
        Add items to your cart to checkout.
      </p>
      <Link href="/products" className="mt-8">
        <Button variant="link" className="text-sm">
          Shop Now
        </Button>
      </Link>
    </div>
  );
};

export default Crat;
