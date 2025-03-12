"use client";

import { cn } from "@/lib/utils";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { CiImageOn } from "react-icons/ci";

interface ProductCardSkeletonProps
  extends React.ComponentPropsWithoutRef<typeof Card> {}

export function ProductCardSkeleton({
  className,
  ...props
}: ProductCardSkeletonProps) {
  return (
    <Card
      className={cn(
        "h-full overflow-hidden rounded-xl border border-muted shadow-sm",
        className
      )}
      {...props}
    >
      <CardHeader className=" bg-primary-foreground p-0">
        <AspectRatio ratio={4 / 3}>
          <div className=" flex items-center justify-center h-full">
            <CiImageOn size={70} />
          </div>
        </AspectRatio>
      </CardHeader>
      <CardContent className="space-y-3 p-4">
        <Skeleton className="h-4 w-1/2" />
        <Skeleton className="h-4 w-[30%]" />
        <Skeleton className="h-5 w-[40%]" />
      </CardContent>
      <CardFooter className="space-x-2 p-4 border-t border-muted bg-primary-foreground">
        <Skeleton className="h-9 w-full bg-primary/10" />
        <Skeleton className="h-9 w-9 shrink-0 bg-primary/5" />
        <Skeleton className="h-9 w-9 shrink-0 bg-primary/5" />
      </CardFooter>
    </Card>
  );
}
