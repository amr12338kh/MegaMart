"use client";

import { useRouter, useSearchParams } from "next/navigation";
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

  const handlePageChange = (page: number) => {
    const limit = 12; // Items per page
    const skip = (page - 1) * limit;

    const params = new URLSearchParams(searchParams);

    // Update or add limit and skip parameters
    params.set("limit", `${limit}`);
    params.set("skip", `${skip}`);

    // Push the updated URL with preserved filters
    router.push(`?${params.toString()}`, { scroll: false });
  };

  const getPageNumbers = () => {
    const pages = [];
    const rangeStart = Math.max(1, currentPage - 2);
    const rangeEnd = Math.min(totalPages, currentPage + 2);

    for (let i = rangeStart; i <= rangeEnd; i++) {
      pages.push(i);
    }

    return pages;
  };

  return (
    <Pagination className="mt-10">
      <PaginationContent>
        {/* Previous button */}
        {currentPage > 1 && (
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handlePageChange(currentPage - 1);
              }}
            />
          </PaginationItem>
        )}

        {/* First page */}
        {currentPage > 3 && (
          <>
            <PaginationItem>
              <PaginationLink
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handlePageChange(1);
                }}
              >
                1
              </PaginationLink>
            </PaginationItem>

            {currentPage > 4 && (
              <PaginationItem>
                <span className="px-2">...</span>
              </PaginationItem>
            )}
          </>
        )}

        {/* Page numbers */}
        {getPageNumbers().map((page) => (
          <PaginationItem key={page}>
            <PaginationLink
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handlePageChange(page);
              }}
              isActive={page === currentPage}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}

        {/* Last page indicator */}
        {currentPage < totalPages - 2 && (
          <>
            {currentPage < totalPages - 3 && (
              <PaginationItem>
                <span className="px-2">...</span>
              </PaginationItem>
            )}
            <PaginationItem>
              <PaginationLink
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handlePageChange(totalPages);
                }}
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
            />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationControls;
