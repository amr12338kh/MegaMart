import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { FilterProps, ProductProps } from "@/types"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getData = async (url: URL, cacheTime?: number) => {
  const options: RequestInit = {
    next: {
      revalidate: cacheTime || 60 * 60 * 24,
    },
  };

  const res = await fetch(url.toString(), options);
  const data = (await res.json())

  return data;
}

export const productsData = async (filters: FilterProps): Promise<ProductProps[]> => {

  const { limit, skip } = filters
  
  const url = new URL(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
  const data = await getData(url)
  return data.products as ProductProps[];
};

export const getCatProducts = async (cat: string, filters: FilterProps): Promise<ProductProps[]> => {
  const { limit } = filters

  const url = new URL(`https://dummyjson.com/products/category/${cat}?limit=${limit}`);
  const data = await getData(url)
  return data.products as ProductProps[];
};

export const bestSellerProducts = async (filters: FilterProps): Promise<ProductProps[]> => {
  const { limit, skip } = filters

  const url = new URL(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
  const data = await getData(url)
  return data.products as ProductProps[];
};

export const singleProductData = async (params: string): Promise<ProductProps> => {
  const url = new URL(`https://dummyjson.com/products/${params}`);
  const data = await getData(url)
  return data as ProductProps;
};

export const getRecommendedProducts = async (recNumber: number) => {

  if (!Number.isInteger(recNumber) || recNumber <= 0) {
    throw new Error('recNumber must be a positive integer.');
  }

  let recommended = []
  let fetchedNumbers = new Set();

  function getRandomNumber(): number {
      let min = 1;
      let max = 100
      let num = Math.floor(Math.random() * (max - min + 1)) + min
      return num;
  }
  
  for (let i = 1; i <= recNumber; i++ ) {
      let finalNumber: number;
      do {
        finalNumber = getRandomNumber();
      } while (fetchedNumbers.has(finalNumber));
      fetchedNumbers.add(finalNumber);
      const url = new URL(`https://dummyjson.com/products/${finalNumber}`);
      const data = await getData(url)
      const product: ProductProps = await data;
      recommended.push(product);
    }
    
  return recommended;
}

// Update the search
export const updateSearchParams = (type: string, value: string) => {

  // Get the current url 
  const searchParams = new URLSearchParams(window.location.search)

  // Set the new search parameter 
  searchParams.set(type, value)

  // Set the new search parameter 
  const newPathname = `${window.location.pathname}?${searchParams.toString()}`

  return newPathname

} 

export function truncate(str: string, length: number) {
  return str.length > length ? `${str.substring(0, length)}...` : str
}


export const categoriesData = async (params: string) => {

  const url = new URL(`https://dummyjson.com/products/category/${params}`);
  const data = await getData(url)

  return data.products as ProductProps[]
}

export const getCartProducts = async () => {
    const url = new URL(`https://dummyjson.com/products`);
    const data = await getData(url)
    return data.products as ProductProps[];
}

export const getSearchedProducts = async (term: string) => {
    const url = new URL(`https://dummyjson.com/products/search?q=${term}`);
    const data = await getData(url)

    return data.products as ProductProps[];
}