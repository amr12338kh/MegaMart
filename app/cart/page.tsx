import { ProductProps } from "@/types";
import Cart from "./Crat";
import { getCartProducts } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import Loading from "./loading";

const page = async () => {
  const initialFetchLimit = 10000;
  const allProducts: ProductProps[] = await getCartProducts({
    limit: initialFetchLimit,
  });

  const limit = allProducts.length;
  const products: ProductProps[] = await getCartProducts({ limit });

  return (
    // <main className=" container w-full py-8 min-h-[80vh]">
    //   <h1 className="scroll-m-20 text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
    //     Cart
    //   </h1>
    //   <Separator className="my-4" />
    //   <section className="flex flex-col gap-4">
    //     <Cart products={products} />
    //   </section>
    // </main>
    <Loading />
  );
};

export default page;
