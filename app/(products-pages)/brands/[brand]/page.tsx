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
  const products = await getProductsBrands();

  const isDataEmpty =
    !Array.isArray(products) || products.length < 1 || !products;

  return (
    <SectionContainer container>
      <SectionHeading
        title={`${params.brand?.split("-").join(" ")} Products`}
        tagline={`Exclusive collection of ${params.brand
          ?.split("-")
          .join(" ")} products available now`}
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
                    product.brand?.split(" ").join("-") ===
                      params.brand?.split(" ").join("-") && (
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
