import { Separator } from "../ui/separator";
import { Skeleton } from "../ui/skeleton";

const CommandLoading = () => {
  return (
    <div className="my-5">
      <div className="mb-4">
        <Skeleton className="w-full h-9" />
        <Separator className="my-2" />
        <Skeleton className="w-28 h-3" />
      </div>
      <div className="space-y-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <Skeleton
            key={i}
            className={`h-5 ${i % 2 === 0 ? "w-[70%]" : " w-1/2"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CommandLoading;
