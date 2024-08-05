"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FaAlignLeft } from "react-icons/fa";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { ShoppingBasket } from "lucide-react";
import { headerLinks } from "@/constants";
import { useState } from "react";
import SearchBar from "../SearchBar";
import { cn } from "@/lib/utils";

const SideNavbar = ({ className }: { className?: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside className={cn(" cursor-pointer", className)}>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <FaAlignLeft size={25} />
        </SheetTrigger>
        <SheetContent side="left" className="w-full sm:w-[540px] items-start">
          <SheetHeader className=" text-start">
            <SheetTitle>
              <Link href="/" onClick={() => setIsOpen(false)}>
                <div className="flex w-fit space-x-2 items-center">
                  <ShoppingBasket />
                  <h2 className="scroll-m-20 text-xl font-semibold tracking-tight">
                    MegaMart
                  </h2>
                </div>
              </Link>
            </SheetTitle>
            <SheetDescription>
              <div className="my-2 sm:hidden" onSubmit={() => setIsOpen(false)}>
                <SearchBar />
              </div>
              {headerLinks.map(({ title, links }, i) => (
                <Accordion type="single" collapsible key={i}>
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="scroll-m-20 text-base font-semibold text-primary tracking-tight">
                      {title}
                    </AccordionTrigger>
                    <AccordionContent className=" text-muted-foreground">
                      <ul className="ml-3 flex flex-col gap-3">
                        {links.map(({ title, link }) => (
                          <Link
                            key={title}
                            href={link}
                            onClick={() => setIsOpen(false)}
                          >
                            <li className=" hover:text-primary text-sm font-medium leading-none">
                              {title}
                            </li>
                          </Link>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              ))}
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </aside>
  );
};

export default SideNavbar;
