import React from "react";

const SidebarCard = ({ product }: any) => {
  return (
    <div className="flex items-center gap-2">
      <div className="w-[80px] max-w-[80px] overflow-hidden">
        {/* <img src={product.images[0]} alt="product image" /> */}

        <img src="../assets/images/cardholder.jpg" alt="cardholder" />
      </div>
      <div className="flex w-[120px] flex-col">
        <div className="text-xs text-primary/40">{product.category.name}</div>
        <div className="font-medium text-accent">$ {product.price}</div>
        <div className="line-clamp-1 text-xs font-medium">{product.title}</div>
      </div>
    </div>
  );
};

export default SidebarCard;
