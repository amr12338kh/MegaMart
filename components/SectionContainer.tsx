import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import React from "react";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

export const SectionContainer = ({
  children,
  className,
  container,
}: {
  children: React.ReactNode;
  className?: string;
  container?: boolean;
}) => {
  return (
    <section className={cn(`py-8 ${container && "container"}`, className)}>
      {children}
    </section>
  );
};

export const SectionHeading = ({
  className,
  title,
  tagline,
  linkText,
  link,
  isOne,
}: {
  className?: string;
  title: string | JSX.Element;
  tagline?: string | JSX.Element;
  linkText?: string | JSX.Element;
  link?: string;
  isOne?: boolean;
}) => {
  return (
    <div
      className={cn(
        `flex justify-between items-center ${isOne ? "mb-4" : "mb-7"}`,
        className
      )}
    >
      <div className="space-y-1">
        <SectionTitle title={title} />
        {tagline && <SectionTagline tagline={tagline} />}
      </div>
      {linkText && link && <SectionLink title={linkText} link={link} />}
    </div>
  );
};

const SectionTitle = ({ title }: { title: string | JSX.Element }) => {
  return (
    <h1 className="text-2xl sm:text-3xl font-extrabold lg:text-4xl capitalize">
      {title}
    </h1>
  );
};

const SectionTagline = ({ tagline }: { tagline: string | JSX.Element }) => {
  return (
    <p className="text-xs sm:text-base font-normal text-muted-foreground">
      {tagline}
    </p>
  );
};

const SectionLink = ({
  title,
  link,
  load,
}: {
  link: string;
  title: string | JSX.Element;
  load?: boolean;
}) => {
  return (
    link &&
    title && (
      <Link href={link}>
        <Button variant="link" className="flex gap-1 text-sm sm:text-base">
          {title} <IoIosArrowRoundForward />
        </Button>
      </Link>
    )
  );
};

export const SectionContent = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-6", className)}>{children}</div>
  );
};

export const SectionCards = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
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
