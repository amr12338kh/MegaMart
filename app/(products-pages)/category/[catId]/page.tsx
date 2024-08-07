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
  const { catId } = params;
  const categoryName = catId.replace("-", " ");

  return {
    title: `${categoryName.charAt(0).toUpperCase()}${categoryName.slice(
      1
    )} - MegaMart`,
    description: categoryName,
  };
}

const singleCategory = async ({ params }: { params: { catId: string } }) => {
  const { catId } = params;
  const categoryName = catId.replace("-", " ");
  const products = await categoriesData(catId);
  const isDataEmpty =
    !Array.isArray(products) || products.length < 1 || !products;

  return (
    <SectionContainer container>
      <SectionHeading
        title={categoryName}
        tagline="Explore Our Exclusive Collection"
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
