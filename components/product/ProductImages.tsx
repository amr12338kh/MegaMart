"use client";

import * as React from "react";
import {
  FaChevronRight,
  FaChevronLeft,
  FaImage,
  FaExpand,
} from "react-icons/fa6";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaOptionsType, EmblaCarouselType } from "embla-carousel";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ProductProps } from "@/types";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface ProductImageCarouselProps
  extends React.HTMLAttributes<HTMLDivElement> {
  product: ProductProps;
  options?: EmblaOptionsType;
}

const ProductImages = ({
  product,
  options = { loop: false },
  className,
  ...props
}: ProductImageCarouselProps) => {
  const images = [...product.images];

  const [emblaRef, emblaApi] = useEmblaCarousel({
    ...options,
    // Add additional default options
    slidesToScroll: 1,
    align: "center",
  });

  const [prevBtnDisabled, setPrevBtnDisabled] = React.useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = React.useState(true);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  const scrollPrev = React.useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = React.useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const scrollTo = React.useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLButtonElement>) => {
      if (event.key === "ArrowLeft") {
        scrollPrev();
      } else if (event.key === "ArrowRight") {
        scrollNext();
      }
    },
    [scrollNext, scrollPrev]
  );

  const onSelect = React.useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  React.useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("reInit", onSelect);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  if (images.length === 0) {
    return (
      <div
        aria-label="Product Placeholder"
        role="img"
        aria-roledescription="placeholder"
        className="flex aspect-square h-full w-full flex-1 items-center justify-center bg-secondary"
      >
        <FaImage className="h-9 w-9 text-muted-foreground" aria-hidden="true" />
      </div>
    );
  }

  return (
    <div
      aria-label="Product image carousel"
      className={cn("flex flex-col gap-2 relative", className)}
      {...props}
    >
      <div ref={emblaRef} className="overflow-hidden rounded">
        <div
          className="-ml-4 flex touch-pan-y"
          style={{
            backfaceVisibility: "hidden",
          }}
        >
          {images.map((image, i) => (
            <div
              className="relative aspect-square min-w-0 flex-[0_0_100%] pl-4"
              key={i}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative w-full h-full overflow-hidden">
                <img
                  aria-label={`Slide ${i + 1} of ${images.length}`}
                  role="group"
                  aria-roledescription="slide"
                  src={image}
                  alt={`Image ${i + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-transform duration-300 ${
                    hoveredIndex === i ? "scale-125" : "scale-100"
                  }`}
                  loading={i === 0 || i === 1 ? "eager" : "lazy"}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      {images.length > 1 ? (
        <div className="flex w-full items-center justify-center gap-2 mt-2">
          <Button
            variant="outline"
            size="icon"
            className="mr-0.5 aspect-square h-7 w-7 rounded sm:mr-2 sm:h-8 sm:w-8"
            disabled={prevBtnDisabled}
            onClick={scrollPrev}
            aria-label="Previous slide"
          >
            <FaChevronLeft
              className="h-3 w-3 sm:h-4 sm:w-4"
              aria-hidden="true"
            />
          </Button>
          {images.map((image, i) => (
            <Button
              key={i}
              variant="outline"
              size="icon"
              className={cn(
                "group relative aspect-square h-full w-full max-w-[100px] rounded-none shadow-sm hover:bg-transparent focus-visible:ring-foreground",
                i === selectedIndex && "ring-2 ring-primary rounded"
              )}
              onClick={() => scrollTo(i)}
              onKeyDown={handleKeyDown}
              aria-label={`Go to slide ${i + 1}`}
            >
              <div className="absolute inset-0 z-10 bg-zinc-950/20 group-hover:bg-zinc-950/4" />
              <div className="relative w-full h-full overflow-hidden">
                <img
                  src={image}
                  alt={`Thumbnail ${i + 1}`}
                  className="absolute inset-0 w-full h-full rounded object-cover"
                  loading="lazy"
                />
              </div>
            </Button>
          ))}
          <Button
            variant="outline"
            size="icon"
            className="ml-0.5 aspect-square h-7 w-7 rounded sm:ml-2 sm:h-8 sm:w-8"
            disabled={nextBtnDisabled}
            onClick={scrollNext}
            aria-label="Next slide"
          >
            <FaChevronRight
              className="h-3 w-3 sm:h-4 sm:w-4"
              aria-hidden="true"
            />
          </Button>
        </div>
      ) : null}
    </div>
  );
};

export default ProductImages;
