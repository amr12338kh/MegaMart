import Link from "next/link";
import Image from "next/image";
import topCategoriesData from "@/data/topCategoriesData.json";
import { memo } from "react";
import { CategoryCardProps } from "@/types";

const CategoryCard = memo(({ title, link, image }: CategoryCardProps) => {
  const categoryId = `category-${title.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <Link
      href={link}
      className="group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary rounded-xl"
      aria-labelledby={categoryId}
    >
      <div
        className="relative overflow-hidden rounded-xl bg-gradient-to-b from-primary/5 to-background shadow-sm 
        transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl 
        h-[300px] flex items-center justify-center"
      >
        <div
          className="absolute inset-0 z-10 bg-gradient-to-b from-black/40 to-black/70 
          transition-opacity duration-300 group-hover:opacity-80"
          aria-hidden="true"
        />

        <div className="absolute z-20 w-full px-6 text-center">
          <h3
            id={categoryId}
            className="text-white capitalize text-2xl sm:text-3xl font-bold 
            transform transition-transform duration-300 group-hover:scale-105 
            drop-shadow-lg"
          >
            {title}
          </h3>
        </div>

        <div className="absolute inset-0 z-0 w-full h-full">
          <Image
            src={image}
            alt={`${title} category`}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
        </div>
      </div>
    </Link>
  );
});

CategoryCard.displayName = "CategoryCard";

const TopCategories = () => {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
          Explore Categories
        </h2>
        <h3 className="mt-4 text-3xl font-bold tracking-tight">
          Shop by Category
        </h3>
        <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
          Discover a wide range of products across our carefully curated
          categories
        </p>
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {topCategoriesData.map((category) => (
          <CategoryCard key={category.title} {...category} />
        ))}
      </div>
    </div>
  );
};

export default memo(TopCategories);
