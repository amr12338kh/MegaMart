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

const CategoryPage = async ({
  products,
  searchParams,
  category,
}: ProductsPagesProps) => {

  const params = await searchParams;


  const { paginatedProducts, currentPage, totalPages, isDataEmpty } =
    useProducts(products, params);

  return (
    <SectionContainer container>
      <SectionHeading
        title={category ?? ""}
        tagline="Explore Our Exclusive Collection"
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

export default CategoryPage;
