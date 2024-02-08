"use client"
import { ProductCardSkeleton } from "@/components/skeletons/ProductCardSkeleton"
import SingleProductSkeleton from "@/components/skeletons/SingleProductSkeleton"
import { Skeleton } from "@/components/ui/skeleton"
import { 
  Wrapper, 
  WrapperTitle, 
  WrapperCards,
  WrapperHeading,
  WrapperContent,
  WrapperLink
} from "@/components/Wrapper"

const loading = () => {
  return (
    <main className="container">
      <section className=" flex-1">
        <SingleProductSkeleton />
      </section>
      <section>
        <Wrapper>
          <WrapperHeading className="mb-4">
            <WrapperTitle>
              <Skeleton className="h-6 w-40 sm:h-8 sm:w-60" />
            </WrapperTitle>
            <WrapperLink>
              <Skeleton className="h-4 w-16 sm:h-6 sm:w-20" />
            </WrapperLink>
          </WrapperHeading>
          <WrapperContent>
            <WrapperCards>
              {Array.from({ length: 4 }).map((_, i) => (
                <ProductCardSkeleton key={i} />
              ))}
            </WrapperCards>
          </WrapperContent>
        </Wrapper>
      </section>
      <section>
        <Wrapper>
          <WrapperHeading className="mb-4">
            <WrapperTitle>
              <Skeleton className="h-6 w-40 sm:h-8 sm:w-60" />
            </WrapperTitle>
            <WrapperLink>
              <Skeleton className="h-4 w-16 sm:h-6 sm:w-20" />
            </WrapperLink>
          </WrapperHeading>
          <WrapperContent>
            <WrapperCards>
              {Array.from({ length: 4 }).map((_, i) => (
                <ProductCardSkeleton key={i} />
              ))}
            </WrapperCards>
          </WrapperContent>
        </Wrapper>
      </section>
    </main>
  )
}

export default loading