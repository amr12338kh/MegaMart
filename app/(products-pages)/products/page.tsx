import { productsData } from "@/lib/utils";
import { FilterProps } from "@/types";
import AllProductsPage from "@/components/product/AllProductsPage";

export async function generateMetadata() {
  return {
    title: "All Products - MegaMart | Shop Our Complete Collection",
    description:
      "Browse MegaMart's complete collection of premium electronics, fashion, home goods and more with fast shipping and excellent customer service.",
    keywords: [
      "products",
      "all products",
      "megamart collection",
      "online shopping",
      "electronics",
      "fashion",
    ],
    openGraph: {
      title: "All Products - MegaMart | Shop Our Complete Collection",
      description:
        "Explore our wide selection of quality products with competitive prices and exclusive deals.",
      type: "website",
      images: [
        {
          url: "/logo.png",
          type: "image/png",
          width: 800,
          height: 600,
          alt: "MegaMart Products Collection",
        },
      ],
    },
    alternates: {
      canonical: "/products",
    },
  };
}

const Products = async ({ searchParams }: { searchParams: FilterProps }) => {
  const { order = "asc" } = searchParams;

  const allProducts = await productsData({
    limit: 1000,
    skip: 0,
    order,
  });

  return <AllProductsPage products={allProducts} searchParams={searchParams} />;
};

export default Products;
