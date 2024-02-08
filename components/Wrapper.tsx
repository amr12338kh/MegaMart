import * as React from "react"

import { cn } from "@/lib/utils"
import { Button } from "./ui/button"


const Wrapper = React.forwardRef<
HTMLDivElement,
React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div 
    ref={ref}
    className={cn("py-8", className)}
    {...props}
  />
))

Wrapper.displayName = "Wrapper"

const WrapperHeading = React.forwardRef<
HTMLDivElement,
React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div 
    ref={ref}
    className={cn("flex justify-between items-center mb-9", className)}
    {...props}
  />
))

WrapperHeading.displayName = "WrapperHeading"


const WrapperTitle = React.forwardRef<
HTMLDivElement,
React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h1 
    ref={ref}
    className={cn("scroll-m-20 text-2xl sm:text-3xl font-extrabold lg:text-4xl capitalize", className)}
    {...props}
  />
))

WrapperTitle.displayName = "WrapperTitle"

const WrapperSubtitle = React.forwardRef<
HTMLDivElement,
React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p 
    ref={ref}
    className={cn(" [&:not(:first-child)]:mt-6 text-xs sm:text-base font-normal text-muted-foreground", className)}
    {...props}
  />
))

WrapperSubtitle.displayName = "WrapperSubtitle"

const WrapperLink = React.forwardRef<
HTMLDivElement,
React.HTMLAttributes<HTMLButtonElement>
>(({ className, ...props}) => (
    <Button
      variant="link"
      className={cn("flex gap-1 text-sm sm:text-base", className)}
      {...props}
    />
))

WrapperLink.displayName = "WrapperLink"

const WrapperContent = React.forwardRef<
HTMLDivElement,
React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div 
    ref={ref}
    className={cn("flex flex-col space-y-6", className)}
    {...props}
  />
))

WrapperContent.displayName = "WrapperContent"

const WrapperCards = React.forwardRef<
HTMLDivElement,
React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <section
    ref={ref}
    className={cn("grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-4", className)}
    {...props}
  />
))

WrapperCards.displayName = "WrapperCards"


export { Wrapper, WrapperHeading, WrapperTitle, WrapperContent, WrapperCards, WrapperSubtitle, WrapperLink }