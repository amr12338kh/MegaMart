"use client";

import { updateSearchParams } from "@/lib/utils";
import { PaginationButtonProps } from "@/types";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

const PaginationButton = ({ pageNumber }: PaginationButtonProps) => {
  const router = useRouter();

  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;
    const newPathNameLimit = updateSearchParams("limit", `${newLimit}`);
    router.push(newPathNameLimit, { scroll: false });
  };

  return (
    <div className="flex items-center justify-center mt-10">
      <Button variant="outline" onClick={handleNavigation}>
        See More
      </Button>
    </div>
  );
};

export default PaginationButton;
