import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { buttonVariants } from "../ui/button"
import { 
    FaEye, 
    FaRegStar, 
    FaStar, 
    FaExpand,
} from "react-icons/fa"
import { cn } from "@/lib/utils"
import { ProductProps } from "@/types"
import Image from "next/image"
import Link from "next/link"
import { 
    HoverCard, 
    HoverCardTrigger, 
    HoverCardContent 
} from "@/components/ui/hover-card"
import React from "react"
import { AspectRatio } from "../ui/aspect-ratio"
  
interface Props {
    product: ProductProps
}

const ProductDialog = ({ product }: Props)  => {

    const ratingStars = Array.from({ length: 5 }).map((_, index) => (
        <React.Fragment key={index}>
          {index < Math.round(product.rating) ? <FaStar /> : <FaRegStar />}
        </React.Fragment>
      ));

  return (
    <Dialog>
      <DialogTrigger>
        <div className={cn(
                buttonVariants({
                  variant: "secondary",
                  size: "icon",
                  className: "h-9 w-9 shrink-0",
                })
              )} >

            <FaEye />
        </div>
      </DialogTrigger>
      <DialogContent className="sm:p-0 rounded-md w-11/12 sm:w-full ">
        <DialogHeader>
          <DialogDescription className="flex flex-col gap-2 overflow-visible sm:flex-row">
            <AspectRatio ratio={16 / 9} className="w-full">
                <Image
                  src={product.thumbnail}
                  alt={product.title}
                  className="object-cover rounded-md sm:rounded-none sm:rounded-s-md"
                  sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, (min-width: 475px) 50vw, 100vw"
                  fill
                  loading="lazy"
                />
            </AspectRatio>
        
            <div className="w-full text-start space-y-6 p-6 sm:p-10">
              <div className="space-y-2">
                <DialogTitle className="line-clamp-2 text-primary text-xl sm:text-2xl font-bold">{product.title}</DialogTitle>
                <p className="text-base text-muted-foreground">
                  ${product.price}
                </p>
                <div className="flex items-center justify-between">
                  <HoverCard>
                    <HoverCardTrigger>
                          <p className="flex items-center space-x-1 text-yellow-400">
                              {ratingStars}
                          </p>
                    </HoverCardTrigger>
                    <HoverCardContent>
                      Rating: {product.rating}
                    </HoverCardContent>
                  </HoverCard>
              </div>
                <p className="text-base text-muted-foreground">
                  {product.stock} in stock
                </p>
              </div>
              <p className="line-clamp-4 text-sm text-muted-foreground">
                {product.description}
              </p>
              <Link 
                href={`/product/${product.id}`}
                className=" fixed bottom-3 right-3 text-base hover:text-primary hover:text-lg duration-100"
               >
                <HoverCard>
                    <HoverCardTrigger>
                        <FaExpand  />
                    </HoverCardTrigger>
                    <HoverCardContent>Expand</HoverCardContent>
                  </HoverCard>
            </Link>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default ProductDialog