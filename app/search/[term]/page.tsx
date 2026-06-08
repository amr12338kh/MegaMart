import { notFound } from "next/navigation";
import { getSearchedProducts } from "@/lib/utils";
import { FilterProps } from "@/types";
import SearchProductsPage from "@/components/product/SearchProductsPage";

const page = async ({
  params,
  searchParams,
}: {
  params: Promise<{ term: string }>;
  searchParams: Promise<FilterProps>;
}) => {
  const { term } = await params;
  if (!term) notFound();

  const termToUse = decodeURI(term);
  const products = await getSearchedProducts(termToUse, {
    order: (await searchParams).order || "asc",
  });

  return (
    <SearchProductsPage
      products={products}
      searchParams={searchParams}
      termToUse={termToUse}
    />
  );
};

export default page;
