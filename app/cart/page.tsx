import { ProductProps } from "@/types";
import Cart from "./Crat";
import { getCartProducts } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { getTotalProducts } from "@/lib/utils";

const page = async () => {
  const total = await getTotalProducts();
  const products: ProductProps[] = await getCartProducts({ limit: total });

  return (
    <main className=" container w-full py-8 min-h-[80vh]">
      <h1 className="scroll-m-20 text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
        Cart
      </h1>
      <Separator className="my-4" />
      <section className="flex flex-col gap-4">
        <Cart products={products} />
      </section>
    </main>
  );
};

export default page;
