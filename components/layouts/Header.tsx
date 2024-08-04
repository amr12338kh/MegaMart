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
import { ShoppingBasket } from "lucide-react";
import React from "react";
import { ModeToggle } from "../themes/ModeToggle";
import { useShopingCart } from "@/context/ShopingCartProvider";
import SideNavbar from "./SideNavbar";
import { headerLinks } from "@/constants";
import SearchBar from "../SearchBar";
import { ListItem } from "./ListItem";

const Header = () => {
  const { cartQuantity } = useShopingCart();

  return (
    <header className="py-3 z-50 sticky top-0 bg-background w-full border-b">
      <div className="container flex items-center justify-between space-x-2">
        <div className="flex items-center lg:gap-8 gap-0">
          <Link className="lg:block hidden" href="/">
            <div className="flex w-fit space-x-2 items-center">
              <ShoppingBasket />
              <h2 className="scroll-m-20 text-xl font-semibold tracking-tight">
                Tech Store
              </h2>
            </div>
          </Link>
          <SideNavbar className="lg:hidden" />
          <NavigationMenu className="hidden lg:block">
            <NavigationMenuList>
              {headerLinks.map(({ title, links }, i) => (
                <NavigationMenuItem key={i}>
                  <NavigationMenuTrigger className="h-auto capitalize">
                    {title}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[600px] grid-cols-[.75fr_1fr]">
                      {i === 0 && (
                        <li className="row-span-3">
                          <NavigationMenuLink asChild>
                            <Link
                              className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                              href="/"
                            >
                              <ShoppingBasket
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                              <div className="mb-2 mt-4 text-lg font-medium">
                                Tech Store
                              </div>
                              <p className="text-sm leading-tight text-muted-foreground">
                                An E-commerce website for training built with
                                everything new in Next.js
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      )}
                      {links.map(({ title, description, link }, j) => (
                        <ListItem key={j} title={title} href={link}>
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
        <div className="flex items-center justify-center gap-2">
          <div className="hidden sm:block">
            <SearchBar />
          </div>
          <Link href="/cart" className="relative">
            <Button size="icon" variant="outline">
              <FiShoppingCart />
            </Button>
            <span className="absolute right-[1px] top-[-10px] p-1 rounded-full bg-primary-foreground text-[10px] z-10">
              {cartQuantity}
            </span>
          </Link>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
