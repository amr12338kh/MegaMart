export interface ProductProps {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: [string, string, string, string];
  fdprocessedid: string;
}

export interface FilterProps {
  limit: number;
  skip?: number;
}

export interface SearchParamsProps {
  searchParams: {
    limit: number;
    skip?: number;
  };
}

export interface PaginationButtonProps {
  pageNumber: number;
  skip: number;
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
