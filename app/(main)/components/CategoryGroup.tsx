"use client";
import React, { useEffect, useState } from "react";

const CategoryGroup = ({ onCategoryChange }:any) => {
  const [categoryList, setCategoryList] = useState<any>([]);

  const fetchCategories = async () => {
    const URL = "https://api.escuelajs.co/api/v1/categories?limit=4";

    const response = await fetch(URL);
    const jsonData = await response.json();
    setCategoryList(jsonData);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="flex gap-2">
      {categoryList.map((category: any, index: any) => (
        <button
          onClick={() => onCategoryChange(category.id)}
          className="btn-ghost p-1"
          key={index}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default CategoryGroup;
