"use client";
import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";
import DailyDealsCard from "./DailyDealsCard";

const DailyDeals = () => {
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
    <div>
      <div className="mt-4 flex w-full items-center justify-between border-b border-primary text-xs">
        <div className="bg-primary p-2 font-bold text-primary-content">DAILY DEALS</div>
        <Pagination
          currentPage={currentPage}
          onPageChange={setCurrentPage}
          size={6}
        />
      </div>

      <div className="flex mt-4 gap-4">
        {products.map((product) => (
          <div key={product.id}>
            <DailyDealsCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailyDeals;
