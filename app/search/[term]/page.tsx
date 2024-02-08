import { notFound } from "next/navigation"
import { getSearchedProducts } from "@/lib/utils"
import { 
  Wrapper, 
  WrapperHeading, 
  WrapperTitle, 
  WrapperSubtitle, 
  WrapperContent, 
  WrapperCards 
} from "@/components/Wrapper"
import Card from "@/components/product/Card"

const page = async ( { params }: { params: { term: string } } ) => {

  if (!params.term) notFound()

  const termToUse = decodeURI(params.term)
  const products = await getSearchedProducts(termToUse)
  const isDataEmpty = !Array.isArray(products) || products.length < 1 || !products;

  return (
    <main className="container min-h-screen">
      <Wrapper>
        <WrapperHeading>
          <WrapperTitle>
            Results for {termToUse}
            <WrapperSubtitle>Buy products from our stores</WrapperSubtitle>
          </WrapperTitle>
        </WrapperHeading>
        <WrapperContent>
          {!isDataEmpty ? (
            <WrapperCards>
              {products.sort().map(product => {
                return (
                  <Card key={product.id} product={product} />
                  )
              })}
            </WrapperCards>
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

export default page