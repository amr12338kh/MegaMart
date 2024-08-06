import Card from "@/components/product/Card";
import { categoriesData } from "@/lib/utils";
import {
  SectionContainer,
  SectionHeading,
  SectionContent,
  SectionCards,
} from "@/components/SectionContainer";
import { Separator } from "@/components/ui/separator";

export async function generateMetadata({
  params,
}: {
  params: { catId: string };
}) {
  return {
    title: `${params.catId
      .replace("-", " ")
      .charAt(0)
      .toUpperCase()}${params.catId.replace("-", " ").slice(1)} - MegaMart`,
    description: params.catId.replace("-", " "),
  };
}

const singleCategory = async ({ params }: { params: { catId: string } }) => {
  const products = await categoriesData(params.catId);
  const isDataEmpty =
    !Array.isArray(products) || products.length < 1 || !products;

  return (
    <SectionContainer container>
      <SectionHeading
        title={params.catId.replace("-", " ")}
        tagline="Buy products from our stores"
      />
      <SectionContent>
        <Separator />
        {!isDataEmpty ? (
          <SectionCards>
            {products.sort().map((product) => {
              return <Card key={product.id} product={product} />;
            })}
          </SectionCards>
        ) : (
          <div>
            <h2 className="text-black text-xl font-bold">Oops!, no results</h2>
          </div>
        )}
      </SectionContent>
    </SectionContainer>
  );
};

export default singleCategory;
