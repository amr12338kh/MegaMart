"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { ShoppingBasket } from "lucide-react";
import { headerLinks, quickAccessLinks } from "@/data";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Separator } from "../ui/separator";

const SideNavbar = ({ className }: { className?: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <button
          className={cn(
            "p-2 rounded-md hover:bg-accent transition-colors",
            className
          )}
          aria-label="Open Navigation Menu"
        >
          <Menu size={24} />
        </button>
      </SheetTrigger>

      <SheetContent
        side="left"
        className="w-full sm:w-[400px]  flex flex-col p-4 "
      >
        <div className="py-4 flex items-center justify-between">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center space-x-2 group"
          >
            <ShoppingBasket className="text-primary group-hover:scale-110 transition-transform" />
            <span className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
              MegaMart
            </span>
          </Link>
        </div>

        <Separator />

        <div className="grid grid-cols-4 gap-2 py-4">
          {quickAccessLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "flex flex-col items-center justify-center p-2 rounded-lg hover:bg-accent transition-colors group",
                  pathname === link.href && "bg-primary/10"
                )}
              >
                <Icon
                  className={cn(
                    "w-5 h-5 text-muted-foreground group-hover:text-primary",
                    pathname === link.href && "text-primary"
                  )}
                />
                <span className="text-xs mt-1 text-muted-foreground group-hover:text-foreground">
                  {link.title}
                </span>
              </Link>
            );
          })}
        </div>

        <Separator />

        <nav className="flex-1 overflow-y-auto">
          {headerLinks.map(({ title, links }, i) => (
            <Accordion type="single" collapsible key={i} className="w-full">
              <AccordionItem value={`item-${i}`}>
                <AccordionTrigger className="scroll-m-20 text-base font-semibold text-primary tracking-tight hover:no-underline group">
                  {title}
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2 pl-4 border-l-2 border-primary/20">
                    {links.map(({ name, url }) => (
                      <li key={title}>
                        <Link
                          href={url}
                          onClick={() => setIsOpen(false)}
                          className={cn(
                            "block py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors",
                            pathname === url && "text-primary font-semibold"
                          )}
                        >
                          {name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default SideNavbar;
