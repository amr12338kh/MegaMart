"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface PaginationControlsProps {
  currentPage: number;
  totalPages: number;
}

const PaginationControls = ({
  currentPage,
  totalPages,
}: PaginationControlsProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkViewport = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkViewport();

    window.addEventListener("resize", checkViewport);

    return () => window.removeEventListener("resize", checkViewport);
  }, []);

  const handlePageChange = (page: number) => {
    const limit = 12; // Items per page
    const skip = (page - 1) * limit;

    const params = new URLSearchParams(searchParams);

    params.set("limit", `${limit}`);
    params.set("skip", `${skip}`);

    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <Pagination className="mt-10">
      <PaginationContent className="flex justify-center gap-1">
        {currentPage > 1 && (
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handlePageChange(currentPage - 1);
              }}
              className="h-10"
            />
          </PaginationItem>
        )}

        {!isMobile && currentPage > 2 && (
          <>
            <PaginationItem>
              <PaginationLink
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handlePageChange(1);
                }}
                className="h-10 w-10 flex items-center justify-center"
              >
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <span className="px-1 flex items-center">...</span>
            </PaginationItem>
          </>
        )}

        {currentPage > 1 && (
          <PaginationItem>
            <PaginationLink
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handlePageChange(currentPage - 1);
              }}
              className="h-10 w-10 flex items-center justify-center"
            >
              {currentPage - 1}
            </PaginationLink>
          </PaginationItem>
        )}

        <PaginationItem>
          <PaginationLink
            href="#"
            onClick={(e) => {
              e.preventDefault();
            }}
            isActive={true}
            className="h-10 w-10 flex items-center justify-center"
          >
            {currentPage}
          </PaginationLink>
        </PaginationItem>

        {currentPage < totalPages && (
          <PaginationItem>
            <PaginationLink
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handlePageChange(currentPage + 1);
              }}
              className="h-10 w-10 flex items-center justify-center"
            >
              {currentPage + 1}
            </PaginationLink>
          </PaginationItem>
        )}

        {!isMobile && currentPage < totalPages - 1 && (
          <>
            <PaginationItem>
              <span className="px-1 flex items-center">...</span>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handlePageChange(totalPages);
                }}
                className="h-10 w-10 flex items-center justify-center"
              >
                {totalPages}
              </PaginationLink>
            </PaginationItem>
          </>
        )}

        {/* Next button */}
        {currentPage < totalPages && (
          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handlePageChange(currentPage + 1);
              }}
              className="h-10"
            />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationControls;
