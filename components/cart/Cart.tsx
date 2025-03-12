"use client";

import { useShoppingCart } from "@/context/ShoppingCartProvider";
import { ProductProps } from "@/types";
import { ShoppingCart, ArrowRight, ShoppingBag, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import CartItem from "./CartItem";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import EmptyCart from "./EmptyCart";

interface Props {
  products: ProductProps[];
}

const Cart = ({ products }: Props) => {
  const { cartItems, calculateTotalPrice } = useShoppingCart();

  const subtotal: number = calculateTotalPrice(products);
  const shipping: number = 10;
  const tax: number = Math.round(subtotal * 0.005);
  const total = subtotal + shipping + tax;

  const formatPrice = (price: number) => price.toFixed(2);

  if (cartItems.length === 0) return <EmptyCart />;

  return (
    <main className=" container w-full py-8 min-h-[80vh]">
      <h1 className="scroll-m-20 text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
        Your Shopping Cart
      </h1>
      <Separator className="my-4" />
      <section className="flex flex-col gap-4">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-background rounded-lg border">
              <div className="p-4 border-b">
                <h2 className="font-medium">Cart Items ({cartItems.length})</h2>
              </div>
              <div className="divide-y">
                {cartItems.map((item) =>
                  products.map(
                    (product) =>
                      product.id === item.id && (
                        <div key={product.id} className="p-4">
                          <CartItem product={product} />
                        </div>
                      )
                  )
                )}
              </div>
            </div>

            <div className="flex justify-between items-center">
              <Link
                href="/products"
                className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors group"
              >
                <ArrowLeft
                  size={16}
                  className="mr-2 group-hover:-translate-x-1 duration-200 transition-transform "
                />
                Continue Shopping
              </Link>
            </div>
          </div>

          <div className="md:col-span-1">
            <Card>
              <CardContent className="pt-6">
                <h2 className="font-medium mb-4">Order Summary</h2>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <p className="text-muted-foreground">Subtotal</p>
                    <p>${formatPrice(subtotal)}</p>
                  </div>
                  <div className="flex justify-between text-sm">
                    <p className="text-muted-foreground">Shipping</p>
                    <p>${formatPrice(shipping)}</p>
                  </div>
                  <div className="flex justify-between text-sm">
                    <p className="text-muted-foreground">Tax</p>
                    <p>${formatPrice(tax)}</p>
                  </div>
                  <Separator className="my-3" />
                  <div className="flex justify-between font-medium">
                    <p>Total</p>
                    <p className="text-lg">${formatPrice(total)}</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col pt-2 pb-6">
                <Link href="/checkout" className="w-full">
                  <Button className="w-full mb-2">Checkout</Button>
                </Link>
                <div className="text-xs text-center text-muted-foreground mt-4">
                  Secure checkout
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Cart;
