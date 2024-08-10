"use client";

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { getCategoryList } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState, use } from "react";

const CategoryCommand = () => {
  // const [categoryList, setCategoryList] = useState<string[]>([]);

  // useEffect(() => {
  //   const fetchData = () => {
  //     const data = use(getCategoryList());
  //     setCategoryList(data);
  //   };

  //   fetchData();
  // }, []);
  const categoryList = use(getCategoryList());

  return (
    <Command>
      <CommandInput placeholder="Search for category..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Categories">
          {categoryList.map((cat, i) => (
            <Link key={i} href={`category/${cat}`}>
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
