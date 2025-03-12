import { CTAProps } from "@/types";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const CTA = ({
  icon: Icon,
  title,
  btnText,
  secBtnText,
  secLink,
  link,
  blank,
  subTitle,
  className,
}: CTAProps) => {
  return (
    <section
      className={cn(
        "text-center bg-card rounded-xl p-6 border border-border/50 shadow-sm",
        className
      )}
    >
      <div className="bg-primary/10 p-3 rounded-full mx-auto mb-4 w-fit">
        <Icon />
      </div>
      <h2 className="text-xl font-semibold mb-3">{title}</h2>
      {subTitle && (
        <div className="max-w-3xl text-center mx-auto">
          <p className="text-muted-foreground text-sm mb-6">{subTitle}</p>
        </div>
      )}
      <div className={secBtnText && "grid sm:grid-cols-2 gap-4"}>
        {secBtnText && (
          <Link
            href={secLink || "#"}
            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring bg-card hover:bg-accent border border-input h-9 px-4 py-2"
          >
            {secBtnText}
          </Link>
        )}

        <Link
          href={link}
          target={blank ? "_blank" : ""}
          className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 py-2 w-full"
        >
          {btnText}
        </Link>
      </div>
    </section>
  );
};
