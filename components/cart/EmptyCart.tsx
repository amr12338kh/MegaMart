import { ShoppingBag, ShoppingCart } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const EmptyCart = () => {
  return (
    <div className="container py-8 min-h-[80vh] flex flex-col items-center justify-center">
      <div className="p-6 rounded-full bg-primary/10 text-primary mb-6">
        <ShoppingCart size={48} strokeWidth={1.5} />
      </div>
      <h2 className="text-2xl font-semibold tracking-tight mb-2">
        Your cart is empty
      </h2>
      <p className="text-sm text-muted-foreground text-center max-w-md mb-8">
        Looks like you haven&apos;t added anything to your cart yet. Browse our
        products and find something you&apos;ll love!
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

export default EmptyCart;
