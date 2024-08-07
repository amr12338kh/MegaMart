import Link from "next/link";
import React from "react";
import { Separator } from "../ui/separator";
import RatingStars from "../RatingStars";
import BuyButton from "../BuyButton";
import AddToCartButton from "../AddToCartButton";
import { Button } from "../ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Breadcrumbs } from "../pagers/Breadcrumbs";
import { ProductProps } from "@/types";
import { CircleAlert, Truck, RefreshCcw } from "lucide-react";

interface Props {
  product: ProductProps;
}

const ProductDetails = ({ product }: Props) => {
  const { title, price, category, brand, rating, stock } = product;
  const cat = category.replace("-", " ");
  const brandName = brand?.replace(" ", "-");

  return (
    <div className="flex w-full flex-col gap-4 md:w-1/2 mt-4">
      <div className="space-y-2">
        <h2 className="line-clamp-2 text-2xl font-bold">{title}</h2>
        <p className="text-base text-muted-foreground">${price}</p>
        <div className="inline-block text-base text-muted-foreground capitalize">
          <Link href={`/category/${category}`} className="hover:underline">
            {cat}
          </Link>
          {brand && (
            <>
              {" — "}
              <Link href={`/brands/${brandName}`} className="hover:underline">
                {brand}
              </Link>
            </>
          )}
        </div>
      </div>
      <Separator />
      <p className="text-base text-muted-foreground">
        {stock > 0 ? `${stock} in stock` : "Out of stock"}
      </p>
      <div className="flex items-center justify-between">
        <RatingStars rating={rating} />
      </div>
      <div className="flex gap-2 my-6">
        {stock > 0 ? (
          <>
            <BuyButton product={product} />
            <AddToCartButton product={product} variant="secondary" />
          </>
        ) : (
          <Button
            variant="outline"
            size="sm"
            disabled
            className="cursor-not-allowed"
          >
            Out of stock
          </Button>
        )}
      </div>
      <div className="w-full">
        <Description product={product} />
      </div>
      <ProductPolicies product={product} />
    </div>
  );
};

export const Segments = ({ product }: Props) => {
  const { id, title, category } = product;
  const cat = category.replace("-", " ");

  return (
    <Breadcrumbs
      segments={[
        {
          title: "Products",
          href: "/products",
        },
        {
          title: cat,
          href: `/category/${category}`,
        },
        {
          title: title,
          href: `/product/${id}`,
        },
      ]}
    />
  );
};

const Description = ({ product }: Props) => {
  const { title, description } = product;

  return (
    <Accordion defaultValue={title} type="single" collapsible>
      <AccordionItem value={title}>
        <AccordionTrigger>Description</AccordionTrigger>
        <AccordionContent>{description}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

const ProductPoliciesItem = ({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) => (
  <div className="flex xl:flex-col items-center gap-2">
    <div className="p-2 bg-muted rounded-full">{icon}</div>
    <p className="text-sm">{text}</p>
  </div>
);

const ProductPolicies = ({ product }: Props) => {
  const { warrantyInformation, shippingInformation, returnPolicy } = product;

  const metadata = [
    { icon: <CircleAlert size={20} />, text: warrantyInformation },
    { icon: <Truck size={20} />, text: shippingInformation },
    { icon: <RefreshCcw size={20} />, text: returnPolicy },
  ];

  return (
    <div className="flex flex-col items-start gap-5 mt-6 xl:grid xl:grid-cols-3 xl:items-center xl:justify-center">
      {metadata.map((item, i) => (
        <ProductPoliciesItem key={i} {...item} />
      ))}
    </div>
  );
};

export default ProductDetails;
