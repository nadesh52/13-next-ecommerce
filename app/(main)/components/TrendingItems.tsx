"use client";
import React, { useEffect, useState } from "react";
import CategoryGroup from "./CategoryGroup";
import TrendingItemsCard from "./TrendingItemsCard";

const TrendingItems = () => {
  const [products, setProducts] = useState<any>([]);
  const [currentCategory, setCurrentCategory] = useState<any>(1);

  const fetchProducts = async (currentCategory: any) => {
    const URL = "https://api.escuelajs.co/api/v1/categories";
    const response = await fetch(
      `${URL}/${currentCategory}/products?limit=10&offset=1`,
    );
    const jsonData = await response.json();

    setProducts(jsonData);
    console.log(jsonData);
  };

  useEffect(() => {
    fetchProducts(currentCategory);
  }, [currentCategory]);

  return (
    <div>
      <div className="mt-4 flex w-full items-center justify-between border-b border-primary text-xs">
        <div className="bg-primary p-2 font-bold text-primary-content">
          TRENDING ITEMS
        </div>
        <CategoryGroup onCategoryChange={setCurrentCategory} />
      </div>

      <div className="mx-auto flex max-w-[1064px] flex-wrap justify-between mt-4 gap-y-6">
        {products.map((product: any, idx: any) => (
          <TrendingItemsCard key={idx} product={product} />
        ))}
      </div>
    </div>
  );
};

export default TrendingItems;
