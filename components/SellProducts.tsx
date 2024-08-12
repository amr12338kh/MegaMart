import { GrContactInfo } from "react-icons/gr";
import { Button } from "./ui/button";
import Link from "next/link";

const SellProducts = () => {
  return (
    <div className=" w-full h-56 md:h-72 flex items-center flex-col justify-center rounded-lg gap-8 border">
      <h2 className=" w-3/4 md:w-full text-center text-base md:text-2xl lg:text-3xl">
        Do you want to sell your products on our website?
      </h2>
      <Link href="/contact">
        <Button size="sm">
          <p className="flex items-center gap-1 text-[12px]">
            <GrContactInfo size={15} /> Contact
          </p>
        </Button>
      </Link>
    </div>
  );
};

export default SellProducts;
