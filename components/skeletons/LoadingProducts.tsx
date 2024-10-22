"use client";

import { Skeleton } from "@/components/ui/skeleton";
import {
  SectionContainer,
  SectionHeading,
  SectionContent,
  SectionCards,
} from "../SectionContainer";
import { ProductCardSkeleton } from "./ProductCardSkeleton";
import { Separator } from "../ui/separator";

const LoadingProducts = ({
  arrLength,
  tagline,
  container,
  separator,
  isOne,
}: {
  arrLength: number;
  tagline?: boolean;
  container?: boolean;
  separator?: boolean;
  isOne?: boolean;
}) => {
  return (
    <SectionContainer container={container}>
      <SectionHeading
        isOne={isOne}
        title={<Skeleton className="h-6 w-40 sm:h-8 sm:w-60" />}
        tagline={tagline ? <Skeleton className="h-4 w-60 sm:w-80 " /> : ""}
      />
      <SectionContent>
        {separator && <Separator />}
        <SectionCards>
          {Array.from({ length: arrLength }).map((_, i) => (
            <ProductCardSkeleton key={i} />
          ))}
        </SectionCards>
      </SectionContent>
    </SectionContainer>
  );
};

export default LoadingProducts;
