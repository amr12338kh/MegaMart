import Card from "@/components/product/Card";
import { categoriesData } from "@/lib/utils";
import {
  SectionContainer,
  SectionHeading,
  SectionContent,
  SectionCards,
} from "@/components/SectionContainer";
import { Separator } from "@/components/ui/separator";
import { FilterProps } from "@/types";
import NotFoundProducts from "@/components/NotFoundProducts";

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

const singleCategory = async ({
  params,
  searchParams,
}: {
  params: { catId: string };
  searchParams: FilterProps;
}) => {
  const { catId } = params;
  const categoryName = catId.replace("-", " ");

  const products = await categoriesData(catId, {
    order: searchParams.order || "asc",
  });

  const isDataEmpty = !Array.isArray(products) || products.length === 0;

  return (
    <SectionContainer container>
      <SectionHeading
        title={categoryName}
        tagline="Explore Our Exclusive Collection"
        filters
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
          <NotFoundProducts />
        )}
      </SectionContent>
    </SectionContainer>
  );
};

export default singleCategory;
