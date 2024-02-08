import Card from "./Card";
import { bestSellerProducts } from "@/lib/utils";
import { 
    Wrapper, 
    WrapperTitle, 
    WrapperCards,
    WrapperHeading,
    WrapperLink,
    WrapperSubtitle
} from "@/components/Wrapper"
import { IoIosArrowRoundForward } from "react-icons/io";
import Link from "next/link";

const BestSellers= async () => {
    
    const products = await bestSellerProducts({
        limit: 4,
        skip: 8, 
    })

  return (
    <Wrapper>
        <WrapperHeading className="mb-4">
            <WrapperTitle className="text-xl sm:text-2xl">
                Best Sellers
                <WrapperSubtitle>Best Products in the world!</WrapperSubtitle>
            </WrapperTitle>
            <Link href={"/products"}>
                <WrapperLink>View all <IoIosArrowRoundForward /></WrapperLink>
            </Link>
        </WrapperHeading>
        <WrapperCards>
            {products.map(product => {
                return (
                    <Card key={product.id} product={product} />
                )
            })}
        </WrapperCards>
    </Wrapper>
  )
}

export default BestSellers