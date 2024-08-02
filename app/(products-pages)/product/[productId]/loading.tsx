"use client";

import SingleProductSkeleton from "@/components/skeletons/SingleProductSkeleton";
import LoadingProducts from "@/components/skeletons/LoadingProducts";

const loading = () => {
  return (
    <main className="container">
      <section className=" flex-1">
        <SingleProductSkeleton />
      </section>
      <section>
        <LoadingProducts arrLength={4} isOne />
      </section>
      <section>
        <LoadingProducts arrLength={4} isOne />
      </section>
    </main>
  );
};

export default loading;
