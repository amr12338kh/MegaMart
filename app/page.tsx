import Hero from "@/components/Hero";
import TopCategories from "@/components/TopCategories";
import SellProducts from "@/components/SellProducts";
import BestSellers from "@/components/product/BestSeller";
import RecommendedProducts from "@/components/product/RecommendedProducts";
import LatestProducts from "@/components/product/LatestProducts";

export default async function Home() {
  const recommendedNumber: number = 4;

  return (
    <main className="container">
      <section className="py-20 sm:py-32">
        <Hero />
      </section>

      <section className="py-8">
        <TopCategories />
      </section>

      <section>
        <BestSellers />
      </section>

      <section className="py-8 flex items-center">
        <SellProducts />
      </section>

      <section>
        <LatestProducts />
      </section>

      <section>
        <RecommendedProducts recNumber={recommendedNumber} />
      </section>
    </main>
  );
}
