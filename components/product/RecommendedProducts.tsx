import Card from "./Card"
import { getRecommendedProducts } from "@/lib/utils"
import { 
    Wrapper, 
    WrapperTitle, 
    WrapperCards,
    WrapperHeading,
    WrapperLink,
} from "@/components/Wrapper"
import { IoIosArrowRoundForward } from "react-icons/io"
import Link from "next/link"

interface Props {
    recNumber: number,
}

const RecommendedProducts = async ({ recNumber }: Props) => {

    const products = await getRecommendedProducts(recNumber)

    return (
        <Wrapper>
            <WrapperHeading className="mb-4">
                <WrapperTitle className="text-xl sm:text-2xl">Recommended</WrapperTitle>
                <Link href={"/products"}>
                    <WrapperLink>View all <IoIosArrowRoundForward /></WrapperLink>
                </Link>
            </WrapperHeading>
            <WrapperCards >
                {products.map(rec => {
                    return (
                        <Card key={rec.id} product={rec} />
                    )
                })} 
            </WrapperCards>
        </Wrapper>
    )
}

export default RecommendedProducts