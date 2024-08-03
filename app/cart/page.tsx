import { ProductProps, SearchParamsProps } from "@/types";
import Cart from "./Crat";
import { getCartProducts } from "@/lib/utils";

const page = async () => {
  const initialFetchLimit = 10000;
  const allProducts: ProductProps[] = await getCartProducts({
    limit: initialFetchLimit,
  });

  const limit = allProducts.length;
  const products: ProductProps[] = await getCartProducts({ limit });

  return (
    <main className=" container w-full py-8 min-h-[80vh]">
      <h1 className="scroll-m-20 text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
        Cart
      </h1>
      <div
        data-orientation="horizontal"
        role="none"
        className="shrink-0 bg-border h-[1px] w-full my-4"
      ></div>
      <section className="flex flex-col gap-4">
        <Cart products={products} />
      </section>
    </main>
  );
};

export default page;
