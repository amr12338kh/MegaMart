import React from "react";

const ProductImageSkeleton: React.FC = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="aspect-square w-full bg-gray-200 animate-pulse rounded" />
      <div className="flex justify-center gap-2 mt-2">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className="w-12 h-12 bg-gray-200 animate-pulse rounded"
          />
        ))}
      </div>
    </div>
  );
};

export default ProductImageSkeleton;
