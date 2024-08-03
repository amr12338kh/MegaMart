"use client";

import { updateSearchParams } from "@/lib/utils";
import { PaginationButtonProps } from "@/types";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

const PaginationButton = ({ pageNumber }: PaginationButtonProps) => {
  const router = useRouter();

  const handelNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;
    const newPathNameLimit = updateSearchParams("limit", `${newLimit}`);
    router.push(newPathNameLimit, { scroll: false });
  };

  return (
    <Button variant="outline" onClick={handelNavigation}>
      See More
    </Button>
  );
};

export default PaginationButton;
