import { Skeleton } from "@/components/ui/skeleton"
import { ProductCardSkeleton } from "@/components/skeletons/ProductCardSkeleton"
import { 
  Wrapper, 
  WrapperHeading,
  WrapperTitle, 
  WrapperSubtitle,
  WrapperContent, 
  WrapperCards 
} from "@/components/Wrapper"

export default function Loading() {
  return (
    <main className=" container">
      <Wrapper>
        <WrapperHeading>
          <WrapperTitle>
            <Skeleton className="h-8 w-44" />
            <WrapperSubtitle>
              <Skeleton className="h-4 w-60" />
            </WrapperSubtitle>
          </WrapperTitle>
        </WrapperHeading>
        <WrapperContent>
          <WrapperCards>
            {Array.from({ length: 10 }).map((_, i) => (
              <ProductCardSkeleton key={i} />
            ))}
          </WrapperCards>
        </WrapperContent>
      </Wrapper>
    </main>
  )
}