import { FilterProps, ProductProps } from "@/types";

export const useProducts = (
  products: ProductProps[],
  searchParams: FilterProps,
  options?: {
    brandFilter?: string;
    brandFilterKey?: keyof ProductProps;
  }
) => {
  const { limit = 12, skip = 0, minPrice, maxPrice } = searchParams;

  const limitNum = typeof limit === "string" ? parseInt(limit) : limit;
  const skipNum = typeof skip === "string" ? parseInt(skip) : skip;

  // Apply price filtering
  const filteredProducts = products.filter((product) => {
    const meetsPriceRange =
      (!minPrice || product.price >= Number(minPrice)) &&
      (!maxPrice || product.price <= Number(maxPrice));

    // Optional brand filtering
    const meetsBrandFilter = options?.brandFilter
      ? String(product[options.brandFilterKey || "brand"]).toLowerCase() ===
        String(options.brandFilter).toLowerCase()
      : true;

    return meetsPriceRange && meetsBrandFilter;
  });

  // Slice products for current page
  const paginatedProducts = filteredProducts.slice(skipNum, skipNum + limitNum);

  const total = filteredProducts.length;
  const currentPage = Math.floor(skipNum / limitNum) + 1;
  const totalPages = Math.ceil(total / limitNum);

  return {
    filteredProducts,
    paginatedProducts,
    total,
    currentPage,
    totalPages,
    isDataEmpty: filteredProducts.length === 0,
  };
};
