// Import statements at the top
import {
  checkoutFormSchema,
  creditCardSchema,
  passwordFormSchema,
  profileFormSchema,
} from "@/lib/schema";
import { LucideIcon } from "lucide-react";
import React, { JSX } from "react";
import { UseFormReturn } from "react-hook-form";
import { IconType } from "react-icons/lib";
import { z } from "zod";

// Link & Navigation Related Interfaces
export interface LinksProps {
  name: string;
  url: string;
  description?: string;
  username?: string;
  icon?: LucideIcon | IconType;
}

export interface HeaderLinksProps {
  title: string;
  links: LinksProps[];
}

export interface FooterLinksProps {
  title: string;
  links: LinksProps[];
  blank: boolean;
}

// Product Related Interfaces

export interface ProductsPagesProps {
  products: ProductProps[];
  searchParams: FilterProps;
  brand?: string;
  category?: string;
  termToUse?: string;
}
export interface ProductProps {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: [
    {
      rating: number;
      comment: string;
      date: string;
      reviewerName: string;
      reviewerEmail: string;
    }
  ];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
  };
  thumbnail: string;
  images: [string, string, string, string];
}

export interface CategoryCardProps {
  title: string;
  link: string;
  image: string;
}

export interface ReviewsProps {
  reviewerName: string;
  reviewerEmail: string;
  comment: string;
  date: string;
  rating: number;
}

// Section Layout Interfaces
export interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
  container?: boolean;
  title?: string;
  tagline?: string;
}

export interface SectionHeadingProps {
  className?: string;
  title: string | JSX.Element;
  tagline?: string | JSX.Element;
  linkText?: string | JSX.Element;
  link?: string;
  isOne?: boolean;
  filters?: boolean | JSX.Element;
  spacing?: string;
}

export interface SectionTitleProps {
  title: string | JSX.Element;
  className?: string;
  as?: React.ElementType;
}

export interface SectionTaglineProps {
  tagline: string | JSX.Element;
}

export interface SectionLinkProps {
  link: string;
  title: string | JSX.Element;
  icon?: React.ReactNode;
  load?: boolean;
  className?: string;
}

export interface SectionContentProps {
  children: React.ReactNode;
  className?: string;
}

export interface SectionCardsProps {
  children: React.ReactNode;
  className?: string;
  gap?: string;
  marginBottom?: string;
}

// Cart & Checkout Interfaces
export interface CartItemProps {
  id: number;
  quantity: number;
}

export interface ShoppingCartContextProps {
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  calculateTotalPrice: (products: ProductProps[]) => number;
  cartQuantity: number;
  cartItems: CartItemProps[];
  clearCart: () => void;
}

export interface AddToCartButtonProps {
  size?: "default" | "icon" | "sm" | "lg";
  style?: string;
  variant?:
    | "default"
    | "link"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost";
  product: ProductProps;
}

export interface CreditCardItem {
  id: string;
  cardName: string;
  cardNumber: string;
  expiry: string;
  cvv: string;
}

export interface PaymentOptionsProps {
  form: UseFormReturn<CheckoutFormData | CreditCardFormValues | any>;
  savedCards: CreditCardItem[];
  defaultCardId: number;
}

// Form Related Types
export type CheckoutFormData = z.infer<typeof checkoutFormSchema>;
export type ProfileFormValues = z.infer<typeof profileFormSchema>;
export type PasswordFormValues = z.infer<typeof passwordFormSchema>;
export type CreditCardFormValues = z.infer<typeof creditCardSchema>;

// UI Component Interfaces
export interface TabsCardWrapperProps {
  title: string;
  tabValue: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
  headerClassName?: string;
  contentClassName?: string;
  noBorder?: boolean;
}

export interface HelpHeroBannerProps {
  title: string;
  subTitle?: string;
  className?: string;
}

export interface CTAProps {
  icon: LucideIcon | IconType;
  title: string;
  btnText: string;
  secBtnText?: string;
  secLink?: string;
  link: string;
  subTitle?: string;
  className?: string;
  blank?: boolean;
}

// Filtering & Pagination Interfaces
export interface FilterProps {
  limit?: number;
  order?: "asc" | "desc";
  skip?: number;
  minPrice?: number;
  maxPrice?: number;
  [key: string]: string | number | undefined;
}

export interface PaginationButtonProps {
  pageNumber: number;
}

export interface CatProductsProps {
  productCat: string;
  productId: number;
}
