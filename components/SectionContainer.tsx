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
}) => {
  if (filters && (link || linkText))
    throw Error(
      "Invalid component configuration: The 'filters' and 'link'/'linkText' properties cannot be used together in SectionHeading. Please choose either to display filter and sorting dropdown or a link, but not both."
    );

  return (
    <div
      className={cn(
        `flex flex-col sm:flex-row sm:justify-between sm:items-center gap-y-5 sm:gap-y-0 ${
          isOne ? "mb-4" : "mb-7"
        }`,
        className
      )}
    >
      <div className="space-y-1">
        <SectionTitle title={title} />
        {tagline && <SectionTagline tagline={tagline} />}
      </div>
      {linkText && link && <SectionLink title={linkText} link={link} />}
      {filters && (
        <div>
          <Sort /> <Filter />
        </div>
      )}
    </div>
  );
};

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <h1 className="text-2xl sm:text-3xl font-extrabold lg:text-4xl capitalize">
      {title}
    </h1>
  );
};

const SectionTagline: React.FC<SectionTaglineProps> = ({ tagline }) => {
  return (
    <p className="text-xs sm:text-base font-normal text-muted-foreground">
      {tagline}
    </p>
  );
};

const SectionLink: React.FC<SectionLinkProps> = ({ title, link }) => {
  return (
    link &&
    title && (
      <Link href={link}>
        <span className="flex gap-x-1 items-center text-sm sm:text-base hover:underline hover:gap-x-3 duration-150">
          {title} <IoIosArrowRoundForward />
        </span>
      </Link>
    )
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
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-4",
        className
      )}
    >
      {children}
    </div>
  );
};
