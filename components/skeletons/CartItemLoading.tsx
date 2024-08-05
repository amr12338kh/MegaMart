import { Skeleton } from "../ui/skeleton";

const CartItemLoading = () => {
  return (
    <div className="flex flex-col sm:flex-row">
      <div className="flex w-full">
        <Skeleton className="relative aspect-square min-w-[40px] max-w-[70px] sm:min-w-[50px] sm:max-w-[80px] w-full flex-[0_0_100%]" />
        <div className=" ml-4 sm:ml-8 w-full">
          <div className="flex flex-col gap-y-2">
            <Skeleton className="h-5 max-w-[200px] w-full" />
            <Skeleton className="h-3 max-w-[120px] w-full" />
            <Skeleton className="h-3 max-w-[80px] w-full" />
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center mt-2 sm:mt-0 sm:gap-2">
        <div className="flex items-center">
          <Skeleton className="h-7 sm:h-9 w-20 sm:w-24" />
        </div>
        <div>
          <Skeleton className="h-7 sm:h-9 w-7 sm:w-9" />
        </div>
      </div>
    </div>
  );
};

export default CartItemLoading;
