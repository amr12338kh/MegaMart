import { notFound } from "next/navigation";
import { getSearchedProducts } from "@/lib/utils";
import { FilterProps } from "@/types";
import SearchProductsPage from "@/components/product/SearchProductsPage";

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

  return (
    <SearchProductsPage
      products={products}
      searchParams={searchParams}
      termToUse={termToUse}
    />
  );
};

export default page;
