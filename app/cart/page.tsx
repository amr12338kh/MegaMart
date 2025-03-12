import { ProductProps } from "@/types";
import Cart from "../../components/cart/Cart";
import { getCartProducts } from "@/lib/utils";
import { getTotalProducts } from "@/lib/utils";

const page = async () => {
  const total = await getTotalProducts();
  const products: ProductProps[] = await getCartProducts({ limit: total });

  return <Cart products={products} />;
};

export default page;
