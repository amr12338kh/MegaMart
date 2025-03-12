import { ShoppingBag, ShoppingCart } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const EmptyCheckout = () => {
  return (
    <div className="container py-8 min-h-[80vh] flex flex-col items-center justify-center">
      <div className="p-6 rounded-full bg-primary/10 text-primary mb-6">
        <ShoppingCart size={48} strokeWidth={1.5} />
      </div>
      <h2 className="text-2xl font-semibold tracking-tight mb-2">
        Your checkout is empty
      </h2>
      <p className="text-sm text-muted-foreground text-center max-w-md mb-8">
        You need to add products to your cart before proceeding to checkout.
        Browse our collection and find something you&apos;ll love!
      </p>
      <Link href="/products">
        <Button className="px-8 py-6 text-base flex items-center gap-2 rounded-full">
          <ShoppingBag size={18} />
          <span>Start Shopping</span>
        </Button>
      </Link>
    </div>
  );
};

export default EmptyCheckout;
