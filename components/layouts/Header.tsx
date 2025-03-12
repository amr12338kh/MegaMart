"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "../ui/button";
import { FiShoppingCart } from "react-icons/fi";
import { ShoppingBasket, Search, User, X } from "lucide-react";
import React, { useEffect, useRef } from "react";
import { ModeToggle } from "../themes/ModeToggle";
import { useShoppingCart } from "@/context/ShoppingCartProvider";
import SideNavbar from "./SideNavbar";
import { headerLinks } from "@/data";
import SearchBar from "../SearchBar";
import { ListItem } from "./ListItem";
import { Badge } from "../ui/badge";
import { useState } from "react";

const Header = () => {
  const { cartQuantity } = useShoppingCart();
  const [open, setOpen] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  // Focus search input when opened
  useEffect(() => {
    if (open && searchContainerRef.current) {
      const input = searchContainerRef.current.querySelector("input");
      if (input) {
        setTimeout(() => input.focus(), 300);
      }
    }
  }, [open]);

  return (
    <header className="py-4 z-50 sticky top-0 bg-background/90 backdrop-blur-sm w-full border-b">
      <div className="container flex items-center justify-between">
        <div className="flex items-center lg:gap-8 gap-4">
          <Link className="lg:block hidden" href="/">
            <div className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <ShoppingBasket className="text-primary" />
              <h2 className="scroll-m-20 text-xl font-semibold tracking-tight">
                MegaMart
              </h2>
            </div>
          </Link>
          <SideNavbar className="lg:hidden" />
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              {headerLinks.map(({ title, links }, i) => (
                <NavigationMenuItem key={i}>
                  <NavigationMenuTrigger className="h-auto capitalize font-medium">
                    {title}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul
                      className={`grid gap-3 p-6 ${
                        i === 0 ? "w-[500px]" : "w-[600px]"
                      } grid-cols-[.75fr_1fr]`}
                    >
                      {i === 0 && (
                        <li className="row-span-3">
                          <NavigationMenuLink asChild>
                            <Link
                              className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-primary/5 to-background p-6 no-underline outline-none focus:shadow-md hover:bg-primary/15 transition-colors"
                              href="/"
                            >
                              <ShoppingBasket
                                className="h-8 w-8 text-primary"
                                aria-hidden="true"
                              />
                              <div className="mb-2 mt-4 text-lg font-medium">
                                MegaMart
                              </div>
                              <p className="text-sm leading-tight text-muted-foreground">
                                An E-commerce website for training built with
                                everything new in Next.js
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      )}
                      {links.map(({ name, description, url }, j) => (
                        <ListItem key={j} title={name} href={url}>
                          {description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden md:block flex-1 max-w-md">
            <SearchBar />
          </div>
          <div className="md:hidden">
            <Button
              size="icon"
              variant="ghost"
              className="text-muted-foreground relative z-10"
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close search" : "Open search"}
            >
              {open ? (
                <X size={20} className="animate-in fade-in duration-300" />
              ) : (
                <Search size={20} className="animate-in fade-in duration-300" />
              )}
            </Button>
          </div>

          <div className="border-l h-6 mx-1 hidden sm:block md:hidden " />

          <Link href="/account">
            <Button
              size="icon"
              variant="ghost"
              className="text-muted-foreground"
            >
              <User size={20} />
            </Button>
          </Link>

          <div className="border-l h-6 mx-1 hidden sm:block" />

          <Link href="/cart" className="relative">
            <Button
              size="icon"
              variant="ghost"
              className="text-muted-foreground"
            >
              <FiShoppingCart size={20} />
              {cartQuantity > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs">
                  {cartQuantity}
                </Badge>
              )}
            </Button>
          </Link>

          <div className="border-l h-6 mx-1 hidden sm:block" />

          <ModeToggle />
        </div>
      </div>

      <div
        ref={searchContainerRef}
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          open
            ? "max-h-16 opacity-100 translate-y-0 py-3"
            : "max-h-0 opacity-0 -translate-y-2 py-0"
        }`}
      >
        <div className="px-4">
          <SearchBar />
        </div>
      </div>
    </header>
  );
};

export default Header;
