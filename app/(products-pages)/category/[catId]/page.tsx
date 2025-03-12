import { categoriesData } from "@/lib/utils";
import { FilterProps } from "@/types";
import { nameFormatter } from "@/lib/helpers";
import { categoryDescriptions } from "@/data";
import { Metadata } from "next";
import CategoryPage from "@/components/product/CategoryPage";

export async function generateMetadata({
  params,
}: {
  params: { catId: string };
}): Promise<Metadata> {
  const { catId } = params;
  const categoryName = nameFormatter(catId);
  const formattedCategoryName = `${categoryName
    .charAt(0)
    .toUpperCase()}${categoryName.slice(1)}`;

  const description =
    categoryDescriptions[catId] ||
    `Explore our selection of high-quality ${formattedCategoryName} products at MegaMart. Shop now for the best deals and fast shipping.`;

  return {
    title: `${formattedCategoryName} - MegaMart | Shop Online`,
    description: description,
    keywords: [
      categoryName,
      "products",
      "megamart",
      "online shopping",
      "deals",
      "discount",
    ],
    openGraph: {
      title: `${formattedCategoryName} Collection - MegaMart`,
      description: description,
      type: "website",
      images: [
        {
          url: `/category-images/${catId}.jpg`,
          width: 800,
          height: 600,
          alt: `${formattedCategoryName} Collection`,
        },
        {
          url: "/logo.png",
          width: 800,
          height: 600,
          alt: "MegaMart Logo",
        },
      ],
    },
    alternates: {
      canonical: `/category/${catId}`,
    },
  };
}

const SingleCategory = async ({
  params,
  searchParams,
}: {
  params: { catId: string };
  searchParams: FilterProps;
}) => {
  const { order = "asc" } = searchParams;

  const { catId } = params;
  const categoryName = nameFormatter(catId);

  const products = await categoriesData(catId, {
    limit: 1000,
    skip: 0,
    order,
  });

  return (
    <CategoryPage
      products={products}
      category={categoryName}
      searchParams={searchParams}
    />
  );
};

export default SingleCategory;
