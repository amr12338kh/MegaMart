import { ProductProps } from "@/types";
import Checkout from "@/components/checkout/Checkout";
import { getCartProducts } from "@/lib/utils";
import { getTotalProducts } from "@/lib/utils";

const CheckoutPage = async () => {
  const total = await getTotalProducts();
  const products: ProductProps[] = await getCartProducts({ limit: total });

  return <Checkout products={products} />;
};

export default CheckoutPage;
