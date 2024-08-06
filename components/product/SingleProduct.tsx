import React from "react";
import ProductImages from "./ProductImages";
import { ProductProps } from "@/types";
import ProductDetails, { Segments } from "./ProductDetails";

interface Props {
  product: ProductProps;
}

const SingleProduct = ({ product }: Props) => {
  return (
    <div className="grid items-center gap-8 pb-8 pt-6 md:py-8">
      <Segments product={product} />
      <div className="flex flex-col gap-8 md:flex-row md:gap-16">
        <div className="flex flex-col gap-2 w-full md:w-1/2">
          <ProductImages product={product} />
        </div>
        <ProductDetails product={product} />
      </div>
    </div>
  );
};

export default SingleProduct;
