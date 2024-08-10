"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { Slider } from "@/components/ui/slider";
import { useMemo, useState } from "react";
import CategoryCommand from "./CategoryCommand";
import { Suspense } from "react";
import CommandLoading from "../skeletons/CommandLoading";

const Filter = () => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(10000);

  const handleMinPriceChange = (value: number[]) => {
    if (value[0] <= maxPrice) {
      setMinPrice(value[0]);
    }
  };

  const handleMaxPriceChange = (value: number[]) => {
    if (value[0] >= minPrice) {
      setMaxPrice(value[0]);
    }
  };

  const MemoizedCategoryCommand = useMemo(() => {
    return (
      <Suspense fallback={<CommandLoading />}>
        <CategoryCommand />
      </Suspense>
    );
  }, []); // The empty dependency array ensures this memoization only happens once

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="sm" variant="outline">
          Filter
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Filter</SheetTitle>
          <SheetDescription>
            Adjust the options below to find exactly what you&apos;re looking
            for.
          </SheetDescription>
          <Separator />
        </SheetHeader>

        <div className="mt-4">
          <h1 className="text-lg font-semibold mb-4">Filter by Price:</h1>
          <div className="relative w-full">
            <div className="mb-4">
              <Slider
                min={0}
                max={10000}
                step={10}
                value={[minPrice]}
                onValueChange={handleMinPriceChange}
                className="w-full"
              />
              <div className="text-sm mt-2">Min: ${minPrice}</div>
            </div>
            <div>
              <Slider
                min={0}
                max={10000}
                step={10}
                value={[maxPrice]}
                onValueChange={handleMaxPriceChange}
                className="w-full"
              />
              <div className="text-sm mt-2">Max: ${maxPrice}</div>
            </div>
          </div>
          <div className="flex justify-between text-sm mt-2">
            <span>${minPrice}</span>
            <span>${maxPrice}</span>
          </div>
        </div>

        <Separator className="my-4" />
        {MemoizedCategoryCommand}
      </SheetContent>
    </Sheet>
  );
};

export default Filter;
