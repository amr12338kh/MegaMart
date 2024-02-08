
import { Skeleton } from "@/components/ui/skeleton"


const SingleProductSkeleton = () => {
  return (
    <div className="grid items-center gap-8 pb-8 pt-6 md:py-8 mb-16">
      <nav className="flex gap-2 w-full items-center overflow-auto text-sm font-medium text-muted-foreground">
          <Skeleton className=" h-4 sm:h-5 w-20 sm:w-24" />
          <Skeleton className="h-4 sm:h-5 w-20 sm:w-28" />
          <Skeleton className="h-4 sm:h-5 w-20 sm:w-28" />
      </nav>
      <div className="flex flex-col gap-8 md:flex-row md:gap-16">
        <div className="flex flex-col gap-2 w-full md:w-1/2">
          <div className="flex flex-col gap-2">
              <div className="overflow-hidden rounded">
                  <div className="-ml-4 flex touch-pan-y">
                      <div className="relative aspect-square min-w-0 flex-[0_0_100%] pl-4">
                        <Skeleton className="object-cover h-full w-full" />
                      </div>
                  </div>
              </div>
              <div className="flex w-full items-center justify-center gap-2">
                  <Skeleton className="h-5 w-5 sm:h-7 sm:w-7" />
                  <Skeleton className="group relative aspect-square h-full w-full max-w-[100px] rounded shadow-sm" />
                  <Skeleton className="group relative aspect-square h-full w-full max-w-[100px] rounded shadow-sm" />
                  <Skeleton className="group relative aspect-square h-full w-full max-w-[100px] rounded shadow-sm" />
                  <Skeleton className="h-5 w-5 sm:h-7 sm:w-7" />
              </div>
          </div>
          </div>
          <div className="flex w-full flex-col gap-4 md:w-1/2 mt-4">
            <div className="space-y-3">
              <Skeleton className="h-8 w-52 sm:w-72" />
              <Skeleton className="h-4 w-12" />
              <Skeleton className="h-5 w-24"  />
            </div>
            <div  
              data-orientation="horizontal" 
              role="none" 
              className="shrink-0 bg-border h-[1px] w-full my-3"
            >
            </div>
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
          </div>
        </div>
      </div>
  )
}

export default SingleProductSkeleton