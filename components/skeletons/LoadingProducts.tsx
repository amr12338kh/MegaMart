"use client"

import { Skeleton } from "@/components/ui/skeleton"
import { AspectRatio } from "@radix-ui/react-aspect-ratio"
import { 
  Card, 
  CardHeader, 
  CardContent, 
  CardTitle, 
  CardDescription, 
  CardFooter 
} from "@/components/ui/card"
// import ImageLoad from "./ImageLoad"

const LoadingProducts = () => {
    return (
      <section>

      <Card className="h-full overflow-hidden rounded-sm">

          <CardHeader className=" border-b p-0">
            <AspectRatio ratio={4 / 3}>
                <div className="loader"></div>
            </AspectRatio>
          </CardHeader>

          <CardContent className="grid gap-2.5 p-4">
            <CardTitle>
              <Skeleton className="line-clamp-1 text-base bg-neutral-300 w-3/4 h-5 rounded-sm"></Skeleton>
            </CardTitle>
            <CardDescription>
              <Skeleton className="line-clamp-2 bg-neutral-300 w-16 h-5 rounded-sm"></Skeleton>
            </CardDescription>
          </CardContent>

          <CardFooter className="p-4">
            <Skeleton className=" w-full bg-neutral-300 h-7 rounded-sm"></Skeleton>
          </CardFooter>
      </Card>

    </section>
    )
  }
  
  export default LoadingProducts