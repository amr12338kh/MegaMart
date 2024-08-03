import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ProductProps } from "@/types";
import ProductDialog from "./ProductDialog";
import AddToCartButton from "../AddToCartButton";

interface Props {
  product: ProductProps;
}

const ProductCard = ({ product }: Props) => {
  return (
    <Card className="h-full w-full overflow-hidden rounded-md">
      <Link
        href={`/product/${product.id}`}
        aria-label={`View ${product.title} details`}
        role="group"
      >
        <CardHeader className=" border-b p-0">
          <AspectRatio ratio={4 / 3}>
            <Image
              src={product.thumbnail}
              alt={product.title}
              className=" rounded-t object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              fill
              loading="lazy"
            />
          </AspectRatio>
        </CardHeader>

        <CardContent className="space-y-1.5 p-4">
          <CardTitle className="line-clamp-1 text-base">
            {product.title}
          </CardTitle>
          <CardDescription className="line-clamp-1">
            ${product.price}
          </CardDescription>
        </CardContent>
      </Link>

      <CardFooter className="flex gap-2 p-4 pt-1 justify-between items-center">
        <AddToCartButton product={product} style="w-full" />
        <ProductDialog product={product} />
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
