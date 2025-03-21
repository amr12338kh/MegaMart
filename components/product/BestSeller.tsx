import Card from "./Card";
import { bestSellerProducts } from "@/lib/utils";
import {
  SectionContainer,
  SectionHeading,
  SectionCards,
} from "@/components/SectionContainer";

const BestSellers = async () => {
  const products = await bestSellerProducts({
    limit: 4,
    skip: 0,
  });

  return (
    <SectionContainer>
      <SectionHeading
        title="Best Sellers"
        tagline="Discover Our Most Popular Picks"
        linkText="View all"
        link="/products"
        isOne
      />

      <SectionCards>
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </SectionCards>
    </SectionContainer>
  );
};

export default BestSellers;
