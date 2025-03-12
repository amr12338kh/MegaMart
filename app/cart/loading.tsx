import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

export default function Loading() {
  return (
    <main className="container w-full py-8 min-h-[80vh]">
      <Skeleton className="h-10 w-64 mb-6" />

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-4">
          <div className="bg-background rounded-lg border">
            <div className="p-4 border-b">
              <Skeleton className="h-6 w-40" />
            </div>
            <div className="divide-y">
              {[1, 2, 3].map((item) => (
                <div key={item} className="p-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 w-full">
                    <div className="flex flex-1 gap-4">
                      <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border bg-background/40">
                        <Skeleton className="h-full w-full" />
                      </div>

                      <div className="flex flex-col justify-between py-1">
                        <div>
                          <div className="flex items-center justify-between gap-2 flex-wrap">
                            <Skeleton className="h-5 w-40" />
                            <Skeleton className="h-4 w-16 hidden sm:block" />
                          </div>

                          <Skeleton className="h-3 w-24 mt-1" />
                        </div>

                        <div className="flex items-baseline mt-1">
                          <Skeleton className="h-4 w-16 mr-2" />
                          <Skeleton className="h-3 w-12" />
                        </div>
                      </div>
                    </div>

                    <div className="flex sm:flex-col items-center justify-between sm:justify-end gap-4 mt-3 sm:mt-0">
                      <div className="flex items-center">
                        <Skeleton className="h-8 w-8 rounded-r-none" />
                        <Skeleton className="h-8 w-10" />
                        <Skeleton className="h-8 w-8 rounded-l-none" />
                      </div>

                      <div className="flex items-center gap-3">
                        <Skeleton className="h-4 w-14 hidden sm:block" />
                        <Skeleton className="h-4 w-16 sm:hidden" />
                        <Skeleton className="h-8 w-8 rounded-md" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-between items-center">
            <Skeleton className="h-4 w-36" />
          </div>
        </div>

        <div className="md:col-span-1">
          <Card>
            <CardContent className="pt-6">
              <Skeleton className="h-6 w-32 mb-4" />
              <div className="space-y-3">
                <div className="flex justify-between">
                  <Skeleton className="h-4 w-16" />
                  <Skeleton className="h-4 w-16" />
                </div>
                <div className="flex justify-between">
                  <Skeleton className="h-4 w-16" />
                  <Skeleton className="h-4 w-16" />
                </div>
                <div className="flex justify-between">
                  <Skeleton className="h-4 w-16" />
                  <Skeleton className="h-4 w-16" />
                </div>
                <Separator className="my-3" />
                <div className="flex justify-between">
                  <Skeleton className="h-6 w-12" />
                  <Skeleton className="h-6 w-20" />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col pt-2 pb-6">
              <Skeleton className="h-10 w-full mb-2" />
              <Skeleton className="h-4 w-48 mx-auto mt-4" />
            </CardFooter>
          </Card>
        </div>
      </div>
    </main>
  );
}
