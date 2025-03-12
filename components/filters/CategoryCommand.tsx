"use client";

import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command";
import { useState, useEffect } from "react";
import { Check } from "lucide-react";
import { cn, getCategoryList } from "@/lib/utils";
import CommandLoading from "../skeletons/CommandLoading";
import { usePathname } from "next/navigation";
import Link from "next/link";

const CategoryCommand = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryList, setCategoryList] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categories = await getCategoryList();
        setCategoryList(categories);
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to fetch categories", error);
        setCategoryList([]);
        setIsLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const pathname = usePathname();

  const checkCategory = (cat: string) => {
    if (pathname.includes(cat)) return true;
  };

  if (isLoading) {
    return <CommandLoading />;
  }

  return (
    <Command>
      <CommandInput
        placeholder="Search for category..."
        value={searchTerm}
        onValueChange={setSearchTerm}
      />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Categories">
          {categoryList.map((cat, i) => (
            <Link href={`/category/${cat}`} key={i}>
              <CommandItem
                className={cn(
                  "cursor-pointer capitalize",
                  checkCategory(cat) && "bg-primary/10"
                )}
              >
                <div className="flex items-center justify-between w-full">
                  <span>{cat.replace("-", " ")}</span>
                  {checkCategory(cat) && (
                    <Check className="h-4 w-4 text-primary" />
                  )}
                </div>
              </CommandItem>
            </Link>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );
};

export default CategoryCommand;
