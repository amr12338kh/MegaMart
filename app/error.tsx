"use client";

import { Button } from "@/components/ui/button";
import { BiErrorCircle } from "react-icons/bi";
import { MdRefresh } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import Link from "next/link";

const NotFound = () => {
  return (
    <section className="container flex flex-col justify-center items-center min-h-screen bg-gradient-to-b from-background to-background/50">
      <div className="w-full max-w-md p-8">
        <div className="flex flex-col items-center">
          <div className="bg-destructive/10 p-6 rounded-full mb-6">
            <BiErrorCircle size={60} className="text-destructive" />
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold text-center mb-4">
            Something Went Wrong
          </h1>

          <p className="text-muted-foreground text-center mb-8">
            We couldn&apos;t process your request. This could be due to a
            temporary issue or network problem.
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
            If the problem persists, please contact our support team.
          </p>
        </div>
      </div>
      <div className="mt-6 text-sm text-muted-foreground">
        Error Reference:{" "}
        <span className="font-mono">
          ERR-{Math.floor(1000 + Math.random() * 9000)}
        </span>
      </div>
    </section>
  );
};

export default NotFound;
