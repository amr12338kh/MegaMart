import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { FilterProps, ProductProps } from "@/types";
import axios, { AxiosError } from "axios";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function truncate(str: string, length: number) {
  return str.length > length ? `${str.substring(0, length)}...` : str;
}

export const getData = async (url: string, cacheTime?: number) => {
  try {
    const response = await axios.get(url, {
      headers: {
        "Cache-Control": `max-age=${cacheTime || 60 * 60 * 24}`,
      },
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      console.error(`Error fetching data: ${axiosError.message}`);
      throw new Error(`Failed to fetch data: ${axiosError.message}`);
    } else {
      console.error(`Unexpected error: ${error}`);
      throw new Error("An unexpected error occurred");
    }
  }
};

export const productsData = async (
  filters: FilterProps
): Promise<ProductProps[]> => {
  const { limit, order, skip } = filters;
  const url = `https://dummyjson.com/products?limit=${limit}&skip=${skip}&sortBy=title&order=${order}`;
  try {
    const data = await getData(url);
    return data.products as ProductProps[];
  } catch (error) {
    console.error(`Error fetching products: ${error}`);
    throw error;
  }
};

export const getTotalProducts = async (): Promise<number> => {
  const url = `https://dummyjson.com/products`;
  try {
    const data = await getData(url);
    return data.total as number;
  } catch (error) {
    console.error(`Error fetching total products: ${error}`);
    throw error;
  }
};

export const updateSearchParams = (
  type: string,
  value: string,
  currentPathname?: string
) => {
  const searchParams = currentPathname
    ? new URLSearchParams(currentPathname.split("?")[1] || "")
    : new URLSearchParams(window.location.search);

  searchParams.set(type, value);

  const pathBase = currentPathname
    ? currentPathname.split("?")[0]
    : window.location.pathname;

  const newPathname = `${pathBase}?${searchParams.toString()}`;

  return newPathname;
};

export const getCategoryRelatedProducts = async (
  cat: string,
  filters: FilterProps
): Promise<ProductProps[]> => {
  const { limit } = filters;
  const url = `https://dummyjson.com/products/category/${cat}?limit=${limit}`;
  try {
    const data = await getData(url);
    return data.products as ProductProps[];
  } catch (error) {
    console.error(`Error fetching category products: ${error}`);
    throw error;
  }
};

export const bestSellerProducts = async (
  filters: FilterProps
): Promise<ProductProps[]> => {
  const { limit = 4, skip = 0 } = filters;
  const url = `https://dummyjson.com/products?limit=100&skip=${skip}`;
  try {
    const data = await getData(url);
    const products = data.products as ProductProps[];

    const sortedProducts = products.sort((a, b) => {
      const ratingA = a.rating || 0;
      const ratingB = b.rating || 0;

      return ratingB - ratingA;
    });

    return sortedProducts.slice(skip, skip + limit);
  } catch (error) {
    console.error(`Error fetching best seller products: ${error}`);
    throw error;
  }
};

export const singleProductData = async (
  params: string
): Promise<ProductProps> => {
  const url = `https://dummyjson.com/products/${params}`;
  try {
    const data = await getData(url);
    return data as ProductProps;
  } catch (error) {
    console.error(`Error fetching single product: ${error}`);
    throw error;
  }
};

export const getRecommendedProducts = async (recNumber: number) => {
  if (!Number.isInteger(recNumber) || recNumber <= 0) {
    throw new Error("recNumber must be a positive integer.");
  }

  let recommended = [];
  let fetchedNumbers = new Set();

  function getRandomNumber(): number {
    let min = 1;
    let max = 100;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  try {
    for (let i = 1; i <= recNumber; i++) {
      let finalNumber: number;
      do {
        finalNumber = getRandomNumber();
      } while (fetchedNumbers.has(finalNumber));
      fetchedNumbers.add(finalNumber);
      const url = `https://dummyjson.com/products/${finalNumber}`;
      const data = await getData(url);
      recommended.push(data);
    }
    return recommended;
  } catch (error) {
    console.error(`Error fetching recommended products: ${error}`);
    throw error;
  }
};

export const categoriesData = async (params: string, filters: FilterProps) => {
  const { order, limit, skip } = filters;
  const url = `https://dummyjson.com/products/category/${params}?sortBy=title&order=${order}&limit=${limit}&skip=${skip}`;
  try {
    const data = await getData(url);
    return data.products as ProductProps[];
  } catch (error) {
    console.error(`Error fetching categories data: ${error}`);
    throw error;
  }
};

export const getTotalCategoryProducts = async (
  category: string
): Promise<number> => {
  try {
    const url = `https://dummyjson.com/products/category/${category}?limit=1000`;
    const data = await getData(url);
    return data.products.length;
  } catch (innerError) {
    console.error(`Error in fallback method: ${innerError}`);
    return 0;
  }
};

export const getCartProducts = async (
  filters: FilterProps
): Promise<ProductProps[]> => {
  const { limit } = filters;
  const url = `https://dummyjson.com/products?limit=${limit}`;
  try {
    const data = await getData(url);
    return data.products as ProductProps[];
  } catch (error) {
    console.error(`Error fetching cart products: ${error}`);
    throw error;
  }
};

export const getSearchedProducts = async (
  term: string,
  filters: FilterProps
) => {
  const { order } = filters;
  const url = `https://dummyjson.com/products/search?q=${term}&sortBy=title&order=${order}`;
  try {
    const data = await getData(url);
    return data.products as ProductProps[];
  } catch (error) {
    console.error(`Error searching products: ${error}`);
    throw error;
  }
};

export const getLatestProducts = async (): Promise<ProductProps[]> => {
  const url = `https://dummyjson.com/products`;
  try {
    const data = await getData(url);
    const latestProducts = data.products
      .sort((a: ProductProps, b: ProductProps) => b.id - a.id)
      .slice(0, 4);
    return latestProducts as ProductProps[];
  } catch (error) {
    console.error(`Error fetching latest products: ${error}`);
    throw error;
  }
};

export const getProductsBrands = async (
  filters: FilterProps
): Promise<ProductProps[]> => {
  const { order } = filters;
  const url = `https://dummyjson.com/products?limit=1000&sortBy=title&order=${order}`;
  try {
    const data = await getData(url);
    return data.products as ProductProps[];
  } catch (error) {
    console.error(`Error fetching products: ${error}`);
    throw error;
  }
};

export const getCategoryList = async (): Promise<string[]> => {
  const url = `https://dummyjson.com/products/category-list`;
  try {
    const data = await getData(url);
    return data;
  } catch (error) {
    console.error(`Error fetching products: ${error}`);
    throw error;
  }
};

export const calculateDateDifference = (date: string): string => {
  const givenDate: Date = new Date(date);
  const currentDate: Date = new Date();

  const diffInMilliseconds: number =
    currentDate.getTime() - givenDate.getTime();
  const diffInSeconds: number = Math.floor(diffInMilliseconds / 1000);
  const diffInMinutes: number = Math.floor(diffInMilliseconds / (1000 * 60));
  const diffInHours: number = Math.floor(diffInMilliseconds / (1000 * 60 * 60));
  const diffInDays: number = Math.floor(
    diffInMilliseconds / (1000 * 60 * 60 * 24)
  );

  const diffInMonths: number =
    (currentDate.getFullYear() - givenDate.getFullYear()) * 12 +
    (currentDate.getMonth() - givenDate.getMonth());
  const diffInYears: number =
    currentDate.getFullYear() - givenDate.getFullYear();

  if (diffInSeconds < 60) {
    return "just now";
  } else if (diffInMinutes < 60) {
    return `${diffInMinutes} minute${diffInMinutes > 1 ? "s" : ""}`;
  } else if (diffInHours < 24) {
    return `${diffInHours} hour${diffInHours > 1 ? "s" : ""}`;
  } else if (diffInYears > 0) {
    return `${diffInYears} year${diffInYears > 1 ? "s" : ""}`;
  } else if (diffInMonths > 0) {
    return `${diffInMonths} month${diffInMonths > 1 ? "s" : ""}`;
  } else {
    return `${diffInDays} day${diffInDays > 1 ? "s" : ""}`;
  }
};
