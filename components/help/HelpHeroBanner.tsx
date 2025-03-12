import { HelpHeroBannerProps } from "@/types";
import { cn } from "@/lib/utils";

const HelpHeroBanner = ({
  title,
  subTitle,
  className,
}: HelpHeroBannerProps) => {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl bg-primary/10 p-8 md:p-12 mb-12",
        className
      )}
    >
      <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,transparent,#000)]"></div>
      <div className="relative z-10 max-w-2xl">
        <h1 className="font-bold tracking-tighter text-4xl md:text-5xl lg:text-6xl mb-4">
          {title}
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl">{subTitle}</p>
      </div>
    </div>
  );
};

export default HelpHeroBanner;
