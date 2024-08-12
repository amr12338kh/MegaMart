"use client";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { getCategoryList } from "@/lib/utils";
import Link from "next/link";
import { use } from "react";

const CategoryCommand = () => {
  const categoryList = use(getCategoryList());

  return (
    <Command>
      <CommandInput placeholder="Search for category..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Categories">
          {categoryList.map((cat, i) => (
            <Link key={i} href={`/category/${cat}`}>
              <CommandItem className="cursor-pointer capitalize">
                {cat.replace("-", " ")}
              </CommandItem>
            </Link>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );
};

export default CategoryCommand;
