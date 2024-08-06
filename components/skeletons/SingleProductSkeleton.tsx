import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "../ui/separator";

const SingleProductSkeleton = () => {
  return (
    <div className="grid gap-8 pb-8 pt-6 md:py-8 mb-16">
      <nav className="flex gap-2 w-full">
        <Skeleton className=" h-4 sm:h-5 w-20 sm:w-24" />
        <Skeleton className="h-4 sm:h-5 w-20 sm:w-28" />
        <Skeleton className="h-4 sm:h-5 w-20 sm:w-28" />
      </nav>
      <div className="flex flex-col gap-8 md:flex-row md:gap-16">
        <div className="flex flex-col gap-2 w-full md:w-1/2">
          <div className="flex flex-col gap-2">
            <div className="rounded">
              <div className="-ml-4 flex">
                <div className="relative aspect-square min-w-0 flex-[0_0_100%] pl-4">
                  <Skeleton className="h-full w-full" />
                </div>
              </div>
            </div>
            <div className="flex w-full items-center justify-center gap-2">
              <Skeleton className="h-5 w-5 sm:h-7 sm:w-7" />
              <Skeleton className="group relative aspect-square h-full w-full max-w-[100px] rounded" />
              <Skeleton className="group relative aspect-square h-full w-full max-w-[100px] rounded" />
              <Skeleton className="group relative aspect-square h-full w-full max-w-[100px] rounded" />
              <Skeleton className="h-5 w-5 sm:h-7 sm:w-7" />
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col gap-4 md:w-1/2 mt-4">
          <div className="space-y-3">
            <Skeleton className="h-8 w-52 sm:w-72" />
            <Skeleton className="h-4 w-12" />
            <Skeleton className="h-5 w-32" />
          </div>
          <Separator />
          <Skeleton className="h-4 w-16" />
          <div>
            <Skeleton className="h-4 w-24" />
          </div>
          <div className="flex gap-2 my-6">
            <Skeleton className="h-9 w-24" />
            <Skeleton className="h-9 w-24" />
          </div>
          <div className="w-full flex flex-col gap-3">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-4/5" />
            <Skeleton className="h-4 w-2/4" />
          </div>
          <Separator />
          <div className="flex flex-col items-start gap-5 mt-6 xl:grid xl:grid-cols-3 xl:items-center xl:justify-center">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="flex xl:flex-col items-center gap-2">
                <Skeleton className="p-5 rounded-full" />
                <Skeleton className="h-3 w-28 rounded" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductSkeleton;
