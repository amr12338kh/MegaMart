"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";
import CategoryCommand from "./CategoryCommand";
import { FilterIcon, Loader2, Minus, Plus, RefreshCcw } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const PRICE_PRESETS = [
  { label: "Under $50", min: 0, max: 50 },
  { label: "$50-$200", min: 50, max: 200 },
  { label: "$200-$500", min: 200, max: 500 },
  { label: "$500+", min: 500, max: 10000 },
];

const Filter = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [open, setOpen] = useState(false);
  const [isApplying, setIsApplying] = useState(false);
  const [isResetting, setIsResetting] = useState(false);

  const [minPrice, setMinPrice] = useState(
    Number(searchParams.get("minPrice") || 0)
  );
  const [maxPrice, setMaxPrice] = useState(
    Number(searchParams.get("maxPrice") || 10000)
  );

  const handleMinPriceChange = (value: number[]) => {
    setMinPrice(value[0]);
  };

  const handleMaxPriceChange = (value: number[]) => {
    setMaxPrice(value[0]);
  };

  const incrementMinPrice = () => {
    setMinPrice((prev) => Math.min(prev + 50, maxPrice - 50));
  };

  const decrementMinPrice = () => {
    setMinPrice((prev) => Math.max(prev - 50, 0));
  };

  const incrementMaxPrice = () => {
    setMaxPrice((prev) => Math.min(prev + 50, 10000));
  };

  const decrementMaxPrice = () => {
    setMaxPrice((prev) => Math.max(prev - 50, minPrice + 50));
  };

  const applyPricePreset = (min: number, max: number) => {
    setMinPrice(min);
    setMaxPrice(max);
  };

  const handleApplyFilter = async () => {
    try {
      setIsApplying(true);
      const params = new URLSearchParams(searchParams);

      params.set("minPrice", minPrice.toString());
      params.set("maxPrice", maxPrice.toString());

      await new Promise((resolve) => setTimeout(resolve, 500));

      await router.push(`${pathname}?${params.toString()}`);
    } catch (error) {
      console.error("Apply filter error:", error);
    } finally {
      setIsApplying(false);
      setOpen(false);
    }
  };

  const handleResetFilter = async () => {
    try {
      setIsResetting(true);

      await new Promise((resolve) => setTimeout(resolve, 500));

      setMinPrice(0);
      setMaxPrice(10000);

      await router.push(pathname);
    } catch (error) {
      console.error("Reset filter error:", error);
    } finally {
      setIsResetting(false);
      setOpen(false);
    }
  };

  return (
    <Sheet open={open} onOpenChange={() => setOpen(!open)}>
      <SheetTrigger asChild>
        <Button size="sm" variant="outline" className="gap-2">
          <FilterIcon className="h-4 w-4" />
          Filter
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <FilterIcon className="h-5 w-5 text-primary" />
            Filter Products
          </SheetTitle>
          <SheetDescription>
            Customize your product search with precise filters
          </SheetDescription>
          <Separator />
        </SheetHeader>

        <div className="flex-grow overflow-y-auto">
          <div className="mt-4 space-y-6">
            <div>
              <h2 className="text-lg font-semibold mb-4">Price Range</h2>

              {/* Price presets */}
              <div className="grid grid-cols-2 gap-2 mb-4">
                {PRICE_PRESETS.map((preset) => (
                  <Button
                    key={preset.label}
                    variant="outline"
                    size="sm"
                    onClick={() => applyPricePreset(preset.min, preset.max)}
                    className="text-xs"
                  >
                    {preset.label}
                  </Button>
                ))}
              </div>

              <div className="space-y-6">
                {/* Min price control */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Minimum Price</span>
                    <div className="flex items-center border rounded-md">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 rounded-r-none"
                        onClick={decrementMinPrice}
                        disabled={minPrice <= 0}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="px-2 text-sm min-w-16 text-center">
                        ${minPrice}
                      </span>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 rounded-l-none"
                        onClick={incrementMinPrice}
                        disabled={minPrice >= maxPrice - 50}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                  <Slider
                    min={0}
                    max={10000}
                    step={10}
                    value={[minPrice]}
                    onValueChange={handleMinPriceChange}
                    className="w-full"
                  />
                </div>

                {/* Max price control */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Maximum Price</span>
                    <div className="flex items-center border rounded-md">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 rounded-r-none"
                        onClick={decrementMaxPrice}
                        disabled={maxPrice <= minPrice + 50}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="px-2 text-sm min-w-16 text-center">
                        ${maxPrice}
                      </span>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 rounded-l-none"
                        onClick={incrementMaxPrice}
                        disabled={maxPrice >= 10000}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                  <Slider
                    min={0}
                    max={10000}
                    step={10}
                    value={[maxPrice]}
                    onValueChange={handleMaxPriceChange}
                    className="w-full"
                  />
                </div>
              </div>
            </div>

            <Separator />

            <div>
              <h2 className="text-lg font-semibold mb-4">Category</h2>
              <CategoryCommand />
            </div>
          </div>
        </div>

        <SheetFooter className="mt-4 flex gap-2">
          <Button
            variant="outline"
            className="flex-1 gap-2"
            onClick={handleResetFilter}
            disabled={isResetting}
          >
            {isResetting ? (
              <div className="flex items-center">
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Resetting...
              </div>
            ) : (
              <>
                <RefreshCcw className="h-4 w-4 mr-2" />
                Reset
              </>
            )}
          </Button>
          <Button
            className="flex-1 gap-2"
            onClick={handleApplyFilter}
            disabled={isApplying}
          >
            {isApplying ? (
              <div className="flex items-center">
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Applying...
              </div>
            ) : (
              "Apply Filters"
            )}
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default Filter;
