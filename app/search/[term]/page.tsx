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
          <div data-orientation="horizontal" role="none" className="shrink-0 bg-border h-[1px] w-full my-2" />
          {!isDataEmpty ? (
            <WrapperCards>
              {products.sort().map(product => {
                return (
                  <Card key={product.id} product={product} />
                  )
              })}
            </WrapperCards>
            ) : (
              <section className="flex flex-col items-center h-full justify-center">
                  <div className=" my-10">
                      <h1 className="scroll-m-20 text-2xl sm:text-3xl text-center font-extrabold tracking-tight lg:text-5xl">Oops! No Results Found.</h1>
                      <p className="leading-7 [&:not(:first-child)]:mt-3 text-center text-muted-foreground">Please try again.</p>
                  </div>
              </section>
            )
          } 
        </WrapperContent>
      </Wrapper>
    </main>
  )
}

export default page