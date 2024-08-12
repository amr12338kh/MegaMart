"use client";

import { FaPlus, FaMinus } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import Image from "next/image";
import { useShopingCart } from "@/context/ShopingCartProvider";
import { ProductProps } from "@/types/index";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useToast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";

interface Props {
  product: ProductProps;
}

const CartItem = ({ product }: Props) => {
  const { toast } = useToast();
  const { title, thumbnail, price, id, category } = product;

  const {
    getItemQuantity,
    removeFromCart,
    decreaseQuantity,
    increaseCartQuantity,
  } = useShopingCart();

  const handelRemoveFromCart = () => {
    removeFromCart(id);
    toast({
      title: "Item Removed Successfully",
    });
  };

  const formatPrice = (price: number) => price.toFixed(2);

  return (
    <div className="flex flex-col sm:flex-row" key={id}>
      <div className="flex w-full bg-card text-card-foreground">
        <div className="relative aspect-square min-w-[40px] max-w-[70px] sm:min-w-[50px] sm:max-w-[80px] w-full flex-[0_0_100%]">
          <Image
            role="group"
            aria-roledescription="slide"
            src={thumbnail}
            alt={title}
            fill
            className="object-cover rounded-md w-full"
          />
        </div>
        <div className=" ml-4 sm:ml-8 w-full">
          <div className="flex flex-col">
            <div>
              <Link href={`/product/${id}`}>
                <h4 className="scroll-m-20 text-sm sm:text-base font-semibold tracking-tight hover:underline cursor-pointer line-clamp-1">
                  {title}
                </h4>
              </Link>
              <p className="text-[12px] sm:text-sm text-muted-foreground">
                ${formatPrice(price)} x {getItemQuantity(id)} = $
                {formatPrice(price * getItemQuantity(id))}
              </p>
              <Link href={`/category/${category}`}>
                <p className="text-[12px] cursor-pointer hover:underline sm:text-sm text-muted-foreground capitalize">
                  {category.replace("-", " ")}
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center mt-2 sm:mt-0 sm:gap-2">
        <div className="flex items-center">
          <Button
            variant="outline"
            size="sm"
            className="rounded-r-none h-8"
            onClick={() => increaseCartQuantity(id)}
          >
            <FaPlus size={8} />
          </Button>
          <Input
            type="number"
            className="w-[40px] h-8 border-x-0 shadow-none rounded-none focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
            value={getItemQuantity(id)}
            readOnly
          />
          <Button
            variant="outline"
            size="sm"
            className="rounded-l-none h-8"
            onClick={() => decreaseQuantity(id)}
          >
            <FaMinus size={8} />
          </Button>
        </div>
        <div>
          <Button
            variant="outline"
            size="sm"
            onClick={handelRemoveFromCart}
            className="h-8"
          >
            <FaRegTrashCan size={13} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
