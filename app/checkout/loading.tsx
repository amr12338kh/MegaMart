"use client";

import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";

const CheckoutLoading = () => {
  return (
    <div className="container py-8 min-h-[80vh]">
      <div className="flex items-center justify-between mb-4">
        <h1 className="scroll-m-20 text-2xl sm:text-3xl font-extrabold tracking-tight">
          Checkout
        </h1>
        <Skeleton className="h-4 w-20" />
      </div>
      <Separator className="mb-8" />

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-4">
                Shipping Information
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <Skeleton className="h-10 w-full" />
                <Skeleton className="h-10 w-full" />
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mt-4">
                <Skeleton className="h-10 w-full" />
                <Skeleton className="h-10 w-full" />
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-3">Address</h3>
              <Skeleton className="h-10 w-full mb-4" />

              <div className="grid sm:grid-cols-2 gap-4">
                <Skeleton className="h-10 w-full" />
                <Skeleton className="h-10 w-full" />
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mt-4">
                <Skeleton className="h-10 w-full" />
                <Skeleton className="h-10 w-full" />
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <Skeleton className="h-14 w-full" />
                <Skeleton className="h-14 w-full" />
              </div>

              <div className="mt-4 space-y-4">
                <Skeleton className="h-10 w-full" />
                <Skeleton className="h-10 w-full" />

                <div className="grid sm:grid-cols-2 gap-4">
                  <Skeleton className="h-10 w-full" />
                  <Skeleton className="h-10 w-full" />
                </div>
              </div>
            </div>

            <Skeleton className="h-5 w-48 mt-4" />

            <Skeleton className="h-10 w-full mt-8" />
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="border rounded-lg p-6">
            <h2 className="font-medium mb-4">Order Summary</h2>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-4 w-16" />
              </div>
              <div className="flex justify-between text-sm">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-4 w-16" />
              </div>
              <div className="flex justify-between text-sm">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-4 w-16" />
              </div>
              <Separator className="my-3" />
              <div className="flex justify-between font-medium">
                <Skeleton className="h-5 w-12" />
                <Skeleton className="h-6 w-20" />
              </div>
            </div>

            <div className="mt-6 pt-6 border-t">
              <h3 className="font-medium mb-3">Order Items</h3>
              <div className="space-y-4">
                {[1, 2].map((item) => (
                  <div key={item} className="flex gap-3">
                    <Skeleton className="h-16 w-16 rounded-md" />
                    <div className="flex flex-col justify-between py-1 flex-1">
                      <Skeleton className="h-4 w-full" />
                      <div className="flex justify-between">
                        <Skeleton className="h-3 w-10" />
                        <Skeleton className="h-4 w-12" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutLoading;
