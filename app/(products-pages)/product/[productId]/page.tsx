import SingleProduct from "@/components/product/SingleProduct";
import RecommendedProducts from "@/components/product/RecommendedProducts";
import { singleProductData } from "@/lib/utils";
import CatProducts from "@/components/product/CatProducts";
import { notFound } from "next/navigation";
import Reviews from "@/components/product/Reviews";
import { Separator } from "@/components/ui/separator";

export async function generateMetadata({
  params,
}: {
  params: { productId: string };
}) {
  const product = await singleProductData(params.productId);

  return {
    title: `${product.title} - Tech Store`,
    description: product.description,
  };
}

const page = async ({ params }: { params: { productId: string } }) => {
  const product = await singleProductData(params.productId);

  if (!product) notFound();

  return (
    <main className=" container">
      <section className="flex-1 mb-16">
        <SingleProduct product={product} />
      </section>
      <section>
        <CatProducts productCat={product.category} productId={product.id} />
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

export default page;
