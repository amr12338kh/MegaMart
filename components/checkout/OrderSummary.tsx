import React from "react";
import { Card, CardContent, CardFooter } from "../ui/card";
import { formatPrice } from "@/lib/helpers";
import { useShoppingCart } from "@/context/ShoppingCartProvider";
import { ProductProps } from "@/types";
import { Separator } from "../ui/separator";
import { ShieldCheck } from "lucide-react";

interface Props {
  products: ProductProps[];
}

const OrderSummary = ({ products }: Props) => {
  const { cartItems, calculateTotalPrice } = useShoppingCart();

  const subtotal: number = calculateTotalPrice(products);
  const shipping: number = 10;
  const tax: number = Math.round(subtotal * 0.005);
  const total = subtotal + shipping + tax;

  return (
    <Card>
      <CardContent className="pt-6">
        <h2 className="font-medium mb-4">Order Summary</h2>
        <div className="space-y-3">
          <div className="flex justify-between text-sm">
            <p className="text-muted-foreground">
              Subtotal ({cartItems.length} items)
            </p>
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

        <div className="mt-6 pt-6 border-t">
          <h3 className="font-medium mb-3">Order Items ({cartItems.length})</h3>
          <div className="space-y-4 max-h-60 overflow-y-auto pr-2">
            {cartItems.map((item) =>
              products.map(
                (product) =>
                  product.id === item.id && (
                    <div key={product.id} className="flex gap-3">
                      <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border">
                        <img
                          src={product.thumbnail}
                          alt={product.title}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="flex flex-col justify-between py-1 w-full">
                        <p className="text-sm font-medium line-clamp-1">
                          {product.title}
                        </p>
                        <div className="flex justify-between">
                          <p className="text-xs text-muted-foreground">
                            Qty: {item.quantity}
                          </p>
                          <p className="text-sm font-medium">
                            $
                            {formatPrice(
                              product.discountPercentage
                                ? (product.price -
                                    (product.price *
                                      product.discountPercentage) /
                                      100) *
                                    item.quantity
                                : product.price * item.quantity
                            )}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
              )
            )}
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-0 pb-6">
        <div className="flex items-center justify-center w-full space-x-2 text-xs text-muted-foreground mt-4">
          <ShieldCheck size={14} />
          <span>Secure checkout</span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default OrderSummary;
