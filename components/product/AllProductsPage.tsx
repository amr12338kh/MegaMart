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

const AllProductsPage = ({ products, searchParams }: ProductsPagesProps) => {
  const { paginatedProducts, currentPage, totalPages, isDataEmpty } =
    useProducts(products, searchParams);

  return (
    <SectionContainer container>
      <SectionHeading
        title="Products"
        tagline="Explore Our Wide Selection of Quality Products"
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

export default AllProductsPage;
