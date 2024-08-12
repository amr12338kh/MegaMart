import { notFound } from "next/navigation";
import { getSearchedProducts } from "@/lib/utils";
import {
  SectionContainer,
  SectionHeading,
  SectionContent,
  SectionCards,
} from "@/components/SectionContainer";
import Card from "@/components/product/Card";
import { Separator } from "@/components/ui/separator";
import { FilterProps } from "@/types";
import NotFoundProducts from "@/components/NotFoundProducts";

const page = async ({
  params,
  searchParams,
}: {
  params: { term: string };
  searchParams: FilterProps;
}) => {
  if (!params.term) notFound();

  const termToUse = decodeURI(params.term);
  const products = await getSearchedProducts(termToUse, {
    order: searchParams.order || "asc",
  });

  const isDataEmpty = !Array.isArray(products) || products.length === 0;

  return (
    <SectionContainer container className=" min-h-[80vh]">
      <SectionHeading
        title={`Results for: ${termToUse}`}
        tagline="Buy products from our stores"
        filters
      />
      <SectionContent>
        <Separator />
        {!isDataEmpty ? (
          <SectionCards>
            {products.sort().map((product) => (
              <Card key={product.id} product={product} />
            ))}
          </SectionCards>
        ) : (
          <NotFoundProducts isSearch />
        )}
      </SectionContent>
    </SectionContainer>
  );
};

export default page;
