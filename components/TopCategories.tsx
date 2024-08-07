import Link from "next/link";
import Image from "next/image";
import topCategoriesData from "@/data/topCategoriesData.json";

const TopCategories = () => {
  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {topCategoriesData.map(({ title, link, image }) => {
        return (
          <Link href={link} key={title}>
            <div className="flex items-center justify-center group relative overflow-hidden rounded-lg">
              <h3 className=" absolute flex justify-center items-center text-white capitalize z-20 text-xl sm:text-2xl xl:text-3xl font-bold">
                {title}
              </h3>
              <div className="absolute inset-0 z-10 bg-black/60 transition-colors group-hover:bg-black/70"></div>
              <div className="group-hover:scale-110 duration-200">
                <Image
                  src={image}
                  alt={title}
                  width={1000}
                  height={1000}
                  className="max-h-[250px] object-cover"
                />
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default TopCategories;
