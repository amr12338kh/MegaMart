import SingleProduct from "@/components/product/SingleProduct";
import RecommendedProducts from "@/components/product/RecommendedProducts";
import { singleProductData } from "@/lib/utils";
import CategoryRelatedProducts from "@/components/product/CategoryRelatedProducts";
import { notFound } from "next/navigation";
import Reviews from "@/components/product/Reviews";
import { Separator } from "@/components/ui/separator";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { productId: string };
}): Promise<Metadata> {
  const { productId } = params;
  const product = await singleProductData(productId);

  if (!product) {
    return {
      title: "Product Not Found - MegaMart",
      description: "The requested product could not be found.",
    };
  }

  // Truncate description if too long for meta tags
  const metaDescription =
    product.description.length > 160
      ? `${product.description.substring(0, 157)}...`
      : product.description;

  return {
    title: `${product.title} - MegaMart`,
    description: metaDescription,
    keywords: [
      product.title,
      product.category,
      "product",
      "megamart",
      "online shopping",
    ],
    openGraph: {
      title: `${product.title} - MegaMart`,
      description: metaDescription,
      images: [
        {
          url: product.thumbnail || "/logo.png",
          width: 800,
          height: 600,
          alt: product.title,
        },
      ],
    },
    alternates: {
      canonical: `/product/${productId}`,
    },
    other: {
      "product:price:amount": product.price.toString(),
      "product:price:currency": "USD",
      "product:availability": product.stock > 0 ? "instock" : "outofstock",
      "product:brand": product.brand || "MegaMart",
      "product:category": product.category,
    },
  };
}

const productPage = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const { productId } = await params;
  const product = await singleProductData(productId);
  const { category, id } = product;

  if (!product) notFound();

  return (
    <main className="container">
      <section className="flex-1 mb-16">
        <SingleProduct product={product} />
      </section>
      <section>
        <CategoryRelatedProducts productCat={category} productId={id} />
      </section>
      <section>
        <RecommendedProducts recNumber={4} />
      </section>
      <section className="my-6">
        <h1 className=" text-xl font-semibold">Reviews</h1>
        <Separator className="my-4" />
        <Reviews product={product} />
      </section>
    </main>
  );
};

export default productPage;
