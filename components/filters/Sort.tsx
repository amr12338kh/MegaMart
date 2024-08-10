"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { updateSearchParams } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

const Sort = () => {
  const router = useRouter();

  const handelNavigationOreder = (newOrder: "asc" | "desc") => {
    const newPathNameOrder = updateSearchParams("order", newOrder);
    router.push(newPathNameOrder, { scroll: false });
  };

  const handleAsc = () => {
    handelNavigationOreder("asc");
  };

  const handleDesc = () => {
    handelNavigationOreder("desc");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="outline-none">
        <Button size="sm" variant="outline">
          Sort
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Sort by:</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer" onClick={handleAsc}>
          Ascending order
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer" onClick={handleDesc}>
          Descending order
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Sort;
