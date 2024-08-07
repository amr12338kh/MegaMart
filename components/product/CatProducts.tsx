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
  const filteredProducts = products
    .filter((product) => product.id !== productId)
    .slice(0, 4);
  const categoryName = productCat.replace("-", " ");

  return (
    <SectionContainer>
      <SectionHeading
        title={`${categoryName} category`}
        tagline="Find the Best Products in This Category"
        linkText="View all"
        link={`/category/${productCat}`}
        isOne
      />
      <SectionCards>
        {filteredProducts.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </SectionCards>
    </SectionContainer>
  );
};

export default CatProducts;
