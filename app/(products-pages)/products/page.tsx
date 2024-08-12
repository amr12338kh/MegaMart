import PaginationButton from "@/components/pagers/PaginationButton";
import Card from "@/components/product/Card";
import { productsData } from "@/lib/utils";
import { FilterProps } from "@/types";
import {
  SectionContainer,
  SectionHeading,
  SectionContent,
  SectionCards,
} from "@/components/SectionContainer";
import { Separator } from "@/components/ui/separator";
import NotFoundProducts from "@/components/NotFoundProducts";
import { getTotalProducts } from "@/lib/utils";

export async function generateMetadata() {
  return {
    title: `All Products - MegaMart`,
    description: "Tech Store all products page",
  };
}

const Products = async ({ searchParams }: { searchParams: FilterProps }) => {
  const { limit, skip, order } = searchParams;

  const total = await getTotalProducts();
  const products = await productsData({
    limit: limit || 12,
    skip: skip || 0,
    order: order || "asc",
  });

  const isDataEmpty = !Array.isArray(products) || products.length === 0;
  const pageNumber = (limit || 12) / 10;
  const totalPages = Math.ceil(total / (limit || 12));

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
              {products.map((product) => (
                <Card key={product.id} product={product} />
              ))}
            </SectionCards>
            {totalPages > 1 && <PaginationButton pageNumber={pageNumber} />}
          </div>
        ) : (
          <NotFoundProducts />
        )}
      </SectionContent>
    </SectionContainer>
  );
};

export default Products;
