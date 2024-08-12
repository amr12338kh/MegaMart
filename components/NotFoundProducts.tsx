"use client";

import { MessageSquareWarning } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

const NotFoundProducts = ({ isSearch }: { isSearch?: boolean }) => {
  return (
    <div className="min-h-[50vh] flex justify-center items-center">
      <div className="flex flex-col items-center gap-y-8">
        <MessageSquareWarning className="p-3 rounded-full bg-muted" size={60} />
        <div className="text-center">
          <h1 className="text-lg sm:text-xl md:text-2xl max-w-[600px] mb-1 font-semibold">
            {isSearch
              ? "Oops! No results found for your search."
              : "Oops! It looks like there aren&apos;t any products available right now."}
          </h1>
          <p className="text-sm">Please check back later or try again.</p>
        </div>
        <div className="flex gap-x-2">
          <Link href="/">
            <Button size="sm" variant="secondary">
              Home
            </Button>
          </Link>
          <Button size="sm" onClick={() => window.location.reload()}>
            {isSearch ? "Search again" : "Try again"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundProducts;
