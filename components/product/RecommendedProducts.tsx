import Card from "./Card";
import { getRecommendedProducts } from "@/lib/utils";
import {
  SectionContainer,
  SectionHeading,
  SectionCards,
} from "@/components/SectionContainer";

interface Props {
  recNumber: number;
}

const RecommendedProducts = async ({ recNumber }: Props) => {
  const products = await getRecommendedProducts(recNumber);

  return (
    <SectionContainer>
      <SectionHeading
        title="Recommended"
        linkText="View all"
        link="/products"
        isOne
      />
      <SectionCards>
        {products.map((rec) => (
          <Card key={rec.id} product={rec} />
        ))}
      </SectionCards>
    </SectionContainer>
  );
};

export default RecommendedProducts;
