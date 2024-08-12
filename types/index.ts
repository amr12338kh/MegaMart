export interface LinksProps {
  title: string;
  link: string;
  description?: string;
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

export interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
  container?: boolean;
}

export interface SectionHeadingProps {
  className?: string;
  title: string | JSX.Element;
  tagline?: string | JSX.Element;
  linkText?: string | JSX.Element;
  link?: string;
  isOne?: boolean;
  filters?: boolean | JSX.Element;
}

export interface SectionTitleProps {
  title: string | JSX.Element;
}

export interface SectionTaglineProps {
  tagline: string | JSX.Element;
}

export interface SectionLinkProps {
  link: string;
  title: string | JSX.Element;
  load?: boolean;
}

export interface SectionContentProps {
  children: React.ReactNode;
  className?: string;
}

export interface SectionCardsProps {
  children: React.ReactNode;
  className?: string;
}

export interface FilterProps {
  limit?: number;
  order?: "asc" | "desc";
  skip?: number;
}
export interface PaginationButtonProps {
  pageNumber: number;
}

export interface CatProductsProps {
  productCat: string;
  productId: number;
}

export interface CartItemProps {
  id: number;
  quantity: number;
}

export interface ShopingCartContextProps {
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  calculateTotalPrice: (products: ProductProps[]) => number;
  cartQuantity: number;
  cartItems: CartItemProps[];
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

export interface SectionContainerProps {
  title?: string;
  tagline?: string;
  className?: string;
}

export interface ReviewsProps {
  reviewerName: string;
  reviewerEmail: string;
  comment: string;
  date: string;
  rating: number;
}
