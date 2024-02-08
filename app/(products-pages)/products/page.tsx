import PaginationButton from "@/components/pagers/PaginationButton"
import Card from "@/components/product/Card"
import { productsData } from "@/lib/utils"
import { SearchParamsProps } from "@/types"
import { 
  Wrapper, 
  WrapperHeading,
  WrapperTitle, 
  WrapperContent, 
  WrapperCards,
  WrapperSubtitle
} from "@/components/Wrapper"

export async function generateMetadata() {
  return {
    title: `All Products - Tech Store`,
    description: "Tech Store all products page"
  }
}

const Products = async ({ searchParams }: SearchParamsProps) => {  
  const products = await productsData({ 
    limit: searchParams.limit || 10, 
    skip: searchParams.skip || 0,
})

const isDataEmpty = !Array.isArray(products) || products.length < 1 || !products;
const pageNumber = (searchParams.limit || 10) / 10;
const isNext = (searchParams.limit || 10) > products.length;
const skip = (searchParams.skip || 0 ) / 10

  return (
    <main className="container">
      <Wrapper>
        <WrapperHeading>
          <WrapperTitle>
            Products
            <WrapperSubtitle>Buy products from our stores</WrapperSubtitle>
          </WrapperTitle>
        </WrapperHeading>
        <WrapperContent>
          {!isDataEmpty ? (
            <div>
              <WrapperCards>
                {products.sort().map(product => {
                  return (
                    <Card key={product.id} product={product} />
                    )
                })}
              </WrapperCards>
              {!isNext && (
                <div className="flex items-center justify-center mt-10">
                  <PaginationButton 
                    pageNumber={pageNumber}
                    skip={skip}
                  />
                </div>
              )}
            </div>
            ) : (
              <section>
                <h2 className="text-black text-xl font-bold">
                  Oops!, no results
                </h2>
              </section>
            )
          } 
        </WrapperContent>
      </Wrapper>
    </main>
    
  )
}

export default Products