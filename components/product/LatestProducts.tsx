import Card from "./Card";
import {
  SectionContainer,
  SectionHeading,
  SectionCards,
} from "@/components/SectionContainer";
import { getLatestProducts } from "@/lib/utils";

const LatestProducts = async () => {
  const latestProducts = await getLatestProducts();

  return (
    <SectionContainer>
      <SectionHeading
        title="new to MegaMart"
        linkText="View all"
        tagline="New Arrivals You’ll Love"
        link={`/products`}
        isOne
      />
      <SectionCards>
        {latestProducts.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </SectionCards>
    </SectionContainer>
  );
};

export default LatestProducts;
