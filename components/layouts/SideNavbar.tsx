"use client"

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { FaAlignLeft } from "react-icons/fa";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import Link from "next/link";
import { ShoppingBasket } from 'lucide-react';
import { 
    lobby, 
    collections,
    topProducts,
    help,
} from "@/constants";
import { useState } from "react";
import SearchBar from "../SearchBar";
  

const SideNavbar = () => {

    const [isOpen, setIsOpen] = useState(false)

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <FaAlignLeft size={25} />
      </SheetTrigger>
      <SheetContent side="left" className="w-full sm:w-[540px] items-start">
        <SheetHeader className=" text-start">
          <SheetTitle>
            <Link 
                href="/"
                onClick={() => setIsOpen(false)}
            >
              <div className="flex w-fit space-x-2 items-center">
                <ShoppingBasket />
                <h2 className="scroll-m-20 text-xl font-semibold tracking-tight">Tech Store</h2>
              </div>
            </Link>
          </SheetTitle>
          <SheetDescription>
            <div
                className="my-2" 
                onSubmit={() => setIsOpen(false)}
            >
                <SearchBar />
            </div>
            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger className="scroll-m-20 text-base font-semibold text-primary tracking-tight">Lobby</AccordionTrigger>
                    <AccordionContent className=" text-muted-foreground">
                    <ul className="ml-3 flex flex-col gap-3">
                        {lobby.map(item => (
                            <Link
                                key={item.title} 
                                href={item.link}
                                onClick={() => setIsOpen(false)}
                            >
                                <li className=" hover:text-primary text-sm font-medium leading-none">{item.title}</li>
                            </Link>
                        ))}
                    </ul>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible>
                <AccordionItem value="item-2">
                    <AccordionTrigger className="scroll-m-20 text-base font-semibold text-primary tracking-tight">Collections</AccordionTrigger>
                    <AccordionContent className=" text-muted-foreground">
                    <ul className="ml-3 flex flex-col gap-3">
                        {collections.map(collection => (
                            <Link
                                key={collection.title} 
                                href={collection.link}
                                onClick={() => setIsOpen(false)}
                            >
                                <li className=" hover:text-primary text-sm font-medium leading-none">{collection.title}</li>
                            </Link>
                        ))}
                    </ul>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible>
                <AccordionItem value="item-3">
                    <AccordionTrigger className="scroll-m-20 text-base font-semibold text-primary tracking-tight">Top Products</AccordionTrigger>
                    <AccordionContent className=" text-muted-foreground">
                    <ul className="ml-3 flex flex-col gap-3">
                        {topProducts.map(product => (
                            <Link
                                key={product.title} 
                                href={product.link}
                                onClick={() => setIsOpen(false)}
                            >
                                <li className=" hover:text-primary text-sm font-medium leading-none">{product.title}</li>
                            </Link>
                        ))}
                    </ul>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger className="scroll-m-20 text-base font-semibold text-primary tracking-tight">Help</AccordionTrigger>
                    <AccordionContent className=" text-muted-foreground">
                    <ul className="ml-3 flex flex-col gap-3">
                        {help.map(item => (
                            <Link
                                key={item.title} 
                                href={item.link}
                                onClick={() => setIsOpen(false)}
                            >
                                <li className=" hover:text-primary text-sm font-medium leading-none">{item.title}</li>
                            </Link>
                        ))}
                    </ul>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>

  )
}

export default SideNavbar