import { GrContactInfo } from "react-icons/gr";
import { Button } from "./ui/button";
import Link from "next/link";

const SellProducts = () => {
  return (
    <div className="w-full bg-gradient-to-b from-primary/5 to-background p-8 md:p-12 rounded-xl shadow-sm">
      <div className="flex flex-col items-center justify-center gap-6 md:gap-8">
        <div className="space-y-4 text-center relative z-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary">
            Sell Your Products on Mega Mart
          </h2>
          <p className="text-muted-foreground/80 max-w-2xl mx-auto text-base md:text-lg">
            Join thousands of sellers who have already expanded their business
            with us. Get started today and reach millions of customers.
          </p>
        </div>

        <Link href="/contact" className="relative z-10">
          <Button
            size="lg"
            className="transform transition-all duration-200 hover:scale-105 shadow-md hover:shadow-xl"
          >
            <span className="flex items-center gap-2 text-sm md:text-base font-medium">
              <GrContactInfo className="w-4 h-4" />
              Start Selling
            </span>
          </Button>
        </Link>

        <div className="flex flex-wrap justify-center gap-8 mt-4 text-sm text-muted-foreground/80">
          <span className="flex items-center gap-2">
            <span className="font-bold text-primary">10K+</span> Active Sellers
          </span>
          <span className="flex items-center gap-2">
            <span className="font-bold text-primary">1M+</span> Monthly
            Customers
          </span>
          <span className="flex items-center gap-2">
            <span className="font-bold text-primary">24/7</span> Support
          </span>
        </div>
      </div>
    </div>
  );
};

export default SellProducts;
