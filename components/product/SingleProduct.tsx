import React from "react";
import Link from "next/link";
import ProductImages from "./ProductImages";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ProductProps } from "@/types";
import { Button } from "../ui/button";
import { FaStar, FaRegStar } from "react-icons/fa";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Breadcrumbs } from "../pagers/Breadcrumbs";
import AddToCartButton from "../AddToCartButton";
import BuyButton from "../BuyButton";
import RatingStars from "../RatingStars";

interface Props {
  product: ProductProps;
}

const SingleProduct = ({ product }: Props) => {
  const ratingStars = Array.from({ length: 5 }).map((_, index) => (
    <React.Fragment key={index}>
      {index < Math.round(product.rating) ? <FaStar /> : <FaRegStar />}
    </React.Fragment>
  ));

  return (
    <div className="grid items-center gap-8 pb-8 pt-6 md:py-8">
      <Breadcrumbs
        segments={[
          {
            title: "Products",
            href: "/products",
          },
          {
            title: product.category.replace("-", " "),
            href: `/category/${product.category}`,
          },
          {
            title: product.title,
            href: `/product/${product.id}`,
          },
        ]}
      />
      <div className="flex flex-col gap-8 md:flex-row md:gap-16">
        <div className="flex flex-col gap-2 w-full md:w-1/2">
          <ProductImages product={product} />
        </div>
        <div className="flex w-full flex-col gap-4 md:w-1/2 mt-4">
          <div className="space-y-2">
            <h2 className="line-clamp-2 text-2xl font-bold">{product.title}</h2>
            <p className="text-base text-muted-foreground">${product.price}</p>
            <Link
              className="inline-block text-base text-muted-foreground hover:underline capitalize"
              href={`/category/${product.category}`}
            >
              {product.category.split("-").join(" ")}
            </Link>
          </div>
          <div
            data-orientation="horizontal"
            role="none"
            className="shrink-0 bg-border h-[1px] w-full my-1.5"
          ></div>
          {product.stock > 0 ? (
            <p className="text-base text-muted-foreground">
              {product.stock} in stock
            </p>
          ) : (
            <p className="text-base text-muted-foreground">Out of stock</p>
          )}
          <div className="flex items-center justify-between">
            <RatingStars rating={product.rating} />
          </div>
          <div className="flex gap-2 my-6">
            {product.stock > 0 ? (
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
            <Accordion type="single" collapsible>
              <AccordionItem value={product.title}>
                <AccordionTrigger>Description</AccordionTrigger>
                <AccordionContent>{product.description}</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
