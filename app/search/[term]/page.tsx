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

const page = async ({ params }: { params: { term: string } }) => {
  if (!params.term) notFound();
  const termToUse = decodeURI(params.term);
  const products = await getSearchedProducts(termToUse);
  const isDataEmpty =
    !Array.isArray(products) || products.length < 1 || !products;

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
          <section className="flex flex-col items-center h-full justify-center">
            <div className=" my-10">
              <h1 className="scroll-m-20 text-2xl sm:text-3xl text-center font-extrabold tracking-tight lg:text-5xl">
                Oops! No Results Found.
              </h1>
              <p className="leading-7 [&:not(:first-child)]:mt-3 text-center text-muted-foreground">
                Please try again.
              </p>
            </div>
          </section>
        )}
      </SectionContent>
    </SectionContainer>
  );
};

export default page;
