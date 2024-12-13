"use client";
import React, { useEffect, useState } from "react";
import PaginationSmall from "./PaginationSmall";
import BlogCard from "./BlogCard";

const LatestBlog = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;

  const fetchProducts = async (page: any) => {
    try {
      const offset = (page - 1) * itemsPerPage;
      const response = await fetch(
        `https://api.escuelajs.co/api/v1/products?limit=${itemsPerPage}&offset=${offset}`,
      );
      const jsonData = await response.json();
      setProducts(jsonData);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts(currentPage);
  }, [currentPage]);

  return (
    <section className="my-4">
      <div className="flex w-full items-center justify-between border-b-2 border-primary pb-1 text-xs">
        <div className="font-bold">LATEST Blog</div>
        <PaginationSmall
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      </div>

      <div className="mt-2 space-y-2">
        {products.map((product) => (
          <div key={product.id}>
            <BlogCard />
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestBlog;
