import { 
    Wrapper, 
    WrapperHeading, 
    WrapperTitle, 
    WrapperSubtitle, 
    WrapperContent, 
    WrapperCards 
} from "@/components/Wrapper"
import Card from "@/components/product/Card"
import { categoriesData } from "@/lib/utils"

export async function generateMetadata({ params }: { params: { catId: string } }) {

  return {
    title: `${params.catId.replace("-", " ").charAt(0).toUpperCase()}${params.catId.replace("-", " ").slice(1)} - Tech Store`,
    description: params.catId.replace("-", " ")
  }
}

const singleCategory = async (
    { params }: { params: { catId: string } }, 
) => {

    
  const products = await categoriesData(params.catId)
  const isDataEmpty = !Array.isArray(products) || products.length < 1 || !products;

  return (
    <main className=" container">
      <Wrapper>
        <WrapperHeading>
          <WrapperTitle>
            {params.catId.replace("-", " ")}
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
            </div>
            ) : (
              <div>
                <h2 className="text-black text-xl font-bold">
                  Oops!, no results
                </h2>
              </div>
            )
          } 
        </WrapperContent>
      </Wrapper>
    </main>
    
  )
}

export default singleCategory