"use client";

import { Button } from "@/components/ui/button";
import { FaSearch } from "react-icons/fa";
import { MdRefresh } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import Link from "next/link";

const NotFound = () => {
  return (
    <section className="container flex flex-col justify-center items-center min-h-screen bg-gradient-to-b from-background to-background/50">
      <div className="w-full max-w-md p-8">
        <div className="flex flex-col items-center">
          <div className="bg-primary/10 p-6 rounded-full mb-6">
            <FaSearch size={60} className="text-primary" />
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold text-center mb-4">
            Page Not Found
          </h1>

          <p className="text-muted-foreground text-center mb-8">
            We couldn&apos;t find the page you&apos;re looking for. It may have
            been moved or deleted.
          </p>

          <div className="grid grid-cols-2 gap-4 w-full">
            <Button
              onClick={(e) => window.location.reload()}
              className="flex items-center justify-center gap-2"
              size="lg"
            >
              <MdRefresh className="text-lg" />
              <span>Refresh</span>
            </Button>

            <Link href="/" className="w-full">
              <Button
                variant="outline"
                className="flex items-center justify-center gap-2 w-full"
                size="lg"
              >
                <FaHome className="text-lg" />
                <span>Home</span>
              </Button>
            </Link>
          </div>

          <p className="text-xs text-muted-foreground mt-6 text-center">
            If you believe this is an error, please contact our support team.
          </p>
        </div>
      </div>
      <div className="mt-6 text-sm text-muted-foreground">
        Page Reference:{" "}
        <span className="font-mono">
          404-{Math.floor(1000 + Math.random() * 9000)}
        </span>
      </div>
    </section>
  );
};

export default NotFound;
