"use client";

import React, { useEffect } from "react";
import { Card, CardContent, CardFooter } from "../ui/card";
import { AnimatedCheckCircle } from "./AnimatedCheckCircle";
import Link from "next/link";
import { Button } from "../ui/button";

const OrderComplete = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="container min-h-[80vh] flex justify-center items-center">
      <Card className="max-w-xl mx-auto border-none shadow-none">
        <CardContent className="pt-6 pb-4 text-center">
          <AnimatedCheckCircle />
          <h1 className="text-2xl font-bold mb-2">Order Complete!</h1>
          <p className="text-muted-foreground mb-6">
            Thank you for your purchase. Your order has been processed
            successfully.
          </p>
          <div className="bg-muted p-4 rounded-lg mb-6">
            <h3 className="font-medium mb-2">Order Number</h3>
            <p className="text-lg font-mono">
              #ORD-{Math.floor(100000 + Math.random() * 900000)}
            </p>
          </div>
          <p className="text-sm text-muted-foreground mb-6">
            A confirmation email has been sent to your email address.
          </p>
        </CardContent>
        <CardFooter className="flex justify-center pb-6">
          <Link href="/products">
            <Button>Continue Shopping</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default OrderComplete;
