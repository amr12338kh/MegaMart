import Link from "next/link"
import { IoIosArrowRoundForward } from "react-icons/io"
import { 
    Wrapper, 
    WrapperCards, 
    WrapperHeading, 
    WrapperLink, 
    WrapperTitle 
} from "@/components/Wrapper"
import Card from "./Card"
import { getCatProducts } from "@/lib/utils"
import { CatProductsProps } from "@/types"



const CatProducts = async ({ productCat, productId }: CatProductsProps) => {

    const products = await getCatProducts(productCat, {limit: 5})

  return (
    <Wrapper>
        <WrapperHeading className="mb-4">
            <WrapperTitle className="text-xl sm:text-2xl capitalize">{productCat.split("-").join(" ")} Category</WrapperTitle>
            <Link href={`/category/${productCat}`}>
                <WrapperLink>View all<IoIosArrowRoundForward /></WrapperLink>
            </Link>
        </WrapperHeading>
        <WrapperCards >
            {products.map(product => {
                if (product.id !== productId) {
                    return (
                        <Card key={product.id} product={product} />
                    )
                }
            })}
        </WrapperCards>
    </Wrapper>
  )
}

export default CatProducts