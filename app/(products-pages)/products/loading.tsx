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
          <div data-orientation="horizontal" role="none" className="shrink-0 bg-border h-[1px] w-full my-2" />
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