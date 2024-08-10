import {
  SectionContainer,
  SectionHeading,
  SectionContent,
  SectionCards,
} from "@/components/SectionContainer";
import Card from "@/components/product/Card";
import { getProductsBrands } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

const page = async ({ params }: { params: { brand: string } }) => {
  const { brand } = params;
  const brandName = brand?.replace("-", " ");
  const brandLink = brand?.replace(" ", "-");
  const products = await getProductsBrands();

  const isDataEmpty =
    !Array.isArray(products) || products.length < 1 || !products;

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
              {products
                .sort()
                .map(
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
