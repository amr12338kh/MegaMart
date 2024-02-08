"use client"

import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Button } from "../ui/button";
import { FiShoppingCart } from "react-icons/fi";
import { ShoppingBasket } from 'lucide-react';
import { cn } from "@/lib/utils"
import React from "react"
import { ModeToggle } from "../themes/ModeToggle";
import { useShopingCart } from "@/context/ShopingCartProvider";
import SideNavbar from "./SideNavbar";
import { 
  lobby, 
  collections,
  topProducts,
  help,
} from "@/constants";
import SearchBar from "../SearchBar";


const Header =() => {

  const { cartQuantity } = useShopingCart()

  return (
    <header className="py-3 z-50 sticky top-0 bg-background w-full border-b">
      <div className="container flex items-center justify-between space-x-2">
        <div className="flex items-center lg:gap-8 gap-0">
          <Link className="lg:block hidden" href="/">
            <div className="flex w-fit space-x-2 items-center">
              <ShoppingBasket />
              <h2 className="scroll-m-20 text-xl font-semibold tracking-tight">Tech Store</h2>
            </div>
          </Link>
        <div className="lg:hidden"><SideNavbar /></div>
          <NavigationMenu className=" hidden lg:block">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-auto">Lobby</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            href="/"
                        >
                            <ShoppingBasket className="h-6 w-6" aria-hidden="true" />
                            <div className="mb-2 mt-4 text-lg font-medium">Tech Store</div>
                            <p className="text-sm leading-tight text-muted-foreground">
                                An E-commerce website for training built with everything new in Next.js
                            </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    {lobby.map(item => (
                      <ListItem
                        key={item.title}
                        title={item.title}
                        href={item.link}
                      >
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-auto capitalize">Collections</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {collections.map(collection => (
                        <ListItem
                          key={collection.title}
                          title={collection.title}
                          href={collection.link}
                        >
                          {collection.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                  <NavigationMenuTrigger className="h-auto capitalize">Top Products</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {topProducts.map(product => (
                        <ListItem
                          key={product.title}
                          title={product.title}
                          href={product.link}
                        >
                          {product.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-auto capitalize">Help</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {help.map(item => (
                        <ListItem
                          key={item.title}
                          title={item.title}
                          href={item.link}
                        >
                          {item.description}
                        </ListItem>
                      ))}
                    </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className=" flex items-center justify-center gap-2">
          <div className=" hidden sm:block">
            <SearchBar />
          </div>
          <Link href="/cart" className=" relative">
            <Button
              size="icon" 
              variant="outline"
            >
              <FiShoppingCart />
            </Button>
            <span className=" absolute right-[1px] top-[-10px] p-1 rounded-full bg-primary-foreground text-[10px] z-10">
              {cartQuantity}
            </span>
          </Link>
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          href={String(href)}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

export default Header