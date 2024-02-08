"use client"

import { useShopingCart } from "@/context/ShopingCartProvider"
import { Button } from "./ui/button"
import { ProductProps } from "@/types"
import { useRouter } from "next/navigation"

interface Props {
    product: ProductProps
}

const BuyButton = ({ product }: Props) => {

    const router = useRouter()

    const { 
        increaseCartQuantity, 
        getItemQuantity, 
    } = useShopingCart()

    const quantity = getItemQuantity(product.id)

    const handelBuyButton = () => {
        if (quantity < 1) {
            increaseCartQuantity(product.id)
            router.replace("/cart")
        } else {
            router.replace("/cart")
        }
    }
    
  return (
    <Button
        variant="default"
        size="sm"
        onClick={handelBuyButton}
    >
        Buy now
    </Button>
  )
}

export default BuyButton