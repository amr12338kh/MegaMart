import React from "react";
import {
  SectionCards,
  SectionContainer,
  SectionContent,
  SectionHeading,
} from "../SectionContainer";
import { Separator } from "../ui/separator";
import Card from "./Card";
import PaginationControls from "../pagers/PaginationButton";
import NotFoundProducts from "../NotFoundProducts";
import { useProducts } from "@/hooks/use-products";
import { ProductsPagesProps } from "@/types";
import { nameFormatter } from "@/lib/helpers";

const BrandPage = async ({ products, searchParams, brand }: ProductsPagesProps) => {
  
  const params = await searchParams;
  
  const { paginatedProducts, currentPage, totalPages, isDataEmpty } =
    useProducts(products, params, {
      brandFilter: nameFormatter(brand ?? "", true),
      brandFilterKey: "brand",
    });

  return (
    <SectionContainer container>
      <SectionHeading
        title={`${nameFormatter(brand ?? "")} Products`}
        tagline={`Exclusive collection of ${nameFormatter(
          brand ?? "",
        )} products available now`}
        filters
      />
      <SectionContent>
        <Separator />
        {!isDataEmpty ? (
          <div>
            <SectionCards>
              {paginatedProducts.map((product) => (
                <Card key={product.id} product={product} />
              ))}
            </SectionCards>
            {totalPages > 1 && (
              <PaginationControls
                currentPage={currentPage}
                totalPages={totalPages}
              />
            )}
          </div>
        ) : (
          <NotFoundProducts />
        )}
      </SectionContent>
    </SectionContainer>
  );
};

export default BrandPage;
