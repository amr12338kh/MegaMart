import { cn } from "@/lib/utils";
import React from "react";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import Sort from "@/components/filters/Sort";
import {
  SectionContainerProps,
  SectionHeadingProps,
  SectionTitleProps,
  SectionTaglineProps,
  SectionLinkProps,
  SectionContentProps,
  SectionCardsProps,
} from "@/types";
import Filter from "./filters/Filter";

export const SectionContainer: React.FC<SectionContainerProps> = ({
  children,
  className,
  container = false,
}) => {
  return (
    <section className={cn(`py-8 ${container && "container"}`, className)}>
      {children}
    </section>
  );
};

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  className,
  title,
  tagline,
  linkText,
  link,
  isOne = false,
  filters,
  spacing = "mb-7",
}) => {
  const showLink = !filters && linkText && link;
  const showFilters = filters && !link && !linkText;

  return (
    <div
      className={cn(
        `flex flex-col sm:flex-row sm:justify-between sm:items-center gap-y-5 sm:gap-y-0`,
        isOne ? "mb-4" : spacing,
        className
      )}
    >
      <div className="space-y-1">
        <SectionTitle title={title} />
        {tagline && <SectionTagline tagline={tagline} />}
      </div>

      {showLink && <SectionLink title={linkText!} link={link!} />}
      {showFilters && (
        <div>
          <Sort /> <Filter />
        </div>
      )}
    </div>
  );
};

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  className,
  as: Component = "h2",
}) => {
  return (
    <Component
      className={cn(
        "text-2xl sm:text-3xl font-extrabold lg:text-4xl capitalize",
        className
      )}
    >
      {title}
    </Component>
  );
};

const SectionTagline: React.FC<SectionTaglineProps> = ({ tagline }) => {
  return (
    <div className="text-xs sm:text-base font-normal text-muted-foreground">
      {tagline}
    </div>
  );
};

const SectionLink: React.FC<SectionLinkProps> = ({
  title,
  link,
  className,
  icon = <IoIosArrowRoundForward />,
}) => {
  return (
    <Link href={link}>
      <span
        className={cn(
          "flex gap-x-1 items-center text-sm sm:text-base hover:underline group",
          className
        )}
      >
        {title}
        <span className="transition-transform duration-150 group-hover:translate-x-1">
          {icon}
        </span>
      </span>
    </Link>
  );
};

export const SectionContent: React.FC<SectionContentProps> = ({
  children,
  className,
}) => {
  return (
    <div className={cn("flex flex-col space-y-6", className)}>{children}</div>
  );
};

export const SectionCards: React.FC<SectionCardsProps> = ({
  children,
  className,
  gap = "gap-6",
  marginBottom = "mb-4",
}) => {
  return (
    <div
      className={cn(
        `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ${gap} ${marginBottom}`,
        className
      )}
    >
      {children}
    </div>
  );
};
