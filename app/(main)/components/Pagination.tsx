"use client";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import React from "react";

const Pagination = ({ currentPage, onPageChange }: any) => {
  const handlePageChange = (page: any) => {
    onPageChange(page);
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        className={`btn btn-primary size-6 min-h-0 min-w-0 p-0`}
        disabled={currentPage === 1}
      >
        <ChevronLeftIcon className={`size-4 text-primary-content`} />
      </button>
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        className={`btn btn-primary size-6 min-h-0 min-w-0 p-0`}
      >
        <ChevronRightIcon className={`size-4 text-primary-content`} />
      </button>
    </div>
  );
};

export default Pagination;
