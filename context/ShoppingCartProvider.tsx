"use client";

import { createContext, useContext, useEffect, useState } from "react";
import {
  ShoppingCartContextProps,
  CartItemProps,
  ProductProps,
} from "@/types/index";
import { useLocalStorage } from "@/hooks/use-local-storage";

const ShoppingCartContext = createContext({} as ShoppingCartContextProps);

export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};

export const ShoppingCartProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { setItem, getItem, removeItem } = useLocalStorage("cartItems");
  const [cartItems, setCartItems] = useState<CartItemProps[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedItems = getItem();
      if (storedItems) {
        setCartItems(storedItems);
      }
    }
  }, []); // Empty dependency array ensures this runs only once

  useEffect(() => {
    if (typeof window !== "undefined" && cartItems.length > 0) {
      setItem(cartItems);
    }
  }, [cartItems, setItem]);

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  const getItemQuantity = (id: number) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };

  const increaseCartQuantity = (id: number) => {
    setCartItems((cartItems) => {
      if (cartItems.find((item) => item.id === id) == null) {
        return [...cartItems, { id, quantity: 1 }];
      } else {
        return cartItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const decreaseQuantity = (id: number) => {
    setCartItems((cartItems) => {
      if (cartItems.find((item) => item.id === id)?.quantity === 1) {
        removeItem();
        return cartItems.filter((item) => item.id !== id);
      } else {
        return cartItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const removeFromCart = (id: number) => {
    setCartItems((cartItems) => {
      removeItem();
      return cartItems.filter((item) => item.id !== id);
    });
  };

  const clearCart = () => {
    cartItems.map(({ id }) => {
      const items = cartItems.find((item) => item.id === id);
      if (items?.id !== undefined) {
        removeFromCart(items.id);
      }
    });
  };

  const calculateTotalPrice = (products: ProductProps[]) => {
    return cartItems.reduce((total, item) => {
      const product = products.find((p) => p.id === item.id);

      const discountedPrice = product?.discountPercentage
        ? product.price - (product.price * product.discountPercentage) / 100
        : product?.price;
      const hasDiscount =
        product?.discountPercentage && product.discountPercentage > 0;

      if (hasDiscount && discountedPrice !== undefined) {
        total += discountedPrice * item.quantity;
      } else if (product) {
        total += product.price * item.quantity;
      }
      return total;
    }, 0);
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseQuantity,
        removeFromCart,
        cartQuantity,
        cartItems,
        calculateTotalPrice,
        clearCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
