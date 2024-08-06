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
  const { limit, skip } = filters;
  const url = `https://dummyjson.com/products?limit=${limit}&skip=${skip}`;
  try {
    const data = await getData(url);
    return data.products as ProductProps[];
  } catch (error) {
    console.error(`Error fetching products: ${error}`);
    throw error;
  }
};

export const updateSearchParams = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search);

  searchParams.set(type, value);
  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathname;
};

export const getCatProducts = async (
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
  const { limit, skip } = filters;
  const url = `https://dummyjson.com/products?limit=${limit}&skip=${skip}`;
  try {
    const data = await getData(url);
    return data.products as ProductProps[];
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

export const categoriesData = async (params: string) => {
  const url = `https://dummyjson.com/products/category/${params}`;
  try {
    const data = await getData(url);
    return data.products as ProductProps[];
  } catch (error) {
    console.error(`Error fetching categories data: ${error}`);
    throw error;
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

export const getSearchedProducts = async (term: string) => {
  const url = `https://dummyjson.com/products/search?q=${term}`;
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

export const getProductsBrands = async (): Promise<ProductProps[]> => {
  const url = `https://dummyjson.com/products?limit=10000`;
  try {
    const data = await getData(url);
    return data.products as ProductProps[];
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
