import PaginationButton from "@/components/pagers/PaginationButton";
import Card from "@/components/product/Card";
import { productsData } from "@/lib/utils";
import { SearchParamsProps } from "@/types";
import {
  SectionContainer,
  SectionHeading,
  SectionContent,
  SectionCards,
} from "@/components/SectionContainer";
import { Separator } from "@/components/ui/separator";

export async function generateMetadata() {
  return {
    title: `All Products - Tech Store`,
    description: "Tech Store all products page",
  };
}

const Products = async ({ searchParams }: SearchParamsProps) => {
  const products = await productsData({
    limit: searchParams.limit || 12,
    skip: searchParams.skip || 0,
  });

  const isDataEmpty =
    !Array.isArray(products) || products.length < 1 || !products;
  const pageNumber = (searchParams.limit || 10) / 10;
  const isNext = (searchParams.limit || 10) > products.length;
  const skip = (searchParams.skip || 0) / 10;

  return (
    <SectionContainer container>
      <SectionHeading title="Products" tagline="Buy products from our stores" />
      <SectionContent>
        <Separator />
        {!isDataEmpty ? (
          <div>
            <SectionCards>
              {products.sort().map((product) => (
                <Card key={product.id} product={product} />
              ))}
            </SectionCards>
            {!isNext && (
              <div className="flex items-center justify-center mt-10">
                <PaginationButton pageNumber={pageNumber} skip={skip} />
              </div>
            )}
          </div>
        ) : (
          <section>
            <h2 className="text-black text-xl font-bold">Oops!, no results</h2>
          </section>
        )}
      </SectionContent>
    </SectionContainer>
  );
};

export default Products;
