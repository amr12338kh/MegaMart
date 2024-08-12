import {
  SectionContainer,
  SectionHeading,
  SectionContent,
  SectionCards,
} from "@/components/SectionContainer";
import Card from "@/components/product/Card";
import { getProductsBrands } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { FilterProps } from "@/types";

const page = async ({
  params,
  searchParams,
}: {
  params: { brand: string };
  searchParams: FilterProps;
}) => {
  const { brand } = params;
  const brandName = brand?.replace("-", " ");
  const brandLink = brand?.replace(" ", "-");

  const products = await getProductsBrands({
    order: searchParams.order || "asc",
  });

  const isDataEmpty = !Array.isArray(products) || products.length === 0;

  return (
    <SectionContainer container>
      <SectionHeading
        title={`${brandName} Products`}
        tagline={`Exclusive collection of ${brandName} products available now`}
        filters
      />
      <SectionContent>
        <Separator />
        {!isDataEmpty ? (
          <div>
            <SectionCards>
              {products.map(
                (product) =>
                  product.brand?.replace(" ", "-") === brandLink && (
                    <Card key={product.id} product={product} />
                  )
              )}
            </SectionCards>
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

export default page;
