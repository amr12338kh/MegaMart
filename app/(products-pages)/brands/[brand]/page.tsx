import { getProductsBrands } from "@/lib/utils";
import { FilterProps } from "@/types";
import { nameFormatter } from "@/lib/helpers";
import { Metadata } from "next";
import BrandPage from "@/components/product/BrandPage";

export async function generateMetadata({
  params,
}: {
  params: { brand: string };
}): Promise<Metadata> {
  const { brand } = params;
  const CapFirstCharacter = nameFormatter(brand).slice(0, 1).toUpperCase();
  const formattedBrand = nameFormatter(brand);

  const description = `Shop our collection of authentic ${formattedBrand} products at MegaMart. Discover quality electronics, fashion, and more with competitive prices and fast shipping.`;

  return {
    title: `${CapFirstCharacter}${formattedBrand.slice(
      1
    )}  Products - MegaMart | Official Collection`,
    description: description,
    keywords: [
      formattedBrand,
      "brand",
      "products",
      "megamart",
      "official",
      "authentic",
      "collection",
    ],
    openGraph: {
      title: `${formattedBrand} Official Collection - MegaMart`,
      description: description,
      type: "website",
      images: [
        {
          url: `/brand-images/${brand.toLowerCase()}.jpg`,
          width: 800,
          height: 600,
          alt: `${formattedBrand} Products`,
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
      canonical: `/brand/${brand}`,
    },
  };
}

const page = async ({
  params,
  searchParams,
}: {
  params: { brand: string };
  searchParams: FilterProps;
}) => {
  const { order = "asc" } = searchParams;
  const { brand } = params;

  const products = await getProductsBrands({
    order,
    limit: 1000,
  });

  return (
    <BrandPage products={products} searchParams={searchParams} brand={brand} />
  );
};

export default page;
