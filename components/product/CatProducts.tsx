import Card from "./Card";
import { getCatProducts } from "@/lib/utils";
import { CatProductsProps } from "@/types";
import {
  SectionContainer,
  SectionHeading,
  SectionCards,
} from "@/components/SectionContainer";

const CatProducts = async ({ productCat, productId }: CatProductsProps) => {
  const products = await getCatProducts(productCat, { limit: 5 });

  return (
    <SectionContainer>
      <SectionHeading
        title={`${productCat.split("-").join(" ")} category`}
        linkText="View all"
        link={`/category/${productCat}`}
        isOne
      />
      <SectionCards>
        {products.map((product) => {
          if (product.id !== productId) {
            return <Card key={product.id} product={product} />;
          }
        })}
      </SectionCards>
    </SectionContainer>
  );
};

export default CatProducts;
