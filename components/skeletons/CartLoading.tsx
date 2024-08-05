"use client";

import CartItemLoading from "@/components/skeletons/CartItemLoading";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { useShopingCart } from "@/context/ShopingCartProvider";
import { Loader2 } from "lucide-react";

const CartLoading = () => {
  const { cartItems } = useShopingCart();
  return (
    <main className=" container w-full py-8 min-h-[80vh]">
      <Skeleton className="h-6 max-w-40 w-full sm:h-8" />
      <Separator className="my-4" />
      {cartItems.length > 0 ? (
        <section className="flex flex-col gap-4">
          {Array.from({ length: cartItems.length }).map((_, i) => (
            <>
              <CartItemLoading key={i} />
              <Separator />
            </>
          ))}
        </section>
      ) : (
        <section className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[50%]">
          <h1 className="flex items-center">
            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Loading...
          </h1>
        </section>
      )}
    </main>
  );
};

export default CartLoading;
